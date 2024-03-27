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
import AtualizarPet from "../negocio/Pets/atualizarPet";
import DeletarPets from "../negocio/Pets/deletarPets";
import criaEmpresa from "../negocio/CriacaoAuto/criaEmpresa";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";
import AtualizarProduto from "../negocio/Produto/atualizarProduto";
import DeletarProduto from "../negocio/Produto/deletarProduto";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = criaEmpresa()
let execucao = true

while (execucao) {
    console.log(`\nEscolha uma área:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Telefones`)
    console.log(`3 - RGs`)
    console.log(`4 - Pets`)
    console.log(`5 - Produtos ou serviços`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

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

            let terceiraOpcao = entrada.receberNumero('Por favor, escolha uma opção: ')
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
            console.log('0 - Voltar')

            let quartaOpcao = entrada.receberNumero('Por favor escolha uma opção: ')
            switch(quartaOpcao){
                case 1:
                    let cadastroRG = new CadastroRg(empresa.getClientes)
                    cadastroRG.cadastrar()
                    break;
                case 2:
                    let deletarRG = new DeletarRG(empresa.getClientes)
                    deletarRG.deletar()
                    break;
                case 0:
                    break;
            }
            break;
        case 4:
            console.log('\nOque deseja com os pets?')
            console.log('1 - Cadastrar pets')
            console.log('2 - Listar pets')
            console.log('3 - Atualizar pets')
            console.log('4 - Deletar pets')
            console.log('0 - Voltar')

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
                case 3:
                    let atualizarPet = new AtualizarPet(empresa.getClientes)
                    atualizarPet.atualizar()
                    break;
                case 4:
                    let deletarPet = new DeletarPets(empresa.getClientes)
                    deletarPet.deletar()
                    break;
                case 0:
                    break;
            }
            break
        case 5:
            console.log('\nOque deseja com os produtos ou serviços?')
            console.log('1 - Cadastrar produtos ou serviços')
            console.log('2 - Listar produtos ou serviços')
            console.log('3 - Atualizar produtos ou serviços')
            console.log('4 - Deletar produtos ou serviços')
            console.log('0 - Voltar')

            let sextaOpcao = entrada.receberNumero('Escolha uma opção: ')
            switch(sextaOpcao){
                case 1:
                    let cadastroProd = new CadastroProduto(empresa.getProdutos)
                    cadastroProd.cadastrar()
                    break;
                case 2:
                    let listagemProduto = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto.listar()
                    break;
                case 3:
                    let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
                    atualizarProduto.atualizar()
                    break;
                case 4:
                    let deletarProduto = new DeletarProduto(empresa.getProdutos)
                    deletarProduto.deletar()
                    break;
                case 0:
                    break;
            }
            
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :`)
    }
}