// ======================================
// MAPAS DO JOGO
// ======================================

let mapaAtual = "andar1";

// ======================================
// EFEITO DE TRANSIÇÃO
// ======================================
function trocarMapa(carregarMapa){

    const fade = document.getElementById("fade");

    // Escurece a tela
    fade.style.opacity = "1";

    setTimeout(() => {

        // Troca o mapa
        carregarMapa();

        // Clareia a tela
        fade.style.opacity = "0";

    }, 600);

}

// ======================================
// CARREGAR ANDAR 1
// ======================================
function carregarAndar1(){

    mapaAtual = "andar1";

    objetos = objetosAndar1;

    document.getElementById("cenario").src =
    "imagens/andar1.png";

    // Mostrar móveis
    document.getElementById("moveis").style.display = "block";

    // Mostra novamente as caixas de debug
    document.querySelectorAll(".debug").forEach(caixa => {
        caixa.style.display = "block";
    });

    // Personagem aparece no pé da escada
    x = 1660;
    y = 70;

    player.style.left = x + "px";
    player.style.top = y + "px";

    console.log("Entrou no andar 1");
}

// ======================================
// CARREGAR ANDAR 2
// ======================================
function carregarAndar2(){

    mapaAtual = "andar2";

    objetos = objetosAndar2;

    document.getElementById("cenario").src =
    "imagens/ChatGPT Image 20 de jul. de 2026, 11_18_31.png";

    // Esconder móveis
    document.getElementById("moveis").style.display = "none";

    // Esconde todas as caixas de debug
    document.querySelectorAll(".debug").forEach(caixa => {
        caixa.style.display = "none";
    });

    // Personagem aparece no topo da escada
    x = 1650;
    y = 120;

    player.style.left = x + "px";
    player.style.top = y + "px";

    console.log("Entrou no andar 2");
}

// ======================================
// TRANSIÇÕES
// ======================================
function verificarTransicoes(){

    if(mapaAtual == "andar1" && x > 1700 && y < 120){

        trocarMapa(carregarAndar2);

    }

    if(mapaAtual == "andar2" && x > 1700 && y < 120){

        trocarMapa(carregarAndar1);

    }
}