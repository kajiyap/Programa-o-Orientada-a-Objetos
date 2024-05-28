/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className="list-group">
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 4</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 6</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 7</a>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <h5>Atualização de cliente</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Novo Nome" aria-label="Novo Nome" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Novo Nome social" aria-label="Novo Nome social" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Novo CPF" aria-label="Novo CPF" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control" placeholder="Novo Data de emissão do CPF" aria-label="Novo Data de emissão do CPF" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                <input type="text" className="form-control" placeholder="Novo E-mail" aria-label="Novo E-mail" aria-describedby="basic-addon1" />
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