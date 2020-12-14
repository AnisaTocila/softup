const Orders = require('../models/orders'),
    mongo = require('../connection'),
    Joi = require('joi'),
    winston = require('../config/winston'),
    eventSystem = require('../config/event_system');

exports.addOrder = async(req, res, next) => {

    const schema = Joi.object().keys({
        products: Joi.string().required(),
        userId: Joi.number().required(),
        userEmail: Joi.string().email({tlds: {allow: false}}),
        address: Joi.string().required()
    });

    const {error, value} = schema.validate(req.body);

    if (error) {
        winston.error("Order data are not correct: ", error);
        return res.status(400).send({message: "Order Data are not correct: ", error});
    }
    let connection = await mongo();
    if (!connection) {
        return res.status(400).send("Database connection Failed")
    }
    const { products, userId, userEmail, address } = value
    const order = {
        products: products,
        userId: userId,
        userEmail: userEmail,
        address: address
    }
    const result = await new Orders(order).save();
    if (!result) {
        return res.status(400).send({message: 'Failed to create order!'});
    }
    eventSystem.emit(result)
    res.send(result);
}


