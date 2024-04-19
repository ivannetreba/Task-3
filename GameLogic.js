class GameLogic {
  constructor(moves) {
    if (!moves || moves.length % 2 === 0 || new Set(moves).size !== moves.length) {
      throw new Error("Invalid moves configuration");
    }
    this.moves = moves;
    this.numberOfMoves = moves.length;
  }

  computeWinner(playerMove, computerMove) {
    const playerIndex = this.moves.indexOf(playerMove);
    const computerIndex = this.moves.indexOf(computerMove);
    const diff = (this.numberOfMoves + computerIndex - playerIndex) % this.numberOfMoves;
    if (diff === 0) return 'Draw';
    return diff <= Math.floor(this.numberOfMoves / 2) ? 'Computer wins' : 'Player wins';
  }
}

module.exports = GameLogic;

