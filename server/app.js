const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');

const corsOrigin = 'http://localhost:3000'

app.use(express.static(__dirname + '../..'));
app.use(cors({
    origin:[corsOrigin],
    methods:['GET','POST'],
    credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const imageUploadPath = "D:/Pablo/Mission Ready/Level 5 Advance Software Developer/Code/Mission-2/mission-2/uploaded-files";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, imageUploadPath)
    },
    filename: function(req, file, cb) {
        cb(null, `${file.filename}_dateVal_${Date.now()}_${file.originalname}`)
    }
})
const imageUpload = multer({storage: storage})

app.post('/image-upload', imageUpload.array('my-image-file'), (req,res) => {
    res.send('Got a POST request');
})

const port = 4000

app.listen(port, process.env.IP, function(){
    console.log(`Server is running on port ${port}`);
})