
function validar(){

var trigliceridos = document.getElementById("tri").value
var nombre = document.getElementById("nombre").value

var edad =  document.getElementById("edad").value
var genero =  document.getElementById("sexo").value.toLowerCase()

var colesterol = document.getElementById("colesterol").value
var HDL =  document.getElementById("HDLCOL").value
var PAS =  document.getElementById("PAS").value
var PAD =  document.getElementById("PAD").value

var imc = document.getElementById("imc").value
var respuesta =  document.getElementById("diabetes").value
var respuestat =  document.getElementById("tabaco").value

if(trigliceridos == "" || nombre == "" || edad == "" || genero == "" || colesterol == "" || HDL == "" || PAS == "" || PAD == "" || imc == "" || respuesta == "" || respuestat == "" ){
  
  resultado.innerHTML = "resultados:  <br/><br/> por favor rellene todos los campos "
 
}else{
  prediccion()
}                                    
}                                                                                                           
function  prediccion(){

var nombre = document.getElementById("nombre").value
var edad =  document.getElementById("edad").value
var genero =  document.getElementById("sexo").value.toLowerCase()

  if(genero == "hombre"){
   
    var bE1 = 0.04826 * edad
    var LH = bE1 + bc() + bh()[0] + bt()[0] +bD()[0] + bf()[0] + tri() + imc()
    var L = LH.toFixed(5)
    var b = L - G()
    var expo = Math.exp(b);
    var exponente = expo.toFixed(5)

    var R =  1 - Math.pow(S(),exponente)
    var prediccion = R.toFixed(2)* 100
    var punto = puntos()


   let mensaje = "hola "+nombre
    var probabilidad = " su probabilidad de evento cardiovascular a los 10 años según este modelo de framingham es del casi :"+" "+prediccion+"%"
    
    

let result = "resultados"
var coles = diagnostico()

var proba = "probabilidad de riesgo: "


resultado.innerHTML = "resultados: <br/><br/>  hola "+nombre+"<br><br>"+proba+"<br><br> su probabilidad de evento cardiovascular a los 10 años según este modelo de framingham es del casi :"+" "+prediccion+"%"+"<br><br>puntaje de riesgo segun framinghan:<br> <br> puntaje framinghan de "+punto+"<br/>"+" "+"<br>posibles complicaciones: <br><br>"+coles
 

 
  }if(genero == "mujer"){
   
    var bE1 = 0.33766 * edad
    var bE1r = bE1.toFixed(5)
    var bE2 = 0.00268 * Math.pow(edad,2)
    var bE2r = bE2.toFixed(5)

    var LM = bE1  - bE2r  + bc() + bh()[0] +  bt()[0] + bD()[0] + bf()[0] + tri() + imc()
    var L = LM.toFixed(5)
    
    var b = L - G()
    var B = b.toFixed(5)

    var expo = Math.exp(B);
    var exponente = expo.toFixed(5)

    var R =  1 - Math.pow(S(),exponente)
    
    var prediccion = R.toFixed(2)* 100
    var punto = puntos()

    let mensaje = "hola "+nombre
    var probabilidad = " su probabilidad de evento cardiovascular a los 10 años según este modelo de framingham es del casi :"+" "+prediccion+"%"

let result = "resultados"

var coles = diagnostico()

var proba = "probabilidad de riesgo: "


resultado.innerHTML = "resultados: <br/><br/>  hola "+nombre+"<br><br>"+proba+"<br><br> su probabilidad de evento cardiovascular a los 10 años según este modelo de framingham es del casi :"+" "+prediccion+"%"+"<br><br>puntaje de riesgo segun framinghan:<br> <br> puntaje framinghan de "+punto+"<br/>"+" "+"<br>posibles complicaciones: <br><br>"+coles
 
 
 
  }
}

function diagnostico(){
  
var colesterol = document.getElementById("colesterol").value

var PAS =  document.getElementById("PAS").value

var PAD =  document.getElementById("PAD").value

var respuesta =  document.getElementById("diabetes").value

var respuestat =  document.getElementById("tabaco").value

if(colesterol > 240){
 
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

 
var men = "sin complicaciones"
return men   


}
 
 //180/120 

function tri(){
 
 var trigliceridos = document.getElementById("tri").value
 
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

else{
    return 0.25233
}

}

function imc(){
  
var imc = document.getElementById("imc").value

if(imc >= 18.5 && imc <= 24.9){
  
  var promedio = 0
  return pormedio

}

if(imc >= 25 && imc <= 29.9){
  
  var promedio = 0.125
  return promedio 
}

if(imc >= 30 && imc <= 34.9){
  
  var promedio = 0.215
  return promedio 
}

if(imc >= 35 && imc <= 39.9){
  
  var promedio = 0.315
  return promedio 
}

if(imc >= 40 ){
  
  var promedio = 0.415
  return promedio 
}

else{
    return 0.250
}
}

function G(){

var genero =  document.getElementById("sexo").value.toLowerCase()

//  var genero = "mujer"
  
  if(genero == "mujer"){
   
    var promedio = 9.92545
    return promedio

  }
   if(genero == "hombre"){
  
    var promedio = 3.0975
    return promedio
}
}

function S(){
var genero =  document.getElementById("sexo").value.toLowerCase()

  //var genero = "mujer"
  
  if(genero == "mujer"){
   
    var promedio = 0.96246
    return promedio

  }
   if(genero == "hombre"){
  
    var promedio = 0.90015
    return promedio
}

}

function edad(){
  
  var edad =  document.getElementById("edad").value
  var genero =  document.getElementById("sexo").value.toLowerCase()

if(edad <30 && genero == "hombre"){
  var puntos = 0
  return puntos
}

if(edad <30 && genero == "mujer"){
  var puntos = 0
  return puntos
}

 
if(edad >= 30 && edad <= 34 && genero == "hombre" ){
  var puntos = -1
  return puntos
  
}
if(edad >= 30 && edad <= 34 && genero == "mujer" ){
  var puntos = -9
  return puntos
  
}

if(edad >= 35 && edad <= 39 && genero == "hombre" ){
  var puntos = 0
  return puntos
  
}
if(edad >= 35 && edad <= 39 && genero == "mujer" ){
  var puntos = -4
  return puntos
  
}

if(edad >= 40 && edad <= 44 && genero == "hombre" ){
  var puntos = 1
  return puntos
  
}
if(edad >= 40 && edad <= 44 && genero == "mujer" ){
  var puntos = 0
  return puntos
  
}

if(edad >= 45 && edad <= 49 && genero == "hombre" ){
  var puntos = 2
  return puntos
  
}
if(edad >= 45 && edad <= 49 && genero == "mujer" ){
  var puntos = 3
  return puntos
  
}

if(edad >= 50 && edad <= 54 && genero == "hombre" ){
  var puntos = 3
  return puntos
  
}
if(edad >= 50 && edad <= 54 && genero == "mujer" ){
  var puntos = 6
  return puntos
  
}

if(edad >= 55 && edad <= 59 && genero == "hombre" ){
  var puntos = 4
  return puntos
  
}
if(edad >= 55 && edad <= 59 && genero == "mujer" ){
  var puntos = 7
  return puntos
  
}

if(edad >= 60 && edad <= 64 && genero == "hombre" ){
  var puntos = 5
  return puntos
  
}
if(edad >= 60 && edad <= 64 && genero == "mujer" ){
  var puntos = 8
  return puntos
  
}

if(edad >= 65 && edad <= 69 && genero == "hombre" ){
  var puntos = 6
  return puntos
  
}
if(edad >= 65 && edad <= 69 && genero == "mujer" ){
  var puntos = 8
  return puntos
  
}

if(edad >= 70 && edad <= 74 && genero == "hombre" ){
  var puntos = 7
  return puntos
  
}
if(edad >= 70 && edad <= 74 && genero == "mujer" ){
  var puntos = 8
  return puntos
  
}
if(edad > 74 && genero == "hombre" ){
  var puntos = 8
  return puntos
  
}

if(edad >74 && genero == "mujer" ){
  var puntos = 9
  return puntos
  
}
}

function bc(){
  
  var colesterol =  document.getElementById("colesterol").value
  var genero =  document.getElementById("sexo").value.toLowerCase()


if(colesterol < 160 && genero == "hombre"){
  
  var porcentage = -0.65945;
  return porcentage
  
}if(colesterol < 160 && genero == "mujer"){
  
  var porcentage = -0.26138;
  return porcentage
}
  
if(colesterol >= 160 && colesterol < 199 && genero == "hombre"){
  
  var porcentage = 0
  return porcentage
}

if(colesterol >= 160 && colesterol < 199 && genero == "mujer"){
  
  var porcentage = 0
  return porcentage
}

if(colesterol >= 200 && colesterol < 239 && genero == "hombre"){
  
  var porcentage = 0.17692
  return porcentage
}

if(colesterol >= 200 && colesterol < 239 && genero == "mujer"){
  
  var porcentage = 0.20771
  return porcentage
}

if(colesterol >= 240 && colesterol < 279 && genero == "hombre"){
  
  var porcentage = 0.50539
  return porcentage
}

if(colesterol >= 240 && colesterol <= 279 && genero == "mujer"){
  
  var porcentage = 0.24385
  return porcentage
}

if(colesterol >= 280 && genero == "hombre"){
  
  var porcentage = 0.65713
  return porcentage
}

if(colesterol >= 280 && genero == "mujer"){
  
  var porcentage = 0.53513
  return porcentage
}
  
}

function bh(){

  var HDL =  document.getElementById("HDLCOL").value
  var genero =  document.getElementById("sexo").value.toLowerCase()

if(HDL < 35 && genero == "hombre"){
  
  var porcentage = 0.49744;
  var puntos = 2
  
  return [porcentage,puntos]
  
}if(HDL < 35 && genero == "mujer"){
  var porcentage = 0.84312;
  var puntos = 5
  
  return [porcentage,puntos]
}
  
if(HDL >= 35 && HDL < 44 && genero == "hombre"){
  
  var porcentage = 0.24310
  var puntos = 1
  
  return [porcentage,puntos]
  
}

if(HDL >= 35 && HDL < 44 && genero == "mujer"){
  
  var porcentage = 0.37796
  var puntos = 2
  
  return [porcentage,puntos]
}

if(HDL >= 45 && HDL < 49 && genero == "hombre"){
  
  var porcentage = 0
  var puntos = 0
  
  return [porcentage,puntos]
}

if(HDL >= 45 && HDL < 49 && genero == "mujer"){
  
  var porcentage = 0.19785
  var puntos = 1
  
  return [porcentage,puntos]
}

if(HDL >= 50 && HDL < 59 && genero == "hombre"){
  
  var porcentage = -0.05107
  var puntos = 0
  
  return [porcentage,puntos]
}

if(HDL >= 50 && HDL < 59 && genero == "mujer"){
  
  var porcentage = 0
  var puntos = 0
  
  return [porcentage,puntos]
}

if(HDL >= 60 && genero == "hombre"){
  
  var porcentage = -0.48660
  var puntos = -2
  
  return [porcentage,puntos]
}

if(HDL >= 60 && genero == "mujer"){
  
  var porcentage = -0.42951
  var puntos = -3
  
  return [porcentage,puntos]
}

  
}

function  bt(){
 
var PAS =  document.getElementById("PAS").value
var PAD =  document.getElementById("PAD").value
var genero =  document.getElementById("sexo").value.toLowerCase()

  
  if(PAS <= 120 && PAD <= 80 && genero == "hombre"){
  
  var porcentage = -0.00226;
  var puntos = 0
  return [porcentage,puntos]
  
}if(PAS <= 120  && PAD <= 80  && genero == "mujer"){
  var porcentage = -0.53363;
  var puntos = -3
  return [porcentage, puntos]
}
  
if(PAS <= 130 && PAD <= 85 && genero == "hombre"){
  
  var porcentage = 0
  var puntos = 0
  return [porcentage,puntos]
}

if(PAS <= 130 && PAD <= 85 && genero == "mujer"){
  
  var porcentage = 0
  var puntos = 0
  return [porcentage, puntos]
}

if(PAS <= 140 && PAD <= 90 && genero == "hombre"){
  
  var porcentage = 0.28320
   var puntos = 1
   return [porcentage, puntos]
}

if(PAS <= 140 && PAD <= 90 && genero == "mujer"){
  
  var porcentage = -0.06773 
  var puntos = 0
  return [porcentage, puntos]
}


if(PAS < 160 && PAD < 100 && genero == "hombre"){
  
  var porcentage = 0.52168
  var puntos = 2
  return [porcentage, puntos]
}

if(PAS < 160 && PAD <100 && genero == "mujer"){
  
  var porcentage = 0.26288
  var puntos = 2
  return [porcentage, puntos]
}

if(PAS >= 160  && PAD >= 100 && genero == "hombre"){
  
  var porcentage = 0.61859
  var puntos = 3
  return [porcentage, puntos]
}

if(PAS >= 160   && PAD >= 100 && genero == "mujer"){
  
  var porcentage = 0.46573
  var puntos = 3
  return [porcentage, puntos]
}
}

function bD(){
  var respuesta =  document.getElementById("diabetes").value
  var genero =  document.getElementById("sexo").value
  
  if(respuesta == "si" && genero == "hombre"){
  
 var porcentage = 0.42839
 var puntos = 2
  
  return [porcentage,puntos]

  }
  if(respuesta == "no" && genero == "hombre"){

  var porcentage = 0
  var puntos = 0
  
  return [porcentage,puntos]

  }
  
  if(respuesta == "si" && genero == "mujer" ){
  
  var porcentage = 0.59626
 var puntos = 4
  
  return [porcentage,puntos]

  }if(respuesta == "no" && genero == "mujer"){

  var porcentage = 0
 var puntos = 0
  
  return [porcentage,puntos]

  }
 
}

function bf(){
  var respuesta =  document.getElementById("tabaco").value
  var genero =  document.getElementById("sexo").value.toLowerCase()

  if(respuesta == "si" && genero == "hombre"){
  
 var porcentage = 0.52337
 var puntos = 2
  
  return [porcentage,puntos]

  }
  if(respuesta == "no" && genero == "hombre"){

  var porcentage = 0
 var puntos = 0
  
  return [porcentage,puntos]

  }
  
  if(respuesta == "si" && genero == "mujer" ){
  
  var porcentage = 0.29246
 var puntos = 2
  
  return [porcentage,puntos]

  }if(respuesta == "no" && genero == "mujer"){

  var porcentage = 0
 var puntos = 0
  
  return [porcentage,puntos]

  }

}


function puntos(){
 
var puntos_frami = edad()+bh()[1]+bD()[1]+bf()[1]+bt()[1]

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

}
function limpiar(){

resultado.innerHTML = " "

}

