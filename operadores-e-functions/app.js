const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumero = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('Número Inválido!');
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador Inválido!');
            return null;
    }
}

readLine.question('Digite um Número: ', (numero1) => {
    const numeroValidado = validarNumero(numero1);
    if(numeroValidado){
        readLine.question('Digite Outro Número: ', (numero2) => {
            const numeroValidado2 = validarNumero(numero2);
            if(numeroValidado2){
                readLine.question('Informe a Operação Desejada: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': console.log(`A soma é: ${Number.parseFloat(numero1) + Number.parseFloat(numero2)}`); break;
                            case '-': console.log(`A Subtração é: ${numero1 - numero2}`); break;
                            case '*': console.log(`A Multimplicação é: ${numero1 * numero2}`); break;
                            case '/': console.log(`A Divisão é: ${numero1 / numero2}`); break;
                            case '%': console.log(`O Módulo(Resto da Divisão) é: ${numero1 % numero2}`);
                            default: break;
                        }
                    }
                });
            }
        });

    }
})
