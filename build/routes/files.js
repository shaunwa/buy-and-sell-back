"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticFilesRoute = exports.filesRoutes = void 0;
var angularRoutePaths = ['/', '/listings', '/contact/{id}', '/edit-listing/{id}', '/listings/{id}', '/my-listings', '/new-listing'];
var filesRoutes = angularRoutePaths.map(function (path) {
  return {
    method: 'GET',
    path: path,
    handler: function handler(req, h) {
      return h.file('dist/buy-and-sell/index.html');
    }
  };
});
exports.filesRoutes = filesRoutes;
var staticFilesRoute = {
  method: 'GET',
  path: '/{params*}',
  handler: {
    directory: {
      path: 'dist/buy-and-sell'
    }
  }
};
exports.staticFilesRoute = staticFilesRoute;