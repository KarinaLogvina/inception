FROM debian:buster
RUN apt-get update
RUN apt-get install -y nginx openssl

EXPOSE 443

COPY ./conf/default.conf /etc/nginx/sites-enabled/default

RUN openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/certs/private.key -out /etc/ssl/certs/certificate.crt -subj "/C=RU/ST=Paris/L=Paris/O=wordpress/CN=*.urosby.42.fr";


CMD ["nginx", "-g", "daemon off;"]