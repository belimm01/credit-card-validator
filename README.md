# Credit Card Validator

A small full-stack app that checks whether a credit card number is valid using
Luhn's algorithm. A React frontend collects the number and calls an Express API
that performs the validation.

## Architecture

```
client/  React 18 + Vite single-page app (styled-components, axios)
server/  Express API exposing GET /api/validate/:creditCardNumber
```

The browser posts a number to the API, which returns `{ "isValid": true|false }`
for numeric input or `400 { "error": "Credit card number must be numeric" }`
otherwise.

## Prerequisites

- Node.js 20+ and npm 10+ (for local development)
- Docker with Compose v2 (for the containerised run)

## Quick start (Docker)

```bash
docker compose up --build -d
```

- Frontend: http://localhost
- API: http://localhost:3000/api/validate/49927398716

Stop with `docker compose down`.

## Local development

Run the API and the web app in two terminals.

**Server**

```bash
cd server
npm install
npm run dev        # http://localhost:3000
```

**Client**

```bash
cd client
npm install
npm run dev        # http://localhost:5173
```

The Vite dev server proxies `/api` to `http://localhost:3000`, so no extra
configuration is needed for local development. Copy `.env.example` to `.env` in
each package if you need to override defaults (API port / CORS origin on the
server, backend URL on the client).

## Useful scripts

Both packages expose the same tooling:

| Command | Description |
| --- | --- |
| `npm run lint` | ESLint (flat config) |
| `npm run format` | Format with Prettier |
| `npm test` | Server unit tests (Jest) |
| `npm run build` | Client production build |

## API

`GET /api/validate/:creditCardNumber`

```json
{ "isValid": true }
```

Non-numeric input returns `400`:

```json
{ "error": "Credit card number must be numeric" }
```
