console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);





//variables en js
let edad =30
let edad2 =35
var nombre = "juan"
let numerogrande = 7554542545476588
let nombre2 = "asjkkjhafgskjfjksfkjasd"
const rut = 155273238484 //no se puede modificar



//tipos de datos
let texto = "esto es un texto"
let numero = 1233223
let esEstudiante = false
let nulo = null
let indefinido;
let numerogrande2 = 7554542545476588;




//operadores
let suma= 10 + 5

//se puede hacer con etiqueta var

var resta= 10 - 5 

var multiplicación = 10 * 5
var división = 10 / 5

var módulo = 10 % 5

//etiquetas de control
//if else

let nota = 20
if (nota >= 90) {
    console.log ("muy buena nota")
} 
else if (nota >=50) {
    console.log ("nota normal")
} 

else {
    console.log ("reprobado")
}

//bucles

for (let indice = 0; indice < 10; indice++ ) {
    console.log("indice =", indice )
    //alert("dando vueltas")

}

//manipulación del DOM

const div_test = document.getElementById("div_test")
div_test.innerHTML = "<p>hola desde js</>"

