const mongoose = require('mongoose')
const mongoPath = `mongodb://localhost/softup_db`;

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose;
}

