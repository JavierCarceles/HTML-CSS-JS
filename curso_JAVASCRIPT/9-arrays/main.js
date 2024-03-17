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

//SPLICE
let array = [5,2,4,3,1]
array.splice(1,3);//ESTE METODO ELIMINA LOS ELEMENTOS DE LA POSICION 1 HASTA LA 3 INCLUIDOS
array.splice(1,3, 0, 0);//CON MAS PARAMETROS AÑADES LOS ELEMENTOS EN LA POSICION QUE HAS ELIMINADOM
                        //ES DECIR, ELIMINA, 2,4,3 Y AÑADE 0,0. QUEDANDO 5,0,0,1

//SLICE
let array2 = [5,2,4,3,1]                        
let arrayNuevo = array2.slice(1,3); //ESTE DEVUELVE LOS ELEMENTOS DEL 1-3 SIN AÑADIR EL ULTIMO, SERÍA COMO [1,3)
                                    //POR LO QUE DEVUELVE EN arrayNuevo -> [2,4]
console.log(arrayNuevo);

//CONCAT -> UNE UN ARREGLO AL FINAL DE OTRO
let arr7 = [1,2,3];
let arr8 = ["Uno","dos","tres"];
let newArray = arr7.concat(arr8);

console.log(newArray);

//FIND
let arr10 = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Javi'
    },
    {
        id: 3,
        name: 'Juan'
    }
];
//CREAS LA VARIABLE itemBuscar que será cada objeto, y con itemBuscar.id == 3 preguntas si hay algun id que sea igual a 3,
//ESTO DEVUELVE EL OBJETO ENTERO DONDE SE ENCUENTRA LA VARIABLE SI LA ENCUENTRA,
//SI NO LO ENCUENTRA, resultado quedará con el valor undefined
let resultado = arr10.find(itemaBuscar => itemaBuscar.id == 3);
console.log(resultado);


//FINDINDEX => SE USA IGUAL QUE find, PERO DEVUELVE LA POSICION DEL OBJETO ENCONTRADO, PERO SI NO LO ENCUENTRA
//EL RESULTADO SERÁ -1, NO UNDEFINED
let resultado2 = arr10.findIndex(itemaBuscar => itemaBuscar.id == 3);
console.log(resultado2);


//FILTER => DEVUELVE LA LISTA DE OBJETOS QUE CUMPLAN LA CONDICION ESTABLECIDA
let resultado3 = arr10.filter(itemaBuscar => itemaBuscar.id <= 2);
console.log(resultado3);


//FOREACH => BUCLE NORMAL, EN ESTE CASO MIRA LOS ELEMENTOS DE UN ARRAY, Y LOS COPIA *10 EN OTRO ARRAY, AÑADIENDOLOS DE 1 EN 1
let array13 = [5,2,4,3,1];
let result13 = [];
array13.forEach(item => result13.push(item*10));
console.log(result13);


//MAP => IGUAL QUE EL FOREACH PERO PUEDES IGUALARLO A UNA VARIABLE DIRECTAMENTE
let array14 = [5,2,4,3,1];
let res14 = array14.map(item=>item*10);
console.log(res14);


//SORT => ORDENA PERO NO SEGUN EL VALOR DEL NUMERO SINO EL NUMERO INICIAL, OSEA 1,100,1000,2,200,2000... por ejemplo
let array15 = [5,2,10,3,1];
array15.sort();
console.log(array15);
//SI QUEREMOS ORDENAR DE FORMA ASCENDENTE HAY QUE AÑADIR UNA FUNCION DENTRO DLE SORT
array15.sort((a,b)=>a-b);
console.log(array15);


//REVERSE => LE DA LA VUELTA A LOS ELEMENTOS DEL ARRAY
let array16 = [5,2,10,3,1];
array16.reverse();
console.log(array16);


//SPLIT => SEPARA CADA ELEMENTO SEGÚN LO QUE TU LE DIGAS, si no le dices nada separa cada elemento en una posicion de un array,
//Y SI LE DICES ALGO USA ESO PARA SEPARAR, NO INCLUYENDOLO EN EL NUEVO ARRAY, SI SEPARAS POR a, lo deja en '','m','necer'
let string = 'amanecer';
let res17 = string.split('');
console.log(res17);
let res18 = string.split('a');
console.log(res18);


//JOIN => UNE LOS ELEMENTOS DE UN ARRAY SEPARANDOLOS POR LO QUE LE DIGAS EN EL JOIN, EN UN NUEVO STRING
let arr18 = ["Uno","dos","tres"];
let stringNuevo = arr18.join('-');
console.log(stringNuevo);


//REDUCE => REDUCE LO QUE TENEMOS DENTRO DEL ARREGLO A 1 SOLO VALOR, TIENE 2 PARAMETROS, 1o la funcion, 2o el valor del acumulador
//EN ESTE CASO LA FUNCION USA EL ACUMULADOR QUE EMPIEZA EN 0, Y EN CADA ITERACION GUARDA EN SUM EL VALOR DEL INDEX, PASANDO
//POR TODOS LOS ELEMENTOS DEL ARRAY Y GUARDANDO EN SUM LA SUMA TOTAL DE ELLOS
let arr19 = [5,2,4,3,1];
let res19 = arr19.reduce((sum,index)=>sum+index, 0);
console.log(res19);