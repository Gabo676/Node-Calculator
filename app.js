import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js';
import { Operaciones } from './models/operaciones.js';

console.clear();

const main = async () => {

    let opt = '';
    const operaciones = new Operaciones();
    const operacionesDB = leerDB();

    if(operacionesDB){
        operaciones.cargarOperacionesFromArray(operacionesDB)
    }

    do{
        opt = await inquirerMenu();
        switch (opt){
            case '1':
                const num1 = await leerInput('Ingrese el primer num:')
                const num2 = await leerInput('Ingrese el segundo num:')
            break;

        }

        guardarDB(operaciones.listadoArr);
        if(opt !== '6') await pausa();
        
    } while (opt !== '6');
}

main();