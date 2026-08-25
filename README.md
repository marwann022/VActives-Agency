# Program Designer

Program Designer is an interactive Vue.js frontend prototype for building, validating, previewing, and publishing academic programs.

The experience covers the full program-design workflow: a product-level Home page, first-time onboarding, program structure editing, nested and choice groups, prerequisites, participant-path simulation, validation, and review before publishing.

![Program Designer Home](frontend/home-implementation-final.png)

## Highlights

- Home launchpad with recent programs, progress, and activity
- Dedicated loading and no-program onboarding states
- Hierarchical program structure with collapsible nested groups
- Sequential and choice-group configuration
- Overview and Rules editing modes
- Add Group and Add Step workflows
- Prerequisite selection, impact review, and circular-dependency errors
- Participant-path simulation for AI, IT, and Programming
- Validation warnings and review-before-publish flow
- Responsive desktop layout with keyboard-focus states

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vite.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- Urbanist and Instrument Sans via Fontsource
- A lightweight Worker for static hosting compatibility

## Getting Started

Requirements:

- Node.js 18 or newer
- npm

```bash
cd frontend
npm install
npm run dev
```

Open the local address printed by Vite. The default entry shows the loading state briefly and then opens Home.

## Available States

The prototype uses hash-based navigation so its main states can be opened directly:

| State | Route |
| --- | --- |
| Home | `#/home` |
| Program editor | `#/program` |
| No programs | `#/empty-programs` |
| Loading | `#/loading` |

The primary interactions also connect these states naturally:

- Select **Continue designing** to open the existing program.
- Select **Create Program** to create a named program and enter its empty editor.
- Select the Program Designer logo to return Home.

## Build and Test

```bash
cd frontend
npm run build
npm run test:sites
```

The production build is generated in `frontend/dist/`. Generated dependencies and build output are excluded from Git.

## Project Structure

```text
frontend/
├── public/
│   └── assets/                 # Brand assets
├── src/
│   ├── App.vue                 # Product UI and interactions
│   ├── main.js                 # Vue entry point
│   └── styles.css              # Design system and responsive layout
├── tests/                      # Hosting worker tests
├── worker/                     # Static hosting worker
├── audit/                      # UX audit evidence
├── design-qa.md                # Final visual QA report
├── ux-audit.md                 # Product experience audit
└── package.json
```

## Design Sources and QA

The implementation was grounded in the supplied Figma design and supporting product-design references. The selected Home direction and final comparison are included in the repository:

- [Selected Home reference](frontend/home-option-3-reference.png)
- [Final Home implementation](frontend/home-implementation-final.png)
- [Home QA comparison](frontend/home-qa-comparison-final.png)
- [Design QA report](frontend/design-qa.md)
- [UX audit](frontend/ux-audit.md)

The final design-QA result is **passed**, and the hosting test suite passes 4/4 tests.

## Scope

This repository currently contains a frontend mock with realistic local interactions and mock data. Authentication, persistent storage, backend APIs, and external integrations are intentionally outside the current scope.
