import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "../atualizar";

export default class AtualizarCliente extends Atualizar{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public atualizar(): void {
        console.log(`\nInicio de atualização de cadastro dos clientes`);
        console.log(`\nO que não precisar ser altrerado, poderá ser deixado em branco`);

        /*Alterando dados do cliente (nome, nome social, cpf)*/ 
        let cliente;
        while (cliente === undefined){
            let cpf = this.entrada.receberTexto('Digite o CPF de quem você deseja alterar os dados: ')
            cliente = this.clientes.find(e => e.getCpf.getValor === cpf)

            if (!cliente) {console.log(`CPF não encontrado, tente novamente.`)}
        }

        let novoNome = this.entrada.receberTexto('Informe o novo nome:')
        let novoNomeSocial = this.entrada.receberTexto("Informe o novo nome social:")
        let novoValor = this.entrada.receberTexto("Informe o novo número de CPF:")
        let novaData = this.entrada.receberTexto('Informe a nova data de emissão do CPF, no padrão dd/mm/yyyy:')
        if(novaData!= null){
            let partesData = novaData.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            var novaDataEmissao = new Date(ano, mes, dia)
            cliente.setDataCpf = novaDataEmissao
        }
        if(novoNome != null){
            cliente.setNome = novoNome
        }
        if (novoValor != null){
            cliente.setValorCpf = novoValor
        }
        if (novoNomeSocial != null){
            cliente.setNomeSocial = novoNomeSocial
        } 
    }
    
}