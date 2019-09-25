#!/usr/bin/env node
var readline = require('readline');
const fs = require('fs');
const sourceFileName = "languages/google/_.txt"

const waterfall = require('async/waterfall');
const each = require('async/each');
const source = [];

function readSource(cb) {
  const rlsource = readline.createInterface({
    input: fs.createReadStream(sourceFileName),
    output: process.stdout,
    terminal: false
  });
  rlsource.on('line', function (line) {
    source.push(line);
  });
  rlsource.on('close', () => {
    cb();
  })
}
function writeOne(name, cb) {
  const outputFileName = `languages/${name}.js`;
  const inputFileName = `languages/google/${name}.txt`;
  var rl = readline.createInterface({
    input: fs.createReadStream(inputFileName),
    output: process.stdout,
    terminal: false
  });
  const writable = fs.createWriteStream(outputFileName);
  writable.write(`const ${name} = {\n`);

  let i = 0;
  rl.on('line', function(line){
    writable.write(`"${source[i++]}": "${line.trim()}",\n`);
  });
  rl.on('close', () => {
    writable.write("};\n")
    writable.write(`export { ${name} };\n`);
    if (i !== source.length) {
      writable.write(`//TODO doesnt look like it matches source length=${source.length} ${name} length =${i}\n`);
    }
    writable.close();
    cb();
  })
}
//SEE-OTHER-ADDLANGUAGE - note cant import this from languages as may include ones here before built
fulllanguages = ["myanmar", "english", "french", "german", "hindi", "indonesian", "japanese", "marathi", "spanish", "portugese"];
thisbuild = fulllanguages;
thisbuild = ["english"]; // Dont rebuild as languages/_.txt may have changed
waterfall([
    cb => readSource(cb),
    cb2 => each(thisbuild,
      (l, cb1) => writeOne(l, cb1),
      (err) => cb2),
  ], (err, res) => {console.log("DONE")}
);
