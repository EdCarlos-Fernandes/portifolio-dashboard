const joguinho = () => {
    let j1 = parseInt(prompt("Jogador 1, digite um número"));
    let j2 = parseInt(prompt("Jogador 2, digite um número"));

    let jogo = {
        primeiro: j1,
        segundo: j2,
        moeda: Math.floor(Math.random() * 2),
    };

    const jogada = (x) => {
        const caraCoroa = (x1) => {
            if (x1 === 0) {
                return "CARA";
            } else if (x1 === 1) {
                return "COROA";
            }
        };
        const ganhador = (x2) => {
            const vencedor = (x2 === "CARA" && jogo.primeiro < jogo.segundo) || (x2 === "COROA" && jogo.primeiro > jogo.segundo) ? "Jogador 1" : "Jogador 2";
            alert(`Parabéns ${vencedor}, você foi o vencedor!`);
        };

        alert("Vamos jogar uma moeda \n\n" +
            "Se der 'CARA', ganha quem digitou o MENOR número \n" +
            "Se der 'COROA', ganha quem digitou o MAIOR número."
        );

        alert(`O resultado foi: ${caraCoroa(x)}`);
        ganhador(caraCoroa(x));
    };

    jogada(jogo.moeda);
};

joguinho()
