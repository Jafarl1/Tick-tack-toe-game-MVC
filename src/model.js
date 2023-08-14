export default class Model {
  constructor() {
    this.gameBoard = new Array(9).fill("");
    this.currentPlayer = "X";
  }

  checkWinner(player) {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winLines.some((line) => {
      return line.every((i) => this.gameBoard[i] === player);
    });
  }

  checkDraw() {
    return this.gameBoard.every((cell) => cell !== "");
  }

  makeMove(id) {
    if (!this.gameBoard[id]) {
      this.gameBoard[id] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        return [this.currentPlayer, `Player ${this.currentPlayer} wins!`];
      } else if (this.checkDraw()) {
        return [null, "The game ended in a draw."];
      }
      setTimeout(() => {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }, 0);
    } else {
      return "Invalid move";
    }
  }

  resetBoard() {
    this.gameBoard = new Array(9).fill("");
    this.currentPlayer = "X";
  }
}
