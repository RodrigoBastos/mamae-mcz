var express = require("express"); // Framework web
var app = express(); // Cria um aplicativo express

// Configura template
app.set("view engine", "jade");
app.set('views', './client/views');

// Define diretório dos arquivos estáticos
app.use(express.static('client/public'));

// Configura porta do servidor
app.set("port", parseInt(process.env.PORT) || 5000);

// Rota principal
app.get("/", function (req, res) {

  // Em desenvolvimento, renderize a página index
  if (process.env.NODE_ENV == "development") return res.render("index");

  // Em produção, renderize a página em construção
  res.render("build");
});

// Inicia servidor
app.listen(app.get("port"), function () {
 console.log("Servidor carregado na porta: ", app.get("port"));
});