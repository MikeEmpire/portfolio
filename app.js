import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import contact from './controller/contact';

require('dotenv').config();

require('sqreen');

// Declare express
const app = express();

// Declare which port
const PORT = 3000;

// Serve static file
app.use(compression());
app.use(express.static(`${process.cwd()}/public`));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handlebars = require('express-handlebars');

const data = {
  name: 'Michael Olie',
  age: '23',
};

app.set('port', (process.env.PORT || 3000));

// Cache views if in production
if (process.env.NODE_ENV === 'production') {
  app.set('view cache', true);
}

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', data);
});

app.post('/send', contact.sendContactMessage);

app.listen(process.env.PORT || PORT, () => {
  console.log(`You are listening to port ${PORT}`);
});
