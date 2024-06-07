import React from "react";
import ElementoListagem from "./elementoListagem";

interface Top5ValorProps {
    tema: string;
}

const Top5Valor: React.FC<Top5ValorProps> = ({ tema }) => {
    return (
        <div style={{ backgroundColor: 'lightblue', margin: '2vh', borderRadius: '5vh', padding: '2vh', height:'min-content' }}>
            <h5>Top 5 compradores por valor</h5>
            <ElementoListagem colocacao='1' nome='Pedro' valor='R$1.250,00' tema={tema} raca='' />
            <ElementoListagem colocacao='2' nome='Bruno' valor='R$1.247,00' tema={tema} raca='' />
            <ElementoListagem colocacao='3' nome='Erick' valor='R$1.125,00' tema={tema} raca='' />
            <ElementoListagem colocacao='4' nome='Cauã' valor='R$1.087,00' tema={tema} raca='' />
            <ElementoListagem colocacao='5' nome='Ryan' valor='R$1.010,00' tema={tema} raca='' />
        </div>
    );
}

export default Top5Valor;