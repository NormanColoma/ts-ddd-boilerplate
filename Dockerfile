FROM node:20-alpine as base

FROM base as builder
WORKDIR /build

COPY package-lock.json package.json ./
RUN npm i
COPY . .
RUN npm run build

FROM base as final
WORKDIR /usr/src/app

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/package.json ./
COPY --from=builder /build/node_modules ./node_modules
CMD ["npm","run", "start:prod"]
