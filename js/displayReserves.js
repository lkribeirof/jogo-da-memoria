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

                const { imageKey, type } = getImageKey(value); // Busca chave e tipo
                img.src = images[imageKey] || 'img/erro.png';  // Fallback para imagens ausentes

                // Atributos para localização e tipo
                player.setAttribute('data-row', rowIndex);
                player.setAttribute('data-col', colIndex);
                player.dataset.type = type;

                player.appendChild(img);
                reserveContainer.appendChild(player);

                player.addEventListener('click', () => {
                    selectedReserve = { rowIndex, colIndex, value, type };
                    alert(`Jogador reserva ${value} (${type}) selecionado!`);
                });
            }
        }
    }
}
