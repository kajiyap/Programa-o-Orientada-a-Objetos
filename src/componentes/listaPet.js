import CadastrarPet from "./cadastroDePet";
import ElementoListaPet from "./elementoListaPet";

export default function ListaPet (props){
    return(
        <div className="container-fluid">
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <h2>Pets</h2>  <CadastrarPet/> 
            </div>
            <div className="list-group list-group-flush" style={{display: "flex", flexDirection: "row", margin: "0.5vh", paddingRight: "19vh", fontSize: "3vh"}}>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Dono</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Nome</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Tipo</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Raça</a>
                <a href="#" className="list-group-item list-group-item-action" aria-expanded="false">Gênero</a>
                <a></a>
            </div> 
            <ElementoListaPet dono="Pedro" nome="Rex" tipo="Gato" genero="Macho" raca="Siamês"/>
            <ElementoListaPet dono="Matheus" nome="Dinho" tipo="Cachorro" genero="Macho" raca="Pastor-Alemão"/>
            <ElementoListaPet dono="Erick" nome="Lilica" tipo="Gato" genero="Fêmea" raca="Maine Coon"/>
            <ElementoListaPet dono="Bruno" nome="Kripto" tipo="Cachorro" genero="Macho" raca="Labrador"/>
            <ElementoListaPet dono="Bruno" nome="Scooby" tipo="Gato" genero="Macho" raca="Persa"/>
            <ElementoListaPet dono="Cauã" nome="Salsicha" tipo="Cachorro" genero="Fêmea" raca="Bulldog"/>
        </div>
    )
}