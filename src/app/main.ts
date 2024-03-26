import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/Cliente/atualizarCliente";
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import CadastroPet from "../negocio/Pets/cadastroPet";
import CadastroProduto from "../negocio/Produto/cadastroProduto";
import CadastroRg from "../negocio/Rg/cadastroRg";
import CadastroTelefone from "../negocio/Telefone/cadastroTelefone";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import DeletarCliente from "../negocio/Cliente/deletarCliente";
import ListagemTelefone from "../negocio/Telefone/listagemTelefone";
import CPF from "../modelo/cpf";
import criacaoCPF from "../negocio/CriacaoAuto/criacaoCPF";
import criaNome from "../negocio/CriacaoAuto/criacaoNome";
import AtualizarTelefone from "../negocio/Telefone/atualizarTelefone";
import DeletarTelefone from "../negocio/Telefone/deletarTelefone";
import DeletarRG from "../negocio/Rg/deletarRg";
import ListagemPets from "../negocio/Pets/listagemPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

/* Criação automática */
/* Usuário de dados fáceis para testes */
let data = new Date(2022, 12, 25)
let cpf = new CPF('12345678910', data)
let cli = new Cliente('pedro','kajiya', cpf)
empresa.getClientes.push(cli)
/* Clientes ALEATÓRIOS */
for (let c = 0; c<=30; c++){
    let clienteAleatorio = new Cliente(criaNome(), criaNome(), criacaoCPF())
    empresa.getClientes.push(clienteAleatorio)
}

/* ___________________________ */

while (execucao) {
    console.log(`\nEscolha uma área:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Telefones`)
    console.log(`3 - RGs`)
    console.log(`4 - Pets`)
    console.log(`5 - Produtos`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            console.log('\nO que deseja com os clientes:')
            console.log('1 - Cadastrar cliente')
            console.log('2 - Listagem cliente')
            console.log('3 - Atualizar cliente')
            console.log('4 - Deletar cliente')
            console.log('0 - Voltar')

            let segundaOpcao = entrada.receberNumero('Por favor, escolha uma opção: ')
            switch (segundaOpcao){
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listagemClientes = new ListagemClientes(empresa.getClientes)
                    listagemClientes.listar()
                    break;
                case 3:
                    let atualizarCliente = new AtualizarCliente(empresa.getClientes)
                    atualizarCliente.atualizar()
                    break;
                case 4:
                    let deletarCliente = new DeletarCliente(empresa.getClientes)
                    deletarCliente.deletar()
                    break;
                case 0:
                    break;
            }
            break;
        case 2:
            console.log('\nO que deseja com os clientes:')
            console.log('1 - Cadastrar telefone')
            console.log('2 - Listagem telefone')
            console.log('3 - Atualizar telefone')
            console.log('4 - Deletar telefone')
            console.log('0 - Voltar')

            let terceiraOpcao = entrada.receberNumero('\nPor favor, escolha uma opção: ')
            switch (terceiraOpcao){
                case 1:
                    let cadastroTel = new CadastroTelefone(empresa.getClientes)
                    cadastroTel.cadastrar()
                    break;
                case 2:
                    let listagemTel = new ListagemTelefone(empresa.getClientes)
                    listagemTel.listar()
                    break;
                case 3:
                    let atualizarTel = new AtualizarTelefone(empresa.getClientes)
                    atualizarTel.atualizar()
                    break;
                case 4: 
                    let deletarTel = new DeletarTelefone(empresa.getClientes)
                    deletarTel.deletar()
                    break;
                case 0: 
                    break
            }
            break;
        case 3:
            console.log('\nO que deseja com os RGs?')
            console.log('1 - Cadastrar novo RG.')
            console.log('2 - Deletar RG.')

            let quartaOpcao = entrada.receberNumero('\nPor favor escolha uma opção: ')
            switch(quartaOpcao){
                case 1:
                    let cadastroRG = new CadastroRg(empresa.getClientes)
                    cadastroRG.cadastrar()
                    break;
                case 2:
                    let deletarRG = new DeletarRG(empresa.getClientes)
                    deletarRG.deletar()
                    break;
            }
            break;
        case 4:
            console.log('\nOque deseja com os pets?')
            console.log('1 - Cadastrar pets')
            console.log('2 - Listar pets')
            console.log('3 - Atualizar pets')
            console.log('4 - Deletar pets')

            let quintaOpcao = entrada.receberNumero('Por favor, escolha uma opção: ')
            switch(quintaOpcao){
                case 1:
                    let cadastroPet = new CadastroPet(empresa.getClientes)
                    cadastroPet.cadastrar()
                    break;
                case 2:
                    let listagemPet = new ListagemPets(empresa.getClientes)
                    listagemPet.listar()
                    break;
            }
            break
        case 5:
            let cadastroProd = new CadastroProduto(empresa.getProdutos)
            cadastroProd.cadastrar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :`)
    }
}