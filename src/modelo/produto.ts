export default class Produto {
    private nome: string
    private preco: number
    private codigo: string
    public comprasFeitas:number
    private racasCompras: Array<string>
    private tiposCompras: Array<string>

    constructor(nome: string, preco: number, codigo: string){
        this.nome = nome
        this.preco = preco
        this.codigo = codigo
        this.comprasFeitas = 0
        this.racasCompras = []
        this.tiposCompras = []
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
    
    public contarRacas<T>(){
        const contagem: Record<string, number> = {};
    
        this.racasCompras.forEach((elemento) => {
            const chave = elemento;
            contagem[chave] = contagem[chave] ? contagem[chave] + 1 : 1;
        });
    
        return Object.entries(contagem)
    }

    public contarTipos<T>(){
        const contagem: Record<string, number> = {};
    
        this.tiposCompras.forEach((elemento) => {
            const chave = elemento;
            contagem[chave] = contagem[chave] ? contagem[chave] + 1 : 1;
        });
    
        return Object.entries(contagem)
    }
}