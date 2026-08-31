# syntax=docker/dockerfile:1

# --- Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# Backend URL is baked into the static bundle at build time.
ARG VITE_BE_URL=http://localhost:3000
ENV VITE_BE_URL=$VITE_BE_URL
RUN npm run build

# --- Runtime (rootless nginx) ---
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY --from=build /app/build /usr/share/nginx/html
# nginx-unprivileged runs as a non-root user and listens on 8080 by default.
EXPOSE 8080
