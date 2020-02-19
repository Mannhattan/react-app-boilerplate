FROM nginx:alpine

COPY build /usr/share/nginx/html

COPY config/robots.txt /usr/share/nginx/html
COPY config/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]