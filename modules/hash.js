const crypto = require("crypto");
module.exports = (data, len) => crypto
    .createHash("shake256", { outputLength: len })
    .update(data)
    .digest("hex");

