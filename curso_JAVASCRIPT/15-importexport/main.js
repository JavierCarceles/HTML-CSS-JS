//import{area} from './funciones.js'; Así se importa sin el export default, solo con export function area()...
import calculoArea from './funciones.js';
import {perimetro, PI} from './funciones.js';

//console.log('area: ' + area(10)); Así se llamaria sin cambiarle el nombre
console.log('area: ' + calculoArea(10));

console.log('PI: ' + PI);