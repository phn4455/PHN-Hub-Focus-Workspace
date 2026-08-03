let C,page="home",deferredPrompt,resumeTimer,lastHiddenAt=0;
const app=document.getElementById("app");
const STORE={
  page:"focus.currentPage",
  engine:"focus.searchEngine",
  launch:"focus.lastLaunch",
  handled:"focus.resumeHandled",
  resumeEnabled:"focus.resumeEnabled"
};
async function start(){
  C=await fetch("config.json",{cache:"no-store"}).then(r=>r.json());
  page=localStorage.getItem(STORE.page)||"home";
  if(!["home","email","calendar","drive","ai","projects","settings"].includes(page))page="home";
  history.replaceState({page},"",location.href);
  render();
  if("serviceWorker"in navigator)navigator.serviceWorker.register("service-worker.js");
}
function head(){return `<header><div><p class="eyebrow">YOUR DIGITAL STARTING POINT</p><h1>${C.workspace.name}</h1><p class="sub">${C.workspace.tagline}</p></div><div class="header-actions">${page!=="home"?'<button class="back" onclick="goBack()">Back</button><button class="home-action" onclick="goHome()">Home</button>':""}<button id="install" class="install" hidden>Install Focus Workspace</button></div></header>`}
function search(){return `<section class="searchbox"><h2>Search</h2><p>Choose where to search</p><form class="searchrow" onsubmit="doSearch(event)"><select id="engine" onchange="syncSearch(true)">${C.search.map((x,i)=>`<option value="${i}">${x.icon} ${x.label}</option>`).join("")}</select><input id="q" placeholder="What would you like to search for?"><button id="go">Search Google</button></form><p class="help">Search Google, ChatGPT, Gmail, Google Drive, OneDrive or NotebookLM from one place.<span class="return-note">External websites open in a new tab. Focus Workspace stays open for when you return.</span></p></section>`}
function homePage(){return `${head()}${search()}<section class="grid">${[
["email","&#128231;","Email","Choose an inbox"],["calendar","&#128197;","Calendar","Choose a calendar"],["drive","&#128193;","Drive","Open a folder"],["ai","&#129302;","AI","AI and building tools"],["projects","&#128203;","Projects","Active work"],["settings","&#9881;&#65039;","Settings","Workspace options"]].map(x=>`<button class="card" onclick="openPage('${x[0]}')"><span>${x[1]}</span><b>${x[2]}</b><small>${x[3]}</small></button>`).join("")}</section><section class="focus"><h2>Today's top three</h2><input id="t1" placeholder="First priority"><input id="t2" placeholder="Second priority"><input id="t3" placeholder="Third priority"><button onclick="clearTasks()">Clear today</button></section><footer>Version ${C.workspace.version}</footer>${resumePanel()}`}
function listPage(title,icon,items){return `${head()}<div class="page-title"><span>${icon}</span><h2>${title}</h2></div><div class="list">${items.map(x=>externalItem(x)).join("")}</div>${floatingHome()}${resumePanel()}`}
function externalItem(x){return `<a class="item" href="${x.url}" target="_blank" rel="noopener" onclick="rememberLaunch('${clean(x.label)}','${clean(x.url)}','${clean(page)}')"><span>${x.icon}</span><div><strong>${x.label}</strong><small>${x.email||"Open"}</small></div></a>`}
function settingsPage(){
  const enabled=resumeEnabled()?"checked":"";
  return `${head()}<div class="page-title"><span>&#9881;&#65039;</span><h2>Settings</h2></div><section class="settings-panel"><label class="setting-row"><span><strong>Focus Resume</strong><small>Show a calm reminder when you return from an external service.</small></span><input type="checkbox" ${enabled} onchange="setResumeEnabled(this.checked)"></label><p><strong>Windows startup</strong></p><p>A normal website cannot silently create a Windows Startup shortcut. If you want Focus Workspace to open when Windows starts, use the browser or Windows shortcut options and keep this workspace installed as a PWA.</p></section>${floatingHome()}${resumePanel()}`;
}
function render(){
  if(page==="home")app.innerHTML=homePage();
  if(page==="email")app.innerHTML=listPage("Email","&#128231;",C.email.map(x=>({...x,url:`https://mail.google.com/mail/?authuser=${encodeURIComponent(x.email)}`})));
  if(page==="calendar")app.innerHTML=listPage("Calendar","&#128197;",C.calendar.map(x=>({...x,url:x.url||`https://calendar.google.com/calendar/u/0/r?authuser=${encodeURIComponent(x.email)}`})));
  if(page==="drive")app.innerHTML=listPage("Drive","&#128193;",C.drive);
  if(page==="ai")app.innerHTML=listPage("AI","&#129302;",C.ai);
  if(page==="projects")app.innerHTML=listPage("Projects","&#128203;",C.projects);
  if(page==="settings")app.innerHTML=settingsPage();
  localStorage.setItem(STORE.page,page);
  loadTasks();
  wireInstall();
  if(page==="home")syncSearch(false);
}
function floatingHome(){return `<button class="floating-home" onclick="goHome()" ${page==="home"?"hidden":""}>Home</button>`}
function resumePanel(){return `<aside id="resume" class="resume" hidden aria-live="polite"></aside>`}
function openPage(p,push=true){page=p;if(push)history.pushState({page},"","#"+p);render();scrollTo(0,0)}
function goHome(push=true){page="home";if(push)history.pushState({page},"",location.pathname+location.search);render();scrollTo(0,0)}
function goBack(){if(page!=="home"&&history.length>1)history.back();else goHome()}
addEventListener("popstate",e=>{page=e.state&&e.state.page?e.state.page:"home";render();scrollTo(0,0)});
function syncSearch(save){
  const s=document.getElementById("engine");if(!s)return;
  const saved=localStorage.getItem(STORE.engine);
  if(!save&&saved!==null&&C.search[+saved])s.value=saved;
  const i=C.search[+s.value||0],q=document.getElementById("q"),b=document.getElementById("go");
  b.textContent=i.button;q.disabled=!i.query;q.placeholder=i.query?"What would you like to search for?":`${i.button} - no search term needed`;
  if(!i.query)q.value="";
  localStorage.setItem(STORE.engine,s.value);
}
function doSearch(e){
  e.preventDefault();
  const engine=document.getElementById("engine"),i=C.search[+engine.value||0],q=document.getElementById("q").value.trim();
  if(i.query&&!q)return document.getElementById("q").focus();
  const url=i.query?i.url.replace("{query}",encodeURIComponent(q)):i.url;
  rememberLaunch(i.label,url,"Search");
  open(url,"_blank","noopener");
}
function rememberLaunch(label,url,source){
  localStorage.setItem(STORE.launch,JSON.stringify({label,url,source,at:Date.now()}));
}
function loadTasks(){["t1","t2","t3"].forEach(id=>{const e=document.getElementById(id);if(e){e.value=localStorage.getItem(id)||"";e.oninput=()=>localStorage.setItem(id,e.value)}})}
function clearTasks(){["t1","t2","t3"].forEach(id=>{localStorage.removeItem(id);const e=document.getElementById(id);if(e)e.value=""})}
function wireInstall(){const b=document.getElementById("install");if(b&&deferredPrompt){b.hidden=false;b.onclick=async()=>{deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;b.hidden=true}}}
addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;wireInstall()});
function resumeEnabled(){return localStorage.getItem(STORE.resumeEnabled)!=="false"}
function setResumeEnabled(v){localStorage.setItem(STORE.resumeEnabled,v?"true":"false");if(!v)dismissResume()}
function checkResume(){
  if(!resumeEnabled())return;
  const raw=localStorage.getItem(STORE.launch);if(!raw)return;
  let launch;try{launch=JSON.parse(raw)}catch{return}
  if(!launch||!launch.at||localStorage.getItem(STORE.handled)===String(launch.at))return;
  if(Date.now()-launch.at>4*60*60*1000)return;
  showResume(launch);
}
function showResume(launch){
  const el=document.getElementById("resume");if(!el)return;
  el.innerHTML=`<h2>Welcome back</h2><p>You were using</p><strong>${launch.label}</strong><div class="resume-actions"><button onclick="continueResume()">Continue</button><button onclick="returnHomeFromResume()">Return Home</button><button class="dismiss" onclick="dismissResume()">Dismiss</button></div>`;
  el.hidden=false;
  clearTimeout(resumeTimer);
  resumeTimer=setTimeout(dismissResume,10000);
}
function dismissResume(){
  const raw=localStorage.getItem(STORE.launch);
  if(raw){try{const launch=JSON.parse(raw);if(launch&&launch.at)localStorage.setItem(STORE.handled,String(launch.at))}catch{}}
  const el=document.getElementById("resume");if(el)el.hidden=true;
  clearTimeout(resumeTimer);
}
function continueResume(){
  const raw=localStorage.getItem(STORE.launch);if(!raw)return dismissResume();
  let launch;try{launch=JSON.parse(raw)}catch{return dismissResume()}
  dismissResume();
  if(launch&&launch.url)open(launch.url,"_blank","noopener");
}
function returnHomeFromResume(){dismissResume();goHome()}
function clean(v){return String(v).replace(/\\/g,"\\\\").replace(/'/g,"\\'")}
addEventListener("visibilitychange",()=>{if(document.hidden)lastHiddenAt=Date.now()});
addEventListener("focus",()=>{if(!lastHiddenAt||Date.now()-lastHiddenAt>250)checkResume()});
addEventListener("keydown",e=>{
  if(e.altKey&&e.key.toLowerCase()==="h"){e.preventDefault();goHome()}
  if(e.altKey&&e.key.toLowerCase()==="s"){const q=document.getElementById("q");if(q){e.preventDefault();q.focus()}else{goHome();setTimeout(()=>document.getElementById("q")?.focus(),0)}}
  if(e.key==="Escape"&&page!=="home"){e.preventDefault();goHome()}
});
start();