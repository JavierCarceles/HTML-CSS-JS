/*
EL DOM ES UN ARBOL DEL HTML, DONDE PARTE DE LA RAIZ PRINCIPAL DOCUMENT, QUE ES LA PRIMERA FILA,
LUEGO SALDRIAN LAS DOS RAMAS, HEAD Y BODY, Y DENTRO DE BODY EN ESTE CASO HAY H1, H2, P.

ACCEDIENDO AL DOM DESDE JS SE PUEDE:
-CAMBIAR ELEMENTOS O ATRIBUTOS
-CAMBIAR ESTILOS CSS
-REACCIONAR A EVENTOS O CREARLOS

PARA SELECCIONAR LOS ELEMENTOS SE PUEDE HACER DE 3 MANERAS:
-POR ID
-POR EL NOMBRE DE LA CLASE
-POR EL NOMBRE DE LA ETIQUETA
*/

//POR ID
let elementoPorId = document.getElementById('parrafo1');
//Ahora le cambias la propiedad que tiene por una nueva.
elementoPorId.innerHTML = 'HTML';


//POR NOMBRE DE LA CLASE
let elementoPorClase = document.getElementsByClassName('parrafos');//En este caso nos devolverá un array de 3 elementos, porque hay
                                                                   //3 elementos con el classname parrafos
elementoPorClase[1].innerHTML = 'CSS';


//POR ETIQUETA
let elementosPorEtiquetas = document.getElementsByTagName('p');
elementosPorEtiquetas[2].innerHTML = 'Javascript';


//PARA CAMBIAR LOS ESTILOS USAREMOS LA PROPIEDAD STYLE
elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '8px';
elementoPorId.style.width = '250px';
elementoPorId.style.textAlign = 'center';