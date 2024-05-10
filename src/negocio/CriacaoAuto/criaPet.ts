
import Pet from "../../modelo/pet"

export function criaPet1(){
    let nome = 'rex'
    let raca = 'buldog'
    let genero = 'macho'
    let tipo = 'cachorro'
    let pet = new Pet (nome, raca, genero, tipo)

    return pet
}
export function criaPet2(){
    let nome = 'dinho'
    let raca = 'siames'
    let genero = 'macho'
    let tipo = 'gato'
    let pet = new Pet (nome, raca, genero, tipo)

    return pet
}
export function criaPet3(){
    let nome = 'ralf'
    let raca = 'pastor alemao'
    let genero = 'macho'
    let tipo = 'cachorro'
    let pet = new Pet (nome, raca, genero, tipo)

    return pet
}
export function criaPet4(){
    let nome = 'lola'
    let raca = 'persa'
    let genero = 'macho'
    let tipo = 'gato'
    let pet = new Pet (nome, raca, genero, tipo)

    return pet
}