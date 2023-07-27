function limparFormulario() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('cep').value=("");
}
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limparFormulario();
        alert("CEP não encontrado.");
    }
}
function pesquisacep(valor) {
    let cep = valor.replace(/\D/g, '');

    if (cep !== "") {
        let validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            let script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);

        } else {
            //cep é inválido.
            limparFormulario();
            alert("Formato de CEP inválido.");
        }
    }
}



let btnCep = document.getElementById("btn-cep");
let btnRemover = document.getElementById("btn-remover");


btnCep.addEventListener("click", (evt) => {
    evt.preventDefault();
    return pesquisacep(document.getElementById("cep").value)
})

btnRemover.addEventListener("click", (evt) => {
    evt.preventDefault();
    limparFormulario()
})