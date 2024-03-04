function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    //Primeiro if "pai", usamos para cria um sistema de alerta caso usuario adicione uma data incorreta, ja o else usamos para fazer o sistema caso o usuario coloque os dados corretos!
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }   else {
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")//Cria um elemento no html. O elemento img.
        img.setAttribute("id","foto")//Adiciona um id com valor foto para o elemento img. <img id="foto">
        if(fsex[0].checked) {
            genero = "Homem"
            if (idade < 13) {
                //Criança
                img.setAttribute("src","img/Hcriança.png")
            }else if (idade < 21) {
                //adolecente
                img.setAttribute("src","img/Hjovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src","img/Hadulto.png")
            } else {
                //idoso
                img.setAttribute("src","img/Hidoso.png")
            }
        }   else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade < 13) {
                //Criança
                img.setAttribute("src","img/Mcriança.png")
            }else if (idade < 21) {
                //adolecente
                img.setAttribute("src","img/Mjovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src","img/Madulto.png")
            } else {
                //idoso
                img.setAttribute("src","img/Midoso.png")
            }
        //Resumo desse else: A variavel genero criamos ela primeiramente sem valor, pois em seguida no if/else, usamos para determina o valor desta variavel por meio do input respondido pelo usuario.

        //A condição dentro do IF(fsex{0}.checked):É usado para o sistema de imagens Masculinas, que integra o propio sistema de sexo, adicionando a condição de idade para gera imagens correspondentes.
        //A condição dentro do IF(fsex{1}.checked):É usado para o sistema de imagens Feminina, que integra o propio sistema de sexo, adicionando a condição de idade para gera imagens correspondentes.

        }
        res.style.textAlign = "center" //Centraliza os textos
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//Adiciona o elemento img(com a imagem referente ao dados fornecido do usuario) criado anteriomente
    }
}