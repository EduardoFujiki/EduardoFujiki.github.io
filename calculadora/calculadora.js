function onLoad() {
    document.calculadora.visor.value = '0';
}

function onClick(button) {
    if(document.calculadora.visor.value == '0'){
        document.calculadora.visor.value = '' ;
    }
     //pega a string atual e concatena com a nova string passada
    var numero =  document.calculadora.visor.value
    document.calculadora.visor.value = numero + button; 
   
    
    //numero.substr(-1) -> pega o ultimo termo da string
    
    //condição para impedir dois operadores iguais em sequencia
    if(numero.substr(-1) == button){ 
        switch(button){
            case '+': 
                apagaCaractere();
                break;
            case '-':
                apagaCaractere();
                break;
            case '*':
                apagaCaractere();
                break;
            case '/':
                apagaCaractere();
                break;
            default:
        }
    }

    //condição para impdeir dois operandos diferentes em sequencia
    if(numero.substr(-1) == '+' ){
        switch(button){
            case '-':
                apagaCaractere();
                break;
            case '*':
                apagaCaractere();
                break;
            case '/':
                apagaCaractere();
                break;
            default:
        }
    }
    
    if(numero.substr(-1) == '-' ){
        switch(button){
            case '+':
                apagaCaractere();
                break;
            case '*':
                apagaCaractere();
                break;
            case '/':
                apagaCaractere();
                break;
            default:
        }
    }

    if(numero.substr(-1) == '*' ){
        switch(button){
            case '+':
                apagaCaractere();
                break;
            case '-':
                apagaCaractere();
                break;
            case '/':
                apagaCaractere();
                break;
            default:
        }
    }

    if(numero.substr(-1) == '/' ){
        switch(button){
            case '+':
                apagaCaractere();
                break;
            case '-':
                apagaCaractere();
                break;
            case '*':
                apagaCaractere();
                break;
            default:
        }
    }



    //condicao  que garante que operadores de divisão, multiplicação e adição nao possam ser digitados no inicio
    if(document.calculadora.visor.value == '*'){
        limpaTela();
    }
    if(document.calculadora.visor.value == '/'){
        limpaTela();
    }
    if(document.calculadora.visor.value == '+'){
        limpaTela();
    }
}

function limpaTela(){
    document.calculadora.visor.value = '0' ;
}

function apagaCaractere(){
    var caractere = document.calculadora.visor.value;
    document.calculadora.visor.value = caractere.substring(0,caractere.length -1);
}

function calcular(){
    var resultado = document.calculadora.visor.value;
    console.log(resultado);
        document.calculadora.visor.value = eval(resultado);
        
    
}





