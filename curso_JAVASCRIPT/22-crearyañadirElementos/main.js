//PARA CREAR UN ELEMENTO HTML DESDE JS, Y INCORPORARLO AL PROPIO FICHERO HTML QUE QUERAMOS HAY VARIOS PASOS

//1. CREAR EL NODO 
//2. CONOCER EL PADRE DONDE LO VAMOS A AGREGAR
//3. AÑADIR EL NODO 

const parrafo4 = document.createElement('p');
//Creas el texto que irá dentro del elemento parrafo4
const textoParrafo4 = document.createTextNode('Párrafo 4');

const parrafoCinco = document.createElement('p');
//Esta es otra manera de añadirle el texto a la etiqueta p que creas, la otra que hay es la de la linea 9 y 21
parrafoCinco.innerHTML = 'Párrafo 5'

//Sabemos mirando el html que el padre es el div con la class padre, porque queremos añadir un parrafo mas a los que hay dentro
const elementoPadre = document.querySelector('.padre');

//Para agregarlo se puede hacer con appendchild o con append, con appenchild puedes añadir 1 elemento, y con append
//puedes añadir varios elementos separados por ,
//elementoPadre.append(parrafo4, parrafoCinco);
elementoPadre.appendChild(parrafo4);
elementoPadre.appendChild(parrafoCinco);
//Aqui añades el texto a la etiqueta <p></p> que habias creado en la linea 7
parrafo4.appendChild(textoParrafo4);

//Ahora se ha agregado una etiqueta <p>Párrafo 4</p> en el html, SOLO LO PUEDES VER DESDE EL NAVEGADOR PULSANDO F12

//AHORA HEMOS CREADO ELEMENTOS Y SE AÑADEN AL FINAL DE LOS PARRAFOS QUE EXISTIAN, EN EL SIGUIENTE VIDEO SE EXPLICA
//COMO AÑADIR ELEMENTOS EN LA POSICION QUE DESEES

//LA DIFERENCIA ENTRE CREATETEXTNODE Y INNERHTML ES QUE EN INNERHTML SI PONES <h1>Texto</h1>, este se escribirá como un h1, 
//pero si en createtextnode escribes <h1>Texto</h1>, se escribirá literalmente <h1>Texto</h1> en el html con sus etiquetas escritas