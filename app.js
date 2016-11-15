var express = require("express");
var app = express();

app.set("view engine", "jade");
app.set("port", parseInt(process.env.PORT) || 5000);

app.use(express.static('client/public'));
app.set('views', './client/views');

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(app.get("port"), function () {
 console.log("Servidor carregado na porta: ", app.get("port"));
});