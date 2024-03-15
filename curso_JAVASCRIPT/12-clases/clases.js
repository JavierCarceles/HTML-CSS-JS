class Player{
    //Es buena practica poner siempre el _ porque es la manera de indicar que el atributo es privado y solo debe accederse a el desde esta
    //clase
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }

    saltar(){

    }

    correr(){

    }

    saludar(){
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

}

let player1 = new Player("Mario", "rojo");
let player2 = new Player("Luigi", "verde");

console.log(player1.saludar());
console.log(player2.saludar());

player1.nombre = "Bowser"
console.log(player1.nombre);
console.log(player2.nombre);