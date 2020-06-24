"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateListingRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _database = require("../database");

var updateListingRoute = {
  method: 'POST',
  path: '/api/listings/{id}',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, _req$payload, name, description, price, token, user, userId, _yield$db$query, results;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.params.id;
              _req$payload = req.payload, name = _req$payload.name, description = _req$payload.description, price = _req$payload.price;
              token = req.headers.authtoken;
              _context.next = 5;
              return admin.auth().verifyIdToken(token);

            case 5:
              user = _context.sent;
              userId = user.user_id;
              _context.next = 9;
              return _database.db.query("\n            UPDATE listings\n                SET name=?, description=?, price=?\n                WHERE id=? AND user_id=?\n        ", [name, description, price, id, userId]);

            case 9:
              _context.next = 11;
              return _database.db.query('SELECT * FROM listings WHERE id=? AND user_id=?', [id, userId]);

            case 11:
              _yield$db$query = _context.sent;
              results = _yield$db$query.results;
              return _context.abrupt("return", results[0]);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
};
exports.updateListingRoute = updateListingRoute;