var xml2json = require("xml2json");

module.exports = {
  parse: xml2json.toJson,
  parseConfig: {
    object: false,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false,
    alternateTextNode: false,
  },
  stringify: xml2json.toXml,
};
