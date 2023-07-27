// Função auxiliar para criar elementos com atributos
function createAndSetAttributes(elementType, attributes) {
    const element = document.createElement(elementType);
    for (const attribute in attributes) {
        element[attribute] = attributes[attribute];
    }
    return element;
}



// Criação do cabeçalho
const sideNavHeader = createAndSetAttributes('div', {
    className: 'sidenav-header',
});
document.querySelector('.aSide1').appendChild(sideNavHeader);

const sideNavHeaderImg = createAndSetAttributes('img', {
    src: 'https://img.icons8.com/?size=512&id=119731&format=png',
    alt: 'clique aqui para fechar o menu lateral',
    className: 'position-absolute imgg',
});
sideNavHeaderImg.style.width = '25px';
sideNavHeaderImg.style.position = 'absolute';
sideNavHeaderImg.style.top = '5px';
sideNavHeaderImg.style.right = '5px';
sideNavHeader.appendChild(sideNavHeaderImg);
sideNavHeaderImg.addEventListener("click", () => {
    let sideNav = document.querySelector('#sidenav-main');
    sideNav.style.transform = 'translateX(-18rem)';
});


document.querySelector('.aSide1').appendChild(createAndSetAttributes('hr', {
    className: 'horizontal light mt-0 mb-2',
}));





// Criação do menu lateral
const sideNavMenu = createAndSetAttributes('div', {
    className: 'collapse navbar-collapse w-auto',
    id: 'sidenav-collapse-main',
});
document.querySelector('.aSide1').appendChild(sideNavMenu);

const ul = createAndSetAttributes('ul', {
    className: 'navbar-nav',
});
sideNavMenu.appendChild(ul);




// Função para criar os itens do menu lateral
function createNavItem(icon, text, link) {
    const li = createAndSetAttributes('li', {
        className: 'nav-item',
    });
    ul.appendChild(li);

    const liA = createAndSetAttributes('a', {
        className: 'nav-link text-white',
        href: link,
    });
    li.appendChild(liA);

    const liADiv = createAndSetAttributes('div', {
        className: 'text-white text-center me-2 d-flex align-items-center justify-content-center',
    });
    liA.appendChild(liADiv);

    const liADivI = createAndSetAttributes('i', {
        className: 'material-icons opacity-10',
        innerHTML: icon,
    });
    liADiv.appendChild(liADivI);

    const liADivSpan = createAndSetAttributes('span', {
        className: 'nav-link-text ms-1',
        innerHTML: text,
    });
    liA.appendChild(liADivSpan);

    // Adicionando o ouvinte de evento ao elemento <a>
    liA.addEventListener('click', function () {
        const activeLinks = document.querySelectorAll('.nav-link.active');
        activeLinks.forEach((activeLink) => activeLink.classList.remove('active', 'bg-gradient-primary'));
        liA.classList.add('active', 'bg-gradient-primary');
        // Salvando o estado do menu ativo no localStorage
        localStorage.setItem('activeLink', liA.getAttribute('href'));
    });

    // Verificar se o link está ativo ao carregar a página
    const savedLink = localStorage.getItem('activeLink');
    if (savedLink === liA.getAttribute('href')) {
        liA.classList.add('active', 'bg-gradient-primary');
    }
}


// Criação dos itens do menu lateral
createNavItem('person', 'Perfil', '../../../paginas/perfil.html');
createNavItem('layers', 'Formação', '../../../paginas/formacao.html');
createNavItem('import_contacts', 'Habilidades Técnicas', '../../../paginas/tables.html');
createNavItem('label', 'Etiquetas usáveis', '../../../paginas/badges.html');

document.querySelector('.aSide1').appendChild(createAndSetAttributes('hr', {
    className: 'horizontal light mt-0 mb-2',
}));


// Criação do item "Sair" no menu lateral
const ul2 = document.createElement('ul');
ul2.className = 'navbar-nav';
document.querySelector('.aSide1').appendChild(ul2);

const li4 = createAndSetAttributes('li', {
    className: 'nav-item',
});
ul2.appendChild(li4);

const li4A = createAndSetAttributes('a', {
    className: 'nav-link text-white',
    href: '../../../index.html',
});
li4.appendChild(li4A);

const li4ADiv = createAndSetAttributes('div', {
    className: 'text-white text-center me-2 d-flex align-items-center justify-content-center',
});
li4A.appendChild(li4ADiv);

const li4ADivI = createAndSetAttributes('i', {
    className: 'material-icons opacity-10',
    innerHTML: 'logout',
});
li4ADiv.appendChild(li4ADivI);

const li4ADivSpan = createAndSetAttributes('span', {
    className: 'nav-link-text ms-1',
    innerHTML: 'Sair',
});
li4A.appendChild(li4ADivSpan);
