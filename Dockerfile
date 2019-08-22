#FROM alpine:3.1
FROM node:lts

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

COPY ./index.html ./src/dist/index.html
RUN npm run build

EXPOSE  8080
CMD ["node", "./src/server.js"]