/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\n//routes\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\nconst post_routes_1 = __importDefault(__webpack_require__(/*! ./routes/post.routes */ \"./src/routes/post.routes.ts\"));\nclass App {\n    constructor(port) {\n        this.app = (0, express_1.default)();\n        this.port = port;\n        this.settings();\n        this.middlewares();\n        this.routes();\n    }\n    settings() {\n        this.app.set('port', this.port);\n    }\n    middlewares() {\n        this.app.use((0, morgan_1.default)('dev'));\n    }\n    routes() {\n        this.app.use(routes_1.default);\n        this.app.use('/posts', post_routes_1.default);\n    }\n    listen() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.app.listen(this.app.get('port'));\n            console.log(`Server listening in port: ${this.app.get('port')}`);\n        });\n    }\n}\nexports.App = App;\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/app.ts?");

/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction init(req, res) {\n    return res.send('Hi there! Welcome to my Api');\n}\nexports[\"default\"] = init;\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/controllers/index.ts?");

/***/ }),

/***/ "./src/controllers/posts.controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/posts.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getPosts = void 0;\n//controllers\nconst mysql_1 = __webpack_require__(/*! ../db/mysql */ \"./src/db/mysql.ts\");\nfunction getPosts(req, res) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const conn = yield (0, mysql_1.connect)();\n        const posts = yield conn.query(`SELECT * FROM posts`);\n        res.status(200).json(posts[0]);\n    });\n}\nexports.getPosts = getPosts;\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/controllers/posts.controller.ts?");

/***/ }),

/***/ "./src/db/mysql.ts":
/*!*************************!*\
  !*** ./src/db/mysql.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connect = void 0;\nconst promise_1 = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\nfunction connect() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const connection = yield (0, promise_1.createPool)({\n            host: \"localhost\",\n            user: 'root',\n            password: '1234',\n            database: 'node_mysql_ts',\n            port: 3306,\n            connectionLimit: 10\n        });\n        return connection;\n    });\n}\nexports.connect = connect;\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/db/mysql.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nconst PORT = process.env.PORT || 5006;\nfunction main() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = new app_1.App(PORT);\n        app.listen();\n    });\n}\nmain();\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/index.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\n//controllers\nconst controllers_1 = __importDefault(__webpack_require__(/*! ../controllers */ \"./src/controllers/index.ts\"));\nconst router = (0, express_1.Router)();\nrouter.get('/api/v1', controllers_1.default);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/post.routes.ts":
/*!***********************************!*\
  !*** ./src/routes/post.routes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\n//controller\nconst posts_controller_1 = __webpack_require__(/*! ../controllers/posts.controller */ \"./src/controllers/posts.controller.ts\");\nconst router = (0, express_1.Router)();\nrouter.get('/', posts_controller_1.getPosts);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://mysql-ts-api/./src/routes/post.routes.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;