var buttons = document.getElementsByTagName("button");

$(document).ready(function(){
    $("button").click(function(){
    var id = $(this);
    for (i = 0; i < buttons.length; i++){
    	var button = $(buttons[i]);
     	if (button.is(id)){
        	$(id).animate({width: '80%', queue: false});
          id.style.webkitFilter = "blur(5px)";
        }

      else{
    	$(buttons[i]).animate({width: '10%', queue: false});
		  }

       }
    });
});
