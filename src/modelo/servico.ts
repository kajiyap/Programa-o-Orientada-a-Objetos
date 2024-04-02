export default class Servico {
    private nome: string
    private preco: number
    private codigo: string

    constructor(nome: string, preco: number, codigo: string){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
    }

    public get getNome(): string{
        return this.nome
    }
    public get getPreco(): number{
        return this.preco
    }
    public get getCodigo(): string{
        return this.codigo
    }


    public set setNome(nome: string){
        this.nome = nome
    }
    public set setPreco(preco: number){
        this.preco = preco
    }
    public set setCodigo(codigo: string){
        this.codigo = codigo
    }
    
}