//ATRIBUTOS Y METODOS ESTATICOS
class Mascota{

    //SI ES ESTATICO, EL ATRIBUTO PERTENECE A LA CLASE Y NO AL OBJETO
    //ESTO QUIERE DECIR QUE NO PUEDES DECLARAR UN OBJETO MASCOTA, Y INTENTAR ACCEDER A COLA
    //let perro = new Mascota('Toby',8); console.log(perro.cola); <- esto nos da undefined, no nos dice 'larga', porque estamos mirando el atributo
    //sobre el objeto y no sobre la clase

    //Mascota.cola nos dice 'larga' ya que es atributo de la clase y accedemos a el a traves de Mascota.cola, es decir, a traves
    //de la clase

    static cola = 'larga';
    pelaje = 'lacio';

    static contadorMascota = 0;

    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
        this._numeroCreacion = ++Mascota.contadorMascota;
    }

    get numeroCreacion(){
        return this._numeroCreacion;
    }

    static saludo(){
        return 'mover la cola';
    }

}

let perro = new Mascota('Toby',8);
console.log(perro.cola);
console.log(Mascota.cola);

let perro1 = new Mascota('Toby1',2);
let perro2 = new Mascota('Toby2',3);
let perro3 = new Mascota('Toby3',7);

console.log(perro.numeroCreacion);
console.log(perro1.numeroCreacion);
console.log(perro2.numeroCreacion);
console.log(perro3.numeroCreacion);

//boton de arriba View, command palette, Quokka.js: start on current file
//console.log(perro.saludo()); Esto da error porque el metodo es estatico y solo se puede llamar desde la clase 
console.log(Mascota.saludo());

class Perro extends Mascota{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this._raza = raza;
    }
}

//Ejemplo para ver que el atributo estatico de Mascota tambien incrementa si creas una subclase de Mascota, como en este caso Perro
let toby = new Perro('Toby',8,'Westy');
//antes valia 4, ahora vale 5
console.log(Mascota.contadorMascota);