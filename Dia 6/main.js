//const frutas = ["pão", "tapioca"];
let frutas = ["Macã", "Laranja", "Banana"];
let laticinios = ["Iogurte", "Requeijão", "Queijo"];
let congelados = ["Lasanha", "Nuggets", "Strogonoff"];
let doces = ["Bolo", "Picolé", "Brigadeiro"];
let array = [];

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
      array = frutas;

      if (array.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Frutas: ${array}.\nQual elemento você deseja remover?`
        );

        if (array.includes(elemento)) {
          // verifica se o item está incluído na lista
          let posicao = array.indexOf(elemento);

          array.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else if (categoria == "Laticínios") {
      array = laticinios;

      if (array.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Laticínios: ${array}.\nQual elemento você deseja remover?`
        );

        if (array.includes(elemento)) {
          let posicao = array.indexOf(elemento);

          array.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else if (categoria == "Congelados") {
      array = congelados;

      if (array.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Congelados: ${array}.\nQual elemento você deseja remover?`
        );

        if (array.includes(elemento)) {
          let posicao = array.indexOf(elemento);

          array.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else if (categoria == "Doces") {
      array = doces;

      if (array.length == 0) {
        // verifica se a lista está vazia
        alert("A lista está vazia.");
      } else {
        elemento = prompt(
          `Doces: ${array}.\nQual elemento você deseja remover?`
        );

        if (array.includes(elemento)) {
          let posicao = array.indexOf(elemento);

          array.splice(posicao, 1);
          alert(`O elemento ${elemento} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    } else {
      alert("Opção inválida!");
    }
  } else if (opcao == "Não") {
    alert(`Lista de compras: 
        Frutas: ${frutas}
        Laticínios: ${laticinios}
        Congelados: ${congelados}
        Doces: ${doces}`);
  } else {
    alert("Opção inválida!");
  }
}
