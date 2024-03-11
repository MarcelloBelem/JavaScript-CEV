function verificar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO} Falta de dados, por favor verifique e tente novamente!")
    } else {
        var ini = Number(inicio.value)
        var fim = Number(fim.value)
        var pas = Number(passo.value)
        res.innerHTML = "Contando: <br>"
        if (pas <= 0) {
            window.alert("[Erro] Passo invalido! Considerando PASSO 1")
            pas = 1
        }

        if (ini < fim) {
            for(var valor = ini; valor <= fim; valor += pas) {
                res.innerHTML += `${valor}  \u{1f449}`
            }
        } else {
            for(var valor = ini; valor >= fim; valor -= pas) {
                res.innerHTML += `${valor}  \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}