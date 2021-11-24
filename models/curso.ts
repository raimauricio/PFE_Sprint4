import { Categoria } from "../enum/categoria.js";

export class Curso{

    static contCurso = 1;
    private idCurso:number

    constructor(
        
        private nomeCurso: string,
        private descricao: string,
        private categoria: Categoria

    ){
        this.idCurso = Curso.contCurso;
        Curso.contCurso +=1;
    }

    get IdCurso(){

        return this.idCurso;

    }

    get NomeCurso(){
        
        return this.nomeCurso;
    }

    get Descricao(){
        
        return this.descricao;
    }

    get Categoria(){

        return this.categoria;
    }

}