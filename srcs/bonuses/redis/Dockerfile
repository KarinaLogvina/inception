# Redis на Alpine
FROM alpine:latest

# Установка Redis
RUN apk add --no-cache redis

# Конфигурируем Redis для работы в фоновом режиме
RUN sed -i 's/daemonize no/daemonize yes/' /etc/redis.conf

# Открываем порт Redis
EXPOSE 6379

# Запускаем Redis
CMD ["redis-server", "/etc/redis.conf"]
