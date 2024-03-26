let amigo = {Nome: "Joao",
Idade: 13,
Peso: 87.6,
Engorda(p){
    console.log("engordou")
    this.Peso += p
}}
amigo.Engorda(2)
console.log(`${amigo.Nome} pesa ${amigo.Peso}Kg`)