import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemPets extends Listagem{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        let cliente;
        while (cliente === undefined){
            let cpf = this.entrada.receberTexto('Digite o CPF de quem você quer listar os pets: ')
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)

            if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
        }
        console.log(`\nLista de todos os pets do cliente ${cliente.nome}`)
        cliente.getPets.forEach(pet =>{
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log(`Genero: ${pet.getGenero}`)
            console.log(`Nome: ${pet.getNome}`)
            console.log('\n-----------------------------------------')
        }
        )
    }
}