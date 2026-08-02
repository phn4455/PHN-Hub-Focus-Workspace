# Focus Workspace
## Next Development Brief

Before writing any code, complete the following steps.

--------------------------------------------------------
STEP 1 – READ THE PROJECT DOCUMENTATION
--------------------------------------------------------

Read these documents in order:

1. docs/Master-Specification.md
2. docs/Agent-Instructions.md
3. docs/ROADMAP.md
4. docs/CHANGELOG.md
5. docs/PRODUCT-VISION.md, if it exists

Note:

docs/IDEAS.md is currently empty.
Do not rely on it unless content is added later.

--------------------------------------------------------
STEP 2 – REVIEW THE EXISTING CODEBASE
--------------------------------------------------------

Review the entire existing Focus Workspace codebase.

This is an EXISTING working application.

Do not create a new project.

Do not rewrite the application from scratch.

Do not redesign working screens unnecessarily.

Understand how the current application works before proposing changes.

Preserve all existing working functionality.

--------------------------------------------------------
STEP 3 – CURRENT PURPOSE
--------------------------------------------------------

This version is being developed for Patricia’s personal daily use first.

It is not yet:

- the public version
- the subscription version
- the white-label version
- the reseller version
- the customer workspace builder
- the team or enterprise version

The immediate goal is to make Patricia’s personal Focus Workspace polished, reliable and genuinely useful every day.

Only after the personal version works well should development move towards commercial versions.

--------------------------------------------------------
STEP 4 – CORE DESIGN PRINCIPLES
--------------------------------------------------------

Use the existing PHN Hub layout as the visual foundation.

Keep:

- calm colours
- large cards
- clear spacing
- simple typography
- large buttons
- minimal clicks
- minimal typing
- obvious navigation
- responsive design

The application must reduce cognitive load.

It should never become another crowded dashboard.

If there is a choice between adding features and keeping the interface simple, choose simplicity.

--------------------------------------------------------
STEP 5 – FEATURES TO PRESERVE
--------------------------------------------------------

Preserve all working features, including:

- Install button
- Home page
- Back button
- Home button
- Search
- Email page
- Calendar page
- Drive page
- AI page
- Projects page
- Settings page
- Today’s Top Three
- PWA installation
- Offline support
- Responsive layout
- Existing colours and card style

Do not remove or replace working functionality unless specifically approved.

--------------------------------------------------------
STEP 6 – SEARCH
--------------------------------------------------------

Keep Search near the top of the Home page.

Heading:

Search

Instruction:

Choose where to search

Google must remain the first and default destination.

Supported destinations:

1. Google
2. ChatGPT
3. Gmail
4. Google Drive
5. OneDrive
6. NotebookLM

The action button must change automatically depending on the selected destination.

Examples:

- Search Google
- Ask ChatGPT
- Search Gmail
- Search Google Drive
- Open OneDrive
- Open NotebookLM

Display this explanatory text:

Search Google, ChatGPT, Gmail, Google Drive, OneDrive or NotebookLM from one place.

Display this note underneath:

External websites open in a new tab.
Focus Workspace stays open for when you return.

Important:

Always open external websites in a new browser tab or window.

Never replace or close the Focus Workspace page.

Do not falsely claim that OneDrive or NotebookLM can be searched directly if the external service does not support that behaviour.

If direct search is not technically reliable, open the service instead.

--------------------------------------------------------
STEP 7 – NAVIGATION
--------------------------------------------------------

Navigation must always be obvious.

Every internal page should include:

- Back button
- Home button
- large, visible controls
- keyboard accessibility
- simple navigation
- no hidden menus

Add a floating Home button on every internal page.

Floating Home button requirements:

- label: 🏠 Home
- fixed near the bottom-right corner
- always visible
- works on desktop, tablet and mobile
- does not cover page content
- returns directly to the Home page

--------------------------------------------------------
STEP 8 – EXTERNAL LINKS AND RETURNING TO THE HUB
--------------------------------------------------------

All external links must open separately.

Focus Workspace must remain open.

Add a clear note so users understand this behaviour.

The browser tab title should make the workspace easy to find, for example:

🏠 Focus Workspace

or:

⬅ Focus Workspace

Do not use flashing or distracting effects.

--------------------------------------------------------
STEP 9 – FOCUS RESUME
--------------------------------------------------------

Create a calm Focus Resume feature.

Before opening an external service, remember what the user launched.

Examples:

- NotebookLM
- Gmail
- Google Drive
- ChatGPT
- Calendar
- AI
- Projects
- Property

When Focus Workspace regains focus after the user has been using another browser tab, show a small panel.

Example:

Welcome back

You were using:

NotebookLM

Offer these choices:

- Continue
- Return Home
- Dismiss

Requirements:

- calm and unobtrusive
- no flashing
- no loud animation
- easy to dismiss
- should disappear automatically after a reasonable period if ignored
- must not repeatedly interrupt the user

--------------------------------------------------------
STEP 10 – REMEMBER CONTEXT
--------------------------------------------------------

Remember and restore:

- current internal page
- last launched external service
- last selected search destination
- Today’s Top Three
- current project
- workspace settings
- theme preference
- accessibility preferences

Use appropriate local storage where practical.

Do not store passwords.

Do not store sensitive authentication information.

A normal PWA cannot reliably control or restore the physical Windows window position and size in all browsers.

Do not promise behaviour that browsers do not support.

--------------------------------------------------------
STEP 11 – EMAIL
--------------------------------------------------------

Keep all inboxes separate.

Do not merge email accounts.

Display these accounts:

- Personal  
  patricia.nation@gmail.com

- Property  
  propertyphn4455@gmail.com

- Newsletters  
  pnation909@gmail.com

- Work  
  silvanus4455@gmail.com

- Geranium Hub  
  thegeraniumhub@gmail.com

- Other Patricia  
  nation.patricia@gmail.com

- Hazel  
  hazel.nation@gmail.com

Each button should open the correct Gmail account separately.

No forwarding.

No combined inbox.

Do not request, store or handle email passwords.

--------------------------------------------------------
STEP 12 – CALENDAR
--------------------------------------------------------

Display only the calendars Patricia actively uses:

- Personal  
  patricia.nation@gmail.com

- Property  
  propertyphn4455@gmail.com

- Newsletters  
  pnation909@gmail.com

- Combined view

Do not add the other email accounts as calendars unless requested later.

--------------------------------------------------------
STEP 13 – DRIVE
--------------------------------------------------------

Keep the Drive page.

Support Google Drive and OneDrive.

Google Drive shortcuts should eventually link directly to the real folders.

Current folder structure:

- 00 Inbox
- 01 Projects
- 02 Business
- 03 Property
- 04 Personal
- 05 Mum
- 06 Photos
- 07 Archive
- 90 Templates
- 99 Temp

If the exact Google Drive folder URLs are not yet available, retain clear editable placeholders.

Do not invent folder IDs.

Future architecture may support:

- Dropbox
- SharePoint
- iCloud
- Box

Do not build those integrations yet.

--------------------------------------------------------
STEP 14 – AI PAGE
--------------------------------------------------------

Keep these tools:

- ChatGPT
- Codex
- NotebookLM
- GitHub

Prepare the configuration architecture so future tools can be added without rewriting the page.

Possible future tools:

- Claude
- Gemini
- Microsoft Copilot
- Perplexity

Do not add them to Patricia’s current screen unless requested.

--------------------------------------------------------
STEP 15 – PROJECTS PAGE
--------------------------------------------------------

Keep the Projects page configurable.

Current projects may include:

- Focus Workspace
- AI Document Knowledge
- Google Business Optimiser
- Geranium Hub
- Community Magazine
- PHN Inventories
- Property

Each project should eventually be able to link to its relevant folder, document, AI conversation or tool.

Do not overcrowd the Home page with every project.

Projects should remain inside the Projects section.

--------------------------------------------------------
STEP 16 – TODAY’S TOP THREE
--------------------------------------------------------

Keep Today’s Top Three.

Requirements:

- simple
- large text fields
- minimal typing
- saved automatically
- restored when the app reopens
- clear button
- no complicated task-management system

Do not turn this into a full project-management tool.

--------------------------------------------------------
STEP 17 – INSTALL AND OFFLINE SUPPORT
--------------------------------------------------------

Retain the Install button.

Continue supporting installation as a PWA.

Keep the application shell available offline wherever practical.

Use proper cache versioning so users receive new versions instead of being stuck on old cached files.

Do not cache personal external-account content.

--------------------------------------------------------
STEP 18 – WINDOWS STARTUP
--------------------------------------------------------

Patricia would like the option for Focus Workspace to open when Windows starts.

Important technical limitation:

A normal website or PWA cannot silently create a Windows Startup shortcut by itself.

Do not claim it can.

Provide a safe and clearly documented setup method.

Possible methods include:

- enabling auto-start when installing the PWA, if the browser offers it
- manually placing a shortcut in the Windows Startup folder
- providing an optional Windows setup script later

Do not create or run a Windows script without clear user approval.

The setting inside Focus Workspace may explain or guide the setup, but it must not falsely imply the website can control Windows startup directly.

--------------------------------------------------------
STEP 19 – STARTUP EXPERIENCE
--------------------------------------------------------

Prepare a calm startup experience.

Example:

Good morning Patricia

Today’s Top Three

Continue where you left off

Current project

Continue button

Do not add news, social media, stock prices or distracting widgets.

Calendar summaries and recent work may be considered later, but only if they remain simple and reliable.

--------------------------------------------------------
STEP 20 – SETTINGS
--------------------------------------------------------

Current and near-future settings should include:

- workspace name
- owner name
- default search destination
- theme
- larger text
- high contrast
- reduced animation
- startup guidance
- Focus Resume on/off

Keep settings simple.

Do not expose technical configuration unnecessarily.

--------------------------------------------------------
STEP 21 – ACCESSIBILITY
--------------------------------------------------------

The application should be suitable for users with ADHD and users who prefer simple technology.

Requirements:

- large buttons
- clear text
- good contrast
- keyboard navigation
- visible focus states
- no hidden essential controls
- mobile-friendly layout
- reduced-motion support
- minimal distractions

Keyboard shortcuts:

- Alt + H: Home
- Alt + S: Focus the Search box
- Escape: Return to the Home page from an internal page

Do not override browser shortcuts unsafely.

--------------------------------------------------------
STEP 22 – DO NOT BUILD YET
--------------------------------------------------------

Do not build these features during this version:

- public account system
- paid subscriptions
- licensing
- white-label dashboard
- reseller controls
- team edition
- enterprise administration
- template marketplace
- customer workspace builder
- cloud synchronisation between users
- unified email inbox
- advanced calendar integration

The architecture may be prepared for future expansion, but unfinished commercial features must not appear in Patricia’s personal workspace.

--------------------------------------------------------
STEP 23 – FUTURE COMMERCIAL DIRECTION
--------------------------------------------------------

Future versions may include:

- free core version
- paid premium extras
- done-for-you setup
- white-label partner version
- workspace templates
- ADHD workspace
- business workspace
- property workspace
- student workspace
- family workspace
- simple workspace
- community or charity workspace

Do not build these yet.

The first priority is proving that Patricia uses the personal workspace regularly and finds it valuable.

--------------------------------------------------------
STEP 24 – CODE QUALITY
--------------------------------------------------------

Keep the code:

- readable
- modular
- documented
- easy to configure
- free of unnecessary duplication

Prefer configuration files over hard-coded customer details where practical.

Do not introduce a complicated framework unless there is a strong, explained reason.

The existing application is small and simple.

Preserve that advantage.

--------------------------------------------------------
STEP 25 – VERSION CONTROL
--------------------------------------------------------

Use semantic versioning.

The current stable foundation is approximately:

v2.1.0

The next navigation and Focus Resume release should be proposed as:

v2.2.0

Before changing code:

- review the current version
- explain the plan
- identify risks
- confirm which files will change

After implementation:

- update README.md
- update docs/CHANGELOG.md
- update the displayed version number
- explain how to test the release

--------------------------------------------------------
STEP 26 – BEFORE WRITING CODE
--------------------------------------------------------

Before making changes, produce a Development Review containing:

1. A summary of the current application.
2. Strengths of the current design.
3. Weaknesses.
4. Technical debt.
5. Technical limitations.
6. Risks to existing functionality.
7. Proposed changes for Version 2.2.
8. Files expected to change.
9. Testing plan.

Do not write code until Patricia approves the plan.

--------------------------------------------------------
STEP 27 – AFTER COMPLETION
--------------------------------------------------------

At the end of the development work, provide:

1. Summary of work completed.
2. Version number.
3. Files changed.
4. Why each file changed.
5. Test results.
6. Known limitations.
7. Rollback instructions.
8. Recommended next step.

--------------------------------------------------------
LONG-TERM VISION
--------------------------------------------------------

Focus Workspace is not merely a browser homepage.

It is intended to become a Personal Workspace Platform.

The long-term experience should be:

1. Turn on the computer.
2. Sign in.
3. Open Focus Workspace automatically if the user enabled it.
4. See one calm starting screen.
5. Access email, calendar, files, AI and projects.
6. Return to Focus Workspace without losing context.
7. Know what to do next.

For now, build only Patricia’s personal version.

Make it polished, dependable, calm and enjoyable to use.

Quality is more important than the number of features.

--------------------------------------------------------
FINAL INSTRUCTION
--------------------------------------------------------

Act as a senior UX designer, senior full-stack engineer and careful product developer.

Do not chase features.

Reduce mental effort.

Preserve what already works.

Make one controlled improvement at a time.

When there is a trade-off between cleverness and simplicity, choose simplicity.
