$("#botao-c-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#pnl").offset().top
    }, 1000);
});

$("#botao-c-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#protocolo-A").offset().top
    }, 1000);
});

$("#botao-c-3").click(function() {
    $('html, body').animate({
        scrollTop: $("#planejam").offset().top
    }, 1000);
});

$("#botao-c-4").click(function() {
    $('html, body').animate({
        scrollTop: $("#telemkt").offset().top
    }, 1000);
});

$("#contato-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contato").offset().top
    }, 1000);
});

$("#passo-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#passoapasso1").offset().top
    }, 1000);
});

/*  */

var btn = $("#back-to-top");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});

/*  */

const btnMobile = document.getElementById('botao-mobile');

function toggleMenu5(){
    const nave = document.getElementById('nav-cont');
    nave.classList.toggle('ativar');
}

btnMobile.addEventListener('click', toggleMenu5);