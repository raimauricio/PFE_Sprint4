"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
class Perfil {
    constructor(id, email, senha, statusLogin = false) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.statusLogin = statusLogin;
    }
    get Email() {
        return this.email;
    }
    get Senha() {
        return this.senha;
    }
    logoff() {
        if (this.statusLogin === true) {
            this.statusLogin = false;
            console.log('Logoff realizado.');
        }
    }
}
exports.Perfil = Perfil;
