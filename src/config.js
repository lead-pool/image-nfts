const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.ada;

// General metadata for Cardarno
const namePrefix = "Lousy CNFT Easter 2022";
const fileNamePrefix = "LousyCNFTEaster";
const description = "Lousy CNFT Easter edition";
const baseUri = "ipfs://NewUriToReplace";
const padZeroLength = 3;

const csvHeader = "Filename,name,Collection,Edition,Message,Bunny Type,Trait 1,Trait 2,Trait 3,Trait 4,Trait 5,Website\r\n"

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Background", options: {hideTrait: true} },
      { name: "Egg", options: {traitOrder: 4} },
      { name: "Title", options: {hideTrait: true}  },
      { name: "Bunny", options: {displayName: "Bunny Type",traitOrder: 1}},
      { name: "Face", options: {hideTrait: true} },
      { name: "Camo", options: {traitOrder: 2} },
      { name: "Armor", options: {traitOrder: 5} },
      { name: "Accessories", options: {traitOrder: 3} },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2500,
  height: 2500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  addInfo: {
    collection: "Lousy CNFT",
    edition: "Easter 2022",
    message: "All i got for Easter was this Lousy CNFT",
    website: "www.lousyCNFT.com"
  }
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 50000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 100,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  fileNamePrefix,
  csvHeader
};
