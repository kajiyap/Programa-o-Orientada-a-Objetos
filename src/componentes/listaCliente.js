/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"
import ElementoListaCliente from "./elementoListaCliente"
import axios from "axios"

export default function ListaCliente(props) {
    let tema = props.tema
    const [data, setData] = useState([])
    const getClientes = () => {
        let url = 'http://localhost:32831/cliente/clientes'
        axios.get(url)
        .then(response => {
            // Atualizar a interface conforme necessário
        })
        .catch(error => {
            setData(error.response.data)
            console.log(error.response.data[0])
        });
    }
    useEffect(()=>{
        getClientes()
    },[])

    return (
        <div className="container-fluid">
            <h1>Clientes</h1>
                <p>Selecione um cliente para ver seus dados.</p>
            {data.map(element => {
                 return <ElementoListaCliente onUpdate={getClientes} tema={tema} id={element.id} nome={element.nome} nomeSocial={element.nomeSocial} email={element.email} endereco={element.endereco} telefones={element.telefones}/>
            })}
        </div>
    )
}