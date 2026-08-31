# Server

Express API that validates credit card numbers using Luhn's algorithm.
Written as ES modules and runs on Node.js 20+.

## Setup

```bash
npm install
cp .env.example .env   # optional: override PORT / CLIENT_ORIGIN
```

## Scripts

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `npm run dev`    | Start with file watching (http://localhost:3000) |
| `npm start`      | Start the server                                 |
| `npm test`       | Run the Jest unit tests                          |
| `npm run lint`   | Lint with ESLint                                 |
| `npm run format` | Format with Prettier                             |

## API

`GET /api/validate/:creditCardNumber`

Numeric input returns `200`:

```json
{ "isValid": true }
```

Non-numeric input returns `400`:

```json
{ "error": "Credit card number must be numeric" }
```
