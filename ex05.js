const readline = require('readline');

function PM (D , V ){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
     rl.question('Digite a vida do personagem: ', (V) => {
        
    rl.question('Digite o dano recebido: ', (D) => {
        
        if (V - D <= 0){
            console.log('Personagem morto');
            rl.close();
        }
        else{
            V = V - D;
            console.log('Vida restante: ' + V);
            rl.close();
        }
    }); 
});
}

PM();