import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemConsPet extends Listagem{
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor (produtos: Array<Produto>, servicos: Array<Servico>){
        super()
        this.produtos = produtos
        this.servicos = servicos
    }

    public listar(): void {

        let produtosRaca;
        for (let i of this.produtos){
            produtosRaca = [produtosRaca, ...i.contarRacas()]
        }
        let servicosRaca;
        for (let i of this.produtos){
            servicosRaca = [servicosRaca, ...i.contarRacas()]
        }
        let totalRacas = [...produtosRaca, ...servicosRaca]

        let produtosTipo;
        for (let i of this.produtos){
            produtosTipo = [produtosTipo, ...i.contarTipos()]
        }
        let servicosTipo;
        for (let i of this.servicos){
            servicosTipo = [servicosTipo, ...i.contarTipos()]
        }
        let totalTipos = [...servicosTipo, ...produtosTipo]

        console.log(totalRacas)

    }
}