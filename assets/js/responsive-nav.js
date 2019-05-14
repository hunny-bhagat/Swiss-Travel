
function myFunction() {
  var x = document.getElementById("myTopnav");
  var menuBtn = document.getElementById("menuBtn");
  if (x.className === "topnav") {
    x.className += " responsive";
    menuBtn.className = "fa fa-times";
  } else {
    x.className = "topnav";
    menuBtn.className = "fa fa-bars";
  }
}
