import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemValor extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let clienteOrd = this.clientes.sort((a,b)=> (a.valorConsumido() < b.valorConsumido()? 1:-1))

        let valorConsumido;
        let c = 1
        console.log("posição | Nome | Valor consumido")
        for (let i = 0; i < 5;i++){
            if(clienteOrd[i].valorConsumido() > 0){
                valorConsumido = clienteOrd[i].valorConsumido()
                console.log(c++ +" | "+ clienteOrd[i].nome +" | "+ valorConsumido )
            }
            
        }
    }
}