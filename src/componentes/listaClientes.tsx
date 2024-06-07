/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ElementoListaCliente from './elementoListaCliente';

interface ListaClienteProps {
    tema: string;
}

class ListaCliente extends Component<ListaClienteProps> {
    render() {
        const { tema } = this.props;
        const rg = ["12.456.789-1", "32.654.987-1", "75.159.852-8"];
        const telefones = ["(12)99257-7679", "(35)98874-6569", "(11)99874-8852"];

        return (
            <div className="container-fluid">
                <h1>Clientes</h1>
                <p>Selecione um cliente para ver seus dados.</p>
                <ElementoListaCliente nome="Pedro Kajiya" nomeSocial="Pedrovisk" CPF="123.456.789-10" email="pedrokajiya@email.com" tema={tema} telefone={telefones} rg={rg} />
                <ElementoListaCliente nome="Matheus Madeira" nomeSocial="Madeira" CPF="159.753.852.78" email="matheusmadeira@email.com" tema={tema} telefone={telefones} rg={rg} />
                <ElementoListaCliente nome="Bruno Silvério" nomeSocial="Bruno T.I" CPF="984.789.312-55" email="brunosilverio@email.com" tema={tema} telefone={telefones} rg={rg} />
                <ElementoListaCliente nome="Caua Dezidera" nomeSocial="Brinquedo" CPF="158.456.565-88" email="cauad@email.com" tema={tema} telefone={telefones} rg={rg} />
                <ElementoListaCliente nome="Erick Awata" nomeSocial="DJ Japão" CPF="122.455.788-10" email="djjapao@email.com" tema={tema} telefone={telefones} rg={rg} />
            </div>
        );
    }
}

export default ListaCliente;
