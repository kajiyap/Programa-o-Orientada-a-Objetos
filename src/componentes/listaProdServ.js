import CadastrarProdServ from "./CadastroProdServ";
import ElementoProdServ from "./elementoProdServ";

export default function ListaProdServ(props){
    const tema = props.tema
    const style = {display: "flex", flexDirection: "row", margin: "0.5vh", paddingRight: "20vh", fontSize: "3vh"}
    return(
        <div className="container-fluid">
            <div className="row" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <div className="col">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <h2>Produtos</h2> <CadastrarProdServ tema={tema} nome="Produto"/>
                    </div>
                    <div className="list-group list-group-flush" style={style}>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Consumo</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Nome</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Preço</a>
                        <a></a>
                    </div>
                    <ElementoProdServ tema={tema} nome ='Bolinha' codigo ='30' preco='R$20,00'/>
                    <ElementoProdServ tema={tema} nome ='Shampoo' codigo ='27' preco='R$25,00'/>
                    <ElementoProdServ tema={tema} nome ='Laço' codigo ='22' preco='R$5,00'/>
                    <ElementoProdServ tema={tema} nome ='Cama' codigo ='19' preco='R$50,00'/>
                    <ElementoProdServ tema={tema} nome ='Petisco' codigo ='11' preco='R$10,00'/>
                </div>
                <div  className="col">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <h2>Serviços</h2> <CadastrarProdServ tema={tema} nome="Serviço"/>
                    </div>
                    <div className="list-group list-group-flush" style={style}>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Consumo</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Nome</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Preço</a>
                        <a></a>
                    </div>
                    <ElementoProdServ tema={tema} nome ='Banho' codigo ='36' preco='R$50,0'/>
                    <ElementoProdServ tema={tema} nome ='Tosa' codigo ='25' preco='R$55,0'/>
                    <ElementoProdServ tema={tema} nome ='Passeio' codigo ='22' preco='R$30,0'/>
                    <ElementoProdServ tema={tema} nome ='Banho e tosa' codigo ='20' preco='R$80,0'/>
                    <ElementoProdServ tema={tema} nome ='Corte de unhas' codigo ='15' preco='R$15,0'/>
                </div>
            </div>
        </div>
    )
}