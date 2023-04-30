import { env } from '@/env'
import { Channel, Connection, connect } from 'amqplib'

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

  async publish(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message))
  }
}
