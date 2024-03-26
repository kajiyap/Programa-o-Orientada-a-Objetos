import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DeletarTelefone extends Deletar{
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
            console.log(`\nInicio de exclusão de telefone`)

            let cpf = this.entrada.receberTexto('Digite o CPF do dono do telefone que você deseja apagar: ')
            let num = this.entrada.receberTexto('Digite o número de telefone (sem DDD) que você deseja excluir: ')

            let confirmacao = this.entrada.receberNumero(`Você tem certeza que deseja excluir esses dados(1-Sim ou 0-Não)?`)
        
            if(confirmacao === 1){
                for (var i=0; i<=this.clientes.length-1; i++){
                    if (this.clientes[i].getCpf.getValor == cpf){
                        for (let c=0; c<=this.clientes[i].getTelefones.length; c++ ){
                            if (num === this.clientes[i].getTelefones[c].getNumero){
                                this.clientes[i].getTelefones.splice(c, 1)
                            }
                        }
                    }
                }
            }
            console.log('telefone excluído com sucesso!')
        }
    }
}