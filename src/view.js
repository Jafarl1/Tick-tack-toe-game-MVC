export default class View {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.newGameButton = document.getElementById("play-button");
    this.resetButton = document.getElementById("reset-button");
    this.player_x_score = document.getElementById("player-1-score");
    this.player_o_score = document.getElementById("player-2-score");
  }

  handleCellClick(callback) {
    this.cells.forEach((cell) => {
      cell.onclick = () => callback(cell);
    });
  }

  handlePlayerMove(id, player) {
    this.cells.forEach((cell) => {
      if (cell.id === id) {
        cell.innerHTML = player;
      }
    });
  }

  clearBoard() {
    this.cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  }

  handleRestart(callback) {
    this.newGameButton.onclick = () => callback();
  }

  handleScore(winner) {
    // winner === "X" ? this.player_x_score++ : runInThisContext.player_o_score++;
    
  }

  showMessage(message) {
    alert(message);
  }
}