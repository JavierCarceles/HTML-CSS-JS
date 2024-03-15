const PI = 3.14; //LAS CONSTANTES TAMBIEN SE PUEDEN IMPORTAR

/*Esta es otra manera de exportar el metodo que quieres
export function area(radio){
    return PI*radio**2;
}

*/
//PRIMERO TIENES QUE EXPORTAR LA FUNCION QUE QUIERAS IMPORTAR DESDE OTRO DOCUMENTO CUALQUIERA
//export{area};

//Esta otra manera lo que te permite es importar la funcion pero sin que se tenga que llamar area en este caso, 
//y desde donde la importas le pones tu el nombe que quieres
export default function area(radio){
    return PI*radio**2;
}

//SOLO 1 FUNCION PUEDE TENER DEFAULT IMPORTANTE!!! LAS DEMAS SE TENDRÁN QUE EXPORTAR CON export function normal
//y importarlas con el nombre que tengan sin cambiarselo.
export function perimetro(radio){
    return 2*PI*radio;
}