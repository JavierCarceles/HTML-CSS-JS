//FUNCION CLASICA - HOISTING
function saludar(nombre){
    return 'Hola' + nombre;
}

console.log(saludar('David'));

//FUNCION ANONIMA - NO HOISING
let saludo = function(nombre){
    return 'Saludos ' + nombre;
}

console.log(saludo('David'));

//FUNCIONES FLECHA () => {}
//1. SE NECESITA DE UNA VARIABLE PARA DECLARARLAS

//SI LA FUNCION SOLO TIENE 1 PARAMETRO, SE PUEDEN OMITIR TANTO LOS () COMO LOS {}
//let salu2 = nombre => 'Saludos ' + nombre;
let salu2 = (nombre) => {'Saludos ' + nombre};

let suma = (a,b) => a + b;

//Como el objeto se tiene que definir entre {}, para que no se confunda se tiene que meter dentro de ()
let obj = () => ({nombre: 'Bob', edad: 20});