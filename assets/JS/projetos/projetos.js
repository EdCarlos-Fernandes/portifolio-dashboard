import {projectsData} from './projectsData.js';

class Project {
  constructor(imgSrc, title, description, login, senha, site, codigo) {
    this.imgSrc = imgSrc;
    this.title = title;
    this.description = description;
    this.login = login;
    this.senha = senha;
    this.site = site;
    this.codigo = codigo;
  }

  createCard() {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-xl-3', 'col-md-6', 'mb-xl-0', 'mb-4');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'card-blog', 'card-plain');

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.classList.add('card-header', 'p-0', 'mt-n4', 'mx-3');

    const imgLink = document.createElement('a');
    imgLink.classList.add('d-block', 'shadow-xl', 'arredondar');

    const img = document.createElement('img');
    img.src = this.imgSrc;
    img.alt = `Imagem do projeto ${this.title}`;
    img.classList.add('img-fluid', 'shadow', 'arredondar');

    imgLink.appendChild(img);
    cardHeaderDiv.appendChild(imgLink);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body', 'p-3');



    const titleH5 = document.createElement('h5');
    titleH5.textContent = this.title;
    cardBodyDiv.appendChild(titleH5);

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('mb-4', 'text-sm', 'overflowP');
    descriptionP.textContent = this.description;


    const btnDiv = document.createElement('div');
    btnDiv.classList.add('d-flex', 'align-items-center', 'justify-content-around', 'flex-column');

    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-column', 'align-items-center');
    container.style.width = '250px';
    btnDiv.appendChild(container);
    const btnDivP2 = document.createElement('p');
    btnDivP2.style.fontSize = '10px';
    btnDivP2.textContent = `${this.login}`;
    container.appendChild(btnDivP2);
    const btnDivP3 = document.createElement('p');
    btnDivP3.style.fontSize = '10px';
    btnDivP3.textContent = `${this.senha}`;
    container.appendChild(btnDivP3);



    const container2 = document.createElement('div');
    btnDiv.appendChild(container2);
    const viewProjectBtn = document.createElement('a');
    viewProjectBtn.setAttribute("target", `_blank`);
    viewProjectBtn.setAttribute("href", `${this.site}`);
    viewProjectBtn.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'mb-0', 'arredondarA1');
    viewProjectBtn.textContent = 'Projeto';
    container2.appendChild(viewProjectBtn);
    const viewCodigoBtn = document.createElement('a');
    viewCodigoBtn.setAttribute("target", `_blank`);
    viewCodigoBtn.setAttribute("href", `${this.codigo}`)
    viewCodigoBtn.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'mb-0', 'arredondarA2');
    viewCodigoBtn.textContent = 'Codigo';
    container2.appendChild(viewCodigoBtn);

    if (this.title == 'EM DESENVOLVIMENTO') {
      titleH5.textContent = '';
      img.src = 'https://devfernandes.com.br/IMGS/construcao.png';
      descriptionP.textContent = 'Proximo projeto em construção atualmente.';

      const img2 = document.createElement('img');
      img2.src = 'https://img.shields.io/badge/EM-DESENVOLVIMENTO-e91e63?style=plastic';
      img2.style.width = '100%';
      img2.style.marginBottom = '8px'


      cardBodyDiv.removeChild(titleH5);
      cardBodyDiv.appendChild(img2);
    }

    cardBodyDiv.appendChild(descriptionP);
    cardBodyDiv.appendChild(btnDiv);

    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);

    return colDiv;
  }
}

const rowElement = document.querySelector('.projetos');

projectsData.forEach(projectData => {
    const project = new Project(projectData.imgSrc, projectData.title, projectData.description, projectData.login, projectData.senha, projectData.site, projectData.codigo);
    const colElement = project.createCard();

    rowElement.appendChild(colElement);
});
