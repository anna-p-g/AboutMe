function openTab(buttonid){
  button_name = document.getElementById(buttonid);
  button_group = document.getElementById("buttongroup");
  buttons = document.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i ++){
    buttons[i].style.width = "12%";
  }
  button_name.style.width = "76%";

}
