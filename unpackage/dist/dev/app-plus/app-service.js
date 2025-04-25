(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************!*\
  !*** D:/APP项目/字母解释法练习器/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 13));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 17));\n__webpack_require__(/*! ./uni.promisify.adaptor */ 18);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFHbkI7QUFDQTtBQUFnQztBQUFBO0FBQ2hDQSxZQUFHLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLEtBQUs7QUFDaENDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFDbEIsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUcsbUJBQ2RHLFlBQUcsRUFDTjtBQUNGRSxHQUFHLENBQUNDLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgJy4vdW5pLnByb21pc2lmeS5hZGFwdG9yJ1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!************************************!*\
  !*** D:/APP项目/字母解释法练习器/pages.json ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!***********************************************************!*\
  !*** D:/APP项目/字母解释法练习器/pages/index/index.vue?mpType=page ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL+ahjOmdoi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************************************************************!*\
  !*** D:/APP项目/字母解释法练习器/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/APP项目/字母解释法练习器/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "scroll-view",
        { staticClass: _vm._$s(1, "sc", "scroll-content"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "section-title"),
            attrs: { _i: 2 },
          }),
          _vm._l(
            _vm._$s(3, "f", { forItems: _vm.chunkArray(_vm.letters, 2) }),
            function (row, index, $20, $30) {
              return _c(
                "view",
                {
                  key: _vm._$s(3, "f", {
                    forIndex: $20,
                    key: "letter" + index,
                  }),
                  staticClass: _vm._$s("3-" + $30, "sc", "row"),
                  attrs: { _i: "3-" + $30 },
                },
                _vm._l(
                  _vm._$s(4 + "-" + $30, "f", { forItems: row }),
                  function (item, $11, $21, $31) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(4 + "-" + $30, "f", {
                          forIndex: $21,
                          key: item.letter,
                        }),
                        staticClass: _vm._$s(
                          "4-" + $30 + "-" + $31,
                          "sc",
                          "card"
                        ),
                        attrs: { _i: "4-" + $30 + "-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.playSound(item.audio)
                          },
                        },
                      },
                      [
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(
                              "5-" + $30 + "-" + $31,
                              "sc",
                              "char"
                            ),
                            attrs: { _i: "5-" + $30 + "-" + $31 },
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "5-" + $30 + "-" + $31,
                                "t0-0",
                                _vm._s(item.letter)
                              )
                            ),
                          ]
                        ),
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(
                              "6-" + $30 + "-" + $31,
                              "sc",
                              "phonetic"
                            ),
                            attrs: { _i: "6-" + $30 + "-" + $31 },
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "6-" + $30 + "-" + $31,
                                "t0-0",
                                _vm._s(item.word)
                              )
                            ),
                          ]
                        ),
                      ]
                    )
                  }
                ),
                0
              )
            }
          ),
          _c("view", {
            staticClass: _vm._$s(7, "sc", "section-title"),
            attrs: { _i: 7 },
          }),
          _vm._l(
            _vm._$s(8, "f", { forItems: _vm.chunkArray(_vm.numbers, 2) }),
            function (row, index, $22, $32) {
              return _c(
                "view",
                {
                  key: _vm._$s(8, "f", {
                    forIndex: $22,
                    key: "number" + index,
                  }),
                  staticClass: _vm._$s("8-" + $32, "sc", "row"),
                  attrs: { _i: "8-" + $32 },
                },
                _vm._l(
                  _vm._$s(9 + "-" + $32, "f", { forItems: row }),
                  function (item, $13, $23, $33) {
                    return _c(
                      "view",
                      {
                        key: _vm._$s(9 + "-" + $32, "f", {
                          forIndex: $23,
                          key: item.letter,
                        }),
                        staticClass: _vm._$s(
                          "9-" + $32 + "-" + $33,
                          "sc",
                          "card"
                        ),
                        attrs: { _i: "9-" + $32 + "-" + $33 },
                        on: {
                          click: function ($event) {
                            return _vm.playSound(item.audio)
                          },
                        },
                      },
                      [
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(
                              "10-" + $32 + "-" + $33,
                              "sc",
                              "char"
                            ),
                            attrs: { _i: "10-" + $32 + "-" + $33 },
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "10-" + $32 + "-" + $33,
                                "t0-0",
                                _vm._s(item.letter)
                              )
                            ),
                          ]
                        ),
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(
                              "11-" + $32 + "-" + $33,
                              "sc",
                              "phonetic"
                            ),
                            attrs: { _i: "11-" + $32 + "-" + $33 },
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "11-" + $32 + "-" + $33,
                                "t0-0",
                                _vm._s(item.word)
                              )
                            ),
                          ]
                        ),
                      ]
                    )
                  }
                ),
                0
              )
            }
          ),
        ],
        2
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!***********************************************************************************!*\
  !*** D:/APP项目/字母解释法练习器/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL+ahjOmdoi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/moYzpnaIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/moYzpnaIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi/moYzpnaIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/APP项目/字母解释法练习器/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      letters: [{\n        letter: 'A',\n        word: 'Alpha',\n        audio: '/static/audio/Alpha.mp3'\n      }, {\n        letter: 'B',\n        word: 'Bravo',\n        audio: '/static/audio/Bravo.mp3'\n      }, {\n        letter: 'C',\n        word: 'Charlie',\n        audio: '/static/audio/Charlie.mp3'\n      }, {\n        letter: 'D',\n        word: 'Delta',\n        audio: '/static/audio/Delta.mp3'\n      }, {\n        letter: 'E',\n        word: 'Echo',\n        audio: '/static/audio/Echo.mp3'\n      }, {\n        letter: 'F',\n        word: 'Foxtrot',\n        audio: '/static/audio/Foxtrot.mp3'\n      }, {\n        letter: 'G',\n        word: 'Golf',\n        audio: '/static/audio/Golf.mp3'\n      }, {\n        letter: 'H',\n        word: 'Hotel',\n        audio: '/static/audio/Hotel.mp3'\n      }, {\n        letter: 'I',\n        word: 'India',\n        audio: '/static/audio/India.mp3'\n      }, {\n        letter: 'J',\n        word: 'Juliett',\n        audio: '/static/audio/Juliett.mp3'\n      }, {\n        letter: 'K',\n        word: 'Kilo',\n        audio: '/static/audio/Kilo.mp3'\n      }, {\n        letter: 'L',\n        word: 'Lima',\n        audio: '/static/audio/Lima.mp3'\n      }, {\n        letter: 'M',\n        word: 'Mike',\n        audio: '/static/audio/Mike.mp3'\n      }, {\n        letter: 'N',\n        word: 'November',\n        audio: '/static/audio/November.mp3'\n      }, {\n        letter: 'O',\n        word: 'Oscar',\n        audio: '/static/audio/Oscar.mp3'\n      }, {\n        letter: 'P',\n        word: 'Papa',\n        audio: '/static/audio/Papa.mp3'\n      }, {\n        letter: 'Q',\n        word: 'Quebec',\n        audio: '/static/audio/Quebec.mp3'\n      }, {\n        letter: 'R',\n        word: 'Romeo',\n        audio: '/static/audio/Romeo.mp3'\n      }, {\n        letter: 'S',\n        word: 'Sierra',\n        audio: '/static/audio/Sierra.mp3'\n      }, {\n        letter: 'T',\n        word: 'Tango',\n        audio: '/static/audio/Tango.mp3'\n      }, {\n        letter: 'U',\n        word: 'Uniform',\n        audio: '/static/audio/Uniform.mp3'\n      }, {\n        letter: 'V',\n        word: 'Victor',\n        audio: '/static/audio/Victor.mp3'\n      }, {\n        letter: 'W',\n        word: 'Whiskey',\n        audio: '/static/audio/Whiskey.mp3'\n      }, {\n        letter: 'X',\n        word: 'X-ray',\n        audio: '/static/audio/X-ray.mp3'\n      }, {\n        letter: 'Y',\n        word: 'Yankee',\n        audio: '/static/audio/Yankee.mp3'\n      }, {\n        letter: 'Z',\n        word: 'Zulu',\n        audio: '/static/audio/Zulu.mp3'\n      }],\n      numbers: [{\n        letter: '0',\n        word: 'Zero',\n        audio: '/static/audio/Zero.mp3'\n      }, {\n        letter: '1',\n        word: 'One',\n        audio: '/static/audio/One.mp3'\n      }, {\n        letter: '2',\n        word: 'Two',\n        audio: '/static/audio/Two.mp3'\n      }, {\n        letter: '3',\n        word: 'Three',\n        audio: '/static/audio/Three.mp3'\n      }, {\n        letter: '4',\n        word: 'Four',\n        audio: '/static/audio/Four.mp3'\n      }, {\n        letter: '5',\n        word: 'Fife',\n        audio: '/static/audio/Fife.mp3'\n      }, {\n        letter: '6',\n        word: 'Six',\n        audio: '/static/audio/Six.mp3'\n      }, {\n        letter: '7',\n        word: 'Seven',\n        audio: '/static/audio/Seven.mp3'\n      }, {\n        letter: '8',\n        word: 'Eight',\n        audio: '/static/audio/Eight.mp3'\n      }, {\n        letter: '9',\n        word: 'Niner',\n        audio: '/static/audio/Niner.mp3'\n      }]\n    };\n  },\n  methods: {\n    // 将数组分割为二维数组\n    chunkArray: function chunkArray(arr, size) {\n      return arr.reduce(function (acc, val, i) {\n        if (i % size === 0) acc.push([]);\n        acc[acc.length - 1].push(val);\n        return acc;\n      }, []);\n    },\n    // 播放音频\n    playSound: function playSound(audioPath) {\n      var audio = uni.createInnerAudioContext();\n      audio.src = audioPath;\n      audio.play();\n      audio.onEnded(function () {\n        return audio.destroy();\n      }); // 播放结束后销毁实例\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJsZXR0ZXJzIiwibGV0dGVyIiwid29yZCIsImF1ZGlvIiwibnVtYmVycyIsIm1ldGhvZHMiLCJjaHVua0FycmF5IiwiYXJyIiwic2l6ZSIsInJlZHVjZSIsImFjYyIsInZhbCIsImkiLCJwdXNoIiwibGVuZ3RoIiwicGxheVNvdW5kIiwiYXVkaW9QYXRoIiwidW5pIiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJzcmMiLCJwbGF5Iiwib25FbmRlZCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUVlO0VBQ2JBLElBQUksa0JBQUc7SUFDTCxPQUFPO01BQ0xDLE9BQU8sRUFBRSxDQUNQO1FBQUVDLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLEtBQUssRUFBRTtNQUE0QixDQUFDLEVBQ3BFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLEtBQUssRUFBRTtNQUE0QixDQUFDLEVBQ3BFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLEtBQUssRUFBRTtNQUE0QixDQUFDLEVBQ3BFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxVQUFVO1FBQUVDLEtBQUssRUFBRTtNQUE2QixDQUFDLEVBQ3RFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxRQUFRO1FBQUVDLEtBQUssRUFBRTtNQUEyQixDQUFDLEVBQ2xFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxRQUFRO1FBQUVDLEtBQUssRUFBRTtNQUEyQixDQUFDLEVBQ2xFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLEtBQUssRUFBRTtNQUE0QixDQUFDLEVBQ3BFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxRQUFRO1FBQUVDLEtBQUssRUFBRTtNQUEyQixDQUFDLEVBQ2xFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLEtBQUssRUFBRTtNQUE0QixDQUFDLEVBQ3BFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxRQUFRO1FBQUVDLEtBQUssRUFBRTtNQUEyQixDQUFDLEVBQ2xFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLENBQy9EO01BQ0RDLE9BQU8sRUFBRSxDQUNQO1FBQUVILE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRTtNQUF3QixDQUFDLEVBQzVEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRTtNQUF3QixDQUFDLEVBQzVEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEtBQUssRUFBRTtNQUF5QixDQUFDLEVBQzlEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRTtNQUF3QixDQUFDLEVBQzVEO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDLEVBQ2hFO1FBQUVGLE1BQU0sRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUEwQixDQUFDO0lBRXBFLENBQUM7RUFDSCxDQUFDO0VBQ0RFLE9BQU8sRUFBRTtJQUNQO0lBQ0FDLFVBQVUsc0JBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO01BQ3BCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxDQUFDLEVBQUs7UUFDakMsSUFBSUEsQ0FBQyxHQUFHSixJQUFJLEtBQUssQ0FBQyxFQUFFRSxHQUFHLENBQUNHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaENILEdBQUcsQ0FBQ0EsR0FBRyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNELElBQUksQ0FBQ0YsR0FBRyxDQUFDO1FBQzdCLE9BQU9ELEdBQUc7TUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1IsQ0FBQztJQUVEO0lBQ0FLLFNBQVMscUJBQUNDLFNBQVMsRUFBRTtNQUNuQixJQUFNYixLQUFLLEdBQUdjLEdBQUcsQ0FBQ0MsdUJBQXVCLEVBQUU7TUFDM0NmLEtBQUssQ0FBQ2dCLEdBQUcsR0FBR0gsU0FBUztNQUNyQmIsS0FBSyxDQUFDaUIsSUFBSSxFQUFFO01BQ1pqQixLQUFLLENBQUNrQixPQUFPLENBQUM7UUFBQSxPQUFNbEIsS0FBSyxDQUFDbUIsT0FBTyxFQUFFO01BQUEsRUFBQyxFQUFDO0lBQ3ZDO0VBQ0Y7QUFDRixDQUFDO0FBQUEiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZXR0ZXJzOiBbXG4gICAgICAgIHsgbGV0dGVyOiAnQScsIHdvcmQ6ICdBbHBoYScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9BbHBoYS5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnQicsIHdvcmQ6ICdCcmF2bycsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9CcmF2by5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnQycsIHdvcmQ6ICdDaGFybGllJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL0NoYXJsaWUubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ0QnLCB3b3JkOiAnRGVsdGEnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vRGVsdGEubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ0UnLCB3b3JkOiAnRWNobycsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9FY2hvLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdGJywgd29yZDogJ0ZveHRyb3QnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vRm94dHJvdC5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnRycsIHdvcmQ6ICdHb2xmJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL0dvbGYubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ0gnLCB3b3JkOiAnSG90ZWwnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vSG90ZWwubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ0knLCB3b3JkOiAnSW5kaWEnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vSW5kaWEubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ0onLCB3b3JkOiAnSnVsaWV0dCcsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9KdWxpZXR0Lm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdLJywgd29yZDogJ0tpbG8nLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vS2lsby5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnTCcsIHdvcmQ6ICdMaW1hJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL0xpbWEubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ00nLCB3b3JkOiAnTWlrZScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9NaWtlLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdOJywgd29yZDogJ05vdmVtYmVyJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL05vdmVtYmVyLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdPJywgd29yZDogJ09zY2FyJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL09zY2FyLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdQJywgd29yZDogJ1BhcGEnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vUGFwYS5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnUScsIHdvcmQ6ICdRdWViZWMnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vUXVlYmVjLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdSJywgd29yZDogJ1JvbWVvJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL1JvbWVvLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdTJywgd29yZDogJ1NpZXJyYScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9TaWVycmEubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ1QnLCB3b3JkOiAnVGFuZ28nLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vVGFuZ28ubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ1UnLCB3b3JkOiAnVW5pZm9ybScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9Vbmlmb3JtLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdWJywgd29yZDogJ1ZpY3RvcicsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9WaWN0b3IubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ1cnLCB3b3JkOiAnV2hpc2tleScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9XaGlza2V5Lm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdYJywgd29yZDogJ1gtcmF5JywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL1gtcmF5Lm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICdZJywgd29yZDogJ1lhbmtlZScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9ZYW5rZWUubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJ1onLCB3b3JkOiAnWnVsdScsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9adWx1Lm1wMycgfVxuICAgICAgXSxcbiAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgeyBsZXR0ZXI6ICcwJywgd29yZDogJ1plcm8nLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vWmVyby5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnMScsIHdvcmQ6ICdPbmUnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vT25lLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICcyJywgd29yZDogJ1R3bycsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9Ud28ubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJzMnLCB3b3JkOiAnVGhyZWUnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vVGhyZWUubXAzJyB9LFxuICAgICAgICB7IGxldHRlcjogJzQnLCB3b3JkOiAnRm91cicsIGF1ZGlvOiAnL3N0YXRpYy9hdWRpby9Gb3VyLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICc1Jywgd29yZDogJ0ZpZmUnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vRmlmZS5tcDMnIH0sXG4gICAgICAgIHsgbGV0dGVyOiAnNicsIHdvcmQ6ICdTaXgnLCBhdWRpbzogJy9zdGF0aWMvYXVkaW8vU2l4Lm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICc3Jywgd29yZDogJ1NldmVuJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL1NldmVuLm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICc4Jywgd29yZDogJ0VpZ2h0JywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL0VpZ2h0Lm1wMycgfSxcbiAgICAgICAgeyBsZXR0ZXI6ICc5Jywgd29yZDogJ05pbmVyJywgYXVkaW86ICcvc3RhdGljL2F1ZGlvL05pbmVyLm1wMycgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIOWwhuaVsOe7hOWIhuWJsuS4uuS6jOe7tOaVsOe7hFxuICAgIGNodW5rQXJyYXkoYXJyLCBzaXplKSB7XG4gICAgICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCB2YWwsIGkpID0+IHtcbiAgICAgICAgaWYgKGkgJSBzaXplID09PSAwKSBhY2MucHVzaChbXSlcbiAgICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5wdXNoKHZhbClcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfSwgW10pXG4gICAgfSxcblxuICAgIC8vIOaSreaUvumfs+mikVxuICAgIHBsYXlTb3VuZChhdWRpb1BhdGgpIHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcbiAgICAgIGF1ZGlvLnNyYyA9IGF1ZGlvUGF0aFxuICAgICAgYXVkaW8ucGxheSgpXG4gICAgICBhdWRpby5vbkVuZGVkKCgpID0+IGF1ZGlvLmRlc3Ryb3koKSkgLy8g5pKt5pS+57uT5p2f5ZCO6ZSA5q+B5a6e5L6LXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!*********************************!*\
  !*** D:/APP项目/字母解释法练习器/App.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ0s7QUFDaEssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**********************************************************!*\
  !*** D:/APP项目/字母解释法练习器/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../桌面/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1oQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4v5qGM6Z2iL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL+ahjOmdoi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL+ahjOmdoi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL+ahjOmdoi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uL+ahjOmdoi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi/moYzpnaIvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/APP项目/字母解释法练习器/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 17 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 18 */
/*!**************************************************!*\
  !*** D:/APP项目/字母解释法练习器/uni.promisify.adaptor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\nuni.addInterceptor({\n  returnValue: function returnValue(res) {\n    if (!(!!res && (_typeof(res) === \"object\" || typeof res === \"function\") && typeof res.then === \"function\")) {\n      return res;\n    }\n    return new Promise(function (resolve, reject) {\n      res.then(function (res) {\n        if (!res) return resolve(res);\n        return res[0] ? reject(res[0]) : resolve(res[1]);\n      });\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLnByb21pc2lmeS5hZGFwdG9yLmpzIl0sIm5hbWVzIjpbInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7QUFBQUEsR0FBRyxDQUFDQyxjQUFjLENBQUM7RUFDakJDLFdBQVcsdUJBQUVDLEdBQUcsRUFBRTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDQSxHQUFHLEtBQUssUUFBT0EsR0FBRyxNQUFLLFFBQVEsSUFBSSxPQUFPQSxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7TUFDeEcsT0FBT0QsR0FBRztJQUNaO0lBQ0EsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNELEdBQUcsRUFBSztRQUNoQixJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPRyxPQUFPLENBQUNILEdBQUcsQ0FBQztRQUM3QixPQUFPQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdJLE1BQU0sQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidW5pLmFkZEludGVyY2VwdG9yKHtcbiAgcmV0dXJuVmFsdWUgKHJlcykge1xuICAgIGlmICghKCEhcmVzICYmICh0eXBlb2YgcmVzID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXMgPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mIHJlcy50aGVuID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcykgcmV0dXJuIHJlc29sdmUocmVzKSBcbiAgICAgICAgcmV0dXJuIHJlc1swXSA/IHJlamVjdChyZXNbMF0pIDogcmVzb2x2ZShyZXNbMV0pXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ })
],[[0,"app-config"]]]);