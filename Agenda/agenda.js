let lista = [];

//cadastra os contatos em uma lista
function cadastrar(){
    
    let pessoa ={
        id:document.getElementById("id").value,
        nome:document.getElementById("nome").value,
        tel:document.getElementById("tel").value,
    };
    console.log(pessoa.id);
    console.log(pessoa.nome);
    console.log(pessoa.tel);
    
    lista.push(pessoa);
    console.log(lista);
    console.log(lista.length);

    
}

//remove o contato da agenda
function remover(){
    let nome = document.getElementById("removeNome").value;
    for(let i = 0; i<=lista.length; i++){
        if(nome == lista[i].nome){
            lista.splice(i,1);
        }
    }
    console.log(lista);
    console.log(nome);
} 

// function buscar(){
//     let busca = document.getElementById("buscaNome").value;
//     for(let i = 0; i<=lista.length; i++){
//         if(nome === lista[i].nome){
//             console.log(nome);
//         }
//     }
// }
    

    