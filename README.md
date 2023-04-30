# RabbitMQ

Application in Nodejs using RabbitMQ.

## 🚀 Techs & Tools

→ [**TypeScript**](https://www.typescriptlang.org)

→ [**RabbitMQ**](https://www.rabbitmq.com/)

→ [**Docker**](https://www.docker.com/)

## Setup

Create an `.env` file:

```sh
$ cp .env.example .env
```

Edit this file and set the values for the requested environment variables, example:

```ts

# RabbitMQ
RABBITMQ_URL="amqp://user:password@localhost:5672"
```

## Run app

```sh
$ npm install
```

```sh
$ docker-compose up -d
```

```sh
$ npm run start:dev
```
