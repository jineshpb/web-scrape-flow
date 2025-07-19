# Build stage
FROM node:18-slim AS builder

WORKDIR /app

# Install OpenSSL and Chrome dependencies for Puppeteer
RUN apt-get update -y && apt-get install -y \
    openssl \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    libu2f-udev \
    libvulkan1 \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /tmp/* /var/tmp/*

COPY package*.json ./
COPY prisma ./prisma
COPY .env ./

ENV DATABASE_URL="postgresql://postgres:GNoh2qhtUxhxZq3nNKXkJJ11xWSa2wW8ssHHAzlCzspPeRrU6UTsbgw6qmSWwwnw@host.docker.internal:5433/postgres"

RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-slim AS production

WORKDIR /app

# Install only runtime dependencies and Chrome dependencies for Puppeteer
RUN apt-get update -y && apt-get install -y \
    openssl \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    libu2f-udev \
    libvulkan1 \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Install only production dependencies
RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]