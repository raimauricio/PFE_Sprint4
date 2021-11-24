import { Categoria } from "../enum/categoria.js";
import { Curso } from "./curso.js";
import { Cursos } from "./cursos.js";
import { Perfil } from "./perfil.js";
import { PerfilUser } from "./perfilUser.js";

export class PerfilAdmin extends Perfil{

    static contUser = 1;

    constructor(id: number, email: string, senha:string){
        super(id, email, senha);
    }


    logar(chave:string, senha:string){

        if(this.Email === chave && this.Senha === senha){

            this.statusLogin = true;
            console.log('Perfil logado.');
        }else{

            console.log('Falha na autenticação.');

        }

    }

  
    
    cadUsuario(email:string, senha: string, matricula: number, usuario: string){
        
        if(!this.statusLogin){
            console.log('Faça o login.')
           
        }else{

            return new PerfilUser(email, senha, matricula, usuario);
            
        }
    }

    addCurso(nome: string, descricao: string, categoria: Categoria){ 

        if(this.statusLogin){
            
            Cursos.adiciona(new Curso(nome, descricao, categoria));
            console.log('Curso adicionado.');
           
        }else{

            console.log('Faça o login.');
        }
    }

    remCurso(id: number){

        if(this.statusLogin){
            
            Cursos.remover(id);
            console.log('Curso removido.');
            
        }else{

            console.log('Faça o login.')
        }
    }

}