// some JS master level god tier shit
$(document).ready(function() {

  $("#myCarousel").carousel()

  $("#aboutbox").hide();
  $("#rosterbox").hide();
  $("#contactbox").hide();

  $("#about-title").hide();
  $("#roster-title").hide();
  $("#contact-title").hide();

  $("#home").click(function(){
    $("#aboutbox").slideUp(400);
    $("#rosterbox").slideUp(400);
    $("#contactbox").slideUp(400);

    $("#about-title").fadeOut(400);
    $("#roster-title").fadeOut(400);
    $("#contact-title").fadeOut(400);

    $("#home-title").delay(600).fadeIn(400);
    //$("#myCarousel").delay(600).fadeIn(400);
    $("#homebox").delay(600).fadeIn(400);
  });

  $("#about").click(function(){
    //$("#myCarousel").slideUp(400);
    $("#homebox").slideUp(400);
    $("#rosterbox").slideUp(400);
    $("#contactbox").slideUp(400);

    $("#home-title").fadeOut(400);
    $("#roster-title").fadeOut(400);
    $("#contact-title").fadeOut(400);

    $("#about-title").delay(600).fadeIn(400);
    $("#aboutbox").delay(600).fadeIn(400);
  });

  $("#roster").click(function(){
    //$("#myCarousel").slideUp(400);
    $("#homebox").slideUp(400);
    $("#aboutbox").slideUp(400);
    $("#contactbox").slideUp(400);

    $("#home-title").fadeOut(400);
    $("#about-title").fadeOut(400);
    $("#contact-title").fadeOut(400);

    $("#roster-title").delay(600).fadeIn(400);
    $("#rosterbox").delay(600).fadeIn(400);
  });

  $("#contact").click(function(){
    //$("#myCarousel").slideUp(400);
    $("#homebox").slideUp(400);
    $("#aboutbox").slideUp(400);
    $("#rosterbox").slideUp(400);

    $("#home-title").fadeOut(400);
    $("#about-title").fadeOut(400);
    $("#roster-title").fadeOut(400);

    $("#contact-title").delay(600).fadeIn(400);
    $("#contactbox").delay(600).fadeIn(400);
  });

});
