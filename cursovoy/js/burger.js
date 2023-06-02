let burger = document.getElementById("burger");

let menuPoints = document.getElementById("menu-points");

burger.addEventListener("click", function () {
  //скрытие/раскрытие бургера
  if (menuPoints.getAttribute("style") == "display: none;" || 
    menuPoints.getAttribute("style") == null ) {
    menuPoints.style.display = "flex";
  } 
  else{
    menuPoints.style.display = "none";
  }
});

window.addEventListener('resize', function() {
  resize()
});

function resize(){
  //показ меню при десктопном размере страницы
  let menu = document.getElementById("menu");
  if(menu.offsetWidth > 768){
    menuPoints.style.display = "flex";
  }
}

