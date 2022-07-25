let numero = Math.floor(Math.random() * (10 - 0 + 1) + 1);

let palpite = prompt("Escolha um número de 0 a 10");
let tentativas = 3;

while (tentativas > 0) {
  tentativas--;

  if (palpite == numero) {
    alert("Parabéns, você acertou!");
    break;
  } else {

    if (tentativas > 0) {
      if (tentativas != 1) {
        alert(`Você ainda tem ${tentativas} tentativas`);
        palpite = prompt("Qual é o número secreto?");
      } else {
        alert(`Você ainda tem ${tentativas} tentativa`);
        palpite = prompt("Qual é o número secreto?");
      }
    } else {
      alert(`Infelizmente você não acertou! O número era ${numero}`);
    }
  }
}
