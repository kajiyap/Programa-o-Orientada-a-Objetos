import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../atualizar";

export default class AtualizarServicos extends Atualizar{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        if(this.servicos.length === 0){
            console.log('\nNão há serviços cadastrados')
        }
        else{
            console.log('\nInicio de atualização dos dados de um serviço') 
            console.log('\nDados que não precisam de alteração podem ser deixados em branco.')
            
            let servico;
            while (servico === undefined){
                let codigo = this.entrada.receberTexto('Digite o codigo do servico ou serviço: ')
                servico = this.servicos.find(e => e.getCodigo === codigo)

                if (!servico) {console.log(`Codigo não encontrado, tente novamente.`)}
            } 

            let novoNome = this.entrada.receberTexto('Informe o novo nome do servico: ')
            let novoPreco = this.entrada.receberNumero('Informe o novo preço do servico: ')
            let novoCodigo = this.entrada.receberTexto('Informe o novo código do servico: ')

            if(novoNome != null){servico.setNome = novoNome}
            if(novoPreco != null){servico.setPreco = novoPreco}
            if(novoCodigo != null){servico.setCodigo = novoCodigo}
        }
    }
}