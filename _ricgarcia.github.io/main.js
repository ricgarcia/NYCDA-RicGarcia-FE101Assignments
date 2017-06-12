$(document).ready(function() {
  $(".hamburger").click(function(){
    $("nav ul").slideToggle();
  })

  $(window).scroll(function(){
    if($(window).scrollTop() > 900 &&
      $("nav").css("position") != "fixed"){
      $("nav").hide(function(){
        $("nav").css("position", "fixed")
        $("nav").slideDown('1000')
      })
    }else if($(window).scrollTop() <= 900 ){
      $("nav").css("position", "initial")
    }
  })

  var menu = $('nav ul');

  $(window).resize(function(){
     var w = $(window).width();
     if(w > 768 && menu.is(':hidden')) {
         menu.removeAttr('style');
     }
  });
})
