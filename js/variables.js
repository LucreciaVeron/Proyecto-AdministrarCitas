import { generarID } from "./funciones.js";

let editando = {
    value: false
}


//Objeto de cita
const citaObjt ={
    id: generarID(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando, 
    citaObjt
}