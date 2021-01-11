const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

app.use(express.static(__dirname + '/public'));

//hbs view engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});



app.get('/', function(req, res) {
    res.render('home')
})

app.get('/about', function(req, res) {
    res.render('about')
})
app.listen(3000, () => {
    console.log("escuchando en puerto 3000")
})