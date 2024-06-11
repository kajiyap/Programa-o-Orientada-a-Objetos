/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./CadastroCliente";

export default function Roteador() {
    const tema = "#0d6efd"
    const botoes = ['Dash', 'Cadastros', 'Clientes']
    const [tela, setTela] = useState('Dash')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema={tema} botoes={botoes} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } if(tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema={tema} botoes={botoes} />
                    <FormularioCadastroCliente tema={tema} />
                </>
            )
        }
    }

    return (
        construirView()
    )
}