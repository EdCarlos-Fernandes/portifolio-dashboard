// Função para criar o card com base nos dados fornecidos
function createCard(bgGradientClass, title, description, color, totalSteps, finishedSteps) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-lg-4 col-md-6 mt-4 mb-4';

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card z-index-2 bg-gradient-dark';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent';

    const bgGradientDiv = document.createElement('div');
    bgGradientDiv.className = bgGradientClass;
    bgGradientDiv.style.backgroundColor = `${color}`;

    // Cria a barra de progresso de meia lua
    const progressBar = new ProgressBar.SemiCircle(bgGradientDiv, {
        strokeWidth: 40,
        easing: 'linear',
        duration: 1000,
        color: '#e91e63',
        trailColor: '#454545',
        trailWidth: 40,
        svgStyle: null,
        trailLength: 0.5 // Define a meia lua
    });

    progressBar.animate(finishedSteps / totalSteps);

    cardHeader.appendChild(bgGradientDiv);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h6');
    cardTitle.className = 'mb-0';
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.className = 'text-sm';
    cardDescription.textContent = `${description}  ${finishedSteps} / ${totalSteps}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);

    cardDiv.appendChild(cardContainer);

    return cardDiv;
}

// Função para adicionar os cards dos cursos e das guias à classe .formacao11
async function addCardsToFormacao11(data) {
    const formacao11Div = document.querySelector('.formacao11');

    // Dados dos cards de guias de estudos
    const guideCardsData = data.guides.map(guide => ({
        bgGradientClass: `border-radius-lg py-3 pe-1  svg1 d-flex justify-content-center`,
        color: guide.color,
        title: guide.name,
        description: 'Passos finalizados',
        totalSteps: guide.totalSteps,
        finishedSteps: guide.finishedSteps,
    }));

    guideCardsData.forEach((data) => {
        const card = createCard(data.bgGradientClass, data.title, data.description, data.color, data.totalSteps, data.finishedSteps);
        formacao11Div.appendChild(card);
    });

    // Dados do card da UNINOVE
    const uninoveCardData = {
        bgGradientClass: 'bg-gradient-dark border-radius-lg py-3 pe-1 svg1 d-flex justify-content-center',
        title: 'Análise e Desenvolvimento de Sistemas UNINOVE',
        description: 'Término de Graduação',
        finishedSteps: 2, // Segundo semestre
        totalSteps: 5, // Total de 5 semestres
    };
    const uninoveCard = createCard(
        uninoveCardData.bgGradientClass,
        uninoveCardData.title,
        uninoveCardData.description,
        uninoveCardData.color,
        uninoveCardData.totalSteps,
        uninoveCardData.finishedSteps
    );

    formacao11Div.appendChild(uninoveCard);
}

// Função para criar a tabela
async function createTable(data) {
    // Dados da tabela
    const tableData = [
        ...data.courseProgresses.map(course => ({
            title: course.name,
            percentage: `${course.progress}%`,
        })),
    ];

    const tbody = document.querySelector('.tbody');

    tableData.forEach((data) => {
        const row = document.createElement('tr');

        // Coluna do título
        const titleColumn = document.createElement('td');
        const titleDiv = document.createElement('div');
        const titleHeading = document.createElement('h6');
        titleHeading.className = 'mb-0 text-sm title-course'; // Adicionamos a classe 'title-course'
        titleHeading.textContent = data.title;
        titleDiv.className = 'd-flex px-2 py-1';
        titleDiv.appendChild(titleHeading);
        titleColumn.appendChild(titleDiv);
        row.appendChild(titleColumn);

        // Coluna do progresso
        const progressColumn = document.createElement('td');
        const progressWrapperDiv = document.createElement('div');
        const progressInfoDiv = document.createElement('div');
        const progressPercentageDiv = document.createElement('div');
        const progressPercentage = document.createElement('span');
        const progressBarDiv = document.createElement('div');

        progressPercentage.className = 'text-xs font-weight-bold';
        progressPercentage.textContent = data.percentage;
        progressPercentageDiv.className = 'progress-percentage';
        progressPercentageDiv.appendChild(progressPercentage);

        progressInfoDiv.className = 'progress-info';
        progressInfoDiv.appendChild(progressPercentageDiv);

        progressBarDiv.className = `progress-bar bg-gradient-success`;
        progressBarDiv.style.width = data.percentage;
        progressWrapperDiv.className = 'progress-wrapper w-100 mx-auto';

        progressWrapperDiv.appendChild(progressInfoDiv);
        progressWrapperDiv.appendChild(progressBarDiv);
        progressColumn.appendChild(progressWrapperDiv);
        row.appendChild(progressColumn);

        tbody.appendChild(row);
    });
}

// Função para fazer a requisição à API
async function fetchAPI(url) {
    try {
        const response = await fetch(url, { mode: 'cors' });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Fazer a chamada à API
fetchAPI('https://www.alura.com.br/api/dashboard/01180f41aaf721134ab0704a0a107fc0cae72f874d491d07187ad6d548f1aa98')
    .then(data => {
        addCardsToFormacao11(data);
        createTable(data);
    })
    .catch(error => {
        console.error('Erro na requisição da API:', error);
    });