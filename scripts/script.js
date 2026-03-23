const btnContato = document.querySelector("#btn-contato")

btnContato.addEventListener("click", () => {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    if (nome.value === "" || email.value === "" || mensagem.value === "") {
        alert("Por favor, preencha todos os campos antes de enviar.")
    } else if (email.value.includes("@") && email.value.includes(".com")) {
        alert("Mensagem enviada com sucesso!!!")
    } else {
        alert("Por favor, preencha todos os campos corretamente antes de enviar")
    }
});