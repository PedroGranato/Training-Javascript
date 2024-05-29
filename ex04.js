const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um numero: ', (n1) =>{
rl.question('Digite outro numero: ', (n2) => {

n1 = parseInt(n1);
n2 = parseInt(n2);

r = n1 + n2; 

rl.close();


if (r > 100){
    console.log(`O resultado da soma é ${r}`);
}
else {
    process.exit(0);
}

    })
});