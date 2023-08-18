import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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

  handleScore(scoreBoard) {
    if (scoreBoard) {
      this.player_x_score.innerHTML = scoreBoard["X"];
      this.player_o_score.innerHTML = scoreBoard["O"];
    }
  }

  handleRestart(callback) {
    this.newGameButton.onclick = () => callback();
  }

  clearBoard() {
    this.cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  }

  handleReset(callback) {
    this.resetButton.onclick = () => callback();
  }

  showMessage(message) {
    setTimeout(() => {
      Swal.fire({
        icon: message === "Invalid move" ? "error" : "success",
        title: message,
      });
    }, 100);
  }
}
