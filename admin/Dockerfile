FROM node:12-alpine as builder

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
COPY . /app
EXPOSE 4001
CMD ["node", "src/index.js"]

#FROM nginx:1.16.0-alpine
#COPY --from=builder /app /usr/share/nginx/html
#EXPOSE 4001
#CMD ["nginx", "-g", "daemon off;"]
