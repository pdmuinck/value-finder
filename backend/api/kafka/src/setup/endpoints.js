const kafkaService = require('../kafka-service.js')

module.exports = function(server) {

    server.post('/events', async (req, resp) => {
        await kafkaService.produce(req).catch(error => resp.status(500))
    }),

    server.post('/betoffers', async (req, resp) => {
        await kafkaService.produce(req)
    }),

    server.get('/', async (req, resp) => {
        resp.status(200).send('This api provides endpoints to produce messages from kafka broker')
    })

} 