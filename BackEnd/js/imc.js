function iniciar(){
  
  var edad = document.getElementById("edad").value
  
  var altura = document.getElementById("altura ").value
  
  if(edad == "" && altura == ""){
    resultado.innerHTML = "resultados:  <br/><br/> por favor rellene todos los campos "
  }else{
    calcular()
  }
  
}

// traemos los valores de los peso y de altura y hacemos la operación, además verificamos que los valores no esten vacíos 
function calcular(){
  var txtpeso = document.getElementById("txtpeso");
  var peso = txtpeso.value;
  
  var txtaltura = document.getElementById("txtaltura");
  var altura = txtaltura.value;
  var result = peso / (altura * altura);
  
  if(peso == "" || altura == "" ){
   let mensaje= "rellene todos los campos"
console.log(mensaje)
salida.innerHTML=mensaje
   }else{
    return result; 
   }  
}

// en esta función mostramos el resultado de nuestro imc, además nos dice que nuestro nivel de salud  
function mostra(){

let res ="resultado:"

console.log(res)
  text.innerHTML=res
  
 let mensaje= "su indice de masa corporal es:" +clikbtncalcular()
 console.log(mensaje)
salida.innerHTML=mensaje

  if(clikbtncalcular() < 18.5){
  let mens = +clikbtncalcular()+" es un rango de peso insuficiente."
  console.log(mens)
 indice.innerHTML=mens
  }else{
  if(clikbtncalcular() >= 18.5 && clikbtncalcular() <= 24.9  ){
  let mens = +clikbtncalcular()+"   "+" su imc es saludable."
  console.log(mens)
 indice.innerHTML=mens
  }if(clikbtncalcular() >= 25.0 && clikbtncalcular() <= 29.9){
  let mens = +clikbtncalcular()+"   "+" su imc se encuentra dentro del rango de sobrepeso.."
  console.log(mens)
 indice.innerHTML=mens
  } if(clikbtncalcular() > 30.0){
  let mens =  +clikbtncalcular()+"   "+" su imc se encuentra dentro del rango de obesidad."
  console.log(mens)
 indice.innerHTML=mens
  
  } 

  }
}
// con esta función borramos todos los campos
function borrar(){
    txtpeso.value=""
    txtaltura.value=""
    salida.innerHTML=""
    indice.innerHTML=""
    text.innerHTML=""
}
