var express=require('express');
var bodyParser=require('body-parser');
const mailConfig=require('./mailConfig/mail')
var app=express();

//Middleware
app.use(bodyParser.json());

//Routers
app.post('/send',function(req,res){
    
    var mailOptions={
        to : req.body.to,
        subject : req.body.subject,
        text : req.body.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

app.listen(3000,function(){
console.log("Server Started on Port 3000");
});