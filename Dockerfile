FROM node:8.1.2
RUN  mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY app/ /usr/src/app

EXPOSE 3000

CMD ["node","start"]
