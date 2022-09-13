 class Estacionamento{
    static listaVeiculos =[];
    constructor(){
        this.numeroDeVagas = 20;
    }

    estacionar(veiculo,horaEntrada){
        let data = new Date();
        veiculo = document.getElementById("veiculo").value;
        horaEntrada = data.toLocaleString();
    }

    liberar(idVeiculo,horaSaida){
        idVeiculo = document.getElementById("id").value;
        for(let i=0; i<Carro.listaCarro.length; i++){
            if(idVeiculo == Carro.listaCarro[i].id){
                Carro.listaCarro.splice(i,1);
            }    
        }
    }

    gerarRelatorio(){
        listaVeiculos = Carro.listaCarro.contact(Moto.listaMoto);
        console.table(listaVeiculos);
    }

    get saldo(){
        
    }
}

 class Veiculo{
    constructor(id, placa, marca, cor, nomeProprietario){
        this.id = id,
        this.placa = placa,
        this.marca = marca,
        this.cor = cor,
        this.nomeProprietario = nomeProprietario
    }
}

 class Carro extends Veiculo{
    static listaCarro = [];
    constructor(id, placa,numero_portas, marca, cor, nomeProprietario){
        super(id, placa, marca, cor, nomeProprietario); 
        this.numero_portas = numero_portas,
        Carro.listaCarro.push(this);
        console.table(Carro.listaCarro);
    }
    calcularValorPago(horaEntrada,horaSaida){
        let valor;
        let data = new Date();
        horaEntrada = data.getHours()*60 + data.getMinutes();
        horaSaida = data.getMinutes()*60 + data.getMinutes();
        let tempo = horaSaida - horaEntrada;
        if(tempo < 30){
            valor = 0;
        }
        if(tempo>30 && tempo<=60){
             valor = 4;
        }
        if(tempo>60 && tempo<=120){
             valor = 8;
        }
        if(tempo>120 && tempo<=180){
             valor = 12;
        }
        if(tempo>180 && tempo<=240){
             valor = 16;
        }
        if(tempo>240){
             valor = 20;
        }
    }
}

 class Moto extends Veiculo{
    static listaMoto = [];
    constructor(id, placa, marca, cor, nomeProprietario){
        super(id, placa, marca, cor, nomeProprietario);
        Moto.listaMoto.push(this);
        console.table(Moto.listaMoto);
    }
    calcularValorPago(horaEntrada,horaSaida){
        let valor;
        let data = new Date();
        horaEntrada = data.getHours()*60 + data.getMinutes();
        horaSaida = data.getMinutes()*60 + data.getMinutes();
        let tempo = horaSaida - horaEntrada;
        if(tempo < 30){
            valor = 0;
        }
        if(tempo>30 && tempo<=60){
             valor = 2;
        }
        if(tempo>60 && tempo<=120){
             valor = 4;
        }
        if(tempo>120 && tempo<=180){
             valor = 6;
        }
        if(tempo>180 && tempo<=240){
             valor = 8;
        }
        if(tempo>240){
             valor = 10;
        }
        
    }
}







