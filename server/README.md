## Getting Started

## Pre-requirements
Run`npm install` to install all necessary dependencies

## Run the server locally
First, run the development server:

```bash
npm install & \
npm run dev
```

The server is running on [http://localhost:3000](http://localhost:3000)

## Available Scripts
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Runs the app tests.\

### `npm prettier`

Runs code formatting for a whole project.\

## API Documentation:

`api/validate/49927398716`

### Description:

if the creditCardNumber is a numeric string return an HTTP 200 response with
a JSON body as below where isValid indicates if it is a valid credit card
number:

```
{
   "isValid": true/false
}
```

if the creditCardNumber is not a numeric string (e.g. a54g65) return a 400
HTTP response with a JSON body as below:

```
{
   "error": "Credit card number must be numeric"
}
```
