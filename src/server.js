const express = require('express');
const server = express();
const {pageLanding, pageStudy, pageGiveClasses} = require('./pages');

const nunjucks = require('nunjucks');
nunjucks.configure('src', {
    express: server,
    noCache: true,
})

server.use(express.static("public"));
server.listen(5500);

server.get("/", pageLanding)

server.get("/study", pageStudy)

server.get("/form", pageGiveClasses)