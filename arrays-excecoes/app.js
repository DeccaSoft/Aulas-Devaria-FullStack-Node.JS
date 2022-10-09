try {
	const produtosDisponiveisLista = [
	    "Pão",
	    "Leite",
	    "Café",
	    "Bolo",
	    "Salgado",
	    "Patê",
	    "Bolacha",
	];
	
	console.log();
	console.log("PRODUTOS DISPONÍVEIS");
	console.log();
	produtosDisponiveisLista.sort();
	produtosDisponiveisLista.forEach(produto => console.log(`Produto Disponível: ${produto}`));
	
	const argumentosLista = process.argv.slice(2);
	
	console.log();
	console.log("PRODUTOS SOLICITADOS");
	console.log();
	
	const solicitadosDisponiveisLista = produtosDisponiveisLista.filter(produto => {
	    return argumentosLista.find(argumento => argumento === produto);
	});
	
	solicitadosDisponiveisLista.forEach(produto => console.log(`Este Produto nós Temos: ${produto}`));
	
	const indisponiveisSolicitados = argumentosLista.filter(argumento => {
	    return !produtosDisponiveisLista.find(produto => produto === argumento)
	});
	console.log("-------------------------------------------");
	indisponiveisSolicitados.forEach(argumento => console.log(`Este Produto nós NÃO Temos: ${argumento}`));
	console.log();
} catch (error) {
    console.log();
	console.log("Ooops! Isso é constrangedor... NÃO foi possível executar o Pedido de Compra. Ocorreu algum Erro!");
    console.log();
}finally{
    console.log();
    console.log("Fim do Programa");
    console.log();
}