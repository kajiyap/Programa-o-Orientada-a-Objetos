import React, { Component } from 'react';

interface ElementoProdServProps {
    tema: string;
    codigo: string;
    nome: string;
    preco: string;
}

class ElementoProdServ extends Component<ElementoProdServProps> {
    render() {
        const { tema, codigo, nome, preco } = this.props;
        return (
            <div>
                <div className="list-group list-group-flush" style={{ display: "flex", flexDirection: "row", margin: "0.5vh" }}>
                    <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{codigo}</a>
                    <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{nome}</a>
                    <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">{preco}</a>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" style={{ marginRight: '1vh' }} data-bs-target="#exampleModal">Editar</button>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Excluir</button>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Atualização de Produto ou Serviço</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Novo Nome" aria-label="Novo Nome" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                        <input type="text" className="form-control" placeholder="Novo Preço" aria-label="Novo Preço" aria-describedby="basic-addon1" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary">Salvar alterações</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ElementoProdServ;