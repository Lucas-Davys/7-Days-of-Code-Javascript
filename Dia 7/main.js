function somar(numero1, numero2) {
  return numero1 + numero2;
}

function subtrair(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

let operacao;
let numero1;
let numero2;
let resultado;

while (operacao != "Sair") {
  operacao = prompt(
    'Qual operação você deseja utilizar? Escolha entre "Somar", "Subtrair", "Multiplicar", "Dividir" ou "Sair"'
  );

  switch (operacao) {
    case "Somar":
      numero1 = parseFloat(prompt("Insira o primeiro número."));
      numero2 = parseFloat(prompt("Insira o segundo número"));
      resultado = somar(numero1, numero2);
      alert(`O resultado da operação é ${resultado}`);
      break;
      case "Subtrair":
      numero1 = prompt("Insira o primeiro número.");
      numero2 = prompt("Insira o segundo número");
      resultado = subtrair(numero1, numero2);
      alert(`O resultado da operação é ${resultado}`);
      break;
    case "Multiplicar":
      numero1 = prompt("Insira o primeiro número.");
      numero2 = prompt("Insira o segundo número");
      resultado = multiplicar(numero1, numero2);
      alert(`O resultado da operação é ${resultado}`);
      break;
    case "Dividir":
      numero1 = prompt("Insira o primeiro número.");
      numero2 = prompt("Insira o segundo número");
      resultado = dividir(numero1, numero2);
      alert(`O resultado da operação é ${resultado}`);
      break;
    case "Sair":
      break;
    default:
        alert("Operção inválida!")
  }
}
