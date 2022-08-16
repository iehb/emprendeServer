"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventosController_1 = require("../controllers/eventosController");
const express_1 = require("express");
class EventosRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Se esta creando la propiedad que guarda el objeto devuelto y se inicializa esta propiedad en la misma línea de código. 
        this.config();
    }
    config() {
        this.router.get('/', eventosController_1.eventosController.list);
        this.router.get('/:id', eventosController_1.eventosController.getOne);
        this.router.post('/', eventosController_1.eventosController.create);
        this.router.delete('/:id', eventosController_1.eventosController.delete);
        this.router.put('/:id', eventosController_1.eventosController.update);
    }
}
const eventoRoutes = new EventosRoutes();
exports.default = eventoRoutes.router;
