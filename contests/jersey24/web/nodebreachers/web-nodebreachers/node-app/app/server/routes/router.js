const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller');
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser');
const app = require('../../server');
const fileRoute = require('../fileapi/routes/files')

require('dotenv').config()

route.use(cookieParser())

route.get('/', services.homeRoute)
route.post('/', controller.login)
route.get('/register', services.registerRoute)
route.post('/register', controller.register)
route.get('/logout', controller.logout);
route.get('/dashboard', authenticateJson , services.dashBoardRoute), (req, res) =>{
    next()
}

route.get('/dashboard' , services.dashBoardRoute);
route.get('/files', fileRoute)
route.post('/files', fileRoute)


function authenticateJson(req, res, next) {
    console.log('Cookie: ', req.cookies['token'])
    const token = req.cookies['token'];
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            console.log("TOKEN ERROR: " + err.message)
            res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

module.exports = route;