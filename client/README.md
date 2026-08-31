# Client

React 18 single-page app built with Vite. Collects a credit card number and
calls the backend API to check its validity.

## Setup

```bash
npm install
cp .env.example .env   # optional: set VITE_BE_URL for non-proxied setups
```

## Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server (http://localhost:5173) |
| `npm run build`   | Build the production bundle into `build/`         |
| `npm run preview` | Preview the production build locally              |
| `npm run lint`    | Lint with ESLint                                  |
| `npm run format`  | Format with Prettier                              |

## Backend URL

During development the Vite dev server proxies `/api` to
`http://localhost:3000`, so no configuration is required. For production builds
set `VITE_BE_URL` to the absolute backend URL; it is baked into the bundle at
build time.
