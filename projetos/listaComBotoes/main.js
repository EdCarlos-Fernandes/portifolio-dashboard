const label__texto = document.querySelector(".caixa__label__texto");
const nomeTexto = document.querySelector("#novoTexto");
const btnAdicionarAntes = document.querySelector("#btnAdicionarAntes");
// const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois");
// const btnRemover = document.querySelector("#btnRemover");
const btnSelecionado = document.querySelector("#btnSelecionado");
const caixa__2 = document.querySelector(".caixa__2");
const fazer__pesquisa = document.querySelector("#fazer__pesquisa");
const resultado = document.querySelector("#pesquisa__resultado");
const pesquisar = document.querySelector("#pesquisar");

const array = []

let indice = 0;


const contarDigitos = () => {
    const test = (digitos) => {
    if (digitos === 1 || digitos === 0) {
        return " Dígito";
    } else
        return " Dígitos";
    };

    const digitos = nomeTexto.value.length;
    label__texto.innerHTML = `${digitos} ${test(digitos)}`;
};

const textoSelecionado = () => {
    const textosSelecionados = [...document.querySelectorAll(".selecionado")];
    return textosSelecionados[0]
}
const criarNovoElemento = (texto) => {
    const novoElemento = document.createElement("div");
    const remover = document.createElement("button");

    const tirarSelecao = () => {
        const selecionados = [...document.querySelectorAll(".selecionado")];
        selecionados.forEach((el) => {
            el.classList.remove("selecionado");
        })
    }

    novoElemento.setAttribute("class", "textos");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.innerHTML = texto
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado");
    })

    remover.setAttribute("id", "remover");
    remover.innerHTML = "";
    remover.addEventListener("click", () => {
        novoElemento.remove();
        const indiceRemovido = array.indexOf(texto);
        if (indiceRemovido !== -1) {
            array.splice(indiceRemovido, 1);
        }
    })

    novoElemento.appendChild(remover);
    return novoElemento
};
const pesquisa = () => {
    const pesquisa = document.getElementById("pesquisar").value;
    return array.filter((el) =>
        el.toUpperCase() === pesquisa.toUpperCase()
    );
}


nomeTexto.addEventListener("input", () => {
    contarDigitos();
});

array.forEach((el) => {
    const novoElemento = criarNovoElemento(el)
    caixa__2.appendChild(novoElemento);
    indice++
})

btnAdicionarAntes.addEventListener("click", () => {
    if (nomeTexto.value !== "") {
        array.push(nomeTexto.value);
        caixa__2.insertBefore(criarNovoElemento(nomeTexto.value), textoSelecionado());
    } else {
        alert("Digite um texto");
    }
});

// btnAdicionarDepois.addEventListener("click", () => {
//     if (textoSelecionado()) {
//         if (nomeTexto.value !== "") {
//             array.push(nomeTexto.value);
//             caixa__2.insertBefore(criarNovoElemento(nomeTexto.value), textoSelecionado().nextSibling);
//         } else {
//             alert("Digite um texto");
//         }
//     } else {
//         alert("Selecione algum texto");
//     }
// })

// btnRemover.addEventListener("click", () => {
//     if (textoSelecionado()) {
//         textoSelecionado().remove();
//     } else {
//         alert("Selecione algum texto");
//     }
// })

btnSelecionado.addEventListener("click", () => {
    if (textoSelecionado()) {
        alert(textoSelecionado().textContent);
    } else {
        alert("Selecione algum texto");
    }
})

fazer__pesquisa.addEventListener("click", () => {
    if (pesquisa().length > 0) {
        resultado.innerHTML = `O nome "${pesquisar.value}" pesquisado está na lista`;
    } else {
        resultado.innerHTML = `O nome "${pesquisar.value}" pesquisado não foi encontrado na lista`;
    }
});
