import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Jose", 11122233309);

const contaCorrenteJose = new ContaCorrente(cliente1, 1001);

// console.log(contaCorrenteJoana);

contaCorrenteJose.depositar(500);
contaCorrenteJose.depositar(-1);
contaCorrenteJose.sacar(100);

console.log(contaCorrenteJose);

// contaCorrenteJose.transferir(20, contaCorrenteJoana)

const contaPoupancaJose = new ContaPoupanca(contaCorrenteJose.sacar(30), cliente1, contaCorrenteJose.agencia)

console.log(contaPoupancaJose);
console.log(contaCorrenteJose);
