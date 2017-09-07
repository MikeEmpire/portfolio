import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// Declare express
const app = express();

// Declare which port
const port = 3000;

app.use(express.static(process.cwd() + "/public"));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

const handlebars = require('express-handlebars');

const data = {
	name: 'Michael Olie',
	age: '23'
};

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req, res) => {
	res.render('index', data);
})

app.listen(port);
