const express = require('express');
const server = express();
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

const nunjucks = require('nunjucks');
nunjucks.configure('src', {
    express: server,
    noCache: true,
})

server.use(express.static("public"));
server.listen(5500);
server.use(express.urlencoded({extended: true}));

server.get("/", pageLanding)

server.get("/study", pageStudy)

server.get("/form", pageGiveClasses)

server.post("/save-classes", saveClasses)