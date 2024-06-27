const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    FileName : {
        type : String,
        required: true
    },
    Owner : {
        type : String,
        unqiue: true,   
        required: true
    },
    UploadDate: {
        type : String,
        required: true
    }
})

const FileCol = mongoose.model('files', schema);
 
module.exports = FileCol;