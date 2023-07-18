// lista de Contactos

const ListaContactos =[{
    nombre: 'Jorge',
    apellido: 'Martinez'
    
},
{
    nombre: 'Manuel',
    apellido: 'Morales'
},
{
    nombre: 'Javier',
    apellido: 'Zavala'
},
{
    nombre: 'Melissa',
    apellido: 'Soler'
}]

// crear una funcion para añadir contenido al arreglo
let agregarContacto = (nombre,apellido)=>{
    let agregar = {
        nombre: nombre,
        apellido: apellido,
    };
    ListaContactos.push(agregar);
}
agregarContacto('Milton','Perez')

// crear una funcion para eliminar contenido al arreglo
console.log(ListaContactos);
console.log("")
let borra = ListaContactos.splice(1,2);
console.log(ListaContactos);

//Funcion imprimir
console.log("")
console.log(ListaContactos);