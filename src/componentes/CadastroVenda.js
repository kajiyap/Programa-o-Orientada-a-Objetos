export default function CadastrarProdServ(props){
    const nome = props.nome
    const tema = props.tema
    return(
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginLeft: "5vh"}}>Adicionar</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Novo {nome}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`Nome do ${nome}`} aria-label={`Nome do ${nome}`} aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span> 
                                <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Salvar novo</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }