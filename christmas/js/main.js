$( document ).ready(function() {
  var items = [
    "img/bumble.png",
    "img/greensquare.jpg ",
    "img/salmon.png",
    "img/tea.jpg",
    "img/lemon.png",
    "img/couple.jpg",
    "img/movie.jpg",
    "img/drive.jpg",
    "img/day9.jpg",
    "img/bon.jpg",
    "img/poo.jpg",
    "img/day12.JPG",
    "img/day13.jpg",
    "img/day14.JPG",
    "img/creme.png",
    "img/day16.jpg",
    "img/smoke.png",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""];

  var message = "";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var scrolled = false;
  var timeDelay = 200;

  // function to reveal message
  var cardReveal = function() {
    $("#message").text(message).show();
  }

  //day=25; // uncomment to skip to 25

  // Only work in December
  if(month === 12) {
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);

      // Open past windows
      if( day !== adventwindow && adventwindow < day ) {
        window.setTimeout(function(){
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add item so far to message variable
      if( adventwindow <= day ) {
        var inside = items[index];
        if (inside.startsWith("img")) {
          $(this).append('<div class="revealed">' + '<img width=100% src="' + inside + '"/>'  + '</div>');
        } else{
          $(this).append('<div class="revealed">' + inside + '</div>');
        }
        message = message + " " + inside;
      }

      // Add jiggle animation to current day window
      if(adventwindow === day) {
        $(this).addClass("current");
        $(this).addClass("jiggle");
      }

      //let_it_snow
      function snow(){
        $("canvas.snow").let_it_snow({
        speed: 0,
        interaction: true,
        size: 2,
        count: 200,
        opacity: 0,
        color: "#ffffff",
        windPower: 0,
        image: false
        });
      }

      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        if(adventwindow <= day) {
          $(this).children(".door").toggleClass("open");
          snow();
        }

        $(this).removeClass("jiggle");

        // If 25th, can show the message
        if(day >= 25 && adventwindow === 25) {
          messageReveal();

          // Animate scroll to message if not already done
          if(!scrolled) {
            $('html, body').animate({
              scrollTop: $("#message").offset().top
            }, 2000);
            scrolled = true;
          }
        }
      });

    });

    // If beyond 24, show message
    if(day >= 26){
      messageReveal();
    }

  }

});
