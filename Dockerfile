FROM node:20-alpine

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY . /app/

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]