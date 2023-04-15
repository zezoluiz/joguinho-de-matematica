const prompt = require("prompt-sync")()


let numeroAleatorio1 = Math.floor(Math.random() * 20) + 1
let numeroAleatorio2 = Math.floor(Math.random() * 20) + 1

var number1 = numeroAleatorio1
var number2 = numeroAleatorio2
var soma = parseInt(number1) + parseInt(number2)

console.log("Quanto é?")
console.log(number1, "+", number2)

resposta = prompt("Reponda:")

function resolvendoQuestão() {

    if (resposta == soma) {
        return("Uhuuul, você acertou  :)")
        
    }else{
        return("Tente de novo :/")
    }
}
console.log(resolvendoQuestão())


