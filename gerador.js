document.addEventListener("DOMContentLoaded", function(){
function GeradorDeSenha(senhalength, caracteres){

    let senha = '';

    for(let i = 0; i < senhalength; i++){
        const acc = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[acc];
    }
    return senha
}

const caracteres = [];

for(let i = 33; i <= 126; i++){
    caracteres.push(String.fromCharCode(i));
}

let senhalength = parseInt(document.querySelector("#barra").value);

document.querySelector("#barra").addEventListener("input", function () {
    senhalength = parseInt(this.value);
});
    document.querySelector("#gerarsenhabotao").addEventListener("click", function () {
    const senhaGerada = GeradorDeSenha(senhalength, caracteres);

    const resultado = document.querySelector("#resultado");
    resultado.textContent = senhaGerada;
    resultado.classList.add("visivel");
});
});