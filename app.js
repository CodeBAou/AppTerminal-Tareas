//Se recomienda primero las importaciones de paquetes de terceros
require('colors');
//const { mostrarMenu, pausa } = require( './helpers/mensajes' ); 
const { 
    inquirerMenu, 
    pausa,
    leerInput
} = require( './helpers/inquirer' ); 
const Tareas = require('./models/tareas');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do{
        //Muestra el menu
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                //Opcion crear tarea
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc );
                break;
            case '2':
                console.log(tareas._Listado);
                break;
        }

        //Pausa Peticion usuario
        await pausa();

    }while( opt !== '0' );
}


main();
