Consumer Service

### Installation

### Before you start, make sure you have these prerequisites installed:

 * MongoDB
 * Node.js
 * NPM

### Running in Development mode
To run your application with *development* environment , execute as follows:

 * node server.js

### request
Application will start listening on port :8082.
** you might use the curl below for making requests for second service

```
curl --location --request GET 'http://localhost:8082/receive' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'products=product2' \
--data-urlencode 'userId=1' \
--data-urlencode 'userEmail=anisa.haxhillari@fshnstudent.info' \
--data-urlencode 'address=tr'

```

### Queue

** I created queue below for receiving messages:
https://sqs.us-east-2.amazonaws.com/127133550225/anisa
===> we use orderId and userEmail for sending emails 


##### Request:

> ** When getting a request you will see **

``
[ { MessageId: '4cdbe919-2d2a-43a6-bad3-4f55da88e6f8',
    ReceiptHandle:
     'AQEBT5dP0QuqRI8Fadi2fcCajyHrwHBDPebw9X0QJ8SZ5lbIVveGyd9vBJLEnMr8hAJzHy0iEt8TSnttIR3uhiyzuZKVLCgsUQtOPZtw24EDHwSW6qI5PAj8OpMtm
B4oyXDb0Q93qT7qr8/LEjHgI4TtoXtuelCEV+zrMFz1VliMDs0ZZKUVN6Lt8rZnJSN1efLkT1If10yNTKxWOcG/KpmDz0VitYOGXQ7ku0wRp/HUcvc9S/WmWFx17amKSqlN
F9DtiO0JUadZY9cxJLZLj3/dqYh62uiR5GxMJK89W4MRrogNoQxW0V+fBc1OfsmQu5VoKMH92xDeJBXQ8UBGq2QbcsFjM0HRhMYmfCywwAXP2J6YpUtDCMISJVtfJxXHMAF
7',
    MD5OfBody: '8900b3e51762f706397d29696c49e947',
    Body:
     '{"id":"5fd6a0f603ac81380c072943","userEmail":"anisa@gmail.com"}' } ] 
``

### Database 
After every get request new record will be added at emails table (orderId, emailSent) / softup_db created:
