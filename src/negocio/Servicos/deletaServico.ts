import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deletar from "../deletar";

export default class DeletaServico extends Deletar{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        if (this.servicos.length === 0){
            console.log('Sem serviços cadastrados.')
        }
        else{
            let servico;
            while (servico === undefined){
                let codigo = this.entrada.receberTexto('Digite o codigo do serviço que deseja deletar: ')
                servico = this.servicos.find(e => e.getCodigo === codigo)

                if (!servico) {console.log(`Codigo não encontrado, tente novamente.`)}
            }
            let confirmacao = this.entrada.receberNumero(`Você tem certeza que deseja excluir esses dados(1-Sim ou 0-Não)?`)
        
            if(confirmacao === 1){
                for (var i=0; i<=this.servicos.length-1; i++){
                    if (this.servicos[i].getCodigo == servico.getCodigo){
                        this.servicos.splice(i, 1)
                        console.log('Exclusão concluída com sucesso!')
                    }
                }
            }
            
            else{
                console.log('Encerrando')
            }
        }
    }
}