let valores = [9,5,0,46,78,65]

//Formas de mostra o vetor
//1º Forma: Mostra o vetor e seus elementos igual no javascript, com os colchetes e virgulas

//console.log(valores) 

//2º Forma: Mostra os elementos do vetor independente. Para essa forma tem dois métodos

/* 2º Forma, 1º Método: Metodo mais trabalhos com mais linhas de codigos
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* 2º Forma, 2º Método: Metodo melhor, ultiliza-se a repetição FOR, para diminuir o coding
for(var pos = 0; pos <= valores.length; pos++) {
    console.log(valores[pos])
}
*/

/* 2º Forma, 3º Método: Método melhor ainda e mais indicado, ultiliza o FOR IN, para diminuir o coding, mais pratico que o método anterior
for(let pos in valores) {
    console.log(valores[pos])
} */

console.log(`Esse vetor tem ${valores.length} Posições`)