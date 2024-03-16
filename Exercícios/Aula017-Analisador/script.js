var valueUser = document.getElementById("valor")
var array = document.getElementById("array")
var spaceAnalyze = document.getElementById("spaceanalyzed")
var valores = []



function add() {
    var valueData = Number(valueUser.value)
    

    if (valueUser.value.length == 0 || valueData > 100 || valueData <= 0) {
        alert("[ERRO!] Apenas números entre 1 e 100!")
    } else {
        valores.push(valueData)
        array.innerHTML += `<p>O valor ${valueData} adicionado!</p>`
        spaceAnalyze.innerHTML = ""
    }
}

function analyze() {
    valores.sort((a,b) => a - b)
    
    var register = valores.length
    var bigger = valores[register -1]
    var smaller = valores[0]
    var sum = 0
    for (let c = 0;c < register; c++) {
        sum += valores[c]
    }
    var average = sum/register

    spaceAnalyze.innerHTML = ""
    spaceAnalyze.innerHTML += `<p>Ao todo, temos ${register} números cadastrados.</p><br>`
    spaceAnalyze.innerHTML += `<p>O maior valor informado foi: ${bigger}</p><br>`
    spaceAnalyze.innerHTML += `<p>O menor valor informado foi: ${smaller}</p><br>`
    spaceAnalyze.innerHTML += `<p>Somando todos os valores, temos: ${sum}</p><br>`
    spaceAnalyze.innerHTML += `<p>A média dos valores dgitados é: ${average.toFixed(2)}</p><br>`
}