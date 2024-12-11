function displayReserves(reservaMatrix, images) {
    const reserveContainer = document.getElementById('reservas');
    reserveContainer.innerHTML = '';

    for (let rowIndex = 0; rowIndex < reservaMatrix.length; rowIndex++) {
        const row = reservaMatrix[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            const value = row[colIndex];
            if (value !== 0) { // Verifica se há um jogador nessa posição
                const player = document.createElement('div');
                player.classList.add('jogador');

                const img = document.createElement('img');
                img.classList.add('imagem-jogador');

                const imageKey = getImageKey(value);
                img.src = images[imageKey] || 'img/default.jpg'; // Garante um fallback se a chave não existir

                // Atributos para localização
                player.setAttribute('data-row', rowIndex);
                player.setAttribute('data-col', colIndex);

                // Adiciona o tipo ao jogador da reserva
                player.dataset.type = row[colIndex].type;

                player.appendChild(img);
                reserveContainer.appendChild(player);

                player.addEventListener('click', () => {
                    // Armazena o jogador reserva selecionado
                    selectedReserve = { rowIndex, colIndex, value, type: row[colIndex].type }; // Agora com tipo
                    alert(`Jogador reserva ${value} selecionado!`);
                });
            }
        }
    }
}
