import { IPerfilUser } from "../interfaces/IPerfilUser.js";
import { Curso } from "./curso.js";
import { Cursos } from "./cursos.js";
import { Perfil } from "./perfil.js";

export class PerfilUser extends Perfil implements IPerfilUser{

    matricula: number;
    usuario: string;
    private cursosFavoritos: Curso[] = [];
    static contUser = 1;
    
    constructor(email:string, 
        senha: string, matricula: number, usuario: string){
        
        super(PerfilUser.contUser,email, senha);
            
        this.matricula = matricula;
        this.usuario = usuario;
        PerfilUser.contUser += 1;
    }

    set Matricula(matricula:number){

        this.matricula = matricula;
    }

    set Usuario(usuario: string){

        this.usuario = usuario;
    }

    logar(chave:string, senha:string){

        if(this.usuario === chave && this.Senha === senha){

            this.statusLogin = true;
            console.log('Perfil logado.');
        }else{

            console.log('Falha na autenticação.');

        }

    }

    assitir(id: number){
        if(this.statusLogin){
           
            let curso
            for(let i in Cursos.cursos){
                
                if(Cursos.cursos[i].IdCurso === id){

                    curso = Cursos.cursos[i].NomeCurso;
                }
                
            }
            console.log(`Assitindo curso ${curso} ...`);
           
        }else{

            console.log('Faça o login.')
        }
        
    }

    listarCursos(){
        if(this.statusLogin){
           
            Cursos.listar();
           
        }else{

            console.log('Faça o login.')
        }
    }

    listarPorCategoria(categoria: number){
        Cursos.listarPorCategoria(categoria);
    }
    
    favoritar(id: number){
        if(this.statusLogin){
           
            for(let i in Cursos.cursos){
            
                if(Cursos.cursos[i].IdCurso === id){
    
                    this.cursosFavoritos.push(Cursos.cursos[i])
                }
                 
            }
           
        }else{

            console.log('Faça o login.');
        }        
    }

    desfavoritar(id: number){


        if(this.statusLogin){
            
            for(let i in this.cursosFavoritos){
        
                if(this.cursosFavoritos[i].IdCurso === id){
    
                    this.cursosFavoritos.splice(parseInt(i),1)
                }    
            }
            
        }else{

            console.log('Faça o login.')
        }
    }

    listarFavoritos(){
        if(this.statusLogin){
           
            console.log(`Cursos Favoritos: `);
            for(let i in this.cursosFavoritos){
                
                console.log(`${this.cursosFavoritos[i].NomeCurso}`);
                 
            }
           
        }else{

            console.log('Faça o login.');
        }
        
    }

    
}