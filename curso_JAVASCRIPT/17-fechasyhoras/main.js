let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getDay());

//TIMESTAMP -> 1 DE ENERO DE 1970 HASTA LA ACTUALIDAD
console.log(fecha.getTime());//TIENE SOPORTE PARA NAVEGADOR
console.log(Date.now());//NO TIENE SOPORTE PARA NAVEGADOR
console.log(+fecha);//UTIL PARA PODER CALCULAR TIEMPOS DEL USUARIO

let fechaConTimeStamp = new Date(fecha);
console.log(fechaConTimeStamp);

let fechaConString = new Date("2021-07-23 23:00:14");
//                            "2021/07/23 23:00:14"
//                            "2021 07 23"
//                            "2021 jan 23"
//                            "jan 23 2021"
console.log(fechaConString);

//FECHA CON PARAMETROS Dat(año, mes, fecha, horas, minutos, segundos, milisegundos)
//ALMENOS SE TIENE QUE PONER EL AÑO Y EL MES, LO DEMAS ES OPCIONAL
let fechaConParametros = new Date(2021, 1, 25, 15, 20, 35, 45);
console.log(fechaConParametros);

//Tambien se pueden usar los metodos set para todos los parametros
fechaConParametros.setFullYear(2024);
console.log(fechaConParametros);

let hora = new Date();
console.log(hora.toLocaleTimeString());








