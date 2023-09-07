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
    'title' : 'A geração mais defasada no mundo da leitura',
    'description' : 'Nas últimas décadas, o mundo presenciou uma revolução tecnológica sem precedentes. As distâncias diminuíram, os processos foram acelerados e passamos a ter respostas a problemas complexos da vida na palma das nossas mãos.',
    'datePublic' : '2023-07-28' /* Formato : 0000-00-00 - Ex. 2023-10-01 - Ano-mês-Dia*/
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
    'title1' : 'Resgate de animais silvestres!',
    'description1' : 'Centenas de animais silvestres resgatados nesta última quinta-feita(22/05/2023).',

    'title2' : 'Polícia prende chefe de quadrilha.',
    'description2' : 'Faz uma semana que a polícia federal tem contido um dos seus maiores detentos.',
};


//  ------------------------------------------ | recommended_News | ------------------------------------------

const recommendedNews = {
    'title' : 'Show neste domingo em Rio de Janeiro',
    'description' : 'Não perca a chance de adiquirir já seu ingresso.',
    'dataPublic' : '2023-06-01',
};



//  ------------------------------------------ | news_Cards| ------------------------------------------

const newsCards= {
    'title1' : 'Show neste domingo em Rio de Janeiro',
    'description1' : 'Não perca a chance de adiquirir já seu ingresso.',
    'diretoryImage1' : 'abcdefg.jpg',
    'publicDate1' : '2023-03-21',
    'author1' : 'João',

    'title2' : 'Show neste domingo em Rio de Janeiro',
    'description2' : 'Não perca a chance de adiquirir já seu ingresso.',
    'diretoryImage2' : '123456.jpg',
    'publicDate2' : '2023-05-21',
    'author2' : 'João',

    'title3' : 'Show neste domingo em Rio de Janeiro',
    'description3' : 'Não perca a chance de adiquirir já seu ingresso.',
    'diretoryImage3' : '654321.jpg',
    'publicDate3' : '2023-01-30',
    'author3' : 'João',

    'title4' : 'Show neste domingo em Rio de Janeiro',
    'description4' : 'Não perca a chance de adiquirir já seu ingresso.',
    'diretoryImage4' : '123456.jpg',
    'publicDate4' : '2023-04-16',
    'author4' : 'João',
};




//  ------------------------------------------ | news_Cards| ------------------------------------------

const QuoteOfTheDay = {
    'quote' : 'Nunca se esqueça de quem você é!',
    'author' : 'Vitor Júlio',
};

const recentNews = {
    'title' : 'Nasce bebê cegonha!',
    'description' : 'Hipotatamos são legais^-^, mas são assustadores.',
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
                    <p class="card-text cardDark-text cardDark-text"><small class="text-body-secondary cardDark-text">${calcDate(info_urgentNews.datePublic)} dias atrás!</small></p>
                    <a href="newsPaper/news1.html" class="btn btn-primary">Visualizar notícia</a>
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
                    <a href="newsPaper/news2.html" class="btn btn-primary">Ver notícia</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card cardDark">
                <div class="card-body">
                    <h5 class="card-title cardDark-text">${infoSideNews.title2}</h5>
                    <p class="card-text cardDark-text">${infoSideNews.description2}</p>
                    <a href="newsPaper/?idNews=3" class="btn btn-primary">Ver notícia</a>
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
            <a href="newsPaper/?idNews=4" class="btn btn-primary">Acessar site</a>
            </div>
            <div class="card-footer text-body-secondary cardDark-text">
            ${calcDate(recommendedNews.dataPublic)} days ago
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
            <a href="newsPaper/?idNews=5" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${calcDate(newsCards.publicDate1)} days ago <br> ${newsCards.author1}
            </div>
        </div>
    </div>

    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage2}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title2}</h5>
            <p class="card-text cardDark-text">${newsCards.description2}</p>
            <a href="newsPaper/?idNews=6" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${calcDate(newsCards.publicDate2)} days ago <br> ${newsCards.author2}
            </div>
        </div>
    </div>

    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage3}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title3}</h5>
            <p class="card-text cardDark-text">${newsCards.description3}</p>
            <a href="newsPaper/?idNews=7" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${calcDate(newsCards.publicDate3)} days ago <br> ${newsCards.author3}
            </div>
        </div>
    </div>

    <div class="card cardResponsive cardDark" style="width: 18rem;">
        <img src="./newsPaper/images/${newsCards.diretoryImage4}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title cardDark-text">${newsCards.title4}</h5>
            <p class="card-text cardDark-text">${newsCards.description4}</p>
            <a href="newsPaper/?idNews=8" class="btn btn-primary">Visualizar notícia</a>
            <br><br>
            <div class="card-footer text-body-secondary cardDark-text">
                ${calcDate(newsCards.publicDate4)} days ago <br> ${newsCards.author4}
            </div>
        </div>
    </div>
`);


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
        <h5 class="card-header cardDark-text">Última semana</h5>
        <div class="card-body">
            <h5 class="card-title cardDark-text">${recentNews.title}</h5>
            <p class="card-text cardDark-text">${recentNews.description}</p>
            <a href="newsPaper/?idNews=9" class="btn btn-primary">Ver notícia</a>
        </div>
    </div>
`);
