FROM node:24-alpine

RUN apk add git ca-certificates

WORKDIR /build

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
CMD pnpm build
