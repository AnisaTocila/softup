var express  = require('express');
var app      = express();
var aws      = require('aws-sdk');
var queueUrl = "https://sqs.us-east-2.amazonaws.com/127133550225/anisa";

aws.config.loadFromPath(__dirname + '/config.json');
const sqs = new aws.SQS();


   exports.sendSQS =  (req, res) => {
       return new Promise(function (resolve, reject) {
           const {id, userEmail} = req;
           const params = {

               MessageBody: JSON.stringify({id: id, userEmail: userEmail}),
               QueueUrl: queueUrl,
               DelaySeconds: 0
           };

           sqs.sendMessage(params, (err, data) => {
               if (err) {
                   reject(err)
               } else {
                   resolve(data.MessageId)

               }
           });
       });
   }








