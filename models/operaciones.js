import { Operacion } from "./operacion"

export class Operaciones{

    get listadoArr(){
        const lisado = [];
        Object.keys(this._listado).forEach( key => {
            lisado.push(this._listado[key]);
        })
    }
    constructor(){
        this._listado = {}
    }

    crearOperaciones(desc = ''){
        const operacion = new Operacion(desc);
        this._listado[operacion]
    }
}