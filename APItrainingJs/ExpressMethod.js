const http = require("http");
const port = 3000;
const requestHandles = (req , res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
}

const sever = http.createServer(requestHandles);

sever.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
res.send("plain text")
//res tem variaveis que podem ser usadas para enviar respostas ao cliente que fez a requisição ao servidor


res.json({id:1 , name:"catcher in the rye"})
//json é um metodo que envia a resposta ao cliente em formato json

res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ id: 1, name: "Catcher in the Rye" }))
//mesma coisa que o exemplo anterior, mas com o metodo express 

