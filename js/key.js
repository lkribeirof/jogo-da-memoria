function getImageKey(value) {
    const valueMap = {
        1: { imageKey: "goleiro", type: "goleiro" },
        12: { imageKey: "goleiroReserva", type: "goleiro" },
        
        2: { imageKey: "zagueiro", type: "zagueiro" },
        3: { imageKey: "zagueiroEsquerdo", type: "zagueiro" },
        13: { imageKey: "zagueiroReserva", type: "zagueiro" },
        14: { imageKey: "zagueiroReserva", type: "zagueiro" },
        
        4: { imageKey: "lateral", type: "lateral" },
        5: { imageKey: "lateralEsquerdo", type: "lateral" },
        15: { imageKey: "lateralReserva", type: "lateral" },
        16: { imageKey: "lateralReserva", type: "lateral" },
        
        6: { imageKey: "meiaDireita", type: "meio" },
        7: { imageKey: "meia", type: "meio" },
        8: { imageKey: "meiaEsquerda", type: "meio" },
        17: { imageKey: "meioReserva", type: "meio" },
        18: { imageKey: "meioReserva", type: "meio" },
        19: { imageKey: "meioReserva", type: "meio" },
        
        9: { imageKey: "pontaDireita", type: "atacante" },
        10: { imageKey: "atacante", type: "atacante" },
        11: { imageKey: "pontaEsquerda", type: "atacante" },
        20: { imageKey: "atacanteReserva", type: "atacante" },
        21: { imageKey: "atacanteReserva", type: "atacante" },
        22: { imageKey: "atacanteReserva", type: "atacante" },
    };

    return valueMap[value] || { imageKey: "default", type: "default" };
}
