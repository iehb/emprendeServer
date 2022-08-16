import {Request,response,Response} from 'express';
import pool from '../database';

	class EventosController{

		public  async list (req:Request, resp: Response):Promise<any>{
          //  pool.query('DESCRIBE games');
          const evento= await pool.query('SELECT * FROM RegistroActividadesEvento');
          resp.json(evento);
           // resp.json({text: 'Listing games'});
        }

        public async getOne(req: Request, resp: Response):Promise<any>{
            const {id} = req.params;
            const evento = await pool.query('SELECT * FROM RegistroActividadesEvento WHERE id_Actividad=?',[id]);
            if(evento.length>0){
                return resp.json(evento[0]);
            }
            resp.status(404).json({text: 'El evento no existe'});
        }

        public async create(req: Request, resp:Response):Promise<void>{
            console.log(req.body);
            await pool.query('INSERT INTO RegistroActividadesEvento SET?',[req.body]);
            resp.json({message:' Evento guardado'});
        }
    
        public async update(req: Request, resp: Response):Promise<void>{
            const {id}= req.params;
            await pool.query('UPDATE RegistroActividadesEvento SET ? WHERE id_Actividad=?',[req.body,id]);
            resp.json({message:'El evento se ha actualizado'});
        }

        public async delete(req: Request, resp:Response):Promise<void>{
            const {id} = req.params;
            await pool.query('DELETE FROM RegistroActividadesEvento WHERE id_Actividad=?',[id]);
            resp.json({message:'El evento ha sido borrado'});
        }
    }
export const eventosController= new EventosController();//instanciar la clase
