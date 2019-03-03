FROM node AS node_modules
WORKDIR /app
ADD ./app/yarn.lock yarn.lock
ADD ./app/package.json package.json
RUN yarn install --production=true

FROM node AS build
WORKDIR /app
ADD ./app/yarn.lock yarn.lock
ADD ./app/package.json package.json
ADD ./app/.babelrc .babelrc
RUN yarn install --production=false
ADD ./app/src src
RUN node_modules/.bin/babel src --out-dir build

FROM node:alpine AS runtime
WORKDIR /app
COPY --from=node_modules /app/node_modules node_modules
COPY --from=build /app/build build
CMD ["node", "build/index.js"]
