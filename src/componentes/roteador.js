/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./CadastroCliente";
import ListaPet from "./listaPet";
import ListaProdServ from "./listaProdServ";
import ListaVenda from "./listaVendas";

export default function Roteador() {
    const tema = "#0d6efd"
    const botoes = [ 'Cadastros', 'Clientes', 'Pets', 'Produtos/Serviços', 'Vendas']
    const [tela, setTela] = useState('Clientes')
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
        } if(tela === 'Pets'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema={tema} botoes={botoes}/>
                    <ListaPet/>
                </>
            )
        } if(tela === 'Produtos/Serviços'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema={tema} botoes={botoes}/>
                    <ListaProdServ tema={tema}/>
                </>
            )
        } if(tela === 'Vendas'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema={tema} botoes={botoes}/>
                    <ListaVenda tema={tema}/>
                </>
            )
        }
    }

    return (
        construirView()
    )
}