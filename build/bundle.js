/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_VACANCIES = exports.FETCH_VACANCIES = "FETCH_VACANCIES";

var fetchVacancies = exports.fetchVacancies = function fetchVacancies() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/api/vacancies");

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_VACANCIES,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_DESCRIPTION = exports.FETCH_DESCRIPTION = "FETCH_DESCRIPTION";
var fetchVacanciesDescription = exports.fetchVacanciesDescription = function fetchVacanciesDescription(id) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/api/vacancies/" + id);

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_DESCRIPTION,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(23);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _VacanciesListPage = __webpack_require__(24);

var _VacanciesListPage2 = _interopRequireDefault(_VacanciesListPage);

var _VacanciesItemPage = __webpack_require__(26);

var _VacanciesItemPage2 = _interopRequireDefault(_VacanciesItemPage);

var _NotFoundPage = __webpack_require__(29);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _VacanciesListPage2.default, {
    path: "/vacancies",
    exact: true
  }), _extends({}, _VacanciesItemPage2.default, {
    path: "/vacancies/:id"
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(17);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(12);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(30);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(33);

var _createStore2 = _interopRequireDefault(_createStore);

var _data = __webpack_require__(39);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3333;
var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.get("/api/vacancies", function (req, res) {
  res.send(_data2.default);
});

app.get("/api/vacancies/:id", function (req, res) {
  res.send(_data2.default[req.params.id - 1]);
});

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    console.log(req.path);
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(19);

var _Header2 = _interopRequireDefault(_Header);

var _Reboot = __webpack_require__(22);

var _Reboot2 = _interopRequireDefault(_Reboot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Reboot2.default, null),
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(20);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Typography = __webpack_require__(6);

var _Typography2 = _interopRequireDefault(_Typography);

var _Toolbar = __webpack_require__(21);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _styles = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  flex: {
    flex: 1
  },
  linkStyle: {
    textDecoration: "none",
    color: "white"
  }
};

var Header = function Header(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    _AppBar2.default,
    { position: "static" },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: "title", color: "inherit", className: classes.flex },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/", className: classes.linkStyle },
          "Recruting App"
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/vacancies", className: classes.linkStyle },
        _react2.default.createElement(
          _Button2.default,
          { color: "inherit" },
          "Vacancies"
        )
      )
    )
  );
};

Header.defaultProps = {
  classes: {}
};

exports.default = (0, _styles.withStyles)(styles)(Header);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Reboot");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-top: 200px;\n"], ["\n  text-align: center;\n  margin-top: 200px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  text-decoration: none;\n"], ["\n  text-decoration: none;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var LinkStyles = _styledComponents2.default.div(_templateObject2);

var Home = function Home() {
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      "h3",
      null,
      "Welcome!"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Interested in new opportunities? We are hiring!"
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/vacancies", style: { textDecoration: "none" } },
      _react2.default.createElement(
        _Button2.default,
        { raised: true, color: "secondary" },
        "Hot vacancies"
      )
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n  color: #212121;\n"], ["\n  text-align: center;\n  color: #212121;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _actions = __webpack_require__(4);

var _reactHelmet = __webpack_require__(9);

var _isEmpty = __webpack_require__(10);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _CardList = __webpack_require__(25);

var _CardList2 = _interopRequireDefault(_CardList);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents2.default.h3(_templateObject);

var VacanciesList = function (_Component) {
  _inherits(VacanciesList, _Component);

  function VacanciesList() {
    _classCallCheck(this, VacanciesList);

    return _possibleConstructorReturn(this, (VacanciesList.__proto__ || Object.getPrototypeOf(VacanciesList)).apply(this, arguments));
  }

  _createClass(VacanciesList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchVacancies();
    }
  }, {
    key: "head",
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          "title",
          null,
          "Vacancies List"
        ),
        _react2.default.createElement("meta", { property: "og:title", content: "Vacancies App" })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var vacancies = this.props.vacancies;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          Heading,
          null,
          "Look at our Vacancies!"
        ),
        this.head(),
        !(0, _isEmpty2.default)(vacancies) && _react2.default.createElement(_CardList2.default, { items: vacancies })
      );
    }
  }]);

  return VacanciesList;
}(_react.Component);

VacanciesList.defaultProps = {
  vacancies: []
};


var mapStateToProps = function mapStateToProps(state) {
  return { vacancies: state.vacancies };
};

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchVacancies)());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchVacancies: _actions.fetchVacancies })(VacanciesList)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _styles = __webpack_require__(7);

var _Card = __webpack_require__(13);

var _Card2 = _interopRequireDefault(_Card);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(6);

var _Typography2 = _interopRequireDefault(_Typography);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _isEmpty = __webpack_require__(10);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var styles = {
  card: {
    maxWidth: 500,
    marginBottom: 20
  },
  media: {
    height: 200
  },
  link: {
    textDecoration: "none"
  },
  cardActions: {
    justifyContent: "flex-end"
  }
};

var CardList = function CardList(_ref) {
  var classes = _ref.classes,
      items = _ref.items;

  return _react2.default.createElement(
    Wrapper,
    null,
    !(0, _isEmpty2.default)(items) && items.map(function (item, index) {
      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card, key: "cards-" + index },
        _react2.default.createElement(_Card.CardMedia, {
          className: classes.media,
          image: item.image,
          title: "Contemplative Reptile"
        }),
        _react2.default.createElement(
          _Card.CardContent,
          null,
          _react2.default.createElement(
            _Typography2.default,
            { type: "headline", component: "h2" },
            item.title
          ),
          _react2.default.createElement(
            _Typography2.default,
            { component: "p" },
            item.description
          )
        ),
        _react2.default.createElement(
          _Card.CardActions,
          { className: classes.cardActions },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/vacancies/" + item.id, className: classes.link },
            _react2.default.createElement(
              _Button2.default,
              { dense: true, raised: true, color: "primary" },
              "Learn More"
            )
          )
        )
      );
    }),
    "})"
  );
};

CardList.defaultProps = {
  items: [],
  classes: {
    card: {},
    media: {}
  }
};

exports.default = (0, _styles.withStyles)(styles)(CardList);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _redux = __webpack_require__(11);

var _actions = __webpack_require__(4);

var _isEmpty = __webpack_require__(10);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactHelmet = __webpack_require__(9);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(7);

var _Card = __webpack_require__(13);

var _Card2 = _interopRequireDefault(_Card);

var _Typography = __webpack_require__(6);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _List = __webpack_require__(27);

var _List2 = _interopRequireDefault(_List);

var _Favorite = __webpack_require__(28);

var _Favorite2 = _interopRequireDefault(_Favorite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Styles


var Wrapper = _styledComponents2.default.div(_templateObject);

var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 600,
      width: "100%"
    },
    media: {
      height: 250
    },
    title: {
      fontSize: 20,
      marginTop: 10
    },
    icon: {
      color: "#f50057"
    },
    cardAction: {
      justifyContent: "center"
    }
  };
};

var VacanciesItem = function (_Component) {
  _inherits(VacanciesItem, _Component);

  function VacanciesItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VacanciesItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VacanciesItem.__proto__ || Object.getPrototypeOf(VacanciesItem)).call.apply(_ref, [this].concat(args))), _this), _this.renderList = function (skills) {
      return skills.map(function (item, index) {
        return _react2.default.createElement(
          _List.ListItem,
          { key: "skills-" + index, dense: true },
          _react2.default.createElement(
            _List.ListItemIcon,
            null,
            _react2.default.createElement(_Favorite2.default, { className: _this.props.classes.icon })
          ),
          _react2.default.createElement(_List.ListItemText, { primary: item })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VacanciesItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var params = this.props.match.params;

      this.props.fetchVacanciesDescription(params.id);
    }
  }, {
    key: "head",
    value: function head(title) {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          "title",
          null,
          title
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$vacancy = _props.vacancy,
          skills = _props$vacancy.skills,
          title = _props$vacancy.title,
          description = _props$vacancy.description,
          image = _props$vacancy.image,
          classes = _props.classes;


      return _react2.default.createElement(
        Wrapper,
        null,
        this.head(title),
        _react2.default.createElement(
          _Card2.default,
          { className: classes.card },
          _react2.default.createElement(_Card.CardHeader, {
            title: "Wanted " + title + "!",
            subheader: "Vacancy id: " + this.props.match.params.id
          }),
          _react2.default.createElement(_Card.CardMedia, { className: classes.media, image: image }),
          _react2.default.createElement(
            _Card.CardContent,
            null,
            _react2.default.createElement(
              _Typography2.default,
              null,
              description
            ),
            _react2.default.createElement(
              _Typography2.default,
              { className: classes.title },
              "Skills Required:"
            ),
            _react2.default.createElement(
              _List2.default,
              null,
              !(0, _isEmpty2.default)(skills) && this.renderList(skills)
            )
          ),
          _react2.default.createElement(
            _Card.CardActions,
            {
              disableActionSpacing: false,
              className: classes.cardAction
            },
            _react2.default.createElement(
              _Button2.default,
              { raised: true, color: "secondary" },
              "Apply for a job"
            )
          )
        )
      );
    }
  }]);

  return VacanciesItem;
}(_react.Component);

VacanciesItem.defaultProps = {
  vacancy: {
    skills: [],
    title: "",
    description: "",
    image: ""
  },
  classes: {}
};


var mapStateToProps = function mapStateToProps(state) {
  return { vacancy: state.vacancyDescription };
};

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchVacanciesDescription)());
};

exports.default = {
  loadData: loadData,
  component: (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, { fetchVacanciesDescription: _actions.fetchVacanciesDescription }), (0, _styles.withStyles)(styles))(VacanciesItem)
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Favorite");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n"], ["\n  text-align: center;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents2.default.h1(_templateObject);

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    Heading,
    null,
    "Ooops, route not found."
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(31);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(8);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(32);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(9);

var _Routes = __webpack_require__(12);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <html>\n      <head>\n        " + helmet.title.toString() + "\n        " + helmet.meta.toString() + "\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\">\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script>\n          window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(34);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({});

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _vacanciesReducer = __webpack_require__(37);

var _vacanciesReducer2 = _interopRequireDefault(_vacanciesReducer);

var _vacancyDescriptionReducer = __webpack_require__(38);

var _vacancyDescriptionReducer2 = _interopRequireDefault(_vacancyDescriptionReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  vacancies: _vacanciesReducer2.default,
  vacancyDescription: _vacancyDescriptionReducer2.default
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_VACANCIES:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(4);

var initialState = {
  skills: [],
  title: "",
  description: "",
  image: ""
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_DESCRIPTION:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  id: 1,
  title: "Front end developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 2,
  title: "React js developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 3,
  title: "Full-stack js developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 4,
  title: "Node js developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 5,
  title: "Angular js developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 6,
  title: "Python developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 7,
  title: "Data scientist",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}, {
  id: 8,
  title: "Django developer",
  image: "https://placeimg.com/500/200/animals",
  skills: ["javascript", "react js", "vue js", "html", "css", "jest", "es6"],
  description: "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
}];

/***/ })
/******/ ]);