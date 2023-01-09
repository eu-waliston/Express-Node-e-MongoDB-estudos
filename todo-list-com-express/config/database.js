const uri = 'mongodb+srv://WeSantos:3351334140028922@taks.cpqojhm.mongodb.net/?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 
}

const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.Promise = global.Promise;

const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("conectado ao mongoDB :)")
    })
}

connectWithDB()