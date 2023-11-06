const fs = require("fs");
const path = require("path");
const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const EXTENSION = '.css';

if (!sourceDir || !targetDir) {
  console.log("Usage: node copyFiles.js <sourceDir> <targetDir>");
  process.exit(1);
}

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error("Error reading source directory:", err);
    process.exit(1);
  }

  const targetFiles = files.filter(file => {
    return path.extname(file).toLowerCase() === EXTENSION;
  });

  targetFiles.forEach(file => {
    const sourceFilePath = path.join(sourceDir, file);
    const targetFilePath = path.join(targetDir, file);

    fs.copyFile(sourceFilePath, targetFilePath, err => {
      if (err) {
        console.error(`Error copying ${file}:`, err);
      } else {
        console.log(`Copied ${file} to ${targetDir}`);
      }
    });
  });
});