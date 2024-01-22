FROM node:20-alpine

RUN apk add git ca-certificates

WORKDIR /build

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install

COPY . .

ENV NODE_ENV=production
CMD yarn build
