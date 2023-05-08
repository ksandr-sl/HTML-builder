const path = require('path');
const fs = require('fs');
const { mkdir, readdir, copyFile, access } = require('fs/promises');
const folder = path.join(__dirname, 'files');

function copyDir(files) {
  const copyFolder = path.join(__dirname, 'files-copy');

  fs.rm(copyFolder, { recursive: true }, error => {
    if (error) {
      console.log('create folder');
      mkdir(copyFolder, { recursive: true });
    } else {
      fs.rm(copyFolder, { recursive: true }, error => {
        console.log('delete and create folder');
        mkdir(copyFolder, { recursive: true });
      })
    }

    readdir(files).then(files => {
      for (file of files) {
        copyFile(path.join(__dirname, 'files', file), path.join(copyFolder, file));
      }
    })

  })

}

copyDir(folder);