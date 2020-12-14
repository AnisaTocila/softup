const producer = require('../service/amazonSQS')
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//register a listener
eventEmitter.addListener('newOrder', (arg) => {
    producer.sendSQS(arg)
})

//raise an event
function emit(req, res) {
    eventEmitter.emit('newOrder', {id: req._id, userEmail: req.userEmail})
}

exports.emit = emit;