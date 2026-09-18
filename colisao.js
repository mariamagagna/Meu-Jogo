// =====================================
// COLISÃO
// =====================================

function bate(objeto, novoX, novoY){

    return (
        novoX < objeto.x + objeto.largura &&
        novoX + player.offsetWidth > objeto.x &&
        novoY < objeto.y + objeto.altura &&
        novoY + player.offsetHeight > objeto.y
    );

}

function podeMover(novoX, novoY){

    for(let objeto of objetos){

        if(bate(objeto, novoX, novoY)){
            return false;
        }

    }

    return true;

}