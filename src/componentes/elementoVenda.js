export default function ElementoVenda (props) {
    const tema = props.tema
    const comprador = props.comprador
    const produto = props.produto
    const pet = props.pet
    const preco = props.preco
    return(
        <div>
            <div className="list-group list-group-flush" style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{comprador}</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{pet}</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{produto}</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{preco}</a>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" style={{marginRight: '1vh'}} data-bs-target="#exampleModal">Editar</button>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Excluir</button>
            </div>  
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Atualização de Venda</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="CPF" aria-label="Novo Comprador" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome" aria-label="Novo Pet" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Novo produto ou serviço" aria-label="Novo produto ou serviço" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span> 
                                <input type="text" className="form-control" placeholder="Novo Preço" aria-label="Novo Preço" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Salvar alterações</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}