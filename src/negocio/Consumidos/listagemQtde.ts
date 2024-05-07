import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemQuantidade extends Listagem{
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let clienteOrd = this.clientes.sort((a,b) => (a.qtdeConsumida() < b.qtdeConsumida()) ? 1:-1)
        let qtdeConsumida;
        let c = 1
        console.log("posição | Nome | Qtde consumida")
        for (let i = 0; i < 10;i++){
            if(clienteOrd[i].qtdeConsumida() > 0){
                qtdeConsumida = clienteOrd[i].qtdeConsumida()
                console.log(c++ +" | "+ clienteOrd[i].nome +" | "+ qtdeConsumida )
            }
            
        }
    }
}