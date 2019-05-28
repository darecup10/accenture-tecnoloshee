let btn = document.querySelector("button")

// Evento: callback
//Nodo.addEventListListener(evento que queremos, funcion)
//btn.addEventListener("click",hacerclick)

//* window.hacerlick = function (){} es lo mismo que decir
//*var hacerclick = function (){}

//function hacerclick (){

    //console.log("")

    /*Reemplazar el código de la funcion hacer Click por:
    1) crear un boton por cada click que se haga
    2) Cada boton nuevo se tiene que ver en el DOM
    3) Cada boton nuevo tiene que tener un callback en su propio
    evento click tambien
    4) Todos los botones en la pantalla tienen que tener como texto
    "Boton N", donde N es un numero arrancando de 1 el cual se va
    aumentando de a una unidad 
    */
//}

//para llevar la cuenta secuencial de los botones
let contador = 1

//se crea la funcion
 function button_nuevo(){
    //paso 1 crear boton
    let button_nuevo = document.createElement("button") 
    //paso 2 cada boton nuevo se tiene que ver en el dom
    let body = document.querySelector("body")
    body.appendChild(button_nuevo)
    //paso 4 Crear los botones
    button_nuevo.innerText = "Boton" + contador
    contador = contador + 1
    button_nuevo.addEventListener("click",UnaMismaFuncionParaTodosLosBotones)
 }

 btn.addEventListener("click", button_nuevo)

 //paso3
 function UnaMismaFuncionParaTodosLosBotones (){
     console.log("Click de algunos de los botones!")
 }

