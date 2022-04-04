const basePath = process.cwd();
const fs = require("fs");
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);
let rarities = [];
let editionSize = data.length;

data.forEach((item) => {

    for (var i = 0; i < item.attributes.length; i++) {
        /* if element doesn't exist create it*/
        let elem = rarities.find(x => x.trait_type === item.attributes[i].trait_type);

        if(rarities.length == 0 || !elem){
          let element = {
            "trait_type": item.attributes[i].trait_type,
            "attributes": [
                {
                  "value": item.attributes[i].value,
                  "count": 1,
                  "chance": ((1 / 100) * 100).toFixed(2) + "%"
                },
            ]
            };
            rarities.push(element);
        }
        /* if element exists read it*/
        else if(elem) {
          let attrib = elem.attributes.find(x => x.value === item.attributes[i].value);
           /* if trait value doesn't exist create it*/
          if(!attrib){
            elem.attributes.push(
            {
               "value": item.attributes[i].value,
               "count": 1,
               "chance": ((1 / 100) * 100).toFixed(2) + "%"
            },
            );
          }
          else{
            attrib.count = attrib.count + 1;
            attrib.chance = ((attrib.count / 100) * 100).toFixed(2) + "%";
          }
        }
    }
});

console.log(JSON.stringify(rarities, null, 2));
