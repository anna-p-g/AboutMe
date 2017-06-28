
function openTab(tabName){
  //all tabs
  tabs = document.getElementsByClassName("tabcontent");

  //hide all tab contents
  for (var i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none";
  }

  //display current tab content
  document.getElementById(tabName).style.display = "block";

}
