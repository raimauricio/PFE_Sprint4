"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursos = void 0;
const categoria_js_1 = require("../enum/categoria.js");
class Cursos {
    static adiciona(curso) {
        this.cursos.push(curso);
    }
    static listar() {
        for (let i in Cursos.cursos) {
            console.log(`--------------------------`);
            console.log(`Id: ${Cursos.cursos[i].IdCurso}`);
            console.log(`Curso: ${Cursos.cursos[i].NomeCurso}`);
            console.log(`Descrição: ${Cursos.cursos[i].Descricao}`);
            console.log(`Categoria: ${categoria_js_1.Categoria[Cursos.cursos[i].Categoria]}`);
        }
    }
    static listarPorCategoria(categoria) {
        for (let i in Cursos.cursos) {
            if (Cursos.cursos[i].Categoria === categoria) {
                console.log(`--------------------------`);
                console.log(`-----Curso ${categoria_js_1.Categoria[Cursos.cursos[i].Categoria]}-----`);
                console.log(`Id: ${Cursos.cursos[i].IdCurso}`);
                console.log(`Curso: ${Cursos.cursos[i].NomeCurso}`);
                console.log(`Descrição: ${Cursos.cursos[i].Descricao}`);
            }
        }
    }
    static remover(id) {
        for (let i in Cursos.cursos) {
            if (Cursos.cursos[i].IdCurso === id) {
                Cursos.cursos.splice(parseInt(i), 1);
            }
        }
    }
}
exports.Cursos = Cursos;
Cursos.cursos = [];
