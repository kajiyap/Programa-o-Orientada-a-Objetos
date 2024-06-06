import ElementoTopProdServ from "./elementoTopProdServ"

export default function TopProdServ(props){
    const tema = props.tema
    return(
        <div style={{backgroundColor: 'lightblue', margin: '2vh', borderRadius: '5vh', padding: '2vh', width: '70vh'}}>
            <h5>Top 10 compradores por quantidade</h5>
            <ElementoTopProdServ colocacao='1' nome='Banho' valor='50' raca='Pastor belga (cão)' tema={tema}/>
            <ElementoTopProdServ colocacao='2' nome='Bolinha' valor='47' raca='Persa (gato)' tema={tema}/>
            <ElementoTopProdServ colocacao='3' nome='Cortar unhas' valor='40' raca='Siames (gato)' tema={tema}/>
            <ElementoTopProdServ colocacao='4' nome='Shampoo' valor='34' raca='Bulldog (cão)' tema={tema}/>
            <ElementoTopProdServ colocacao='5' nome='Tosa' valor='34' raca='Maine Coon (gato' tema={tema}/>
            <ElementoTopProdServ colocacao='6' nome='Petisco' valor='32' raca='Labrador (cão)' tema={tema}/>
            <ElementoTopProdServ colocacao='7' nome='Banho e tosa' valor='26' raca='Pinscher (cão)' tema={tema}/>
            <ElementoTopProdServ colocacao='8' nome='Cama' valor='25' raca='Husky siberiano (cão)' tema={tema}/>
            <ElementoTopProdServ colocacao='9' nome='Passeio' valor='15' raca='Pitbull (cão)' tema={tema}/>
            <ElementoTopProdServ colocacao='10' nome='Laço' valor='10' raca='Rotwailler (cão)' tema={tema}/>
        </div>
    )
}