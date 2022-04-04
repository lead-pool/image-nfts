const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const { csvHeader } = require(`${basePath}/src/config.js`);
const fs = require("fs");
const buildDir = `${basePath}/build/json`;

const delay = ms => new Promise(res => setTimeout(res, ms));

const writeMetaData = (_data) => {
  fs.writeFileSync(`${buildDir}/_metadata.csv`, _data);
};

const appendMetaData = (_data) => {
  fs.appendFileSync(`${buildDir}/_metadata.csv`, _data);
};

const startCSVCreating = async () => {
    await delay(5000);
    // read json data
    let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    writeMetaData(csvHeader);

    data.forEach((item) => {

      let line = [];
      let noneLine = [];
  
      line.push(item.filename); /*Filename*/
      line.push(item.name);     /*name*/

      line.push(item.addInfo.collection); /*collection*/
      line.push(item.addInfo.edition);    /*edition*/
      line.push(item.addInfo.message);    /*message*/

      for (var i = 0; i < item.attributes.length; i++) {
        if (item.attributes[i].value == "none"){
          noneLine.push("None");
        }
        else{
          line.push(item.attributes[i].value);
        }
      }

      /* Add appending nones*/
      line = line.concat(noneLine);

      /* Add Website Info*/
      line.push(item.addInfo.website);

      appendMetaData(line.toString());
      appendMetaData('\r\n');

    });
};

startCSVCreating();

module.exports = {
  startCSVCreating
};