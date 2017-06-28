FROM node:8.1.2
RUN  mkdir -r /usr/src/app && cd app && npm install
COPY . /usr/src/app

WORKDIR /usr/src/app
EXPOSE 3000

CMD ["node","start"]
