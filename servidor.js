const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public/css"));

app.get('/', (request, response) => {
    response.render("conta.ejs")
})

    const port = 7777
app.listen(port , () => { console.log("Servidor na porta ", port) })