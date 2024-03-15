class Player{
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

//SUBCLASE

class Pet extends Player{
    constructor(nombre, colorSombrero, colorPiel){
        //super lo que dice es, estos 2 parametros que los cree el constructor de la clase padre (Player)
        super(nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }

    get colorPiel(){
        return this._colorPiel;
    }

    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel;
    }

    comer(){
        return 'Yo como manzanas';
    }

    saludar(){
        return super.saludar() + ' además soy una mascota';
    }

}

let pet1 = new Pet("Yoshi","Invisible","verde");
console.log(pet1);
console.log(pet1.saludar());

//CON LOS METODOS TU LOS PUEDES DECLARAR A CUALQUIER NIVEL, Y LLAMARLOS DESDE CUALQUIER OTRO, ES DECIR PUEDES HACER LA LLAMADA Y LUEGO
//CREARLOS Y NO PASA NADA, PERO CON LAS CLASES NO PASA IGUAL, PRIMERO HAY QUE CREAR LAS CLASES Y LUEGO LLAMAR A LOS METODOS O NO FUNCIONARÁ
