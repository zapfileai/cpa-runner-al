const alabamaCities = [
  "Demopolis", "Dora", "Dothan", "Duncanville", "Eastaboga",
  "Eclectic", "Eight Mile", "Elba", "Elberta", "Eldridge",
  "Elmore", "Enterprise", "Eufaula", "Eutaw", "Evergreen",
  "Excel", "Fairfield", "Fairhope", "Falkville", "Faunsdale",
  "Fayette", "Florence", "Foley", "Forkland", "Fort Mitchell",
  "Fort Payne", "Frisco City", "Fultondale", "Fyffe", "Gadsden",
  "Garden City", "Gardendale", "Gaylesville", "Geneva", "Georgiana",
  "Goodwater", "Gordo", "Goshen", "Graham", "Grant",
  "Graysville", "Greenville", "Grove Hill", "Guin", "Gulf Shores",
  "Guntersville", "Gurley", "Haleyville", "Hamilton", "Hanceville",
  "Hartford", "Hartselle", "Harvest", "Hatchechubbee", "Hayden",
  "Hazel Green", "Headland", "Heflin", "Helena", "Hillsboro",
  "Hollywood", "Hope Hull", "Horton", "Huntsville", "Hurtsboro",
  "Irvington", "Jackson", "Jacksonville", "Jasper", "Jemison",
  "Killen", "Kinston", "Laceys Spring", "Lafayette", "Lanett",
  "Langston", "Lapine", "Leeds", "Leesburg", "Leighton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < alabamaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(alabamaCities[i]);
}

module.exports = { batches };
