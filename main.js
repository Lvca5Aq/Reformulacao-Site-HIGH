var botaoMenu = document.getElementById("bot-menu")
var menu = document.getElementById("menu")
var menuLeft = document.getElementById("menu-left")

botaoMenu.addEventListener("click", function(){
    if(menu.style.display === "flex"){
        menu.style.display="none";
        botaoMenu.innerHTML="MENU";
        menuLeft.style.paddingRight="4.5vw"
    }else{
        menu.style.display="flex";
        botaoMenu.innerHTML="FECHAR";
        menuLeft.style.paddingRight="3.4vw"
    }
});