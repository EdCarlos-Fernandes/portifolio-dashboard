import { renderBadgesToContainer } from '../../../assets/JS/badges/badgeUtils.js';
import badgesData from '../../../assets/JS/badges/badgesData.js'

function renderAllBadges() {
    for (const category in badgesData) {
        const containerSelector = `.badge-${category}`;
        renderBadgesToContainer(badgesData[category], containerSelector);
    }
}
renderAllBadges();


const badgeStyleMenu1 = document.querySelector('.badge-style-menu');
badgeStyleMenu1.addEventListener('change', event1 => {
    const selectedStyle1 = event1.target.value;
    updateBadgesStyle(selectedStyle1);
});


function updateBadgesStyle(style1) {
    const badgeStyle1 = `style=${style1}`;

    for (const category in badgesData) {
        badgesData[category].forEach(badge => {
            badge.badgeSrc = badge.badgeSrc.replace(/style=[^&]+/, badgeStyle1);
        });
    }

    renderAllBadges();
}