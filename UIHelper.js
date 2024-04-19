const prompt = require('prompt-sync')({ sigint: true });
const TableHelper = require('./TableHelper');  

class UIHelper {
  static displayMenu(moves) {
    console.log('Available moves:');
    moves.forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });
    console.log('0 - Exit');
    console.log('? - Help');
  }

  static getUserMove(moves) {
    UIHelper.displayMenu(moves);
    let choice;
    while (true) {
      choice = prompt('Enter your move: ');
      if (choice === '?') {
        TableHelper.generateHelpTable(moves);
        UIHelper.displayMenu(moves);
      } else if (choice === '0') {
        return 'Exit';  
      } else {
        const moveIndex = parseInt(choice) - 1;
        if (moveIndex >= 0 && moveIndex < moves.length) {
          return moves[moveIndex];  
        } else {
          console.log('Invalid move, please try again.');
          UIHelper.displayMenu(moves);
        }
      }
    }
  }
}

module.exports = UIHelper;

