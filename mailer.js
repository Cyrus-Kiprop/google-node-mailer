'use strict';
const nodemailer = require('nodemailer');
const{ port,user,pass} = require('./config');




console.log(`your port is ${port}`)
 
nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        secure: true, // this is true as port is 465
        auth: {
            user: user, //Gmail username
            pass: pass // Gmail password
        }
    });
 
    let mailOptions = {
        from: 'cyruskiprop254@gmail.com',
        to: 'stoshwitkowski812@gmail.com', // Recepient email address. Multiple emails can send separated by commas
        subject: 'Welcome Email',
        text: 'This is the email sent through Gmail SMTP Server.'
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});