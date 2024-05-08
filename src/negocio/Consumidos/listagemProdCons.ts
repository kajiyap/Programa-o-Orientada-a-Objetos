import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemProd extends Listagem{
    private servicos: Array<Servico>
    private produtos: Array<Produto>
    private listaTotal: Array<string>

    constructor (produtos: Array<Produto>, servicos: Array<Servico>){
        super()
        this.produtos = produtos
        this.servicos = servicos
        this.listaTotal = []
    }

    public listar(): void {
        let servicosOrd = this.servicos.sort((a,b)=>(a.comprasFeitas<b.comprasFeitas? 1:-1))
        let produtosOrd = this.produtos.sort((a,b)=>(a.comprasFeitas<b.comprasFeitas? 1:-1))

        /* LISTA DE SERVIÇOS */
        let servicosFeitos
        let c = 1
        console.log('\nLista de serviços')
        console.log("posição | Nome | Quantidade consumida")
        for (let i = 0; i < servicosOrd.length;i++){
            if(servicosOrd[i].comprasFeitas > 0){
                servicosFeitos = servicosOrd[i].comprasFeitas
                console.log(c++ +" | "+ servicosOrd[i].getNome +" | "+ servicosFeitos )
            }
            
        }

        /* LISTA DE PRODUTOS */
        let produtosUsados
        let d = 1
        console.log('\nLista de produtos')
        console.log("posição | Nome | Quantidade consumida")
        for (let i = 0; i < produtosOrd.length; i++){
            if(produtosOrd[i].comprasFeitas>0){
                produtosUsados = produtosOrd[i].comprasFeitas
                console.log(d++ +" | "+ produtosOrd[i].getNome +" | "+ produtosUsados )
            }
        }
    }
}