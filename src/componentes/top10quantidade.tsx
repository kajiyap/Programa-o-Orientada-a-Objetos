import React from "react";
import ElementoListagem from "./elementoListagem";

interface Top10QuantidadeProps {
    tema: string;
}

const Top10Quantidade: React.FC<Top10QuantidadeProps> = ({ tema }) => {
    return (
        <div style={{ backgroundColor: 'lightblue', margin: '2vh', borderRadius: '5vh', padding: '2vh' }}>
            <h5>Top 10 compradores por quantidade</h5>
            <ElementoListagem colocacao='1' nome='Pedro' valor='50' tema={tema} raca='' />
            <ElementoListagem colocacao='2' nome='Bruno' valor='47' tema={tema} raca='' />
            <ElementoListagem colocacao='3' nome='Erick' valor='40' tema={tema} raca='' />
            <ElementoListagem colocacao='4' nome='Cauã' valor='34' tema={tema} raca='' />
            <ElementoListagem colocacao='5' nome='Ryan' valor='34' tema={tema} raca='' />
            <ElementoListagem colocacao='6' nome='Matheus' valor='32' tema={tema} raca='' />
            <ElementoListagem colocacao='7' nome='Maria Eduarda' valor='26' tema={tema} raca='' />
            <ElementoListagem colocacao='8' nome='Enzo' valor='25' tema={tema} raca='' />
            <ElementoListagem colocacao='9' nome='Abner' valor='15' tema={tema} raca='' />
            <ElementoListagem colocacao='10' nome='Gerson' valor='10' tema={tema} raca='' />
        </div>
    );
}

export default Top10Quantidade;