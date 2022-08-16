import{Router} from 'express';
import {indexController} from '../controllers/indexController';
class indexRoutes{
    public router: Router =Router(); //se está creando la propiedad que guardará el objeto y se inicializa esta propiedad en la misma línea de código.
    
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/administrador',(req, resp) =>resp.send("Hello")); //creando una ruta de mi aplicación del servidor para la ruta inicial, y se devuelve un mensaje de Hello.
    }
}
/*
Tuve que cambiar la sintaxis, de lo que hay en el manual.
*/                           
const indexroutes = new indexRoutes();
export default indexroutes.router;

    