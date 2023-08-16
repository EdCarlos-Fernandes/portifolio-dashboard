export function renderBadgesToContainer(badgesData, containerSelector) {
    const badgeContainer = document.querySelector(containerSelector);
    badgeContainer.innerHTML = '';

    badgesData.forEach(badge => {
        const badgeDiv = document.createElement('div');
        badgeDiv.classList.add("badge");
        badgeDiv.classList.add("d-flex", "justify-content-between", "align-items-center");
        badgeDiv.style.height = '50px';

        const badgeImgDiv = document.createElement('div');
        badgeImgDiv.classList.add("badge--div--img");
        const badgeImg = document.createElement('img');
        badgeImg.src = badge.badgeSrc;
        badgeImg.style = 'width: 150px;height: 30px;border-radius: 15px;';
        badgeImgDiv.appendChild(badgeImg);

        const copyTextDiv = document.createElement('div');
        const copyTextSpan = document.createElement('span');
        copyTextSpan.classList.add("badge--div2--span");
        copyTextSpan.textContent = `${badge.badgeSrc}`;
        copyTextDiv.appendChild(copyTextSpan);

        const copyIconImg = document.createElement('img');
        copyIconImg.src = 'https://devfernandes.com.br/assets/img/icones/copiar.png';
        copyIconImg.classList.add("badge--copy-icon");
        copyIconImg.setAttribute('title', 'Copiar');
        copyIconImg.addEventListener('click', () => {
            const textToCopy = copyTextSpan.textContent;
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = textToCopy;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            alert('Texto copiado para a área de transferência!');
        });

        badgeImgDiv.appendChild(copyIconImg);

        badgeDiv.appendChild(badgeImgDiv);
        badgeDiv.appendChild(copyTextDiv);

        badgeContainer.appendChild(badgeDiv);
    });
}
