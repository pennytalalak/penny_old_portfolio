//Buttons for Elevations
$("#frontButton").click(function(){
  $("#front").attr("src", "elevations/front.jpg");
  $("#front").toggle();
});


$("#backButton").click(function(){
  $("#back").attr("src", "elevations/back.jpg");
  $("#back").toggle();
});

$("#leftButton").click(function(){
  $("#left").attr("src", "elevations/left.jpg");
  $("#left").toggle();
});

$("#rightButton").click(function(){
  $("#right").attr("src", "elevations/right.jpg");
  $("#right").toggle();
});

//Changing image on hover
var sourceSwap = function(){
 var $this = $(this);
 var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
}
$(function(){
  $('img.xyz').hover(sourceSwap, sourceSwap);
}) ;
