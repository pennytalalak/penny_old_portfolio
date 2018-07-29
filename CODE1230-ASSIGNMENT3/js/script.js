var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();

var openMenu = function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav__list--active');
};

// reveal content of first panel by default
panel.eq(0).find('.panel__content').addClass('panel__content--active');

var scrollFx = function() {
  var ds = doc.scrollTop();
  var of = vh / 4;

  // if the panel is in the viewport, reveal the content, if not, hide it.
  for (var i = 0; i < panel.length; i++) {
    if (panel.eq(i).offset().top < ds+of) {
     panel
       .eq(i)
       .find('.panel__content')
       .addClass('panel__content--active');
    } else {
      panel
        .eq(i)
        .find('.panel__content')
        .removeClass('panel__content--active')
    }
  }
};

var scrolly = function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 300, 'swing', function () {
      window.location.hash = target;
  });
}

var init = function() {
  burger.addEventListener('click', openMenu, false);
  window.addEventListener('scroll', scrollFx, false);
  window.addEventListener('load', scrollFx, false);
  $('a[href^="#"]').on('click',scrolly);
};

doc.on('ready', init);



//Drag and Drop
function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//Latte Button
$(document).ready(function() {
    $(".latteBtn").click(function() {
        $('.lattevid').get(0).play();
    });
});

// Change Page Site Plan
$('#btnClick').on('click',function(){
    $('#word').fadeOut(1000).hide();
    $('#mapbox').fadeIn(1000).show().siblings('div').hide();
    $('#btnClick2').show();
    $('#btnClick').hide();
});

$('#btnClick2').on('click',function(){
  $('#word').fadeIn(1000).show();
  $('#mapbox').hide();
  $('#btnClick2').hide();
  $('#btnClick').show();
});

//Sections
$('.boardingwrap').on('click',function() {
  $('.mainsectionpage').hide().fadeOut('fast');
  $('.boarding_page').fadeIn(1000);
});

$('.teachingwrap').on('click',function() {
  $('.mainsectionpage').hide().fadeOut('fast');
  $('.teacher_page').fadeIn(1000);
});

$('.schoolwrap').on('click',function() {
  $('.mainsectionpage').hide().fadeOut('fast');
  $('.school_page').fadeIn(1000);
});

//Boarding Toggle
$('#backtoggle').on('click',function(){
  $('.boarding_page').hide();
  $('.mainsectionpage').show().fadeIn(1000);
});

//Teacher Toggle
$('#backtoggle2').on('click',function(){
  $('.teacher_page').hide();
  $('.mainsectionpage').show().fadeIn(1000);
});

//School Toggle
$('#backtoggle3').on('click',function(){
  $('.school_page').hide();
  $('.mainsectionpage').show().fadeIn(1000);
});

//For Boarding School
$('#Bfront').hover(function() {
  $('#frontRender').fadeIn(1000);
});
$('#Bfront').mouseleave(function() {
  $('#frontRender').fadeOut(1000);
});


$('#Bleft').hover(function() {
  $('#leftRender').fadeIn(1000);
});
$('#Bleft').mouseleave(function() {
  $('#leftRender').fadeOut(1000);
});

$('#Bback').hover(function() {
  $('#backRender').fadeIn(1000);
},function(){
  $('#backRender').fadeOut(1000);
});

$('#Bright').hover(function() {
  $('#rightRender').fadeIn(1000);
},function(){
  $('#rightRender').fadeOut(1000);
});

// For Teaching
$('#BfrontT').hover(function() {
  $('#frontRenderT').fadeIn(1000);
},function(){
  $('#frontRenderT').fadeOut(1000);
});

$('#BleftT').hover(function() {
  $('#leftRenderT').fadeIn(1000);
},function(){
  $('#leftRenderT').fadeOut(1000);
});

$('#BbackT').hover(function() {
  $('#backRenderT').fadeIn(1000);
},function(){
  $('#backRenderT').fadeOut(1000);
});

$('#BrightT').hover(function() {
  $('#rightRenderT').fadeIn(1000);
},function(){
  $('#rightRenderT').fadeOut(1000);
});

// For School
$('#BfrontS').hover(function() {
  $('#frontRenderS').fadeIn(1000);
},function(){
  $('#frontRenderS').fadeOut(1000);
});

$('#BleftS').hover(function() {
  $('#leftRenderS').fadeIn(1000);
},function(){
  $('#leftRenderS').fadeOut(1000);
});

$('#BbackS').hover(function() {
  $('#backRenderS').fadeIn(1000);
},function(){
  $('#backRenderS').fadeOut(1000);
});

$('#BrightS').hover(function() {
  $('#rightRenderS').fadeIn(1000);
},function(){
  $('#rightRenderS').fadeOut(1000);
});


//Sections
var sourceSwap = function(){
 var $this = $(this);
 var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
}
$(function(){
  $('img.abc').hover(sourceSwap, sourceSwap);
}) ;

// Section full Plan
$("#fullplan").on('click',function(){
  $(".beforeplan").hide();
  $(".fullplanpage").fadeIn(1000);
});

$("#backtoggle4").on('click',function(){
  $(".fullplanpage").hide();
  $(".beforeplan").fadeIn(1000);
});
