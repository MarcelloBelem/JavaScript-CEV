function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO!] Verifique os dados e tente novamente")
    } else {
        var idade = ano - Number(fano.value)
        var genero = ""
        var sex = document.getElementsByName("sexo")
        var img = document.createElement("img")
        img.setAttribute("id","foto")

        if (sex[0].checked) {
            genero = "Masculino"
            if (idade < 13) {
                img.setAttribute("src","img/Hcriança.png")
            } else if (idade < 22) {
                img.setAttribute("src","img/Hjovem.png")
            } else if (idade < 50) {
                img.setAttribute("src","img/Hadulto.png")
            } else {
                img.setAttribute("src","img/Hidoso.png")
            }
        } else if (sex[1].checked) {
            genero = "Feminino"
            if (idade < 13) {
                img.setAttribute("src","img/Mcriança.png")
            } else if (idade < 22) {
                img.setAttribute("src","img/Mjovem.png")
            } else if (idade < 50) {
                img.setAttribute("src","img/Madulto.png")
            } else {
                img.setAttribute("src","img/Midoso.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}