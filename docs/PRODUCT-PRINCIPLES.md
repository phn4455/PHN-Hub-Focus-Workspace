# Focus Workspace
## Product Principles

These principles guide every product, design and development decision.

If a proposed feature conflicts with these principles, it should be changed, postponed or rejected.

---

# 1. Calm Over Clever

Focus Workspace should feel calm and immediately understandable.

Do not add something merely because it is technically impressive.

A simple feature that works reliably is more valuable than a clever feature that creates confusion.

---

# 2. Simplicity Over Features

More features do not automatically make a better product.

Every feature adds:

- visual complexity
- maintenance
- decisions for the user
- possible failure points

Only add a feature when it provides a clear and meaningful benefit.

---

# 3. Reduce Mental Effort

The main purpose of Focus Workspace is to reduce cognitive load.

The user should not need to remember:

- where a file is stored
- which email account to open
- which tab they were using
- which application they need
- what they were doing before an interruption

The workspace should help the user continue with minimal thought.

---

# 4. One Clear Starting Point

Focus Workspace should become the user’s digital home.

The user should be able to:

1. Open Focus Workspace.
2. See what matters.
3. Choose what to do.
4. Begin with minimal delay.

The Home page should remain calm and uncluttered.

---

# 5. The Home Page Is Sacred

The Home page must not become a storage area for every possible button.

It should contain only the small number of categories needed to begin work.

Examples:

- Search
- Email
- Calendar
- Drive
- AI
- Projects
- Today’s Top Three
- Settings

Detailed items belong inside their relevant section.

The Home page is a hallway with clear doors, not a room filled with everything the user owns.

---

# 6. One Click Where Practical

Important destinations should normally be one click away.

Do not create unnecessary menus, confirmations or intermediate screens.

However, do not sacrifice safety simply to remove a click.

---

# 7. Obvious Navigation

The user should always know:

- where they are
- how to go back
- how to return Home
- what will happen when they click something

Every internal page should have clear Back and Home controls.

Do not hide essential navigation.

---

# 8. Never Let the User Feel Lost

External websites should open separately so Focus Workspace remains available.

When the user returns, the workspace should help them remember what they were doing.

Focus Resume should be supportive, not intrusive.

The user should always have a clear route back to their workspace.

---

# 9. Preserve What Works

Do not replace a working feature simply because a new design looks more modern.

Improvements should build on successful behaviour.

If the previous version is easier to use, keep the previous design.

Every release must be at least as usable as the version it replaces.

---

# 10. Large, Clear and Accessible

Use:

- large buttons
- readable text
- clear labels
- good contrast
- generous spacing
- visible keyboard focus
- mobile-friendly layouts

Do not rely only on icons when a written label would improve understanding.

---

# 11. ADHD-Friendly by Design

ADHD support should be part of the core design, not a decorative label.

The product should:

- reduce choices
- reduce distractions
- help users restart after interruption
- preserve context
- avoid crowded screens
- minimise typing
- make the next action clear
- provide gentle reminders without nagging

Do not add flashing, noisy alerts or unnecessary movement.

---

# 12. Minimal Typing

Where practical, users should select rather than type.

Forms should be short.

Setup should use:

- clear choices
- sensible defaults
- checkboxes or radio buttons
- one question at a time where useful
- visible progress

Never ask users for information the product does not genuinely need.

---

# 13. Honest Functionality

Do not claim the product can do something that browsers, operating systems or external services do not support.

Examples:

- Do not claim to search NotebookLM when the link only opens NotebookLM.
- Do not claim a website can silently configure Windows Startup.
- Do not imply inboxes are combined when they remain separate.

Explain limitations clearly and simply.

Trust is more important than making the product sound impressive.

---

# 14. Privacy by Default

Do not collect or store passwords.

Do not unnecessarily store sensitive information.

Authentication should remain with trusted providers such as Google or Microsoft.

Store only the minimum information needed to operate the workspace.

Personal data must never be exposed in a public template or shared customer version.

---

# 15. Configuration Over Rewriting

The same core application should support different users through configuration.

Names, accounts, services, projects, colours and links should be configurable wherever practical.

Avoid hard-coding customer-specific details into the main interface code.

This makes the product easier to:

- personalise
- maintain
- test
- white-label
- update

---

# 16. Personal First

Build Patricia’s personal version first.

Use it in real daily life.

Observe:

- what is genuinely useful
- what is ignored
- what causes confusion
- what saves time
- what repeatedly breaks

Do not build commercial features before the core personal experience is proven.

---

# 17. Free Must Still Be Useful

A future free version should provide genuine value.

It should not be an unusable demonstration designed only to force payment.

Paid features should offer meaningful additional value, such as:

- more accounts
- more workspaces
- advanced customisation
- syncing
- templates
- support
- white-label options

Do not remove essential usability from the free version.

---

# 18. Charge for Continuing Value

A subscription should only be used when the product continues providing value after initial setup.

Possible continuing value includes:

- syncing
- backup
- updates
- premium templates
- advanced features
- support
- managed deployment
- white-label administration

Do not charge monthly merely because the software exists.

---

# 19. White-Label Without Losing Quality

Future partners may customise:

- product name
- logo
- colours
- available templates
- support details
- web address

However, white-label customisation must not allow partners to create cluttered or inaccessible workspaces.

Core usability principles must remain enforced.

---

# 20. Templates Are Starting Points

Future templates may include:

- ADHD
- Business
- Property
- Student
- Family
- Community
- Charity
- Retirement
- Creator
- Simple

Templates should help users start quickly.

They should not lock users into a rigid setup.

Users should be able to personalise a template without needing technical knowledge.

---

# 21. Progressive Disclosure

Show users only what they need at the current stage.

Advanced options should remain available but should not dominate the main screen.

Begin simple.

Reveal complexity only when the user requests it.

---

# 22. Sensible Defaults

The product should work well before the user changes any settings.

Examples:

- Google first in Search
- external links open separately
- calm default colours
- standard large cards
- minimal Home page
- reduced animation

Good defaults reduce setup effort and decision fatigue.

---

# 23. User Control

Users should be able to choose:

- what appears in their workspace
- which services they use
- their default search destination
- whether Focus Resume is enabled
- whether the workspace opens on startup
- theme and accessibility preferences

Do not force behaviours that may be disruptive.

---

# 24. Reliable Before Advanced

Prioritise:

1. reliability
2. clarity
3. speed
4. accessibility
5. additional features

A smaller application that works every day is better than a powerful application that behaves unpredictably.

---

# 25. Fast and Lightweight

Focus Workspace should load quickly.

Avoid unnecessary frameworks, scripts and large dependencies.

Keep offline caching controlled and versioned correctly.

Do not allow old cached versions to make updates confusing.

---

# 26. One Controlled Improvement at a Time

Do not change many unrelated parts of the product in one release.

Each version should have a clear purpose.

Examples:

- navigation improvement
- Focus Resume
- search improvement
- setup improvement

Smaller controlled releases are easier to test and safer to reverse.

---

# 27. Test With Real Use

A feature is not complete merely because the code runs.

Test whether:

- the purpose is obvious
- the user can find it
- the user can return from it
- it works on desktop and mobile
- it creates any confusion
- it genuinely saves effort

Real usability matters more than technical completion.

---

# 28. Make Failure Recoverable

Users will click the wrong thing, close tabs and misunderstand instructions.

The application should make recovery easy.

Provide:

- visible Home controls
- clear Back controls
- preserved tasks
- saved context
- rollback instructions for updates
- helpful, non-technical error messages

Never punish the user for making a mistake.

---

# 29. Explain Before Changing

Before significant development work:

1. explain the proposed change
2. explain why it is useful
3. identify risks
4. identify limitations
5. wait for approval where required

The Product Owner should understand what will happen before working behaviour is changed.

---

# 30. Patricia Is the Product Owner

Patricia decides:

- product purpose
- priorities
- user experience
- commercial direction
- which features are approved

The developer or Agent should:

- recommend improvements
- identify risks
- explain technical limitations
- implement approved changes
- preserve the product principles

Technical advice is welcome, but product decisions belong to the Product Owner.

---

# Decision Test

Before adding or changing anything, ask:

1. Does this reduce mental effort?
2. Is its purpose immediately clear?
3. Does it keep the Home page calm?
4. Can the user easily return?
5. Is the behaviour honest?
6. Does it preserve what already works?
7. Is it accessible?
8. Is it genuinely useful in daily life?
9. Can it be configured rather than hard-coded?
10. Is this the smallest reliable solution?

If several answers are no, the feature should not be built in its current form.

---

# Product Motto

One place.

Zero clutter.

Start your day.

---

# Non-Negotiable Promise

Focus Workspace will not try to become everything.

It will help users organise, launch and return to the tools they already use.

Every improvement must make the user’s digital life feel simpler, calmer and easier to continue.
