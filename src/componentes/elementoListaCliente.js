import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function ElementoListaCliente(props) {
    const { nome, nomeSocial, email = '', telefones = [''], endereco, tema, id, onUpdate: getClientes } = props;
    const [status, setStatus] = useState();
    const [editData, setEditData] = useState({
        id,
        nome,
        nomeSocial,
        email,
        endereco,
        telefone: telefones,
    });

    const [dataTel, setDataTel] = useState({
        telefone: telefones,
        novoTelefone: { ddd: '', numero: '' },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('endereco.')) {
            const enderecoField = name.split('.')[1];
            setEditData((prevState) => ({
                ...prevState,
                endereco: {
                    ...prevState.endereco,
                    [enderecoField]: value,
                },
            }));
        } else if (name === 'ddd' || name === 'numero') {
            setDataTel((prevState) => ({
                ...prevState,
                novoTelefone: {
                    ...prevState.novoTelefone,
                    [name]: value,
                },
            }));
        } else {
            setEditData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleTelefoneChange = (index, field, value) => {
        const newTelefones = editData.telefone.map((tel, i) => (
            i === index ? { ...tel, [field]: value } : tel
        ));

        setEditData((prevState) => ({
            ...prevState,
            telefone: newTelefones,
        }));
    };

    const handleAddTelefone = () => {
        const { ddd, numero } = dataTel.novoTelefone;
        if (ddd.trim() !== '' && numero.trim() !== '') {
            const novoTelefone = { ddd, numero, id: Math.random() }; // Adding a temporary id
            setEditData(prevState => ({
                ...prevState,
                telefone: [...prevState.telefone, novoTelefone],
            }));
            setDataTel(prevState => ({
                ...prevState,
                novoTelefone: { ddd: '', numero: '' },
            }));
        }
    };

    const handleSave = () => {
        axios.put(`http://localhost:32831/cliente/atualizar`, editData)
            .then(response => {
                alert('Cliente atualizado com sucesso!');
                console.log('Cliente atualizado com sucesso:', response.data);
                setStatus(1);
                getClientes();
            })
            .catch(error => {
                console.error('Erro ao atualizar cliente:', error);
                setStatus(2);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:32831/cliente/excluir`, { data: { id } })
            .then(response => {
                console.log('Cliente excluído com sucesso:', response.data);
                getClientes();
            })
            .catch(error => {
                console.error('Erro ao excluir cliente:', error);
            });
    };

    return (
        <div>
            <div className="list-group list-group-flush" style={{ display: "flex", flexDirection: "row", margin: "0.5vh" }}>
                <a href="#" className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                    {nome}
                </a>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalEditar-${id}`} style={{ marginRight: '1vh' }}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(id)}>Excluir</button>
            </div>
            <div className="collapse" id={id} style={{ margin: "2vh 3vh" }}>
                <div className="row">
                    <div className="col">
                        <h5>Dados do cliente</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome</span>
                            <span className="form-control" aria-describedby="basic-addon1">{nome}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome Social</span>
                            <span className="form-control" aria-describedby="basic-addon1">{nomeSocial}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                            <span className="form-control" aria-describedby="basic-addon1">{email}</span>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Endereço</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Bairro</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.bairro}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Cidade</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.cidade}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Estado</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.estado}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Rua</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.rua}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Número</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.numero}</span>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CEP</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.codigoPostal}</span>
                        </div>
                        <h6>Informações adicionais</h6>
                        <div className="input-group mb-3">
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.informacoesAdicionais}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <h5>Telefones</h5>
                        </div>
                        <div className="list-group" style={{ margin: "1vh" }}>
                            {editData.telefone.map((tel, index) => (
                                <div className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    {tel.ddd} {tel.numero}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`modalEditar-${id}`} tabIndex="-1" aria-labelledby="modalEditarLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Atualização de cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div style={{ display: 'none' }}>
                                    <p>Identificação:</p><p value={editData.id}>{id}</p>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Nome" name="nome" value={editData.nome} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Nome social" name="nomeSocial" value={editData.nomeSocial} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo E-mail" name="email" value={editData.email} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo DDD" name="ddd" value={dataTel.novoTelefone.ddd} onChange={handleInputChange} />
                                    <input type="text" className="form-control" placeholder="Novo Número" name="numero" value={dataTel.novoTelefone.numero} onChange={handleInputChange} />
                                    <button type="button" className="btn btn-primary" onClick={handleAddTelefone}>Adicionar Telefone</button>
                                </div>

                                {editData.telefone.map((tel, index) => (
                                    <div className="input-group mb-3" key={index}>
                                        <input type="text" className="form-control" placeholder="DDD" value={tel.ddd} onChange={(e) => handleTelefoneChange(index, 'ddd', e.target.value)} />
                                        <input type="text" className="form-control" placeholder="Número" value={tel.numero} onChange={(e) => handleTelefoneChange(index, 'numero', e.target.value)} />
                                    </div>
                                ))}
                                <div style={{ display: 'none' }}>
                                    <p>Identificação:</p><p value={editData.endereco.id}>{id}</p>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nova rua" name="endereco.rua" value={editData.endereco.rua} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Número" name="endereco.numero" value={editData.endereco.numero} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Bairro" name="endereco.bairro" value={editData.endereco.bairro} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nova Cidade" name="endereco.cidade" value={editData.endereco.cidade} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Estado" name="endereco.estado" value={editData.endereco.estado} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo CEP" name="endereco.codigoPostal" value={editData.endereco.codigoPostal} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Informações Adicionais" name="endereco.informacoesAdicionais" value={editData.endereco.informacoesAdicionais} onChange={handleInputChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Salvar mudanças</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}