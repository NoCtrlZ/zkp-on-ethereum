FROM node:10.12.0-alpine

WORKDIR /app

COPY circuit.circom .

RUN yarn

ENTRYPOINT [ "yarn", "compile" ]
