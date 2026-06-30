const alabamaCities = [
  "Abbeville", "Adamsville", "Addison", "Akron", "Alabaster",
  "Albertville", "Alexander City", "Alexandria", "Aliceville", "Altoona",
  "Andalusia", "Anniston", "Arab", "Ardmore", "Ashford",
  "Ashland", "Ashville", "Athens", "Atmore", "Attalla",
  "Auburn", "Axis", "Banks", "Bay Minette", "Bayou La Batre",
  "Berry", "Bessemer", "Birmingham", "Blountsville", "Boaz",
  "Brantley", "Bremen", "Brewton", "Bridgeport", "Brookwood",
  "Brownsboro", "Brundidge", "Butler", "Bynum", "Calera",
  "Camden", "Carrollton", "Cecil", "Cedar Bluff", "Centre",
  "Centreville", "Chancellor", "Chatom", "Chelsea", "Cherokee",
  "Childersburg", "Chunchula", "Citronelle", "Clanton", "Clay",
  "Clayton", "Cleveland", "Clio", "Coden", "Coffee Springs",
  "Coffeeville", "Collinsville", "Columbiana", "Coosada", "Cordova",
  "Cottondale", "Cottonwood", "Crane Hill", "Creola", "Cropwell",
  "Crossville", "Cuba", "Cullman", "Dadeville", "Daleville",
  "Daphne", "Dauphin Island", "Dawson", "Deatsville", "Decatur",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < alabamaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(alabamaCities[i]);
}

module.exports = { batches };
