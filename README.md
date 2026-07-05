# TripSync

A full-stack group trip companion — split expenses, chat in real time, manage checklists, and get AI-powered suggestions for your trips, dinners, and day-outs.

## 🚧 Status

**Phase 1 (Frontend) — HTML & CSS complete, fully responsive ✅**
JavaScript interactivity in progress.

## Tech Stack

| Phase   | Stack                                     |
|---------|-------------------------------------------|
| Phase 1 | HTML, CSS, Vanilla JavaScript             |
| Phase 2 | Firebase (Auth + Firestore + Realtime DB) |
| Phase 3 | Django + PostgreSQL + Gemini AI           |

## Pages

- `login.html` — Login & Sign Up (toggle-based form)
- `index.html` — Dashboard with plan cards (responsive grid, FAB, bottom nav)
- `trip.html` — Trip detail hub: Home, Chat, Expenses, Checklist tabs
- `ai.html` — AI-powered destination/plan suggestions (vibe chips, budget toggle)

## Features (so far)

- Fully responsive, mobile-first layout across all 4 pages
- Custom `.responsive-shell` wrapper for consistent app-like feel
- Dashboard grid with adaptive card layout (single-column on small screens)
- Vibe chip selection using `:checked + label` pattern (no JS needed)
- Tab-based navigation for trip sections
- Login/Signup toggle UI

## Roadmap

- [ ] JavaScript interactivity (show/hide, tab switching, form handling)
- [ ] localStorage-based data persistence
- [ ] Firebase Auth + Firestore integration
- [ ] Real-time chat and expense sync
- [ ] Django backend + Gemini AI suggestions

## Folder Structure

```
TripSync/
├── login.html
├── index.html
├── trip.html
├── ai.html
├── assets/
├── css/
│   └── style.css
└── js/
    ├── login.js
    ├── trip.js
    └── ai.js
```