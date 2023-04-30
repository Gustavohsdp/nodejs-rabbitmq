import { Message } from 'amqplib';
import { RabbitMQServer } from './lib/rabbitmq';
(async () => {
  const rabbitMQServer = new RabbitMQServer()

  await rabbitMQServer.start()

  // Consuming messages added to the queue

  await rabbitMQServer.consumer('test', (message: Message) => {
    console.log(message.content.toString())
  })
})()
