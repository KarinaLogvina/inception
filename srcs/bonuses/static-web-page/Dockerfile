# Используем официальный минимальный образ Alpine Linux как наш базовый образ
FROM alpine:latest

# Устанавливаем Node.js и Yarn
RUN apk add --no-cache nodejs-current yarn

# Устанавливаем версию Node.js 18.x
# Для Alpine Linux `nodejs-current` обычно предоставляет последнюю текущую версию Node.js
# Если нужна конкретная версия, используйте n или nvm для установки конкретной версии

# Создаем директорию для хранения исходников приложения
RUN mkdir -p /app
WORKDIR /app

# Копирование файлов конфигурации и зависимостей проекта
COPY ./urosby/package.json ./urosby/yarn.lock ./urosby/vite.config.js ./

# Установка зависимостей проекта
RUN yarn install --frozen-lockfile

# Копирование всех необходимых файлов проекта
COPY ./urosby/ ./

# Сборка приложения
RUN yarn run build

# Объявление порта, который будет слушать ваше приложение
EXPOSE 3000

# Команда для запуска вашего приложения
# Предполагается, что у вас есть скрипт для запуска приложения в package.json
CMD ["yarn", "start"]