import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

export default function FormularioCadastroCliente(props) {
    const { tema } = props;

    const [formData, setFormData] = useState({
        nome: '',
        nomeSocial: '',
        email: '',
        telefones: [{ ddd: '', numero: '' }],
        endereco: {
            bairro: '',
            cidade: '',
            estado: '',
            rua: '',
            numero: '',
            cep: '',
            informacoesAdicionais: ''
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name in formData.endereco) {
            setFormData(prevState => ({
                ...prevState,
                endereco: {
                    ...prevState.endereco,
                    [name]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleTelefoneChange = (index, e) => {
        const { name, value } = e.target;
        const newTelefones = formData.telefones.map((telefone, i) => (
            i === index ? { ...telefone, [name]: value } : telefone
        ));
        setFormData(prevState => ({
            ...prevState,
            telefones: newTelefones
        }));
    };

    const addTelefone = () => {
        setFormData(prevState => ({
            ...prevState,
            telefones: [...prevState.telefones, { ddd: '', numero: '' }]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:32831/cliente/cadastrar', formData)
            .then(response => {
                console.log('Cliente cadastrado com sucesso:', response.data);
                // Limpar formulário ou dar feedback ao usuário
            })
            .catch(error => {
                console.error('Erro ao cadastrar cliente:', error);
            });
    };

    return (
        <div className="container-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form id="form" className='formCliente' style={{ background: tema }} onSubmit={handleSubmit}>
                <h5>Cadastro de cliente</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome" value={formData.nome} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" name="nomeSocial" value={formData.nomeSocial} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <hr></hr>

                <h6>Telefone</h6>
                {formData.telefones.map((telefone, index) => (
                    <div className="input-group mb-3" key={index}>
                        <input type="text" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" name="ddd" value={telefone.ddd} onChange={e => handleTelefoneChange(index, e)} />
                        <input type="text" className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" name="numero" value={telefone.numero} onChange={e => handleTelefoneChange(index, e)} />
                    </div>
                ))}
                <button type="button" className="btn btn-secondary mb-3" onClick={addTelefone}>Adicionar Telefone</button>
                <hr></hr>

                <h6>Endereço</h6>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Bairro" name="bairro" value={formData.endereco.bairro} onChange={handleInputChange} />
                    <input type="text" className="form-control" placeholder="Cidade" name="cidade" value={formData.endereco.cidade} onChange={handleInputChange} />
                    <input type="text" className="form-control" placeholder="Estado" name="estado" value={formData.endereco.estado} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='Rua' name="rua" value={formData.endereco.rua} onChange={handleInputChange} />
                    <input type="text" className="form-control" placeholder='Número' name="numero" value={formData.endereco.numero} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='CEP' name="cep" value={formData.endereco.cep} onChange={handleInputChange} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='Informações adicionais' name="informacoesAdicionais" value={formData.endereco.informacoesAdicionais} onChange={handleInputChange} />
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: 'white', color: 'black' }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}
