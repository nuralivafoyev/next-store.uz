var toogleButton = document.getElementById("down-menu");
var menuPannel = document.getElementById("active_catalog");

toogleButton.addEventListener('click', function(){
    menuPannel.classList.toggle('active_hide');
})