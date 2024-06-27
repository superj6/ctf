const express = require('express')
const filesRoute = express.Router();
const connectDB = require('../../database/connection');
var FileCol = require('../models/fileModel');
const { Mongoose } = require('mongoose');
const fs = require('node:fs');
const { type } = require('node:os');
const jwt = require('jsonwebtoken')
const public = '/home/ubuntu/app/files/public/';
const path = require('path');
const http = require('http');
var request = require('request');
const oldapi = 'http://127.0.0.1:8000/getfile/';

filesRoute.get('/getfiles', (req, res, next) => {
    const files = []
    try {
        FileCol.find({}).maxTimeMS(100).then(files => {
            if (files) {
                try {
                    res.json(files)
                } catch (err) {
                    console.error(err);
                }
            } else {
                res.status(200).json({message: 'Files Not found!'});
            }
        }).catch(err => {
            res.status(200).json({error: 'Error 400'});
        })
    } catch(err) {
        res.status(200).json({error: 'Error 500'});
    }
})

filesRoute.get('/getfile:FileID', (req, res, next) => {
    const re = new RegExp("^[0-9]+$");  
    const publicpath = public;
    if(!req.params.FileID){
        res.status(200).json({message: 'No id found!'});
    }
    console.log(req.params.FileID)
    var id = req.params.FileID
    var position = req.params.FileID.indexOf(":")
    var id = id.slice(position+1)
    if(id.length < 0 || id.length > 16){
        res.status(200).json({message: 'Invalid length'});
    }
    if (re.test(id)){
        FileCol.findOne({ FileID: id }).maxTimeMS(100).then(file => {
            if (file) {
                const filename = file.FileName
                try {
                    const filepath = publicpath + filename;
                    const data = fs.readFileSync(filepath, 'utf8');
                    res.status(200).json({content: data});
                  } catch (err) {
                    console.error(err);
                  }
            } else {
                res.status(200).json({message: 'File Not found!'});
            }
        }).catch(err => {
            res.status(200).json({message: 'Error occurred!'});
        })
    } else {
        res.status(200).json({error: 'Invalid input'});
    }
    /** 
    if (re.test(filename)){
        var token = req.cookies.token
        request.get(oldapi + payload + '&' + encoded)
    } else {
        res.status(200).json({error: 'Invalid input'});
    }
    **/
})

filesRoute.get('/filebyname:data', (req, res, next) => { 

    var data = req.params.data.replace(":","")
    var token = req.cookies.token

    if(data.length < 0 || data.length > 32){
        res.status(200).json({message: 'Invalid length'});
    } 
    
    if (token == null) res.status(200).json({message: 'Not authenticated'});
        jwt.verify(token, process.env.SECRE, (err, user) => {
    if (err) {
        res.status(200).json({message: 'Not authenticated'});
    } else {
            if(data){
                var parsed;
                try {
                    parsed = JSON.parse(data)
                } catch (err) {
                    console.log("Bad Parse:" + parsed)
                    res.status(200).json({message: 'Bad input!'});
                }
                if(!parsed){
                    res.status(200).json({message: 'Filename not provided'});
                }
                filename = parsed.filename
                decoded = decodeURI(filename).toString()
                try {
                    const filepath =  public + decoded;
                    console.log(filepath)
                    const data = fs.readFileSync(filepath, 'utf8');
                    res.status(200).json({content: data});
                } catch(err) {
                    res.status(200).json({message: 'Read Error'});
                }
            } else {
                res.status(200).json({message: 'No data'});
            }
        }
    })
})

module.exports = filesRoute