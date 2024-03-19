import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroTelefone extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public cadastrar(): void {
        if (this.clientes.length === 0){
            console.log('Não há clientes cadastrados')
            return
        }

        console.log('\nInicio de cadastro de telefone')

        let cliente;
        while (cliente === undefined){
            let cpf = this.entrada.receberTexto('Digite o CPF de quem perntence o número: ')
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)

            if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
        }

        let ddd = this.entrada.receberTexto('Informe o DDD do telefone: ')
        let numero = this.entrada.receberTexto('Informe o número do telefone: ')

        let telefone = new Telefone(ddd, numero)
        cliente.getTelefones.push(telefone)
        console.log(`\nCadastro de telefone concluído.`)
    }
}