/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./CadastroCliente";
import ListaPet from "./listaPet";
import ListaProdServ from "./listaProdServ";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Cadastros', 'Produtos/Serviços']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } if(tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Cadastros', 'Produtos/Serviços']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } if(tela === 'Pets'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Cadastros', 'Produtos/Serviços']}/>
                    <ListaPet/>
                </>
            )
        } if(tela === 'Produtos/Serviços'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Cadastros', 'Produtos/Serviços']}/>
                    <ListaProdServ/>
                </>
            )
        }
    }

    return (
        construirView()
    )
}