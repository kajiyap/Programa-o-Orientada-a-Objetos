import React, { Component } from 'react';

interface CadastrarProdServProps {
    nome: string;
    tema: string;
}

class CadastrarProdServ extends Component<CadastrarProdServProps> {
    render() {
        const { nome, tema } = this.props;
        return (
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ marginLeft: "5vh" }}>Adicionar</button>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Novo {nome}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
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

export default CadastrarProdServ;