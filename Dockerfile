FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env.template ./.env

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ] 
