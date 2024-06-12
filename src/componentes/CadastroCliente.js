import '../index.css'
export default function FormularioCadastroCliente(props) {
    let tema = props.tema

    const handleSubmit = ()=>{
        
    }
    return (
        <div className="container-fluid" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form id="form" className='formCliente' style={{background: tema}} onSubmit={handleSubmit}>
                <h5>Cadastro de cliente</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <hr></hr>

                <h6>Telefone</h6>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" />
                    <input type="text" className="form-control" placeholder="Número de telefone" aria-label="Número de telefone" aria-describedby="basic-addon1" />
                </div>
                <hr></hr>

                <h6>Endereço</h6>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Bairro"/>
                    <input type="text" className="form-control" placeholder="Cidade"/>
                    <input type="text" className="form-control" placeholder="Estado"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='Rua'/>
                    <input type="text" className="form-control" placeholder='Número'/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='CEP'/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder='Informações adicionais'/>
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" onClick={onsubmit} type="button" style={{background: 'white', color: 'black'}}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}