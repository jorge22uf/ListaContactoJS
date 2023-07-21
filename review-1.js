// lista de Contactos

const ListaContactos =[{
    nombre: 'Jorge',
    apellido: 'Martinez',
    telefono: 95875172,
    id: 8,
    ubicaciones: {
        ciudad: "Tegucigalpa",
        direccion: "Residencial CAO"

    }
    
},
{
    nombre: 'Manuel',
    apellido: 'Morales',
    telefono: 88857475,
    id: 9,
    ubicaciones: {
        ciudad: "SPS",
        direccion: "Valle de Sula"

    }
},
{
    nombre: 'Javier',
    apellido: 'Zavala',
    telefono: 857476698,
    id: 1,
    ubicaciones: {
        ciudad: "Comayagua",
        direccion: "Jamalamni"

    }
},
{
    nombre: 'Melissa',
    apellido: 'Soler',
    telefono: 6987858,
    id: 2,
    ubicaciones: {
        ciudad: "Tegucigalpa",
        direccion: "Residencial Valle Verde"

    }
}]

// crear una funcion para añadir contenido al arreglo
let agregarContacto = (nombre,apellido, telefono, id, _ubicaciones, ciudad, direccion)=>{
    let agregar = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        id: id,
        ubicaciones:{ciudad, direccion},
    };
    ListaContactos.push(agregar);
};

// crear una funcion para eliminar contenido al arreglo
let eliminarContacto = (nombre) => {
    let indice = ListaContactos.findIndex((contacto) => contacto.nombre === nombre);
    if (indice !== -1) {
      ListaContactos.splice(indice, 1);
    }
}

// Función para imprimir    
 function listadContactos(){
    for (let i = 0; i < ListaContactos.length; i++ ) {
        console.log(i+1, " ", ListaContactos[i])
        console.log("___________________________________")
    }
 };

//funcion para actualizar contactos
let actualizarContacto = (id, actualizacionContacto) => {
    let Newcontacto = ListaContactos.find((contacto) => {
        return contacto.id === id;
    });
    if (Newcontacto) {
        Object.assign(Newcontacto, actualizacionContacto);
    }
  };


 // imprimir
 console.log("lista de Contactos")
 listadContactos()
 console.log("contacto agregado")
 agregarContacto("Joel","Alvarez", 88717128, 5, "San Sebastian", "Tegucigalpa", "San Sebastian");
 listadContactos()
 console.log("contacto borrado")
 eliminarContacto("Jorge")
 listadContactos()
 console.log("contacto actualizado")
 actualizarContacto(1,{nombre: "sofia", apellido: "martinez", telefono: "98475214", id:"10", ubicaciones:{ciudad: "comayagua", direccion: "Barrio piedras"}});
 listadContactos()
