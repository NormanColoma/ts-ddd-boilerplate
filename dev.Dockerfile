FROM node:20-alpine
WORKDIR /usr/src/app

COPY package-lock.json package.json ./
RUN npm i
COPY . .

CMD ["npm","run", "start:dev"]
