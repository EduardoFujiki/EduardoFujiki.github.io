//COORDENADAS DO PLAYER 1
let x1 = 0;
let y1 = 160;

//COORDENADAS DO PLAYER 2
let x2 = 780;
let y2 = 160;

//COORDENADAS DA BOLINHA
let xb = 400;
let yb = 200;

//VARIAVEIS PARA A PONTUAÇÃO
let pointPlayer1 = 0;
let pointPlayer2 = 0;

let xVel = 2;
let yVel =  -1;

//VARIAVEL PARA VERIFICAR SE A PARTIDA ESTA EM ANDAMENTO OU NAO
let andamento; 

//IMAGEM DA BOLINHA
let img = document.getElementById("bolinha");
    
//VARIAVEL PARA PEGAR O VALOR DO TECLADO
let teclar = "";

//CANVAS
let c = document.getElementById("meucanvas");
let contexto = c.getContext("2d");


////////////////////////////////////////////////////FUNÇÕES QUE PEGAM AÇÕES DO TECLADO////////////////////////////////////////////////////
function OnKeyDown(event) {
    teclar = event.key;
}

function OnKeyUp(event) {
    teclar = "";
}

////////////////////////////////////////////////////////////////////----BOLA----////////////////////////////////////////////////////////////////////
function bola(){
    movBolinha();
    drawBola();
    colisao();
}

function drawBola(){
    //contexto.clearRect(x, y, width, height);
    contexto.clearRect(20, 0, 760, 400); //xb, yb, 15, 15
    contexto.drawImage(img, xb, yb, 20, 20);
}

function colisao(){
    let ySup1 = y1 - 10;       //parte de cima da barra do player 1
    let yInf1 = y1 + 80;       //parte de baixo da barra do player 1
    let ySup2 = y2 - 10;       //parte de cima da barra do player 2
    let yInf2 = y2 + 80;       //parte de cima da barra do player 2
    let player1Largura = 20;
    let player2Largura = 760;
    
    if(xb<=player1Largura && xb>0){
        if(yb>=ySup1 && yb<=yInf1){
            xVel *= -1;
        }
    }
    if(xb>=player2Largura && xb<800){
        if(yb>=ySup2 && yb<=yInf2){
            xVel *= -1;
        }
    }
    if(yb-10<=-10){
        yVel *= -1;
    }
    if(yb-10>375){
        yVel *= -1;
    } 
}  

function movBolinha(){
    xb = xb + xVel;
    yb = yb + yVel;
}

////////////////////////////////////////////////////////////////FUNÇÔES DO PLAYER 1////////////////////////////////////////////////////////////////
function player1(){
    movPlayer1();
    drawPlayer1();
}

function drawPlayer1(){  //let y1 = 160;
        contexto.clearRect(0, 0, 20, 400); // 0  0  20  400
        
        contexto.fillStyle = "red";
        contexto.fillRect(x1, y1, 20, 80);
}

function movPlayer1() {
    if (teclar == "w"){
        if(y1>0){
            y1 -= 2;
            y1Atual = y1;
        } else y1 = 0;
    }
    if (teclar == "s"){
        if(y1<320){
            y1 += 2;
            y1Atual = y1;
        } else y1 = 320;
    }
}

////////////////////////////////////////////////////////////////FUNÇÔES DO PLAYER 2////////////////////////////////////////////////////////////////
function player2(){
    movPlayer2();
    drawPlayer2();
}

function drawPlayer2(){
    
    contexto.clearRect(800, 400, -20, -400);
    contexto.fillStyle = "blue";
    contexto.fillRect(x2, y2, 20, 80);
}

function movPlayer2() {
    if (teclar == "8"){
        if(y2>0){
            y2 -= 2;
        } else y2 = 0;
    }
    if (teclar == "5"){
        if(y2<320){
            y2 += 2;
        } else y2 = 320;
    }
}

//////////////////////////////////////////////////////////FUNÇÕES GERAIS DO JOGO//////////////////////////////////////////////////////////

function telaInicial(){ //seta as posiçoes iniciais dos desenhos ao abrir a pagina do jogo
    drawPlayer1();
    drawPlayer2();
    drawBola();
}

function iniciaPartida(){
    // console.log(xb);
    // console.log(yb);
    // console.log(xVel);
    // console.log(yVel);
    setInterval(player1, 0);
    setInterval(player2, 0);
    setInterval(bola, 0);
    setInterval(pontuação, 0);
}

function posicionarBola(){
    xb = 400;
    yb = 200;
    xVel = 0;
    yVel = 0;
    contexto.clearRect(0, 0, 800, 400); 
    contexto.drawImage(img, xb, yb, 20, 20);
}

function zeraPlacar(){
    pointPlayer1 = 0;
    pointPlayer2 = 0;
}

function finalizaJogo(){
    posicionarBola();
    zeraPlacar();
    // console.log(xb);
    // console.log(yb);
    // console.log(xVel);
    // console.log(yVel);
}

function reiniciaPartida(){
    posicionarBola();
    xVel = 2;
    yVel = 1;
    iniciaPartida();
}

function pontuação(){
    let tbody2 = document.getElementById("valores");
    valores.innerText = ''; 

    let tr = tbody2.insertRow();
    let player1 = tr.insertCell();
    let player2 = tr.insertCell();
    
    if(xb==800){
        pointPlayer1++;
        player1.innerText = pointPlayer1;
        console.log(player2);
        reiniciaPartida();
        console.log("jogador 1");
        console.log(pointPlayer1);
    }
    if(xb==0){
        pointPlayer2++;
        player2.innerText = pointPlayer2;
        console.log(player2);
        reiniciaPartida();
        console.log("jogador 2");
        console.log(pointPlayer2);
    }
}


telaInicial();





