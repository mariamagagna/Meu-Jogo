// =====================================
// MOVIMENTAÇÃO DO PERSONAGEM
// =====================================
const jogo = document.getElementById("jogo");
const player = document.getElementById("player");

let x = 1500;
let y = 760;

player.style.left = x + "px";
player.style.top = y + "px";

let frame = false;
let animacao;

// Quando aperta uma tecla
document.addEventListener("keydown", (e)=>{

    // evita criar várias animações
    if(animacao) return;

    animacao = setInterval(()=>{

        frame = !frame;

        if(e.key=="ArrowRight"){

            let novoX = x + 10;

        if(podeMover(novoX, y)){
            x = novoX;
        }

            if(frame){
                player.src = "imagens/b2a8750e-49d2-409b-b4bc-bdc26144af69.png";
            }else{
                player.src = "imagens/b2a8750e-49d2-409b-b4bc-bdc26144af69.png";
            }

        }

        if(e.key=="ArrowLeft"){

            let novoX = x - 10;

        if(podeMover(novoX, y)){
            x = novoX;
        }

            if(frame){
                player.src = "imagens\\1ee1b649-3a5a-4562-95c6-47632c513201.png";
            }else{
                player.src = "imagens\\1ee1b649-3a5a-4562-95c6-47632c513201.png";
            }

        }

        if(e.key=="ArrowUp"){

            let novoY = y - 10;

        if(podeMover(x, novoY)){
            y = novoY;
        }

            if(frame){
                player.src = "imagens\\49b4c4f3-f2e8-47b4-adc3-121028f12f08.png";
            }else{
                player.src = "imagens\\49b4c4f3-f2e8-47b4-adc3-121028f12f08.png";
            }

        }

        if(e.key=="ArrowDown"){

            let novoY = y + 10;

        if(podeMover(x, novoY)){
            y = novoY;
        }

            if(frame){
                player.src = "imagens\\d22de59f-633a-458d-b52f-ad2231b5c865.png";
            }else{
                player.src = "imagens\\d22de59f-633a-458d-b52f-ad2231b5c865.png";
            }

        }

        // Limites da tela
        x = Math.max(0, Math.min(x, jogo.clientWidth - player.offsetWidth));
        y = Math.max(0, Math.min(y, jogo.clientHeight - player.offsetHeight));

        player.style.left = x + "px";
        player.style.top = y + "px";

        // Verifica se entrou em uma área de transição
        verificarTransicoes();

    },150);

});


// Quando solta a tecla
document.addEventListener("keyup", ()=>{

    clearInterval(animacao);
    animacao = null;

    // personagem parado olhando para frente
    player.src = "imagens\\359f4184-dca8-4f49-8183-3e7106645834.png";

});