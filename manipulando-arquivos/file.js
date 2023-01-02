const fs = require("fs");

//sobrescreve o arquivo todo
fs.writeFile("teste.txt", "Olá NodeJS", (err) => {
  console.log(err);
});

//adiciona um conteudo novo
fs.appendFile("teste.txt", "\nOlá NodeJS\n", (err) => {
  console.log(err);
});

fs.rename("teste.txt", "teste2.txt", (err) => {
  console.log(err);
});

//remove o arquivo
fs.unlink("teste2.txt", (err) => {
  console.log(err);
});

