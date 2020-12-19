import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;
    
    //------------------------------------------------------------
    
    // #saldo = 0; 
    // https://github.com/tc39/proposal-class-fields#private-fields

    //------------------------------------------------------------

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // teste(){
    //     super.teste();
    //     console.log("teste na classe conta corrente");
    // }

    //------------------------------------------------------------

}