# syntax=docker/dockerfile:1

FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG VITE_BE_URL=http://localhost:3000
ENV VITE_BE_URL=$VITE_BE_URL
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
