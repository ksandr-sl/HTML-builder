const fs = require('fs');
const path = require('path');
const { stdout, stdin } = require('process');
const output = fs.WriteStream(path.join(__dirname, 'notes.txt'));

fs.writeFile(path.join(__dirname, 'notes.txt'), '', (err) => {
  if (err) throw err;
  stdout.write('Hi! Write anything please...\n');
});

process.on('exit', () => stdout.write('Bye!\n'));

stdin.on('data', chunk => {
  let data = chunk.toString();

  if (data.trim() === 'exit') {
    process.exit();
  }

  output.write(data);
});