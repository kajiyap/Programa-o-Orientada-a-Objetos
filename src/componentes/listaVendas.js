import ElementoVenda from "./elementoVenda"

export default function ListaVenda (props){
    const tema = props.tema
    return(
        <div className="container-fluid">
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h2>Vendas</h2> 
            </div>
            <div className="list-group list-group-flush" style={{display: "flex", flexDirection: "row", margin: "0.5vh", paddingRight: "19vh", fontSize: "3vh"}}>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Comprador</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Pet</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Produto/Serviço</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Valor</a>
                <a></a>
            </div> 
            <ElementoVenda tema={tema} comprador='Pedro' produto='Cama' pet='Rex' preco='R$65,00'/>
            <ElementoVenda tema={tema} comprador='Cauã' produto='Shampoo' pet='Salsicha' preco='R$30,00'/>
            <ElementoVenda tema={tema} comprador='Bruno' produto='Tosa' pet='Kripto' preco='R$60,00'/>
            <ElementoVenda tema={tema} comprador='Matheus' produto='Bolinha' pet='Dinho' preco='R$25,00'/>
            <ElementoVenda tema={tema} comprador='Erick' produto='Banho' pet='Lilica' preco='R$55,00'/>
        </div>
    )
}