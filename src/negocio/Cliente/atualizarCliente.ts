import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
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
        let CPFMudar = this.entrada.receberTexto('Por favor informe o CPF do cliente que alterará os dados:')
        let novoNome = this.entrada.receberTexto('Informe o novo nome:')
        let novoNomeSocial = this.entrada.receberTexto("Informe o novo nome social:")
        let novoValor = this.entrada.receberTexto("Informe o novo número de CPF:")
        let novaData = this.entrada.receberTexto('Informe a nova data de emissão do CPF, no padrão dd/mm/yyyy:')
        let partesData = novaData.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let novaDataEmissao = new Date(ano, mes, dia)

        for(var i=0; i<=this.clientes.length; i++){
            if(this.clientes[i].nome === CPFMudar){
                if(novoNome != null){
                    this.clientes[i].setNome = novoNome
                }
                if (novaDataEmissao != null){
                    this.clientes[i].setDataCpf = novaDataEmissao
                }
                if (novoValor != null){
                    this.clientes[i].setValorCpf = novoValor
                }
                if (novoNomeSocial != null){
                    this.clientes[i].setNomeSocial = novoNomeSocial
                }
                
                
            }
        }
    }
    
}