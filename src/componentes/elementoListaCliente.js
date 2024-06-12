import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function ElementoListaCliente(props) {
    useEffect(()=>{
        console.log(props)
    },[])
    const nome = props.nome
    const nomeSocial = props.nomeSocial
    let email = ''
    props.email? email = props.email : email = ''
    let telefones = []
    props.telefones? telefones = props.telefones : telefones = []
    const endereco = props.endereco
    const tema = props.tema
    const id =`${props.id}`

    const [editData, setEditData] = useState({
        nome: nome,
        nomeSocial: nomeSocial,
        email: email,
        telefone: telefones,
        endereco: endereco,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleTelefoneChange = (index, e) => {
        const { value } = e.target;
        const newTelefones = editData.telefone.map((tel, i) => (
            i === index ? value : tel
        ));
        setEditData(prevState => ({
            ...prevState,
            telefone: newTelefones
        }));
    };

    const handleSave = () => {
        axios.put(`http://localhost:32831/cliente/editar/${email}`, editData)
            .then(response => {
                console.log('Cliente atualizado com sucesso:', response.data);
                // Atualizar a interface conforme necessário
            })
            .catch(error => {
                console.error('Erro ao atualizar cliente:', error);
            });
    };

    const handleDelete = (email) => {
        axios.delete(`http://localhost:32831/cliente/deletar/${email}`)
            .then(response => {
                console.log('Cliente excluído com sucesso:', response.data);
                // Atualizar a interface conforme necessário
            })
            .catch(error => {
                console.error('Erro ao excluir cliente:', error);
            });
    };

    const handleDeleteTelefone = (index) => {
        const newTelefones = editData.telefone.filter((tel, i) => i !== index);
        setEditData(prevState => ({
            ...prevState,
            telefone: newTelefones
        }));
    };

    return (
        <div>
            <div className="list-group list-group-flush" style={{ display: "flex", flexDirection: "row", margin: "0.5vh" }}>
                <a href="#" className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                    {nome}
                </a>                
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalEditar-${id}`} style={{ marginRight: '1vh' }}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(email)}>Excluir</button>
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
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Informações Adicionais</span>
                            <span className="form-control" aria-describedby="basic-addon1">{endereco.informacoesAdicionais}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <h5>Telefones</h5>
                        </div>
                        <div className="list-group" style={{ margin: "1vh" }}>
                            {telefones.map((tel) => (
                                <div className="list-group-item d-flex justify-content-between align-items-center" key={tel.id}>
                                    {tel.ddd}{tel.numero}
                                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteTelefone(tel.id)}>Excluir</button>
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
                                    <input type="text" className="form-control" placeholder="Novo Telefone" name="novoTelefone" onChange={(e) => handleTelefoneChange(-1, e)} />
                                </div>
                                {editData.telefone.map((tel) => (
                                    <div className="input-group mb-3" key={tel.id}>
                                        <input type="text" className="form-control" value={`(${tel.ddd}) ${tel.numero}`} onChange={(e) => handleTelefoneChange(tel.id, e)} />
                                    </div>
                                ))}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nova Rua" name="rua" value={editData.endereco.rua} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Número" name="numero" value={editData.endereco.numero} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Bairro" name="bairro" value={editData.endereco.bairro} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nova Cidade" name="cidade" value={editData.endereco.cidade} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo Estado" name="estado" value={editData.endereco.estado} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Novo CEP" name="cep" value={editData.endereco.cep} onChange={handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Informações Adicionais" name="informacoesAdicionais" value={editData.endereco.informacoesAdicionais} onChange={handleInputChange} />
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
