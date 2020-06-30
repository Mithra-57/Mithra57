// ***************************************gallery*********************************//
// MDB Lightbox Init

// ***************************************gk****************************************//
$("#cta").ready(function(){
  $("button.a").click(function(){
    var audio=new Audio("sounds/gk.ogg");
    audio.play();
  });

  $(".btn1").click(function(){
      $(this).hide(700);
  });
  $(".btn1").mouseleave(function(){
    $(this).show(700);
  });
});
// *********************************visnu*********************************//
$("#cta").ready(function(){
$("button.b").click(function(){
  var audio1=new Audio("sounds/visnu.mpeg");
  audio1.play();
});
$(".btn2").click(function(){
    $(this).hide(700);
});
$(".btn2").mouseleave(function(){
  $(this).show(700);
});
});
// ***********************************nethu******************************//
$("#cta").ready(function(){


$("button.c").click(function(){
  var audio2=new Audio("sounds/nethu.ogg");
  audio2.play();
});
$(".btn3").click(function(){
  $(this).hide(700);

});
$(".btn3").mouseleave(function(){
  $(this).show(700);
audio2.stop();
});
});
// ***********************************boomikaa******************************//
$("#cta").ready(function(){


$("button.d").click(function(){
  var audio3=new Audio("sounds/boomikaa.ogg");
  audio3.play();
});
$(".btn4").click(function(){
  $(this).hide(700);

});
$(".btn4").mouseleave(function(){
  $(this).show(700);

});
});
// ***********************footer********************************************//
$("#features").ready(function(){
     $("#fbtn1").click(function(){
       $("#fbtn1,#fbtn2").hide(1000);
       $(".feature-p").animate({right:'200px',
         height:'250px',width:'250px'});
       $(".column").html("<strong>HAPPY BIRTHDAY MITHU..</strong><img src='images/birthday-cake.png' alt=''>");});



});
