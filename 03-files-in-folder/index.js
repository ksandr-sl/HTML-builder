const { stat } = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');

readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}).then(files => {
  for (file of files) {
    if (file.isFile()) {
      let fileName = file.name;
      let fileExt = path.extname(file.name);
      stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
        console.log(fileName, fileExt, stats.size);
      })
    }
  }
})