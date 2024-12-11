let selectedReserve = null; // Armazena o jogador reserva selecionado

function loadAndChangeFormation(formationName, timeReserva) {
    console.log("Formação selecionada:", formationName);
    console.log("Time selecionado:", timeReserva);

    fetch('json/images.json')
        .then(response => response.json())
        .then(images => {
            fetch('json/formacoes.json')
                .then(response => response.json())
                .then(formations => {
                    fetch('json/reservas.json')
                        .then(response => response.json())
                        .then(reserves => {
                            // Verifica se o time selecionado existe no JSON de reservas
                            if (!reserves.reservas[timeReserva]) {
                                console.error("Time de reservas não encontrado:", timeReserva);
                                return;
                            }

                            // Seleciona o time de reservas e preenche a matriz de reservas
                            const selectedReserves = reserves.reservas[timeReserva];
                            const reservaMatrix = fillReservaMatrix(selectedReserves);  // Preenche a matriz de reservas

                            // Aplica a formação
                            changeFormation(formationName, formations, images, reservaMatrix);

                            // Exibe as reservas na parte de baixo
                            displayReserves(reservaMatrix, images);  // Agora passando reservaMatrix corretamente
                        })
                        .catch(error => console.error("Erro ao carregar o JSON de reservas:", error));
                })
                .catch(error => console.error("Erro ao carregar o JSON das formações:", error));
        })
        .catch(error => console.error("Erro ao carregar o JSON das imagens:", error));
}




function changeFormation(formationName, formations, images, reservaMatrix) {
    const container = document.getElementById('campo');
    container.innerHTML = '';

    const formation = formations[formationName];
    if (!formation) {
        console.log("Formação não encontrada!");
        return;
    }

    const rows = 5;
    const cols = 7;
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let position in formation) {
        const [i, j] = position.split("-").map(Number);
        matrix[i][j] = formation[position];
    }

    matrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value !== 0) {
                const player = document.createElement('div');
                player.classList.add('jogador');

                const img = document.createElement('img');
                img.classList.add('imagem-jogador');

                const imageKey = getImageKey(value);
                img.src = images[imageKey] || 'img/default.jpg'; // Garante um fallback para casos inesperados

                player.appendChild(img);
                player.style.gridRow = rowIndex + 1;
                player.style.gridColumn = colIndex + 1;

                player.addEventListener('click', () => {
                    if (selectedReserve) {
                        const reserveValue = selectedReserve.value; // Valor do jogador reserva
                        const titularValue = value; // Valor do jogador titular

                        const reserveType = selectedReserve.type; // Tipo do jogador reserva
                        const titularType = formation[`${rowIndex}-${colIndex}`].type; // Tipo do jogador titular na formação
                
                        // Verifica se a substituição é válida
                        if (canSubstitute(reserveType, titularType)) {
                            // Verifica as imagens antes de fazer as alterações
                            const reserveImgSrc = images[getImageKey(reserveValue)];
                            const titularImgSrc = images[getImageKey(titularValue)];
                    
                            console.log("Iniciando troca:");
                            console.log("Titular -> Valor:", titularValue, "Imagem:", titularImgSrc);
                            console.log("Reserva -> Valor:", reserveValue, "Imagem:", reserveImgSrc);
                    
                            // **Atualiza as matrizes**
                            matrix[rowIndex][colIndex] = reserveValue;
                            reservaMatrix[selectedReserve.rowIndex][selectedReserve.colIndex] = titularValue;
                    
                            // **Atualiza as imagens no DOM**
                            const reservePlayerElement = document.querySelector(
                                `#reservas .jogador[data-row="${selectedReserve.rowIndex}"][data-col="${selectedReserve.colIndex}"] img`
                            );
                            if (reservePlayerElement) {
                                reservePlayerElement.src = `${titularImgSrc}?timestamp=${new Date().getTime()}`; // Força atualização
                            } else {
                                console.error("Elemento de reserva não encontrado.");
                            }
                    
                            // Atualiza a imagem do jogador titular
                            const newImg = document.createElement('img');
                            newImg.classList.add('imagem-jogador');
                            newImg.src = `${reserveImgSrc}?timestamp=${new Date().getTime()}`; // Força a atualização com a imagem do reserva
                            player.replaceChild(newImg, img);
                    
                            console.log("Troca concluída. Reserva agora é titular, e titular foi para reserva.");
                    
                            // **Reseta a seleção de reserva**
                            selectedReserve = null;
                    
                            // **Re-renderiza o campo e as reservas** após a troca
                            displayReserves(reservaMatrix, images);
                            changeFormation(formationName, formations, images, reservaMatrix);
                        }
                    } else {
                        alert("Selecione um jogador da reserva primeiro!");
                    }
                });
                
                container.appendChild(player);
            }
        });
    });
}
