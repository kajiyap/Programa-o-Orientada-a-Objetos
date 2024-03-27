import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DeletarCliente extends Deletar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar(): void {
        if (this.clientes.length == 0){
            console.log('Não tem clientes cadastrados')
        }
        else{
        console.log(`\nInicio de exclusão de cliente`)

        let CPFdelet = this.entrada.receberTexto('Digite o CPF que deseja excluir:')
        let confirmacao = this.entrada.receberNumero(`Você tem certeza que deseja excluir esses dados(1-Sim ou 0-Não)?`)
        
        if(confirmacao === 1){
            for (var i=0; i<=this.clientes.length-1; i++){
                if (this.clientes[i].getCpf.getValor == CPFdelet){
                    this.clientes.splice(i, 1)
                    console.log('Exclusão concluída com sucesso!')
                    }
                }
            }
        }
    }
}