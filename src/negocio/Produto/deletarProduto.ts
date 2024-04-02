import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "../deletar";

export default class DeletarProduto extends Deletar{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        if (this.produtos.length === 0){
            console.log('Não há produtos cadastrados, cadestre primeiro.')
        }
        else{
            console.log('Inicio da exclusão de produtos ou serviços')

            let prodDelete = this.entrada.receberTexto('Digite o código do produto que deseja deletar: ')
            let confirmacao = this.entrada.receberNumero(`Você tem certeza que deseja excluir esses dados(1-Sim ou 0-Não)?`)
        
            if(confirmacao === 1){
                for (var i=0; i<=this.produtos.length-1; i++){
                    if (this.produtos[i].getCodigo == prodDelete){
                        this.produtos.splice(i, 1)
                        console.log('Exclusão concluída com sucesso!')
                    }
                }
            }
            else{
                console.log('Encerrando')
            }
        }
    }
}
