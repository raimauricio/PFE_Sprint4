"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(nomeCurso, descricao, categoria) {
        this.nomeCurso = nomeCurso;
        this.descricao = descricao;
        this.categoria = categoria;
        this.idCurso = Curso.contCurso;
        Curso.contCurso += 1;
    }
    get IdCurso() {
        return this.idCurso;
    }
    get NomeCurso() {
        return this.nomeCurso;
    }
    get Descricao() {
        return this.descricao;
    }
    get Categoria() {
        return this.categoria;
    }
}
exports.Curso = Curso;
Curso.contCurso = 1;
