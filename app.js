//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = []




function adicionarAmigo(){
    
    let inputValue = document.getElementById("amigo")

    let nome = inputValue.value.trim()
    console.log(nome.value)

    if(!nome){
    alert("O Nome deve ser válido")
}   

  

    nomes.push(nome);
        const novoItem = document.createElement("li");
        novoItem.innerHTML = nome;
        document.getElementById("listaAmigos").appendChild(novoItem);
    
}

function sortearAmigo(){

     let index = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[index];
    let lista = document.getElementById("resultado");
    lista.innerHTML = "O Amigo secreto sorteado é: " + sorteado;
}