var mailer =  require("../utils/mailer");
var express = require("express");

function sendContact (req, res) {

  // Adiciona informações do contato no corpo do texto
  mailer.mailOptions.text = mailer.mailOptions.text + "\n nome do futuro membro: "+req.query.name+"\n";

  // send mail with defined transport object
  mailer.transporter.sendMail(mailer.mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

}


module.exports = new express.Router()
  .get("/contact", sendContact);


