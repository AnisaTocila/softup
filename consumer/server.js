const messagingController = require('./controllers/messaging'),
    express = require('express'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get('/receive', messagingController.addMessage)

app.listen(8082, () => console.log('Server running on port 8082'))

