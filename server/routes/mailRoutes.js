var mailer = require('../utils/mailer');
var express = require('express');
var config = require('../config');

function sendContact(req, res) {
  if (!req.body.name || !req.body.email) return res.sendStatus(406);

  // Configura email
  var mailOptions = {
    from: config.mailerFrom,
    to: config.mailerTo,
    subject: config.mailerSubjectNewMember,
    text: 'Dados do novo membro: \n - ' +
    'nome: ' + req.body.name + '\n - ' +
    'email: ' + req.body.email + '\n - ' +
    'telefone: ' + req.body.phone
  };

  // Envia email
  mailer.transporter.sendMail(mailOptions, function (error) {
    if (error) return res.sendStatus(400);
    return res.sendStatus(200);
  });
}

module.exports = new express.Router()
  .post('/contact', sendContact);
