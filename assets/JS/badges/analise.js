import { renderBadgesToContainer } from '../../../assets/JS/badges/badgeUtils.js';
import { analise } from '../../../assets/JS/badges/badgesData.js';
import { inteligenciaArtificial } from '../../../assets/JS/badges/badgesData.js';
import { blockchain } from '../../../assets/JS/badges/badgesData.js';
import { blog } from '../../../assets/JS/badges/badgesData.js';
import { community } from '../../../assets/JS/badges/badgesData.js';
import { contact } from '../../../assets/JS/badges/badgesData.js';
import { cloud } from '../../../assets/JS/badges/badgesData.js';
import { cryptocurrency } from '../../../assets/JS/badges/badgesData.js';
import { database } from '../../../assets/JS/badges/badgesData.js';
import { design } from '../../../assets/JS/badges/badgesData.js';
import { designer } from '../../../assets/JS/badges/badgesData.js';
import { education } from '../../../assets/JS/badges/badgesData.js';
import { etl } from '../../../assets/JS/badges/badgesData.js';
import { food } from '../../../assets/JS/badges/badgesData.js';
import { frameworks } from '../../../assets/JS/badges/badgesData.js';
import { funding } from '../../../assets/JS/badges/badgesData.js';
import { games } from '../../../assets/JS/badges/badgesData.js';


// Função para renderizar todos os badges
function renderAllBadges() {
    renderBadgesToContainer(analise, '.badge-analise');
    renderBadgesToContainer(inteligenciaArtificial, '.badge-inteligencia-artificial');
    renderBadgesToContainer(blockchain, '.badge-blockchain');
    renderBadgesToContainer(blog, '.badge-blog');
    renderBadgesToContainer(community, '.badge-community');
    renderBadgesToContainer(contact, '.badge-contact');
    renderBadgesToContainer(cloud, '.badge-cloud');
    renderBadgesToContainer(cryptocurrency, '.badge-cryptocurrency');
    renderBadgesToContainer(database, '.badge-database');
    renderBadgesToContainer(design, '.badge-design');
    renderBadgesToContainer(designer, '.badge-designer');
    renderBadgesToContainer(education, '.badge-education');
    renderBadgesToContainer(etl, '.badge-etl');
    renderBadgesToContainer(food, '.badge-food');
    renderBadgesToContainer(frameworks, '.badge-frameworks');
    renderBadgesToContainer(funding, '.badge-funding');
    renderBadgesToContainer(games, '.badge-games');
}
renderAllBadges();



const badgeStyleMenu1 = document.querySelector('.badge-style-menu');
badgeStyleMenu1.addEventListener('change', event1 => {
    const selectedStyle1 = event1.target.value;
    updateBadgesStyle(selectedStyle1);
});

function updateBadgesStyle(style1) {
    const badgeStyle1 = `style=${style1}`;
    
    // Atualize o estilo de ambas as listas de badges
    analise.forEach(badge1 => {
        badge1.badgeSrc = badge1.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    inteligenciaArtificial.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    blockchain.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    blog.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    community.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    contact.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    cloud.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    cryptocurrency.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    database.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    design.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    designer.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    education.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    etl.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    food.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    frameworks.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    funding.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });
    games.forEach(badge2 => {
        badge2.badgeSrc = badge2.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
    });

    // Renderize novamente todos os badges com o estilo atualizado
    renderAllBadges();
}
