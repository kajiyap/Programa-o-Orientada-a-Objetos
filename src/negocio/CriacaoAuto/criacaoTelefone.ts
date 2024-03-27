import Telefone from "../../modelo/telefone"

export function gerarNum (){
    let min = Math.ceil(100000000)
    let max = Math.floor(1000000000)
    return Math.floor(Math.random()*(max-min)+min).toString()
}
export function gerarDDD (){
    let min = Math.ceil(10)
    let max = Math.floor(60)
    return Math.floor(Math.random()*(max-min)+min).toString()
}
export default function gerarTelefone(){
    let ddd = gerarDDD()
    let num = gerarNum()
    let tel = new Telefone(ddd, num)
    return tel
}