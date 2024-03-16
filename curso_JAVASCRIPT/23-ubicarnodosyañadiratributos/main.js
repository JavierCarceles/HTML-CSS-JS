const parrafo4 = document.createElement('p');
const textoParrafo4 = document.createTextNode('Párrafo 4');
const parrafoCinco = document.createElement('p');
const elementoPadre = document.querySelector('.padre');

parrafoCinco.innerHTML = 'Párrafo 5'

elementoPadre.appendChild(parrafo4);
elementoPadre.appendChild(parrafoCinco);
parrafo4.appendChild(textoParrafo4);

/*ESTO DE ARRIBA ES DEL VIDEO ANTERIOR*/

const parrafoCero = document.createElement('p');
const parrafoMedio = document.createElement('p');
const parrafoUno = document.querySelector('p');
const parrafoDos = document.querySelector('#parrafo2');

const parrafoExtra = document.createElement('p');

parrafoMedio.innerHTML = 'Párrafo 1.5';
parrafoCero.innerHTML = 'Párrafo 0';
parrafoExtra.innerHTML = 'Párrafo Extra';

elementoPadre.insertBefore(parrafoCero, parrafoUno);
elementoPadre.insertBefore(parrafoMedio, parrafoDos);

//ESTO AÑADE PARRAFOEXTRA ANTES!!!!! DE LA ETIQUETA DEL ELEMENTO PADRE
//ES DECIR, EL PADRE ES UN DIV, PUES ESTA LINEA AÑADE EL ELEMENTO PARRAFOEXTRA ANTES DE ESE DIV
//elementoPadre.insertAdjacentElement('beforebegin',parrafoExtra);
//Y ESTA DE ABAJO LO AÑADE JUSTO DESPUES DE LA ETIQUETA DIV DEL PADRE, ES DECIR, EL PRIMER ELEMENTO HIJO QUE TIENE EL DIV PADRE
//elementoPadre.insertAdjacentElement('afterbegin',parrafoExtra);
//ESTA LO AÑADE ANTES DE LA ETIQUETA DE CIERRE, ES DECIR, EL ULTIMO ELEMENTO HIJO DEL DIV PADRE
//elementoPadre.insertAdjacentElement('beforeend',parrafoExtra);
//ESTA LO AÑADE DESPUES QUE SE CIERRE EL DIV PADRE, ES DECIR EL PRIMER ELEMENTO QUE HABRÁ DESPUES DEL DIV PADRE
elementoPadre.insertAdjacentElement('afterend',parrafoExtra);


//COMO QUEREMOS QUE AL AÑADIR UN ELEMENTO, ESTE SIGA LA MISMA HOJA CSS, TENDRÁ QUE TENER LOS MISMOS ATRIBUTOS ID, CLASS QUE LOS
//QUE YA EXISTEN O APARECERÁN SIN ESTILO, PARA ELLO SE LOS PODEMOS AÑADIR DESDE AQUÍ

parrafoExtra.setAttribute('class', 'parrafos');




