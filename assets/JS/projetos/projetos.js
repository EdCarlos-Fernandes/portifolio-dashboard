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
      viewProjectBtn.setAttribute("href", `${this.site}`)
      viewProjectBtn.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'mb-0','arredondarA1');
      viewProjectBtn.textContent = 'Projeto';
      container2.appendChild(viewProjectBtn);
      const viewCodigoBtn = document.createElement('a');
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
  

  const projectsData = [
    {
      imgSrc: "https://devfernandes.com.br/IMGS/delivery.png",
      title: 'Delivery com painel admin completo',
      description: 'O nosso aplicativo de delivery é uma solução prática e eficiente para gerenciar pedidos e estoque. Com um painel admin completo, você pode gerenciar o estoque e os pedidos de forma eficiente. Além disso, a tecnologia PWA permite que você instale o app no celular sem precisar consumir espaço a mais como outros APPs, este projeto esta atualmente em produção e sendo utilizado.',
      login: 'Login: admin@admin.com',
      senha: 'Senha: admin@admin.com',
      site: 'https://devfernandes.com.br/projetos/delivery-app/login',
      codigo: '#',
    },
    {
      imgSrc: 'https://devfernandes.com.br/IMGS/tabuada.png',
      title: 'Tabuada',
      description: 'Descubra uma forma envolvente de explorar a multiplicação! Com uma estética elegante e botões neumórficos intuitivos, você poderá desvendar a tabuada de maneira cativante. Clicando nos botões, mergulhe em um mundo de multiplicação fascinante. Aprender a tabuada nunca foi tão visual e divertido. Explore essa experiência interativa e deixe que a magia dos números se revele diante dos seus olhos.',
      login: '',
      senha: '',
      site: 'https://devfernandes.com.br/projetos/Tabuada-main',
      codigo: 'https://github.com/EdCarlos-Fernandes/Tabuada',
    },
    {
      imgSrc: 'https://devfernandes.com.br/IMGS/listaToDo.png',
      title: 'Lista to do',
      description: 'Um aplicativo de lista de tarefas com funcionalidades de criação, manipulação e pesquisa. Ele representa um sistema interativo no qual os usuários podem adicionar itens à lista digitando palavras ou números em um campo de entrada. O aplicativo também oferece recursos como contar as teclas digitadas, selecionar itens da lista para exibir seu conteúdo em um alerta, pesquisar itens na lista e exibir uma mensagem indicando se o item pesquisado está presente ou não. Além disso, os itens adicionados são exibidos em uma lista, onde os usuários podem selecioná-los e excluir individualmente usando um ícone de lixeira. No geral, o aplicativo fornece uma maneira prática de gerenciar tarefas, adicionar novos itens e realizar pesquisas dentro da lista',
      login: '',
      senha: '',
      site: 'https://devfernandes.com.br/projetos/listaComBotoes',
      codigo: 'https://github.com/EdCarlos-Fernandes/lista-to-do',
    },
    {
      imgSrc: 'https://devfernandes.com.br/IMGS/sorte.png',
      title: 'Joguinho da sorte',
      description: 'Ao abrir o joguinho, um alert irá aparecer perdindo um número qualquer para o primeiro player Logo após outro alert irá aparecer perdindo mais um número qualquer para o segundo player Uma moeda de sorte será lançada Caso dê CARA quem digitou o menor número irá ganhar Caso dê COROA quem digitou o maior número irá ganhar No fim irá aparecer uma mensagem informando qual valor a moeda deu e também quem foi o vencedor',
      login: '',
      senha: '',
      site: 'https://devfernandes.com.br/projetos/joguinhoDeSorte',
      codigo: 'https://github.com/EdCarlos-Fernandes/Joguinho-de-sorte',
    },
    {
      imgSrc: 'https://devfernandes.com.br/IMGS/login.png',
      title: 'Painel De Login',
      description: 'Este painel de login foi inspirado em um template do Figma, usando somente HTML e CSS. O painel de login tem um design minimalista e moderno, com uma caixa centralizada com os campos de usuário e senha, e um botão de entrar. O painel de login também oferece opções para fazer login com redes sociais.',
      login: '',
      senha: '',
      site: 'https://devfernandes.com.br/projetos/paginaDeLogin',
      codigo: 'https://github.com/EdCarlos-Fernandes/painelDeLogin',
    },
    {
      imgSrc: 'https://devfernandes.com.br/IMGS/buscadorCep.png',
      title: 'Buscador De Cep',
      description: 'Este é um buscador de CEP feito em JavaScript que consome uma API para buscar CEPs. Com ele, você pode facilmente encontrar informações sobre endereços em todo o Brasil. Basta digitar o CEP desejado e o buscador retornará as informações correspondentes.',
      login: '',
      senha: '',
      site: 'https://devfernandes.com.br/projetos/buscadorDeCep',
      codigo: 'https://github.com/EdCarlos-Fernandes/BuscadorDeCep',
    },
    {
      imgSrc: '',
      title: 'EM DESENVOLVIMENTO',
      description: '',
      login: '',
      senha: '',
      site: '#',
      codigo: '#',
    }
  ];

  
  const rowElement = document.querySelector('.projetos');
  
  projectsData.forEach(projectData => {
    const project = new Project(projectData.imgSrc, projectData.title, projectData.description, projectData.login, projectData.senha, projectData.site, projectData.codigo);
    const colElement = project.createCard();

    rowElement.appendChild(colElement);
  });
  