import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";

export default class DeletarPets extends Deletar{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log('\nDeletar Pets: ')
        
        let cliente;
        while (cliente === undefined){
            let cpf = this.entrada.receberTexto('Digite o CPF de quem perntence o Pet: ')
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)

            if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
        }   
        
        if(cliente.getPets.length === 0){
            console.log('Não existem pets cadastrados, cadestre primeiro')
        }
        else{
            let petDelet = this.entrada.receberTexto('Informe o nome do pet que deseja deletar: ')

        let confirmacao = this.entrada.receberNumero('Tem certeza que deseja excluir esse pet? (1 - sim ou 0 - não)')

        if (confirmacao === 1){
            for(let i=0; i<=cliente.getPets.length-1; i++){
                if(petDelet===cliente.getPets[i].getNome){
                    cliente.getPets.splice(i, 1)
                    console.log('\nDeletado com sucesso!')
                }
            }
        }
        }

        
    }
}