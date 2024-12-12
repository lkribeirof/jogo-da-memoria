function fillReservaMatrix(reserves) {
    let reservaMatrix = Array.from({ length: 5 }, () => Array(7).fill(0));

    for (let position in reserves) {
        const [i, j] = position.split("-").map(Number);
        reservaMatrix[i][j] = reserves[position].value; // Acessar o campo "value"
    }

    console.log("Matriz de reservas preenchida:", reservaMatrix);
    return reservaMatrix;
}



function substitutePlayer(playerElement, rowIndex, colIndex, reservaMatrix, images) {
    const reservaPlayer = reservaMatrix[rowIndex][colIndex];
    console.log(`Tentando substituir jogador na posição (${rowIndex}, ${colIndex})`);
    console.log("Jogador na posição:", reservaPlayer);

    // Verifique se a posição na matriz de reservas tem um jogador
    if (reservaPlayer === 0) {
        alert("Não há jogador para substituir nessa posição.");
        return;
    }

    // Caso contrário, faça a substituição
    const img = playerElement.querySelector('img');
    switch (reservaPlayer) {
        case 12:
            img.src = images.reserva;  // Substituir pelo goleiro
            break;
        case 13:
        case 14:
            img.src = images.reserva;  // Substituir pelo zagueiro
            break;
        case 15:
        case 16:
            img.src = images.reserva;  // Substituir pelo lateral
            break;
        case 17:
        case 18:
        case 19:
            img.src = images.reserva;  // Substituir pelo meio-campo
            break;
        case 20:
        case 21:
        case 22:
            img.src = images.reserva;  // Substituir pelo atacante
            break;
    }

    // Troca o valor na matriz de titulares
    reservaMatrix[rowIndex][colIndex] = reservaPlayer;

    // Limpeza da posição do jogador substituído na reserva
    reservaMatrix[rowIndex][colIndex] = 0;

    console.log("Substituição feita");
}
