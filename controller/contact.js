import nodemailer from 'nodemailer';

module.exports = {
  sendContactMessage(req, res) {
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
      <p>${req.body.content}</p>
      `;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER, // generated ethereal user
        pass: process.env.GMAIL_PW, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // setup email data with unicode symbols
    const mailOptions = {
      from: '"Node Mailer Contact" <aolie1794@gmail.com>', // sender address
      to: 'aolie94@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return console.log(error);
      }
      // Preview only available when sending through an Ethereal account
      return res.render('index', { msg: 'Email has been Sent' });
    });
  },
};
