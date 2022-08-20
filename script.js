let gifs = ['<div class="carta tipo1" name="1" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/bobrossparrot.gif" alt="" /></div></div>','<div class="carta tipo1" name="1" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/bobrossparrot.gif" alt="" /></div></div>',
'<div class="carta tipo2" name="2" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/explodyparrot.gif" alt="" /></div></div>','<div class="carta tipo2" name="2" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/explodyparrot.gif" alt="" /></div></div>',
'<div class="carta tipo3" name="3" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/fiestaparrot.gif" alt="" /></div></div>','<div class="carta tipo3" name="3" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/fiestaparrot.gif" alt="" /></div></div>',
'<div class="carta tipo4" name="4" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/metalparrot.gif" alt="" /></div></div>','<div class="carta tipo4" name="4" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/metalparrot.gif" alt="" /></div></div>',
'<div class="carta tipo5" name="5" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/revertitparrot.gif" alt="" /></div></div>','<div class="carta tipo5" name="5" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/revertitparrot.gif" alt="" /></div></div>',
'<div class="carta tipo6" name="6" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/tripletsparrot.gif" alt="" /></div></div>','<div class="carta tipo6" name="6" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/tripletsparrot.gif" alt="" /></div></div>',
'<div class="carta tipo7" name="7" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/unicornparrot.gif" alt="" /></div></div>','<div class="carta tipo7" name="7" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/unicornparrot.gif" alt="" /></div></div>']

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

let compara2cartas = []; 
let cartasViradas = "";
let valor = "";
let paresCertos = 0;
let liberaClique = true;
let contaJogadas = 0;
function virarCarta(carta) {
    if(liberaClique === true) {
    let back = carta.querySelector(".back-face");
    let front = carta.querySelector(".front-face")
    back.style.transform = "rotateY(0deg)";
    front.style.transform = "rotateY(-180deg)";
    carta.classList.add("virada");
    cartasViradas = document.querySelectorAll(".virada");
    carta.classList.add("inactive");
    valor = carta.innerHTML;
    compara2cartas.push(`${valor}`);
    contaJogadas++;
    
    if(compara2cartas.length === 2) {
        if(compara2cartas[0] === compara2cartas[1]) {
            paresCertos++;
            compara2cartas.length = 0;
            if(paresCertos === qntd/2) {
                setTimeout(fimDeJogo, 300);
            }
            for(let i=0; i<2; i++) {
            (cartasViradas[i]).classList.remove("virada");
            cartasViradas.length = 0;
            }
        } else {
            for(let j=0; j<2; j++) {
                (cartasViradas[j]).classList.remove("inactive");
            }
            compara2cartas.length = 0;
            liberaClique = false;
            setTimeout(desviraCarta, 1000);
            
        }
    }
}
}
let viradas = "";
let tras = "";
let frente = "";
function desviraCarta() {
    viradas = document.querySelectorAll(".virada");
    
    for(i=0; i<2; i++) {
        tras = (viradas[i]).querySelector(".back-face");
        frente = (viradas[i]).querySelector(".front-face");
        tras.style.transform = "rotateY(-180deg)";
        frente.style.transform = "rotateY(0deg)";
        (viradas[i]).classList.remove("virada");
    }
    liberaClique = true;
}

function fimDeJogo() {
    alert(`Você ganhou em ${contaJogadas} jogadas!`);
}
