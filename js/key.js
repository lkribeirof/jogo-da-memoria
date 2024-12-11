function getImageKey(value) {
    switch (value) {
        case 1:
        case 12:
            return "goleiro"; // Chave no JSON para goleiros
        case 2:
        case 3:
        case 13:
        case 14:
            return "zagueiro"; // Chave no JSON para zagueiros
        case 4:
        case 5:
        case 15:
        case 16:
            return "lateral"; // Chave no JSON para laterais
        case 6:
        case 7:
        case 8:
        case 17:
        case 18:
        case 19:
            return "meio"; // Chave no JSON para meio-campistas
        case 9:
        case 10:
        case 11:
        case 20:
        case 21:
        case 22:
            return "atacante"; // Chave no JSON para atacantes
        default:
            return "default"; // Retorna default caso não encontre o valor
    }
}
