import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log('\nInicio do cadastro de serviços')

        let nome = this.entrada.receberTexto('Informe o nome do serviço: ')
        let preco = this.entrada.receberNumero('Informe o preço do serviço: ')
        let codigo = this.entrada.receberTexto('Informe o codigo do serviço: ')

        let servico = new Servico(nome, preco, codigo)

        this.servicos.push(servico)
    }
}