let botoesDigitos = document.getElementsByClassName('numeroDigito');
for (c = 0; c <= 9; c++) {
    botoesDigitos[c].addEventListener('click', digitoClick);
}
let botoesAcoes = document.getElementsByClassName('acaoDigito');

for (y = 0; y <= 5; y++) {
    botoesAcoes[y].addEventListener('click', acaoClick);

}

let sinalEsc = "";
let valorAnt = "";
let valorNew = "";

function atualizaTela(valor) {
    let tela = document.getElementById('tela');
    valorNew = valor;
    tela.innerText = valorNew;

    if (valorNew != "" && valorAnt != "" && sinalEsc != "") {
        document.getElementById("botaoIgual").removeAttribute("disabled")

        return
    }
    document.getElementById("botaoIgual").setAttribute("disabled", "disabled")
}

function digitoClick(e) {
    let digito = e.target.value;
    atualizaTela(`${valorNew}${digito}`);
}

function acaoClick(e) {
    let acao = e.target.value;
    rodarAcao(acao);
}

function rodarAcao(acao) {
    if (acao === "=") {
        let resultado;

        if (sinalEsc === "+") {
            resultado = parseInt(valorAnt) + parseInt(valorNew);
        }
        if (sinalEsc === "-") {
            resultado = parseInt(valorAnt) - parseInt(valorNew);
        }
        if (sinalEsc === "x") {
            resultado = parseInt(valorAnt) * parseInt(valorNew);
        }
        if (sinalEsc === "/") {
            resultado = parseInt(valorAnt) / parseInt(valorNew);
        }

        atualizaTela(resultado)
        valorAnt = ""
        return
    }

    if (acao === "c") {
        location.reload();
    }


    valorAnt = valorNew;
    sinalEsc = acao;
    atualizaTela("");
}














