let valueUser = document.getElementById("valor")
let array = document.getElementById("array")
let spaceAnalyze = document.getElementById("spaceanalyzed")
let valores = []

function add() {
    let valueData = Number(valueUser.value)
    
    if (valueUser.value.length == 0 || valueData <= 0 || valueData > 100) {
        alert("[ERRO!] Apenas valores entre 1 e 100!")
    } else {
        valores.push(valueData)
        array.innerHTML += `<p>O valor ${valueData} foi adicionado!</p>`
        spaceAnalyze.innerHTML = ""
    }
}

function analyze() {
    if (valores == 0) {
        alert("[ERRO!] Adicione um número para analisar!")
    } else {
        valores.sort((a,b) => a - b) //Assim deixamos a nossa array em ordem crescente
        
        let register = valores.length
        let bigger = valores[register - 1]
        let smaller = valores[0]
        let sum = 0
        // Este for server para fazer a soma dos valores da nossa array
        for(let c = 0; c < valores.length; c++) { 
            sum += valores[c]
        }
        let average = sum / register

        spaceAnalyze.innerHTML = ""
        spaceAnalyze.innerHTML += `<p>Ao todo, temos ${register} números cadastrados.</p><br>`
        spaceAnalyze.innerHTML += `<p>O maior valor informado foi: ${bigger}</p><br>`
        spaceAnalyze.innerHTML += `<p>O menor valor informado foi: ${smaller}</p><br>`
        spaceAnalyze.innerHTML += `<p>Somando todos os valores, temos: ${sum}</p><br>`
        spaceAnalyze.innerHTML += `<p>A média dos valores dgitados é: ${average.toFixed(2)}</p><br>`
}
}