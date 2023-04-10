var btnP = document.getElementById(`btn-p`)
var btnM = document.getElementById(`btn-m`)
var btnG = document.getElementById(`btn-g`)
var btnGG = document.getElementById(`btn-gg`)
var btnXGG = document.getElementById(`btn-xgg`)
var btnShop = document.getElementById(`btn-shop`)

btnP.addEventListener(`click`, function(){
    btnP.style.border=`1px solid`
    btnM.style.border=`none`
    btnG.style.border=`none`
    btnGG.style.border=`none`
    btnXGG.style.border=`none`
    btnShop.style.backgroundColor=`black`
    btnShop.style.color=`white`
})

btnM.addEventListener(`click`, function(){
    btnP.style.border=`none`
    btnM.style.border=`1px solid`
    btnG.style.border=`none`
    btnGG.style.border=`none`
    btnXGG.style.border=`none`
    btnShop.style.backgroundColor=`black`
    btnShop.style.color=`white`
})

btnG.addEventListener(`click`, function(){
    btnP.style.border=`none`
    btnM.style.border=`none`
    btnG.style.border=`1px solid`
    btnGG.style.border=`none`
    btnXGG.style.border=`none`
    btnShop.style.backgroundColor=`black`
    btnShop.style.color=`white`
})

btnGG.addEventListener(`click`, function(){
    btnP.style.border=`none`
    btnM.style.border=`none`
    btnG.style.border=`none`
    btnGG.style.border=`1px solid`
    btnXGG.style.border=`none`
    btnShop.style.backgroundColor=`black`
    btnShop.style.color=`white`
})

btnXGG.addEventListener(`click`, function(){
    btnP.style.border=`none`
    btnM.style.border=`none`
    btnG.style.border=`none`
    btnGG.style.border=`none`
    btnXGG.style.border=`1px solid`
    btnShop.style.backgroundColor=`black`
    btnShop.style.color=`white`
})

var btnDsc = document.getElementById(`btn-dsc`)
var bntDt = document.getElementById(`bnt-dt`)
var bntGbt = document.getElementById(`bnt-gdt`)
var bntIdt = document.getElementById(`bnt-idl`)
var descr = document.getElementById(`descr`)
var descrTec = document.getElementById(`descr-tec`)
var guiaTam = document.getElementById(`guia-tam`)
var instruLav = document.getElementById(`instru-lav`)

btnDsc.addEventListener(`click`, function(){
    btnDsc.style.borderBottom = `1px solid`
    bntDt.style.borderBottom = `none`
    bntGbt.style.borderBottom = `none`
    bntIdt.style.borderBottom = `none`
    descr.style.display = `block`
    descrTec.style.display = `none`
    guiaTam.style.display = `none`
    instruLav.style.display = `none`
})

bntDt.addEventListener(`click`, function(){
    btnDsc.style.borderBottom = `none`
    bntDt.style.borderBottom = `1px solid`
    bntGbt.style.borderBottom = `none`
    bntIdt.style.borderBottom = `none`
    descr.style.display = `none`
    descrTec.style.display = `block`
    guiaTam.style.display = `none`
    instruLav.style.display = `none`
})

bntGbt.addEventListener(`click`, function(){
    btnDsc.style.borderBottom = `none`
    bntDt.style.borderBottom = `none`
    bntGbt.style.borderBottom = `1px solid`
    bntIdt.style.borderBottom = `none`
    descr.style.display = `none`
    descrTec.style.display = `none`
    guiaTam.style.display = `block`
    instruLav.style.display = `none`
})

bntIdt.addEventListener(`click`, function(){
    btnDsc.style.borderBottom = `none`
    bntDt.style.borderBottom = `none`
    bntGbt.style.borderBottom = `none`
    bntIdt.style.borderBottom = `1px solid`
    descr.style.display = `none`
    descrTec.style.display = `none`
    guiaTam.style.display = `none`
    instruLav.style.display = `block`
})
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