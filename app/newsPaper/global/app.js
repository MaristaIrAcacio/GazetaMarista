function splitTextIntoSpans(element) {
    const text = element.textContent;
    const words = text.split(' ');
    const spannedText = words.map(word => `<span class="word">${word}</span>`).join(' ');
    element.innerHTML = spannedText;
}

const elementosBodyNew = document.getElementsByClassName("bodyNew");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");

for (let i = 0; i < elementosBodyNew.length; i++) {
    splitTextIntoSpans(elementosBodyNew[i]);
}

const wordSpans = document.querySelectorAll(".word");
let timeoutId;

wordSpans.forEach(wordSpan => {
    wordSpan.addEventListener('mouseover', () => {
        timeoutId = setTimeout(() => {
            handleMouseOver(wordSpan.textContent, wordSpan);
        }, 800); // Alteramos o atraso para 700ms
    });

    wordSpan.addEventListener('mouseout', () => {
        clearTimeout(timeoutId);
        handleMouseOut(wordSpan);
    });
});

async function handleMouseOver(word, tag) {
    tag.classList.add("highlighted");
    openPopUp(word,tag);
};

function handleMouseOut(tag) {
    tag.classList.remove("highlighted");
};

function openPopUp(word, tag) {
    // Configurar PopUp
    const popup = $("#popup");

    const windowWidth = window.innerWidth;
    const tagRect = tag.getBoundingClientRect();
    const popupLeft = tagRect.right + window.scrollX + 10;
    const popupRight = tagRect.left + window.scrollX + 10;
    let popupDirection = "left"; // Direção padrão

    if (popupLeft + popup.outerWidth() > windowWidth) {
        popupDirection = "right";
    }

    const popupTop = tagRect.top + window.scrollY - popup.outerHeight() / 2;

    // Definir um tamanho mínimo para o popup (por exemplo, 200px de largura)
    const tamanhoMinimo = 200;

    // Criar conteúdo do popup com base na direção
    const popupContent = `
        <a target="_blank" href="https://www.sinonimos.com.br/${word}/">Veja sinônimos de "<span class="wordPopUp">${word}</span>" aqui.</a>
        <hr>
        <a target="_blank" href="https://www.dicio.com.br/${word}/">Veja significado de "<span class="wordPopUp">${word}</span>" aqui.</a>
    `;

    popup.html(popupContent);

    popup.show();

    // Verificar se o tamanho do popup é menor que o tamanho mínimo
    if (popup.outerWidth() < tamanhoMinimo) {
        popup.css({ width: `${tamanhoMinimo}px` });
    }

    if (popupDirection === "left") {
        popup.css({ left: `${popupLeft}px`, top: `${popupTop}px` });
    } else {
        popup.css({ right: `${windowWidth - popupRight}px`, top: `${popupTop}px` });
    }

    setTimeout(() => {
        closePopUp(popup);
    }, 2000);
};


function closePopUp(popup) {
    popup.hide();
};

const shareFacebook = (data) => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://' + data);
    window.open(url, '_blank');
};

const shareTwitter = (data) => {
    const url = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://' + data);
    window.open(url, '_blank');
};

const shareWhatsapp = (data) => {
    const url = 'https://api.whatsapp.com/send?text=' + encodeURIComponent('https://' + data);
    window.open(url, '_blank');
};