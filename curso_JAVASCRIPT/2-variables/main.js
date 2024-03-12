//para variables let, y para constantes const
let userAge;
let birthYear;
//Si la variable no tiene ningun valor cuando se tiene que mostrar, se muestra undefined
//document.write(userAge);
//alert(userAge);

//Esta funcion es como alert, solo que deja un campo de texto en el cual escribir
//prompt("Ingresa tu edad por favor: ");

//Para guardar el texto que se escribe en prompt, se puede asignar la funcion prompt a una variable, para despues imprimirla por ejemplo
userAge = prompt("Ingresa tu edad por favor: ");
birthYear = 2024 - userAge;
//document.write(userAge);

//Para imprimir texto con una variable: (SON ACENTOS HACIA LA IZQUIERDA, NO COMILLAS SIMPLES)
document.write(`Tu tienes ${userAge} años y naciste en el año ${birthYear}`);
