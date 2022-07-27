
const Tarea = require('./tarea');
/**
 * _listado
 *      { 'uuid-123712-123123-2 : { id:12, desc:asd, completadoEN:92231 } }
 */
class Tareas{
    
    _Listado = {};

    constructor() {
        this._Listado = {};
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea( desc );
        this._Listado[ tarea.id ] = tarea;
    }
}

module.exports = Tareas;