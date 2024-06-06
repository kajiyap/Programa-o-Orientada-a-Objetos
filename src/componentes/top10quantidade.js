import ElementoListagem from "./elementoListagem"

export default function Top10Quantidade(props){
    const tema = props.tema
    return(
        <div style={{backgroundColor: 'lightblue', margin: '2vh', borderRadius: '5vh', padding: '2vh'}}>
            <h5>Top 10 compradores por quantidade</h5>
            <ElementoListagem colocacao='1' nome='Pedro' valor='50' tema={tema}/>
            <ElementoListagem colocacao='2' nome='Bruno' valor='47' tema={tema}/>
            <ElementoListagem colocacao='3' nome='Erick' valor='40' tema={tema}/>
            <ElementoListagem colocacao='4' nome='Cauã' valor='34' tema={tema}/>
            <ElementoListagem colocacao='5' nome='Ryan' valor='34' tema={tema}/>
            <ElementoListagem colocacao='6' nome='Matheus' valor='32' tema={tema}/>
            <ElementoListagem colocacao='7' nome='Maria Eduarda' valor='26' tema={tema}/>
            <ElementoListagem colocacao='8' nome='Enzo' valor='25' tema={tema}/>
            <ElementoListagem colocacao='9' nome='Abner' valor='15' tema={tema}/>
            <ElementoListagem colocacao='10' nome='Gerson' valor='10' tema={tema}/>
        </div>
    )
}