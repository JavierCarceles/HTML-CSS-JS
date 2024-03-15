let hora = prompt('Ingresa la hora por favor: ');

if(hora>=6 && hora<=12){
    document.write("<h1>Buenos dias</h1>");
}else if(hora>=13 && hora<=18){
    document.write("<h1>Buenas tardes</h1>");
}else{
    document.write("<h1>Buenas noches</h1>");
}