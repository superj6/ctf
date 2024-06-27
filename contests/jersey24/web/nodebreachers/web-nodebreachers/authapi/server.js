const express = require('express');
//const session = require('express-session');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb')
const connectDB = require('./database/connection');
const { connect } = require('http2');
//const { fileLoader } = require('ejs');
const auth = require('./routes/auth');
const PORT = 3001


dotenv.config({ path: 'config.env' })
app.use(morgan('tiny'));
app.use(express.json());
app.use("/auth", auth)
app.use((req, res, next) => {
    return res.status(400).json({
        message: "Error ocurred 1",
    })
})

//Connect to DB 
var con = connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.listen(PORT,"127.0.0.1", () => { console.log(`Server is running http://localhost:${PORT}`) })


module.exports = app;
