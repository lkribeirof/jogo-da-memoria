let pontos = 0; // Inicializa os pontos
let vidas = 3;  // Inicializa as vidas (pode ajustar o número conforme necessário)

function testePontos(reserveType, titularType) {
    // Verifica se a substituição foi correta (acerto)
    if (reserveType === titularType) {
        pontos += 1;
        console.log("Acertou! Pontos: " + pontos);

    } else {
        vidas -= 1;
        console.log("Errou! Vidas restantes: " + vidas);
    }

    // Atualiza a interface (por exemplo, mostrando as vidas e pontos na tela)
    document.getElementById("pontos").innerText = "Pontos: " + pontos;
    document.getElementById("vidas").innerText = "Vidas: " + vidas;

    // Verifica se as vidas acabaram
    if (vidas <= 0) {
        alert("Você perdeu! Game Over!");
        // Aqui pode adicionar lógica para reiniciar o jogo ou outras ações
    }
}