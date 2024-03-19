import Entrada from "../../io/entrada";
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

        let nomeProd = this.entrada.receberTexto('Informe o nome do produto')
        let produto = new Produto(nomeProd)
        this.produtos.push(produto)

        console.log(`Fim de cadastro de produto.`)
    }
}