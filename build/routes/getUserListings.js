"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserListingsRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _database = require("../database");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var getUserListingsRoute = {
  method: 'GET',
  path: '/api/users/{userId}/listings',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var token, user, userId, _yield$db$query, results;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authtoken;
              _context.next = 3;
              return admin.auth().verifyIdToken(token);

            case 3:
              user = _context.sent;
              userId = req.params.userId;

              if (!(user.user_id !== userId)) {
                _context.next = 7;
                break;
              }

              throw _boom["default"].unauthorized('Users can only access their own listings!');

            case 7:
              _context.next = 9;
              return _database.db.query('SELECT * FROM listings WHERE user_id=?', [userId]);

            case 9:
              _yield$db$query = _context.sent;
              results = _yield$db$query.results;
              return _context.abrupt("return", results);

            case 12:
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
exports.getUserListingsRoute = getUserListingsRoute;