const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha Primeira Constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo
readLine.question('Qual a sua Idade:', input => {
    leituraDeCampo = input;
    console.log(`Você tem: ${leituraDeCampo} de Idade`);
});
