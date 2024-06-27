const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb')
const { rateLimit } = require('express-rate-limit')


const connectDB = require('./server/database/connection');
const { connect } = require('http2');
const { fileLoader } = require('ejs');
const filesRoute = require('./server/fileapi/routes/files');
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080
const IP = process.env.IP || "127.0.0.1"

// Logs ƒ
app.use(morgan('tiny'));
app.use(express.json());

//Connect to DB 
var con = connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// Set view engine
app.set("view engine", "ejs") // can change ejs to html, use path.resolve

// Load Assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// Session
app.use(
    session({
        secret: 'keyboardcat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
}))


const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 15 minutes
	limit: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})



app.use('/', require('./server/routes/router'))
app.use('/files', filesRoute)
app.listen(PORT , () => { console.log(`Server is running http://localhost:${PORT}`) })

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    next();
});