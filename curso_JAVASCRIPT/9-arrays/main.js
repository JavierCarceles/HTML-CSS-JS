let variable = 5;
let arreglo = [];
let cursos = ["HTML5", "CSS", "JS"];

console.log(cursos);
console.log(cursos[0]);
console.log(cursos[1]);
console.log(cursos[2]);

cursos[0] = 'PHP';
console.log(cursos[0]);

cursos[3] = 'PYTHON';
cursos[5] = 'SQL'; //Si creas informacion en una posicion mas alta del tamaño, los espacios se crean vacíos
                   //En este caso quedaria: ["PHP", "CSS", "JS","PYTHON",,"SQL"]

console.log(cursos.length);

//En un array puede haber cualquier tipo de dato, hasta funciones o objetos a la vez
let arr = ['java',12,true,function(){alert('Hello');},{nombre:'juan'}];

//PARA AÑADIR ELEMENTO AL INICIO: UNSHIFT
//PARA ELIMINAR ELEMENTO AL INICIO: SHIFT
//PARA AÑADIR ELEMENTO AL FINAL: PUSH
//PARA ELIMINAR ELEMENTO AL FINAL: POP
let numeros = ['uno','dos','tres'];
numeros.push('cuatro');
numeros.pop();
numeros.unshift('cero');
numeros.shift();

//matriz
let matriz = [[1,2,3],
              [4,5,6],
              [7,8,9]];

console.log(matriz[1][2]);//fila 1 columna 2 (SE EMPIEZA A CONTAR DE 0 RECUERDA, OSEA ES LA 3A COLUMNA Y SEGUNDA FILA)