const axios = require("axios"),
  XML = require("./xml"),
  endpoint = "https://danhmuchanhchinh.gso.gov.vn/DMDVHC.asmx";
module.exports = (operation) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        endpoint,
        `<?xml version="1.0" encoding="utf-8"?>
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <${operation} xmlns="http://tempuri.org/">
            <DenNgay>string</DenNgay>
          </${operation}>
        </soap12:Body>
      </soap12:Envelope>`,
        {
          headers: {
            "Content-Type": "application/soap+xml; charset=utf-8",
          },
        }
      )
      .then((res) => {
        resolve(
          JSON.parse(XML.parse(res.data))[
            // Soap keys
            "soap:Envelope"
          ]["soap:Body"][
            // Operation keys
            `${operation}Response`
          ][`${operation}Result`][
            // Shit what this?
            "diffgr:diffgram"
          ]["DocumentElement"]["TABLE"]
        );
      });
  });
};
