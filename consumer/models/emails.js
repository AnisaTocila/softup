const mongoose = require('mongoose');
const reqString = {
    type: String,
    required: true
}
const sentMail = mongoose.Schema({
    orderId: reqString,
    emailSent: {
        type: Boolean
    }
})

const emailSchema = mongoose.model('emails', sentMail);
module.exports = emailSchema;