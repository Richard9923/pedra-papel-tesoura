function playerChoice() {
  let choice = prompt("Escolha entre pedra papel tesoura");
  return choice;
}

function computerChoice() {
  const computerOptions = ["pedra", "papel", "tesoura"];
  let randomNumber = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomNumber];
}

function game(player, computer) {
  if (player == computer) {
    console.log(
      `Empate. Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "empate";
  } else if (player == "pedra" || computer == "tesoura") {
    console.log(
      `Jogador venceu! Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "vitoria";
  } else if (player == "papel" || computer == "pedra") {
    console.log(
      `Jogador venceu! Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "vitoria";
  } else if (player == "tesoura" || computer == "papel") {
    console.log(
      `Jogador venceu! Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "vitoria";
  } else {
    console.log(
      `Derrota. Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "derrota";
  }
}

let playerPoints = 0;
let computadorPoints = 0;
let gameOn = true;
console.log(`Pontuação do jogador: ${playerPoints}`);
console.log(`Pontuação do computador: ${computer}.`);

while (gameOn == true) {}
