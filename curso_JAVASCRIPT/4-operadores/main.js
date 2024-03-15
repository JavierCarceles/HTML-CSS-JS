//********************OPERADORES ARITMETICOS********************
//Se añade la extension Quokka para mostrar los cambios de los ficheros js y como se verian en el log en tiempo real, sin 
//tener que abrir el navegador y f12 para visualizarlo
//console.log('CodingTube');
//console.log(5+3);

let operando1 = 3;
let operando2 = 2;
let resultado;

resultado = operando1 + operando2;
resultado = operando1 - operando2;
resultado = operando1 * operando2;
resultado = operando1 / operando2;

resultado = operando1 % operando2;

//** -> elevado a 
resultado = operando1 ** operando2;//3 elevado a 2

//++ -- -> SI LO PONES ANTES O DESPUES DE LA VARIABLE CAMBIA LA MANERA DE CALCULARLO!!!!!
resultado = ++operando1;//  1. operando1 + 1         ||   2. resultado = operando1 ||   operando1 = 4; resultado = 4
resultado = operando1++;//  1. resultado = operando1 ||   2. operando1 + 1         ||   operando1 = 4; resultado = 3

resultado = --operando1;//  1. operando1 - 1         ||   2. resultado = operando1 ||   operando1 = 2; resultado = 2
resultado = operando1--;//  1. resultado = operando1 ||   2. operando1 - 1         ||   operando1 = 2; resultado = 3


console.log(resultado);

//********************OPERADORES DE ASIGNACION********************
let res = 5;
res += 3;
res -= 3;
res *= 3;
res /= 3;
res %= 3;
res **= 3;
document.write(res);

//********************OPERADORES DE COMPARACIÓN********************
document.write(2>3);
document.write(2<3);
document.write(2>=3);
document.write(2<=3);
document.write(2 == '3'); //Compara sin tener en cuenta el tipo de dato, en este caso string y int
document.write(3 === 3); //Compara teniendo en cuenta el tipo de dato, en este caso int y int seria true, pero si fuese 3 === '3' seria false
document.write(3 != 3);
document.write(3 !== '3');

//********************OPERADORES LÓGICOS********************
let op1 = false;
let op2 = true;

console.log(op1 && op2);
console.log(op1 || op2);

//********************OPERADORES TERNARIOS********************
let resultado2 = (30 === '30') ? 'ES IGUAL':'NO ES IGUAL';
console.log(resultado2);