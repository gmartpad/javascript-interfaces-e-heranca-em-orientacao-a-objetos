import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Carlos", 10000, 12345678900);
const gerente = new Gerente("Carlinhos", 5000, 12345678901);
const cliente = new Cliente("Daniela", 12345678923, "kek");

diretor.cadastrarSenha("lel");
gerente.cadastrarSenha("lol");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "lel");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "lol");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "kek");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);