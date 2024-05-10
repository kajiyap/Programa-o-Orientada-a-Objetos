import Pet from "../../modelo/pet";

import Listagem from "../listagem";

export default class ListagemConsPet extends Listagem{
    private pets: Array<Pet>

    constructor(pets: Array<Pet>){
        super()
        this.pets = pets
    }

    public listar(): void {
        /* ___________________________________________________________________________ */
        const servicosMaisConsumidos: { [tipoRaca: string]: { [servico: string]: number } } = {};

        this.pets.forEach((pet) => {
            if (pet.getServicosConsumidos.length === 0) {
                return; // Pula pets sem serviços consumidos
            }
            const tipoRaca = `${pet.getTipo} - ${pet.getRaca}`;

            if (!servicosMaisConsumidos[tipoRaca]) {
                servicosMaisConsumidos[tipoRaca] = {};
            }

            pet.getServicosConsumidos.forEach((servico) => {
                if (!servicosMaisConsumidos[tipoRaca][servico]) {
                    servicosMaisConsumidos[tipoRaca][servico] = 0;
                }
                servicosMaisConsumidos[tipoRaca][servico]++;
            });
        });

        for (const tipoRaca in servicosMaisConsumidos) {
            const servicos = servicosMaisConsumidos[tipoRaca];
            servicosMaisConsumidos[tipoRaca] = Object.entries(servicos)
                .sort(([, a], [, b]) => b - a) // Ordena os serviços por quantidade
                .reduce((acc, [servico, quantidade]) => {
                    acc[servico] = quantidade;
                    return acc;
                }, {} as { [servico: string]: number });
        }
        /* ___________________________________________________________________________ */
        const produtosMaisConsumidos: { [tipoRaca: string]: { [produto: string]: number } } = {};

        this.pets.forEach((pet) => {
            if (pet.getProdutosConsumidos.length === 0) {
                return; // Pula pets sem serviços consumidos
            }
            const tipoRaca = `${pet.getTipo} - ${pet.getRaca}`;

            if (!produtosMaisConsumidos[tipoRaca]) {
                produtosMaisConsumidos[tipoRaca] = {};
            }

            pet.getProdutosConsumidos.forEach((produto) => {
                if (!produtosMaisConsumidos[tipoRaca][produto]) {
                    produtosMaisConsumidos[tipoRaca][produto] = 0;
                }
                produtosMaisConsumidos[tipoRaca][produto]++;
            });
        });

        for (const tipoRaca in produtosMaisConsumidos) {
            const produtos = produtosMaisConsumidos[tipoRaca];
            produtosMaisConsumidos[tipoRaca] = Object.entries(produtos)
                .sort(([, a], [, b]) => b - a) // Ordena os serviços por quantidade
                .reduce((acc, [produto, quantidade]) => {
                    acc[produto] = quantidade;
                    return acc;
                }, {} as { [produto: string]: number });
        }
        
        console.log('\nServiços mais consumidos por raça e tipo:')
        for (const tipoRaca in servicosMaisConsumidos) {
            console.log(`${tipoRaca}:`);
            for (const servico in servicosMaisConsumidos[tipoRaca]) {
                console.log(`  ${servico}: ${servicosMaisConsumidos[tipoRaca][servico]}`);
            }
        }
        console.log('\n')

        console.log('\nProdutos mais consumidos por raça e tipo:')
        for (const tipoRaca in produtosMaisConsumidos) {
            console.log(`${tipoRaca}:`);
            for (const produto in produtosMaisConsumidos[tipoRaca]) {
                console.log(`  ${produto}: ${produtosMaisConsumidos[tipoRaca][produto]}`);
            }
        }
        console.log('\n')
    }
}