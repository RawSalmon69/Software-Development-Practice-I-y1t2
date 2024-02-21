const express = require('express');
const hospitals = require('./routes/hospitals');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();

//env vars
dotenv.config({path:'./config/config.env'});
//body parser
app.use(express.json());
//routing
app.use('/api/v1/hospitals', hospitals);

const PORT = process.env.PORT || 5000;

connectDB();
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

//handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`);
    //close server & ecit process
    server.close(() => process.exit(1));
})