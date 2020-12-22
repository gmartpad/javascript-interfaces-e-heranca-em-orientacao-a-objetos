/**
 * Ser autenticável significa ter o método autenticar.
 * 
 * Duck typing
 */

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function; 
        //devolve true ou false dependendo se tem a função 
        //dentro do autenticavel ou não
    }

    constructor(){

    }

} 