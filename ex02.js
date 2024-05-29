const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um numero: ', (n1) =>{
rl.question('Digite outro numero: ', (n2) => {
rl.question('Digite mais um numero: ', (n3) => {

n1 = parseInt(n1)
n2 = parseInt(n2)
n3 = parseInt(n3)

m1 = (n1 + n2 )/ 2;
m2 = (n1 + n2 + n3 )/ 3;

console.log(`A média aritmética de ${n1} e ${n2} é ${m1}`);
console.log(`A média aritmética de ${n1}, ${n2} e ${n3} é ${m2}`);

rl.close();

        })

    })

});