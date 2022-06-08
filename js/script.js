// LER MAIS

$(document).ready(function() {
 
    var showChar = 60;  
    var ellipsestext = "...";
    var moretext = "Ler mais";
    var lesstext = "";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

// ROLAR PÁGINA

$("#navbtn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#marcas").offset().top
    }, 1000);
});

$("#navbtn3").click(function() {
    $('html, body').animate({
        scrollTop: $("#clientes").offset().top
    }, 1000);
});

$("#navbtn4").click(function() {
    $('html, body').animate({
        scrollTop: $("#locais").offset().top
    }, 1000);
});

$("#navbtn5").click(function() {
    $('html, body').animate({
        scrollTop: $("#contato").offset().top
    }, 1000);
});

// TOPO

var btn = $("#back-to-top");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});

// CONTATO

var btn = $("#topo");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});

$("#ctt-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#fazemos").offset().top
    }, 1000);
});

$("#ctt-3").click(function() {
    $('html, body').animate({
        scrollTop: $("#clientes").offset().top
    }, 1000);
});

$("#ctt-4").click(function() {
    $('html, body').animate({
        scrollTop: $("#locais").offset().top
    }, 1000);
});

/*  */

$(document).ready(function(){
    $("#lightSlider").lightSlider({
        item:5,
    });
})


/*  NAVBAR  */

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/*  VIDEO   */

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){
    videoPlayer.style.display = "none";
    myVideo.pause();
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
}

function travarVideo(){
    videoPlayer.style.display = "none";
    myVideo.pause();
}

