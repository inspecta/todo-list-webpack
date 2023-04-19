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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  font-family: system-ui;\\n}\\n\\nbody {\\n  background-color: rgb(243, 242, 242);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n\\n.todo-list {\\n  width: 70%;\\n  margin: auto;\\n  height: auto;\\n  background-color: #fff;\\n  box-shadow: 0 0 5px 5px rgb(231, 231, 231);\\n  padding: 10px;\\n}\\n\\nh3 {\\n  font-style: normal;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid rgb(233, 233, 233);\\n}\\n\\n.add-task {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid rgb(233, 233, 233);\\n}\\n\\n.input-task {\\n  outline: 0;\\n  border: 0;\\n  width: 80%;\\n}\\n\\n.input-task::placeholder {\\n  font-style: italic;\\n  font-size: 14px;\\n}\\n\\n.fa-arrow-left {\\n  margin-right: 10px;\\n  cursor: pointer;\\n}\\n\\n.input-display {\\n  border: 0;\\n  outline: 0;\\n  font-size: 16px;\\n  cursor: auto;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.tasks-list {\\n  list-style: none;\\n  padding-left: 10px;\\n}\\n\\n.tasks-list > li {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom: 10px;\\n  border-bottom: 1px solid rgb(224, 224, 224);\\n  padding-left: 0;\\n}\\n\\n.task {\\n  display: flex;\\n  flex-direction: row;\\n  width: 80%;\\n  gap: 10px;\\n  margin-bottom: 10px;\\n}\\n\\n.fa-trash-can {\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  background-color: rgb(243, 242, 242);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#clear-tasks {\\n  border: 0;\\n  outline: 0;\\n  cursor: pointer;\\n  width: 100%;\\n  height: 2em;\\n  font-size: 1.5em;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .todo-list {\\n    width: 60%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/retrieveFromStorage.js */ \"./src/modules/retrieveFromStorage.js\");\n/* harmony import */ var _modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayTasks.js */ \"./src/modules/displayTasks.js\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n\n\n\n\n\nconst totalTasks = JSON.parse((0,_modules_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo')) || [];\nconst tasksListDisplay = document.querySelector('.display');\n\nif (totalTasks.length === 0) {\n  tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';\n}\n\n/* Add a new task */\n(0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  totalTasks.forEach((i) => {\n    (0,_modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i);\n  });\n  (0,_modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__.footer)();\n});\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/Tasks.js":
/*!******************************!*\
  !*** ./src/modules/Tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveFromStorage.js */ \"./src/modules/retrieveFromStorage.js\");\n\n\nconst totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('todo')) || [];\n\nclass Tasks {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n\n  addTask = (formDesc, formCompleted, formIndex) => {\n    const newTask = new Tasks(formDesc, formCompleted, formIndex);\n    totalTasks.push(newTask);\n    localStorage.setItem('todo', JSON.stringify(totalTasks));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/Tasks.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.js */ \"./src/modules/Tasks.js\");\n/* harmony import */ var _retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveFromStorage.js */ \"./src/modules/retrieveFromStorage.js\");\n/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTasks.js */ \"./src/modules/displayTasks.js\");\n\n\n\n\nconst insertTask = new _Tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst tasksListDisplay = document.querySelector('.display');\n\nlet totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo')) || [];\n\nconst addTask = () => {\n  const taskDescription = document.querySelector('.input-task');\n  const inputTask = document.querySelector('.fa-arrow-left');\n  inputTask.addEventListener('click', () => {\n    insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));\n    tasksListDisplay.innerHTML = '';\n    totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo'));\n    totalTasks.forEach((i) => {\n      (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i);\n    });\n    taskDescription.value = '';\n  });\n\n  taskDescription.addEventListener('keyup', (e) => {\n    if (e.keyCode === 13) {\n      insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));\n      tasksListDisplay.innerHTML = '';\n      totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo'));\n      totalTasks.forEach((j) => {\n        (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(j);\n      });\n      taskDescription.value = '';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/checkCompleted.js":
/*!***************************************!*\
  !*** ./src/modules/checkCompleted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveFromStorage.js */ \"./src/modules/retrieveFromStorage.js\");\n\n\nconst checkCompleted = (id) => {\n  const totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('todo'));\n\n  totalTasks.forEach((task) => {\n    if (task.index === id) {\n      task.completed = !task.completed;\n    }\n  });\n  localStorage.setItem('todo', JSON.stringify(totalTasks));\n  return JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('todo'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCompleted);\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/checkCompleted.js?");

/***/ }),

/***/ "./src/modules/displayTasks.js":
/*!*************************************!*\
  !*** ./src/modules/displayTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n/* harmony import */ var _retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveFromStorage.js */ \"./src/modules/retrieveFromStorage.js\");\n/* harmony import */ var _checkCompleted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkCompleted.js */ \"./src/modules/checkCompleted.js\");\n\n\n\n\nconst display = document.querySelector('.display');\n\nconst displayTasks = (tasksObj) => {\n  const tasksLists = document.createElement('ul');\n  tasksLists.classList.add('tasks-list');\n  display.appendChild(tasksLists);\n  const taskDetails = document.createElement('li');\n  taskDetails.classList.add('task-list-items');\n  tasksLists.appendChild(taskDetails);\n\n  taskDetails.innerHTML = `\n      <div class='task'>\n        <input type='checkbox' class='checkbox' id='${tasksObj.index}'/>\n        <input type='text' value='${tasksObj.description}' id='input-display-${tasksObj.index}' data-id='${tasksObj.index}' class='input-display'/>\n      </div>\n      <i class=\"fa-solid fa-trash-can\" data-id=\"${tasksObj.index}\" id=\"btn-${tasksObj.index}\"></i>\n    `;\n\n  const taskStatus = document.getElementById(tasksObj.index);\n  const inputDisplay = document.getElementById(`input-display-${tasksObj.index}`);\n\n  if (tasksObj.completed) {\n    taskStatus.checked = true;\n    inputDisplay.style.textDecoration = 'line-through';\n  } else {\n    taskStatus.checked = false;\n    inputDisplay.style.textDecoration = 'none';\n  }\n\n  /* Completed tasks */\n  const checkbox = document.getElementById(`${tasksObj.index}`);\n  checkbox.addEventListener('change', () => {\n    (0,_checkCompleted_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasksObj.index);\n    if (taskStatus.checked) {\n      inputDisplay.style.textDecoration = 'line-through';\n    } else {\n      inputDisplay.style.textDecoration = 'none';\n    }\n  });\n\n  /* Remove tasks */\n  const removeBtn = document.getElementById(`btn-${tasksObj.index}`);\n  removeBtn.addEventListener('click', () => {\n    (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksObj.index);\n  });\n\n  /* Update tasks */\n  const editTasks = document.getElementById(`input-display-${tasksObj.index}`);\n  editTasks.addEventListener('change', () => {\n    const task = document.getElementById(`input-display-${tasksObj.index}`);\n    let totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo'));\n    totalTasks.forEach((item) => {\n      if (item.index === tasksObj.index) {\n        item.description = task.value;\n      }\n    });\n    totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));\n    display.innerHTML = '';\n    totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo'));\n    totalTasks.forEach((i) => {\n      displayTasks(i);\n    });\n  });\n};\n\nconst footer = () => {\n  const todoListContainer = document.querySelector('.todo-list');\n\n  const lowDiv = document.createElement('div');\n  lowDiv.classList.add('footer');\n  todoListContainer.appendChild(lowDiv);\n\n  const clearBtn = document.createElement('button');\n  lowDiv.appendChild(clearBtn);\n  clearBtn.id = 'clear-tasks';\n  clearBtn.appendChild(document.createTextNode('Clear all completed'));\n\n  const clearTasks = document.getElementById('clear-tasks');\n  clearTasks.addEventListener('click', () => {\n    let totalTasks = JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo'));\n    totalTasks = totalTasks.filter((task) => task.completed !== true);\n    localStorage.setItem('todo', JSON.stringify(totalTasks));\n    display.innerHTML = '';\n    JSON.parse((0,_retrieveFromStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todo'));\n    totalTasks.forEach((i) => {\n      displayTasks(i);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/displayTasks.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTask = (id) => {\n  const tasksListDisplay = document.querySelector('.display');\n\n  let totalTasks = JSON.parse(localStorage.getItem('todo'));\n\n  const btn = document.getElementById(`btn-${id}`);\n\n  totalTasks = totalTasks.filter((task) => task.index !== id);\n  /* Re allocated indices */\n  totalTasks.forEach((i, j) => {\n    i.index = j;\n  });\n\n  totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));\n  btn.parentElement.parentElement.remove();\n\n  if (totalTasks.length === 0) {\n    tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/retrieveFromStorage.js":
/*!********************************************!*\
  !*** ./src/modules/retrieveFromStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst retrieveFromStorage = (key) => {\n  const retrievedData = localStorage.getItem(key);\n  return retrievedData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveFromStorage);\n\n//# sourceURL=webpack://todo-list-webpack/./src/modules/retrieveFromStorage.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;