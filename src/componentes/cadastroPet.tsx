import React, { Component } from 'react';

class CadastrarPet extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ marginLeft: "5vh" }}>
                    Adicionar
                </button>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Novo Pet</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="CPF" aria-label="Dono do pet" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Tipo do pet" aria-label="Tipo do pet" aria-describedby="basic-addon1" />
                                        <input type="text" className="form-control" placeholder="Raça do pet" aria-label="Raça do pet" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Gênero do pet" aria-label="Gênero do pet" aria-describedby="basic-addon1" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary">Salvar novo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CadastrarPet;