let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let adicionar = prompt('Você deseja adicionar uma comida na sua lista de compras? Responda "Sim" ou "Não"');

while (adicionar == "Sim") {
    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt('Em qual categoria essa comida se encaixa? Escolha entre "Frutas", "Laticínios", "Congelados" ou "Doces"');

    if (categoria == "Frutas") {
        frutas.push(comida);        
    } else if (categoria == "Laticínios") {
        laticinios.push(comida);        
    } else if (categoria == "Congelados") {
        congelados.push(comida);        
    } else if (categoria == "Doces") {
        doces.push(comida);
    }

    adicionar = prompt('Você deseja adicionar mais alguma coisa na sua lista de compras? Responda "Sim" ou "Não"');

}

if (adicionar == "Não") {
    alert(`Lista de compras: 
    Frutas: ${frutas}
    Laticínios: ${laticinios}
    Congelados: ${congelados}
    Doces: ${doces}`);
}
