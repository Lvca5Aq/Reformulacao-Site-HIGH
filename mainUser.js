const nomeA = document.getElementById("nomeUsuario");
const sobreNomeA = document.getElementById("sobrenomeUsuario");
const emailA = document.getElementById("emailUsuario");
const senhaA = document.getElementById("senhaUsuario");
const confirmSenhaA = document.getElementById("senhaConfimada");
const btnA = document.getElementById("btnAtualizar");
var divResposta = document.getElementById("resposta");

btnA.addEventListener("click", () => {
    event.preventDefault();
    const nome = nomeA.value;
    const sobreNome = sobreNomeA.value;
    var email = emailA.value;
    var senha = senhaA.value;
    const confSenha = confirmSenhaA.value;
    console.log("Clique no botão de registro")

    axios.put("http://localhost:3000/usuarios/atualizar", {
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
        alert("Dados alterados com sucesso")
        window.location.href= "./usuario.html"
    })
    .catch(function (error) {
        // Exibe a mensagem de erro na página HTML
        var divResposta = document.getElementById("resposta");
        divResposta.innerText = error.response.data.msg;
      });

});

const btnD = document.getElementById("btnDelete");
btnD.addEventListener("click",()=>{
    event.preventDefault();
    const token = sessionStorage.getItem("token")
    axios.delete("http://localhost:3000/usuarios/deletar", {
        headers:{
            token:token
        }
    })
    .then(function (response) {
        console.log(response.data);
        alert("Conta excluida")
        sessionStorage.clear();
        window.location.href= "./index.html"
    })
    .catch(function (err) {
        alert(err.message);
    })
})