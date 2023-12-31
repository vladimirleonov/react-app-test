# Проект на React с JWT, WebSocket и GraphQL с использованием Redux Toolkit

Этот проект представляет собой веб-приложение, разработанное с использованием фреймворка React и библиотеки Redux Toolkit. Он демонстрирует следующие возможности:

- **Аутентификация пользователей** с использованием JSON Web Tokens (JWT).
- **WebSocket** для взаимодействия в реальном времени.
- **GraphQL** для реализации аутентификации.
- **Docker** для упаковки приложения в контейнер.

## Установка и запуск

Чтобы установить и запустить проект, выполните следующие шаги:

1. Установите зависимости:

 ```bash
 npm install
 ```

2. Запустите проект:

 ```bash
 npm start
 ```

## JWT и Аутентификация

Аутентификация пользователей осуществляется через JWT. При перезагрузке страницы сервер выполняет проверку проверку аутентификации на основе переданного токена в заголовке запроса.

## WebSocket

Для обмена данными (добавления и удаления постов) в реальном времени используется WebSocket. Подключение настроено на wss://ws.postman-echo.com/raw. 

## GraphQL

Аутентификация также реализована через GraphQL с использованием Redux Toolkit.

## Docker

Для сборки и запуска контейнера выполните следующие команды:

1. Сборка Docker-образа:

```
docker build -t имя_вашего_образа .
```

2. Запуск контейнера:

```
docker run -p 80:80 --name имя_вашего_контейнера имя_вашего_образа
```

