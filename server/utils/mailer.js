var nodemailer = require("nodemailer");
var config = require("../config");

module.exports.transporter = nodemailer.createTransport(config.mailerSmtp);
