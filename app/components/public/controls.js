const breve = () => {
    Swal.fire(
        'Em breve',
        'Em construção...Aguarde!',
        'warning'
    );    
};

document.getElementById("btn-suport").addEventListener("click", async() => {
    const { value: email } = await Swal.fire({
        title: 'Insira seu Email',
        input: 'email',
        inputLabel: 'Seu endereço de Email',
        inputPlaceholder: 'Enter your email address'
      })
      
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
    
        fetch('https://formspree.io/f/mleynzjw', {
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
});

function clickSuport() {
    $('#btn-suport').click();
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


const randomPhrase = inspiringPhrases[Math.floor(Math.random() * inspiringPhrases.length)];

//  ------------------------------------------ | news_Cards| ------------------------------------------

const QuoteOfTheDay = {
    'quote' : randomPhrase.phrase,
    'author' : randomPhrase.author,
};

$('#generateQuote').html(`
    <p class="cardDark-text">${QuoteOfTheDay.quote}</p>
    <footer class="blockquote-footer cardDark-text">Dita por <cite title="Source Title" class="cardDark-text">${QuoteOfTheDay.author}</cite></footer>
`);

document.getElementById('formWeather').addEventListener('submit', (e) => {
    e.preventDefault();
    if ($('#cityWeather')) {
        searchResults($('#cityWeather').val());
    } else {

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
    let city = $('#cityWeather').val();
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
    document.querySelector('.container-res').classList.remove('hidden');

    let date = `${new Date().getHours()}:${new Date().getMinutes()}`;

    $('.res-city').text(weather.name);
    $('.res-date').text(date);
    $('.res-temp').text(`${weather.main.temp}°`);
    $('.res-min').text(`${weather.weather[0].description}`);
    $('.iconWeather').attr('src',`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
};

getGeolocation();

// ----------------------------------------------------------------------------------------------------
const signs = [
    {
        name: "Áries",
        start: new Date(2023, 2, 21), // 21 de março
        end: new Date(2023, 3, 19),   // 19 de abril
        description: "Áries é o primeiro signo do zodíaco, representando o início de um novo ciclo. As pessoas de Áries são conhecidas por sua energia e determinação.",
        color: "vermelho"
    },
    {
        name: "Touro",
        start: new Date(2023, 3, 20), // 20 de abril
        end: new Date(2023, 4, 20),   // 20 de maio
        description: "Touro é um signo prático e estável. As pessoas de Touro são conhecidas por sua lealdade e apreço pelo conforto.",
        color: "verde"
    },
    {
        name: "Gêmeos",
        start: new Date(2023, 4, 21), // 21 de maio
        end: new Date(2023, 5, 20),   // 20 de junho
        description: "Gêmeos é um signo versátil e comunicativo. As pessoas de Gêmeos são conhecidas por sua curiosidade e adaptabilidade.",
        color: "amarelo"
    },
    {
        name: "Câncer",
        start: new Date(2023, 5, 21), // 21 de junho
        end: new Date(2023, 6, 22),   // 22 de julho
        description: "Câncer é um signo emocional e sensível. As pessoas de Câncer são conhecidas por seu instinto protetor e compaixão.",
        color: "prateado"
    },
    {
        name: "Leão",
        start: new Date(2023, 6, 23), // 23 de julho
        end: new Date(2023, 7, 22),   // 22 de agosto
        description: "Leão é um signo dominante e carismático. As pessoas de Leão são conhecidas por sua autoconfiança e generosidade.",
        color: "dourado"
    },
    {
        name: "Virgem",
        start: new Date(2023, 7, 23), // 23 de agosto
        end: new Date(2023, 8, 22),   // 22 de setembro
        description: "Virgem é um signo prático e analítico. As pessoas de Virgem são conhecidas por sua atenção aos detalhes e organização.",
        color: "marrom"
    },
    {
        name: "Libra",
        start: new Date(2023, 8, 23), // 23 de setembro
        end: new Date(2023, 9, 22),   // 22 de outubro
        description: "Libra é um signo sociável e equilibrado. As pessoas de Libra são conhecidas por sua busca por justiça e harmonia.",
        color: "azul-claro"
    },
    {
        name: "Escorpião",
        start: new Date(2023, 9, 23), // 23 de outubro
        end: new Date(2023, 10, 21),  // 21 de novembro
        description: "Escorpião é um signo intenso e determinado. As pessoas de Escorpião são conhecidas por sua paixão e força de vontade.",
        color: "vermelho-escuro"
    },
    {
        name: "Sagitário",
        start: new Date(2023, 10, 22), // 22 de novembro
        end: new Date(2023, 11, 21),   // 21 de dezembro
        description: "Sagitário é um signo aventureiro e otimista. As pessoas de Sagitário são conhecidas por sua busca por aventura e liberdade.",
        color: "roxo"
    },
    {
        name: "Capricórnio",
        start: new Date(2023, 11, 22), // 22 de dezembro
        end: new Date(2023, 0, 19),    // 19 de janeiro
        description: "Capricórnio é um signo determinado e prático. As pessoas de Capricórnio são conhecidas por seu compromisso com metas e ambições.",
        color: "preto"
    },
    {
        name: "Aquário",
        start: new Date(2023, 0, 20), // 20 de janeiro
        end: new Date(2023, 1, 18),   // 18 de fevereiro
        description: "Aquário é um signo humanitário e original. As pessoas de Aquário são conhecidas por sua mente inovadora e ideais progressistas.",
        color: "azul"
    },
    {
        name: "Peixes",
        start: new Date(2023, 1, 19), // 19 de fevereiro
        end: new Date(2023, 2, 20),   // 20 de março
        description: "Peixes é um signo intuitivo e compassivo. As pessoas de Peixes são conhecidas por sua empatia e criatividade.",
        color: "verde-mar"
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
$('.description').text(currentSign.description);
$('#colorDay').text(currentSign.color);