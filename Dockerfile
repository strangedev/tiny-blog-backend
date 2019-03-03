FROM node AS buildenv
WORKDIR /app
ADD ./app/yarn.lock /app/yarn.lock
ADD ./app/package.json /app/package.json
RUN yarn install --production=false
ADD ./app/src /app/src
RUN node_modules/.bin/babel src --out-dir build

FROM node:alpine AS runtime
WORKDIR /app
ADD ./app/yarn.lock /app/yarn.lock
ADD ./app/package.json /app/package.json
RUN yarn install --production=true
COPY --from=buildenv /app/build /app/build
CMD ["node", "build/index.js"]
