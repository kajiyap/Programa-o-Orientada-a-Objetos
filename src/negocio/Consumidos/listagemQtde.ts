import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemQuantidade extends Listagem{
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let clienteOrd = this.clientes.sort((a,b) => (a.getProdutosConsumidos.length+a.getServicosConsumidos.length < b.getProdutosConsumidos.length+b.getServicosConsumidos.length) ? 1:-1)
        let qtdeConsumida;
        let c = 1
        console.log("posição | Nome | Qtde consumida")
        for (let i = 0; i < clienteOrd.length;i++){
            if(clienteOrd[i].getProdutosConsumidos.length > 0 || clienteOrd[i].getServicosConsumidos.length > 0){
                qtdeConsumida = clienteOrd[i].getProdutosConsumidos.length + clienteOrd[i].getServicosConsumidos.length
                console.log(c++ +" | "+ clienteOrd[i].nome +" | "+ qtdeConsumida )
            }
            
        }
    }
}