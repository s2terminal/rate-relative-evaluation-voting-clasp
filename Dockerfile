FROM node:14-alpine
WORKDIR /app

RUN yarn install --dev
COPY creds/* /root/
