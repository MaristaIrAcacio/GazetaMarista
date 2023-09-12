// -------------------------------------------------------------------------------------------------------------------------

const authors = [
    { 0 : 'Autor 1', 1 : '001'},
    { 0 : 'Autor 2', 1 : '002'},
    { 0 : 'Autor 3', 1 : '003'},
    { 0 : 'Autor 4', 1 : '004'},
    { 0 : 'Autor 5', 1 : '005'},
];


// document.getElementById('searchAuthor').addEventListener('input', () => generateAuthor());

// $('#searchAuthorBtn').click(() => generateAuthor());

// const generateAuthor = () => {
//     var author = $('#searchAuthor').val();
//     var authorsFind = [];
//     document.querySelector('.resAuthors').innerHTML = "";
//     document.querySelector('.resAuthors').innerHTML += `<h1 class='titleElement'>Resultado(s):</h1><hr>`;
//     let numTrue = false;

//     authors.forEach(element => {
//         if (element[0].toLowerCase() === author.toLowerCase()) {
//             numTrue = true;
//             document.querySelector('.resAuthors').innerHTML += `<a href="#" class="resText">${element[0]}</a>`;
//             authorsFind.push(element[1]);
//         }
//     });

//     if (!numTrue) {
//         document.querySelector('.resAuthors').innerHTML = "";
//         document.querySelector('.resAuthors').innerHTML += `<h1 class='titleElement'>0 resultados para a busca!</h1><hr>`;
//     };
// };

//  ------------------------------------------ | Geração_de_notícia_em_destaque | ------------------------------------------

const info_urgentNews = {
    'diretoryImage' : 'news-1_1.jpg',
    'title' : 'PRIMEIRO STARTUP WEEKEND SOCIAL DA AMÉRICA LATINA ACONTECE NA ESCOLA SOCIAL MARISTA IRMÃO ACÁCIO',
    'description' : 'E no final do mês de abril nos dias 28, 29 e 30 tive o privilégio de estar na primeira Startup Weekend Social da América Latina,que aconteceu nas dependências da nossa Escola Social.',
};

// -------------------------------------------------------------------------------------------------------------------------


const calcDate = (date) => {
    let currentDate = new Date();
    let dataPublic = new Date(date);
    let timeDifference = (currentDate - dataPublic);
    let dayAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return dayAgo;
};


//  ------------------------------------------ | Geração_de_notícia_em_destaque | ------------------------------------------

const infoSideNews = {
    'title1' : 'Visita na Tarobá movimenta a Escola Social Marista Ir. Acácio',
    'description1' : 'A visita Tarobá movimentou nos dias 10, 17 e 24 de março de 2023. Esse movimento aconteceu entre os alunos do primeiro ano do Ensino Médio que estão envolvidos no projeto do Jornal escolar.',

    'title2' : 'PROJETO LIVRO HUMANO ACONTECE NA SEMANA DA MULHER',
    'description2' : 'O projeto livro humano, nasceu na Dinamarca no ano de 2000, com a intenção de ir contra a violência.',
};


//  ------------------------------------------ | recommended_News | ------------------------------------------

const recommendedNews = {
    'title' : 'Marista Ir. Acácio',
    'description' : 'Atendimento a crianças e adolescentes em situação de vulnerabilidade social.',
    'url' : 'https://linktr.ee/maristairacacio',
};



//  ------------------------------------------ | news_Cards| ------------------------------------------

const newsCards= {
    'title1' : 'Dia Internacional da Poesia movimenta Escola Social',
    'description1' : 'Quinta-feira, 21 de março em Londrina nas dependências da Escola Social Marista Irmão Acácio, celebramos o dia internacional da poesia com a presença especial de Ligia Braga.',
    'diretoryImage1' : 'news-4_1.jpg',
    'author1' : 'Witória (2º ano B)',

    'title2' : 'MAIO LARANJA 2023',
    'description2' : 'Há 50 anos, no dia 18 de Maio de 1973, a menina Araceli, de 08 anos, foi sequestrada enquanto ia para a escola, foi drogada, estuprada e morta por jovens de classe média alta na cidade de Vitória (ES). Veja mais sobre.',
    'diretoryImage2' : 'news-5_1.jpg',
    'author2' : 'Aline Querino - Pastoral',

    'title3' : 'DETECTORES DE METAIS EM CRECHES E ESCOLAS É APROVADO PELA CÂMARA MUNICIPAL DE LONDRINA',
    'description3' : 'Câmara Municipal de Londrina, no dia 13 de abril de 2023, aprovou unanimamente o projeto de lei 61/2023, que autoriza a instalação de detectores de metais em creches e escolas da rede municipal.',
    'diretoryImage3' : 'news-6_1.jpg',
    'author3' : 'Thalyta das Neves Ferreira (2º ano A)',

    'title4' : 'SER BRASILEIRO É SER DIFERENTE TODOS OS DIAS',
    'description4' : 'Brasileiro na verdade é uma profissão... Veja mais',
    'diretoryImage4' : 'news-7_1.jpg',
    'author4' : 'Vitória Gabrieli Silva de Oliveira (2º ano C)',
};




// ----------------------------------| generate_Authors | -----------------------------------------------

// const generateAuthors = () => {
//     authors.forEach(element => { 
//         document.querySelector('#containerAuthors').innerHTML += (`
//             <li><a class="dropdown-item" id="codeAuthor${element[1]}" href="#">${element[0]}</a></li>`
//         );
//     });
// };

// generateAuthors();

// -------------------------------------------------------------------------------------------------------------------------


document.querySelector('#urgentNews').innerHTML = (`
    <div class="card mb-3 p-1 m-2 cardDark" style="max-width: 90%;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./newsPaper/images/${info_urgentNews.diretoryImage}" class="img-fluid rounded-start" alt="Imagem">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title cardDark-text">${info_urgentNews.title}</h5>
                    <p class="card-text cardDark-text">${info_urgentNews.description}</p>
                    <a href="newsPaper/news1.html" class="btn btn-primary">Visualizar</a>
                </div>
            </div>
        </div>
    </div>
`);


// -------------------------------------------------------------------------------------------------------------------------
document.querySelector('#sideNews').innerHTML = (`
    <div class="row p-5">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card cardDark">
                <div class="card-body">
                    <h5 class="card-title cardDark-text">${infoSideNews.title1}</h5>
                    <p class="card-text cardDark-text">${infoSideNews.description1}</p>
                    <a href="newsPaper/news2.html" class="btn btn-primary">Ver mais...</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card cardDark">
                <div class="card-body">
                    <h5 class="card-title cardDark-text">${infoSideNews.title2}</h5>
                    <p class="card-text cardDark-text">${infoSideNews.description2}</p>
                    <a href="newsPaper/news3.html" class="btn btn-primary">Ver mais...</a>
                </div>
            </div>
        </div>
    </div>
`);

// -------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------

document.querySelector('#recommendedNews').innerHTML = (`
    <div class="card text-center cardDark">
        <div class="card-header cardDark-text">
            Recomendado
        </div>
        <div class="card-body">
            <h5 class="card-title cardDark-text">${recommendedNews.title}</h5>
            <p class="card-text cardDark-text">${recommendedNews.description}</p>
            <a target="_blank" href="${recommendedNews.url}" class="btn btn-primary">Acessar site</a>
            </div>
            <div class="card-footer text-body-secondary cardDark-text">
            Venha conhecer nossa plataforma online!
        </div>
    </div>
`);

// -------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------

document.querySelector('#cardsNews').innerHTML = (`
    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage1}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title1}</h5>
            <p class="card-text cardDark-text">${newsCards.description1}</p>
            <a href="newsPaper/news4.html" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${newsCards.author1}
            </div>
        </div>
    </div>

    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage2}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title2}</h5>
            <p class="card-text cardDark-text">${newsCards.description2}</p>
            <a href="newsPaper/news5.html" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${newsCards.author2}
            </div>
        </div>
    </div>

    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage3}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title3}</h5>
            <p class="card-text cardDark-text">${newsCards.description3}</p>
            <a href="newsPaper/news6.html" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${newsCards.author3}
            </div>
        </div>
    </div>

    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage4}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title4}</h5>
            <p class="card-text cardDark-text">${newsCards.description4}</p>
            <a href="newsPaper/news7.html" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${newsCards.author4}
            </div>
        </div>
    </div>
`);


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

const recentNews = {
    'title' : 'A INCRÍVEL HISTÓRIA DE CAROLINA MARIA DE JESUS',
};

document.querySelector('#quoteAndrecent').innerHTML = (`
    <div class="card cardDark">
        <div class="card-header cardDark-text">
            Frase do dia
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0 cardDark-text">
                <p class="cardDark-text">${QuoteOfTheDay.quote}</p>
                <footer class="blockquote-footer cardDark-text">Dita por <cite title="Source Title" class="cardDark-text">${QuoteOfTheDay.author}</cite></footer>
            </blockquote>
        </div>
    </div>

    <div class="card cardDark">
        <h5 class="card-header cardDark-text">Veja também</h5>
        <div class="card-body">
            <h5 class="card-title cardDark-text">${recentNews.title}</h5>
            <a href="newsPaper/news8.html" class="btn btn-primary">Ver mais</a>
        </div>
    </div>
`);

const recentNews2 = {
    'title' : 'O RACISMO E A VIOLÊNCIA POLICIAL EM: "O ÓDIO QUE VOCÊ SEMEIA"',
    'title2' : 'MUSCULAÇÃO A ONDA DO MOMENTO',
};

document.querySelector('#quoteAndrecent2').innerHTML = (`
    <div class="card cardDark">
        <h5 class="card-header cardDark-text">Veja também</h5>
        <div class="card-body">
            <h5 class="card-title cardDark-text">${recentNews2.title}</h5>
            <a href="newsPaper/news9.html" class="btn btn-primary">Ver mais</a>
        </div>
    </div>

    <div class="card cardDark">
        <h5 class="card-header cardDark-text">Veja também</h5>
        <div class="card-body">
            <h5 class="card-title cardDark-text">${recentNews2.title2}</h5>
            <a href="newsPaper/news10.html" class="btn btn-primary">Ver mais</a>
        </div>
    </div>
`);