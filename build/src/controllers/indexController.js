"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, resp) {
        resp.send("Si funciona. ¡Hola!");
    }
}
exports.indexController = new IndexController(); //instanciar la clase
