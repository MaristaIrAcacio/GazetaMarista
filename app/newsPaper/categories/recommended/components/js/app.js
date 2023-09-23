function updateClock() {
    const relogioElement = document.querySelector('.hours');

    const dataAtual = new Date();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let periodo = 'AM';

    if (horas >= 12) {
        periodo = 'PM';
        if (horas > 12) {
            horas -= 12;
        };
    };
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    relogioElement.textContent = horas + ':' + minutos;
    $('.timerType').text(periodo)
};

setInterval(updateClock, 1000);

updateClock();

window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};
