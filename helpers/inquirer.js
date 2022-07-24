const  inquirer  =  require ( 'inquirer' ) ;
require('colors');


const menuOptions = [
   {
    type:'list', 
    name:'opcion',
    message:'¿Que desea hacer?',
    choices: [
      {
        value:'1',
        name:'1. Crear tarea'
      },
      {
        value:'2',
        name:'2. Listar Tareas'
      },
      {
        value:'3',
        name:'3. Listar Tareas Completadas'
      },
      {
        value:'4',
        name:'4. Listar Tareas pendientes'
      },
      {
        value:'5',
        name:'5. Completar Tarea(s)'
      },
      {
        value:'6',
        name:'6. Borrar Tarea'
      },
      {
        value:'0',
        name:'0. Salir'
      }
    ] 
   }
];

const inquirerMenu = async() => {

    console.clear();
    console.log( '========================='.green );
    console.log( '  Seleccione una opcion'.green );
    console.log( '=========================\n'.green );
    const { opcion } = await inquirer.prompt( menuOptions );
    return opcion;
}

const pausa = async () => {
   
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${ 'enter'.green } para continuar > \n `
    }
  ];

  await inquirer.prompt( question );

}

module.exports = {
    inquirerMenu,
    pausa
}