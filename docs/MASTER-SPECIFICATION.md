# FOCUS WORKSPACE
## MASTER DEVELOPMENT SPECIFICATION
### Version 2

# IMPORTANT

You are continuing development of an EXISTING application.

DO NOT create a new project.

DO NOT redesign the application.

DO NOT rewrite working code unnecessarily.

Preserve everything that already works.

Only improve the existing application.

If an existing design is better than a new one, keep the existing design.

Always favour simplicity over adding features.

If a previous version works better, use that version.

--------------------------------------------------------

PROJECT NAME

Focus Workspace

--------------------------------------------------------

PROJECT PURPOSE

Focus Workspace is intended to become the user's digital home.

Instead of opening numerous applications every morning, the user opens one workspace.

From that workspace they access everything they need.

The software should reduce cognitive load.

It should be especially suitable for users with ADHD or anyone wanting a calmer digital workspace.

--------------------------------------------------------

DESIGN PHILOSOPHY

The software should feel calm.

Large buttons.

Minimal text.

Minimal clicks.

No clutter.

No unnecessary animation.

No hidden menus.

Everything important should be one click away.

Every new feature must make the application easier to use.

Never add complexity unless there is a very clear benefit.

--------------------------------------------------------

CURRENT DESIGN

Use the existing PHN Hub layout as the design foundation.

Retain:

• Install button

• PHN Hub colour scheme

• Large cards

• Simple spacing

• Clean typography

• Responsive layout

The application should feel like an improved PHN Hub rather than a completely different product.

--------------------------------------------------------

KEEP ALL EXISTING FEATURES

Preserve:

Install button

Home page

Home button

Back button

Search

Email page

Calendar page

Drive page

AI page

Projects page

Settings page

Today's Top Three

Offline support

PWA support

Responsive design

--------------------------------------------------------

SEARCH

Heading

Search

Subtitle

Choose where to search

Default search engine

Google

Supported destinations

Google

ChatGPT

Gmail

Google Drive

OneDrive

NotebookLM

Future

Claude

Gemini

Copilot

Perplexity

The Search button must change automatically.

Examples

Search Google

Ask ChatGPT

Search Gmail

Search Google Drive

Open OneDrive

Open NotebookLM

Display underneath

Search Google, ChatGPT, Gmail, Google Drive, OneDrive or NotebookLM from one place.

Display underneath

External websites open in a new tab.

Focus Workspace stays open for when you return.

Always open external websites in a NEW TAB.

Never replace Focus Workspace.

--------------------------------------------------------

NAVIGATION

Every page except Home should contain:

Home button

Back button

Large buttons

Simple navigation

Keyboard accessible

No hidden controls.

--------------------------------------------------------

FLOATING HOME BUTTON

Display

🏠 Home

Bottom right

Always visible

Desktop

Tablet

Mobile

Do not cover content.

--------------------------------------------------------

INSTALL

Retain the Install button.

Support PWA installation.

Support offline caching wherever practical.

--------------------------------------------------------

FOCUS RESUME

When Focus Workspace regains focus after the user has been using another website

Display

Welcome back

You were using

Example

NotebookLM

AI

Drive

Projects

Offer

Continue

Return Home

Dismiss automatically after a few seconds.

--------------------------------------------------------

REMEMBER CONTEXT

Remember

Current page

Last search engine

Today's Top Three

Window size

Window position

Theme

User settings

Restore automatically.

--------------------------------------------------------

WINDOWS STARTUP

Provide an option during setup.

Would you like Focus Workspace to open automatically when Windows starts?

Yes

No

If enabled

Create Windows Startup shortcut.

Do not launch multiple copies.

If already running

Bring existing window to the front.

--------------------------------------------------------

STARTUP EXPERIENCE

Example

Good morning Patricia

Today's Top Three

Continue where you left off

Calendar summary

Recent work

Continue button

The experience should feel calm.

--------------------------------------------------------

EMAIL

Separate Email page.

Display every account separately.

Do not merge inboxes.

Future option

Unified inbox.

--------------------------------------------------------

CALENDAR

Separate Calendar page.

Display calendars separately.

Future option

Combined calendar.

--------------------------------------------------------

DRIVE

Support

Google Drive

OneDrive

Future

Dropbox

SharePoint

iCloud

--------------------------------------------------------

AI PAGE

Current

ChatGPT

Codex

NotebookLM

GitHub

Future

Claude

Gemini

Copilot

Perplexity

--------------------------------------------------------

PROJECTS PAGE

Project launcher.

Configurable.

--------------------------------------------------------

SETTINGS

Workspace name

Owner

Default search engine

Startup option

Theme

Future settings

--------------------------------------------------------

WORKSPACE BUILDER

Prepare architecture only.

Do NOT build yet.

Future users should answer questions.

Examples

Which email?

Which calendar?

Which cloud storage?

Which AI?

Which search engines?

Automatically build a personalised workspace.

--------------------------------------------------------

FUTURE TEMPLATES

Architecture only.

Possible templates

ADHD

Business

Property

Student

Family

Healthcare

Retirement

Creator

Simple

Custom

--------------------------------------------------------

ACCESSIBILITY

Large text

High contrast

Keyboard shortcuts

Simple navigation

Suitable for ADHD users

--------------------------------------------------------

KEYBOARD SHORTCUTS

Alt + H

Home

Alt + S

Search

Esc

Return Home

--------------------------------------------------------

ANIMATION

Very subtle.

No flashing.

No distracting movement.

Fast.

--------------------------------------------------------

PERFORMANCE

Fast loading.

Offline support.

Efficient caching.

--------------------------------------------------------

CODE QUALITY

Modular code.

Document functions.

Avoid duplication.

Keep code readable.

--------------------------------------------------------

VERSIONING

Use semantic versioning.

Examples

v2.1.0

v2.2.0

v2.3.0

Provide a changelog.

--------------------------------------------------------

IMPORTANT DEVELOPMENT RULES

You are NOT building a new project.

You are continuing an existing application.

Never remove working functionality.

Never redesign purely for appearance.

Only improve usability.

Keep the PHN Hub look and feel.

Preserve backwards compatibility wherever practical.

Explain major design decisions.

If a better approach exists, explain it before implementing it.

--------------------------------------------------------

LONG TERM VISION

This is NOT a browser homepage.

This is a Personal Workspace Platform.

The user should be able to:

Turn on their computer.

Sign in.

Focus Workspace opens automatically (if enabled).

Everything they need is available from one calm workspace.

The software should become the user's digital home.

--------------------------------------------------------

YOUR ROLE

Act as:

Senior UX Designer

Senior Full Stack Engineer

Senior Product Designer

Your objective is NOT to add features.

Your objective is to reduce mental effort.

Every version should be noticeably better than the previous version while remaining simple.

If there is ever a conflict between adding more features and keeping the interface simple, ALWAYS choose simplicity.

Before making significant changes:

1. Review the existing codebase.
2. Preserve all working functionality.
3. Propose the changes.
4. Implement them incrementally.
5. Update the README and CHANGELOG.
6. Bump the version number.
7. Ensure the application remains stable before adding the next feature.
