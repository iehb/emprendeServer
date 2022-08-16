import {eventosController } from '../controllers/eventosController';
import {Router} from 'express';

class EventosRoutes{
    public router: Router = Router(); //Se esta creando la propiedad que guarda el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
    
    constructor(){

        this.config();   
    }

    config():void{
        this.router.get('/',eventosController.list);
        this.router.get('/:id',eventosController.getOne);
        this.router.post('/',eventosController.create);
        this.router.delete('/:id',eventosController.delete);
        this.router.put('/:id',eventosController.update);
    }

}
const eventoRoutes = new EventosRoutes();
export default eventoRoutes.router;