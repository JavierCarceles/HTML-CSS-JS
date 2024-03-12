//JS es un lenguaje de programacion dinamicamente tipado, esto significa que las variables pueden cambiar
//de tipo solo cambiandole el valor de dentro
let variable = 2021;
variable = 2.21;
variable = "Hola";

//numero mas grande que se puede guardar en una variable let es de (2^53 -1), tanto en positivo como en negativo 
//+-(9000000000000000 algo así de grande)

//Si quieres un numero aun mas grande que 2^53 - 1 usas un n al final del numero
let variable1 = 12312312312312312323123123123123n;

let texto = "Hola que tal";
let texto1 = 'Hola que "tal"';

//para concatenar informacion en una variable con otra
let edad = 24;
let text = `Tienes ${edad} años`;

//booleanos
let check = true;

//arrays
let opciones = [1,2,3];
let opciones1 = ["1","2","3"];
let opciones2 = [true,false,true];

//Objetos
//En este caso le pones el nombre option1,2,3 a los valores 1,2,3, son como las variables del objeto, igual que en el ejemplo de abajo de user
let option = {
    option1: 1,
    option2: 2,
    option3: 3
};

let user = {
    name: "Jared",
    age: 26,
    membership: true
};