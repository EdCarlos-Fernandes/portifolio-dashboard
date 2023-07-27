let input = document.querySelector(".input-numero");
let botao_gerar = document.querySelector(".botao-gerar");
let botao_limpar = document.querySelector(".botao-limpar");
let resultado = document.querySelector(".resultado");

botao_gerar.addEventListener("click", () => {
    if (input.value === "") {
        alert("Digite algum número para começar");
    } else {
        resultado.innerHTML = "";

        let i = 1;
        const novoElemento__div = document.createElement("div");
        novoElemento__div.setAttribute("class", "tabuada");

        let intervalId = setInterval(() => {
            if (i <= 10) {
                const novoElemento__p = document.createElement("p");
                novoElemento__p.setAttribute("class", "res");
                novoElemento__p.innerHTML = `${input.value} x ${i} = ${input.value * i}`;

                novoElemento__div.appendChild(novoElemento__p);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 70);

        resultado.appendChild(novoElemento__div);
    }
});

botao_limpar.addEventListener("click", () => {
    let linhas = document.querySelectorAll(".res");
    let i = linhas.length - 1;

    if (linhas.length > 0) {
        let intervalId = setInterval(() => {
            if (i >= 0) {
                linhas[i].style.opacity = "0";
                linhas[i].addEventListener("transitionend", () => {
                    linhas[i].parentNode.removeChild(linhas[i]);
                });
                i--;
            } else {
                clearInterval(intervalId);
                resultado.innerHTML = "";
                input.value = ""
            }
        }, 70);
    }
});

