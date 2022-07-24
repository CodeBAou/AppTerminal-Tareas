//Se recomienda primero las importaciones de paquetes de terceros
require('colors');

//const { mostrarMenu, pausa } = require( './helpers/mensajes' ); 
const { inquirerMenu, pausa } = require( './helpers/inquirer' ); 

const main = async() => {

    let opt = '';

    do{
        //Muestra el menu
        opt = await inquirerMenu();
        console.log(opt);
        //Pausa Peticion usuario 
        await pausa();

    }while( opt !== '0' );
}

main();
