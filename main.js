
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
const nomeR = document.getElementById("nome");
const sobreNomeR = document.getElementById("sobreNome");
const emailRegister = document.getElementById("email.register");
const senhaRegister = document.getElementById("senha.register");
const confirmSenha = document.getElementById("confirmSenha");
const btnRegister = document.getElementById("btnRegister");
const formR = document.getElementById("form.register")
btnRegister.addEventListener("click", () => {
    event.preventDefault();
    const nome = nomeR.value;
    const sobreNome = sobreNomeR.value;
    var email = emailRegister.value;
    var senha = senhaRegister.value;
    const confSenha = confirmSenha.value;
    console.log("Clique no botão de registro")

    axios.post("http://localhost:3000/usuarios/cadastro", {
        nome: nome,
        sobreNome: sobreNome,
        email: email,
        senha: senha,
        confSenha: confSenha
    })
    .then(function (response) {
        // Exibe a resposta recebida no console
        console.log(response.data);
        // Exibe a mensagem de erro na página HTML
        alert(response.data.msg);
        formR.reset();
    })
    .catch(function (error) {
        // Exibe a mensagem de erro na página HTML
        var divResposta = document.getElementById("resposta");
        divResposta.innerText = error.response.data.msg;
      });

});
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("senhaLogin");
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () => {
    event.preventDefault();
    email = emailLogin.value;
    senha = senhaLogin.value;

    axios.post("http://localhost:3000/usuarios/login", {
        email: email,
        senha: senha
    })
    .then((response) => {
        console.log(response.data.msg);
        sessionStorage.setItem("token",response.data.token)
        alert(response.data.msg)
        window.location.href= "./index.html"
        formLogin.reset();                 
    })
    .catch(function (err){
        console.error(err);
        alert("Senha incorreta")
    })

});
const emailRec = document.getElementById("emailRec");
const novaSenha = document.getElementById("novaSenha");
const bntRecuperaçao = document.getElementById("bntRecuperaçao");
bntRecuperaçao.addEventListener("click", () => {
    event.preventDefault();
    email = emailRec.value;
    senha = novaSenha.value;

    axios.put("http://localhost:3000/usuarios/recu", {
        email: email,
        senha: senha
    })
    .then((response) => {
        console.log(response.data)
        alert("Senha alterada com sucesso");
        formLogin.reset();        
    })
    .catch(function (err){
        console.log(err);
    })
});
