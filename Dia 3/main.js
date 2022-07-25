const area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End?");

if (area == "Front-End") {
    prompt("Você quer aprender React ou Vue?");
} else if (area == "Back-End") {
    prompt("Você quer aprender C# ou Java?");
}

const especializacao = prompt(`Você quer seguir se especializando na área de ${area} ou quer seguir se desenvolvendo para se tornar Fullstack?\nEscolha "${area}" ou "Fullstack".`)

if (especializacao == area) {
    alert(`Você vai entender cada vez mais sobre ${area}!`);
} else if (especializacao == "Fullstack") {
    alert("Você vai conhecer o melhor dos dois mundos!");
}

let resposta = prompt('Tem mais alguma outra tecnologia que você gostaria de aprender?\nDigite "Sim" ou "Não"');

while (resposta == "Sim") {
    let tecnologia = prompt("Que outra tecnologia que você gostaria de aprender?");
    alert(`${tecnologia} é uma tecnologia muito interessante!`);

    resposta = prompt('Tem mais alguma outra tecnologia que você gostaria de aprender?\nDigite "Sim" ou "Não"');
}

alert("Bons estudos!")