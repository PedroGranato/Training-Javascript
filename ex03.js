const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
rl.question('Digite a temperatura em Fahrenheit: ', (F) =>{
    C = ((F - 32) * 5)/9;
    console.log(`A temperatura em Celsius é ${C}`);
});