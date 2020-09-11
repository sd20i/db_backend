FROM node:10-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

ADD . /usr/app
RUN npm run build

COPY . .

CMD [ "npm", "start" ]
