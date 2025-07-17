# Use official Node.js image
FROM node:18-slim AS builder

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Copy package files and prisma schema for dependency install and prisma generate
COPY package*.json ./
COPY prisma ./prisma

# Set dummy DB URL for build
ENV DATABASE_URL="postgresql://user:pass@localhost:5432/dummy"

# Install dependencies (runs postinstall, including prisma generate)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# (Optional) Use a smaller image for production
# FROM node:18-alpine AS production
# WORKDIR /app
# COPY --from=builder /app ./
# CMD ["npm", "start"]