const listaArgumentos = process.argv.slice(2);

console.log('=====     FOR     =====');
for(let forControlador = 0; forControlador < listaArgumentos.length; forControlador++){
    console.log(`Posição: ${forControlador}; Valor Lido: ${listaArgumentos[forControlador]}`);
}

console.log('=====     WHILE     =====');
let whileControlador = 0;
while(whileControlador < listaArgumentos.length){
    console.log(`Posição: ${whileControlador}; Valor Lido: ${listaArgumentos[whileControlador]}`);
    whileControlador++;
}

console.log('=====     DO WHILE     =====');
let doWhileControlador = 0;
do{
    console.log(`Posição: ${doWhileControlador}; Valor Lido: ${listaArgumentos[doWhileControlador]}`);
    doWhileControlador++;
}while(doWhileControlador < listaArgumentos.length);

console.log('=====     FOR OF     =====');
let forOffControlador = 0;
for(const argumento of listaArgumentos){
    console.log(`Posição: ${forOffControlador}; Valor Lido: ${argumento}`);
    forOffControlador++;   
}