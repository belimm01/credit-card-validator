# syntax=docker/dockerfile:1

# --- Dependencies ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# --- Runtime ---
FROM node:20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY src ./src

# Writable log directory owned by the unprivileged runtime user
RUN mkdir -p logs && chown -R node:node /app

USER node
EXPOSE 3000
CMD ["node", "src/app.js"]
