import LevelEntry from "./types";
function queryCity(): LevelEntry[] {
  return require("./generated/tt.json");
}

function queryDistrict(id: String): LevelEntry[] {
  return require(`./generated/qh/` + id + `.json`);
}

function queryArea(id: String): LevelEntry[] {
  return require(`./generated/px/` + id + `.json`);
}

export { queryCity, queryDistrict, queryArea };
export default queryCity;
