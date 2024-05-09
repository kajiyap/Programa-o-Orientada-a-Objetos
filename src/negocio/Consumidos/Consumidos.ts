import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class Consumidos {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>){
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public consumir(): void {
        if (this.clientes.length > 0 && this.produtos.length > 0 || this.servicos.length > 0){
            console.log('Registro de compras realizadas.')

            var cliente;
            while (cliente === undefined){
                let cpf = this.entrada.receberTexto('Digite o CPF de quem realizou a compra: ')
                cliente = this.clientes.find(e => e.getCpf.getValor === cpf)
    
                if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
            } 

            var pet;
            while (pet === undefined){
                let nomePet = this.entrada.receberTexto('Digite o nome do pet que utilizará esse produto/seviço: ')
                pet = cliente.getPets.find(e => e.getNome === nomePet)

                if (!pet) {console.log('Pet não encontrado, tente novamente')}
            }

            let continua = 1;
            while(continua == 1){
                let compra = this.entrada.receberNumero('Informe o que o cliente comprou(1 para produto ou 2 para serviço): ')
                
                
                    switch(compra){
                        case 1:/* COMPRA DE PRODUTO */
                            console.table(this.produtos)
                            console.log('\n ')
                            let produto;
                            while (produto === undefined){
                                let codigoProd = this.entrada.receberTexto('Digite o código do produto adquirido: ')
                                produto = this.produtos.find(e => e.getCodigo === codigoProd)
                                produto.comprasFeitas = produto.comprasFeitas + 1
                                produto.racasCompras.push(pet.getRaca)
                                produto.tiposCompras.push(pet.getTipo)
                    
                                if (!produto) {console.log(`Código não encontrado, tente novamente.`)}
                            }
                            cliente.getProdutosConsumidos.push(produto)
                            console.log('Venda concluída!')
                            break;
                            
                        case 2:/* COMPRA DE SERVIÇO */
                            console.table(this.servicos)
                            console.log('\n ')
                            let servico;
                            while (servico === undefined){
                                let codigoServ = this.entrada.receberTexto('Digite o código do serviço adquirido: ')
                                servico = this.servicos.find(c => c.getCodigo === codigoServ)
                                servico.comprasFeitas = servico.comprasFeitas + 1
                                servico.racasCompras.push(pet.getRaca)
                                servico.tiposCompras.push(pet.getTipo)
                    
                                if (!servico) {console.log(`Código não encontrado, tente novamente.`)}
                            }  
                            cliente.getServicosConsumidos.push(servico)
                            console.log('Venda concluída!')
                            break;
                    }
                continua = this.entrada.receberNumero('Deseja cadastrar mais vendas? (1 - sim ou 2 - não)')
                if (continua != 1){ break}
            }
            
        }
        else{
            console.log('Você não possuí clientes, produtos ou serviços cadastrados.')
        }
    }
}