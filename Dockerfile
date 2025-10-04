## Multi-stage Dockerfile for Vite (client) + Express (server)
## Build stage
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Install build deps
COPY package*.json ./
RUN npm ci --omit=optional

# Copy the rest of the source
COPY . .

# Build client (to dist/public) and bundle server (to dist/index.js)
RUN npm run build

## Runtime stage
FROM node:20-bookworm-slim AS runner
ENV NODE_ENV=production
WORKDIR /app

# Only copy built artifacts and minimal runtime deps
COPY package*.json ./
RUN npm ci --omit=dev --omit=optional

# Copy build output
COPY --from=builder /app/dist ./dist

# App runs on PORT (default 5000 in code). Cloud providers will inject PORT.
EXPOSE 5000

CMD ["node", "dist/index.js"]



