FROM nginx:1.13
MAINTAINER lyf 747729413@qq.com
COPY . /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "pid /tmp/nginx.pid; daemon off;"]