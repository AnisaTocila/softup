const orderController = require('./controllers/orders'),
    express = require('express'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.post('/orders', orderController.addOrder)

app.listen(8081, () => console.log('Server running on port 8081'))
