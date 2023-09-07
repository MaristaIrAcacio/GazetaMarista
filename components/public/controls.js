document.querySelector('#btnSettings').addEventListener('click', () => {
    $('#containerSettings').removeClass("hidden");
});

document.querySelector('#closeBtnSettings').addEventListener('click', () => {
    $('#containerSettings').addClass("hidden");
});

document.querySelector('#inputCheckbox_theme').addEventListener('input', (event) => {
    let checkboxTheme = $('#inputCheckbox_theme');
    if(checkboxTheme.is(":checked")) {
        themeDark();
    } else {
        themeLigth();
    };
});

const themeLigth = () => {
    $('.cardDark').css("background","none");
    $('.cardDark').css("border","1px solid #888");
    $('.cardDark-min').css("background","#f5f5f5");
    $('.cardDark-text').css("color","#000");
    $('body').css("background","none");
    $('.aboutbg').css("background","#f5f5f5");
};

const themeDark = () => {
    $('.cardDark').css("background","var(--theme-dark-background-card)");
    $('.cardDark').css("border","1px solid #f5f5f5");
    $('*').css("color","var(--theme-dark-text)");
    $('.cardDark-text').css("color","var(--theme-dark-text)");
    $('body').css("background","var(--theme-dark-background-card)");
    $('.cardDark-min').css("background","var(--theme-dark-background)");
    $('.aboutbg').css("background","var(--theme-dark-background)");
};