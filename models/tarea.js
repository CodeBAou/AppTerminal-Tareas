const { v4: uudiv4 } = require('uuid'); //Crear identificadores unicos a nivel mundials

class Tarea {

    id = '';
    desc = '';//Descripcion
    completadoEn = null; //Fecha o null si la tarea no se ha completado

    constructor( desc ){
        this.id = uudiv4();
        this.desc = desc;
        this.completadoEn = null;
    }

    cargarTareaFromArray( tareas = [] ){
        tareas.forEach ( tarea => {
            this._listado[ tarea.id ] = tarea;
        } );
    }
}

module.exports = Tarea;