const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "014998863973",
        bio: "Entusiasta das melhores tecnologias de química avançada.",
        bio2: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        materia: "Química",
        custo: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src', {
    express: server,
    noCache: true,
})

server.use(express.static("public"));
server.listen(5500);

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/study", (req, res) => {
    return res.render("study.html", {proffys})
})

server.get("/form", (req, res) => {
    return res.render("form.html")
})