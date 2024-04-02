import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../atualizar";

export default class AtualizarProduto extends Atualizar{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        if(this.produtos.length === 0){
            console.log('\nNão há produtos cadastrados')
        }
        else{
            console.log('\nInicio de atualização dos dados de um produto') 
            console.log('\nDados que não precisam de alteração podem ser deixados em branco.')
            
            let produto;
            while (produto === undefined){
                let codigo = this.entrada.receberTexto('Digite o codigo do produto ou serviço: ')
                produto = this.produtos.find(e => e.getCodigo === codigo)

                if (!produto) {console.log(`Codigo não encontrado, tente novamente.`)}
            } 

            let novoNome = this.entrada.receberTexto('Informe o novo nome do produto: ')
            let novoPreco = this.entrada.receberNumero('Informe o novo preço do produto: ')
            let novoCodigo = this.entrada.receberTexto('Informe o novo código do produto: ')

            if(novoNome != null){produto.setNome = novoNome}
            if(novoPreco != null){produto.setPreco = novoPreco}
            if(novoCodigo != null){produto.setCodigo = novoCodigo}
        }
    }
        
}