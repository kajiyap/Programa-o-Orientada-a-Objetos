import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private servicosConsumidos: Array<string>
    private produtosConsumidos: Array<string>
    
    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.servicosConsumidos = []
        this.produtosConsumidos = []
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getServicosConsumidos(){return this.servicosConsumidos}
    public get getProdutosConsumidos(){return this.produtosConsumidos}

    public set setNome(nome: string){
        this.nome = nome
    }
    public set setTipo(tipo: string){
        this.tipo = tipo
    }
    public set setRaca(raca: string){
        this.raca = raca
    }
    public set setGenero(genero: string){
        this.genero = genero
    }
}