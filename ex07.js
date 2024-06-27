const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function pal (){
    rl.question('Digite uma palavra: ', (palavra) => {
    
    if (palavra == palavra.split('').reverse().join('')) {
        console.log('É palindromo');
        rl.close();
        }
        else {
            console.log('Não é palindromo');
            rl.close();
        }
    });
}
pal();