const express = require("express");

let app = express();

app.get ("/", (req, res) => res.send("Olá Mundo"));

app.listen(3000, () => 
console.log("Servidor Funcionando"));

let produto = {
    tipoProduto: "living",
    preco: 1245,
    quantidade: 300
  };
  app.get("/produto/criar", (req, res) => res.jason(produto));

  app.post("/produto/criar", (req, res) => res.send(produto));

  const path = require('path');

app.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

