let gifs = ['<div class="carta tipo1" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/bobrossparrot.gif" alt="" /></div></div>','<div class="carta tipo1" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/bobrossparrot.gif" alt="" /></div></div>',
'<div class="carta tipo2" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/explodyparrot.gif" alt="" /></div></div>','<div class="carta tipo2" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/explodyparrot.gif" alt="" /></div></div>',
'<div class="carta tipo3" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/fiestaparrot.gif" alt="" /></div></div>','<div class="carta tipo3" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/fiestaparrot.gif" alt="" /></div></div>',
'<div class="carta tipo4" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/metalparrot.gif" alt="" /></div></div>','<div class="carta tipo4" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/metalparrot.gif" alt="" /></div></div>',
'<div class="carta tipo5" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/revertitparrot.gif" alt="" /></div></div>','<div class="carta tipo5" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/revertitparrot.gif" alt="" /></div></div>',
'<div class="carta tipo6" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/tripletsparrot.gif" alt="" /></div></div>','<div class="carta tipo6" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/tripletsparrot.gif" alt="" /></div></div>',
'<div class="carta tipo7" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/unicornparrot.gif" alt="" /></div></div>','<div class="carta tipo7" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/unicornparrot.gif" alt="" /></div></div>']

// gifs.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// // Esta função pode ficar separada do código acima, onde você preferir
// function comparador() { 
// 	return Math.random() - 0.5; 
//  }

let qntd = 0;
let condicao = false;
while (condicao === false) {
qntd = prompt("Esolha a quantidade de cartas (Número par entre 4 e 14):");
if(qntd%2===0 && qntd>=4 && qntd <=14) {
    condicao = true;
}
}
let pares = [];
function gerarPares() {
    for(let i = 0; i<qntd; i++) {
    pares.push(`${gifs[i]}`);
    }
}

gerarPares();
pares.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
 }
function criarCartas() {
    for(let j = 0; j<qntd; j++) {
        let cartas = document.querySelector(".cartas");
        cartas.innerHTML = cartas.innerHTML + `${pares[j]}`
    }
}

criarCartas();

function virarCarta(carta) {
    let back = carta.querySelector(".back-face");
    let front = carta.querySelector(".front-face")
    back.style.transform = "rotateY(0deg)";
    front.style.transform = "rotateY(-180deg)";
}