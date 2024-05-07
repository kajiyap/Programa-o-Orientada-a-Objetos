import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    /*getters*/
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
/*_____________________________________________________________________*/
/*SETTERS*/
    public set setDataCpf(dataEmissao: Date){
        this.cpf.setDataEmissao = dataEmissao
    }
    public set setValorCpf(valor: string){
        this.cpf.setValor = valor
    }
    public alterarRgs (novoRg): void {
        this.rgs.push(novoRg)
    }
    public set setNome(novoNome: string) {
        this.nome = novoNome;
    }
    public set setNomeSocial(nomeSocial : string){
        this.nomeSocial = nomeSocial
    }
    
    public valorConsumido(){
        let valorConsumido = 0
        this.getProdutosConsumidos.forEach((e)=>(valorConsumido = valorConsumido+e.getPreco ))
        this.getServicosConsumidos.forEach((e)=>(valorConsumido = valorConsumido+e.getPreco))
        return valorConsumido
    }

    public qtdeConsumida(){
        let qtdeConsumida = this.getProdutosConsumidos.length+this.getServicosConsumidos.length
        return qtdeConsumida
    }
}