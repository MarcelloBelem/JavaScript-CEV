function verificar() {
    var Uvalor = document.getElementById("valor")
    var adiçao = document.getElementById("adiçao")
    var subtraçao = document.getElementById("subtraçao")
    var multiplicaçao= document.getElementById("multiplicaçao")
    var divisao = document.getElementById("divisao")

    if (Uvalor < 0|| Uvalor.value.length == 0) {
        window.alert("Não aceitamos numeros negativos!")
    } else {
        var valor = Number(Uvalor.value)
        adiçao.innerHTML = ''
        subtraçao.innerHTML = ''
        multiplicaçao.innerHTML = ''
        divisao.innerHTML = ''
        for(var a = 1; a<= 10; a++){
            adiçao.innerHTML += `<p>${valor}+${a}= ${valor+a}</p>`
        }
        for(var a = 1; a<= 10; a++){
            subtraçao.innerHTML += `<p>${valor}-${a}= ${valor-a}</p>`
        }
        for(var a = 1; a<= 10; a++){
            multiplicaçao.innerHTML += `<p>${valor}x${a}= ${valor*a}</p>`
        }
        for(var a = 1; a<= 10; a++){
            var d = valor/a
            divisao.innerHTML += `<p>${valor}/${a}= ${d.toFixed(2)}</p>`
        }
    }
}