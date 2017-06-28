FROM nginx:1.13.0
COPY app/ /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]