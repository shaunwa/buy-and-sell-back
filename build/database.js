"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var connection;
var db = {
  connect: function connect() {
    connection = _mysql["default"].createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.DB_SOCKET
    });
    connection.connect();
  },
  query: function query(queryString, escapedValues) {
    return new Promise(function (resolve, reject) {
      connection.query(queryString, escapedValues, function (error, results, fields) {
        if (error) reject(error);
        resolve({
          results: results,
          fields: fields
        });
      });
    });
  },
  end: function end() {
    return connection.end();
  }
};
exports.db = db;