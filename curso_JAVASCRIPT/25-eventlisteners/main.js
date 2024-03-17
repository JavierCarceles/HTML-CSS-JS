//PARA CONSULTAR TODOS LOS EVENTOS QUE HAY:
//https://www.w3schools.com/jsref/dom_obj_event.asp


//Para referirnos a un elemento podemos hacerlo con getelementbyid, queryselector, o escribiendo su id directamente
const boton = document.querySelector('#saludoBtn');
const userInput = document.querySelector('#userInput');

/*boton.addEventListener('click',()=>{
    console.log('Hola desde funcion flecha');
});*/

//Con contextMenu responde al hacer click derecho sobre el elemento
boton.addEventListener('contextmenu',()=>{
    console.log('Has hecho click derecho');
});

//Con mouseover reacciona al pasar con el raton por encima del elemento (en este caso el boton)
//ES IMPORTANTE LLAMAR A LA FUNCION SIN PONER FUNCION(), SOLO ESCRIBIENDO FUNCION, SINO LA LLAMARÁ DESDE
//QUE SE EJECUTA EL SCRIPT, Y NO AL RESPONDER AL EVENTO QUE QUEREMOS
boton.addEventListener('mouseover',saludo);
boton.addEventListener('click',saludo);

/*function saludo(){
    console.log('Hola desde funcion externa.');
}*/

//SI PONEMOS EVENT, ESTE MUESTRA EN CONSOLA UN OBJETO CON MUCHA INFORMACIÓN, ENTRE ELLA, LAS COORD DONDE SE HIZO EL CLICK,
//EL TIPO DE EVENTO, O EL OBJETO AL QUE RESPONDE, EN ESTE CASO AL BOTON,
//TAMBIÉN PODEMOS PONER event.target.innerHTML para que imprima el texto del objetivo, en este caso el boton
//tiene el texto Saludo, así que imprimirá 'Saludo' en la consola
function saludo(event){
    console.log(event);
}

userInput.addEventListener('keypress',(event)=>{
    //EL KEYCODE 13 ES EL NUMERO DEL ENTER
    /*if(event.keyCode === 13){
        console.log(event);
    }*/
    //EN ESTE CASO COMPRUEBA EL ENTER CON EL STRING QUE LE CORRESPONDE A LA TECLA Y IMPRIME LA INFORMACION DEL CAMPO DE TEXTO
    if(event.key === "Enter"){
        console.log(event.target.value);
    }
});