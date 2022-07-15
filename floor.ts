import LevelEntry from "./types";
function queryDistrict(id: String): Promise<LevelEntry[]> {
  return import(`./generated/qh/${id}.json`);
}

function queryArea(id: String): Promise<LevelEntry[]> {
  return import(`./generated/px/${id}.json`);
}
export { queryDistrict, queryArea };
