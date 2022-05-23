const btnCalcular=document.getElementById('btnCalcular');
const btnLimparCampos=document.getElementById('btnLimpar');
console.log(btnLimparCampos);

function checaValores(...args){
    return args ? true:false;
}
function classificaImc(imc){
    let detalhe='';

    if(imc<18.5){
        detalhe='anão magro';
    }else if(imc>=18.5 & imc<25){
        detalhe='anão medio';
    }else if(imc>=25 & imc<30){
        detalhe='anão gordinho';
    }else if(imc>=30 & imc<40){
        detalhe='anão gordo';
    }else {
        detalhe='anão gordão';
    }
    return detalhe;
}
function calculaImc(){
    let peso= parseInt(document.querySelector('#peso').value);
    let altura= parseInt(document.querySelector('#altura').value);
    console.log(checaValores(peso,altura));
    if(checaValores(peso,altura)){
        let sqrtAltura=altura*altura;
        let imc=(peso/sqrtAltura).toPrecision(4);
        let resultado=document.querySelector('#resultado');
        resultado.textContent='Seu IMC atual é:' +imc+'-'+classificaImc(imc);

    }else{
        resultado.textContent='Calcule seu IMC.'
    }
}
function limparCampos(){
    let peso=document.querySelector('#peso');
    let altura=ocument.querySelector('#altura');
    peso.textContent='';
    altura.textContent='';
}
btnCalcular.addEventListener('click', calculaImc);
btnLimparCampos.addEventListener('click',limparCampos);
