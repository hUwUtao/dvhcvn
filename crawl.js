const fs = require("fs"),
  shake = require("./modules/hash");

const queryGSO = require("./modules/gso");
const operations = ["DanhMucTinh", "DanhMucQuanHuyen", "DanhMucPhuongXa"];

function prepDir(name) {
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
  }
}

prepDir("generated");

process.scache = {};
// function hashName(name) {
//   if (!process.scache[name]) process.scache[name] = shake(name, 4);
//   return process.scache[name];
// }
const id = (name) => name;

function writeFloor(
  table,
  parentReferenceKey,
  selfReferenceKey,
  selfNameKey,
  dir
) {
  const referencePool = {};
  table.forEach((row) => {
    if (!referencePool[row[parentReferenceKey]])
      referencePool[row[parentReferenceKey]] = [];
    referencePool[row[parentReferenceKey]].push({
      id: id(row[selfReferenceKey]),
      name: row[selfNameKey],
    });
  });
  Object.keys(referencePool).forEach((key) => {
    fs.writeFileSync(
      `./generated/${dir}/${id(key)}.json`,
      JSON.stringify(referencePool[key])
    );
  });
}

queryGSO(operations[0]).then((table) => {
  const dataCityLevel = table.map((row) => ({
    id: id(row["MaTinh"]),
    name: row["TenTinh"],
  }));
  fs.writeFileSync("./generated/0.json", JSON.stringify(dataCityLevel));
  console.log("Pending query", operations[1]);
  queryGSO(operations[1]).then((table) => {
    console.log("Done query", operations[1]);
    writeFloor(table, "MaTinh", "MaQuanHuyen", "TenQuanHuyen", "");
    console.log("Pending query", operations[2]);
    queryGSO(operations[2]).then((table) => {
      console.log("Done query", operations[2]);
      writeFloor(table, "MaQuanHuyen", "MaPhuongXa", "TenPhuongXa", "");
    });
  });
});
