var botaoMenu = document.getElementById("bot-menu")
var menu = document.getElementById("menu")
var menuLeft = document.getElementById("menu-left")

botaoMenu.addEventListener("click", function(){
    if(menu.style.display === "flex"){
        menu.style.display="none";
        botaoMenu.innerHTML="MENU";
        menuLeft.style.paddingRight="11vw"
    }else{
        menu.style.display="flex";
        botaoMenu.innerHTML="FECHAR";
        menuLeft.style.paddingRight="9.9vw"
    }
});

var botaoBuscar = document.getElementById("btn-buscar")
var label = document.getElementById("label-buscar")
var input = document.getElementById("ipt-buscar")

botaoBuscar.addEventListener("click", function(){
    if(botaoBuscar.innerHTML === "BUSCAR"){
        botaoBuscar.innerHTML = "FECHAR"
        label.style.display = "inline-block"
        input.style.display = "inline-block"
        menuLeft.style.paddingRight="29.3vw"
    }else{
        botaoBuscar.innerHTML = "BUSCAR"
        label.style.display = "none"
        input.style.display = "none"
        menuLeft.style.paddingRight="11vw"
    }
})