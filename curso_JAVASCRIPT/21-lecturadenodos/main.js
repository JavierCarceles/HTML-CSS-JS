//Lectura de nodos (nodo = etiqueta)

//POR ID en el ultimo video se hace con getElementByID, ahora lo haremos con querySelector y los mismos selectores que se usan
//en CSS, si es una clase pondré un . || si es una etiqueta pondre el nombre directamente || si es un id pondré un #
//QUERYSELECTOR DEVUELVE EL PRIMER ELEMENTO DEL TIPO QUE TU LE DIGAS
let elementoPorId = document.querySelector('#parrafo1');
elementoPorId.innerHTML = 'Suscribete';


//Si en este caso usara querySelector solo me devolvería el primer elemento de la clase parrafos,
//asi que usamos querySelectorAll para que nos devuelva una LISTA DE NODOS!!!! QUE NO ES LO MISMO QUE UN ARRAY
//PORQUE NO TIENE LOS MISMOS METODOS
let elementosPorClase = document.querySelectorAll('.parrafos');
console.log(elementosPorClase);//Ahora en la consola del navegador sale nodelist(3)

//PARA TRANSFORMAR UN NODELIST EN ARRAY USAREMOS UN OPERADOR DE PROPAGACIÓN, QUE VIENE A SER PONERLO ENTRE [] Y PONERLE 3 PUNTOS
//DELANTE COMO SE VE AQUI ABAJO
const arreglo = [...elementosPorClase];
console.log(arreglo); //Ahora en la consola del navegador sale (3)
//ES IMPORTANTE NO TRABAJR CON NODELIST PORQUE LOS ARRAYS TIENEN MAS METODOS UTILES PARA TRABAJAR CON ELLOS
arreglo[1].innerHTML = 'a codingtube';


//POR ETIQUETA
let elementosPorEtiquetas = document.querySelectorAll('p');
elementosPorEtiquetas[2].innerHTML = 'ahora!';
