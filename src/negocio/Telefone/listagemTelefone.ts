import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemTelefone extends Listagem{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public listar(): void {
        let cpf = this.entrada.receberTexto('Digite o CPF do cliente de que deseja o número: ')
        
        for (var i=0; i<= this.clientes.length-1; i++){
            if (cpf === this.clientes[i].getCpf.getValor){
                console.log(`\nLista de telefones do cliente: ${this.clientes[i].nome}`)
                this.clientes[i].getTelefones.forEach(telefone =>{
                    console.log(`DDD: ${telefone.getDdd}`)
                    console.log(`DDD: ${telefone.getNumero}`)
                    console.log('---------------------------------------------------')
                }

                )
            }
        }
    }
}