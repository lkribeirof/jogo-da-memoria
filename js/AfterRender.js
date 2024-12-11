function updateImagesAfterRender(matrix, reservaMatrix, images) {
    const titularContainer = document.querySelectorAll('#campo .jogador img');
    const reservaContainer = document.querySelectorAll('#reservas .jogador img');

    // Atualiza as imagens dos titulares
    matrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value !== 0) {
                const imageKey = getImageKey(value);
                const imgSrc = images[imageKey] || 'img/default.jpg';
                const imgElement = titularContainer[rowIndex * 7 + colIndex];
                if (imgElement) imgElement.src = imgSrc;
            }
        });
    });

    // Atualiza as imagens dos reservas
    reservaMatrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value !== 0) {
                const imageKey = getImageKey(value);
                const imgSrc = images[imageKey] || 'img/default.jpg';
                const imgElement = reservaContainer[rowIndex * 7 + colIndex];
                if (imgElement) imgElement.src = imgSrc;
            }
        });
    });
}
