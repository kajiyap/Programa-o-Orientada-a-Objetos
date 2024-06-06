import ElementoListagem from "./elementoListagem"

export default function Top5valor(props){
    const tema = props.tema
    return(
        <div style={{backgroundColor: 'lightblue', margin: '2vh', borderRadius: '5vh', padding: '2vh', height:'min-content'}}>
            <h5>Top 10 compradores por quantidade</h5>
            <ElementoListagem colocacao='1' nome='Pedro' valor='R$1.250,00' tema={tema}/>
            <ElementoListagem colocacao='2' nome='Bruno' valor='R$1.247,00' tema={tema}/>
            <ElementoListagem colocacao='3' nome='Erick' valor='R$1.125,00' tema={tema}/>
            <ElementoListagem colocacao='4' nome='Cauã' valor='R$1.087,00' tema={tema}/>
            <ElementoListagem colocacao='5' nome='Ryan' valor='R$1.010,00' tema={tema}/>
        </div>
    )
}