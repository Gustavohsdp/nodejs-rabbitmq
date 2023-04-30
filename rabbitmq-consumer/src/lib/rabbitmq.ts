import { env } from '@/env'
import { Channel, Connection, Message, connect } from 'amqplib'

export class RabbitMQServer {
  private connection: Connection
  private channel: Channel

  async start() {
    try {
      this.connection = await connect(env.RABBITMQ_URL)
      this.channel = await this.connection.createChannel()
      console.log('RabbitMQ server started 🚀')
    } catch (err) {
      console.log('Error while trying to connect to RabbitMQ')
    }
  }

  async consumer(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      if (message) {
        callback(message)

        // Every time the message is read, it will be removed from the queue.
        this.channel.ack(message)
      }
    })
  }
}
