FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /app

COPY dist /app/
COPY node_modules /app/node_modules
COPY package-lock.json /app/package-lock.json

EXPOSE 3000
