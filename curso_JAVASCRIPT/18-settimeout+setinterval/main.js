function saludo(nombre){
    console.log(`Hola ${nombre}, buenos dias.`);
}

saludo();
//Con lo de arriba se ejecuta una vez y ya

//CON SETTIMEOUT LE DICES CUANTO TIENE QUE ESPERAR ANTES DE EJECUTARSE
//settimeout(funcion, tiempo que espera antes de ejecutarse de nuevo(en ms), parametros de la funcion...)

//setTimeout(saludo, 2000, 'David');Esto ahora espera 2 segundos y imprime Hola David, buenos dias

//El settimeout se puede cancelar con un cleartimeout, pero para poder hacerlo el settimeout se tiene que guardar en una variable
let tempID = setTimeout(saludo, 2000, 'David');
clearTimeout(tempID);
//Ahora el settimeout que llama a saludo no se ejecutará

//Si queremos ejecutar la funcion cada X tiempo usaremos el setinterval, igual que el settimeout, solo que el parametro del tiempo
//es el intervalo en el que se ejecutará la funcion

/*let numero = 5;

//En el parametro que iría el metodo, usa una funcion flecha para declararlo y despues ya va el parametro del tiempo
let lanzamiento = setInterval(()=>{
    console.log(`Lanzamiento en ${numero} segundos`);
    numero--;
    if(numero == 0){
        clearTimeout(lanzamiento);
    }
}, 1000);*/

//Settimeout anidado, es similar a set interval, pero haciendo settimeout dentro de otro settimeout

let numero = 0;

//EN ESTE CASO NO USAMOS FUNCION FLECHA, PORQUE ESA ES PARA HACER FUNCIONES ANONIMAS, Y AQUI NECESITAMOS QUE TENGA UN NOMBRE
//PARA PODER LLAMARLA

//LA DIFERENCIA ENTRE SETINTERVAL Y ESTO ES QUE EN SETINTERVAL, EL TIEMPO DE ESPERA EMPIEZA CUANDO SE LLAMA LA FUNCION
//Y CON EL SETTIMEOUT ANIDADO EL TIEMPO DE ESPERA ES UNA VEZ FINALIZA LA FUNCION
let incrementoID = setTimeout(
    function incremento(){
        console.log(numero);
        numero++;
        incrementoID = setTimeout(incremento, 1000);
    
}, 1000);

