const elementoPadre = document.querySelector('.padre');
const parrafo4 = document.createElement('p');
parrafo4.innerHTML = 'Párrafo 4';
//elementoPadre.appendChild(parrafo4);

//3 MANERAS PARA ELIMINAR NODOS
const parrafoUno = document.querySelector('#parrafo1');
elementoPadre.removeChild(parrafoUno);

const parrafoDos = document.querySelector('#parrafo2');
parrafoDos.remove();

const parrafoTres = document.querySelector('#parrafo3');
elementoPadre.replaceChild(parrafo4, parrafoTres);


//EVENT LISTENERS
parrafo4.addEventListener('click', ()=>{
    parrafo4.innerHTML = 'HAS HECHO CLICK!';
})
