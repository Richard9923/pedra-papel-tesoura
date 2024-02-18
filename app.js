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
  } else if (player == "pedra" && computer == "tesoura") {
    console.log(
      `Jogador venceu! Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "vitoria";
  } else if (player == "papel" && computer == "pedra") {
    console.log(
      `Jogador venceu! Escolha do jogador: ${player}. Escolha do computador: ${computer}.`
    );
    return "vitoria";
  } else if (player == "tesoura" && computer == "papel") {
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

function pontuacaoJogador() {
  console.log(`Pontuação do jogador: ${playerPoints}`);
}

function pontuacaoComputador() {
  console.log(`Pontuação do computador: ${computadorPoints}.`);
}

function vitoriaPlayer() {
  console.log(`O jogador venceu a partida com 3 pontos. Parabéns!!!`);
}

function vitoriaComputador() {
  console.log(`O computador venceu a partida com 3 pontos.`);
}

let playerPoints = 0;
let computadorPoints = 0;
let gameOn = true;

pontuacaoJogador();
pontuacaoComputador();
while (gameOn == true) {
  let gameResult = game(playerChoice(), computerChoice());

  if (gameResult == "empate") {
    playerPoints += 0;
    computadorPoints += 0;
    pontuacaoJogador();
    pontuacaoComputador();
  } else if (gameResult == "vitoria") {
    playerPoints += 1;
    pontuacaoJogador();
    pontuacaoComputador();
    if (playerPoints == 3) {
      vitoriaPlayer();
      gameOn = false;
    }
  } else if (gameResult == "derrota") {
    computadorPoints += 1;
    pontuacaoJogador();
    pontuacaoComputador();
    if (computadorPoints == 3) {
      vitoriaComputador();
      gameOn = false;
    }
  }
}
