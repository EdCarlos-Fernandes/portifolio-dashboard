// Função para criar a tabela
function criarTabela() {
    const data = [
        {
            nome: "ARQUITETURA CSS: DESCOMPLICANDO OS PROBLEMAS",
            status: "completo",
            dataTermino: "01/08/2022",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/arquitetura-css/certificate"
        },
        {
            nome: "FLEXBOX: POSICIONE ELEMENTOS NA TELA",
            status: "completo",
            dataTermino: "13/03/2023",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/posicione-elementos-com-flexbox/certificate"
        },
        {
            nome: "HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB",
            status: "completo",
            dataTermino: "03/12/2021",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/html5-css3-primeiros-passos/certificate"
        },
        {
            nome: "HTML5 E CSS3 PARTE 2: POSICIONAMENTO, LISTAS E NAVEGAÇÃO",
            status: "completo",
            dataTermino: "03/12/2021",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/html5-css3-posicionamento-listas-navegacao/certificate"
        },
        {
            nome: "HTML5 E CSS3 PARTE 3: TRABALHANDO COM FORMULÁRIOS E TABELAS",
            status: "completo",
            dataTermino: "05/12/2021",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/html5-css3-formularios-tabelas/certificate"
        },
        {
            nome: "HTML5 E CSS3 PARTE 4: AVANÇANDO NO CSS",
            status: "completo",
            dataTermino: "05/12/2021",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/html5-css3-avancando-css/certificate"
        },
        {
            nome: "JAVASCRIPT: EXPLORANDO A LINGUAGEM",
            status: "completo",
            dataTermino: "19/12/2021",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/javascript-introducao/certificate"
        },
        {
            nome: "JAVASCRIPT: PROGRAMANDO A ORIENTAÇÃO A OBJETOS",
            status: "completo",
            dataTermino: "24/03/2022",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/javascritpt-orientacao-objetos/certificate"
        },
        {
            nome: "MICROSOFT SQL SERVER 2022: CONHECENDO SQL",
            status: "completo",
            dataTermino: "25/07/2023",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/microsoft-sql-server-conhecendo-sql/certificate"
        },
        {
            nome: "PHP: CONCEITOS, LIDANDO COM DADOS, LOOPS E MAIS",
            status: "completo",
            dataTermino: "22/01/2022",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/php-primeiros-passos/certificate"
        },
        {
            nome: "SEO: OTIMIZAÇÃO DE SITES",
            status: "completo",
            dataTermino: "02/08/2022",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/seo-otimizacao-sites/certificate"
        },
        {
            nome: "WORDPRESS: INTEGRAÇÃO WHATSAPP E INTERNACIONALIZAÇÃO",
            status: "completo",
            dataTermino: "19/01/2022",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/wordpress-integracao-whatsapp/certificate"
        },
        {
            nome: "Wordpress: sites com Elementor",
            status: "completo",
            dataTermino: "17/01/2022",
            certificado: "Certificado",
            link: "https://cursos.alura.com.br/user/ed-fernandes/course/worpress-sites-elementor/certificate"
        }
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
    th1.textContent = "CURSO ⬇️";

    const th2 = document.createElement("th");
    th2.classList.add("text-center", "text-uppercase", "text-secondary", "text-xxs", "font-weight-bolder", "opacity-7");
    th2.textContent = "STATUS / TÉRMINO ⬇️";

    const th3 = document.createElement("th");
    th3.classList.add("text-center", "text-uppercase", "text-secondary", "text-xxs", "font-weight-bolder", "opacity-7");
    th3.textContent = "CERTIFICADOS ⬇️";

    trHead.appendChild(th1);
    trHead.appendChild(th2);
    trHead.appendChild(th3);

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
            imgEtiqueta.alt = "Visto";
            imgEtiqueta.style.borderRadius = '10px 0 0 10px';
            spanStatus.appendChild(imgEtiqueta);

        } else if (item.status === "cursando") {
            const imgEtiqueta = document.createElement("img");
            spanStatus.textContent = ''; 
            imgEtiqueta.src = "https://img.shields.io/badge/🖍-Cursando-blue";
            imgEtiqueta.alt = "X";
            imgEtiqueta.style.borderRadius = '10px 0 0 10px';
            spanStatus.appendChild(imgEtiqueta);

        }

        td2.appendChild(spanStatus);
        td2.appendChild(spanDataTermino);

        const td3 = document.createElement("td");
        td3.classList.add("align-middle", "text-center");
        const aCertificado = document.createElement("a");
        aCertificado.classList.add("text-xs", "font-weight-bold");
        aCertificado.textContent = item.certificado;
        aCertificado.style.color = '#e91e63';
        aCertificado.href = item.link;
        aCertificado.target = '_blank';
        aCertificado.style.cursor = 'pointer';
        td3.appendChild(aCertificado);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    // Encontrando a div com a classe "cursos1"
    const divCursos1 = document.querySelector('.cursos1');


    divCursos1.appendChild(table);

}

// Chamando a função para criar a tabela
criarTabela();