var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var app = express();
var nodemailer = require('nodemailer');

var name = 'TCA API';
var port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
      res.render('index.html');
});

app.post('/', function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'erick.haehnsen@gmail.com', // Your email id
            pass: 'ElthzTCA007' // Your password
        }
    });

    var object = 'Un nouveau message de \n\n' + req.body.name + '@'+ req.body.organization+' \n\nest arrivé sur le site de l\'agence.';
    var message = '<strong>Name : </strong>'+req.body.name+'<br><strong>Organization : </strong>'+req.body.organization+'<strong><br>Email : </strong>'+req.body.email+'<br><strong>Message : </strong><blockquote>'+req.body.message+'</blockquote>';

    var mailOptions = {
        from: '"TCA Website " <tca-website@yeah.com>',
        to: 'erick.haehnsen@gmail.com', // list of receivers
        subject: object, // Subject line
        html: message // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        };
    });

    //console.log(req.body);
    res.send(true);
});

app.listen(port, function () {
      console.log(name + ' listening on port ' + port + '!');
});
