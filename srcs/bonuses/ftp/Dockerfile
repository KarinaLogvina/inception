# FTP сервер (vsftpd) на Alpine
FROM alpine:latest

# Установка vsftpd
RUN apk add --no-cache vsftpd

# Конфигурация vsftpd
COPY vsftpd.conf /etc/vsftpd/

# Создаем директорию для FTP
RUN mkdir -p /ftp

# Добавляем пользователя для FTP доступа
RUN adduser -D ftpuser -h /ftp && \
    echo "ftpuser:ftppassword" | chpasswd

# Открываем порты
EXPOSE 20 21

# Запускаем vsftpd
CMD ["vsftpd", "/etc/vsftpd/vsftpd.conf"]
