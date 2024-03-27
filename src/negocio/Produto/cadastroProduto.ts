import Entrada from "../../io/entrada";
import ProdutoServico from "../../modelo/produto";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }

    public cadastrar(): void {
        console.log(`Inicio de cadastro de produto.`)

        let nomeProd = this.entrada.receberTexto('Informe o nome do novo produto/serviço: ')
        let preco = this.entrada.receberNumero('Informe o preço de comercialização do produto: ')
        let codigo = this.entrada.receberTexto('Informe o código do produto ou serviço: ')
        let produto = new ProdutoServico(nomeProd, preco, codigo)
        this.produtos.push(produto)

        console.log(`Fim de cadastro de produto.`)
    }
}