const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (request, response) => {
  response.render("operacoes", { a: "", b: "", nome: "" });
});

app
  .route('/operacao')
  .get((req, res) => {
    res.render("operacoes", { a: "", b: "", nome: "" });
  })
  

app
  .route('/fatorial')
  .get((req, res) => {
    console.log("n1 via get=" + req.query.n1);
    let valor = parseInt(req.query.n1);
    console.log("Operação=fatorial");
    let result = fatorial(valor);
    if (isNaN(result)) {
      res.render('/error');
    } else {
      result = "Anônimo, seu fatorial deu: " + result;
    }
    res.render("operacoes", { x: result, a: valor, b: "", nome: "" });
  })
  .post((req, res) => {
    let valor;
    if (req.body.n1 === "") valor = parseInt(req.body.n2);
    else valor = parseInt(req.body.n1);
    console.log("n1=" + req.body.n1);
    console.log("NOME=" + req.body.nome);
    console.log("Operação=fatorial");
    let result = fatorial(valor);
    if (isNaN(result)) {
      res.render('error');
    } else {
      result = req.body.nome + ", seu fatorial deu: " + result;
    }
    res.render("operacoes", {
      x: result,
      a: req.body.n1,
      b: req.body.n2,
      nome: req.body.nome,
    });
  });

app.route('/error').get((req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  if (isNaN(n1) || isNaN(n2) || n1 + n2 === 0) {
    res.render('error');
  } else {
    res.render('error');
  }
});

app.listen(3000, () => {
  console.log("Servidor em http://localhost:3000");
});
