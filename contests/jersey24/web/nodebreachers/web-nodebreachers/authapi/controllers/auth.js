const express = require('express')
const authRoute = express.Router();
const bodyparser = require('body-parser')
var userCol = require('../models/userModel'); // move me 
const { Mongoose } = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


exports.test = (req, res) => {
    res.status(200).send({ message: "It worked" })
}

exports.register = async (req, res, next) => {
    const { username, password , email} = req.body
    const saltRounds = 10;

    // Check if User Exists 
    try {
        await userCol.findOne({ Username: username }).then(user => {
            if (user) {
                res.status(200).send({ message: "Username exists" })
            }
        }).catch(err => {
            res.status(500).send({ message: "Error occured 1 " })
        })
    } catch (err) {
        res.status(500).send({ message: "Error occured 2" })

    }
    // Check if email Exists
    try {
        userCol.findOne({ Email: email }).then(user => {
            if (user) {
                res.status(200).send({ message: "Email exists" })
            }
        }).catch(err => {
            res.status(500).send({ message: "Error occured 3 " })
        })
    } catch {
        res.status(400).send({ message: "Error occured 4" })
    }

    try {
        bcrypt
        .genSalt(saltRounds,)
        .then(salt => {
            console.log('Salt: ', salt)
            return bcrypt.hash(password, salt)
        })
        .then(hash => {
            const user = new userCol({
                Email: email,
                Username: username,
                Password: hash
            });
            user.save(user)
                .catch(err => {
                    res.status(500).send({ message: "Error occured 5 " })
                })
            res.status(200).json( { message: "Account creation successful"})
        })
        .catch(err => console.error(err.message))
    } catch(err) {
        res.status(500).send({ message: err.message || "Error occured 6" })
    }
}


exports.login = async (req, res, next) => {

    const username = req.body.username
    const password = req.body.password
    console.log(username + password)

    if (!username || !password) {
        return res.status(400).json({
          message: "Username or Password not present",
        })
    }
    
    try{
        userCol.findOne({ Username: username }).maxTimeMS(100).then(user => {
            if (user) {
                bcrypt
                    .compare(password, user.Password, function (err, result) {
                        if (result) {
                            const user = {
                                name: username,
                                authorized: true,
                                admin: false
                            }
                            const accessToken = generateAccessToken(user)
                            res.cookie("token", accessToken, "user", user, {
                                httpOnly: true,
                            });
                            res.status(200).json({message: 'Authenticated', token: accessToken});
                        } else {
                            res.status(200).json({ message: "Password incorrect" })
                        }
                    });
            } else {
                res.status(200).json({ message: "Username not found" })
            }
        }).catch(err => {
            res.status(400).send({ message: "Error occured 1" })
        })
    } catch(err){
        console.log("Login Error: " + err)
        res.status(400).send({ message: "Error occured 2" })
    }


}

exports.logout = (req, res) => {
    console.log(req.session.user)
    req.session.user = null;
    console.log(req.session.user)

    res.clearCookie('token')
    res.render('index')
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRET, {expiresIn: '2s'})
}