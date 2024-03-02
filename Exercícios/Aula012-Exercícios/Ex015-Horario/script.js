function carrega() {
    var hr = window.document.getElementById("hr")
    var imagem = window.document.getElementById("imagem")
    var dhora = new Date()
    var hora = dhora.getHours()
    hr.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        imagem.src = "img/dia.png"
        document.body.style = "background-image: linear-gradient(to bottom, #add8e6,#fbec5d 80%);"
    } else if (hora < 18){
        imagem.src = "img/tarde.png"
        document.body.style = "background-image: linear-gradient(to bottom,#fd3411 ,#ff6e01 ,#5d4366 ,#445b8d ,#160821)"
    } else {
        imagem.src = "img/noite.png"    
        document.body.style = "background-image: linear-gradient(to bottom, #191970 , #b0c4de , #5d4366)"
    }
}