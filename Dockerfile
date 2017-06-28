FROM node:8.1.2
RUN  mkdir app
COPY app/ $PWD/app
RUN  npm install
EXPOSE 3000

