"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilUser = void 0;
const cursos_js_1 = require("./cursos.js");
const perfil_js_1 = require("./perfil.js");
class PerfilUser extends perfil_js_1.Perfil {
    constructor(email, senha, matricula, usuario) {
        super(PerfilUser.contUser, email, senha);
        this.cursosFavoritos = [];
        this.matricula = matricula;
        this.usuario = usuario;
        PerfilUser.contUser += 1;
    }
    set Matricula(matricula) {
        this.matricula = matricula;
    }
    set Usuario(usuario) {
        this.usuario = usuario;
    }
    logar(chave, senha) {
        if (this.usuario === chave && this.Senha === senha) {
            this.statusLogin = true;
            console.log('Perfil logado.');
        }
        else {
            console.log('Falha na autenticação.');
        }
    }
    assitir(id) {
        if (this.statusLogin) {
            let curso;
            for (let i in cursos_js_1.Cursos.cursos) {
                if (cursos_js_1.Cursos.cursos[i].IdCurso === id) {
                    curso = cursos_js_1.Cursos.cursos[i].NomeCurso;
                }
            }
            console.log(`Assitindo curso ${curso} ...`);
        }
        else {
            console.log('Faça o login.');
        }
    }
    listarCursos() {
        if (this.statusLogin) {
            cursos_js_1.Cursos.listar();
        }
        else {
            console.log('Faça o login.');
        }
    }
    listarPorCategoria(categoria) {
        cursos_js_1.Cursos.listarPorCategoria(categoria);
    }
    favoritar(id) {
        if (this.statusLogin) {
            for (let i in cursos_js_1.Cursos.cursos) {
                if (cursos_js_1.Cursos.cursos[i].IdCurso === id) {
                    this.cursosFavoritos.push(cursos_js_1.Cursos.cursos[i]);
                }
            }
        }
        else {
            console.log('Faça o login.');
        }
    }
    desfavoritar(id) {
        if (this.statusLogin) {
            for (let i in this.cursosFavoritos) {
                if (this.cursosFavoritos[i].IdCurso === id) {
                    this.cursosFavoritos.splice(parseInt(i), 1);
                }
            }
        }
        else {
            console.log('Faça o login.');
        }
    }
    listarFavoritos() {
        if (this.statusLogin) {
            console.log(`Cursos Favoritos: `);
            for (let i in this.cursosFavoritos) {
                console.log(`${this.cursosFavoritos[i].NomeCurso}`);
            }
        }
        else {
            console.log('Faça o login.');
        }
    }
}
exports.PerfilUser = PerfilUser;
PerfilUser.contUser = 1;
