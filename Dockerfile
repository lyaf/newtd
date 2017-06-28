FROM nginx:1.13
COPY . /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]