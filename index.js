let jogador,
	vencedor = null;
let jogadorSelecionado = document.getElementById("jogador-selecionado");
let vencedorSelecionado = document.getElementById("vencedor-selecionado");
let quadrados = document.getElementsByClassName("quadrado");

mudarJogador("X");

function escolherQuadrado(id) {
	let quadrado = document.getElementById(id);

	quadrado.innerHTML = jogador;
	quadrado.style.color = "#fff";

	if (jogador === "X") {
		jogador = "0";
	} else {
		jogador = "X";
	}

	mudarJogador(jogador);
	checaVencedor();
}

function mudarJogador(valor) {
	jogador = valor;
	jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
	let quadrado1 = document.getElementById(1);
	let quadrado2 = document.getElementById(2);
	let quadrado3 = document.getElementById(3);
	let quadrado4 = document.getElementById(4);
	let quadrado5 = document.getElementById(5);
	let quadrado6 = document.getElementById(6);
	let quadrado7 = document.getElementById(7);
	let quadrado8 = document.getElementById(8);
	let quadrado9 = document.getElementById(9);

	//sequencia em linha
	sequenciaDeJogadas(quadrado1, quadrado2, quadrado3);
	sequenciaDeJogadas(quadrado4, quadrado5, quadrado6);
	sequenciaDeJogadas(quadrado7, quadrado8, quadrado9);
	//sequencia em coluna
	sequenciaDeJogadas(quadrado1, quadrado4, quadrado7);
	sequenciaDeJogadas(quadrado2, quadrado5, quadrado8);
	sequenciaDeJogadas(quadrado3, quadrado6, quadrado9);
	//sequencia na diagonal
	sequenciaDeJogadas(quadrado1, quadrado5, quadrado9);
	sequenciaDeJogadas(quadrado3, quadrado5, quadrado7);
}

function sequenciaDeJogadas(
	primeiroQuadradoEmSequencia,
	segundoQuadradoEmSequencia,
	terceiroQuadradoEmSequencia
) {
	if (
		checaSequencia(
			primeiroQuadradoEmSequencia,
			segundoQuadradoEmSequencia,
			terceiroQuadradoEmSequencia
		)
	) {
		mudaCorQuadrado(
			primeiroQuadradoEmSequencia,
			segundoQuadradoEmSequencia,
			terceiroQuadradoEmSequencia
		);
		mudarVencedor(primeiroQuadradoEmSequencia);
	}

	return;
}

function mudarVencedor(quadrado) {
	vencedor = quadrado.innerHTML;
	vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(primeiroQuadrado, segundoQuadrado, terceiroQuadrado) {
	primeiroQuadrado.style.color = "#3d2e9d";
	segundoQuadrado.style.color = "#3d2e9d";
	terceiroQuadrado.style.color = "#3d2e9d";
}

function checaSequencia(quadradoUm, quadradoDois, quadradoTres) {
	let ehIgual = false;

	if (
		quadradoUm.innerHTML !== "-" &&
		quadradoUm.innerHTML === quadradoDois.innerHTML &&
		quadradoDois.innerHTML === quadradoTres.innerHTML
	) {
		ehIgual = true;
	}

	return ehIgual;
}

function reiniciar() {
	vencedor = null;
	vencedorSelecionado.innerHTML = "";

	for (let index = 1; index <= 9; index++) {
		let quadrado = document.getElementById(index);
		quadrado.style.background = "#c2d162";
		quadrado.style.color = "#fff";
		quadrado.innerHTML = "";
	}

	mudarJogador("X");
}
