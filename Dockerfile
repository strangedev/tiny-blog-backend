FROM node:alpine
WORKDIR /app
ADD ./app/yarn.lock /app/yarn.lock
ADD ./app/package.json /app/package.json
RUN yarn install
ADD ./app/src /app/src
CMD ["node", "src/index.js"]
