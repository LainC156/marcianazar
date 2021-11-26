(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_DetailsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/DetailsComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/DetailsComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FooterComponent.vue */ "./resources/js/components/FooterComponent.vue");
/* harmony import */ var _NavigationComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationComponent.vue */ "./resources/js/components/NavigationComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NavigationComponent: _NavigationComponent_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    FooterComponent: _FooterComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      product_id: this.$route.params.id
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  computed: {
    product: function product() {
      var _this = this;

      return this.$store.state.products.find(function (item) {
        return item.id == _this.product_id;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Products/DetailsComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Products/DetailsComponent.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailsComponent_vue_vue_type_template_id_6fe7bb6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsComponent.vue?vue&type=template&id=6fe7bb6b& */ "./resources/js/components/Products/DetailsComponent.vue?vue&type=template&id=6fe7bb6b&");
/* harmony import */ var _DetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/DetailsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DetailsComponent_vue_vue_type_template_id_6fe7bb6b___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetailsComponent_vue_vue_type_template_id_6fe7bb6b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/DetailsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/DetailsComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Products/DetailsComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/DetailsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Products/DetailsComponent.vue?vue&type=template&id=6fe7bb6b&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Products/DetailsComponent.vue?vue&type=template&id=6fe7bb6b& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsComponent_vue_vue_type_template_id_6fe7bb6b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsComponent_vue_vue_type_template_id_6fe7bb6b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsComponent_vue_vue_type_template_id_6fe7bb6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetailsComponent.vue?vue&type=template&id=6fe7bb6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/DetailsComponent.vue?vue&type=template&id=6fe7bb6b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/DetailsComponent.vue?vue&type=template&id=6fe7bb6b&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/DetailsComponent.vue?vue&type=template&id=6fe7bb6b& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("navigation-component"),
      _vm._v(" "),
      _c(
        "v-main",
        {
          staticStyle: {
            "bbackground-color": "#D9AFD9",
            "background-image":
              "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"
          }
        },
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto",
                      attrs: {
                        width: "100vw",
                        dark: "",
                        outlined: "",
                        shaped: "",
                        elevation: "12"
                      }
                    },
                    [
                      _c("v-card-title", { staticStyle: { color: "pink" } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.product.product_name) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-carousel",
                        _vm._l(_vm.product.images, function(item) {
                          return _c("v-carousel-item", {
                            key: item.id,
                            attrs: {
                              src: item.url,
                              "reverse-transition": "fade-transition",
                              transition: "fade-transition"
                            }
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-card-subtitle",
                            { staticClass: "text-center" },
                            [
                              _c("div", [
                                _vm._v(
                                  "\n                                Descripción: "
                                ),
                                _c(
                                  "strong",
                                  { staticStyle: { color: "pink" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.product.product_description)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.product.gender
                                ? _c("div", [
                                    _vm._v(
                                      "\n                                Prenda para: "
                                    ),
                                    _c(
                                      "strong",
                                      { staticStyle: { color: "pink" } },
                                      [_vm._v(_vm._s(_vm.product.gender))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n                                Subcategoría: "
                                ),
                                _c(
                                  "strong",
                                  { staticStyle: { color: "pink" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.product.category.category_name)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n                                Precio: "
                                ),
                                _c(
                                  "strong",
                                  { staticStyle: { color: "pink" } },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.product.price) +
                                        "  pesos mexicanos(MXN.)"
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.product.size
                                ? _c("div", [
                                    _vm._v(
                                      "\n                                Tamaño: "
                                    ),
                                    _c(
                                      "strong",
                                      { staticStyle: { color: "pink" } },
                                      [_vm._v(_vm._s(_vm.product.size))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.product.color
                                ? _c("div", [
                                    _vm._v(
                                      "\n                                Color: "
                                    ),
                                    _c(
                                      "strong",
                                      { staticStyle: { color: "pink" } },
                                      [_vm._v(_vm._s(_vm.product.color))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.product.observations
                                ? _c("div", [
                                    _vm._v(
                                      "\n                                Detalles: "
                                    ),
                                    _c(
                                      "strong",
                                      { staticStyle: { color: "pink" } },
                                      [_vm._v(_vm._s(_vm.product.observations))]
                                    )
                                  ])
                                : _vm._e()
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                color: "teal accent-2",
                                rounded: "",
                                plain: "",
                                target: "_blank",
                                href: _vm.product.url_post
                              }
                            },
                            [
                              _c("v-icon", [_vm._v("mdi-instagram")]),
                              _vm._v(
                                "\n                            Ver en Instagram\n                        "
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("footer-component")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);