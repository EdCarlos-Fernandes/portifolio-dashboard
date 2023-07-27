// Função para criar a tabela
function criarTabela() {
    const data = [
        {
            nome: "Formação Front-End - 115h - ALURA",
            status: "completo",
            dataTermino: "01/08/2022",
        },
        {
            nome: "Microsoft SQL Server 2022 - 79h - ALURA",
            status: "cursando",
            dataTermino: "",
        },
        {
            nome: "Explore o Framework Angular - 55h - ALURA",
            status: "cursando",
            dataTermino: "",
        },
    ];
    // Ordenar o array de cursos por data de término e, em seguida, por nome em ordem alfabética
    data.sort((a, b) => {
        const dataTerminoA = new Date(a.dataTermino.split('/').reverse().join('/'));
        const dataTerminoB = new Date(b.dataTermino.split('/').reverse().join('/'));

        // Ordenar por data de término em ordem crescente
        if (dataTerminoA < dataTerminoB) {
            return -1;
        } else if (dataTerminoA > dataTerminoB) {
            return 1;
        }
    });




    const table = document.createElement("table");
    table.classList.add("table", "align-items-center", "mb-0");

    const thead = document.createElement("thead");
    thead.style.position = 'sticky';
    thead.style.top = '-25px';
    thead.style.backgroundColor = 'white';
    thead.style.color = 'gray';
    const trHead = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.classList.add("text-uppercase", "text-secondary", "text-xxs", "font-weight-bolder", "opacity-7");
    th1.textContent = "FORMAÇÃO ⬇️";

    const th2 = document.createElement("th");
    th2.classList.add("text-center", "text-uppercase", "text-secondary", "text-xxs", "font-weight-bolder", "opacity-7");
    th2.textContent = "STATUS / TÉRMINO ⬇️";


    trHead.appendChild(th1);
    trHead.appendChild(th2);

    thead.appendChild(trHead);

    const tbody = document.createElement("tbody");
    tbody.classList.add("bg-gradient-dark")

    data.forEach(item => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        const div1 = document.createElement("div");
        div1.classList.add("d-flex", "px-2", "py-1");
        const div1Inner = document.createElement("div");
        div1Inner.classList.add("d-flex", "flex-column", "justify-content-center");
        const h6 = document.createElement("h6");
        h6.classList.add("mb-0", "text-sm");
        h6.textContent = item.nome;
        div1Inner.appendChild(h6);
        div1.appendChild(div1Inner);
        td1.appendChild(div1);

        const td2 = document.createElement("td");
        td2.classList.add("align-middle", "text-center", "text-sm");
        const spanStatus = document.createElement("span");

        spanStatus.textContent = item.status;
        const spanDataTermino = document.createElement("span");
        spanDataTermino.classList.add("text-secondary", "text-xs", "font-weight-bold");
        spanDataTermino.textContent = item.dataTermino;

        if (item.status === "completo") {
            const imgEtiqueta = document.createElement("img");
            spanStatus.textContent = ''; 
            imgEtiqueta.src = "https://img.shields.io/badge/✓-Completo-green";
            imgEtiqueta.alt = "etiqueta comprovante de curso completo";
            imgEtiqueta.style.borderRadius = '10px 0 0 10px';
            spanStatus.appendChild(imgEtiqueta);

        } else if (item.status === "cursando") {
            const imgEtiqueta = document.createElement("img");
            spanStatus.textContent = ''; 
            imgEtiqueta.src = "https://img.shields.io/badge/🖍-Cursando-blue";
            imgEtiqueta.alt = "etiqueta comprovante de curso incompleto/cursando";
            imgEtiqueta.style.borderRadius = '10px 0 0 10px';
            spanStatus.appendChild(imgEtiqueta);

        }

        td2.appendChild(spanStatus);
        td2.appendChild(spanDataTermino);



        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    // Encontrando a div com a classe "cursos1"
    const divCursos1 = document.querySelector('.cursos2');


    divCursos1.appendChild(table);

}

// Chamando a função para criar a tabela
criarTabela();