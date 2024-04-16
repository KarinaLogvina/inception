FROM debian:buster
RUN apt-get update

RUN apt-get -y install php7.3 php-mysqli php-fpm mariadb-client wordpress
RUN mkdir ./run/php/

COPY ./conf/www.conf /etc/php/7.3/fpm/pool.d/www.conf
COPY ./conf/wp-config.php /usr/share/wordpress/wp-config.php

CMD ./usr/sbin/php-fpm7.3 -F