const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.99.100:9092']
  })

const producer = kafka.producer()

const kafkaService = {}


kafkaService.produce = async (payload) => {
    await producer.connect()
    producer.send({
    topic: 'events',
    messages: [
        { value: 'Hello KafkaJS user!' },
    ],
    }).catch(error => console.log('error catched!!!!!!'))

    await producer.disconnect()
}

module.exports = kafkaService





