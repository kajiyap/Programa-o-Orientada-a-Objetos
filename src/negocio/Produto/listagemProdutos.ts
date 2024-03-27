import ProdutoServico from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<ProdutoServico>
    
    constructor(produtos: Array<ProdutoServico>){
        super()
        this.produtos = produtos
    }

    public listar(): void {
        if(this.produtos.length === 0){
            console.log('Não há produtos cadastrados, cadestre primeiro')
        }
        else{
            console.log('\nLista de todos os produtos:')
            this.produtos.forEach(produto => {
            console.log('Tipo: '+produto.getTipo)
            console.log('Nome: '+produto.getNome)
            console.log('Preço: '+produto.getPreco)
            console.log('Codigo: '+produto.getCodigo)
            console.log('------------------------------------')
        }

        )
        }
        
    }
}