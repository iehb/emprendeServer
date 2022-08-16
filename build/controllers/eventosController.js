"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventosController = void 0;
const database_1 = __importDefault(require("../database"));
class EventosController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            //  pool.query('DESCRIBE games');
            const evento = yield database_1.default.query('SELECT * FROM RegistroActividadesEvento');
            resp.json(evento);
            // resp.json({text: 'Listing games'});
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const evento = yield database_1.default.query('SELECT * FROM RegistroActividadesEvento WHERE id_Actividad=?', [id]);
            if (evento.length > 0) {
                return resp.json(evento[0]);
            }
            resp.status(404).json({ text: 'El evento no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO RegistroActividadesEvento SET?', [req.body]);
            resp.json({ message: ' Evento guardado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE RegistroActividadesEvento SET ? WHERE id_Actividad=?', [req.body, id]);
            resp.json({ message: 'El evento se ha actualizado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM RegistroActividadesEvento WHERE id_Actividad=?', [id]);
            resp.json({ message: 'El evento ha sido borrado' });
        });
    }
}
exports.eventosController = new EventosController(); //instanciar la clase
