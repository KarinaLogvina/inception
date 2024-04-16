# Adminer на Alpine
FROM alpine:latest

# Установка PHP и необходимых расширений
RUN apk update
RUN apk add --no-cache php php-session php-mysqli php-pdo_mysql php-json php-curl php-xml php-phar php-openssl php-pdo php-zlib

# Скачиваем Adminer
ADD https://www.adminer.org/latest.php /var/www/html/adminer/index.php

# Устанавливаем рабочую директорию
WORKDIR /var/www/html/adminer

# Запускаем PHP встроенный сервер
CMD ["php", "-S", "0.0.0.0:8080", "-t", "/var/www/html/adminer"]

# Открываем порт
EXPOSE 8080
