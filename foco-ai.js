function unBlur(){
  var blured = document.getElementsByClassName("blur");
  for (i = 0; i < blured.length;i++){
    blured[i].style.filter = "blur(0)";
  }
}

function expand(){
  var retract = document.getElementsByClassName("paywall");
  var retractIcon = document.getElementsByClassName("expand-overlay");
  for (i = 0; i < retract.length;i++){
    retract[i].style.height = "inherit";
    retract[i].style.position = "inherit";
    retractIcon[i].style.position = "inherit";
  }
}

// Testing...

if(document.URL.split(".")[1] == "respondeai"){
  unBlur();
  expand();
}
