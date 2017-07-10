//var buttons = getElementsByTagName("button");

$(document).ready(function(){
    $("#buttongroup button").click(function(){
      var i;
      for (i = 0; i < buttons.length; i++){
        $(buttons[i]).animate({width: '10%'});
      }
        $(this).animate({width: '80%'});
    });
});
