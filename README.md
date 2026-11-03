# Skill Swap

Live: https://skill-swap-963e6.web.app/

A skill-sharing site where people browse skill offers, view details and request a session. Built with React, Vite and Firebase Authentication.

## Features

- Sign up with name, photo URL, email and password, or sign in with Google.
- Password rule: at least 6 characters with upper and lower case letters, plus a show/hide toggle.
- Protected routes for skill details and profile. Logged-out users go to login and come back to the page they asked for.
- Profile page to update display name and photo.
- Forgot password page that sends a Firebase reset email.
- Skill listings loaded from `public/skill.json` through React Router loaders.
- Session booking form (front-end demo: it shows a confirmation toast and nothing is stored).

## Stack

React 19, Vite 7, React Router 7, Firebase Authentication 12, Context API, Tailwind CSS 4, DaisyUI 5, Framer Motion, AOS, react-hot-toast. Hosted on Firebase Hosting.

## Run locally

```bash
git clone https://github.com/Nidan73/skill-swap.git
cd skill-swap
npm install
```

Create `.env.local` with your Firebase web app config:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Then start the dev server:

```bash
npm run dev
```

## Scripts

- `npm run dev`: Vite dev server
- `npm run build`: production build
- `npm run preview`: preview the build
- `npm run lint`: ESLint

## Project structure

```
public/skill.json        skill data
src/app/Context/         auth and AOS providers
src/app/Router/          routes and PrivateRoute
src/pages/               home, login, sign up, profile, forgot password, skill page
src/Components/          skill cards, skill details, navbar, footer, loader
src/Firebase/            Firebase config
```
