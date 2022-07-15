import LevelEntry from "./types";
import { queryDistrict, queryArea } from "./floor";
function queryCity(): Promise<LevelEntry[]> {
  return import("./generated/tt.json");
}

export { queryCity, queryDistrict, queryArea };
export default queryCity;
