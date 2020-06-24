"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteListingRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _database = require("../database");

var deleteListingRoute = {
  method: 'DELETE',
  path: '/api/listings/{id}',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var id, token, user, userId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.params.id;
              token = req.headers.authtoken;
              _context.next = 4;
              return admin.auth().verifyIdToken(token);

            case 4:
              user = _context.sent;
              userId = user.user_id;
              _context.next = 8;
              return _database.db.query('DELETE FROM listings WHERE id=? AND user_id=?', [id, userId]);

            case 8:
              return _context.abrupt("return", {
                message: 'Success!'
              });

            case 9:
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
exports.deleteListingRoute = deleteListingRoute;