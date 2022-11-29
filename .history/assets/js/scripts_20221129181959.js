var elementoLista = document.getElementById("lista");
var elementoCampo = document.getElementById("campo");
var elementoBotao = document.getElementById("botao");

var convidados = [
    { nome: "Augusto César" },
    { nome: "Maria Lima" },
    { nome: "Roberto Souza" }
]

for (convidado of convidados) {
    var elementoConvidado = document.createElement('li')
    var elementoNome = document.createTextNode(convidado.nome)

    elementoConvidado.appendChild(elementoNome)
    elementoLista.appendChild(elementoConvidado)

    var adicionarConvidado function name(params) {
        
    }
}