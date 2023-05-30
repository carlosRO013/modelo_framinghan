function diagnostico(){

var colesterol = coles
var PAS = pas
var PAD = pad
var respuesta = diabetes
var respuestat = tabaco


if(colesterol > 160){
 
var mensaje = "su colesterol ldl, esta por encima de " +" "+colesterol+". "+"puede aumentar la probabilidad de padecer un accidente cerebrovascular y otros problemas. <br/> por favor consultar a su médico de confianza"

return mensaje

}

if(respuesta == "si" ){
 
 var mensaje = "sus niveles de colesterol son de"+" "+colesterol+"ldl."+" y sus nivele de presión alterial "+" "+PAS+"/"+PAD+" "+" estos datos acompañados con diabetes"+" "+"puede terner probabilidades de presentar insuficiencia cardiaca.<br/> por favor consultar a su médico de confianza"
 
 return mensaje
}

if(PAS >= 180 && PAD >= 120){
  
var mensaje = "sus niveles de presión alterial son muy altos"+" "+PAS+"/"+PAD+" "+"La presión arterial alta no controlada puede ocasionar Ataque cardíaco o accidente cerebrovascular.<br/> por favor consultar a su médico de confianza."

return mensaje
  
}

if(respuestat == "si"){
 
 var mensaje = "sumando todos los datos y por el echo de que usted fuma tabaco, Las principales patologías cardiovasculares que podria presentar serian: angina de pecho, infarto de miocardio, muerte súbita e ictus.<br/> por favor consultar a su médico de confianza. "
 
return mensaje
}
}
 


function glito(){

var trigliceridos = tri


/*
var trigliceridos = document.getElementById("tri").value
*/
if(trigliceridos <= 150 ){
   var promedio = -0.65945
   return promedio
 }
 
 if(trigliceridos > 150 && trigliceridos <= 199){
   var promedio  = 0.17692
   return promedio 
 }
 
 if(trigliceridos >= 200 && trigliceridos <= 499 ){
   
   var promedio = 0.51539
   return promedio
 }
 
 if(trigliceridos >= 500){
   
   var promedio = 0.65713
   return promedio
 }

}

function masa(){
  
var indice = imc
/*
var imc = document.getElementById("imc").value
*/

if(indice >= 18.5 && indice <= 24.9){
  
  var promedio = 0
  return pormedio

}

if(indice >= 25 && indice <= 29.9){
  
  var promedio = 0.125
  return promedio 
}

if(indice >= 30 && indice <= 34.9){
  
  var promedio = 0.215
  return promedio 
}

if(indice >= 35 && indice <= 39.9){
  
  var promedio = 0.315
  return promedio 
}

if(indice >= 40 ){
  
  var promedio = 0.415
  return promedio 
}

}

function G(){

var genero = sexo

/*
var genero =  document.getElementById("sexo").value
*/


//  var genero = "mujer"
  
  if(genero == "mujer" || genero == "femenino"){
   
    var promedio = 9.92545
    return promedio

  }
   if(genero == "hombre" || genero == "masculino"){
  
    var promedio = 3.0975
    return promedio
}
}

function S(){

var genero = sexo
/*
var genero =  document.getElementById("sexo").value
*/

  //var genero = "mujer"
  
  if(genero == "mujer" || genero == "femenino"){
   
    var promedio = 0.96246
    return promedio

  }
   if(genero == "hombre" || genero == "masculino"){
  
    var promedio = 0.90015
    return promedio
}

}

function madures(){
 
var age = edad
var genero = sexo 



 
if(age <30 && genero == "hombre" || genero == "masculino"){
  var puntos = 0
  return puntos
}

if(age <30 && genero == "mujer" || genero == "femenino"){
  var puntos = 0
  return puntos
}

 
if(age >= 30 && edad <= 34 && genero == "hombre" || genero == "masculino" ){
  var puntos = -1
  return puntos
  
}
if(age >= 30 && age <= 34 && genero == "mujer" || genero == "femenino"){
  var puntos = -9
  return puntos
  
}

if(age >= 35 && age <= 39 && genero == "hombre" || genero == "masculino" ){
  var puntos = 0
  return puntos
  
}
if(age >= 35 && age <= 39 && genero == "mujer" || genero == "femenino" ){
  var puntos = -4
  return puntos
  
}

if(age >= 40 && age <= 44 && genero == "hombre" || genero == "masculino" ){
  var puntos = 1
  return puntos
  
}
if(age >= 40 && age <= 44 && genero == "mujer" || genero == "femenino"){
  var puntos = 0
  return puntos
  
}

if(age >= 45 && age <= 49 && genero == "hombre" || genero == "masculino" ){
  var puntos = 2
  return puntos
  
}
if(age >= 45 && age <= 49 && genero == "mujer" || genero == "femenino" ){
  var puntos = 3
  return puntos
  
}

if(age >= 50 && age <= 54 && genero == "hombre" || genero == "masculino" ){
  var puntos = 3
  return puntos
  
}
if(age >= 50 && age <= 54 && genero == "mujer" || genero == "femenino"){
  var puntos = 6
  return puntos
  
}

if(age >= 55 && age <= 59 && genero == "hombre" || genero == "masculino" ){
  var puntos = 4
  return puntos
  
}
if(age >= 55 && age <= 59 && genero == "mujer" || genero == "femenino" ){
  var puntos = 7
  return puntos
  
}

if(age >= 60 && age <= 64 && genero == "hombre" || genero == "masculino" ){
  var puntos = 5
  return puntos
  
}
if(age >= 60 && age <= 64 && genero == "mujer" || genero == "femenino" ){
  var puntos = 8
  return puntos
  
}

if(age >= 65 && age <= 69 && genero == "hombre" || genero == "masculino" ){
  var puntos = 6
  return puntos
  
}
if(age >= 65 && age <= 69 && genero == "mujer" || genero == "femenino" ){
  var puntos = 8
  return puntos
  
}

if(age >= 70 && age <= 74 && genero == "hombre" || genero == "masculino" ){
  var puntos = 7
  return puntos
  
}
if(age >= 70 && age <= 74 && genero == "mujer" || genero == "femenino" ){
  var puntos = 8
  return puntos
  
}

}

function bc(){

var valor = coles 
var genero = sexo

/*
var colesterol =  document.getElementById("colesterol").value
  var genero =  document.getElementById("sexo").value
*/
  
if(valor < 160 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = -0.65945;
  return porcentage
  
}if(valor < 160 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = -0.26138;
  return porcentage
}
  
if(valor >= 160 && valor < 199 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0
  return porcentage
}

if(valor >= 160 && valor < 199 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0
  return porcentage
}

if(valor >= 200 && valor < 239 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.17692
  return porcentage
}

if(valor >= 200 && valor < 239 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.20771
  return porcentage
}

if(valor >= 240 && valor < 279 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.50539
  return porcentage
}

if(valor >= 240 && valor <= 279 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.24385
  return porcentage
}

if(valor >= 280 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.65713
  return porcentage
}

if(valor >= 280 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.53513
  return porcentage
}
  
}

function bh(){

var HDL = hdl
var genero = sexo

/*
var HDL =  document.getElementById("HDLCOL").value
  var genero =  document.getElementById("sexo").value
*/
  

if(HDL < 35 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.49744;
  var puntos = 2
  
  return [porcentage,puntos]
  
}if(HDL < 35 && genero == "mujer" || genero == "femenino"){
  var porcentage = 0.84312;
  var puntos = 5
  
  return [porcentage,puntos]
}
  
if(HDL >= 35 && HDL < 44 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.24310
  var puntos = 1
  
  return [porcentage,puntos]
  
}

if(HDL >= 35 && HDL < 44 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.37796
  var puntos = 2
  
  return [porcentage,puntos]
}

if(HDL >= 45 && HDL < 49 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0
  var puntos = 0
  
  return [porcentage,puntos]
}

if(HDL >= 45 && HDL < 49 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.19785
  var puntos = 1
  
  return [porcentage,puntos]
}

if(HDL >= 50 && HDL < 59 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = -0.05107
  var puntos = 0
  
  return [porcentage,puntos]
}

if(HDL >= 50 && HDL < 59 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0
  var puntos = 0
  
  return [porcentage,puntos]
}

if(HDL >= 60 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = -0.48660
  var puntos = -2
  
  return [porcentage,puntos]
}

if(HDL >= 60 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = -0.42951
  var puntos = -3
  
  return [porcentage,puntos]
}

  
}


function  bt(){
 
var PAS = pas
var PAD = pad
var genero = sexo

/*
var PAS =  document.getElementById("PAS").value
var PAD =  document.getElementById("PAD").value
var genero =  document.getElementById("sexo").value
*/

  if(PAS <= 120 && PAD <= 80 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = -0.00226;
  var puntos = 0
  return [porcentage,puntos]
  
}if(PAS <= 120  && PAD <= 80  && genero == "mujer" || genero == "femenino"){
  var porcentage = -0.53363;
  var puntos = -3
  return [porcentage, puntos]
}
  
if(PAS <= 130 && PAD <= 85 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0
  var puntos = 0
  return [porcentage,puntos]
}

if(PAS <= 130 && PAD <= 85 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0
  var puntos = 0
  return [porcentage, puntos]
}

if(PAS <= 140 && PAD <= 90 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.28320
   var puntos = 1
   return [porcentage, puntos]
}

if(PAS <= 140 && PAD <= 90 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = -0.06773 
  var puntos = 0
  return [porcentage, puntos]
}


if(PAS < 160 && PAD < 100 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.52168
  var puntos = 2
  return [porcentage, puntos]
}

if(PAS < 160 && PAD <100 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.26288
  var puntos = 2
  return [porcentage, puntos]
}

if(PAS >= 160  && PAD >= 100 && genero == "hombre" || genero == "masculino"){
  
  var porcentage = 0.61859
  var puntos = 3
  return [porcentage, puntos]
}

if(PAS >= 160   && PAD >= 100 && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.46573
  var puntos = 3
  return [porcentage, puntos]
}
}

function bD(){

var genero = sexo
var respuesta = diabetes

/*
var respuesta =  document.getElementById("diabetes").value
  var genero =  document.getElementById("sexo").value
*/
   
  if(respuesta == "si" && genero == "hombre"|| genero == "masculino"){
  
 var porcentage = 0.42839
 var puntos = 2
  
  return [porcentage,puntos]

  }
  if(respuesta == "no" && genero == "hombre"|| genero == "masculino"){

  var porcentage = 0
  var puntos = 0
  
  return [porcentage,puntos]

  }
  
  if(respuesta == "si" && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.59626
 var puntos = 4
  
  return [porcentage,puntos]

  }if(respuesta == "no" && genero == "mujer"|| genero == "femenino"){

  var porcentage = 0
 var puntos = 0
  
  return [porcentage,puntos]

  }
 
}

function bf(){


var respuesta = tabaco
var genero = sexo

/*
var respuesta =  document.getElementById("tabaco").value
  var genero =  document.getElementById("sexo").value
*/
  

  if(respuesta == "si" && genero == "hombre"|| genero == "masculino"){
  
 var porcentage = 0.52337
 var puntos = 2
  
  return [porcentage,puntos]

  }
  if(respuesta == "no" && genero == "hombre"|| genero == "masculino"){

  var porcentage = 0
 var puntos = 0
  
  return [porcentage,puntos]

  }
  
  if(respuesta == "si" && genero == "mujer" || genero == "femenino"){
  
  var porcentage = 0.29246
 var puntos = 2
  
  return [porcentage,puntos]

  }if(respuesta == "no" && genero == "mujer"|| genero == "femenino"){

  var porcentage = 0
 var puntos = 0
  
  return [porcentage,puntos]

  }

}


function punto(){
 
var puntos_frami = madures()+bh()[1]+bD()[1]+bf()[1]+bt()[1]

alert(puntos_frami)
if(puntos_frami <= 6 ){
  var mensaje = "bajo riesgo y con una puntuación de: "+puntos_frami+" "+"puntos."
  
  return mensaje
}

if(puntos_frami > 6 && puntos_frami <= 20 ){
  var mensaje = " riesgo intermedio y con una puntuación de: "+puntos_frami+" "+"puntos."
  
  return mensaje

}

if(puntos_frami > 20 ){
  var mensaje = "alto riesgo y con una puntuación de: "+puntos_frami+" "+"puntos."
  
  return mensaje
  
}

if(puntos_frami > 20 ){
  var mensaje = "alto riesgo y con una puntuación de: "+puntos_frami+" "+"puntos."
  
  return mensaje
  
}

}




function fina(){

var NOM = nombre
var madures = edad
var genero = sexo

if(genero == "hombre" || genero == "masculino"){

var bE1 = 0.04826 * edad
var LH = bE1 + bc() + bh()[0] + bt()[0] +bD()[0] + bf()[0] +glito() + masa()

var L = LH.toFixed(5)
var b = L - G()
var expo = Math.exp(b);
var exponente = expo.toFixed(5)
var R =  1 - Math.pow(S(),exponente)

var prediccion = R.toFixed(2)* 100

var probabilidad = " su probabilidad de evento cardiovascular a los 10 años según este modelo de framingham es del casi :"+" "+prediccion+"%"


return probabilidad

}

if(genero == "mujer"){
   
    var bE1 = 0.33766 * edad
    var bE1r = bE1.toFixed(5)
    var bE2 = 0.00268 * Math.pow(edad,2)
    var bE2r = bE2.toFixed(5)

    var LM = bE1  - bE2r  + bc() + bh()[0] +  bt()[0] + bD()[0] + bf()[0] + glito() + masa()
    var L = LM.toFixed(5)
    
    var b = L - G()
    var B = b.toFixed(5)

    var expo = Math.exp(B);
    var exponente = expo.toFixed(5)

    var R =  1 - Math.pow(S(),exponente)
    
    var prediccion = R.toFixed(2)* 100
    
    var probabilidad = " su probabilidad de evento cardiovascular a los 10 años según este modelo de framingham es del casi :"+" "+prediccion+"%"

 return probabilidad
  }

}

var der = fina() 
var flam = punto()
var posibles = diagnostico()

const DATOS = [
  { nombres: der, apellidos:flam , edad: posibles,}
];

// Obteniendo el cuerpo de la tabla a donde añadiremos nuestros datos
let tableBody = document.getElementById('tbody');

// Recorriendo los datos de ejemplo
for (let i = 0; i < DATOS.length; i++) {
  // Creando los 'td' que almacenará cada parte de la información del usuario actual
  let name = `<td>${DATOS[i].nombres}</td>`;
  let lastName = `<td>${DATOS[i].apellidos}</td>`;
  let age = `<td>${DATOS[i].edad} años</td>`;
  
  tableBody.innerHTML += `<tr>${name + lastName + age}</tr>`;
}



