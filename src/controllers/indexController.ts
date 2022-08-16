import {Request,Response} from 'express';
	
	class IndexController{
			public index (req:Request, resp: Response){
				resp.send("Si funciona. ¡Hola!");
		
	}
}
export const indexController= new IndexController();//instanciar la clase