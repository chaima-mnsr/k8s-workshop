FROM node:16-alpine

COPY index.js package.json /
COPY views/ /views/

RUN npm i -g nodemon & npm i

EXPOSE 8080

ENTRYPOINT ["nodemon", "index.js"]

