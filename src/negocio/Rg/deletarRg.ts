import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DeletarRG extends Deletar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public deletar(): void {
        if (this.clientes.length === 0){
            console.log('Sem clientes cadastrados')
        }

        else{
            console.log('\nInicio de processo para excluir RG')
            let cpf = this.entrada.receberTexto('Digite o CPF de quem você deseja excluir o RG: ')
            let rg = this.entrada.receberTexto('Digite o RG que deseja excluir: ')
            for(let i=0; i<=this.clientes.length-1; i++){
                if (this.clientes[i].getCpf.getValor===cpf){
                    for (let d=0; d<=this.clientes[i].getRgs.length-1; d++){
                        if (this.clientes[i].getRgs[d].getValor===rg){
                            this.clientes[i].getRgs.splice(d, 1)
                            console.log('RG deletado com sucesso!')
                        }
                    }
                }
            }
        }
    }
}