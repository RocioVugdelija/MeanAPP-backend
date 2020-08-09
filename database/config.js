const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
            });

            console.log('DB correctly connected');
    }
    catch(error){
        console.log(error);
        throw new Error('Error initiating db, please view log details');
    }

}

module.exports = {
    dbConnection
}