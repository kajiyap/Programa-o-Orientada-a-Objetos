export default function ListaProdServ(){
    return(
        <div className="container-fluid">
            <div className="row" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <div className="col">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <h2>Produtos</h2> 
                    </div>
                    <div className="list-group list-group-flush" style={{display: "flex", flexDirection: "row", margin: "0.5vh", paddingRight: "10vh", fontSize: "3vh"}}>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Código</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Nome</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Preço</a>
                        <a></a>
                    </div>
                </div>
                <div  className="col">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <h2>Serviços</h2>
                    </div>
                    <div className="list-group list-group-flush" style={{display: "flex", flexDirection: "row", margin: "0.5vh", paddingRight: "10vh", fontSize: "3vh"}}>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Código</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Nome</a>
                        <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Preço</a>
                        <a></a>
                    </div>
                </div>
            </div>
        </div>
    )
}