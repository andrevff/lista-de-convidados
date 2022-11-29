var elementoLista = document.getElementById("lista");
var elementoCampo = document.getElementById("campo");
var elementoBotao = document.getElementById("botao");

var convidados = [
    { nome: "Augusto César" },
    { nome: "Maria Lima" },
    { nome: "Roberto Souza" }
]

function listarConvidados() {
    for (convidado of convidados) {
        var elementoConvidado = document.createElement("li")
        var elementoNome = document.createTextNode(convidado.nome)
    
        var elementoExcluir = document.createElement("a")
        elementoExcluir.setAttribute("href", "#")
        elementoExcluir.onclick = function() {
            alert
        }

        var elementoExcluirTexto = document.createTextNode("Excluir")

        elementoExcluir.appendChild(elementoExcluirTexto)
        elementoConvidado.appendChild(elementoNome)
        elementoConvidado.appendChild(elementoExcluir)
        elementoLista.appendChild(elementoConvidado)
    }
}

listarConvidados()

var adicionarConvidado = function() {
    elementoLista.innerHTML = ""
    var nome = elementoCampo.value
    convidados.push({nome: nome})
    elementoCampo.value = ""
    listarConvidados();
}

elementoBotao.onclick = adicionarConvidado