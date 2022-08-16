"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //se está creando la propiedad que guardará el objeto y se inicializa esta propiedad en la misma línea de código.
        this.config();
    }
    config() {
        this.router.get('/administrador', (req, resp) => resp.send("Hello")); //creando una ruta de mi aplicación del servidor para la ruta inicial, y se devuelve un mensaje de Hello.
    }
}
/*
Tuve que cambiar la sintaxis, de lo que hay en el manual.
*/
const indexroutes = new indexRoutes();
exports.default = indexroutes.router;
