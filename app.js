//Se recomienda primero las importaciones de paquetes de terceros
require('colors');

//const { mostrarMenu, pausa } = require( './helpers/mensajes' ); 
const { 
    inquirerMenu, 
    pausa,
    leerInput
} = require( './helpers/inquirer' ); 

const Tareas = require('./models/tareas');
const {guardaDB, leerDB} = require('./helpers/guardarArchivo');

const main = async() => {

    let opt        = '';
    const tareas   = new Tareas();
    const tareasDB = leerDB();

    if( tareasDB ){
        tareas.cargarTareasFromArray( tareasDB );
    }
    

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
                //Muestra todas las tareas
                tareas.listadoCompleto();
                break;
                
            case '3':
                //Muestra informacion sobre una tarea

                break;
        }

        guardaDB( tareas.listadoArr ); 

        //Pausa Peticion usuario
        await pausa();

    }while( opt !== '0' );
}


main();
