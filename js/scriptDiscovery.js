$("#btn1").click(function() {
    $('html, body').animate({
        scrollTop: $("#inicio").offset().top
    }, 1000);
});

$("#btn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#inicio").offset().top
    }, 1000);
});

$("#navbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#anchor").offset().top
    }, 1000);
});

$("#navbtn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#palestrantes").offset().top
    }, 1000);
});

$("#navbtn4").click(function() {
    $('html, body').animate({
        scrollTop: $("#eventos").offset().top
    }, 1000);
});

$("#navbtn5").click(function() {
    $('html, body').animate({
        scrollTop: $("#contato").offset().top
    }, 1000);
});

var btn = $("#back-to-top");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


const subsOdometer = document.querySelector(".subs-odometer");

const odometer = new Odometer({
    el: subsOdometer,
})

odometer.update(900);

/*  */

const subsOdometer2 = document.querySelector(".subs-odometer2");

const odometer2 = new Odometer({
    el: subsOdometer2,
})

odometer2.update(90);

/*  */

const subsOdometer3 = document.querySelector(".subs-odometer3");

const odometer3 = new Odometer({
    el: subsOdometer3,
})

odometer3.update(13);