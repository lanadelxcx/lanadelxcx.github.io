$(document).ready(function(){
    $("#externo").click(function(){
     $(".primeiro").show();
      $(".segundo").hide();
       $(".terceiro").hide();
        $(".quarto").hide();
         $("#laion").hide();
    });

    $("#makeup").click(function(){
     $(".primeiro").hide();
      $(".segundo").show();
       $(".terceiro").hide();
        $(".quarto").hide();
         $("#laion").hide();
    });

      $("#15anos").click(function(){
       $(".primeiro").hide();
        $(".segundo").hide();
         $(".terceiro").show();
          $(".quarto").hide();
           $("#laion").hide();
    });

      $("#infantil").click(function(){
       $(".primeiro").hide();
        $(".segundo").hide();
         $(".terceiro").hide();
          $(".quarto").show();
           $("#laion").hide();
    });

      $("#bio").click(function(){
       $(".primeiro").hide();
        $(".segundo").hide();
         $(".terceiro").hide();
          $(".quarto").hide();
           $("#laion").show();
    });
   

  });