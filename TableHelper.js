const AsciiTable = require('ascii-table');

class TableHelper {
  static generateHelpTable(moves) {
    const table = new AsciiTable();
    table.setHeading('', ...moves.map(move => move.toUpperCase()));

    moves.forEach((move, index) => {
      let row = [move.toUpperCase()];
      for (let j = 0; j < moves.length; j++) {
        if (index === j) {
          row.push('Draw');
        } else {
          const diff = (moves.length + j - index) % moves.length;
          if (diff <= Math.floor(moves.length / 2)) {
            row.push('Lose');
          } else {
            row.push('Win');
          }
        }
      }
      table.addRow(...row);
    });

    console.log(table.toString());
  }
}

module.exports = TableHelper;
