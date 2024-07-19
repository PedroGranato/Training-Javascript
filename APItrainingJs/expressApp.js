const express = require("express");
const app = express();
const port = 3000;

//pega a rota products e lança nela as infromações do array products como json 
app.get("/products", (req,res) => {
    const products = [ 
        {id:1, name:"hammer"},
        {id:2, name:"scewdriver"},
        {id:3, name:"wrench"},
    ];
    res.json(products);
});


app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`));



/*
req: a solicitação de entrada que contém os cabeçalhos de solicitação e a URL de chamada. Ele também poderá ter um corpo de dados se o cliente enviou dados com a solicitação.
res: um fluxo de resposta para uso em gravações de informações, como cabeçalhos e dados que você deseja enviar novamente para o cliente autor da chamada.
next: A próxima função de middleware na pilha. Se a função next() não for chamada, o processamento da solicitação será interrompido. Se a solicitação obtiver êxito, 
é aconselhável chamar next() para fazer alterações na resposta ou registrar os resultados. 
*/