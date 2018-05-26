FROM node:8-alpine as node-build-env

WORKDIR /app
COPY . /app
RUN npm install && \
  npm run build -- --prod

FROM node:8-alpine
WORKDIR /app
COPY . /app
COPY --from=node-build-env /app/dist /app/dist
RUN npm install --production && \
  npm install -g forever
