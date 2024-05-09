import Empresa from "../../modelo/empresa"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import criaNome from "./criacaoNome"
import criacaoCPF from "./criacaoCPF"
import gerarTelefone from "./criacaoTelefone"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import { criaPet1, criaPet2, criaPet3, criaPet4 } from "./criaPet"

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

    /* CRIANDO PRODUTOS E SERVIÇOS*/
    function criarPreco(){
        let min = Math.ceil(1)
        let max = Math.floor(100)
        return Math.floor(Math.random()*(max-min)+min)
    }
    let prods = ["shampoo", "sabonete", "coleira", "pote", "casinha cachorro", "ração cachorro", "ração gato", "casinha gato", "bolinha", "vitamina", "vacina"]
    
    for (let i = 0; i<prods.length; i++){
        let nomeProd = prods[i]
        let preco = criarPreco()
        let codigo = `${i}`
        let produto = new Produto(nomeProd, preco, codigo)
        empresa.getProdutos.push(produto)
    }

    let serv = ["tosa", "banho", "vacinação", "castração", "cortar unha", "passeio"]

    for (let i = 0; i<serv.length; i++){
        let nomeServ = serv[i]
        let precoServ = criarPreco()
        let codigoServ = `${i}`
        let servico = new Servico(nomeServ, precoServ, codigoServ)
        empresa.getServicos.push(servico)
    }

    /* CRIANDO 4 PETS PARA O USUÁRIO PADRÃO */
    empresa.getClientes[0].getPets.push(criaPet1())
    empresa.getClientes[0].getPets.push(criaPet2())
    empresa.getClientes[0].getPets.push(criaPet3())
    empresa.getClientes[0].getPets.push(criaPet4())


    return empresa
/* ___________________________ */
}