var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5f1f81aae8af51",
    pass: "26b14ce88cf3ad"
  }
});
var mailOptions = {
  from: 'srto.mendes@gmail.com',
  to: "srto.mendes@gmail.com",
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});