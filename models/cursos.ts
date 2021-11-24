import { Curso } from "./curso.js";
import { Categoria } from "../enum/categoria.js";

export abstract class Cursos{
  
    public static cursos: Curso[] = []

    static adiciona(curso: Curso){

       this.cursos.push(curso);
    }

    static listar(): void{
       for(let i in Cursos.cursos){
           console.log(`--------------------------`);
           console.log(`Id: ${Cursos.cursos[i].IdCurso}`);           
           console.log(`Curso: ${Cursos.cursos[i].NomeCurso}`);
           console.log(`Descrição: ${Cursos.cursos[i].Descricao}`);
           console.log(`Categoria: ${Categoria[Cursos.cursos[i].Categoria]}`);
        }    
    }

    static listarPorCategoria(categoria:number): void{
        for(let i in Cursos.cursos){
            if(Cursos.cursos[i].Categoria === categoria){
             
                    console.log(`--------------------------`);
                    console.log(`-----Curso ${Categoria[Cursos.cursos[i].Categoria]}-----`);
                    console.log(`Id: ${Cursos.cursos[i].IdCurso}`);           
                    console.log(`Curso: ${Cursos.cursos[i].NomeCurso}`);
                    console.log(`Descrição: ${Cursos.cursos[i].Descricao}`);
            
            
            }
        }  
    }

    static remover(id: number): void{
        for(let i in Cursos.cursos){
            if(Cursos.cursos[i].IdCurso === id){
                Cursos.cursos.splice(parseInt(i),1);
            }    
        } 
    }
}
