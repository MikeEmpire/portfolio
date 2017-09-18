import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import compression from 'compression';

// Declare express
const app = express();

// Declare which port
const PORT = 3000;

app.use(express.static(`${process.cwd()}/public`));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

const handlebars = require('express-handlebars');

const data = {
  name: 'Michael Olie',
  age: '23',
};

app.set('port', (process.env.PORT || 3000));
app.set('view cache', true);
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index', data);
});

app.post('/send', (req, res) => {
  /* eslint-disable no-console */
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
   `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'aolie94@gmail.com', // generated ethereal user
      pass: '94bballa', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

    // setup email data with unicode symbols
  const mailOptions = {
    from: '"Node Mailer Contact" <aolie1794@gmail.comm>', // sender address
    to: 'aolie94@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  };

    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    return res.render('index', { msg: 'Email has been Sent' });
  });
});

app.listen(process.env.PORT || PORT);
