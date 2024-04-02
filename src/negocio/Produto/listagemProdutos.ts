import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    
    constructor(produtos: Array<Produto>){
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
            console.log('Nome: '+produto.getNome)
            console.log('Preço: '+produto.getPreco)
            console.log('Codigo: '+produto.getCodigo)
            console.log('------------------------------------')
        }

        )
        }
        
    }
}