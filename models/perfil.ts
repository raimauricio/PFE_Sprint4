export abstract class Perfil{

    constructor(
        readonly id: number,
        private email: string,     
        private senha: string,
        protected statusLogin = false

    ){}

    get Email(){
        return this.email;
    }

    get Senha(){
        return this.senha;
    }

    abstract logar(chave:string, senha:string): void;

    logoff(){
        if(this.statusLogin === true){

            this.statusLogin = false;
            console.log('Logoff realizado.');  
            
        } 
    }
}