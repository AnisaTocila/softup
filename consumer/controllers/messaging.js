const aws = require('aws-sdk');
const queueUrl = "https://sqs.us-east-2.amazonaws.com/127133550225/anisa";
aws.config.loadFromPath(__dirname + '/config.json');
const sqs = new aws.SQS(),
    mongo = require('../connection'),
    Emails = require('../models/emails');


exports.addMessage = async (req, res, next) => {
    let params = {
        QueueUrl: queueUrl,
        VisibilityTimeout: 600
    };

    sqs.receiveMessage(params, function (err, data) {
        if (err) {
            return;
        }
        if (data.Messages) {
            const emailData = JSON.parse(data.Messages[0].Body);
            const {id, userEmail} = emailData;
            sentMail(id, userEmail)
            return res.status(200).send({message: 'Email sent successfully!'});
        } else {
            return res.status(400).send({message: 'Failed to sent Email!'});
        }

    });
}

function sentMail(id, userEmail) {
    return new Promise((resolve, reject) => {
        let connection = mongo();
        if (!connection) {
            return;
        }
        const emailData = {
            orderId: id,
            emailSent: true,
        }

        //todo sent mail using nodemailer
        const result = new Emails(emailData).save();
        if (!result) {
            reject(new Error('Sending email failed'));
        }
    })
}

