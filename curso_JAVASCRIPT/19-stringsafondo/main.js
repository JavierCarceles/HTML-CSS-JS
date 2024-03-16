let nombre1 = "Juan";
let nombre2 = "Javi";
let nombre3 = "Jaime";

let dec = "Mi leng fav es JS"
let dec2 = 'Mi leng fav es "JS"'
let compras = `Lista de la compra: 
* Aceite
*Arroz
*Carne
*Fruta`;

console.log(compras);

let compras2 = `Lista de la compra:\n* Aceite\n* Arroz\n* Carne\n* Fruta`;

let edad = 15;
console.log(`${nombre1} tiene ${edad} años`);
console.log(nombre1 + " tiene " + edad + " años");

let saludo = "Hola Mundo!";
console.log(saludo.length);

console.log(saludo[2]);

//No se puede cambiar 1 letra del string, tienes que reescribirlo entero cambiando la letra que quieras
saludo[0] = 'h'; //Esto no funciona!!!!
saludo = "hola Mundo!"//ESTO SI, HE CAMBIADO LA H MAYUSCULA A h minuscula

//Para cambiar entre mayu y minus, toUppperCase toLowerCase como java normal
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

//subcadena -> indexOf (ES CASE SENSITIVE, HTML y html no lo encontrara como el mismo texto!!!!!)
let frase = 'HTML es un lenguaje de marcado y JS es uno de programación';
console.log(frase.indexOf('HTML'));

console.log(frase.indexOf('es'));
//El segundo parametro de indexOf es para decir a partir de que indice se empieza a buscar el texto deseado
console.log(frase.indexOf('es', 6));