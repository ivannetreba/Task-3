const CryptoUtils = require('./CryptoUtils');
const GameLogic = require('./GameLogic');
const UIHelper = require('./UIHelper');

function validateMoves(moves) {
  if (moves.length < 3) {
    throw new Error('Please enter at least 3 moves. For example: 1 2 3');
  }
  if (moves.length % 2 === 0) {
    throw new Error('Please enter an odd number of moves. For example: rock paper scissors lizard 5');
  }
  if (new Set(moves).size !== moves.length) {
    throw new Error('Please enter unique moves. For example: rock paper scissors lizard spock');
  }
}

function main() {
  try {
    const moves = process.argv.slice(2);
    validateMoves(moves);
    
    const gameLogic = new GameLogic(moves);
    const key = CryptoUtils.generateKey();
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    const hmac = CryptoUtils.computeHMAC(key, computerMove);

    console.log(`HMAC: ${hmac}`);

    const userMove = UIHelper.getUserMove(moves);
    if (userMove === 'Exit') return console.log('Exit the game.');

    const result = gameLogic.computeWinner(userMove, computerMove);

    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(result);
    console.log(`HMAC key: ${key.toString('hex')}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();

