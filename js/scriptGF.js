var btn = $("#back-to-top");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});

//

const btnMobile = document.getElementById('botao-mobile');

function toggleMenu5(){
    const nave = document.getElementById('nav-cont');
    nave.classList.toggle('ativar');
}

btnMobile.addEventListener('click', toggleMenu5);

//

$("#navbtn1").click(function() {
  $('html, body').animate({
      scrollTop: $("#pilares").offset().top
  }, 1000);
});

$("#navbtn3").click(function() {
  $('html, body').animate({
      scrollTop: $("#ideal").offset().top
  }, 1000);
});

$("#navbtn4").click(function() {
  $('html, body').animate({
      scrollTop: $("#lugares").offset().top
  }, 1000);
});

$("#navbtn5").click(function() {
  $('html, body').animate({
      scrollTop: $("#trabalheconosco").offset().top
  }, 1000);
});

$("#navbtn2").click(function() {
  $('html, body').animate({
      scrollTop: $("#contato").offset().top
  }, 1000);
});

/*  */ 

const btnForm = document.getElementById('btn-form-s-2');

function toggleMenu2(){
    const form = document.getElementById('mkt-form');
    form.classList.toggle('active-form');
}

btnForm.addEventListener('click', toggleMenu2);



$("#btn-form-s-2").click(function() {
  $('html, body').animate({
      scrollTop: $("#container-formulario").offset().top
  }, 1000);
});

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

