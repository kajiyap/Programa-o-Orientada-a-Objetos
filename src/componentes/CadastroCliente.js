export default function FormularioCadastroCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <button style={{margin: "2vh"}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCliente" aria-expanded="false" aria-controls="collapseCliente">
                Cadastro de cliente
            </button>
            <button style={{margin: "2vh"}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTel" aria-expanded="false" aria-controls="collapseTel">
                Cadastro de telefone
            </button>
            <button style={{margin: "2vh"}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRg" aria-expanded="false" aria-controls="collapseRg">
                Cadastro de RG
            </button>
            <div class="row">
                <div class="col">
                    <div class="collapse" id="collapseCliente">
                        <form style={{background: tema, padding: "3vh", borderRadius: "3vh", margin:"1vh", alignSelf: "flex-start"}}>
                            <h5>Cadastro de cliente</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col">
                    <div class="collapse" id="collapseTel">
                        <form style={{background: tema, padding: "3vh", borderRadius: "3vh",margin:"1vh", alignSelf: "flex-end"}}>
                            <h5>Cadastro de telefone</h5>
                            <div class="dropdown" style={{margin:"1vh"}}>
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Selecione o cliente                        
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Pedro</a></li>
                                    <li><a class="dropdown-item" href="#">Matheus</a></li>
                                    <li><a class="dropdown-item" href="#">Bruno</a></li>
                                    <li><a class="dropdown-item" href="#">Cauã</a></li>
                                    <li><a class="dropdown-item" href="#">Erick</a></li>
                                </ul>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                            </div>
                        </form>
                    </div>

                    <div class="collapse" id="collapseRg">
                        <form style={{background: tema, padding: "3vh", borderRadius: "3vh", margin:"1vh", alignSelf: "flex-end"}}>
                            <h5>Cadastro de RG</h5>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Selecione o cliente
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Pedro</a></li>
                                    <li><a class="dropdown-item" href="#">Matheus</a></li>
                                    <li><a class="dropdown-item" href="#">Bruno</a></li>
                                    <li><a class="dropdown-item" href="#">Cauã</a></li>
                                    <li><a class="dropdown-item" href="#">Erick</a></li>
                                </ul>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Numero do RG" aria-label="Numero do RG" aria-describedby="basic-addon1" />
                                <input type="text" className="form-control" placeholder="Data de emissão do RG" aria-label="Data de emissão do RG" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}