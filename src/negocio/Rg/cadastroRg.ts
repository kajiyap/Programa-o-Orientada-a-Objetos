import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Cadastro from "../cadastro";
import RG from "../../modelo/rg";

export default class CadastroRg extends Cadastro{
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

        let valorRg = this.entrada.receberTexto('Por favor informe o número do seu RG: ')
        let dataRG = this.entrada.receberTexto('Por favor informe a data de emissão do seu RG (dd/mm/yyyy): ')
        let partesDataRG = dataRG.split('/')
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)

        let rg = new RG (valorRg, dataEmissaoRG)
        cliente.getTelefones.push(rg)
        console.log(`\nCadastro de telefone concluído.`)   
    }
}