var elementoLista = document.getElementById("lista");
var elementoCampo = document.getElementById("campo");
var elementoBotao = document.getElementById("botao");

var convidados = [
    { id: 1, nome: "Augusto César", idade: 25 },
    { id: 2, nome: "Maria Lima", idade: 18 },
    { id: 1, nome: "Roberto Souza", idade: 16 }
]

for (convidado of convidados) {
    var elementoConvidado = document.createElement('li')
    var elementoNome = document.createTextNode(convidado.nome)

    elementoConvidado.app
}