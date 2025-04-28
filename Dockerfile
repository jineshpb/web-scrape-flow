# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy app files
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine

WORKDIR /app

# Copy only the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Install only production dependencies
RUN npm install --omit=dev

# Expose port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
