//  ------------------------------------------ | Alerta de Construção | ------------------------------------------

const breve = () => {
    Swal.fire(
        'Em breve',
        'Em construção...Aguarde!',
        'warning'
    );    
};

//  ------------------------------------------ | Sistema de Suporte | ------------------------------------------

document.getElementById("btn-suport").addEventListener("click", async() => {
    const { value: email } = await Swal.fire({
        title: 'Insira seu Email',
        input: 'email',
        inputLabel: 'Seu endereço de Email',
        inputPlaceholder: 'Insira seu endereço de Email'
      })
      
      if (email) {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })
          
          if (text&&email) {
            const data = {
                email: email,
                mensagem: text
            };
        
            fetch('https://formspree.io/f/xoqopaol', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                Swal.fire(
                    'Sua mensagem foi enviada!',
                    'Aguarde enquanto processamos sua mensagem',
                    'success'
                );
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo deu errado! | Tente novamente mais tarde',
                });
            });
          } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
            });
          };
      };
});

function clickSuport() {
    $('#btn-suport').click();
};

//  ------------------------------------------ | Sistema de Compartilhamento | ------------------------------------------

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

//  ------------------------------------------ | Frase do Dia | ------------------------------------------

const inspiringPhrases = [
    {
        phrase: "Nunca se esqueça de quem você é!",
        author: "Mufasa - O Rei Leão"
    },
    {
        phrase: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        author: "Robert Collier"
    },
    {
        phrase: "Acredite que você pode e você já está no meio do caminho.",
        author: "Theodore Roosevelt"
    },
    {
        phrase: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        author: "Eleanor Roosevelt"
    },
    {
        phrase: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
        author: "John Lennon"
    },
    {
        phrase: "O importante é nunca desistir, mesmo quando você cai.",
        author: "Mickey - Rocky Balboa"
    },
    {
        phrase: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
        author: "Winston Churchill"
    },
    {
        phrase: "O único modo de fazer um grande trabalho é amar o que você faz.",
        author: "Steve Jobs"
    },
    {
        phrase: "Não importa o que você decidiu. O que importa é que isso te faça feliz.",
        author: "Arnold Schwarzenegger"
    },
    {
        phrase: "A persistência realiza o impossível.",
        author: "Matt Biondi"
    },
    {
        phrase: "Nada é impossível, a palavra em si diz 'eu sou possível'!",
        author: "Audrey Hepburn"
    },
    {
        phrase: "O sucesso é a melhor vingança.",
        author: "Frank Sinatra"
    }
];


// const randomPhrase = inspiringPhrases[Math.floor(Math.random() * inspiringPhrases.length)];

// const QuoteOfTheDay = {
//     'quote' : randomPhrase.phrase,
//     'author' : randomPhrase.author,
// };

// $('#generateQuote').html(`
//     <p class="cardDark-text">${QuoteOfTheDay.quote}</p>
//     <footer class="blockquote-footer cardDark-text">Dita por <cite title="Source Title" class="cardDark-text">${QuoteOfTheDay.author}</cite></footer>
// `);

// -------------------------------------------- | Sistema de Clima | ---------------------------------------------


document.getElementById('searchweatherbtn').addEventListener('click', () => {
    if ($('#input-search-city-weather')) {
        searchResults();
    };
});

document.querySelector('.weather-container-search').addEventListener('submit', (e) => {
    e.preventDefault();
    if ($('#input-search-city-weather')) {
        searchResults();
    };
});

const apiWather = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
};

function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            ClimaByCoordinates(latitude, longitude);
        }, function (error) {
            if (error.code === 1) {};
        });
    } else {
        console.log("Geolocalização não suportada.");
    }
}

function ClimaByCoordinates(latitude, longitude) {
    fetch(`${apiWather.base}weather?lat=${latitude}&lon=${longitude}&lang=${apiWather.lang}&units=${apiWather.units}&APPID=${apiWather.key}`)
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Digite algo válido!',
                });
                throw new Error(`http error: status ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Digite algo válido!',
            });
        })
        .then(response => {
            displayResults(response);
        });
}

function searchResults() {
    let city = $('#input-search-city-weather').val();
    fetch(`${apiWather.base}weather?q=${city}&lang=${apiWather.lang}&units=${apiWather.units}&APPID=${apiWather.key}`)
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                text: 'Digite algo válido!',
                });
                throw new Error(`http error: status ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Digite algo válido!',
            });
        })
        .then(response => {
            displayResults(response);
        });
}

const displayResults = (weather) => {

    document.querySelector('.response-api-weather').classList.remove('hidden');

    let date = `${new Date().getHours()}:${new Date().getMinutes()}`;

    $('.response-weather-city').text(weather.name);
    $('.response-weather-time').text(date);
    $('.response-weather-temp').text(`${weather.main.temp}°`);
    $('.response-weather-description').text(`${weather.weather[0].description}`);

    const urlIcon = process_weather_icon(weather.weather[0].description);

    $('.response-weather-icon').attr('src',`components/docs/image-system/${urlIcon}`);

    document.getElementById('input-search-city-weather').value = "";

};

const process_weather_icon = (data) => {
    switch (data) {
        case 'céu limpo':
            return 'sun-icon-weather.png'
        case 'nuvens dispersas':
            return 'poucas-nuvens-icon-weather.png'
        case 'nublado':
            return 'nublado-icon-weather.png'
        case 'algumas nuvens':
            return 'nuvens-quebradas-icon-weather.png'
        case 'chuva de banho':
            return 'chuva-icon-weather.png'
        case 'chuva':
            return 'chuva-icon-weather.png'
        case 'trovoada':
            return 'trovoada-icon-weather.png'
        case 'neve':
            return 'neve-icon-weather.png'
        case 'névoa':
            return 'nevoa-icon-weather.png'
        default:
            return 'error.png'
    };
};

getGeolocation();

// -------------------------------------------- | Sistema de Signos | ---------------------------------------------
const signs = [
    {
        name: "Áries",
        start: new Date(2023, 2, 21),
        end: new Date(2023, 3, 19),
        description: "Áries é o primeiro signo do zodíaco, representando o início de um novo ciclo. As pessoas de Áries são conhecidas por sua energia e determinação.",
        color: "vermelho",
        url: "aries"
    },
    {
        name: "Touro",
        start: new Date(2023, 3, 20),
        end: new Date(2023, 4, 20),
        description: "Touro é um signo prático e estável. As pessoas de Touro são conhecidas por sua lealdade e apreço pelo conforto.",
        color: "verde",
        url: "touro"
    },
    {
        name: "Gêmeos",
        start: new Date(2023, 4, 21),
        end: new Date(2023, 5, 20),
        description: "Gêmeos é um signo versátil e comunicativo. As pessoas de Gêmeos são conhecidas por sua curiosidade e adaptabilidade.",
        color: "amarelo",
        url: "gemeos"
    },
    {
        name: "Câncer",
        start: new Date(2023, 5, 21),
        end: new Date(2023, 6, 22),
        description: "Câncer é um signo emocional e sensível. As pessoas de Câncer são conhecidas por seu instinto protetor e compaixão.",
        color: "prateado",
        url: "cancer"
    },
    {
        name: "Leão",
        start: new Date(2023, 6, 23),
        end: new Date(2023, 7, 22),
        description: "Leão é um signo dominante e carismático. As pessoas de Leão são conhecidas por sua autoconfiança e generosidade.",
        color: "dourado",
        url: "leao"
    },
    {
        name: "Virgem",
        start: new Date(2023, 7, 23),
        end: new Date(2023, 8, 22),
        description: "Virgem é um signo prático e analítico. As pessoas de Virgem são conhecidas por sua atenção aos detalhes e organização.",
        color: "marrom",
        url: "virgem"
    },
    {
        name: "Libra",
        start: new Date(2023, 8, 23),
        end: new Date(2023, 9, 22),
        description: "Libra é um signo sociável e equilibrado. As pessoas de Libra são conhecidas por sua busca por justiça e harmonia.",
        color: "azul-claro",
        url: "libra"
    },
    {
        name: "Escorpião",
        start: new Date(2023, 9, 23),
        end: new Date(2023, 10, 21),
        description: "Escorpião é um signo intenso e determinado. As pessoas de Escorpião são conhecidas por sua paixão e força de vontade.",
        color: "vermelho-escuro",
        url: "escorpiao"
    },
    {
        name: "Sagitário",
        start: new Date(2023, 10, 22),
        end: new Date(2023, 11, 21),
        description: "Sagitário é um signo aventureiro e otimista. As pessoas de Sagitário são conhecidas por sua busca por aventura e liberdade.",
        color: "roxo",
        url: "sagitario"
    },
    {
        name: "Capricórnio",
        start: new Date(2023, 11, 22),
        end: new Date(2023, 0, 19),
        description: "Capricórnio é um signo determinado e prático. As pessoas de Capricórnio são conhecidas por seu compromisso com metas e ambições.",
        color: "preto",
        url: "capricornio"
    },
    {
        name: "Aquário",
        start: new Date(2023, 0, 20),
        end: new Date(2023, 1, 18),
        description: "Aquário é um signo humanitário e original. As pessoas de Aquário são conhecidas por sua mente inovadora e ideais progressistas.",
        color: "azul",
        url: "aquario"
    },
    {
        name: "Peixes",
        start: new Date(2023, 1, 19),
        end: new Date(2023, 2, 20),
        description: "Peixes é um signo intuitivo e compassivo. As pessoas de Peixes são conhecidas por sua empatia e criatividade.",
        color: "verde-mar",
        url: "peixes"
    }
];

function getZodiacSign(date) {
    for (const sign of signs) {
        if (date >= sign.start && date <= sign.end) {
            return sign;
        }
    }
    return "Não foi possível determinar o signo.";
};

const currentDate = new Date();
const currentSign = getZodiacSign(currentDate);

$('#signDay').text(currentSign.name);
$('.sign-day-description').text(currentSign.description);
$('#colorDay').text(currentSign.color);
$('#image-sign-day').attr('src',`components/docs/image-system/${currentSign.url}.png`)


document.getElementById('search-sign-description').addEventListener('click', () => loadSign());


document.getElementById('signs-select').addEventListener("change", () => loadSign());

const loadSign = () => {
    let signSelect = document.getElementById('signs-select').value;

    for (const sign of signs) {
        if (signSelect !== 'not') {
            if (sign.name === signSelect) {
                document.querySelector('.sign-description-response').innerHTML = `${sign.description} <br><br> Sua cor é ${sign.color}`;
            };
        } else {
            document.querySelector('.sign-description-response').innerHTML = "Nenhum Signo Selecionado! <i class='bi bi-emoji-expressionless-fill'></i>";
        };
    };
};