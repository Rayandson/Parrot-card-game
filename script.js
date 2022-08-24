let gifs = ['footballparrot','footballparrot','mustacheparrot','mustacheparrot','birthdayparrot','birthdayparrot','headbangingparrot',
'headbangingparrot','scientistparrot','scientistparrot','soccerparrot','soccerparrot','pirateparrot','pirateparrot','brazilparrot','brazilparrot',
'popcornparrot','popcornparrot','policeparrot','policeparrot','sunglassparrot','sunglassparrot','tenisparrot','tenisparrot']
let liberaClique = true;
const correctSound = new Audio();
correctSound.src = "./sons/correct-choice.wav";
function somCorreto() {
    correctSound.play();
}

const incorrect_sound = new Audio();
incorrect_sound.src = "./sons/wronganswer.mp3"
function somIncorreto() {
    incorrect_sound.play();
}

const congrats_sound = new Audio();
congrats_sound.src = "./sons/congrats1.wav"
function somVictory() {
    congrats_sound.play();
}

let qntd = 0;
let condicao = false;
while (condicao === false) {
qntd = prompt("Esolha a quantidade de cartas (Número par entre 4 e 24):");
if(qntd%2===0 && qntd>=4 && qntd <=24) {
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
let meuInterval;
 function contar() {
    meuInterval = setInterval(atualizaContagem, 1000);
 }
let seg = 0;
 function atualizaContagem() {
    seg = seg + 1;
    let contador = document.querySelector(".seg");
    contador.innerHTML = `${seg}`;
 }

function criarCartas() {
    for(let j = 0; j<qntd; j++) {
        let cartas = document.querySelector(".cartas");
        cartas.innerHTML = cartas.innerHTML + `<div class="carta" onclick="virarCarta(this)"><div class="front-face face"><img src="./images/front.png" alt="" /></div><div class="back-face face"><img src="./images/${pares[j]}.gif" alt="" /></div></div>`
    }
    contar();
}

 criarCartas();

let compara2cartas = []; 
let cartasViradas = "";
let valor = "";
let paresCertos = 0;
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
            setTimeout(somCorreto, 200);
            compara2cartas.length = 0;
            if(paresCertos === qntd/2) {
                setTimeout(somVictory, 200);
                setTimeout(fimDeJogo, 300);
                clearInterval(meuInterval);
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
            setTimeout(somIncorreto, 200);
            
        }
    }
}
}

//     function redimensionarCartas(){
//         if(qntd>12){
//         let cartas = document.querySelector(".cartas");
//         let carta = document.querySelectorAll(".carta");
//         let imgCarta = document.querySelectorAll(".carta img");

//         for(let i=0; i<=qntd; i++){
//         cartas.style.width = "1100px";
//         carta[i].style.width = "110px";
//         carta[i].style.height = "137px";
//         imgCarta[i].style.width = "85px";
//         }
//     }
    
// }
// redimensionarCartas();

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
let pontuacao;;
function fimDeJogo() {
    pontuacao = 100000*qntd/((10*contaJogadas)+(5*seg))
    alert(`Você ganhou em ${contaJogadas} jogadas e ${seg} segundos!\nScore: ${pontuacao.toFixed(0)} pts`);
    let perguntaDenovo = true;
    while(perguntaDenovo === true) {
    let jogaNovamente = prompt("Deseja jogar novamente ?")
    if (jogaNovamente === "sim") {
        perguntaDenovo = false;
        location.reload();
    } else if (jogaNovamente === "não") {
        perguntaDenovo = false;
    } else {perguntaDenovo = true;}
}
}


