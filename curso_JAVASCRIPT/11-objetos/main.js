let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true
}

console.log(usuario);
console.log(usuario.edad);

//Puedes añadir un atributo 
usuario.carrera = 'contabilidad';
console.log(usuario);

delete usuario.edad;
console.log(usuario);

//Compruebas que un atributo del usuario existe
console.log(usuario.hasOwnProperty('nombre'));
console.log(usuario.hasOwnProperty('apellido'));

/*Si pones un atributo y quieres que el nombre tenga espacios lo declaras entre comillas simples,
pero no podrás ver el atributo haciendo usuario.tiene pasaporte, entonces tendrás que usar:
usuario['tiene pasaporte']

let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true,
    'tiene pasaporte': true
}


Tambien se pueden anidar objetos:
let usuario = {
    nombre: 'Maria',
    edad: 20,
    estudiante: true,
    idiomas:{
        nativo: español,
        extrangero:{
            ingles: 'avanzado',
            frances: 'medio',
            aleman: 'bajo'
        }
    }
console.log(usuario.idiomas.extrangero.frances);
console.log(usuario.idiomas['extrangero'].frances);
}*/


//constructores
let disco = {
    artist: 'skrillex',
    album: 'a',
    year: 2012
}
function ConstructorDisco(artist, album, year){
    this.artist = artist;
    this.album = album;
    this.year = year;
}

let disco2 = new ConstructorDisco('artista1','album1',2023);
console.log(disco2);