const DEBUG = true;

function desenharColisoes(){

    if(!DEBUG) return;

    const jogo = document.getElementById("jogo");

    objetos.forEach(objeto=>{

        const caixa = document.createElement("div");

        caixa.classList.add("debug");

        caixa.style.left = objeto.x + "px";
        caixa.style.top = objeto.y + "px";

        caixa.style.width = objeto.largura + "px";
        caixa.style.height = objeto.altura + "px";

        caixa.innerText = objeto.nome;

        jogo.appendChild(caixa);

    });

}

desenharColisoes();