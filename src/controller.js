export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.handleRestart(this.restartGame.bind(this));
    this.view.handleCellClick(this.handleClick.bind(this));
  }

  handleClick(cell) {
    const result = this.model.makeMove(cell.id);

    if (result) {
      this.view.handleScore(result[0]);
      this.view.showMessage(result[1]);
    } else {
      this.view.handlePlayerMove(cell.id, this.model.currentPlayer);
    }
  }

  restartGame() {
    this.model.resetBoard();
    this.view.clearBoard();
  }
}
