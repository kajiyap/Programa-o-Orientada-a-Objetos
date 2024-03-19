import CPF from "../../modelo/cpf";

function gerarCPF (){
    let min = Math.ceil(10000000000)
    let max = Math.floor(100000000000)
    return Math.floor(Math.random()*(max-min)+min)
}
function gerarDia (){
    let min = Math.ceil(0)
    let max = Math.floor(31)
    return Math.floor(Math.random()*(max-min)+min)
}
function gerarMes(){
    let min = Math.ceil(0)
    let max = Math.floor(13)
    return Math.floor(Math.random()*(max-min)+min)
}
function gerarAno(){
    let min = Math.ceil(1930)
    let max = Math.floor(2025)
    return Math.floor(Math.random()*(max-min)+min)
}


export default function criacaoCPF ():CPF {
    let valor = gerarCPF().toString()
    let ano = gerarAno()
    let mes = gerarMes()
    let dia = gerarDia()
    let dataEmissao = new Date(ano, mes, dia)
    let cpf = new CPF(valor, dataEmissao);
    return cpf
}