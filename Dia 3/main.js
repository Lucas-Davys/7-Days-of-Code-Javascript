const area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End?");

if (area == "Front-End") {
    prompt("Você quer aprender React ou Vue?");
} else if (area == "Back-End") {
    prompt("Você quer aprender C# ou Java?");
}

const especializacao = prompt(`Você quer seguir se especializando na área de ${area} ou quer seguir se desenvolvendo para se tornar Fullstack?`)

if (especializacao == area) {
    alert(`Você vai entender cada vez mais sobre ${area}!`);
} else if (especializacao == "Fullstack") {
    alert("Você vai conhecer o melhor dos dois mundos!");
}

const pergunta = "Quantas outras tecnologias a mais você gostaria de aprender?";
const resposta = prompt(pergunta);

let contador = 0;

while (contador < resposta) {
    const tecnologia = prompt("Que outra tecnologia que você gostaria de aprender?");
    alert(`${tecnologia} é uma tecnologia muito interessante!`)
    contador += 1;
}

alert("Bons estudos!")