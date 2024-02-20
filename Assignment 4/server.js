const express = require('express');
const hospitals = require('./routes/hospitals');

const dotenv = require('dotenv');
const app = express();

dotenv.config({path:'./config/config.env'});

app.use('/api/v1/hospitals', hospitals);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));