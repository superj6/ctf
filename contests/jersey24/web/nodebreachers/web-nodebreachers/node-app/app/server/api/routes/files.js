const express = require('express')
const filesRoute = express.Router();
const connectDB = require('../../database/connection');
var FileCol = require('../models/fileModel');
const { Mongoose } = require('mongoose');
const fs = require('node:fs');
const { type } = require('node:os');
const re = new RegExp("^[0-9]+$");  


//Define OS Dir 
const path = '/home/ubuntu/jctf4-web1/app/files/';


filesRoute.get('/', (req, res, next) => {
    res.status(200).json({message: 'It worked!'});
});

filesRoute.post('/downloadfile', (req, res, next) => {
    res.status(200).json({message: 'It worked!'});
});

filesRoute.post('/deletefile', (req, res, next) => {
    res.status(200).json({message: 'It worked!'});
});

filesRoute.get('/getfiles', (req, res, next) => {
    const files = []
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
        res.status(200).json({error: 'Error occurred!'});
    })
})

filesRoute.get('/getfile:FileID', (req, res, next) => {
    
    if(!req.params.FileID){
        res.status(200).json({message: 'No id found!'});
    }
    var id = req.params.FileID
    var position = req.params.FileID.indexOf(":")
    var id = id.slice(position+1)
    if (re.test(id)){
        console.log(id + " Good Input")
        FileCol.findOne({ FileID: id }).maxTimeMS(100).then(file => {
            if (file) {
                const filename = file.FileName
                try {
                    const filepath = filepath + filename ;
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
        res.status(200).json({error: 'Invalid input , 1!'});

    }
    console.log(id)
})

filesRoute.post('/createfile:filename', (req, res, next) => {
    const filenameRaw = req.params.filename; // change to regex 
    var position = filenameRaw.indexOf(":")
    var filename = filenameRaw.slice(position+1)
    console.log(filename) 
    const File = new FileCol({
        FileName: filename,
        Owner: "test",
        UploadDate: "test",
    });
    try {
        File.save(File)
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: err.message || "Error occured" })
        })
    } catch { 
        res.status(500).send({ message: err.message || "Error occured" })    }
})


filesRoute.get('/getusingname:filename', (req, res, next) => {
    var position = req.params.filename.indexOf(":")
    var data = req.params.filename.slice(position+1)
    var filename = JSON.parse(data)
    console.log(filename.data)

    if (filename.data) {
        var file = filename.data
        try {
            const filepath =  path + file;
            console.log(filepath)
            const data = fs.readFileSync(filepath, 'utf8');
            res.status(200).json({content: data});
          } catch (err) {
            console.error(err);
          }
    } else {
        res.status(200).json({message: 'File Not found!'});
    }
    /*
    try {
        FileCol.findOne({ FileName: filename }).maxTimeMS(100).then(file => {
                if(file){
                    const filename = file.FileName
                    console.log(filepath+filename)
                    const data = fs.readFileSync(filepath + filename, 'utf8');
                    res.status(200).send({content: data})
                } else {
                    console.log(filename + " was not found")
                    res.status(200).send({content: "File does not exist"})
                }
        }).catch(err => {
            console.log(err.message)
            res.status(200).json({message: 'Error occurred!'});
        })
    }   catch (err) {
        console.log(err.message)
    }
    */
})


module.exports = filesRoute