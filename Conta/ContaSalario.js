import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
    }

    sacar(valorSacado){

        let taxa = 1.01;
        return this._sacar(taxa, valorSacado);

    }

}