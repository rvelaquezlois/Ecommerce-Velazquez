class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = new Object();
        this.mascotas = new Array();
    }

    getFullName(){
        return `Hola ${this.nombre} ${this.apellido}`;
    }

   addMascota(petName){
    this.mascotas.push(petName);
   }

   countMascotas(){
    return this.mascotas.length;
   }

   addBook(nombre, autor){
    
   }
}