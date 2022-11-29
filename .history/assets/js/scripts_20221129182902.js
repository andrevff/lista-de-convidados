var elementoLista = document.getElementById("lista");
var elementoCampo = document.getElementById("campo");
var elementoBotao = document.getElementById("botao");

var convidados = [
    { nome: "Augusto César" },
    { nome: "Maria Lima" },
    { nome: "Roberto Souza" }
]

function listarConvidados() {
    
}

for (convidado of convidados) {
    var elementoConvidado = document.createElement('li')
    var elementoNome = document.createTextNode(convidado.nome)

    elementoConvidado.appendChild(elementoNome)
    elementoLista.appendChild(elementoConvidado)

    var adicionarConvidado = function() {
        var nome = elementoCampo.value
        convidados.push({nome: nome})
        console.log(nome)
    }

    elementoBotao.onclick = adicionarConvidado
}