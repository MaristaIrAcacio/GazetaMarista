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
        }, 700); // Alteramos o atraso para 700ms
    });

    wordSpan.addEventListener('mouseout', () => {
        clearTimeout(timeoutId);
        handleMouseOut(wordSpan);
    });
});

async function handleMouseOver(word, tag) {
    tag.classList.add("highlighted");

    const wordTranslate = await translateText(word, 'en');

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordTranslate}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.length > 0) {
            var textSign = "";
            const significado = data[0].meanings[0].definitions[0].definition;
            for(let i = 0; i < data[0].meanings[0].definitions.length; i ++) {
                textSign += `${data[0].meanings[0].definitions[i].definition}`
            };

            const significadoPT = await translateText(significado,'pt-br');
            openPopUp(significadoPT,tag)
        } else {
            console.log(`Nenhum significado encontrado para "${word}"`);
            openPopUp('Sem informações :/',tag);
        }
    } catch (error) {
    };
}

function handleMouseOut(tag) {
    tag.classList.remove("highlighted");
    closePopUp();
};

async function translateText(texto, idiomaDestino) {
    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${idiomaDestino}&dt=t&q=${encodeURIComponent(texto)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const traducao = data[0][0][0];
            return traducao;
        } else {
            console.error(`Erro na tradução: ${data}`);
            return null;
        }
    } catch (error) {
        console.error(`Erro ao traduzir: ${error}`);
        return null;
    };
};

function openPopUp(conteudo, tag) {
    const popup = $("#popup");
    const popupContent = $("#popup-content");

    const tagRect = tag.getBoundingClientRect();

    const popupLeft = tagRect.right + window.scrollX + 10; // 10 pixels de deslocamento
    const popupTop = tagRect.top + window.scrollY - popup.outerHeight() / 2;

    popup.css({ left: `${popupLeft}px`, top: `${popupTop}px` });
    popupContent.text(conteudo);
    popup.show();
};

function closePopUp() {
    const popup = $("#popup");
    popup.hide();
};