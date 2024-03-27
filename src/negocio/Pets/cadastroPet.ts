import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Cadastro from "../cadastro";

export default class CadastroPet extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        if (this.clientes.length === 0){
            console.log('Sem clientes cadastrado, cadastre um cliente primeiro.')
            return
        }
        let cliente;
        while (cliente === undefined){
            let cpf = this.entrada.receberTexto('Digite o CPF de quem perntence o Pet: ')
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)

            if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
        }
        console.log(`\nInicio de cadastro de Pet`)

        let nomePet = this.entrada.receberTexto(`Informe o nome do seu pet: `)
        let tipoPet = this.entrada.receberTexto(`Informe o tipo do seu pet: `)
        let racaPet = this.entrada.receberTexto(`Informe o raça do seu pet: `)
        let generoPet = this.entrada.receberTexto(`Informe o gênero do seu pet: `)
        let pet = new Pet(nomePet, racaPet, generoPet, tipoPet)
        cliente.getPets.push(pet)

        console.log('\nPet cadastrado')
    }
}