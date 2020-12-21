import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Carlos", 10000, 12345678900);
const gerente = new Gerente("Carlinhos", 5000, 12345678901);

diretor.cadastrarSenha("lel");

const estaLogado = SistemaAutenticacao.login(diretor, "lel");

console.log(estaLogado);