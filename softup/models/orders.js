const mongoose = require('mongoose');
const reqString = {
    type: String,
    required: true
}
const orderData = mongoose.Schema({
    products: reqString,
    userId: Number,
    userEmail: reqString,
    address: reqString
})

const orderSchema = mongoose.model('orders', orderData);
module.exports = orderSchema;