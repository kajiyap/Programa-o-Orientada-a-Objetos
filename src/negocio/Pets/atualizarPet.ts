import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "../atualizar";

export default class AtualizarPet extends Atualizar{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        
        console.log('\nInicio de atualização dos dados de pet: ')
        let cliente;
        while (cliente === undefined){
            let cpf = this.entrada.receberTexto('Digite o CPF de quem perntence o Pet: ')
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)

            if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
        }        
        
        if(cliente.getPets.length === 0){
            console.log('Não há pets cadastrados, cadastre primeiro')
        }
        else{
            let pet = this.entrada.receberTexto('Digite o nome do pet que deseja alterar os dados: ') 
            console.log('\n')   
            for (let i = 0; i<cliente.getPets.length; i++){
                if (pet === cliente.getPets[i].getNome){
                    console.log('achei o nome')
                    console.log(cliente.getPets[i].getGenero)
                    let novoNome = this.entrada.receberTexto('Digite o novo nome do seu pet: ')
                    let novoTipo = this.entrada.receberTexto('Digite o novo tipo do seu pet: ')
                    let novaRaca = this.entrada.receberTexto('Digite a nova raça do seu pet: ')
                    let novoGenero = this.entrada.receberTexto('Digite o novo genero do seu pet: ')

                    cliente.getPets[i].setNome = novoNome
                    cliente.getPets[i].setTipo = novoTipo
                    cliente.getPets[i].setGenero = novoGenero
                    cliente.getPets[i].setRaca = novaRaca

                    console.log('\nAtuaização de pets concluída!')
                
                }
            }
        }
    }
}