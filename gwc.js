
var buttons = document.getElementsByTagName("button");

$(document).ready(function(){
    $("button").click(function(){
    var id = $(this);
    for (i = 0; i < buttons.length; i++){
    	var button = $(buttons[i]);
     	if (!(button.is(id))){
        	$(button).animate({width: "15%",}, {duration:1000, easing: "swing", queue: false});
          buttons[i].setAttribute("style", "color:default");
        }

      else{
    	   $(id).animate({width: "70%"}, {duration: 1000, easing: "swing", queue: false});
         $(id).fadeTo(1000, 0);
         this.setAttribute("style",  "color: rgba(0, 0, 0, 0)");
		  }
    }
  });
});
