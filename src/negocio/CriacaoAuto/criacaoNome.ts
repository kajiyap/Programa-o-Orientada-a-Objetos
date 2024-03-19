export default function criaNome(){

    let quantidadeDeSilabas=getRandomIntInclusive(2,3);
    let nome="";
  
    for (let contadorSilaba=1;contadorSilaba<=quantidadeDeSilabas;contadorSilaba++){
  
      nome=nome +  getConsoanteAleatoria() + getVogalAleatoria() ;
  
    }
  
    return nome;
  
  }
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getVogalAleatoria(){
  
    let listaVogais="AEOIU";
    let numeroAleatorio=getRandomIntInclusive(1, 5);
  
    return listaVogais.substring(numeroAleatorio-1,numeroAleatorio);
  
  }
  
  function getConsoanteAleatoria(){
  
    let listaConsoantes="BCDFGHJKLMNPRSTWVYZ";
    let numeroAleatorio=getRandomIntInclusive(1, 21);
  
    return listaConsoantes.substring(numeroAleatorio-1,numeroAleatorio);
  
  }