import {formulario} from '../selectores.js';


export default class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;
        this.mostrar();

    }
    mostrar(){
        //crear notificacion
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        //eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        //Si es de tipo error, agrega una clase
        if(this.tipo === 'error'){
            alerta.classList.add('bg-red-500');
        }
        else{
            alerta.classList.add('bg-green-500');
        }

        alerta.textContent = this.texto;

        //Insertamos en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);


        //quitar despues de 5 segundos
        setTimeout(()=> {
            alerta.remove();
        }, 3000);
    }

}