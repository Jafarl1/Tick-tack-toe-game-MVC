export default class Model {
  constructor() {
    this.gameBoard = new Array(9).fill("");
    this.currentPlayer = "X";
    this.allowToMove = true;
    this.scoreBoard = {
      X: 0,
      O: 0,
    };
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
      if (this.allowToMove) {
        this.gameBoard[id] = this.currentPlayer;
        if (this.checkWinner(this.currentPlayer)) {
          this.scoreBoard[this.currentPlayer]++;
          setTimeout(() => (this.allowToMove = false), 0);
          return [
            this.scoreBoard,
            `Player ${this.currentPlayer} wins!`,
            this.allowToMove,
          ];
        } else if (this.checkDraw()) {
          setTimeout(() => (this.allowToMove = false), 0);
          return [null, "The game ended in a draw.", this.allowToMove];
        }
        setTimeout(() => {
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        }, 0);
      }
    } else {
      return [null, "Invalid move", this.allowToMove];
    }
  }

  resetBoard() {
    this.allowToMove = true;
    this.gameBoard = new Array(9).fill("");
    this.currentPlayer = "X";
  }

  resetScore() {
    this.scoreBoard = {
      X: 0,
      O: 0,
    };
  }
}
