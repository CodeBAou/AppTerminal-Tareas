const inquirer = require('inquirer');
require('colors');


const menuOptions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.yellow} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.yellow} Listar Tareas`
      },
      {
        value: '3',
        name: `${'3.'.yellow} Listar Tareas Completadas`
      },
      {
        value: '4',
        name: `${'4.'.yellow} Listar Tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.yellow} Completar Tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.yellow} Borrar Tarea`
      },
      {
        value: '0',
        name: `${'0.'.yellow} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {

  console.clear();
  console.log('========================='.green);
  console.log('  Seleccione una opcion'.white);
  console.log('=========================\n'.green);
  const { opcion } = await inquirer.prompt(menuOptions);
  return opcion;
}

const pausa = async () => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar > \n `
    }
  ];

  await inquirer.prompt(question);

}

const leerInput = async (message) => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {

        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }

        return true;

      }
    }
  ]

  const { desc } = await inquirer.prompt(question);
  return desc;

}


const listadoTareasBorrar = async ( tareas = [] ) => {

  const choices = tareas.map( ( tarea, i ) => {

    const idx = `${i + 1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,

    }
  });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'borrar',
      choices
    }
    
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;
}

const mostrarListadoCheckList = async ( tareas = [] ) => {

  const choices = tareas.map( ( tarea, i ) => {

    const idx = `${i + 1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: ( tarea.completadoEn ) ? true : false
    }
  });

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices
    }
    
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
}

const confirmar = async (message) => {
  const pregunta = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(pregunta);
  return ok;
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList
}