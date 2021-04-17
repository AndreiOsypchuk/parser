FROM node:12-alpine as builder

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install --only=prod
COPY . /app

EXPOSE 4000
CMD ["node", "src/index.js"]

