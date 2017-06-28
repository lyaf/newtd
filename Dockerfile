FROM node:8.1.2
RUN  mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

EXPOSE 3000
