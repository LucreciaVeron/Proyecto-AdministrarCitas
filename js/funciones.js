import {pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario, formularioInput} from './selectores.js';
import { citaObjt, editando } from './variables.js';
import Notificacion from './classes/Notificacion.js';
import AdminCitas from './classes/AdminCitas.js';

const citas = new AdminCitas();

export function datosCita(e){
    citaObjt[e.target.name] = e.target.value;
}

export function submitCita(e){
    e.preventDefault();

    //Si hay al menos un campo vacio muestra una alerta
    if(Object.values(citaObjt).some(valor => valor.trim() === '')){
        new Notificacion({
            texto: 'Todos los campos son obligatorios', 
            tipo: 'error'}
        );
        return;
    }

    if(editando.value){

        citas.editar({...citaObjt});
        new Notificacion({
            texto: 'Paciente editado', 
            tipo: 'exito'}
        );
    }

    else{
        citas.agregar({...citaObjt});
        new Notificacion({
            texto: 'Paciente registrado', 
            tipo: 'exito'}
        );
        formularioInput.value = 'Registrar paciente';
    }
    
    //cuando se envia se resetea
    editando.value = false;
    formulario.reset();
    reiniciarObjetoCita();
    
}

export function reiniciarObjetoCita(){
    //Reiniciamos el objeto
    //el id se genera uno nuevo
    citaObjt.id = generarID(),
    citaObjt.paciente = '';
    citaObjt.propietario = '';
    citaObjt.email = '';
    citaObjt.fecha = '';
    citaObjt.sintomas = '';
}

export function cargarEdicion(cita){
    Object.assign(citaObjt, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true;
    formularioInput.value = 'Guardar cambios';
}

export function generarID(){
    return Math.random().toString(36).substring(2) + Date.now();
}