const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Este programa vai checar se vc é maior de idade e se tem habilitação.');
console.log('Este programa também vai checar se vc está na lista de reservas.');

readLine.question('Qual o ano que vc Nasceu?', ano => {
    if(ano > 2004){
        console.log('Vc ainda não tem 18 Anos!');
    }else{
        readLine.question('Vc tem Habilitação? (Sim/Não)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() == "SIM")){
                console.log('Você precisa ter habilitação para entrar no Kart...')
            }else{
                readLine.question('Qual o seu nome?', nome => {
                    switch(nome){
                        case 'André':
                            console.log('Bem vindo Campeão!');
                            break;
                        case 'Mateus':
                            console.log('Bem vindo Mateus!');
                            break;
                        default:
                              console.log('Nome não Identificado na lista de Reservas');
                    }
                });
            }
        });
    }
});