Order Service

### Installation

### Before you start, make sure you have these prerequisites installed:

 * MongoDB
 * Node.js
 * NPM

### Running in Development mode
To run your application with *development* environment , execute as follows:

 * node server.js

### request
Application will start by default on port 80.
** you might use the curl below for making requests for first service

```curl --location --request POST 'http://localhost:8081/orders' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'products=product2' \
  --data-urlencode 'userId=1' \
  --data-urlencode 'userEmail=anisa.haxhillari@fshnstudent.info' \
  --data-urlencode 'address=tr'
```


### Queue

** I created queue below for sending and receiving messages:
https://sqs.us-east-2.amazonaws.com/127133550225/anisa

===> we sent orderId and userEmail


##### Request:

> ** When sending a request you will see **

> As below :
*{ ResponseMetadata: { RequestId: 'ef58adac-b244-539f-b813-f5fc051501ef' },
   MD5OfMessageBody: '7a28b63bac10026aac3752bef25577b3',
   MessageId: '97cddd45-e921-4916-a07c-22e710c4e5c3' }*
---

### Database 
After every request a new record will be added at orders table / softup_db 
