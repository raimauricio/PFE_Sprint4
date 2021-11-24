"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilAdmin = void 0;
const curso_js_1 = require("./curso.js");
const cursos_js_1 = require("./cursos.js");
const perfil_js_1 = require("./perfil.js");
const perfilUser_js_1 = require("./perfilUser.js");
class PerfilAdmin extends perfil_js_1.Perfil {
    constructor(id, email, senha) {
        super(id, email, senha);
    }
    logar(chave, senha) {
        if (this.Email === chave && this.Senha === senha) {
            this.statusLogin = true;
            console.log('Perfil logado.');
        }
        else {
            console.log('Falha na autenticação.');
        }
    }
    cadUsuario(email, senha, matricula, usuario) {
        if (!this.statusLogin) {
            console.log('Faça o login.');
        }
        else {
            return new perfilUser_js_1.PerfilUser(email, senha, matricula, usuario);
        }
    }
    addCurso(nome, descricao, categoria) {
        if (this.statusLogin) {
            cursos_js_1.Cursos.adiciona(new curso_js_1.Curso(nome, descricao, categoria));
            console.log('Curso adicionado.');
        }
        else {
            console.log('Faça o login.');
        }
    }
    remCurso(id) {
        if (this.statusLogin) {
            cursos_js_1.Cursos.remover(id);
            console.log('Curso removido.');
        }
        else {
            console.log('Faça o login.');
        }
    }
}
exports.PerfilAdmin = PerfilAdmin;
PerfilAdmin.contUser = 1;
