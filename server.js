const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper');

app.use(express.static(__dirname + '/public'));

let port = process.env.PORT || 3000;

//hbs view engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});



app.get('/', function(req, res) {
    res.render('home');
})

app.get('/about', function(req, res) {
    res.render('about');
})
app.listen(port, () => {
    console.log(`escuchando en puerto ${port}`);
})