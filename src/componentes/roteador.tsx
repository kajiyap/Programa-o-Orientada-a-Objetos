import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPet from "./listaPet";
import ListaProdServ from "./listaProdServ";

type state = {
    tela: string
    tema: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes',
            tema: "#e3f2fd"
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema={this.state.tema} botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos/Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema={this.state.tema} />
                </>
            )
        } if(this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema={this.state.tema} />
                </>
            )
        } if(this.state.tela === 'Pets') {
            return(
                <>
                    {barraNavegacao}
                    <ListaPet/>
                </>
            )
        } if(this.state.tela == 'Produtos/Serviços'){
            return(
                <>
                    {barraNavegacao}
                    <ListaProdServ tema={this.state.tema}/>
                </>
            )
        }
    }
}