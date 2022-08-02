//Se recomienda primero las importaciones de paquetes de terceros
require('colors');

//const { mostrarMenu, pausa } = require( './helpers/mensajes' ); 
const { 
    inquirerMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
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
                //Listar tareas completadas
                tareas.listarPendientesCompletadas(true);
                break;
                
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':
                const ids = await mostrarListadoCheckList( tareas.listadoArr );
                console.log(ids);
                break;   

            case '6':
                //Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                const ok = await confirmar('¿Estas seguros?');
            
                if( ok ){
                    
                    tareas.borrarTarea( id );
                    console.log("tarea eliminada...".green);
                }
                break;
        }
    
        guardaDB( tareas.listadoArr ); 

        //Pausa Peticion usuario
        await pausa();

    }while( opt !== '0' );
}


main();
