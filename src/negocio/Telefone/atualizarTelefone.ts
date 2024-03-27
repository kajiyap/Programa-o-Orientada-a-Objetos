import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "../atualizar";

export default class AtualizarTelefone extends Atualizar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        if (this.clientes.length ===0){
            console.log('Não há clientes cadastrados')
        }
        console.log('\nInicio de atualização de telefone: ')
        let cpf = this.entrada.receberTexto('Informe o CPF do dono do número de telefone: ')
        
        for (let i = 0; i<=this.clientes.length-1; i++){
            if (this.clientes[i].getCpf.getValor == cpf){
                let num = this.entrada.receberTexto('Informe o número que deseja mudar (sem DDD): ')
                for (let a = 0; a<this.clientes[i].getTelefones.length; a++){
                    if (this.clientes[i].getTelefones[a].getNumero == num){
                        let novoDDD = this.entrada.receberTexto('Informe o novo DDD: ')
                        let novoNumero = this.entrada.receberTexto('Informe o novo número: ')
                        this.clientes[i].getTelefones[a].setNumero = novoNumero
                        this.clientes[i].getTelefones[a].setDdd = novoDDD

                        console.log('CONCLUIDO')
                    }
                }
            }

        }
    }
}