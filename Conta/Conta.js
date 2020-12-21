//Classe abstrata
export class Conta {
    
    constructor(saldoInicial, cliente, agencia){
        // this._tipo = tipo;
        if(this.constructor == Conta){
            throw new Error("Não instancie um objeto Conta diretamente - Classe abstrata")
        }
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

    // Método Abstrato
    sacar(valorSacado){

        // let taxa = 1;
        // return this._sacar(taxa, valorSacado);

        throw new Error("O método 'sacar' da Conta é abstrato");

    }
    
    _sacar(taxa, valorSacado){
        let valorPosTaxa = taxa * valorSacado;
        if(this._saldo < valorPosTaxa){
            return 0;
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

    // teste(){
    //     console.log("teste na classe conta");
    // }

}