import Empresa from "../../modelo/empresa"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import criaNome from "./criacaoNome"
import criacaoCPF from "./criacaoCPF"
import gerarTelefone from "./criacaoTelefone"

export default function criaEmpresa(): Empresa{
    let empresa = new Empresa()
    /* Criação automática */

    /* criando usuário de dados fáceis para testes */
    let data = new Date(2022, 12, 25)
    let cpf = new CPF('12345678910', data)
    let cli = new Cliente('pedro','kajiya', cpf)
    empresa.getClientes.push(cli)

    /* CRIANDO 30 CLIENTES ALEATÓRIOS */
    for (let c = 0; c<=30; c++){
        let clienteAleatorio = new Cliente(criaNome(), criaNome(), criacaoCPF())
        empresa.getClientes.push(clienteAleatorio)
    }

    /* CRIANDO 1 TELEFONE ALEATÓRIO PARA CADA CLIENTE */
    for (let i = 0; i<empresa.getClientes.length; i++){
        empresa.getClientes[i].getTelefones.push(gerarTelefone())
    }
    return empresa
/* ___________________________ */
}