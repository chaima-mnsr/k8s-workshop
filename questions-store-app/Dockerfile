FROM node:16-alpine

COPY index.js package.json /
COPY views/ /views/

RUN npm i

EXPOSE 8080

ENTRYPOINT ["node", "index.js"]

