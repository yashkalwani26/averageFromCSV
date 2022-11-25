"use strict"
const average = require("./resultValueAverage");

var args =  process.argv.slice(2);
average.initiate(args[0], args[1], args[2]);
