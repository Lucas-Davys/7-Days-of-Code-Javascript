let frutas = ["Macã", "Laranja", "Banana"];
let laticinios = ["Iogurte", "Requeijão", "Queijo"];
let congelados = ["Lasanha", "Nuggets", "Strogonoff"];
let doces = ["Bolo", "Picolé", "Brigadeiro"];

let opcao;

while (opcao != "Não") {
  opcao = prompt(
    'Você deseja alterar a sua lista de compras? Responda "Sim" para adicionar um elemento, "Remover" para excluir ou "Não" para sair.'
  );

  if (opcao == "Sim") {
    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt(
      'Em qual categoria essa comida se encaixa? Escolha entre "Frutas", "Laticínios", "Congelados" ou "Doces"'
    );

    if (categoria == "Frutas") {
      frutas.push(comida);
    } else if (categoria == "Laticínios") {
      laticinios.push(comida);
    } else if (categoria == "Congelados") {
      congelados.push(comida);
    } else if (categoria == "Doces") {
      doces.push(comida);
    }

    alert(`${comida} agora faz parte da sua lista.`);
  } else if (opcao == "Remover") {
    let categoria = prompt(
      'De que gategoria você deseja remover? Escolha entre "Frutas", "Laticínios", "Congelados" ou "Doces".'
    );
    let elemento;

    if (categoria == "Frutas") {
      if (frutas.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Frutas: ${frutas}.\nQual elemento você deseja remover?`
        );

        if (frutas.includes(elemento)) {
          // verifica se o item está incluído na lista
          let posicao = frutas.indexOf(elemento);

          frutas.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else if (categoria == "Laticínios") {
      if (laticinios.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Laticínios: ${laticinios}.\nQual elemento você deseja remover?`
        );

        if (laticinios.includes(elemento)) {
          let posicao = laticinios.indexOf(elemento);

          laticinios.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else if (categoria == "Congelados") {
      if (congelados.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Congelados: ${congelados}.\nQual elemento você deseja remover?`
        );

        if (congelados.includes(elemento)) {
          let posicao = congelados.indexOf(elemento);

          congelados.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else if (categoria == "Doces") {
      if (doces.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Doces: ${doces}.\nQual elemento você deseja remover?`
        );

        if (doces.includes(elemento)) {
          let posicao = doces.indexOf(elemento);

          doces.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else {
      alert("Opção inválida!");
    }
  } else if (opcao == "Não") {
    break
  } else {
    alert("Opção inválida!");
  }
}

alert(`Lista de compras: 
  Frutas: ${frutas}
  Laticínios: ${laticinios}
  Congelados: ${congelados}
  Doces: ${doces}`);
