FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY index.js /usr/src/app
COPY *.json /usr/src/app/

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]

