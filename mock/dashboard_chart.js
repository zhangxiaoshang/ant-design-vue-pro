const random = require("lodash/random");

function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [100, 20, 35, 10, 66, 88].map(() => random(100));
      break;
    default:
      res = null;
  }

  return res;
}

module.exports = chart;
