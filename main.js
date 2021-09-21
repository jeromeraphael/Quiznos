// REQUIRE
let http = require("http");
let mysql = require("mysql");
let events = require("events");

let output = "";
let sqlquery = "";
let res = "";

//Connection & Event Emitter
// Reviewed parts of old coding HW/EXERCISES to form logic.
let httpServer = http.createServer(processServerRequest);
httpServer.listen(3306);