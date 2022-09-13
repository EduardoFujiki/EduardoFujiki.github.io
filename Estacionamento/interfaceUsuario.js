//para abrir um modal
const openModal = document.querySelector("#abrirModal");
const closeModal = document.querySelector("#fecharModal");
const modal = document.querySelector("#modal");

const toggleModal = () =>{
    modal.classList.toggle("hide");
};

[openModal,closeModal/*,modal*/].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

//caso o usuario escolha moto, o campo das portas some no formulario
// document.getElementById("moto").addEventListener("blur", validaCampoMoto);
function validaCampoMoto() {
    document.getElementById("numeroPorta").style.display = "none";
}

document.getElementById("carro").addEventListener("blur", validaCampoCarro);
function validaCampoCarro() {
    document.getElementById("numeroPorta").style.display = "initial";
}

//funções da interface/usuario 

function cadastro(){
   let data = new Date();
   
   nomeProprietario = document.getElementById("nomeProp").value;
   numero_portas = document.getElementById("porta").value;
   marca = document.getElementById("marca").value;
   placa = document.getElementById("placa").value;
   cor = document.getElementById("cor").value;
   id = document.getElementById("id").value; 

   if(document.getElementById("moto").checked){
        new Moto(id, placa, marca, cor, nomeProprietario);
        limpaTela();
   }
   if(document.getElementById("carro").checked){
      new Carro(id, placa,numero_portas, marca, cor, nomeProprietario);
      limpaTela();  
   }
   console.log(nomeProprietario );
   console.log(id);
   console.log(numero_portas);
   console.log(marca);
   console.log(placa);
   console.log(cor);   
   listaCarro();
   listaMoto();
}

function limpaTela(){
    document.getElementById("nomeProp").value = '';
    document.getElementById("porta").value = '';
    document.getElementById("marca").value = '';
    document.getElementById("placa").value = '';
    document.getElementById("cor").value = '';
    document.getElementById("id").value = '';
}

function listaCarro(){
    let tbody = document.getElementById("tbody");
    tbody.innerText = ''; 
    for(let i=0; i<Carro.listaCarro.length; i++){
        let tr = tbody.insertRow();
        
        let td_id = tr.insertCell();
        let td_placa = tr.insertCell();
        let td_marca = tr.insertCell();
        let td_cor = tr.insertCell();
        let td_nomeP = tr.insertCell();
        let td_porta = tr.insertCell();

        td_id.innerText = Carro.listaCarro[i].id;
        td_placa.innerText = Carro.listaCarro[i].placa;
        td_cor.innerText = Carro.listaCarro[i].cor;
        td_marca.innerText = Carro.listaCarro[i].marca;
        td_nomeP.innerText = Carro.listaCarro[i].nomeProprietario;
        td_porta.innerText = Carro.listaCarro[i].numero_portas;
    }
}

function listaMoto(){
    let tbody2 = document.getElementById("tbody2");
    tbody2.innerText = ''; 
    for(let i=0; i<Moto.listaMoto.length; i++){
        let tr = tbody2.insertRow();
        
        let td_id = tr.insertCell();
        let td_placa = tr.insertCell();
        let td_marca = tr.insertCell();
        let td_cor = tr.insertCell();
        let td_nomeP = tr.insertCell();
       
        td_id.innerText = Moto.listaMoto[i].id;
        td_placa.innerText = Moto.listaMoto[i].placa;
        td_cor.innerText = Moto.listaMoto[i].cor;
        td_marca.innerText = Moto.listaMoto[i].marca;
        td_nomeP.innerText = Moto.listaMoto[i].nomeProprietario;
        
    }
}

function remove(){
        document.getElementById("remove").value;
        for(let i=0; i<Carro.listaCarro.length; i++){
            if( document.getElementById("remove").value == Carro.listaCarro[i].id){
                Carro.listaCarro.splice(i,1);
                console.table( Carro.listaCarro);

            }    
        }
}

