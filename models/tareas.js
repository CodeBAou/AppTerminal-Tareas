
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

    borrarTarea( id = ''){   

        if ( this._Listado[id] ){       
            delete this._Listado[id];//La propiedad delete 
        }

    }

    cargarTareasFromArray( tareas = [] ){
        
        tareas.forEach( tarea => {
            this._Listado[tarea.id] = tarea;
        });
    }
    
    crearTarea( desc = '' ){

        const tarea = new Tarea( desc );
        this._Listado[ tara.id ] = tarea;
       
    }

    get listadoArr(){

        const listado = [];
        
        Object.keys(this._Listado).forEach( key => {
            const tarea = this._Listado[key];
            listado.push( tarea );
        });

        console.log();
        return listado;
    }

    listadoCompleto(){
       
        this.listadoArr.forEach( (tarea, i) => {
            
            const idx = `${i + 1}`.green;
            const { desc, completadoEn }= tarea;
            const estado = ( completadoEn )
                                ? 'Completado'.green
                                : 'Pendiente'.red;

            console.log(`${idx} ${desc} ${estado}}`);
        } );

    }

    listarPendientesCompletadas( completadas = true ){
        
        let contador = 0;

        this.listadoArr.forEach( (tarea, i) => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green    
                                : 'Pendiente'.red;
            if( completadas ){
                //mostrar tareas completadas
                if( completadoEn ){
                    contador += 1;
                    console.log( `${ contador + '.'.green} ${ desc } :: ${ completadoEn }` );
                }
            }else{
                //mostrar tareas pendientes
                if(!completadoEn){
                    contador += 1;
                    console.log( `${ contador + '.'.red} ${ desc } :: ${ estado }` );
                }
            }

           
        });
    }
}

module.exports = Tareas;