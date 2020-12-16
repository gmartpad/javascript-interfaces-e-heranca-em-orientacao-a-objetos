export class Conta {
    
    constructor(saldoInicial, cliente, agencia){
        // this._tipo = tipo;
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //------------------------------------------------------------

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    //------------------------------------------------------------

    sacar(valorSacado){

        let taxa = 1;

        // switch(this._tipo){
        //     case "corrente":
        //         taxa = 1.1;
        //         break;
        //     case "salario":
        //         taxa = 1.05;
        //         break;
        //     case "empresarial":
        //         taxa = 1.15;
        //         break;
        //     default:
        //         taxa = 1;
        //         break;
        // }

        let valorPosTaxa = taxa * valorSacado;

        if(this._saldo < valorPosTaxa){
            return;
        }
        this._saldo -= valorPosTaxa;
        return valorPosTaxa;
    }

    depositar(valorDepositado){
        if(valorDepositado <= 0){
            return;
        }
        this._saldo += valorDepositado;
        return valorDepositado;
    }

    transferir(valorTransferido, contaBeneficiaria){
        // if(this._tipo == "salario"){
        //     return;
        // }
        const valorSacado = this.sacar(valorTransferido);
        if(isNaN(valorSacado)){
            console.error("Não foi possível realizar transferência, saldos insuficientes")
            return;
        }
        contaBeneficiaria.depositar(valorSacado);
    }

}