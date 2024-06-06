export default function ElementoListagem(props){
    const tema = props.tema
    const colocacao = props.colocacao
    const nome = props.nome
    const valor = props.valor 
    const raca = props.raca
    
    return(
        <div className="list-group list-group-flush" style={{display:"flex", flexDirection: "row", margin:'0.3vh'}}>
            <span className="input-group-text" id="basic-addon1" style={{ background: tema, borderRadius: '1vh', margin:'0.3vh' }}>{colocacao}</span> 
            <a href="#" className="list-group-item list-group-item-action" aria-expanded="false" style={{borderRadius: '1vh', margin:'0.3vh', width:'30vh'}}>{nome}</a>
            <a href="#" className="list-group-item list-group-item-action" aria-expanded="false" style={{borderRadius: '1vh', margin:'0.3vh', width:'30vh'}}>{raca}</a>
            <a href="#" className="list-group-item list-group-item-action" aria-expanded="false" style={{borderRadius: '1vh', margin:'0.3vh', width:'7vh'}}>{valor}</a>
            <a></a>
        </div>
    )
}