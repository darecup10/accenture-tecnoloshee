let nombre= "Dare"
let apellido= "Picon"
let nombre_completo = nombre + " " + apellido

let numeros= [1,7,5,10,30, "Dare", true]
numeros.push ("Hello there")
numeros.push (12)
console.log (numeros)
//console.log (numeros[5]) muestra la variable que este en el puesto 5
//console.log (numeros) muestra todo el contenido de la variable
//console.log (numeros.lenght) muestra el tamaño de la dimension
//console.table(numeros) muestra el contenido de la variable con su respectiva posicion

let persona= {
    Darelis: {
        nombre: "Darelis",
        edad: 23,
        vive: false,
    },
    Horacio: {
        nombre: "Horacio",
        edad: 29,
        vive: "true",
    }

}
console.table (persona)

//persona.trabaja = false
//persona.tieneperrito= 1

//Estructuras de control
//sirve para iterar sobre matrices indexadas secuenciales(o sea objetos)
//for (let i=0; i<numeros.length; i++) {
//    console.log(numeros[i])
    
//}


//
//for (prop in persona) {
    //console.log(prop);
    //tambien se puede console.log(persona[prop])
    //esto de muestras el contenido dentro de las ´ropiedades horacio y darelis
   // console.log(persona[prop])  
    //} 
    

/*let dos = document.getElementById("item2")
let items = document.getElementsByClassName("item")
let lis = document.getElementsByTagName("li")
//lis.innertext = "test"
//no funciona porque no estas trayendo un elemento esta strayendo muchos dentro del lis

//dir lo hace ver como objeto
*/
let dos = document.querySelector("#item2")
let items = document.querySelectorAll(".item")
let lis = document.querySelectorAll("li")
console.dir(lis)

//CREAR NODOS
let p = document.createElement("p")
p.innerText = "obligame perro"
p.id = "nuevo"
p.className = "item"

//AGREGAR NODOS AL DOM
//Nodo.appendChild(NodoNuevo) = inserta el nodo nuevo como ultimo hijo de nodo
//Nodo.insertBefore(NodoNuevo,Nodoref) = inserta el nodo nuevo antes del nodo referencia




/* 1 Agregar un elemento <li> y ponerle texto
2 Meterlo como primer item del <ul>

extra
crear un elemento <ul> nuevo y vacio 
hacer un bucle de 5 interaciones
poner iteracion de ciclo se tiene que crear un <li> nuevo
agregar todos los <li> al <ul> del punto 1 
agregar el <ul> del ´punto 1 al DOM
*/

let li = document.createElement("li")
li.innerText = "Caption"
li.id = "lista"
li.className = "item"

let body = document.querySelector("body")
body.appendChild(p)
let ul = document.querySelector("ul")
ul.insertBefore(li, item1)


console.log(li)

let nuevo_ul = document.createElement("ul")
for(let i=0; i<5 ; i++){
    let primer_li = document.createElement("li")
    nuevo_ul.appendChild(primer_li)
}

console.log(primer_li)

   