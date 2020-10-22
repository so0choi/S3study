const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views',__dirname + '/public' )
app.set('view engine', 'ejs');

global.BUCKET_NAME = 'thisistest-test';

const upload = require('./upload').upload;
const listing = require('./load').listing;
let list;

app.get('/',(req,res) => {
    listing().then((result) => {
        list = result;
        res.render('index', {result: list})
    });
})

app.post('/upload', upload.single('uploadFile'), (req, res) => {
    res.redirect('/')
})

module.exports.app = app;