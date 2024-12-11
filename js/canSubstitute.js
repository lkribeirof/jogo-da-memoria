function canSubstitute(reserveType, titularType) {
    // Verifica se os tipos de jogador são os mesmos
    if (reserveType !== titularType) {
        alert("Você só pode substituir jogadores do mesmo tipo (por exemplo, goleiro com goleiro, lateral com lateral).");
        return false;
    }
    return true;
}
