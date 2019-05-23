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
for (prop in persona) {
    //console.log(prop);
    //tambien se puede console.log(persona[prop])
    //esto de muestras el contenido dentro de las ´ropiedades horacio y darelis
    console.log(persona[prop])  
    }
