import inquirer from 'inquirer';
import colors from 'colors';
import { validate } from 'uuid';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value : '1',
                name: `${'1.'.green} ➕ Sumar`
            },
            {
                value : '2',
                name: `${'2.'.green} ➖ Restar`
            },
            {
                value : '3',
                name: `${'3.'.green} ✖️ Multiplicar`
            },
            {
                value : '4',
                name: `${'4.'.green} ➗ Dividir`
            },
            {
                value : '5',
                name: `${'5.'.green} 📂 Historial`
            },
            {
                value : '6',
                name: `${'6.'.green} 🚪 Salir`
            }
        ]
    }
];

export const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

export const inquirerMenu = async () => {
    console.clear();
    console.log('====================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=====================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);
    return opcion;
}


export const leerInput = async( mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'num',
            message,
            validate(value){
                if(this.validate.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];

    const {num} = await inquirer.prompt(question);
    return num;
}