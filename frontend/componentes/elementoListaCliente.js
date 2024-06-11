/* eslint-disable jsx-a11y/anchor-is-valid */

export default function ElementoListaCliente (props){
    {console.log(props)}
    let nome = props.nome
    let nomeSocial = props.nomeSocial
    let CPF = props.CPF
    let email = props.email
    let rg = props.rg
    let telefone = props.telefone
    let tema = props.tema
    return(
    <div>
        <div className="list-group list-group-flush" style={{display: "flex", flexDirection: "row", margin: "0.5vh"}}>
            <a href="#" className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target={"#"+ CPF} aria-expanded="false">{nome}</a>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginRight: '1vh'}}>Editar</button>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Excluir</button>
        </div>
        <div class="collapse" id={CPF} style={{margin: "2vh 3vh"}}>
            <div className="row">                        
                <div className="col">
                    <h5>Dados do cliente</h5>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome</span>
                        <a className="form-control" aria-describedby="basic-addon1">{nome}</a>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome Social</span>
                        <a className="form-control" aria-describedby="basic-addon1">{nomeSocial}</a>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CPF</span>
                        <a className="form-control" aria-describedby="basic-addon1">{CPF}</a>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <a className="form-control" aria-describedby="basic-addon1">{email}</a>
                    </div>
                </div>
                <div className="col">
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><h5>RG's</h5><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalRG" style={{marginLeft: '43vh'}}>Novo</button></div>
                    
                    <div class="list-group" style={{margin:"1vh"}}>
                        <a className="list-group-item">{rg[2]}<button type="button" class="btn btn-danger" style={{marginLeft: '33vh'}}>Excluir</button></a>
                        <a className="list-group-item">{rg[0]}<button type="button" class="btn btn-danger" style={{marginLeft: '33vh'}}>Excluir</button></a>
                        <a className="list-group-item">{rg[1]}<button type="button" class="btn btn-danger" style={{marginLeft: '33vh'}}>Excluir</button></a>
                    </div>
                </div>                            
                <div className="col">
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><h5>Telefones</h5><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalTel" style={{marginLeft: '36vh'}}>Novo</button></div>
                    <div class="list-group" style={{margin:"1vh"}}>
                        <a className="list-group-item">{telefone[0]} <button type="button" class="btn btn-danger" style={{marginLeft: '29vh'}}>Excluir</button></a>
                        <a className="list-group-item">{telefone[1]} <button type="button" class="btn btn-danger" style={{marginLeft: '29vh'}}>Excluir</button></a>
                        <a className="list-group-item">{telefone[2]} <button type="button" class="btn btn-danger" style={{marginLeft: '29vh'}}>Excluir</button></a>
                    </div>
                </div>                            
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Atualização de cliente</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
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
        <div class="modal fade" id="ModalRG" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Novo RG</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Novo RG" aria-label="Novo RG" aria-describedby="basic-addon1" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary">Salvar</button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="ModalTel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Novo RG</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Novo Telefone" aria-label="Novo Telefone" aria-describedby="basic-addon1" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary">Salvar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}