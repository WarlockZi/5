/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/Auth/cabinet.js":
/*!**************************************!*\
  !*** ./resources/js/Auth/cabinet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cabinet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cabinet.scss */ "./resources/js/Auth/cabinet.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./resources/js/common.js");


(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('.form__button').on('submit', save);

function save(e) {
  var th = this;
  var form = formData;
}

/***/ }),

/***/ "./resources/js/Auth/changepassword.js":
/*!*********************************************!*\
  !*** ./resources/js/Auth/changepassword.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./resources/js/common.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('.changepassword').on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  var res, msg, _msg;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_common__WEBPACK_IMPORTED_MODULE_1__.post)('/user/changepassword', {
            'old_password': (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('[name="old_password"]').el[0].value,
            'new_password': (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('[name="new_password"]').el[0].value
          });

        case 2:
          res = _context.sent;

          if (res === 'ok') {
            msg = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('.message').el[0];
            msg.innerText = 'Пароль сменен';
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(msg).addClass('success');
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(msg).removeClass('error');
          } else {
            _msg = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('.message').el[0];
            _msg.innerText = 'Что-то пошло не так';
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(_msg).addClass('error');
            (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(_msg).removeClass('success');
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ }),

/***/ "./resources/js/Auth/edit.js":
/*!***********************************!*\
  !*** ./resources/js/Auth/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.scss */ "./resources/js/Auth/edit.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./resources/js/common.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



(0,_common__WEBPACK_IMPORTED_MODULE_2__.$)("#save").on("click", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
    var data, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            data = {
              // email: check_email(),
              name: (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('[name = "name"]').el[0].value,
              surName: (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('[name = "surName"]').el[0].value,
              middleName: (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('[name = "middleName"]').el[0].value,
              birthDate: (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('[name = "birthDate"]').el[0].value,
              phone: (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('[name = "phone"]').el[0].value
            };
            _context.next = 4;
            return (0,_common__WEBPACK_IMPORTED_MODULE_2__.post)('/user/edit', data);

          case 4:
            res = _context.sent;

            if (res === 'ok') {
              _common__WEBPACK_IMPORTED_MODULE_2__.popup.show('Сохранено');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); // setTimeout(function () {
//     let p = document.querySelector("p.result");
//     p.parentNode.remove();
// }, 2000);

/***/ }),

/***/ "./resources/js/Auth/login.js":
/*!************************************!*\
  !*** ./resources/js/Auth/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.scss */ "./resources/js/Auth/login.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./resources/js/common.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



(0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('.password-control').on('click', toggle);

function toggle(event) {
  var input = event.target.parentNode.querySelector('input');

  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }

  event.target.classList.toggle('view');
}

(0,_common__WEBPACK_IMPORTED_MODULE_2__.$)("#login").on('click', sendData);

function sendData(e) {
  e.preventDefault();
  var email = (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('input[type = email]').el[0].value;
  var pass = (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('input[name= password]').el[0].value;
  if (validateEmailLogin(email, pass)) send(email, pass);
}

function validateEmailLogin(email, pass) {
  var $message = (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(".message").el[0];

  if (!_common__WEBPACK_IMPORTED_MODULE_2__.validate.email(email)) {
    $message.innerText = "Неправильный формат почты";
    (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)($message).addClass('error');
    return false;
  }

  if (!_common__WEBPACK_IMPORTED_MODULE_2__.validate.password(pass)) {
    $message.innerText = "Пароль может состоять из \n " + "- Большие латинские бкувы \n" + "- Маленькие латинские буквы \n" + "- Цифры \n" + "- Должен содержать не менее 6 символов";
    (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)($result).addClass('error');
    return false;
  }

  return true;
}

function send(_x, _x2) {
  return _send.apply(this, arguments);
}

function _send() {
  _send = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {
    var res, msg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_common__WEBPACK_IMPORTED_MODULE_2__.post)('/user/login', {
              email: email,
              password: password
            });

          case 2:
            res = _context.sent;
            res = JSON.parse(res);
            msg = (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('.message').el[0];

            if (res.msg === 'fail') {
              msg.innerHTML = 'Не верный email или пароль';
              (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(msg).addClass('error');
              (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(msg).removeClass('success');
            } else if (res.msg === 'not confirmed') {
              msg.innerHTML = "Зайдите на почту чтобы подтвердить регистрацию";
              (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(msg).addClass('error');
              (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(msg).removeClass('success');
            } else if (res.msg === 'ok') {
              window.location = '/user/cabinet';
            } else if (res.msg === 'not_registered') {
              msg.innerHTML = "email не зарегистрирован <br> Для регистрации перейдите в раздел <a href = '/user/register'>Регистрация</a>";
              (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(msg).addClass('error');
              (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(msg).removeClass('success');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _send.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/Auth/register.js":
/*!***************************************!*\
  !*** ./resources/js/Auth/register.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./resources/js/common.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(".forgot").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          window.location.href = '/user/returnpass';

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(".login").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          window.location.href = '/user/login';

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(".reg").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
  var email, password, msg, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          email = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('input[type = email]').el[0].value;
          password = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('input[type = password]').el[0].value;
          msg = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(".message").el[0];

          if (!(!email || !password)) {
            _context3.next = 7;
            break;
          }

          msg.innerText = "Заполните email и пароль";
          (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(msg).addClass('error');
          return _context3.abrupt("return", false);

        case 7:
          if (!email) {
            _context3.next = 20;
            break;
          }

          if (_common__WEBPACK_IMPORTED_MODULE_1__.validate.email(email)) {
            _context3.next = 12;
            break;
          }

          msg.innerText = "Неправильный формат почты";
          (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(msg).addClass('error');
          return _context3.abrupt("return", false);

        case 12:
          if (!password) {
            _context3.next = 17;
            break;
          }

          if (_common__WEBPACK_IMPORTED_MODULE_1__.validate.password(password)) {
            _context3.next = 17;
            break;
          }

          msg.innerText = "Пароль может состоять из \n " + "- больших латинских букв \n" + "- маленьких латинских букв \n" + "- цифр \n" + "- должен содержать не менее 6 символов";
          (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)(msg).addClass('error');
          return _context3.abrupt("return", false);

        case 17:
          _context3.next = 19;
          return send(email);

        case 19:
          res = _context3.sent;

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));

function send(_x) {
  return _send.apply(this, arguments);
}

function _send() {
  _send = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(email) {
    var data, res, msg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = {
              "email": email,
              "password": (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)("input[type= password]").el[0].value,
              "surName": (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)("[name='surName']").el[0].value,
              "name": (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)("[name='name']").el[0].value,
              "token": (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('meta[name="token"]').el[0].getAttribute('content')
            };
            _context4.next = 3;
            return (0,_common__WEBPACK_IMPORTED_MODULE_1__.post)('/user/register', data);

          case 3:
            res = _context4.sent;
            msg = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('.message');

            if (res === 'confirm') {
              msg.removeClass('error');
              msg.addClass('success');
              msg.el[0].innerHTML = '-Пользователь зарегистрирован.<br>' + '-Для подтверждения регистрации зайдите на почту, ' + '<bold>email</bold>.<br> ' + '-Перейдите по ссылке в письме.';
            } else if (res === 'mail exists') {
              msg.el[0].innerHTML = 'Эта почта уже зарегистрирована';
              msg.removeClass('success');
              msg.addClass('error');
            } else if (res === 'empty password') {
              msg.el[0].innerHTML = 'Зполните пароль';
              msg.removeClass('success');
              msg.addClass('error');
            } else {
              msg.el[0].innerHTML = res;
              msg.removeClass('success');
              msg.addClass('error');
            }

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _send.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/Auth/return_pass.js":
/*!******************************************!*\
  !*** ./resources/js/Auth/return_pass.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./resources/js/common.js");
/* harmony import */ var _components_popup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/popup.scss */ "./resources/js/components/popup.scss");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('.returnpass').on('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
    var email, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('input[type="email"]').el[0].value;
            _context.next = 3;
            return (0,_common__WEBPACK_IMPORTED_MODULE_1__.post)('/user/returnpass', {
              email: email
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return JSON.parse(res);

          case 6:
            res = _context.sent;

            if (res) {
              _common__WEBPACK_IMPORTED_MODULE_1__.popup.show(res.msg, function () {
                window.location = '/user/login';
              });
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./resources/js/common.js":
/*!********************************!*\
  !*** ./resources/js/common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTooltip": () => (/* binding */ addTooltip),
/* harmony export */   "popup": () => (/* binding */ popup),
/* harmony export */   "test_delete_button": () => (/* binding */ test_delete_button),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "uniq": () => (/* binding */ uniq),
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "fetchWrap": () => (/* binding */ fetchWrap),
/* harmony export */   "fetchW": () => (/* binding */ fetchW)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.scss */ "./resources/js/common.scss");
var _this = undefined;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var validate = {
  sort: function sort() {
    var error = _this.nextElementSibling;

    var ar = _this.value.match(/\D+/);

    if (ar) {
      error.innerText = 'Только цифры';
      error.style.opacity = '1';
    } else {
      if (error.style.opacity === "1") {
        error.style.opacity = '0';
      }
    }
  },
  email: function email(_email) {
    if (!_email) return false;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(_email).toLowerCase());
  },
  password: function password(_password) {
    if (!_password) return false;
    var re = /^[a-zA-Z\-0-9]{6,20}$/;
    return re.test(_password);
  }
}; // function up() {
//    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//    if (top > 0) {
//       window.scrollBy(0, -100);
//       var t = setTimeout('up()', 20);
//    }
//    else
//       clearTimeout(t);
//    return false;
// }

var popup = {
  show: function show(txt, callback) {
    var close = this.el('div', 'popup__close');
    close.innerText = 'X';
    var popup__item = this.el('div', 'popup__item');
    popup__item.innerText = txt;
    popup__item.append(close);
    var popup = $('.popup').el[0];

    if (!popup) {
      popup = this.el('div', 'popup');
    }

    popup.append(popup__item);
    popup.addEventListener('click', this.close);
    document.body.append(popup);
    var hideDelay = 5000;
    setTimeout(function () {
      popup__item.classList.remove('popup__item');
      popup__item.classList.add('popup-hide');
    }, hideDelay);
    var removeDelay = hideDelay + 950;
    setTimeout(function () {
      popup__item.remove();

      if (callback) {
        callback();
      }
    }, removeDelay);
  },
  close: function close(e) {
    if (e.target.classList.contains('popup__close')) {
      var _popup = this.closest('.popup').remove();
    }
  },
  el: function el(tagName, className) {
    var el = document.createElement(tagName);
    el.classList.add(className);
    return el;
  }
};

var uniq = function uniq(array) {
  return Array.from(new Set(array));
};

function get(_x) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(key) {
    var p;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            p = window.location.search;
            p = p.match(new RegExp(key + '=([^&=]+)'));
            return _context2.abrupt("return", p ? p[1] : false);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _get.apply(this, arguments);
}

function post(_x2) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(url) {
    var data,
        _args4 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              data.token = document.querySelector('meta[name="token"]').getAttribute('content');
              var req = new XMLHttpRequest();
              req.open('POST', url, true);
              req.setRequestHeader("X-Requested-With", "XMLHttpRequest");

              if (data instanceof FormData) {
                req.send(data);
              } else {
                req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                req.send('param=' + JSON.stringify(data));
              }

              req.onerror = function () {
                reject(Error("Network Error"));
              };

              req.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        resolve(req.response);

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _post.apply(this, arguments);
}

function MyJquery(elements) {
  this.el = elements;
  this.elType = {}.toString.call(elements);

  this.on = function (ev, f) {
    if (!this.el) return;

    if (this.elType === "[object HTMLDivElement]") {
      this.el.addEventListener(ev, f);
    }

    if (this.elType === "[object NodeList]") {
      elements.forEach(function (s) {
        return s.addEventListener(ev, f);
      });
    }
  };

  this.value = function () {
    return this.el[0].getAttribute('value');
  };

  this.attr = function (attrName, attrVal) {
    if (attrVal) {
      this.el[0].setAttribute(attrName, attrVal);
    }

    return this.el[0].getAttribute(attrName);
  };

  this.selectedIndexValue = function () {
    if (this.el.length) return this.el[0].selectedOptions[0].value;
  };

  this.options = function () {
    if (this.el.length) return this.el[0].options;
  };

  this.count = function () {
    return this.el.length;
  };

  this.text = function () {
    if (this.el.length) return this.el[0].innerText;
  };

  this.checked = function () {
    if (this.el.length) return this.el[0].checked;
  };

  this.getWithStyle = function (attr, val) {
    var arr = [];
    elements.forEach(function (s) {
      if (s.style[attr] === val) {
        arr.push(s);
      }
    });
    return arr;
  };

  this.addClass = function (className) {
    if (this.elType === "[object HTMLDivElement]") {
      this.el.classList.add(className);
    }

    if (["[object NodeList]", "[object Array]"].includes(this.elType)) {
      this.el.forEach(function (s) {
        s.classList.add(className);
      });
    }
  };

  this.removeClass = function (className) {
    if (this.elType === "[object HTMLDivElement]") {
      this.el.classList.remove(className);
    }

    if (["[object NodeList]", "[object Array]"].includes(this.elType)) {
      this.el.forEach(function (s) {
        s.classList.remove(className);
      });
    }
  };

  this.hasClass = function (className) {
    if (this.el.classList.contains(className)) return true;
  };

  this.append = function (el) {
    this.el[0].appendChild(el);
  };

  this.find = function (selector) {
    if (["[object HTMLDivElement]", "[object HTMLInputElement]"].includes(this.elType)) {
      return this.el.querySelector(selector);
    }

    if (["[object NodeList]", "[object Array]"].includes(this.elType)) {
      return this.el[0].querySelector(selector);
    }
  };

  this.css = function (attr, val) {
    if (!val) {
      return this.el[0].style[attr];
    }

    if (this.elType === "[object HTMLDivElement]") {
      this.el.style[attr] = val;
    }

    if (this.elType === "[object NodeList]") {
      elements.forEach(function (s) {
        s.style[attr] = val;
      });
    }
  };
}

function $(selector) {
  var elements = '';

  if (typeof selector === "string") {
    elements = document.querySelectorAll(selector);
  } else {
    elements = selector;
  }

  return new MyJquery(elements);
}

function addTooltip(args) {
  var ar = _toConsumableArray(args.els);

  ar.map(function (el) {
    el.onmouseenter = function () {
      var tip = document.createElement('div');
      $(tip).addClass('tip');
      tip.innerText = args.message;
      el.append(tip);

      var remove = function remove() {
        return tip.remove();
      };

      tip.addEventListener('mousemove', remove.bind(tip));
    }.bind(args);

    el.onmouseleave = function () {
      var tip = el.querySelector('.tip');
      tip.remove();
    };
  }, [args]);
}

var test_delete_button = /*#__PURE__*/function () {
  function test_delete_button(elem) {
    _classCallCheck(this, test_delete_button);

    if (!elem) return;
    this._elem = $(elem).el[0];
    this._elem.onclick = this["delete"];
    this._elem.onmouseenter = this.showToolip;
    this._elem.onmouseleave = this.hideTooltip;
    this._elem.onmousemove = this.changeTooltipPos;
  }

  _createClass(test_delete_button, [{
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (confirm('Удалить тест?')) {
                  res = test.del();

                  if (res.msg === 'ok') {
                    window.location = '/test/edit';
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "showToolip",
    value: function showToolip(e) {
      var x = e.clientX;
      var y = e.clientY;
      var tip = document.createElement('div');
      $(tip).addClass('tip');
      tip.style.top = y + 70 + 'px';
      tip.style.left = x - 170 + 'px';
      tip.innerText = this.getAttribute('tip');
      this.tip = tip;
      document.body.append(tip);
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      this.tip.remove();
    }
  }, {
    key: "changeTooltipPos",
    value: function changeTooltipPos(e) {
      this.tip.style.top = e.pageY + 35 + 'px';
      this.tip.style.left = e.pageX - 170 + 'px';
    }
  }]);

  return test_delete_button;
}();

function fetchWrap(_x3, _x4) {
  return _fetchWrap.apply(this, arguments);
}

function _fetchWrap() {
  _fetchWrap = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(Obj, file) {
    var data, prom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = new FormData();
            data.append('ajax', true);
            data.append('param', JSON.stringify(Obj));
            file ? data.append('file', file) : '';
            _context5.next = 6;
            return fetch("/adminsc", {
              body: data,
              method: 'post'
            });

          case 6:
            prom = _context5.sent;
            return _context5.abrupt("return", prom.text());

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fetchWrap.apply(this, arguments);
}

function fetchW(_x5, _x6) {
  return _fetchW.apply(this, arguments);
}

function _fetchW() {
  _fetchW = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(url, Obj) {
    var prom;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch(url, {
              body: 'param=' + JSON.stringify(Obj),
              method: 'post',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'HTTP_X_REQUESTED_WITH': 'XMLHttpRequest'
              }
            });

          case 2:
            prom = _context6.sent;
            return _context6.abrupt("return", prom);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _fetchW.apply(this, arguments);
}



/***/ }),

/***/ "./resources/js/components/alert/alert.js":
/*!************************************************!*\
  !*** ./resources/js/components/alert/alert.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.scss */ "./resources/js/components/alert/alert.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./resources/js/common.js");


(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)("body").on("click", function (e) {
  if (e.target.className === "messageClose") {
    // alert(e.target.className)
    window.location.href = "/user/cabinet";
  }
});

/***/ }),

/***/ "./resources/js/components/cookie/cookie.js":
/*!**************************************************!*\
  !*** ./resources/js/components/cookie/cookie.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie.scss */ "./resources/js/components/cookie/cookie.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./resources/js/common.js");


check_cookie('cn');

function check_cookie(cookie_name) {
  if (getCookie(cookie_name)) (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('#cookie-notice').css('bottom', '-100%');else (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('#cookie-notice').css('bottom', "0");
}

function getCookie(cookie_name) {
  return document.cookie.match('(^|;)?' + cookie_name + '=([^;]*)');
}

(0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('#cn-accept-cookie').on('click', clicked);

function clicked() {
  setCookie();
  (0,_common__WEBPACK_IMPORTED_MODULE_1__.$)('#cookie-notice').css('bottom', '-100%');
}

function setCookie() {
  var date = new Date(),
      minute = 60 * 1000,
      day = minute * 60 * 24;
  var days = 1;
  date.setTime(date.getTime() + days * day);
  document.cookie = "cn=1; expires=" + date + "path=/; SameSite=lax";
}

/***/ }),

/***/ "./resources/js/components/header/autocomplete.js":
/*!********************************************************!*\
  !*** ./resources/js/components/header/autocomplete.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _autocomplete_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.scss */ "./resources/js/components/header/autocomplete.scss");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./resources/js/common.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




_toConsumableArray((0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(".search input").el).map(function (input) {
  if (input) {
    input.addEventListener('input', function () {
      autocomplete(input);
    });
  }
});

function autocomplete(_x) {
  return _autocomplete.apply(this, arguments);
}

function _autocomplete() {
  _autocomplete = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(input) {
    var search, result, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            search = input.parentNode;
            result = (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)(search).find('.search__result');

            if (!(input.value.length < 1)) {
              _context.next = 5;
              break;
            }

            if (result) result.innerHTML = '';
            return _context.abrupt("return");

          case 5:
            _context.next = 7;
            return fetch('/search?q=' + input.value);

          case 7:
            data = _context.sent;
            _context.next = 10;
            return data.json(data);

          case 10:
            data = _context.sent;

            if (result.childNodes.length !== 0) {
              result.innerHTML = '';
            }

            data.map(function (e) {
              var a = document.createElement("a");
              a.href = e.alias;
              a.innerHTML = "<img src='/pic/".concat(e.preview_pic, "' alt='").concat(e.name, "'>") + e.name;
              result.appendChild(a);
            });
            (0,_common__WEBPACK_IMPORTED_MODULE_2__.$)('body').on('click', function (e) {
              if (result && e.target !== result) {
                result.innerHTML = '';
              }
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _autocomplete.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/components/header/header.js":
/*!**************************************************!*\
  !*** ./resources/js/components/header/header.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common */ "./resources/js/common.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./resources/js/components/header/header.scss");


var mobileMenu = (0,_common__WEBPACK_IMPORTED_MODULE_0__.$)('.gamburger').on('click', mobile);

function mobile(e) {
  var mm = e.target.closest('.utils').querySelector('.mobile-menu');
  mm.classList.toggle('show');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/cabinet.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/cabinet.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-container {\n  display: flex;\n  flex-flow: column wrap;\n  padding: 35px 30px 15px 30px;\n  background: #eee;\n  width: clamp(50px, 66%, 300px);\n  margin: 3% auto;\n  align-items: stretch;\n}\n.form-container p {\n  font-size: 0.6rem;\n}\n\n.form-title {\n  font-weight: bold;\n  font-size: 120%;\n  text-align: center;\n  color: #949494;\n  margin-bottom: 20px;\n}\n\n.form-input {\n  background: #f7f7f7;\n  border-radius: 0;\n  border-bottom: 1px solid #ccc;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  flex: 1;\n  margin: 10px 0;\n  padding: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  color: #757575;\n}\n\n.form__buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.form__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 1px;\n  padding: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  color: #757575;\n  background: rgba(0, 0, 0, 0.15);\n  text-align: center;\n  font-weight: 600;\n  font-size: 1em;\n  cursor: pointer;\n  max-height: 45px;\n  border: none;\n}\n.form__button:hover {\n  background: #a2a2a2;\n  color: #fff;\n}\n\n.form__button-secondary {\n  color: #949494;\n  padding: 10px 3px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.form__button-secondary:hover {\n  background: #a2a2a2;\n  color: #fff;\n}\n\n.bottom {\n  display: flex;\n  align-items: center;\n}\n.bottom li {\n  flex: 1;\n  text-align: center;\n  display: flex;\n}\n.bottom li a {\n  color: #949494;\n  flex-basis: 100%;\n  padding: 10px 3px;\n}\n.bottom li a:hover {\n  color: #fff;\n  background-color: #a2a2a2;\n}\n\n.list {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  width: clamp(200px, 63%, 70%);\n  margin: 10px auto;\n}\n\n.list__header {\n  font-size: 2em;\n  color: #5a5a5a;\n  margin: 15px 0;\n}\n\n.list__item {\n  color: #5a5a5a;\n  border: 1px solid #eee;\n  padding: 10px;\n}\n.list__item:hover {\n  background-color: #e7e7e7;\n}\n\nsection {\n  flex: 1 0 auto;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/forms.scss","webpack://./resources/js/Auth/cabinet.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,4BAAA;EACA,gBAAA;EACA,8BAAA;EACA,eAAA;EACA,oBAAA;ACDF;ADGE;EACE,iBAAA;ACDJ;;ADKA;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;ACFF;;ADKA;EACE,mBAAA;EACA,gBAAA;EACA,6BAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,OAAA;EACA,cAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,cAAA;ACFF;;ADIA;EACE,aAAA;EACA,8BAAA;ACDF;;ADIA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,cAAA;EACA,+BAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;ACDF;ADGE;EACE,mBAAA;EACA,WAAA;ACDJ;;ADKA;EACE,cAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;ACFF;ADIE;EACE,mBAAA;EACA,WAAA;ACFJ;;ADMA;EACE,aAAA;EACA,mBAAA;ACHF;ADIE;EACE,OAAA;EACA,kBAAA;EACA,aAAA;ACFJ;ADGI;EACE,cAAA;EACA,gBAAA;EACA,iBAAA;ACDN;ADEM;EACE,WAAA;EACA,yBAAA;ACAR;;ADMA;EACE,aAAA;EACA,iBAAA;EACA,2BAAA;EACA,6BAAA;EACA,iBAAA;ACHF;;ADMA;EACE,cAAA;EACA,cE5FQ;EF6FR,cAAA;ACHF;;ADMA;EACE,cEjGQ;EFkGR,sBAAA;EACA,aAAA;ACHF;ADKE;EACE,yBE3GgB;ADwGpB;;AAlHA;EACE,cAAA;AAqHF","sourcesContent":["@import \"../var\";\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  padding: 35px 30px 15px 30px;\r\n  background: #eee;\r\n  width: clamp(50px, 66%, 300px);\r\n  margin: 3% auto;\r\n  align-items: stretch;\r\n\r\n  p {\r\n    font-size: 0.6rem;\r\n  }\r\n}\r\n\r\n.form-title {\r\n  font-weight: bold;\r\n  font-size: 120%;\r\n  text-align: center;\r\n  color: #949494;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-input {\r\n  background: #f7f7f7;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid #ccc;\r\n  border-left: 0;\r\n  border-top: 0;\r\n  border-right: 0;\r\n  flex: 1;\r\n  margin: 10px 0;\r\n  padding: 12px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  color: #757575;\r\n}\r\n.form__buttons{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form__button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 10px 1px;\r\n  padding: 15px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  color: #757575;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 1em;\r\n  cursor: pointer;\r\n  max-height: 45px;\r\n  border: none;\r\n\r\n  &:hover {\r\n    background: #a2a2a2;\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.form__button-secondary {\r\n  color: #949494;\r\n  padding: 10px 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    background: #a2a2a2;\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.bottom {\r\n  display: flex;\r\n  align-items: center;\r\n  li {\r\n    flex: 1;\r\n    text-align: center;\r\n    display: flex;\r\n    a {\r\n      color: #949494;\r\n      flex-basis: 100%;\r\n      padding: 10px 3px;\r\n      &:hover {\r\n        color: #fff;\r\n        background-color: #a2a2a2;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.list{\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: flex-start;\r\n  width: clamp(200px, 63%, 70%);\r\n  margin: 10px auto;\r\n}\r\n\r\n.list__header{\r\n  font-size: 2em;\r\n  color: $color-a;\r\n  margin: 15px 0;\r\n}\r\n\r\n.list__item{\r\n  color: $color-a;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n\r\n  &:hover{\r\n    background-color: $color-white-hover;\r\n  }\r\n}\r\n\r\n","@import \"../components/forms\";\r\nsection{\r\n  flex: 1 0 auto;\r\n\r\n}","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/edit.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/edit.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".result {\n  display: block;\n  margin: 0;\n  padding: 25px;\n  background-color: #c9ffd5;\n  text-align: center;\n}\n\n.popup__wrapper {\n  position: absolute;\n  display: flex;\n  flex-flow: column;\n  top: -100%;\n  left: -100%;\n  max-width: 500px;\n}\n.popup__wrapper .popup {\n  display: flex;\n  max-width: 200px;\n  position: absolute;\n  top: -100%;\n}\n.popup__wrapper .popup .close {\n  display: flex;\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./resources/js/Auth/edit.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,SAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;AACF;AAAE;EACE,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AAEJ;AADI;EACE,aAAA;EACA,kBAAA;AAGN","sourcesContent":[".result {\r\n  display: block;\r\n  margin: 0;\r\n  padding: 25px;\r\n  background-color: #c9ffd5;\r\n  text-align: center;\r\n}\r\n\r\n.popup__wrapper{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-flow: column;\r\n  top: -100%;\r\n  left: -100%;\r\n  max-width: 500px;\r\n  .popup{\r\n    display: flex;\r\n    max-width: 200px;\r\n    position: absolute;\r\n    top: -100%;\r\n    .close{\r\n      display: flex;\r\n      position: absolute;\r\n    }\r\n  }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/login.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/login.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08) !important;\n}\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\nbutton:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: box-shadow 0.15s ease-in-out;\n}\n\nbutton, [type=button], [type=reset], [type=submit] {\n  -webkit-appearance: button;\n}\n\nbutton, select {\n  text-transform: none;\n}\n\ninput, button, select, optgroup, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.dropup, .dropend, .dropdown, .dropstart {\n  position: relative;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n\n.dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.d-none {\n  display: none !important;\n}\n\ninput, textarea, textarea:focus, .button:focus {\n  outline: none;\n}\n\ninput, button, select, optgroup, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\nsection, main {\n  flex: 1 0 auto;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem;\n}\n\na {\n  text-decoration: none;\n}\n\na {\n  color: #0d6efd;\n  text-decoration: underline;\n}\n\n[required]:before {\n  content: \"ss\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  color: red;\n  position: absolute;\n  right: -100%;\n}\n\n.pass {\n  position: relative;\n}\n\n.password-control {\n  position: absolute;\n  top: 20px;\n  right: 6px;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: url(/pic/srvc/view.svg) 0 0 no-repeat;\n}\n\n.password-control.view {\n  background: url(/pic/srvc/no-view.svg) 0 0 no-repeat;\n}\n\nsection,\nmain {\n  flex: 1 0 auto;\n}\n\n.message {\n  font-size: 0.9rem;\n}\n.message a {\n  padding: 0;\n  color: shade(#6CA3FE, 60%);\n  font-weight: 600;\n}\n\n.error {\n  border: 3px solid #c14000;\n  border-radius: 3px;\n  padding: 10px;\n  color: #c14000;\n}\n\n.success {\n  color: #1bbc9b;\n  font-weight: 600;\n  background-color: #ffffff;\n  border: 1px solid;\n  padding: 15px;\n}\n\n.return_pass .submit {\n  cursor: pointer;\n}\n\n.login_return_pass {\n  color: #1bbc9b;\n  font-weight: 600;\n  background-color: #ffffff;\n  border: 1px solid;\n  padding: 15px;\n}", "",{"version":3,"sources":["webpack://./resources/js/Auth/authBootstrap.scss","webpack://./resources/js/Auth/login.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n.bg-white{\r\n  --bs-bg-opacity: 1;\r\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\r\n}\r\n\r\n.shadow-sm {\r\n  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {\r\n  display: flex;\r\n  flex-wrap: inherit;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {\r\n  width: 100%;\r\n  padding-right: var(--bs-gutter-x, 0.75rem);\r\n  padding-left: var(--bs-gutter-x, 0.75rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-light .navbar-brand {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n.navbar-brand {\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n}\r\n.navbar-light .navbar-toggler {\r\n  color: rgba(0, 0, 0, 0.55);\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n}\r\nbutton:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled) {\r\n  cursor: pointer;\r\n}\r\n//@media (prefers-reduced-motion: reduce){\r\n//.navbar-toggler {\r\n//  transition: none;\r\n//}\r\n\r\n.navbar-toggler {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: box-shadow 0.15s ease-in-out;\r\n}\r\n\r\nbutton, [type=button], [type=reset], [type=submit] {\r\n  -webkit-appearance: button;\r\n}\r\nbutton, select {\r\n  text-transform: none;\r\n}\r\ninput, button, select, optgroup, textarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100%;\r\n}\r\n\r\n.collapse:not(.show) {\r\n  display: none;\r\n}\r\n.navbar-collapse {\r\n  flex-basis: 100%;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n}\r\n.me-auto {\r\n  margin-right: auto !important;\r\n}\r\n\r\n.navbar-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.ms-auto {\r\n  margin-left: auto !important;\r\n}\r\n\r\n.dropup, .dropend, .dropdown, .dropstart {\r\n  position: relative;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: rgba(0, 0, 0, 0.55);\r\n}\r\n.navbar-nav .nav-link {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n  position: static;\r\n}\r\n.dropdown-menu {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  display: none;\r\n  min-width: 10rem;\r\n  padding: 0.5rem 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown-item {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.25rem 1rem;\r\n  clear: both;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  text-align: inherit;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.d-none {\r\n  display: none !important;\r\n}\r\n\r\n\r\ninput, textarea, textarea:focus, .button:focus {\r\n  outline: none;\r\n}\r\ninput, button, select, optgroup, textarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\nsection, main {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.justify-content-center {\r\n  justify-content: center !important;\r\n}\r\n.row {\r\n  --bs-gutter-x: 1.5rem;\r\n  --bs-gutter-y: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: calc(-1 * var(--bs-gutter-y));\r\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\r\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\r\n}\r\n\r\n.row > * {\r\n  flex-shrink: 0;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\r\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\r\n  margin-top: var(--bs-gutter-y);\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-header:first-child {\r\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n.card-header {\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-body {\r\n  flex: 1 1 auto;\r\n  padding: 1rem 1rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\na {\r\n  color: #0d6efd;\r\n  text-decoration: underline;\r\n}\r\n\r\n","@import \"../var\";\r\n@import \"./authBootstrap\";\r\n\r\n\r\n[required]:before{\r\n  content: 'ss';\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  color:red;\r\n  position: absolute;\r\n  right: -100%;\r\n}\r\n\r\n.pass {\r\n  position: relative;\r\n}\r\n.password-control {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 6px;\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(/pic/srvc/view.svg) 0 0 no-repeat;\r\n}\r\n.password-control.view {\r\n  background: url(/pic/srvc/no-view.svg) 0 0 no-repeat;\r\n}\r\n\r\n\r\nsection,\r\nmain {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.message{\r\n  font-size: .9rem;\r\n  a{\r\n    padding: 0;\r\n    color: $color-main-hover;\r\n    font-weight: 600;\r\n  }\r\n}\r\n.error{\r\n  border: 3px solid #c14000;\r\n  border-radius: 3px;\r\n  padding: 10px;\r\n  color: #c14000;\r\n}\r\n\r\n.success{\r\n  color: #1bbc9b;\r\n  font-weight: 600;\r\n  background-color: #ffffff;\r\n  border: 1px solid;\r\n  padding: 15px;\r\n}\r\n\r\n.return_pass .submit{\r\n  cursor: pointer;\r\n}\r\n.login_return_pass{\r\n  color: #1bbc9b;\r\n  font-weight: 600;\r\n  background-color: #ffffff;\r\n  border: 1px solid;\r\n  padding: 15px;\r\n}","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/common.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/common.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tip {\n  position: absolute;\n  display: flex;\n  flex-basis: 50px;\n  bottom: 102%;\n  left: 0;\n  background: #3e4140;\n  z-index: 2;\n  color: #ffffff;\n  padding: 5px 10px;\n  font-weight: 400;\n  border-radius: 3px;\n  font-size: 10px;\n}", "",{"version":3,"sources":["webpack://./resources/js/common.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,OAAA;EACA,mBAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AACF","sourcesContent":[".tip {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-basis: 50px;\r\n  bottom: 102%;\r\n  left: 0;\r\n  background: hsl(160deg, 2%, 25%);\r\n  z-index: 2;\r\n  color: #ffffff;\r\n  padding: 5px 10px;\r\n  font-weight: 400;\r\n  border-radius: 3px;\r\n  font-size: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/alert/alert.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/alert/alert.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".overlay {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  display: flex;\n}\n\n.messageBox {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  min-width: 261px;\n  position: fixed;\n  margin-left: -30%;\n  top: 20%;\n  left: 50%;\n  background-color: #eff4ee;\n  z-index: 10001;\n  line-height: 25px;\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.messageTitleBar {\n  display: flex;\n  text-transform: uppercase;\n  padding: 10px;\n}\n\n.messageTitle {\n  flex: 1;\n  color: #80868e;\n  padding-left: 20px;\n  font-weight: 800;\n}\n\n.messageClose {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  transition: 0.5s;\n  color: #494949;\n  background: #ccc;\n  text-transform: uppercase;\n  font-weight: 800;\n  cursor: pointer;\n  padding: 10px;\n}\n.messageClose:hover {\n  background: #4cb000;\n  transition: 0.3s;\n  color: #000;\n  font-weight: 800;\n}\n\n.msg {\n  min-height: 100px;\n  background: #fff;\n  padding: 15px;\n}\n.msg .msgText {\n  position: relative;\n  color: #6e6e6e;\n  font-size: 17px;\n  padding: 10px 41px;\n}\n.msg .msgText:before {\n  content: \"-\";\n  position: absolute;\n  left: 12px;\n  top: 7px;\n  color: #000;\n}\n.msg a {\n  color: #1d5bff;\n  font-weight: 600;\n  padding: 3px;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/alert/alert.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,QAAA;EACA,SAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,iCAAA;AACF;;AAEA;EACE,aAAA;EACA,yBAAA;EACA,aAAA;AACF;;AAEA;EACE,OAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,OAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AACF;AACE;EACE,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;AACJ;;AAGA;EACE,iBAAA;EACA,gBAAA;EACA,aAAA;AAAF;AAEE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;AAAJ;AACI;EACE,YAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;AACN;AAGE;EACE,cAAA;EACA,gBAAA;EACA,YAAA;AADJ","sourcesContent":[".overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  z-index: 1000;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 0.5;\r\n  display: flex;\r\n}\r\n\r\n.messageBox {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 60%;\r\n  min-width: 261px;\r\n  position: fixed;\r\n  margin-left: -30%;\r\n  top: 20%;\r\n  left: 50%;\r\n  background-color: #eff4ee;\r\n  z-index: 10001;\r\n  line-height: 25px;\r\n  font-size: 14px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.messageTitleBar {\r\n  display: flex;\r\n  text-transform: uppercase;\r\n  padding: 10px;\r\n}\r\n\r\n.messageTitle {\r\n  flex: 1;\r\n  color: #80868e;\r\n  padding-left: 20px;\r\n  font-weight: 800;\r\n}\r\n\r\n.messageClose {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex: 1;\r\n  transition: .5s;\r\n  color: #494949;\r\n  background: #ccc;\r\n  text-transform: uppercase;\r\n  font-weight: 800;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n\r\n  &:hover {\r\n    background: #4cb000;\r\n    transition: .3s;\r\n    color: #000;\r\n    font-weight: 800;\r\n  }\r\n}\r\n\r\n.msg {\r\n  min-height: 100px;\r\n  background: #fff;\r\n  padding: 15px;\r\n\r\n  .msgText {\r\n    position: relative;\r\n    color: #6e6e6e;\r\n    font-size: 17px;\r\n    padding: 10px 41px;\r\n    &:before{\r\n      content: '-';\r\n      position: absolute;\r\n      left: 12px;\r\n      top: 7px;\r\n      color: #000;\r\n    }\r\n  }\r\n\r\n  a {\r\n    color: #1d5bff;\r\n    font-weight: 600;\r\n    padding: 3px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/cookie/cookie.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/cookie/cookie.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#cookie-notice {\n  color: white;\n  background-color: black;\n  display: block;\n  position: fixed;\n  min-width: 100%;\n  height: auto;\n  z-index: 10;\n  font-size: 10px;\n  line-height: 15px;\n  left: 0;\n  bottom: -100%;\n  text-align: center;\n  transition: 1s;\n  padding: 10px;\n}\n\n#cn-accept-cookie {\n  font-family: sans-serif;\n  display: inline-block;\n  margin-right: 0.3em;\n  margin-bottom: 0;\n  line-height: 20px;\n  text-align: center;\n  font-style: normal;\n  vertical-align: middle;\n  cursor: pointer;\n  color: #ffffff;\n  background-color: #e60000;\n  background-repeat: repeat-x;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\n  padding: 2px 10px;\n  font-size: 12px;\n  text-decoration: none;\n  border-radius: 3px;\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/cookie/cookie.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;EACA,OAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;AACF;;AAGA;EACE,uBAAA;EACA,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;EACA,yBAAA;EACA,2BAAA;EACA,mBAAA;EACA,iBAAA;EACA,uEAAA;EACA,iFAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;AAAF","sourcesContent":["#cookie-notice{\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(0, 0, 0);\r\n  display: block;\r\n  position: fixed;\r\n  min-width: 100%;\r\n  height: auto;\r\n  z-index: 10;\r\n  font-size: 10px;\r\n  line-height: 15px;\r\n  left: 0;\r\n  bottom: -100%;\r\n  text-align: center;\r\n  transition: 1s;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n#cn-accept-cookie {\r\n  font-family: sans-serif;\r\n  display: inline-block;\r\n  margin-right: 0.3em;\r\n  margin-bottom: 0;\r\n  line-height: 20px;\r\n  text-align: center;\r\n  font-style: normal;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  color: #ffffff;\r\n  background-color: #e60000;\r\n  background-repeat: repeat-x;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  padding: 2px 10px;\r\n  font-size: 12px;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n  outline: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/footer/footer.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/footer/footer.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pic_header_big_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pic/header-big.png */ "./resources/pic/header-big.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_pic_header_big_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n  flex-flow: column;\n  flex: 0 0 auto;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat;\n  padding: 10px;\n  min-height: 110px;\n  color: #9b9b9b;\n}\nfooter a {\n  color: #ffffff;\n}\nfooter p {\n  font-size: 10px;\n}\n\n.footer_legal {\n  display: flex;\n  justify-content: space-between;\n  gap: 100px;\n}\n\n.footer_menu {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  max-width: 700px;\n  margin: 0 auto;\n  border-bottom: 1px solid #7a7a7a;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.footer_menu .column {\n  display: flex;\n  flex-flow: column;\n}\n@media (max-width: 500px) {\n  .footer_menu .column {\n    font-size: 10px;\n  }\n}\n.footer_menu .column a {\n  width: 100px;\n  padding: 5px;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/footer/footer.scss","webpack://./resources/js/mixin_media.scss"],"names":[],"mappings":"AACA;EACE,iBAAA;EACA,cAAA;EACA,0DAAA;EACA,aAAA;EACA,iBAAA;EACA,cAAA;AAAF;AAEE;EACE,cAAA;AAAJ;AAGE;EACE,eAAA;AADJ;;AAKA;EACE,aAAA;EACA,8BAAA;EACA,UAAA;AAFF;;AAKA;EACE,aAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,cAAA;EACA,gCAAA;EACA,iBAAA;EACA,oBAAA;AAFF;AAIE;EACE,aAAA;EACA,iBAAA;AAFJ;ACIE;EDJA;IAII,eAAA;EAAJ;AACF;AAEI;EACE,YAAA;EACA,YAAA;AAAN","sourcesContent":["@import \"../../mixin_media\";\r\nfooter {\r\n  flex-flow: column;\r\n  flex: 0 0 auto;\r\n  background: url(\"../../../pic/header-big.png\") repeat;\r\n  padding: 10px;\r\n  min-height: 110px;\r\n  color: #9b9b9b;\r\n\r\n  a {\r\n    color: #ffffff;\r\n  }\r\n\r\n  p {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n.footer_legal {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 100px;\r\n}\r\n\r\n.footer_menu {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: center;\r\n  max-width: 700px;\r\n  margin: 0 auto;\r\n  border-bottom: 1px solid #7a7a7a;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n\r\n  .column {\r\n    display: flex;\r\n    flex-flow: column;\r\n    @include _500{\r\n      font-size: 10px;\r\n    }\r\n\r\n    a {\r\n      width: 100px;\r\n      padding: 5px;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n","// Using\r\n//.div {\r\n//   @include _1200 {\r\n//       @content;\r\n//   }\r\n//}\r\n\r\n@mixin _1200 {\r\n  @media (max-width: 1200px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _1000 {\r\n  @media (max-width: 1000px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _900 {\r\n  @media (max-width: 900px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _800 {\r\n  @media (max-width: 800px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _600 {\r\n  @media (max-width: 600px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _500 {\r\n  @media (max-width: 500px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _400{\r\n  @media (max-width: 400px){\r\n    @content;\r\n  }\r\n}\r\n@mixin _300{\r\n  @media (max-width: 300px){\r\n    @content;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/forms.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/forms.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-container {\n  display: flex;\n  flex-flow: column wrap;\n  padding: 35px 30px 15px 30px;\n  background: #eee;\n  width: clamp(50px, 66%, 300px);\n  margin: 3% auto;\n  align-items: stretch;\n}\n.form-container p {\n  font-size: 0.6rem;\n}\n\n.form-title {\n  font-weight: bold;\n  font-size: 120%;\n  text-align: center;\n  color: #949494;\n  margin-bottom: 20px;\n}\n\n.form-input {\n  background: #f7f7f7;\n  border-radius: 0;\n  border-bottom: 1px solid #ccc;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  flex: 1;\n  margin: 10px 0;\n  padding: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  color: #757575;\n}\n\n.form__buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.form__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 1px;\n  padding: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  color: #757575;\n  background: rgba(0, 0, 0, 0.15);\n  text-align: center;\n  font-weight: 600;\n  font-size: 1em;\n  cursor: pointer;\n  max-height: 45px;\n  border: none;\n}\n.form__button:hover {\n  background: #a2a2a2;\n  color: #fff;\n}\n\n.form__button-secondary {\n  color: #949494;\n  padding: 10px 3px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.form__button-secondary:hover {\n  background: #a2a2a2;\n  color: #fff;\n}\n\n.bottom {\n  display: flex;\n  align-items: center;\n}\n.bottom li {\n  flex: 1;\n  text-align: center;\n  display: flex;\n}\n.bottom li a {\n  color: #949494;\n  flex-basis: 100%;\n  padding: 10px 3px;\n}\n.bottom li a:hover {\n  color: #fff;\n  background-color: #a2a2a2;\n}\n\n.list {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  width: clamp(200px, 63%, 70%);\n  margin: 10px auto;\n}\n\n.list__header {\n  font-size: 2em;\n  color: #5a5a5a;\n  margin: 15px 0;\n}\n\n.list__item {\n  color: #5a5a5a;\n  border: 1px solid #eee;\n  padding: 10px;\n}\n.list__item:hover {\n  background-color: #e7e7e7;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/forms.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,4BAAA;EACA,gBAAA;EACA,8BAAA;EACA,eAAA;EACA,oBAAA;AADF;AAGE;EACE,iBAAA;AADJ;;AAKA;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;EACA,mBAAA;AAFF;;AAKA;EACE,mBAAA;EACA,gBAAA;EACA,6BAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,OAAA;EACA,cAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,cAAA;AAFF;;AAIA;EACE,aAAA;EACA,8BAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,cAAA;EACA,+BAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;AADF;AAGE;EACE,mBAAA;EACA,WAAA;AADJ;;AAKA;EACE,cAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;AAFF;AAIE;EACE,mBAAA;EACA,WAAA;AAFJ;;AAMA;EACE,aAAA;EACA,mBAAA;AAHF;AAIE;EACE,OAAA;EACA,kBAAA;EACA,aAAA;AAFJ;AAGI;EACE,cAAA;EACA,gBAAA;EACA,iBAAA;AADN;AAEM;EACE,WAAA;EACA,yBAAA;AAAR;;AAMA;EACE,aAAA;EACA,iBAAA;EACA,2BAAA;EACA,6BAAA;EACA,iBAAA;AAHF;;AAMA;EACE,cAAA;EACA,cC5FQ;ED6FR,cAAA;AAHF;;AAMA;EACE,cCjGQ;EDkGR,sBAAA;EACA,aAAA;AAHF;AAKE;EACE,yBC3GgB;ADwGpB","sourcesContent":["@import \"../var\";\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  padding: 35px 30px 15px 30px;\r\n  background: #eee;\r\n  width: clamp(50px, 66%, 300px);\r\n  margin: 3% auto;\r\n  align-items: stretch;\r\n\r\n  p {\r\n    font-size: 0.6rem;\r\n  }\r\n}\r\n\r\n.form-title {\r\n  font-weight: bold;\r\n  font-size: 120%;\r\n  text-align: center;\r\n  color: #949494;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-input {\r\n  background: #f7f7f7;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid #ccc;\r\n  border-left: 0;\r\n  border-top: 0;\r\n  border-right: 0;\r\n  flex: 1;\r\n  margin: 10px 0;\r\n  padding: 12px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  color: #757575;\r\n}\r\n.form__buttons{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form__button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 10px 1px;\r\n  padding: 15px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  color: #757575;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 1em;\r\n  cursor: pointer;\r\n  max-height: 45px;\r\n  border: none;\r\n\r\n  &:hover {\r\n    background: #a2a2a2;\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.form__button-secondary {\r\n  color: #949494;\r\n  padding: 10px 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    background: #a2a2a2;\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.bottom {\r\n  display: flex;\r\n  align-items: center;\r\n  li {\r\n    flex: 1;\r\n    text-align: center;\r\n    display: flex;\r\n    a {\r\n      color: #949494;\r\n      flex-basis: 100%;\r\n      padding: 10px 3px;\r\n      &:hover {\r\n        color: #fff;\r\n        background-color: #a2a2a2;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.list{\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: flex-start;\r\n  width: clamp(200px, 63%, 70%);\r\n  margin: 10px auto;\r\n}\r\n\r\n.list__header{\r\n  font-size: 2em;\r\n  color: $color-a;\r\n  margin: 15px 0;\r\n}\r\n\r\n.list__item{\r\n  color: $color-a;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n\r\n  &:hover{\r\n    background-color: $color-white-hover;\r\n  }\r\n}\r\n\r\n","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/header/autocomplete.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/header/autocomplete.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search {\n  position: relative;\n  height: 32px;\n  margin: 2px 15px;\n  display: flex;\n}\n\n.search-top {\n  display: none;\n}\n@media (max-width: 800px) {\n  .search-top {\n    display: flex;\n  }\n}\n\n@media (max-width: 800px) {\n  .search-header {\n    display: none;\n  }\n}\n\n.search input {\n  flex: 1;\n  padding: 0 0 0 12px;\n  border: #4f4f4f 1px solid;\n  border-radius: 2px;\n}\n\n.search__result {\n  position: absolute;\n  top: 100%;\n  z-index: 2;\n  right: 1px;\n  box-shadow: 0px 12px 18px 0px rgba(54, 161, 139, 0.8);\n}\n\n.search__result a {\n  display: flex;\n  color: #4a4a4a;\n  padding: 3px 10px;\n  align-items: center;\n  background-color: #fff;\n}\n.search__result a:hover {\n  transform: scale(1.01);\n  background-color: #f6fefc;\n}\n\n.search__find {\n  height: 30px;\n  width: 32px;\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  cursor: pointer;\n}\n.search__find:hover {\n  background-color: gray;\n}\n\n.search__find:before {\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  box-sizing: border-box;\n  left: 9px;\n  top: 5px;\n  height: 14px;\n  width: 14px;\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n\n.search__find:after {\n  background: #ccc;\n  bottom: 5px;\n  transform: rotate(-45deg);\n  right: 8px;\n  height: 9px;\n  width: 2px;\n  content: \"\";\n  display: block;\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/header/autocomplete.scss","webpack://./resources/js/mixin_media.scss"],"names":[],"mappings":"AAGA;EACE,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;AAFF;;AAKA;EACE,aAAA;AAFF;ACiBE;EDhBF;IAGI,aAAA;EAAF;AACF;;ACYE;EDTF;IAEI,aAAA;EAAF;AACF;;AAGA;EACE,OAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;AAAF;;AAIA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,qDAAA;AADF;;AAIA;EACE,aAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;AADF;AAEE;EACE,sBAAA;EACA,yBAAA;AAAJ;;AAIA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;AADF;AAGE;EACE,sBAAA;AADJ;;AAKA;EACE,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,SAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAFF;;AAKA;EACE,gBAAA;EACA,WAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAFF","sourcesContent":["@import \"../../var\";\r\n@import \"../../mixin_media\";\r\n\r\n.search {\r\n  position: relative;\r\n  height: 32px;\r\n  margin: 2px 15px;\r\n  display: flex;\r\n}\r\n\r\n.search-top {\r\n  display: none;\r\n  @include _800 {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.search-header {\r\n  @include _800 {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.search input {\r\n  flex: 1;\r\n  padding: 0 0 0 12px;\r\n  border: hsl(0, 0%, 31%) 1px solid;\r\n  border-radius: 2px;\r\n}\r\n\r\n\r\n.search__result {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 2;\r\n  right: 1px;\r\n  box-shadow: 0px 12px 18px 0px hsla(168, 50%, 42%, 0.8)\r\n}\r\n\r\n.search__result a {\r\n  display: flex;\r\n  color: #4a4a4a;\r\n  padding: 3px 10px;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  &:hover{\r\n    transform: scale(1.01);\r\n    background-color: hsl(168, 75%, 98%);\r\n  }\r\n}\r\n\r\n.search__find {\r\n  height: 30px;\r\n  width: 32px;\r\n  position: absolute;\r\n  top: 1px;\r\n  right: 1px;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    background-color: hsl(0, 0%, 50%);\r\n  }\r\n}\r\n\r\n.search__find:before {\r\n  border: 2px solid #ccc;\r\n  border-radius: 50%;\r\n  box-sizing: border-box;\r\n  left: 9px;\r\n  top: 5px;\r\n  height: 14px;\r\n  width: 14px;\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n}\r\n\r\n.search__find:after {\r\n  background: #ccc;\r\n  bottom: 5px;\r\n  transform: rotate(-45deg);\r\n  right: 8px;\r\n  height: 9px;\r\n  width: 2px;\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n}\r\n","// Using\r\n//.div {\r\n//   @include _1200 {\r\n//       @content;\r\n//   }\r\n//}\r\n\r\n@mixin _1200 {\r\n  @media (max-width: 1200px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _1000 {\r\n  @media (max-width: 1000px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _900 {\r\n  @media (max-width: 900px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _800 {\r\n  @media (max-width: 800px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _600 {\r\n  @media (max-width: 600px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _500 {\r\n  @media (max-width: 500px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _400{\r\n  @media (max-width: 400px){\r\n    @content;\r\n  }\r\n}\r\n@mixin _300{\r\n  @media (max-width: 300px){\r\n    @content;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/header/header.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/header/header.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.logo {\n  display: flex;\n  margin: 0 0 0 10px;\n  align-items: center;\n  height: 30px;\n  flex: 1 0 auto;\n}\n.logo a {\n  width: 100px;\n  display: block;\n}\n\n.logo_square {\n  height: 100%;\n  margin-right: 5px;\n  width: 30px;\n}\n@media (max-width: 800px) {\n  .logo_square {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .logo_square {\n    display: none;\n  }\n}\n\n.header .logo_vitex {\n  height: 30px;\n}\n@media (max-width: 600px) {\n  .header .logo_vitex {\n    height: 25px;\n  }\n}\n\n.logo__description {\n  width: 120px;\n  margin: 0 10px 0 20px;\n  display: inline-block;\n  color: #343133;\n  font-size: 12px;\n}\n@media (max-width: 800px) {\n  .logo__description {\n    display: none;\n    font-size: 10px;\n    width: 90px;\n  }\n}\n@media (max-width: 400px) {\n  .logo__description {\n    display: none;\n  }\n}\n\n.location {\n  font-size: 12px;\n  padding: 0 15px;\n  max-width: 105px;\n  position: relative;\n  flex: 1;\n}\n@media (max-width: 800px) {\n  .location {\n    display: none;\n  }\n}\n.location svg {\n  position: absolute;\n  left: -8px;\n  top: 30%;\n  width: 15px;\n  height: 15px;\n  stroke: var(--color-main);\n}\n\n/***** Всплывающие телефоны */\n.phone {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: bold 17px/21px \"Proxima Nova\", sans-serif;\n  padding: 0 25px;\n  white-space: nowrap;\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .phone {\n    font: bold 12px/17px \"Proxima Nova\", sans-serif;\n  }\n}\n\n.phone svg {\n  position: absolute;\n  left: -20px;\n  bottom: 3px;\n  color: #1bbc9b;\n  width: 14px;\n}\n@media (max-width: 400px) {\n  .phone svg {\n    font-size: 17px;\n    width: 11px;\n    bottom: 2px;\n    left: -18px;\n  }\n}\n\n.phone > a {\n  position: relative;\n  color: #4e4e4e;\n}\n.phone > a:after {\n  content: \"\";\n  position: absolute;\n  left: -25px;\n  top: 30%;\n  display: inline-block;\n  border: 5px solid transparent;\n  border-top-color: var(--color-main);\n  margin-left: 9px;\n}\n@media (max-width: 500px) {\n  .phone > a:after {\n    position: absolute;\n    top: 5px;\n  }\n}\n\n.phone:hover .phone__popup-inner {\n  padding: 25px 30px;\n  height: auto;\n  overflow: visible;\n}\n\n.phone__popup {\n  position: absolute;\n  left: -15%;\n  bottom: -10px;\n  padding-top: 0;\n  height: 0;\n  z-index: 6;\n}\n@media (max-width: 600px) {\n  .phone__popup {\n    right: 0;\n    left: initial;\n  }\n}\n\n.phone__popup-inner {\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 6px 12px #8fa39f;\n  font: 15px/19px \"Proxima Nova\", sans-serif;\n  color: #181617;\n  padding: 0 30px;\n  height: 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.phone__popup-inner:before {\n  content: \"\";\n  border-bottom: 10px solid #fff;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  position: absolute;\n  left: 192px;\n  top: -10px;\n}\n\n.phone__popup-head {\n  border-bottom: 1px solid #ebebeb;\n  padding-bottom: 15px;\n  margin-bottom: 16px;\n  white-space: initial;\n}\n\n.phone__popup p {\n  margin: 0 0 11px;\n}\n\n.phone__popup-phones {\n  margin: 0;\n}\n\n.phone__popup-phones a {\n  font: bold 17px/21px \"Proxima Nova\", sans-serif;\n  color: #343133;\n  line-height: 1.7;\n}\n\n.header-catalog-menu {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 1px;\n  background: var(--color-main);\n  min-height: 40px;\n  display: flex;\n  opacity: 0.92;\n  z-index: 1;\n}\n\n.header-catalog-menu__wrap {\n  max-width: 1310px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-end;\n}\n.header-catalog-menu__wrap .mobile-menu {\n  position: absolute;\n  top: 100%;\n  right: -150%;\n  width: 250px;\n  background: #78aafe;\n  transition: right 500ms ease-out;\n}\n@media (max-width: 500px) {\n  .header-catalog-menu__wrap .mobile-menu {\n    width: 100%;\n  }\n}\n.header-catalog-menu__wrap .mobile-menu.show {\n  right: 0;\n}\n.header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap {\n  display: flex;\n  flex-flow: column;\n  margin: 20px;\n  text-align: end;\n}\n@media (max-width: 500px) {\n  .header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap {\n    text-align: center;\n  }\n}\n.header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap .mobile-menu__item {\n  color: #ffffff;\n  padding: 10px 50px 10px;\n  cursor: pointer;\n}\n.header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap .mobile-menu__item:hover {\n  background-color: #0070ff;\n}\n\n.utils {\n  display: flex;\n  padding: 0 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.utils svg {\n  stroke: white;\n  stroke-width: 3px;\n  width: 17px;\n  height: 17px;\n  padding: 0 15px;\n}\n.utils .search,\n.utils .gamburger,\n.utils .cart {\n  position: initial;\n  height: 100%;\n  margin: initial;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n}\n.utils .search:hover,\n.utils .gamburger:hover,\n.utils .cart:hover {\n  background-color: #0070ff;\n}\n.h-cat {\n  background-color: rgba(34, 117, 255, 0);\n  position: relative;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #fff;\n  font: 600 17px/17px intro, \"Proxima Nova\", sans-serif;\n}\n@media (max-width: 800px) {\n  .h-cat {\n    display: none;\n  }\n}\n.h-cat:first-child ul {\n  left: 0;\n}\n.h-cat:first-child ul:before {\n  right: 80%;\n}\n.h-cat:last-child ul {\n  right: 0;\n}\n.h-cat:hover {\n  background-color: rgba(34, 117, 255, 0.5);\n}\n.h-cat:hover ul {\n  height: auto;\n  padding: 30px 25px 15px 25px;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  background-color: white;\n  top: 100%;\n  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.28);\n  overflow: visible;\n  cursor: text;\n}\n.h-cat:hover ul li {\n  cursor: pointer;\n  padding: 10px 5px;\n  border-bottom: #f0f0f0 1px solid;\n  transition: 0.3s;\n}\n.h-cat:hover ul li:hover {\n  background: #ababab33;\n}\n.h-cat:hover ul li a:hover {\n  background: #eeeeee;\n}\n.h-cat ul {\n  height: 0;\n  position: absolute;\n  top: 45px;\n  overflow: hidden;\n  color: black;\n  z-index: 2;\n}\n.h-cat ul li a {\n  font: 600 14px/17px \"Proxima Nova\", sans-serif;\n}\n.h-cat ul:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  transform: rotate(45deg);\n  position: absolute;\n  top: -4px;\n  right: 50%;\n  border-top: 10px solid white;\n  border-left: 10px solid white;\n}\n\n.user-menu {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 17px;\n  cursor: pointer;\n  color: #2b303a;\n  margin-right: 10px;\n  flex: 0 1 auto;\n}\n@media (max-width: 500px) {\n  .user-menu {\n    font-size: 12px;\n    display: none;\n    padding: 3px 10px;\n  }\n}\n.user-menu:hover {\n  background-color: #f0f0f0;\n}\n.user-menu img {\n  border: 2px solid #f5f5f5;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 6px;\n  width: 44px;\n}\n.user-menu .user-menu__menu {\n  display: none;\n  flex-flow: column;\n  border: 1px solid #eee;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background: #fff;\n  z-index: 501;\n  position: absolute;\n  top: 100%;\n  right: -1px;\n  width: 280px;\n  padding: 10px;\n}\n.user-menu .user-menu__menu a {\n  padding: 5px 10px;\n  color: #5a5a5a;\n}\n.user-menu .user-menu__menu a:hover {\n  background-color: #e5e5e5;\n}\n.user-menu:hover > .user-menu__menu {\n  display: flex;\n}\n\n.guest-menu {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 17px;\n  cursor: pointer;\n  color: #2b303a;\n  margin-right: 10px;\n  flex: 0 1 auto;\n  border: 1px solid grey;\n  border-radius: 4px;\n  padding: 5px 15px;\n  z-index: 2;\n}\n@media (max-width: 500px) {\n  .guest-menu {\n    font-size: 12px;\n    display: none;\n    padding: 3px 10px;\n  }\n}\n.guest-menu svg {\n  width: 17px;\n  padding-right: 10px;\n}\n.guest-menu .guest-menu__menu {\n  position: absolute;\n  display: none;\n  flex-flow: column;\n  background-color: #ffffff;\n  padding: 10px;\n  top: 103%;\n  right: -1px;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  box-shadow: 0px 11px 16px 0px #1d7c6840;\n  z-index: 1;\n}\n.guest-menu .guest-menu__menu a {\n  color: #5a5a5a;\n  padding: 5px 10px;\n}\n.guest-menu .guest-menu__menu a:hover {\n  background-color: #e5e5e5;\n}\n.guest-menu .user-menu__icon {\n  width: 14px;\n  height: 15px;\n  padding: 0 5px 3px;\n}\n.guest-menu:hover > .guest-menu__menu {\n  display: flex;\n}\n\nheader {\n  display: flex;\n  flex: 0 0 auto;\n  background: #fff;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.header {\n  display: flex;\n  position: relative;\n  align-items: center;\n  margin: 10px 20px;\n  justify-content: space-between;\n  max-width: 1310px;\n  height: 50px;\n}\n@media (max-width: 600px) {\n  .header {\n    padding: 0;\n  }\n}\n\n.header__info {\n  display: flex;\n  position: relative;\n  align-items: center;\n  max-width: 1310px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media (max-width: 600px) {\n  .header__info {\n    padding: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./resources/js/components/header/header.scss","webpack://./resources/js/components/header/logo.scss","webpack://./resources/js/mixin_media.scss","webpack://./resources/js/components/header/location.scss","webpack://./resources/js/components/header/phone.scss","webpack://./resources/js/components/header/header-catalog-menu.scss","webpack://./resources/js/components/header/mobile-menu.scss","webpack://./resources/js/components/header/user_menu.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"logo\";\r\n@import \"location\";\r\n@import \"phone\";\r\n@import \"header-catalog-menu\";\r\n@import \"user_menu\";\r\n\r\nheader {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  background: #fff;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n.header {\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  margin: 10px 20px;\r\n  justify-content: space-between;\r\n  max-width: 1310px;\r\n  height: 50px;\r\n  //width: 100%;\r\n  @include _600 {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n.header__info {\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  max-width: 1310px;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  @include _600 {\r\n    padding: 0;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","@import \"../../mixin_media\";\r\n\r\n.logo {\r\n  display: flex;\r\n  margin: 0 0 0 10px;\r\n  align-items: center;\r\n  height: 30px;\r\n  flex: 1 0 auto;\r\n\r\n  a {\r\n    width: 100px;\r\n    display: block;\r\n  }\r\n\r\n}\r\n\r\n.logo_square {\r\n  height: 100%;\r\n  margin-right: 5px;\r\n  width: 30px;\r\n\r\n  @include _800 {\r\n    display: none;\r\n  }\r\n  @include _600 {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n.header {\r\n\r\n  .logo_vitex {\r\n    height: 30px;\r\n    @include _600 {\r\n      height: 25px;\r\n    }\r\n  }\r\n}\r\n\r\n.logo__description {\r\n  width: 120px;\r\n  margin: 0 10px 0 20px;\r\n  display: inline-block;\r\n  color: #343133;\r\n  font-size: 12px;\r\n\r\n  @include _800 {\r\n    display: none;\r\n    font-size: 10px;\r\n    width: 90px;\r\n  }\r\n\r\n  @include _400 {\r\n    display: none;\r\n  }\r\n}","// Using\r\n//.div {\r\n//   @include _1200 {\r\n//       @content;\r\n//   }\r\n//}\r\n\r\n@mixin _1200 {\r\n  @media (max-width: 1200px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _1000 {\r\n  @media (max-width: 1000px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _900 {\r\n  @media (max-width: 900px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _800 {\r\n  @media (max-width: 800px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _600 {\r\n  @media (max-width: 600px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _500 {\r\n  @media (max-width: 500px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _400{\r\n  @media (max-width: 400px){\r\n    @content;\r\n  }\r\n}\r\n@mixin _300{\r\n  @media (max-width: 300px){\r\n    @content;\r\n  }\r\n}","@import \"../../mixin_media\";\r\n@import \"../../var\";\r\n\r\n.location{\r\n  font-size: 12px;\r\n  padding: 0 15px;\r\n  max-width: 105px;\r\n  position: relative;\r\n  flex: 1;\r\n  @include _800{\r\n    display: none;\r\n  }\r\n\r\n  svg{\r\n    position: absolute;\r\n    left: -8px;\r\n    top: 30%;\r\n    width: 15px;\r\n    height: 15px;\r\n    stroke: var(--color-main);\r\n  }\r\n}","@import \"../../var\";\r\n@import \"../../mixin_media\";\r\n\r\n/***** Всплывающие телефоны */\r\n.phone {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font: bold 17px/21px 'Proxima Nova', sans-serif;\r\n  padding: 0 25px;\r\n  white-space: nowrap;\r\n  flex: 1;\r\n\r\n  @include _500 {\r\n    font: bold 12px/17px 'Proxima Nova', sans-serif;\r\n  }\r\n}\r\n\r\n.phone svg {\r\n  position: absolute;\r\n  left: -20px;\r\n  bottom: 3px;\r\n  color: #1bbc9b;\r\n  width: 14px;\r\n  @include _400 {\r\n    font-size: 17px;\r\n    width: 11px;\r\n    bottom: 2px;\r\n    left: -18px;\r\n  }\r\n}\r\n\r\n.phone > a {\r\n  position: relative;\r\n  color: #4e4e4e;\r\n\r\n  &:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: -25px;\r\n    top: 30%;\r\n    display: inline-block;\r\n    border: 5px solid transparent;\r\n    border-top-color: var(--color-main);\r\n    margin-left: 9px;\r\n    @include _500 {\r\n      position: absolute;\r\n      top: 5px;\r\n    }\r\n  }\r\n}\r\n\r\n  .phone:hover .phone__popup-inner {\r\n    padding: 25px 30px;\r\n    height: auto;\r\n    overflow: visible;\r\n  }\r\n\r\n  .phone__popup {\r\n    position: absolute;\r\n    left: -15%;\r\n    bottom: -10px;\r\n    padding-top: 0;\r\n    height: 0;\r\n    z-index: 6;\r\n    @include _600{\r\n      right: 0;\r\n      left: initial;\r\n    }\r\n  }\r\n\r\n  .phone__popup-inner {\r\n    width: 200px;\r\n    background: #fff;\r\n    box-shadow: 0 6px 12px hsl(168, 10%, 60%);\r\n    font: 15px/19px 'Proxima Nova', sans-serif;\r\n    color: #181617;\r\n    padding: 0 30px;\r\n    height: 0;\r\n    overflow: hidden;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .phone__popup-inner:before {\r\n    content: '';\r\n    border-bottom: 10px solid #fff;\r\n    border-left: 11px solid transparent;\r\n    border-right: 11px solid transparent;\r\n    position: absolute;\r\n    left: 192px;\r\n    top: -10px;\r\n  }\r\n\r\n  .phone__popup-head {\r\n    border-bottom: 1px solid #ebebeb;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 16px;\r\n    white-space: initial;\r\n  }\r\n\r\n  .phone__popup p {\r\n    margin: 0 0 11px;\r\n  }\r\n\r\n  .phone__popup-phones {\r\n    margin: 0;\r\n  }\r\n\r\n  .phone__popup-phones a {\r\n    font: bold 17px/21px 'Proxima Nova', sans-serif;\r\n    color: #343133;\r\n    line-height: 1.7;\r\n  }\r\n\r\n\r\n","@import \"../../var\";\r\n@import \"../accordion/partials/_layout.scss\";\r\n@import \"../../mixin_media\";\r\n@import \"./mobile-menu\";\r\n\r\n.header-catalog-menu {\r\n  position: sticky;\r\n  top: 1px;\r\n  background: var(--color-main);\r\n  min-height: 40px;\r\n  display: flex;\r\n  opacity: .92;\r\n  z-index: 1;\r\n}\r\n\r\n.header-catalog-menu__wrap {\r\n  max-width: 1310px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n\r\n  @include mobile-menu();\r\n\r\n\r\n}\r\n\r\n.utils {\r\n  display: flex;\r\n  padding: 0 20px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  svg {\r\n    stroke: white;\r\n    stroke-width: 3px;\r\n    width: 17px;\r\n    height: 17px;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .search,\r\n  .gamburger,\r\n  .cart {\r\n    position: initial;\r\n    height: 100%;\r\n    margin: initial;\r\n    display: flex;\r\n    cursor: pointer;\r\n    align-items: center;\r\n\r\n    &:hover {\r\n      background-color: #0070ff;\r\n    }\r\n  }\r\n\r\n  .menu {\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\n.h-cat {\r\n  background-color: rgba(#2275ff, 0);\r\n  position: relative;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  transition: .5s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  color: #fff;\r\n  font: 600 17px/17px intro, 'Proxima Nova', sans-serif;\r\n\r\n\r\n  @include _800 {\r\n    display: none;\r\n  }\r\n\r\n  &:first-child ul {\r\n    left: 0;\r\n\r\n    &:before {\r\n      right: 80%;\r\n    }\r\n  }\r\n\r\n  &:last-child ul {\r\n    right: 0;\r\n  }\r\n\r\n\r\n  &:hover {\r\n    background-color: rgba(#2275ff, .5);\r\n\r\n    ul {\r\n      height: auto;\r\n      padding: 30px 25px 15px 25px;\r\n      max-height: fit-content;\r\n      background-color: white;\r\n      top: 100%;\r\n      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.28);\r\n      overflow: visible;\r\n      cursor: text;\r\n\r\n      li {\r\n        cursor: pointer;\r\n        padding: 10px 5px;\r\n        border-bottom: #f0f0f0 1px solid;\r\n        transition: .3s;\r\n\r\n        &:hover {\r\n          background: #ababab33;\r\n        }\r\n\r\n        a:hover {\r\n          background: #eeeeee;;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n  ul {\r\n    height: 0;\r\n    position: absolute;\r\n    top: 45px;\r\n    overflow: hidden;\r\n    color: black;\r\n    z-index: 2;\r\n\r\n    li {\r\n\r\n      a {\r\n        font: 600 14px/17px 'Proxima Nova', sans-serif;\r\n      }\r\n    }\r\n\r\n    &:before {\r\n      content: '';\r\n      display: block;\r\n      width: 0;\r\n      height: 0;\r\n      transform: rotate(45deg);\r\n      position: absolute;\r\n      top: -4px;\r\n      right: 50%;\r\n      border-top: 10px solid white;\r\n      border-left: 10px solid white;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../../mixin_media\";\r\n\r\n@mixin mobile-menu {\r\n\r\n  .mobile-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    right: -150%;\r\n    width: 250px;\r\n    //min-height: 100vh;\r\n    background: #78aafe;\r\n    transition: right 500ms ease-out;\r\n\r\n    @include _500 {\r\n      width: 100%;\r\n    }\r\n\r\n    &.show {\r\n      right: 0;\r\n    }\r\n\r\n    .mobile-menu__wrap {\r\n      display: flex;\r\n      flex-flow: column;\r\n      margin: 20px;\r\n      text-align: end;\r\n\r\n      @include _500 {\r\n        text-align: center;\r\n      }\r\n\r\n      .mobile-menu__item {\r\n        color: #ffffff;\r\n        padding: 10px 50px 10px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          background-color: #0070ff;\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n}","@import \"../../var\";\r\n@import \"../../mixin_media\";\r\n\r\n@mixin user-menu {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  color: #2b303a;\r\n  margin-right: 10px;\r\n  flex: 0 1 auto;\r\n  @include _500 {\r\n    font-size: 12px;\r\n    display: none;\r\n    padding: 3px 10px;\r\n  }\r\n}\r\n\r\n.user-menu {\r\n\r\n  @include user-menu;\r\n\r\n  &:hover {\r\n    background-color: #f0f0f0;\r\n  }\r\n\r\n  img {\r\n    border: 2px solid #f5f5f5;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-right: 6px;\r\n    width: 44px;\r\n  }\r\n\r\n  //&:after {\r\n  //  content: '☰';\r\n  //}\r\n\r\n  .user-menu__menu {\r\n    display: none;\r\n    flex-flow: column;\r\n    border: 1px solid #eee;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n    background: #fff;\r\n    z-index: 501;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: -1px;\r\n    width: 280px;\r\n    padding: 10px;\r\n\r\n\r\n    a {\r\n      padding: 5px 10px;\r\n      color: $color-a;\r\n\r\n      &:hover {\r\n        background-color: #e5e5e5;\r\n      }\r\n    }\r\n  }\r\n\r\n  &:hover > .user-menu__menu {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.guest-menu {\r\n  @include user-menu;\r\n  border: 1px solid grey;\r\n  border-radius: 4px;\r\n  padding: 5px 15px;\r\n  z-index: 2;\r\n\r\n  svg {\r\n    width: 17px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .guest-menu__menu {\r\n    position: absolute;\r\n    display: none;\r\n    flex-flow: column;\r\n\r\n    background-color: #ffffff;\r\n    padding: 10px;\r\n    top: 103%;\r\n    right: -1px;\r\n    height: max-content;\r\n    box-shadow: 0px 11px 16px 0px #1d7c6840;\r\n    z-index: 1;\r\n\r\n    a {\r\n      color: $color-a;\r\n      padding: 5px 10px;\r\n\r\n      &:hover {\r\n        background-color: #e5e5e5;\r\n      }\r\n    }\r\n  }\r\n\r\n  .user-menu__icon {\r\n    width: 14px;\r\n    height: 15px;\r\n    padding: 0 5px 3px;\r\n  }\r\n\r\n  &:hover > .guest-menu__menu {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n\r\n\r\n","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/popup.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/popup.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n  position: fixed;\n  right: 0;\n  bottom: 80px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-end;\n}\n\n.popup__item {\n  position: relative;\n  width: 204px;\n  background: var(--color-main);\n  padding: 15px;\n  color: #ffffff;\n  display: flex;\n  opacity: 0.9;\n  border-radius: 5px;\n  margin: 2px 0;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  visibility: visible !important;\n}\n\n.popup-hide {\n  position: relative;\n  width: 204px;\n  background: var(--color-main);\n  padding: 15px;\n  color: #ffffff;\n  display: flex;\n  opacity: 0.9;\n  border-radius: 5px;\n  margin: 2px 0;\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  visibility: visible;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    transform: scale(1.1);\n  }\n  80% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  99% {\n    transform: scale(0.7);\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    transform: scale(1.1);\n  }\n  80% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  99% {\n    transform: scale(0.7);\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    transform: scale(0.7);\n    opacity: 0.5;\n  }\n  80% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    -webkit-transform: scale(0.7);\n    opacity: 0.5;\n  }\n  80% {\n    -webkit-transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n}\n.popup__close {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 10px;\n  height: 10px;\n  color: white;\n  background: red;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1px;\n}", "",{"version":3,"sources":["webpack://./resources/js/components/popup.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,qBAAA;AAAF;;AAEA;EACE,kBAAA;EACA,YAAA;EACA,6BCRW;EDSX,aAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EAEA,8BAAA;UAAA,sBAAA;EACA,gCAAA;UAAA,wBAAA;EACA,8CAAA;UAAA,sCAAA;EACA,8BAAA;AAAF;;AAGA;EACE,kBAAA;EACA,YAAA;EACA,6BCzBW;ED0BX,aAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EAEA,+BAAA;UAAA,uBAAA;EACA,8BAAA;UAAA,sBAAA;EACA,8CAAA;UAAA,sCAAA;EACA,mBAAA;AADF;;AAIA;EACE;IAAG,qBAAA;EAAH;EACA;IAAI,qBAAA;IAAsB,YAAA;EAG1B;EAFA;IAAI,qBAAA;IAAqB,YAAA;EAMzB;EALA;IAAK,UAAA;EAQL;AACF;;AAbA;EACE;IAAG,qBAAA;EAAH;EACA;IAAI,qBAAA;IAAsB,YAAA;EAG1B;EAFA;IAAI,qBAAA;IAAqB,YAAA;EAMzB;EALA;IAAK,UAAA;EAQL;AACF;AANA;EACE;IAAI,qBAAA;IAAsB,YAAA;EAU1B;EATA;IAAK,qBAAA;EAYL;EAXA;IAAM,mBAAA;IAAoB,UAAA;EAe1B;AACF;AAbA;EACE;IAAI,6BAAA;IAA8B,YAAA;EAiBlC;EAhBA;IAAK,6BAAA;EAmBL;EAlBA;IAAM,2BAAA;IAA4B,UAAA;EAsBlC;AACF;AApBA;EACG,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAsBH","sourcesContent":["@import \"../var\";\r\n.popup{\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 80px;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: flex-end;\r\n}\r\n.popup__item{\r\n  position: relative;\r\n  width: 204px;\r\n  background: $color-main;\r\n  padding: 15px;\r\n  color: #ffffff;\r\n  display: flex;\r\n  opacity: 0.9;\r\n  border-radius: 5px;\r\n  margin: 2px 0;\r\n\r\n  animation-name: fadeIn;\r\n  animation-duration: 0.4s;\r\n  animation-timing-function: ease-in-out;\r\n  visibility: visible !important;\r\n}\r\n\r\n.popup-hide{\r\n  position: relative;\r\n  width: 204px;\r\n  background: $color-main;\r\n  padding: 15px;\r\n  color: #ffffff;\r\n  display: flex;\r\n  opacity: 0.9;\r\n  border-radius: 5px;\r\n  margin: 2px 0;\r\n\r\n  animation-name: fadeOut;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  visibility: visible;\r\n}\r\n\r\n@keyframes fadeOut {\r\n  0%{transform: scale(1.1);}\r\n  80%{transform: scale(0.8);opacity:.5;}\r\n  99%{transform: scale(.7);opacity: 0.1;}\r\n  100%{opacity: 0;}\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {transform: scale(0.7);opacity: 0.5;}\r\n  80% {transform: scale(1.1);}\r\n  100% {transform: scale(1);opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {-webkit-transform: scale(0.7);opacity: 0.5;}\r\n  80% {-webkit-transform: scale(1.1);}\r\n  100% {-webkit-transform: scale(1);opacity: 1;}\r\n}\r\n\r\n.popup__close{\r\n   position: absolute;\r\n   top: 1px;\r\n   left: 1px;\r\n   width: 10px;\r\n   height: 10px;\r\n   color: white;\r\n   background: red;\r\n   border-radius: 3px;\r\n   cursor: pointer;\r\n   font-size: 10px;\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   padding: 1px;\r\n }","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/normalize.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/normalize.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nhtml {\n  height: 100%;\n  overflow-x: hidden;\n}\n\nbody {\n  display: flex;\n  min-height: 100%;\n  flex-direction: column;\n  margin: 0;\n  font-family: \"RobotoMedium\", sans-serif;\n  /*скрыть дерганье страницы в появлении полосы прокрутки*/\n  padding: 0 calc(0px - (100vw - 100%)) 0 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden;\n}\n@media (max-width: 500px) {\n  body {\n    padding: 0;\n  }\n}\n\np {\n  letter-spacing: 1px;\n}\n\na {\n  text-decoration: none;\n}\n\nul, li {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ninput,\ntextarea,\ntextarea:focus,\n.button:focus {\n  outline: none;\n}\n\n.flex1 {\n  display: flex !important;\n}\n\n.none {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./resources/js/normalize.scss","webpack://./resources/js/mixin_media.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAUhB;EACE,YAAA;EACA,kBAAA;AARF;;AAYA;EACE,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;EACA,uCAAA;EACA,wDAAA;EACA,yCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kCAAA;EACA,kBAAA;AATF;ACoBE;EDtBF;IAcI,UAAA;EARF;AACF;;AAaA;EACE,mBAAA;AAVF;;AAaA;EACE,qBAAA;AAVF;;AAaA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;AAVF;;AAaA;;;;EAIE,aAAA;AAVF;;AAaA;EACE,wBAAA;AAVF;;AAaA;EACE,aAAA;AAVF","sourcesContent":["@import \"mixin_media\";\r\n\r\n//@font-face {\r\n//  font-family: \"RobotoMedium\";\r\n//  font-style: normal;\r\n//  font-weight: 500;\r\n//  src: url(\"./font/RobotoMedium/RobotoMedium.woff\") format(\"woff\"),\r\n//  url(\"/resources/js/font/RobotoMedium/RobotoMedium.woff\") format(\"truetype\");\r\n//}\r\n\r\nhtml {\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\nbody {\r\n  display: flex;\r\n  min-height: 100%;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  font-family: \"RobotoMedium\", sans-serif;\r\n  /*скрыть дерганье страницы в появлении полосы прокрутки*/\r\n  padding: 0 calc(0px - (100vw - 100%)) 0 0;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-rendering: optimizeLegibility;\r\n  overflow-x: hidden;\r\n\r\n  @include _500 {\r\n    padding: 0;\r\n  }\r\n\r\n}\r\n\r\n\r\np {\r\n  letter-spacing: 1px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul, li {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ninput,\r\ntextarea,\r\ntextarea:focus,\r\n.button:focus {\r\n  outline: none;\r\n}\r\n\r\n.flex1 {\r\n  display: flex !important;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n","// Using\r\n//.div {\r\n//   @include _1200 {\r\n//       @content;\r\n//   }\r\n//}\r\n\r\n@mixin _1200 {\r\n  @media (max-width: 1200px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _1000 {\r\n  @media (max-width: 1000px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _900 {\r\n  @media (max-width: 900px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _800 {\r\n  @media (max-width: 800px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _600 {\r\n  @media (max-width: 600px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _500 {\r\n  @media (max-width: 500px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _400{\r\n  @media (max-width: 400px){\r\n    @content;\r\n  }\r\n}\r\n@mixin _300{\r\n  @media (max-width: 300px){\r\n    @content;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./resources/pic/header-big.png":
/*!**************************************!*\
  !*** ./resources/pic/header-big.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/header-big.png?6a2d04cb970344ebca0b431f4fb77f63");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/Auth/cabinet.scss":
/*!****************************************!*\
  !*** ./resources/js/Auth/cabinet.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_cabinet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./cabinet.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/cabinet.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_cabinet_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_cabinet_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Auth/edit.scss":
/*!*************************************!*\
  !*** ./resources/js/Auth/edit.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./edit.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/edit.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_edit_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_edit_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Auth/login.scss":
/*!**************************************!*\
  !*** ./resources/js/Auth/login.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_login_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./login.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/Auth/login.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_login_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_login_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/common.scss":
/*!**********************************!*\
  !*** ./resources/js/common.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./common.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/common.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_common_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_common_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/alert/alert.scss":
/*!**************************************************!*\
  !*** ./resources/js/components/alert/alert.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_alert_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./alert.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/alert/alert.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_alert_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_alert_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/cookie/cookie.scss":
/*!****************************************************!*\
  !*** ./resources/js/components/cookie/cookie.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_cookie_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./cookie.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/cookie/cookie.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_cookie_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_cookie_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/footer/footer.scss":
/*!****************************************************!*\
  !*** ./resources/js/components/footer/footer.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./footer.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/footer/footer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms.scss":
/*!********************************************!*\
  !*** ./resources/js/components/forms.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_forms_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./forms.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/forms.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_forms_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_forms_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/header/autocomplete.scss":
/*!**********************************************************!*\
  !*** ./resources/js/components/header/autocomplete.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_autocomplete_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./autocomplete.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/header/autocomplete.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_autocomplete_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_autocomplete_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/header/header.scss":
/*!****************************************************!*\
  !*** ./resources/js/components/header/header.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./header.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/header/header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/popup.scss":
/*!********************************************!*\
  !*** ./resources/js/components/popup.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./popup.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/components/popup.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_popup_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_popup_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/normalize.scss":
/*!*************************************!*\
  !*** ./resources/js/normalize.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_normalize_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./normalize.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[9].oneOf[1].use[3]!./resources/js/normalize.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_normalize_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_9_oneOf_1_use_3_normalize_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./resources/js/Auth/auth.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header */ "./resources/js/components/header/header.js");
/* harmony import */ var _components_header_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/autocomplete */ "./resources/js/components/header/autocomplete.js");
/* harmony import */ var _components_alert_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/alert/alert */ "./resources/js/components/alert/alert.js");
/* harmony import */ var _components_forms_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forms.scss */ "./resources/js/components/forms.scss");
/* harmony import */ var _components_cookie_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cookie/cookie */ "./resources/js/components/cookie/cookie.js");
/* harmony import */ var _components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/footer.scss */ "./resources/js/components/footer/footer.scss");
/* harmony import */ var _changepassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword */ "./resources/js/Auth/changepassword.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ "./resources/js/Auth/login.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register */ "./resources/js/Auth/register.js");
/* harmony import */ var _cabinet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cabinet */ "./resources/js/Auth/cabinet.js");
/* harmony import */ var _return_pass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./return_pass */ "./resources/js/Auth/return_pass.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit */ "./resources/js/Auth/edit.js");
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../normalize.scss */ "./resources/js/normalize.scss");













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsa0RBQWtELDZCQUE2QixLQUFLLGNB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QUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sUUFBUSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFFBQVEsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxP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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9BdXRoL2NhYmluZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvY2hhbmdlcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQXV0aC9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQXV0aC9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQXV0aC9yZXR1cm5fcGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Nvb2tpZS9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9BdXRoL2NhYmluZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQXV0aC9lZGl0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvbG9naW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb29raWUvY29va2llLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzPzI2YTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZm9ybXMuc2Nzcz9kNjYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2hlYWRlci9hdXRvY29tcGxldGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3M/YTZlMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wb3B1cC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ub3JtYWxpemUuc2Nzcz8yMDI4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvcGljL2hlYWRlci1iaWcucG5nIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvY2FiaW5ldC5zY3NzP2ZhZjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvZWRpdC5zY3NzPzkwZTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvbG9naW4uc2Nzcz82ZTYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21tb24uc2Nzcz9mOTU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnNjc3M/NzEzYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb29raWUvY29va2llLnNjc3M/OWY3YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3M/MmQyZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy5zY3NzP2UyZjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2F1dG9jb21wbGV0ZS5zY3NzPzJjYjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzP2ViOWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcG9wdXAuc2Nzcz8xYTBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ub3JtYWxpemUuc2Nzcz83ZTg3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0F1dGgvYXV0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0ICcuL2NhYmluZXQuc2Nzcyc7XHJcbmltcG9ydCB7JH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbiQoJy5mb3JtX19idXR0b24nKS5vbignc3VibWl0Jywgc2F2ZSlcclxuXHJcbmZ1bmN0aW9uIHNhdmUoZSkge1xyXG4gICAgbGV0IHRoID0gdGhpc1xyXG4gICAgbGV0IGZvcm0gPSBmb3JtRGF0YVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHskLCBwb3N0fSBmcm9tICcuLi9jb21tb24nXHJcblxyXG4kKCcuY2hhbmdlcGFzc3dvcmQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgcG9zdCgnL3VzZXIvY2hhbmdlcGFzc3dvcmQnLCB7XHJcbiAgICAgICAgJ29sZF9wYXNzd29yZCc6JCgnW25hbWU9XCJvbGRfcGFzc3dvcmRcIl0nKS5lbFswXS52YWx1ZSxcclxuICAgICAgICAnbmV3X3Bhc3N3b3JkJzokKCdbbmFtZT1cIm5ld19wYXNzd29yZFwiXScpLmVsWzBdLnZhbHVlXHJcbiAgICB9KVxyXG4gICAgaWYgKHJlcyA9PT0gJ29rJykge1xyXG4gICAgICAgIGxldCBtc2cgPSAkKCcubWVzc2FnZScpLmVsWzBdXHJcbiAgICAgICAgICAgIG1zZy5pbm5lclRleHQgPSAn0J/QsNGA0L7Qu9GMINGB0LzQtdC90LXQvSdcclxuICAgICAgICAkKG1zZykuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICQobXNnKS5yZW1vdmVDbGFzcygnZXJyb3InKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGxldCBtc2cgPSAkKCcubWVzc2FnZScpLmVsWzBdXHJcbiAgICAgICAgbXNnLmlubmVyVGV4dCA9ICfQp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6J1xyXG4gICAgICAgICQobXNnKS5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgICQobXNnKS5yZW1vdmVDbGFzcygnc3VjY2VzcycpXHJcbiAgICB9XHJcbn0pIiwiaW1wb3J0ICcuL2VkaXQuc2NzcydcclxuaW1wb3J0IHtwb3N0LCAkLCB2YWxpZGF0ZSwgcG9wdXB9IGZyb20gJy4uL2NvbW1vbidcclxuXHJcbiQoXCIjc2F2ZVwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIC8vIGVtYWlsOiBjaGVja19lbWFpbCgpLFxyXG4gICAgICAgICAgICBuYW1lOiAkKCdbbmFtZSA9IFwibmFtZVwiXScpLmVsWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBzdXJOYW1lOiAkKCdbbmFtZSA9IFwic3VyTmFtZVwiXScpLmVsWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBtaWRkbGVOYW1lOiAkKCdbbmFtZSA9IFwibWlkZGxlTmFtZVwiXScpLmVsWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBiaXJ0aERhdGU6ICQoJ1tuYW1lID0gXCJiaXJ0aERhdGVcIl0nKS5lbFswXS52YWx1ZSxcclxuICAgICAgICAgICAgcGhvbmU6ICQoJ1tuYW1lID0gXCJwaG9uZVwiXScpLmVsWzBdLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgcG9zdCgnL3VzZXIvZWRpdCcsIGRhdGEpXHJcbiAgICAgICAgaWYgKHJlcyA9PT0gJ29rJyl7XHJcbiAgICAgICAgICAgIHBvcHVwLnNob3coJ9Ch0L7RhdGA0LDQvdC10L3QvicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuKVxyXG5cclxuXHJcblxyXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGxldCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInAucmVzdWx0XCIpO1xyXG4vLyAgICAgcC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4vLyB9LCAyMDAwKTtcclxuXHJcbiIsImltcG9ydCAnLi9sb2dpbi5zY3NzJ1xyXG5pbXBvcnQgeyQsIHBvc3QsIHZhbGlkYXRlfSBmcm9tIFwiLi4vY29tbW9uXCI7XHJcblxyXG4kKCcucGFzc3dvcmQtY29udHJvbCcpLm9uKCdjbGljaycsIHRvZ2dsZSlcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xyXG4gICAgbGV0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKVxyXG4gICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcclxuICAgIH1cclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd2aWV3JylcclxufVxyXG5cclxuJChcIiNsb2dpblwiKS5vbignY2xpY2snLCBzZW5kRGF0YSlcclxuXHJcbmZ1bmN0aW9uIHNlbmREYXRhKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZW1haWwgPSAkKCdpbnB1dFt0eXBlID0gZW1haWxdJykuZWxbMF0udmFsdWVcclxuICAgICAgICBsZXQgcGFzcyA9ICQoJ2lucHV0W25hbWU9IHBhc3N3b3JkXScpLmVsWzBdLnZhbHVlXHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRW1haWxMb2dpbihlbWFpbCwgcGFzcykpIHNlbmQoZW1haWwsIHBhc3MpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsTG9naW4oZW1haWwsIHBhc3MpIHtcclxuICAgIGxldCAkbWVzc2FnZSA9ICQoXCIubWVzc2FnZVwiKS5lbFswXTtcclxuXHJcbiAgICBpZiAoIXZhbGlkYXRlLmVtYWlsKGVtYWlsKSkge1xyXG4gICAgICAgICRtZXNzYWdlLmlubmVyVGV4dCA9IFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INGE0L7RgNC80LDRgiDQv9C+0YfRgtGLXCJcclxuICAgICAgICAkKCRtZXNzYWdlKS5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKCF2YWxpZGF0ZS5wYXNzd29yZChwYXNzKSkge1xyXG4gICAgICAgICRtZXNzYWdlLmlubmVyVGV4dCA9IFwi0J/QsNGA0L7Qu9GMINC80L7QttC10YIg0YHQvtGB0YLQvtGP0YLRjCDQuNC3IFxcbiBcIiArXHJcbiAgICAgICAgICAgIFwiLSDQkdC+0LvRjNGI0LjQtSDQu9Cw0YLQuNC90YHQutC40LUg0LHQutGD0LLRiyBcXG5cIiArXHJcbiAgICAgICAgICAgIFwiLSDQnNCw0LvQtdC90YzQutC40LUg0LvQsNGC0LjQvdGB0LrQuNC1INCx0YPQutCy0YsgXFxuXCIgK1xyXG4gICAgICAgICAgICBcIi0g0KbQuNGE0YDRiyBcXG5cIiArXHJcbiAgICAgICAgICAgIFwiLSDQlNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LJcIlxyXG5cclxuICAgICAgICAkKCRyZXN1bHQpLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZW5kKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHBvc3QoJy91c2VyL2xvZ2luJywge1xyXG4gICAgICAgIGVtYWlsLCBwYXNzd29yZFxyXG4gICAgfSlcclxuICAgIHJlcyA9IEpTT04ucGFyc2UocmVzKVxyXG4gICAgbGV0IG1zZyA9ICQoJy5tZXNzYWdlJykuZWxbMF1cclxuICAgIGlmIChyZXMubXNnID09PSAnZmFpbCcpIHtcclxuICAgICAgICBtc2cuaW5uZXJIVE1MID0gJ9Cd0LUg0LLQtdGA0L3Ri9C5IGVtYWlsINC40LvQuCDQv9Cw0YDQvtC70YwnXHJcbiAgICAgICAgJChtc2cpLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgJChtc2cpLnJlbW92ZUNsYXNzKCdzdWNjZXNzJylcclxuICAgIH0gZWxzZSBpZiAocmVzLm1zZyA9PT0gJ25vdCBjb25maXJtZWQnKSB7XHJcbiAgICAgICAgbXNnLmlubmVySFRNTCA9IFwi0JfQsNC50LTQuNGC0LUg0L3QsCDQv9C+0YfRgtGDINGH0YLQvtCx0Ysg0L/QvtC00YLQstC10YDQtNC40YLRjCDRgNC10LPQuNGB0YLRgNCw0YbQuNGOXCJcclxuICAgICAgICAkKG1zZykuYWRkQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICAkKG1zZykucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgfSBlbHNlIGlmIChyZXMubXNnID09PSAnb2snKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy91c2VyL2NhYmluZXQnXHJcbiAgICB9IGVsc2UgaWYgKHJlcy5tc2cgPT09ICdub3RfcmVnaXN0ZXJlZCcpIHtcclxuICAgICAgICBtc2cuaW5uZXJIVE1MID0gXCJlbWFpbCDQvdC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSA8YnI+INCU0LvRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC/0LXRgNC10LnQtNC40YLQtSDQsiDRgNCw0LfQtNC10LsgPGEgaHJlZiA9ICcvdXNlci9yZWdpc3Rlcic+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvYT5cIlxyXG4gICAgICAgICQobXNnKS5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgICQobXNnKS5yZW1vdmVDbGFzcygnc3VjY2VzcycpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtwb3N0LCAkLCB2YWxpZGF0ZX0gZnJvbSAnLi4vY29tbW9uJ1xyXG5cclxuJChcIi5mb3Jnb3RcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3VzZXIvcmV0dXJucGFzcydcclxuICAgIH1cclxuKVxyXG4kKFwiLmxvZ2luXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy91c2VyL2xvZ2luJ1xyXG4gICAgfVxyXG4pXHJcblxyXG4kKFwiLnJlZ1wiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGVtYWlsID0gJCgnaW5wdXRbdHlwZSA9IGVtYWlsXScpLmVsWzBdLnZhbHVlXHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gJCgnaW5wdXRbdHlwZSA9IHBhc3N3b3JkXScpLmVsWzBdLnZhbHVlXHJcbiAgICAgICAgbGV0IG1zZyA9ICQoXCIubWVzc2FnZVwiKS5lbFswXTtcclxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICAgICAgICBtc2cuaW5uZXJUZXh0ID0gXCLQl9Cw0L/QvtC70L3QuNGC0LUgZW1haWwg0Lgg0L/QsNGA0L7Qu9GMXCJcclxuICAgICAgICAgICAgJChtc2cpLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5lbWFpbChlbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIG1zZy5pbm5lclRleHQgPSBcItCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDRhNC+0YDQvNCw0YIg0L/QvtGH0YLRi1wiXHJcbiAgICAgICAgICAgICAgICAkKG1zZykuYWRkQ2xhc3MoJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZS5wYXNzd29yZChwYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cuaW5uZXJUZXh0ID0gXCLQn9Cw0YDQvtC70Ywg0LzQvtC20LXRgiDRgdC+0YHRgtC+0Y/RgtGMINC40LcgXFxuIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItINCx0L7Qu9GM0YjQuNGFINC70LDRgtC40L3RgdC60LjRhSDQsdGD0LrQsiBcXG5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLSDQvNCw0LvQtdC90YzQutC40YUg0LvQsNGC0LjQvdGB0LrQuNGFINCx0YPQutCyIFxcblwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItINGG0LjRhNGAIFxcblwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QslwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQobXNnKS5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBzZW5kKGVtYWlsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmQoZW1haWwpIHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIFwiZW1haWxcIjogZW1haWwsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOiAkKFwiaW5wdXRbdHlwZT0gcGFzc3dvcmRdXCIpLmVsWzBdLnZhbHVlLFxyXG4gICAgICAgIFwic3VyTmFtZVwiOiAkKFwiW25hbWU9J3N1ck5hbWUnXVwiKS5lbFswXS52YWx1ZSxcclxuICAgICAgICBcIm5hbWVcIjogJChcIltuYW1lPSduYW1lJ11cIikuZWxbMF0udmFsdWUsXHJcbiAgICAgICAgXCJ0b2tlblwiOiAkKCdtZXRhW25hbWU9XCJ0b2tlblwiXScpLmVsWzBdLmdldEF0dHJpYnV0ZSgnY29udGVudCcpLFxyXG4gICAgfVxyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHBvc3QoJy91c2VyL3JlZ2lzdGVyJywgZGF0YSlcclxuICAgIGxldCBtc2cgPSAkKCcubWVzc2FnZScpXHJcblxyXG4gICAgaWYgKHJlcyA9PT0gJ2NvbmZpcm0nKSB7XHJcbiAgICAgICAgbXNnLnJlbW92ZUNsYXNzKCdlcnJvcicpXHJcbiAgICAgICAgbXNnLmFkZENsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICBtc2cuZWxbMF0uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJy3Qn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9Ljxicj4nICtcclxuICAgICAgICAgICAgJy3QlNC70Y8g0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQt9Cw0LnQtNC40YLQtSDQvdCwINC/0L7Rh9GC0YMsICcgK1xyXG4gICAgICAgICAgICAnPGJvbGQ+ZW1haWw8L2JvbGQ+Ljxicj4gJyArXHJcbiAgICAgICAgICAgICct0J/QtdGA0LXQudC00LjRgtC1INC/0L4g0YHRgdGL0LvQutC1INCyINC/0LjRgdGM0LzQtS4nXHJcbiAgICB9IGVsc2UgaWYgKHJlcyA9PT0gJ21haWwgZXhpc3RzJykge1xyXG4gICAgICAgIG1zZy5lbFswXS5pbm5lckhUTUwgPSAn0K3RgtCwINC/0L7Rh9GC0LAg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdCwJ1xyXG4gICAgICAgIG1zZy5yZW1vdmVDbGFzcygnc3VjY2VzcycpXHJcbiAgICAgICAgbXNnLmFkZENsYXNzKCdlcnJvcicpXHJcbiAgICB9IGVsc2UgaWYgKHJlcyA9PT0gJ2VtcHR5IHBhc3N3b3JkJykge1xyXG4gICAgICAgIG1zZy5lbFswXS5pbm5lckhUTUwgPSAn0JfQv9C+0LvQvdC40YLQtSDQv9Cw0YDQvtC70YwnXHJcbiAgICAgICAgbXNnLnJlbW92ZUNsYXNzKCdzdWNjZXNzJylcclxuICAgICAgICBtc2cuYWRkQ2xhc3MoJ2Vycm9yJylcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1zZy5lbFswXS5pbm5lckhUTUwgPSByZXNcclxuICAgICAgICBtc2cucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIG1zZy5hZGRDbGFzcygnZXJyb3InKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7JCwgcG9zdCwgcG9wdXB9IGZyb20gXCIuLi9jb21tb25cIlxyXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BvcHVwLnNjc3NcIlxyXG5cclxuJCgnLnJldHVybnBhc3MnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGVtYWlsID0gJCgnaW5wdXRbdHlwZT1cImVtYWlsXCJdJykuZWxbMF0udmFsdWVcclxuICAgIGxldCByZXMgPSBhd2FpdCBwb3N0KFxyXG4gICAgICAgICcvdXNlci9yZXR1cm5wYXNzJyxcclxuICAgICAgICB7ZW1haWw6IGVtYWlsfVxyXG4gICAgKVxyXG4gICAgcmVzID0gYXdhaXQgSlNPTi5wYXJzZShyZXMpXHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgcG9wdXAuc2hvdyhyZXMubXNnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvdXNlci9sb2dpbidcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSkiLCJpbXBvcnQgJy4vY29tbW9uLnNjc3MnXHJcblxyXG5cclxuXHJcbmxldCB2YWxpZGF0ZSA9IHtcclxuICAgIHNvcnQ6ICgpID0+IHtcclxuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICAgIGxldCBhciA9IHRoaXMudmFsdWUubWF0Y2goL1xcRCsvKVxyXG4gICAgICAgIGlmIChhcikge1xyXG4gICAgICAgICAgICBlcnJvci5pbm5lclRleHQgPSAn0KLQvtC70YzQutC+INGG0LjRhNGA0YsnXHJcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLm9wYWNpdHkgPSAnMSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3R5bGUub3BhY2l0eSA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLm9wYWNpdHkgPSAnMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbWFpbDogKGVtYWlsKSA9PiB7XHJcbiAgICAgICAgaWYgKCFlbWFpbCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICAgIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IChwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIGlmICghcGFzc3dvcmQpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGxldCByZSA9IC9eW2EtekEtWlxcLTAtOV17NiwyMH0kL1xyXG4gICAgICAgIHJldHVybiByZS50ZXN0KHBhc3N3b3JkKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdXAoKSB7XHJcbi8vICAgIHZhciB0b3AgPSBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCk7XHJcbi8vICAgIGlmICh0b3AgPiAwKSB7XHJcbi8vICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMTAwKTtcclxuLy8gICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KCd1cCgpJywgMjApO1xyXG4vLyAgICB9XHJcbi8vICAgIGVsc2VcclxuLy8gICAgICAgY2xlYXJUaW1lb3V0KHQpO1xyXG4vLyAgICByZXR1cm4gZmFsc2U7XHJcbi8vIH1cclxuXHJcbmxldCBwb3B1cCA9IHtcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAodHh0LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBjbG9zZSA9IHRoaXMuZWwoJ2RpdicsICdwb3B1cF9fY2xvc2UnKVxyXG4gICAgICAgIGNsb3NlLmlubmVyVGV4dCA9ICdYJ1xyXG4gICAgICAgIGxldCBwb3B1cF9faXRlbSA9IHRoaXMuZWwoJ2RpdicsICdwb3B1cF9faXRlbScpXHJcblxyXG4gICAgICAgIHBvcHVwX19pdGVtLmlubmVyVGV4dCA9IHR4dFxyXG4gICAgICAgIHBvcHVwX19pdGVtLmFwcGVuZChjbG9zZSlcclxuICAgICAgICBsZXQgcG9wdXAgPSAkKCcucG9wdXAnKS5lbFswXVxyXG4gICAgICAgIGlmICghcG9wdXApIHtcclxuICAgICAgICAgICAgcG9wdXAgPSB0aGlzLmVsKCdkaXYnLCAncG9wdXAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3B1cC5hcHBlbmQocG9wdXBfX2l0ZW0pXHJcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHBvcHVwKVxyXG4gICAgICAgIGxldCBoaWRlRGVsYXkgPSA1MDAwO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwb3B1cF9faXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9faXRlbScpXHJcbiAgICAgICAgICAgIHBvcHVwX19pdGVtLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWhpZGUnKVxyXG4gICAgICAgIH0sIGhpZGVEZWxheSlcclxuICAgICAgICBsZXQgcmVtb3ZlRGVsYXkgPSBoaWRlRGVsYXkgKyA5NTA7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvcHVwX19pdGVtLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgcmVtb3ZlRGVsYXkpXHJcbiAgICB9LFxyXG5cclxuICAgIGNsb3NlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZScpKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IHRoaXMuY2xvc2VzdCgnLnBvcHVwJykucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZWw6IGZ1bmN0aW9uICh0YWdOYW1lLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICAgICAgcmV0dXJuIGVsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVuaXEgPSAoYXJyYXkpID0+IEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0KGtleSkge1xyXG4gICAgbGV0IHAgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgcCA9IHAubWF0Y2gobmV3IFJlZ0V4cChrZXkgKyAnPShbXiY9XSspJykpO1xyXG4gICAgcmV0dXJuIHAgPyBwWzFdIDogZmFsc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhID0ge30pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZGF0YS50b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInRva2VuXCJdJykuZ2V0QXR0cmlidXRlKCdjb250ZW50JylcclxuICAgICAgICBsZXQgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcclxuICAgICAgICAgICAgcmVxLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAgICAgcmVxLnNlbmQoJ3BhcmFtPScgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcS5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15SnF1ZXJ5KGVsZW1lbnRzKSB7XHJcbiAgICB0aGlzLmVsID0gZWxlbWVudHNcclxuICAgIHRoaXMuZWxUeXBlID0ge30udG9TdHJpbmcuY2FsbChlbGVtZW50cylcclxuICAgIHRoaXMub24gPSBmdW5jdGlvbiAoZXYsIGYpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWwpIHJldHVyblxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbFR5cGUgPT09IFwiW29iamVjdCBIVE1MRGl2RWxlbWVudF1cIikge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGYpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVsVHlwZSA9PT0gXCJbb2JqZWN0IE5vZGVMaXN0XVwiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKHMpID0+IHMuYWRkRXZlbnRMaXN0ZW5lcihldiwgZikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbFswXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dHIgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIGF0dHJWYWwpIHtcclxuICAgICAgICBpZiAoYXR0clZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsWzBdLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxbMF0uZ2V0QXR0cmlidXRlKGF0dHJOYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxbMF0uc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlXHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwubGVuZ3RoKSByZXR1cm4gdGhpcy5lbFswXS5vcHRpb25zXHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsLmxlbmd0aCkgcmV0dXJuIHRoaXMuZWxbMF0uaW5uZXJUZXh0XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwubGVuZ3RoKSByZXR1cm4gdGhpcy5lbFswXS5jaGVja2VkXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRXaXRoU3R5bGUgPSBmdW5jdGlvbiAoYXR0ciwgdmFsKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocy5zdHlsZVthdHRyXSA9PT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsVHlwZSA9PT0gXCJbb2JqZWN0IEhUTUxEaXZFbGVtZW50XVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChbXCJbb2JqZWN0IE5vZGVMaXN0XVwiLCBcIltvYmplY3QgQXJyYXldXCJdLmluY2x1ZGVzKHRoaXMuZWxUeXBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5lbFR5cGUgPT09IFwiW29iamVjdCBIVE1MRGl2RWxlbWVudF1cIikge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoW1wiW29iamVjdCBOb2RlTGlzdF1cIiwgXCJbb2JqZWN0IEFycmF5XVwiXS5pbmNsdWRlcyh0aGlzLmVsVHlwZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICB0aGlzLmFwcGVuZCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHRoaXMuZWxbMF0uYXBwZW5kQ2hpbGQoZWwpXHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBpZiAoW1wiW29iamVjdCBIVE1MRGl2RWxlbWVudF1cIiwgXCJbb2JqZWN0IEhUTUxJbnB1dEVsZW1lbnRdXCJdLmluY2x1ZGVzKHRoaXMuZWxUeXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoW1wiW29iamVjdCBOb2RlTGlzdF1cIiwgXCJbb2JqZWN0IEFycmF5XVwiXS5pbmNsdWRlcyh0aGlzLmVsVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxbMF0ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNzcyA9IGZ1bmN0aW9uIChhdHRyLCB2YWwpIHtcclxuICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbFswXS5zdHlsZVthdHRyXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbFR5cGUgPT09IFwiW29iamVjdCBIVE1MRGl2RWxlbWVudF1cIikge1xyXG4gICAgICAgICAgICB0aGlzLmVsLnN0eWxlW2F0dHJdID0gdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVsVHlwZSA9PT0gXCJbb2JqZWN0IE5vZGVMaXN0XVwiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHMuc3R5bGVbYXR0cl0gPSB2YWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uICQoc2VsZWN0b3IpIHtcclxuICAgIGxldCBlbGVtZW50cyA9ICcnXHJcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IE15SnF1ZXJ5KGVsZW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9vbHRpcChhcmdzKSB7XHJcbiAgICBsZXQgYXIgPSBbLi4uYXJncy5lbHNdXHJcbiAgICBhci5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgZWwub25tb3VzZWVudGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgJCh0aXApLmFkZENsYXNzKCd0aXAnKVxyXG4gICAgICAgICAgICB0aXAuaW5uZXJUZXh0ID0gYXJncy5tZXNzYWdlXHJcbiAgICAgICAgICAgIGVsLmFwcGVuZCh0aXApXHJcbiAgICAgICAgICAgIGxldCByZW1vdmUgPSAoKSA9PiB0aXAucmVtb3ZlKClcclxuICAgICAgICAgICAgdGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJlbW92ZS5iaW5kKHRpcCkpXHJcbiAgICAgICAgfS5iaW5kKGFyZ3MpXHJcblxyXG4gICAgICAgIGVsLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpcCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy50aXAnKVxyXG4gICAgICAgICAgICB0aXAucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXJnc10pXHJcbn1cclxuXHJcbmNsYXNzIHRlc3RfZGVsZXRlX2J1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtKSByZXR1cm5cclxuICAgICAgICB0aGlzLl9lbGVtID0gJChlbGVtKS5lbFswXTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uY2xpY2sgPSB0aGlzLmRlbGV0ZVxyXG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZWVudGVyID0gdGhpcy5zaG93VG9vbGlwXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlbGVhdmUgPSB0aGlzLmhpZGVUb29sdGlwXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlbW92ZSA9IHRoaXMuY2hhbmdlVG9vbHRpcFBvc1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlybSgn0KPQtNCw0LvQuNGC0Ywg0YLQtdGB0YI/JykpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRlc3QuZGVsKClcclxuICAgICAgICAgICAgaWYgKHJlcy5tc2cgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvdGVzdC9lZGl0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb29saXAoZSkge1xyXG4gICAgICAgIGxldCB4ID0gZS5jbGllbnRYXHJcbiAgICAgICAgbGV0IHkgPSBlLmNsaWVudFlcclxuICAgICAgICBsZXQgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoJ3RpcCcpXHJcbiAgICAgICAgdGlwLnN0eWxlLnRvcCA9IHkgKyA3MCArICdweCdcclxuICAgICAgICB0aXAuc3R5bGUubGVmdCA9IHggLSAxNzAgKyAncHgnXHJcbiAgICAgICAgdGlwLmlubmVyVGV4dCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0aXAnKVxyXG4gICAgICAgIHRoaXMudGlwID0gdGlwXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGlwKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUb29sdGlwKCkge1xyXG4gICAgICAgIHRoaXMudGlwLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVG9vbHRpcFBvcyhlKSB7XHJcbiAgICAgICAgdGhpcy50aXAuc3R5bGUudG9wID0gZS5wYWdlWSArIDM1ICsgJ3B4J1xyXG4gICAgICAgIHRoaXMudGlwLnN0eWxlLmxlZnQgPSBlLnBhZ2VYIC0gMTcwICsgJ3B4J1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdyYXAoT2JqLCBmaWxlKSB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YTtcclxuICAgIGRhdGEuYXBwZW5kKCdhamF4JywgdHJ1ZSk7XHJcbiAgICBkYXRhLmFwcGVuZCgncGFyYW0nLCBKU09OLnN0cmluZ2lmeShPYmopKTtcclxuICAgIGZpbGUgPyBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpIDogJyc7XHJcbiAgICBsZXQgcHJvbSA9IGF3YWl0IGZldGNoKGAvYWRtaW5zY2AsIHtcclxuICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9tLnRleHQoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXKHVybCwgT2JqKSB7XHJcbiAgICBsZXQgcHJvbSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIGJvZHk6ICdwYXJhbT0nICsgSlNPTi5zdHJpbmdpZnkoT2JqKSxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgJ0hUVFBfWF9SRVFVRVNURURfV0lUSCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJvbVxyXG59XHJcblxyXG5leHBvcnQge2FkZFRvb2x0aXAsIHBvcHVwLCB0ZXN0X2RlbGV0ZV9idXR0b24sIHBvc3QsIGdldCwgdW5pcSwgdmFsaWRhdGUsICQsIGZldGNoV3JhcCwgZmV0Y2hXfVxyXG4iLCJpbXBvcnQgJy4vYWxlcnQuc2NzcydcclxuaW1wb3J0IHskfSBmcm9tICcuLi8uLi9jb21tb24nXHJcblxyXG5cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwibWVzc2FnZUNsb3NlXCIpIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoZS50YXJnZXQuY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3VzZXIvY2FiaW5ldFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKSIsImltcG9ydCAnLi9jb29raWUuc2NzcydcclxuaW1wb3J0IHskfSBmcm9tIFwiLi4vLi4vY29tbW9uXCI7XHJcblxyXG5cclxuXHJcblxyXG5jaGVja19jb29raWUoJ2NuJylcclxuXHJcbmZ1bmN0aW9uIGNoZWNrX2Nvb2tpZShjb29raWVfbmFtZSkge1xyXG4gICAgaWYgKGdldENvb2tpZShjb29raWVfbmFtZSkpXHJcbiAgICAgICAgJCgnI2Nvb2tpZS1ub3RpY2UnKS5jc3MoJ2JvdHRvbScsJy0xMDAlJyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgJCgnI2Nvb2tpZS1ub3RpY2UnKS5jc3MoJ2JvdHRvbScsIFwiMFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29va2llKGNvb2tpZV9uYW1lKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLm1hdGNoKCcoXnw7KT8nICsgY29va2llX25hbWUgKyAnPShbXjtdKiknKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuJCgnI2NuLWFjY2VwdC1jb29raWUnKS5vbignY2xpY2snLCBjbGlja2VkKVxyXG5cclxuZnVuY3Rpb24gY2xpY2tlZCgpIHtcclxuICAgIHNldENvb2tpZSgpXHJcbiAgICAkKCcjY29va2llLW5vdGljZScpLmNzcygnYm90dG9tJywgJy0xMDAlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvb2tpZSgpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIG1pbnV0ZSA9IDYwICogMTAwMCxcclxuICAgICAgICBkYXkgPSBtaW51dGUgKiA2MCAqIDI0O1xyXG5cclxuICAgIGxldCBkYXlzID0gMTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogZGF5KSlcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY249MTsgZXhwaXJlcz1cIiArIGRhdGUgKyBcInBhdGg9LzsgU2FtZVNpdGU9bGF4XCI7XHJcbn0iLCJpbXBvcnQgJy4vYXV0b2NvbXBsZXRlLnNjc3MnO1xyXG5pbXBvcnQgeyR9IGZyb20gJy4uLy4uL2NvbW1vbidcclxuXHJcblsuLi4kKFwiLnNlYXJjaCBpbnB1dFwiKS5lbF0ubWFwKChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZShpbnB1dClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShpbnB1dCkge1xyXG4gICAgbGV0IHNlYXJjaCA9IGlucHV0LnBhcmVudE5vZGVcclxuICAgIGxldCByZXN1bHQgPSAkKHNlYXJjaCkuZmluZCgnLnNlYXJjaF9fcmVzdWx0JylcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goJy9zZWFyY2g/cT0nICsgaW5wdXQudmFsdWUpXHJcbiAgICBkYXRhID0gYXdhaXQgZGF0YS5qc29uKGRhdGEpXHJcblxyXG4gICAgaWYgKHJlc3VsdC5jaGlsZE5vZGVzLmxlbmd0aCE9PTApIHtcclxuICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gJydcclxuICAgIH1cclxuXHJcbiAgICBkYXRhLm1hcChlID0+IHtcclxuICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICAgICAgYS5ocmVmID0gZS5hbGlhc1xyXG4gICAgICAgIGEuaW5uZXJIVE1MID0gYDxpbWcgc3JjPScvcGljLyR7ZS5wcmV2aWV3X3BpY30nIGFsdD0nJHtlLm5hbWV9Jz5gICsgZS5uYW1lXHJcbiAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKGEpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIGUudGFyZ2V0ICE9PSByZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyR9IGZyb20gJy4uLy4uL2NvbW1vbidcclxuaW1wb3J0ICcuL2hlYWRlci5zY3NzJ1xyXG5cclxubGV0IG1vYmlsZU1lbnUgPSAkKCcuZ2FtYnVyZ2VyJykub24oJ2NsaWNrJywgbW9iaWxlKVxyXG5cclxuZnVuY3Rpb24gbW9iaWxlKGUpIHtcclxuICBsZXQgbW0gPSBlLnRhcmdldC5jbG9zZXN0KCcudXRpbHMnKS5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKVxyXG4gICAgbW0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBwYWRkaW5nOiAzNXB4IDMwcHggMTVweCAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHdpZHRoOiBjbGFtcCg1MHB4LCA2NiUsIDMwMHB4KTtcXG4gIG1hcmdpbjogMyUgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uZm9ybS1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzk0OTQ5NDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3NTc1NzU7XFxufVxcblxcbi5mb3JtX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JtX19idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAxcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWF4LWhlaWdodDogNDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmZvcm1fX2J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYTJhMmEyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtX19idXR0b24tc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiAjOTQ5NDk0O1xcbiAgcGFkZGluZzogMTBweCAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtX19idXR0b24tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNhMmEyYTI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvdHRvbSBsaSB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmJvdHRvbSBsaSBhIHtcXG4gIGNvbG9yOiAjOTQ5NDk0O1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggM3B4O1xcbn1cXG4uYm90dG9tIGxpIGE6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhMmEyO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDYzJSwgNzAlKTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4ubGlzdF9faGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICM1YTVhNWE7XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLmxpc3RfX2l0ZW0ge1xcbiAgY29sb3I6ICM1YTVhNWE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmxpc3RfX2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZm9ybXMuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL0F1dGgvY2FiaW5ldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvdmFyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNERjtBREdFO0VBQ0UsaUJBQUE7QUNESjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRkY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FESUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0hGO0FESUU7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDRko7QURHSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRE47QURFTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0FSOztBRE1BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsY0U1RlE7RUY2RlIsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0VqR1E7RUZrR1Isc0JBQUE7RUFDQSxhQUFBO0FDSEY7QURLRTtFQUNFLHlCRTNHZ0I7QUR3R3BCOztBQWxIQTtFQUNFLGNBQUE7QUFxSEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vdmFyXFxcIjtcXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICBwYWRkaW5nOiAzNXB4IDMwcHggMTVweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIHdpZHRoOiBjbGFtcCg1MHB4LCA2NiUsIDMwMHB4KTtcXHJcXG4gIG1hcmdpbjogMyUgYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTIwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjOTQ5NDk0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1sZWZ0OiAwO1xcclxcbiAgYm9yZGVyLXRvcDogMDtcXHJcXG4gIGJvcmRlci1yaWdodDogMDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogIzc1NzU3NTtcXHJcXG59XFxyXFxuLmZvcm1fX2J1dHRvbnN7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHggMXB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjNzU3NTc1O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2EyYTJhMjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtX19idXR0b24tc2Vjb25kYXJ5IHtcXHJcXG4gIGNvbG9yOiAjOTQ5NDk0O1xcclxcbiAgcGFkZGluZzogMTBweCAzcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2EyYTJhMjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgY29sb3I6ICM5NDk0OTQ7XFxyXFxuICAgICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4IDNweDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EyYTJhMjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpc3R7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDYzJSwgNzAlKTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9faGVhZGVye1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBjb2xvcjogJGNvbG9yLWE7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RfX2l0ZW17XFxyXFxuICBjb2xvcjogJGNvbG9yLWE7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG4gICY6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS1ob3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi9jb21wb25lbnRzL2Zvcm1zXFxcIjtcXHJcXG5zZWN0aW9ue1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxuXFxyXFxufVwiLFwiLy8kY29sb3ItbWFpbjogIzFiYmM5YjEvLztcXHJcXG5cXHJcXG4kY29sb3ItbWFpbi1ncmVlbjogIzFiYmM5YjtcXHJcXG5cXHJcXG4kY29sb3ItbWFpbjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuXFxyXFxuJGNvbG9yLW1haW4taG92ZXI6IHNoYWRlKCM2Q0EzRkUsIDYwJSk7XFxyXFxuLy8kY29sb3ItbWFpbi1ob3ZlcjojMDA5OTc5O1xcclxcblxcclxcbiRkYXJrLWdyZXktaG92ZXI6ICMzNDM2MzU7XFxyXFxuXFxyXFxuJGNvbG9yLXdoaXRlLWhvdmVyOiAjZTdlN2U3O1xcclxcbiRjb2xvci1ob3Zlci1ncmF5OiAjZTVlNWU1O1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNlMzAwMDA7XFxyXFxuXFxyXFxuJGNvbG9yLWE6ICM1YTVhNWE7XFxyXFxuXFxyXFxuJGNvbG9yLXRpdGxlOiAjMmEyYTJhO1xcclxcblxcclxcbiRjb2xvci1ncmF5LW1pbjogIzgwODA4MDtcXHJcXG4kY29sb3ItZ3JheS1taW4taG92ZXI6ICM2RTZFNkU7XFxyXFxuXFxyXFxuJGNvbG9yLWdyYXktbWlkOiAjNTY1OTU4O1xcclxcbiRjb2xvci1ncmF5LW1pZC1ob3ZlcjogIzRENEY0RTtcXHJcXG5cXHJcXG4kY29sb3ItZ3JheS1tYXg6ICMzZDQwM2Y7XFxyXFxuJGNvbG9yLWdyYXktbWF4LWhvdmVyOiAkZGFyay1ncmV5LWhvdmVyO1xcclxcblxcclxcbiRjb2xvci10ZXh0OiAkZGFyay1ncmV5LWhvdmVyO1xcclxcblxcclxcbiRmb250LWxhYmVsOiA0MDAgMTRweCBBcmlhbCwgU2VyaWY7XFxyXFxuJGZvbnQtbGFiZWwtZm9jdXM6IDQwMCAxNnB4IEFyaWFsLCBTZXJpZjtcXHJcXG5cXHJcXG4kZm9udC1sYWJlbC1Sb2JvdG86IDE0cHggXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnQtbGFiZWwtUm9ib3RvLWZvY3VzOiAxNnB4IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yZXN1bHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZmZkNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwX193cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxufVxcbi5wb3B1cF9fd3JhcHBlciAucG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDAlO1xcbn1cXG4ucG9wdXBfX3dyYXBwZXIgLnBvcHVwIC5jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvQXV0aC9lZGl0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUdOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yZXN1bHQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZmZkNTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX193cmFwcGVye1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgdG9wOiAtMTAwJTtcXHJcXG4gIGxlZnQ6IC0xMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIC5wb3B1cHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0xMDAlO1xcclxcbiAgICAuY2xvc2V7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYmctd2hpdGUge1xcbiAgLS1icy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1icy13aGl0ZS1yZ2IpLCB2YXIoLS1icy1iZy1vcGFjaXR5KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnNoYWRvdy1zbSB7XFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5uYXZiYXIgPiAuY29udGFpbmVyLCAubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCwgLm5hdmJhciA+IC5jb250YWluZXItc20sIC5uYXZiYXIgPiAuY29udGFpbmVyLW1kLCAubmF2YmFyID4gLmNvbnRhaW5lci1sZywgLm5hdmJhciA+IC5jb250YWluZXIteGwsIC5uYXZiYXIgPiAuY29udGFpbmVyLXh4bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBpbmhlcml0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbnRhaW5lciwgLmNvbnRhaW5lci1mbHVpZCwgLmNvbnRhaW5lci14eGwsIC5jb250YWluZXIteGwsIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1icy1ndXR0ZXIteCwgMC43NXJlbSk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWJzLWd1dHRlci14LCAwLjc1cmVtKTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuLm5hdmJhci1icmFuZCB7XFxuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbmJ1dHRvbjpub3QoOmRpc2FibGVkKSwgW3R5cGU9YnV0dG9uXTpub3QoOmRpc2FibGVkKSwgW3R5cGU9cmVzZXRdOm5vdCg6ZGlzYWJsZWQpLCBbdHlwZT1zdWJtaXRdOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyIHtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b24sIFt0eXBlPWJ1dHRvbl0sIFt0eXBlPXJlc2V0XSwgW3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuYnV0dG9uLCBzZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbmlucHV0LCBidXR0b24sIHNlbGVjdCwgb3B0Z3JvdXAsIHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MCwgMCwgMCwgMC41NSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcXFwiKTtcXG59XFxuXFxuLm5hdmJhci10b2dnbGVyLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uY29sbGFwc2U6bm90KC5zaG93KSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2YmFyLWNvbGxhcHNlIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWUtYXV0byB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLm5hdmJhci1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1zLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLmRyb3B1cCwgLmRyb3BlbmQsIC5kcm9wZG93biwgLmRyb3BzdGFydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbn1cXG5cXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLmRyb3Bkb3duLWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgdGV4dGFyZWE6Zm9jdXMsIC5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiwgc2VsZWN0LCBvcHRncm91cCwgdGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLnB5LTQge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG5zZWN0aW9uLCBtYWluIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucm93IHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXG4gIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWJzLWd1dHRlci15KSk7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTAuNSAqIHZhcigtLWJzLWd1dHRlci14KSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygtMC41ICogdmFyKC0tYnMtZ3V0dGVyLXgpKTtcXG59XFxuXFxuLnJvdyA+ICoge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAwLjUpO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tYnMtZ3V0dGVyLXkpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi13aWR0aDogMDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpIGNhbGMoMC4yNXJlbSAtIDFweCkgMCAwO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICMwZDZlZmQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuW3JlcXVpcmVkXTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcInNzXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTAwJTtcXG59XFxuXFxuLnBhc3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGFzc3dvcmQtY29udHJvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogNnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoL3BpYy9zcnZjL3ZpZXcuc3ZnKSAwIDAgbm8tcmVwZWF0O1xcbn1cXG5cXG4ucGFzc3dvcmQtY29udHJvbC52aWV3IHtcXG4gIGJhY2tncm91bmQ6IHVybCgvcGljL3NydmMvbm8tdmlldy5zdmcpIDAgMCBuby1yZXBlYXQ7XFxufVxcblxcbnNlY3Rpb24sXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5tZXNzYWdlIGEge1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBzaGFkZSgjNkNBM0ZFLCA2MCUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjMTQwMDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICNjMTQwMDA7XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gIGNvbG9yOiAjMWJiYzliO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5yZXR1cm5fcGFzcyAuc3VibWl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ2luX3JldHVybl9wYXNzIHtcXG4gIGNvbG9yOiAjMWJiYzliO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9BdXRoL2F1dGhCb290c3RyYXAuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL0F1dGgvbG9naW4uc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3Zhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsNEVBQUE7QUNFRjs7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OztBRFRBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FDWUY7O0FBM1BBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBOFBGOztBQTNQQTtFQUNFLGtCQUFBO0FBOFBGOztBQTVQQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUErUEY7O0FBN1BBO0VBQ0Usb0RBQUE7QUFnUUY7O0FBNVBBOztFQUVFLGNBQUE7QUErUEY7O0FBNVBBO0VBQ0UsaUJBQUE7QUErUEY7QUE5UEU7RUFDRSxVQUFBO0VBQ0EsMEJDbENlO0VEbUNmLGdCQUFBO0FBZ1FKOztBQTdQQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWdRRjs7QUE3UEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQWdRRjs7QUE3UEE7RUFDRSxlQUFBO0FBZ1FGOztBQTlQQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBaVFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmJnLXdoaXRle1xcclxcbiAgLS1icy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1icy13aGl0ZS1yZ2IpLCB2YXIoLS1icy1iZy1vcGFjaXR5KSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWRvdy1zbSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiKDAgMCAwIC8gOCUpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5uYXZiYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciA+IC5jb250YWluZXIsIC5uYXZiYXIgPiAuY29udGFpbmVyLWZsdWlkLCAubmF2YmFyID4gLmNvbnRhaW5lci1zbSwgLm5hdmJhciA+IC5jb250YWluZXItbWQsIC5uYXZiYXIgPiAuY29udGFpbmVyLWxnLCAubmF2YmFyID4gLmNvbnRhaW5lci14bCwgLm5hdmJhciA+IC5jb250YWluZXIteHhsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IGluaGVyaXQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLCAuY29udGFpbmVyLWZsdWlkLCAuY29udGFpbmVyLXh4bCwgLmNvbnRhaW5lci14bCwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWJzLWd1dHRlci14LCAwLjc1cmVtKTtcXHJcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tYnMtZ3V0dGVyLXgsIDAuNzVyZW0pO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbn1cXHJcXG4ubmF2YmFyLWJyYW5kIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC4zMTI1cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLCBbdHlwZT1idXR0b25dOm5vdCg6ZGlzYWJsZWQpLCBbdHlwZT1yZXNldF06bm90KDpkaXNhYmxlZCksIFt0eXBlPXN1Ym1pdF06bm90KDpkaXNhYmxlZCkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4vL0BtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXtcXHJcXG4vLy5uYXZiYXItdG9nZ2xlciB7XFxyXFxuLy8gIHRyYW5zaXRpb246IG5vbmU7XFxyXFxuLy99XFxyXFxuXFxyXFxuLm5hdmJhci10b2dnbGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sIFt0eXBlPWJ1dHRvbl0sIFt0eXBlPXJlc2V0XSwgW3R5cGU9c3VibWl0XSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuYnV0dG9uLCBzZWxlY3Qge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcbmlucHV0LCBidXR0b24sIHNlbGVjdCwgb3B0Z3JvdXAsIHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhJTI4MCwgMCwgMCwgMC41NSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcXFwiKTtcXHJcXG59XFxyXFxuLm5hdmJhci10b2dnbGVyLWljb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEuNWVtO1xcclxcbiAgaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sbGFwc2U6bm90KC5zaG93KSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4ubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubWUtYXV0byB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zLWF1dG8ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3B1cCwgLmRyb3BlbmQsIC5kcm9wZG93biwgLmRyb3BzdGFydCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcclxcbn1cXHJcXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xcclxcbiAgcGFkZGluZy1yaWdodDogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgcG9zaXRpb246IHN0YXRpYztcXHJcXG59XFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtaW4td2lkdGg6IDEwcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogIzIxMjUyOTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiAjMjEyNTI5O1xcclxcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbmlucHV0LCB0ZXh0YXJlYSwgdGV4dGFyZWE6Zm9jdXMsIC5idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQsIGJ1dHRvbiwgc2VsZWN0LCBvcHRncm91cCwgdGV4dGFyZWEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTQge1xcclxcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLCBtYWluIHtcXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ucm93IHtcXHJcXG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXHJcXG4gIC0tYnMtZ3V0dGVyLXk6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWJzLWd1dHRlci15KSk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTAuNSAqIHZhcigtLWJzLWd1dHRlci14KSk7XFxyXFxuICBtYXJnaW4tbGVmdDogY2FsYygtMC41ICogdmFyKC0tYnMtZ3V0dGVyLXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyA+ICoge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcXHJcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAwLjUpO1xcclxcbiAgbWFyZ2luLXRvcDogdmFyKC0tYnMtZ3V0dGVyLXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi13aWR0aDogMDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpIGNhbGMoMC4yNXJlbSAtIDFweCkgMCAwO1xcclxcbn1cXHJcXG4uY2FyZC1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYm9keSB7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbmEge1xcclxcbiAgY29sb3I6ICMwZDZlZmQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi92YXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vYXV0aEJvb3RzdHJhcFxcXCI7XFxyXFxuXFxyXFxuXFxyXFxuW3JlcXVpcmVkXTpiZWZvcmV7XFxyXFxuICBjb250ZW50OiAnc3MnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBjb2xvcjpyZWQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLTEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wYXNzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnBhc3N3b3JkLWNvbnRyb2wge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDZweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC9waWMvc3J2Yy92aWV3LnN2ZykgMCAwIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnBhc3N3b3JkLWNvbnRyb2wudmlldyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoL3BpYy9zcnZjL25vLXZpZXcuc3ZnKSAwIDAgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5zZWN0aW9uLFxcclxcbm1haW4ge1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdle1xcclxcbiAgZm9udC1zaXplOiAuOXJlbTtcXHJcXG4gIGF7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItbWFpbi1ob3ZlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmVycm9ye1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2MxNDAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogI2MxNDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Y2Nlc3N7XFxyXFxuICBjb2xvcjogIzFiYmM5YjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuX3Bhc3MgLnN1Ym1pdHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxvZ2luX3JldHVybl9wYXNze1xcclxcbiAgY29sb3I6ICMxYmJjOWI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XCIsXCIvLyRjb2xvci1tYWluOiAjMWJiYzliMS8vO1xcclxcblxcclxcbiRjb2xvci1tYWluLWdyZWVuOiAjMWJiYzliO1xcclxcblxcclxcbiRjb2xvci1tYWluOiB2YXIoLS1jb2xvci1tYWluKTtcXHJcXG5cXHJcXG4kY29sb3ItbWFpbi1ob3Zlcjogc2hhZGUoIzZDQTNGRSwgNjAlKTtcXHJcXG4vLyRjb2xvci1tYWluLWhvdmVyOiMwMDk5Nzk7XFxyXFxuXFxyXFxuJGRhcmstZ3JleS1ob3ZlcjogIzM0MzYzNTtcXHJcXG5cXHJcXG4kY29sb3Itd2hpdGUtaG92ZXI6ICNlN2U3ZTc7XFxyXFxuJGNvbG9yLWhvdmVyLWdyYXk6ICNlNWU1ZTU7XFxyXFxuXFxyXFxuJGNvbG9yLXJlZDogI2UzMDAwMDtcXHJcXG5cXHJcXG4kY29sb3ItYTogIzVhNWE1YTtcXHJcXG5cXHJcXG4kY29sb3ItdGl0bGU6ICMyYTJhMmE7XFxyXFxuXFxyXFxuJGNvbG9yLWdyYXktbWluOiAjODA4MDgwO1xcclxcbiRjb2xvci1ncmF5LW1pbi1ob3ZlcjogIzZFNkU2RTtcXHJcXG5cXHJcXG4kY29sb3ItZ3JheS1taWQ6ICM1NjU5NTg7XFxyXFxuJGNvbG9yLWdyYXktbWlkLWhvdmVyOiAjNEQ0RjRFO1xcclxcblxcclxcbiRjb2xvci1ncmF5LW1heDogIzNkNDAzZjtcXHJcXG4kY29sb3ItZ3JheS1tYXgtaG92ZXI6ICRkYXJrLWdyZXktaG92ZXI7XFxyXFxuXFxyXFxuJGNvbG9yLXRleHQ6ICRkYXJrLWdyZXktaG92ZXI7XFxyXFxuXFxyXFxuJGZvbnQtbGFiZWw6IDQwMCAxNHB4IEFyaWFsLCBTZXJpZjtcXHJcXG4kZm9udC1sYWJlbC1mb2N1czogNDAwIDE2cHggQXJpYWwsIFNlcmlmO1xcclxcblxcclxcbiRmb250LWxhYmVsLVJvYm90bzogMTRweCBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4kZm9udC1sYWJlbC1Sb2JvdG8tZm9jdXM6IDE2cHggXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogNTBweDtcXG4gIGJvdHRvbTogMTAyJTtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjM2U0MTQwO1xcbiAgei1pbmRleDogMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tbW9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGlwIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWJhc2lzOiA1MHB4O1xcclxcbiAgYm90dG9tOiAxMDIlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IGhzbCgxNjBkZWcsIDIlLCAyNSUpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIub3ZlcmxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZXNzYWdlQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1pbi13aWR0aDogMjYxcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tbGVmdDogLTMwJTtcXG4gIHRvcDogMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjRlZTtcXG4gIHotaW5kZXg6IDEwMDAxO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tZXNzYWdlVGl0bGVCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWVzc2FnZVRpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzgwODY4ZTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5tZXNzYWdlQ2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjb2xvcjogIzQ5NDk0OTtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5tZXNzYWdlQ2xvc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzRjYjAwMDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5tc2cge1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLm1zZyAubXNnVGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzZlNmU2ZTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHBhZGRpbmc6IDEwcHggNDFweDtcXG59XFxuLm1zZyAubXNnVGV4dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIi1cXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTJweDtcXG4gIHRvcDogN3B4O1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tc2cgYSB7XFxuICBjb2xvcjogIzFkNWJmZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAzcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ047QUFHRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIub3ZlcmxheSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlQm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1pbi13aWR0aDogMjYxcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMwJTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjRlZTtcXHJcXG4gIHotaW5kZXg6IDEwMDAxO1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlVGl0bGVCYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZVRpdGxlIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBjb2xvcjogIzgwODY4ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlQ2xvc2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHRyYW5zaXRpb246IC41cztcXHJcXG4gIGNvbG9yOiAjNDk0OTQ5O1xcclxcbiAgYmFja2dyb3VuZDogI2NjYztcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGNiMDAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubXNnIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuXFxyXFxuICAubXNnVGV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6ICM2ZTZlNmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCA0MXB4O1xcclxcbiAgICAmOmJlZm9yZXtcXHJcXG4gICAgICBjb250ZW50OiAnLSc7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGxlZnQ6IDEycHg7XFxyXFxuICAgICAgdG9wOiA3cHg7XFxyXFxuICAgICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBjb2xvcjogIzFkNWJmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29va2llLW5vdGljZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMTVweDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0xMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jY24tYWNjZXB0LWNvb2tpZSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSBpbnNldCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Nvb2tpZS9jb29raWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVFQUFBO0VBQ0EsaUZBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb29raWUtbm90aWNle1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTVweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IC0xMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY24tYWNjZXB0LWNvb2tpZSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYwMDAwO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSBpbnNldCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBwYWRkaW5nOiAycHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uLy4uL3BpYy9oZWFkZXItYmlnLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImZvb3RlciB7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSByZXBlYXQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWluLWhlaWdodDogMTEwcHg7XFxuICBjb2xvcjogIzliOWI5YjtcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbmZvb3RlciBwIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmZvb3Rlcl9sZWdhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmZvb3Rlcl9tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2E3YTdhO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuLmZvb3Rlcl9tZW51IC5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5mb290ZXJfbWVudSAuY29sdW1uIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgfVxcbn1cXG4uZm9vdGVyX21lbnUgLmNvbHVtbiBhIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvbWl4aW5fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBEQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBRko7QUNJRTtFREpBO0lBSUksZUFBQTtFQUFKO0FBQ0Y7QUFFSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vbWl4aW5fbWVkaWFcXFwiO1xcclxcbmZvb3RlciB7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi8uLi9waWMvaGVhZGVyLWJpZy5wbmdcXFwiKSByZXBlYXQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWluLWhlaWdodDogMTEwcHg7XFxyXFxuICBjb2xvcjogIzliOWI5YjtcXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbGVnYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdhN2E3YTtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuXFxyXFxuICAuY29sdW1uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgIEBpbmNsdWRlIF81MDB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsXCIvLyBVc2luZ1xcclxcbi8vLmRpdiB7XFxyXFxuLy8gICBAaW5jbHVkZSBfMTIwMCB7XFxyXFxuLy8gICAgICAgQGNvbnRlbnQ7XFxyXFxuLy8gICB9XFxyXFxuLy99XFxyXFxuXFxyXFxuQG1peGluIF8xMjAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF8xMDAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF85MDAge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfODAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gXzYwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF81MDAge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfNDAwe1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBfMzAwe1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIHBhZGRpbmc6IDM1cHggMzBweCAxNXB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgd2lkdGg6IGNsYW1wKDUwcHgsIDY2JSwgMzAwcHgpO1xcbiAgbWFyZ2luOiAzJSBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5mb3JtLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjOTQ5NDk0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzc1NzU3NTtcXG59XFxuXFxuLmZvcm1fX2J1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm1fX2J1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDFweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzc1NzU3NTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA0NXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uZm9ybV9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNhMmEyYTI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvcm1fX2J1dHRvbi1zZWNvbmRhcnkge1xcbiAgY29sb3I6ICM5NDk0OTQ7XFxuICBwYWRkaW5nOiAxMHB4IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvcm1fX2J1dHRvbi1zZWNvbmRhcnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2EyYTJhMjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm90dG9tIGxpIHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYm90dG9tIGxpIGEge1xcbiAgY29sb3I6ICM5NDk0OTQ7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAzcHg7XFxufVxcbi5ib3R0b20gbGkgYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmEyYTI7XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgNjMlLCA3MCUpO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5saXN0X19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogIzVhNWE1YTtcXG4gIG1hcmdpbjogMTVweCAwO1xcbn1cXG5cXG4ubGlzdF9faXRlbSB7XFxuICBjb2xvcjogIzVhNWE1YTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ubGlzdF9faXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9mb3Jtcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvdmFyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQURKOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUZGO0FBSUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhGO0FBSUU7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRko7QUFHSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUFSOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsY0M1RlE7RUQ2RlIsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0NqR1E7RURrR1Isc0JBQUE7RUFDQSxhQUFBO0FBSEY7QUFLRTtFQUNFLHlCQzNHZ0I7QUR3R3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uL3ZhclxcXCI7XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgcGFkZGluZzogMzVweCAzMHB4IDE1cHggMzBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICB3aWR0aDogY2xhbXAoNTBweCwgNjYlLCAzMDBweCk7XFxyXFxuICBtYXJnaW46IDMlIGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEyMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzk0OTQ5NDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItbGVmdDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDA7XFxyXFxuICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICM3NTc1NzU7XFxyXFxufVxcclxcbi5mb3JtX19idXR0b25ze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX2J1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4IDFweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogIzc1NzU3NTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXgtaGVpZ2h0OiA0NXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNhMmEyYTI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9fYnV0dG9uLXNlY29uZGFyeSB7XFxyXFxuICBjb2xvcjogIzk0OTQ5NDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggM3B4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNhMmEyYTI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGkge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIGNvbG9yOiAjOTQ5NDk0O1xcclxcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgICAgcGFkZGluZzogMTBweCAzcHg7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMmEyYTI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5saXN0e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA2MyUsIDcwJSk7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RfX2hlYWRlcntcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgY29sb3I6ICRjb2xvci1hO1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0X19pdGVte1xcclxcbiAgY29sb3I6ICRjb2xvci1hO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuICAmOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtaG92ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiLy8kY29sb3ItbWFpbjogIzFiYmM5YjEvLztcXHJcXG5cXHJcXG4kY29sb3ItbWFpbi1ncmVlbjogIzFiYmM5YjtcXHJcXG5cXHJcXG4kY29sb3ItbWFpbjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuXFxyXFxuJGNvbG9yLW1haW4taG92ZXI6IHNoYWRlKCM2Q0EzRkUsIDYwJSk7XFxyXFxuLy8kY29sb3ItbWFpbi1ob3ZlcjojMDA5OTc5O1xcclxcblxcclxcbiRkYXJrLWdyZXktaG92ZXI6ICMzNDM2MzU7XFxyXFxuXFxyXFxuJGNvbG9yLXdoaXRlLWhvdmVyOiAjZTdlN2U3O1xcclxcbiRjb2xvci1ob3Zlci1ncmF5OiAjZTVlNWU1O1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNlMzAwMDA7XFxyXFxuXFxyXFxuJGNvbG9yLWE6ICM1YTVhNWE7XFxyXFxuXFxyXFxuJGNvbG9yLXRpdGxlOiAjMmEyYTJhO1xcclxcblxcclxcbiRjb2xvci1ncmF5LW1pbjogIzgwODA4MDtcXHJcXG4kY29sb3ItZ3JheS1taW4taG92ZXI6ICM2RTZFNkU7XFxyXFxuXFxyXFxuJGNvbG9yLWdyYXktbWlkOiAjNTY1OTU4O1xcclxcbiRjb2xvci1ncmF5LW1pZC1ob3ZlcjogIzRENEY0RTtcXHJcXG5cXHJcXG4kY29sb3ItZ3JheS1tYXg6ICMzZDQwM2Y7XFxyXFxuJGNvbG9yLWdyYXktbWF4LWhvdmVyOiAkZGFyay1ncmV5LWhvdmVyO1xcclxcblxcclxcbiRjb2xvci10ZXh0OiAkZGFyay1ncmV5LWhvdmVyO1xcclxcblxcclxcbiRmb250LWxhYmVsOiA0MDAgMTRweCBBcmlhbCwgU2VyaWY7XFxyXFxuJGZvbnQtbGFiZWwtZm9jdXM6IDQwMCAxNnB4IEFyaWFsLCBTZXJpZjtcXHJcXG5cXHJcXG4kZm9udC1sYWJlbC1Sb2JvdG86IDE0cHggXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnQtbGFiZWwtUm9ib3RvLWZvY3VzOiAxNnB4IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbWFyZ2luOiAycHggMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWFyY2gtdG9wIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNlYXJjaC10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zZWFyY2gtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaCBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMCAwIDAgMTJweDtcXG4gIGJvcmRlcjogIzRmNGY0ZiAxcHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zZWFyY2hfX3Jlc3VsdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDE4cHggMHB4IHJnYmEoNTQsIDE2MSwgMTM5LCAwLjgpO1xcbn1cXG5cXG4uc2VhcmNoX19yZXN1bHQgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6ICM0YTRhNGE7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uc2VhcmNoX19yZXN1bHQgYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmVmYztcXG59XFxuXFxuLnNlYXJjaF9fZmluZCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlYXJjaF9fZmluZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2VhcmNoX19maW5kOmJlZm9yZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxlZnQ6IDlweDtcXG4gIHRvcDogNXB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgd2lkdGg6IDE0cHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2VhcmNoX19maW5kOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3R0b206IDVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICByaWdodDogOHB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICB3aWR0aDogMnB4O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2F1dG9jb21wbGV0ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvbWl4aW5fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGO0FDaUJFO0VEaEJGO0lBR0ksYUFBQTtFQUFGO0FBQ0Y7O0FDWUU7RURURjtJQUVJLGFBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUVFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0U7RUFDRSxzQkFBQTtBQURKOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3ZhclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vLi4vbWl4aW5fbWVkaWFcXFwiO1xcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgbWFyZ2luOiAycHggMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9wIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBAaW5jbHVkZSBfODAwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1oZWFkZXIge1xcclxcbiAgQGluY2x1ZGUgXzgwMCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDAgMCAwIDEycHg7XFxyXFxuICBib3JkZXI6IGhzbCgwLCAwJSwgMzElKSAxcHggc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWFyY2hfX3Jlc3VsdCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcmlnaHQ6IDFweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDE4cHggMHB4IGhzbGEoMTY4LCA1MCUsIDQyJSwgMC44KVxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX19yZXN1bHQgYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6ICM0YTRhNGE7XFxyXFxuICBwYWRkaW5nOiAzcHggMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgJjpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE2OCwgNzUlLCA5OCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX19maW5kIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxcHg7XFxyXFxuICByaWdodDogMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF9fZmluZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsZWZ0OiA5cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIGhlaWdodDogMTRweDtcXHJcXG4gIHdpZHRoOiAxNHB4O1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF9fZmluZDphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgcmlnaHQ6IDhweDtcXHJcXG4gIGhlaWdodDogOXB4O1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblwiLFwiLy8gVXNpbmdcXHJcXG4vLy5kaXYge1xcclxcbi8vICAgQGluY2x1ZGUgXzEyMDAge1xcclxcbi8vICAgICAgIEBjb250ZW50O1xcclxcbi8vICAgfVxcclxcbi8vfVxcclxcblxcclxcbkBtaXhpbiBfMTIwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfMTAwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfOTAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gXzgwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF82MDAge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfNTAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gXzQwMHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gXzMwMHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgMCAwIDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcbi5sb2dvIGEge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5sb2dvX3NxdWFyZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5sb2dvX3NxdWFyZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmxvZ29fc3F1YXJlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmhlYWRlciAubG9nb192aXRleCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmhlYWRlciAubG9nb192aXRleCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gIH1cXG59XFxuXFxuLmxvZ29fX2Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMjBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjMzQzMTMzO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5sb2dvX19kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmxvZ29fX2Rlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIG1heC13aWR0aDogMTA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5sb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5sb2NhdGlvbiBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLThweDtcXG4gIHRvcDogMzAlO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBzdHJva2U6IHZhcigtLWNvbG9yLW1haW4pO1xcbn1cXG5cXG4vKioqKiog0JLRgdC/0LvRi9Cy0LDRjtGJ0LjQtSDRgtC10LvQtdGE0L7QvdGLICovXFxuLnBob25lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250OiBib2xkIDE3cHgvMjFweCBcXFwiUHJveGltYSBOb3ZhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgMjVweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmbGV4OiAxO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5waG9uZSB7XFxuICAgIGZvbnQ6IGJvbGQgMTJweC8xN3B4IFxcXCJQcm94aW1hIE5vdmFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgfVxcbn1cXG5cXG4ucGhvbmUgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yMHB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBjb2xvcjogIzFiYmM5YjtcXG4gIHdpZHRoOiAxNHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5waG9uZSBzdmcge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHdpZHRoOiAxMXB4O1xcbiAgICBib3R0b206IDJweDtcXG4gICAgbGVmdDogLTE4cHg7XFxuICB9XFxufVxcblxcbi5waG9uZSA+IGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICM0ZTRlNGU7XFxufVxcbi5waG9uZSA+IGE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMjVweDtcXG4gIHRvcDogMzAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLnBob25lID4gYTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICB9XFxufVxcblxcbi5waG9uZTpob3ZlciAucGhvbmVfX3BvcHVwLWlubmVyIHtcXG4gIHBhZGRpbmc6IDI1cHggMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ucGhvbmVfX3BvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xNSU7XFxuICBib3R0b206IC0xMHB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB6LWluZGV4OiA2O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5waG9uZV9fcG9wdXAge1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogaW5pdGlhbDtcXG4gIH1cXG59XFxuXFxuLnBob25lX19wb3B1cC1pbm5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCAjOGZhMzlmO1xcbiAgZm9udDogMTVweC8xOXB4IFxcXCJQcm94aW1hIE5vdmFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxODE2MTc7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5waG9uZV9fcG9wdXAtaW5uZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxOTJweDtcXG4gIHRvcDogLTEwcHg7XFxufVxcblxcbi5waG9uZV9fcG9wdXAtaGVhZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xcbn1cXG5cXG4ucGhvbmVfX3BvcHVwIHAge1xcbiAgbWFyZ2luOiAwIDAgMTFweDtcXG59XFxuXFxuLnBob25lX19wb3B1cC1waG9uZXMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGhvbmVfX3BvcHVwLXBob25lcyBhIHtcXG4gIGZvbnQ6IGJvbGQgMTdweC8yMXB4IFxcXCJQcm94aW1hIE5vdmFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzNDMxMzM7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbn1cXG5cXG4uaGVhZGVyLWNhdGFsb2ctbWVudSB7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMC45MjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZWFkZXItY2F0YWxvZy1tZW51X193cmFwIHtcXG4gIG1heC13aWR0aDogMTMxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uaGVhZGVyLWNhdGFsb2ctbWVudV9fd3JhcCAubW9iaWxlLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgcmlnaHQ6IC0xNTAlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYmFja2dyb3VuZDogIzc4YWFmZTtcXG4gIHRyYW5zaXRpb246IHJpZ2h0IDUwMG1zIGVhc2Utb3V0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5oZWFkZXItY2F0YWxvZy1tZW51X193cmFwIC5tb2JpbGUtbWVudSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4uaGVhZGVyLWNhdGFsb2ctbWVudV9fd3JhcCAubW9iaWxlLW1lbnUuc2hvdyB7XFxuICByaWdodDogMDtcXG59XFxuLmhlYWRlci1jYXRhbG9nLW1lbnVfX3dyYXAgLm1vYmlsZS1tZW51IC5tb2JpbGUtbWVudV9fd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBtYXJnaW46IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLmhlYWRlci1jYXRhbG9nLW1lbnVfX3dyYXAgLm1vYmlsZS1tZW51IC5tb2JpbGUtbWVudV9fd3JhcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLmhlYWRlci1jYXRhbG9nLW1lbnVfX3dyYXAgLm1vYmlsZS1tZW51IC5tb2JpbGUtbWVudV9fd3JhcCAubW9iaWxlLW1lbnVfX2l0ZW0ge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlci1jYXRhbG9nLW1lbnVfX3dyYXAgLm1vYmlsZS1tZW51IC5tb2JpbGUtbWVudV9fd3JhcCAubW9iaWxlLW1lbnVfX2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmZjtcXG59XFxuXFxuLnV0aWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udXRpbHMgc3ZnIHtcXG4gIHN0cm9rZTogd2hpdGU7XFxuICBzdHJva2Utd2lkdGg6IDNweDtcXG4gIHdpZHRoOiAxN3B4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4udXRpbHMgLnNlYXJjaCxcXG4udXRpbHMgLmdhbWJ1cmdlcixcXG4udXRpbHMgLmNhcnQge1xcbiAgcG9zaXRpb246IGluaXRpYWw7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGluaXRpYWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnV0aWxzIC5zZWFyY2g6aG92ZXIsXFxuLnV0aWxzIC5nYW1idXJnZXI6aG92ZXIsXFxuLnV0aWxzIC5jYXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZmY7XFxufVxcbi5oLWNhdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAxMTcsIDI1NSwgMCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250OiA2MDAgMTdweC8xN3B4IGludHJvLCBcXFwiUHJveGltYSBOb3ZhXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuaC1jYXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uaC1jYXQ6Zmlyc3QtY2hpbGQgdWwge1xcbiAgbGVmdDogMDtcXG59XFxuLmgtY2F0OmZpcnN0LWNoaWxkIHVsOmJlZm9yZSB7XFxuICByaWdodDogODAlO1xcbn1cXG4uaC1jYXQ6bGFzdC1jaGlsZCB1bCB7XFxuICByaWdodDogMDtcXG59XFxuLmgtY2F0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDExNywgMjU1LCAwLjUpO1xcbn1cXG4uaC1jYXQ6aG92ZXIgdWwge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZzogMzBweCAyNXB4IDE1cHggMjVweDtcXG4gIG1heC1oZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4uaC1jYXQ6aG92ZXIgdWwgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXItYm90dG9tOiAjZjBmMGYwIDFweCBzb2xpZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5oLWNhdDpob3ZlciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYWJhYmFiMzM7XFxufVxcbi5oLWNhdDpob3ZlciB1bCBsaSBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XFxufVxcbi5oLWNhdCB1bCB7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmgtY2F0IHVsIGxpIGEge1xcbiAgZm9udDogNjAwIDE0cHgvMTdweCBcXFwiUHJveGltYSBOb3ZhXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmgtY2F0IHVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC00cHg7XFxuICByaWdodDogNTAlO1xcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udXNlci1tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMyYjMwM2E7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmbGV4OiAwIDEgYXV0bztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAudXNlci1tZW51IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIH1cXG59XFxuLnVzZXItbWVudTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG4udXNlci1tZW51IGltZyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgd2lkdGg6IDQ0cHg7XFxufVxcbi51c2VyLW1lbnUgLnVzZXItbWVudV9fbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA1MDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICByaWdodDogLTFweDtcXG4gIHdpZHRoOiAyODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi51c2VyLW1lbnUgLnVzZXItbWVudV9fbWVudSBhIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY29sb3I6ICM1YTVhNWE7XFxufVxcbi51c2VyLW1lbnUgLnVzZXItbWVudV9fbWVudSBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcbi51c2VyLW1lbnU6aG92ZXIgPiAudXNlci1tZW51X19tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ndWVzdC1tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMyYjMwM2E7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLmd1ZXN0LW1lbnUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgfVxcbn1cXG4uZ3Vlc3QtbWVudSBzdmcge1xcbiAgd2lkdGg6IDE3cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uZ3Vlc3QtbWVudSAuZ3Vlc3QtbWVudV9fbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRvcDogMTAzJTtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgaGVpZ2h0OiAtd2Via2l0LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LW1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE2cHggMHB4ICMxZDdjNjg0MDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5ndWVzdC1tZW51IC5ndWVzdC1tZW51X19tZW51IGEge1xcbiAgY29sb3I6ICM1YTVhNWE7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuLmd1ZXN0LW1lbnUgLmd1ZXN0LW1lbnVfX21lbnUgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG4uZ3Vlc3QtbWVudSAudXNlci1tZW51X19pY29uIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZzogMCA1cHggM3B4O1xcbn1cXG4uZ3Vlc3QtbWVudTpob3ZlciA+IC5ndWVzdC1tZW51X19tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogMTMxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyX19pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMzEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmhlYWRlcl9faW5mbyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28uc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL21peGluX21lZGlhLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2hlYWRlci9sb2NhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9oZWFkZXIvcGhvbmUuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1jYXRhbG9nLW1lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1tZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2hlYWRlci91c2VyX21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3Zhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURBRjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QURBSjs7QUNLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURGRjtBRVNFO0VEVkY7SUFNSSxhQUFBO0VEREY7QUFDRjtBRVVFO0VEaEJGO0lBU0ksYUFBQTtFRENGO0FBQ0Y7O0FDS0U7RUFDRSxZQUFBO0FERko7QUVDRTtFREFBO0lBR0ksWUFBQTtFREFKO0FBQ0Y7O0FDSUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEREY7QUVsQkU7RURjRjtJQVFJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFREFGO0FBQ0Y7QUVQRTtFREpGO0lBY0ksYUFBQTtFRENGO0FBQ0Y7O0FHckRBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBSHdERjtBRXRDRTtFQ3ZCRjtJQU9JLGFBQUE7RUgwREY7QUFDRjtBR3hERTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FIMERKOztBSTFFQSw2QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBSjZFRjtBRW5ERTtFRWxDRjtJQVdJLCtDQUFBO0VKOEVGO0FBQ0Y7O0FJM0VBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FKOEVGO0FFMURFO0VFekJGO0lBT0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFSmdGRjtBQUNGOztBSTdFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBSmdGRjtBSTlFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUpnRko7QUV2RkU7RUVEQTtJQVVJLGtCQUFBO0lBQ0EsUUFBQTtFSmtGSjtBQUNGOztBSTlFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FKaUZKOztBSTlFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUppRko7QUVsSEU7RUUyQkE7SUFRSSxRQUFBO0lBQ0EsYUFBQTtFSm1GSjtBQUNGOztBSWhGRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBSm1GSjs7QUloRkU7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBSm1GSjs7QUloRkU7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBSm1GSjs7QUloRkU7RUFDRSxnQkFBQTtBSm1GSjs7QUloRkU7RUFDRSxTQUFBO0FKbUZKOztBSWhGRTtFQUNFLCtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FKbUZKOztBS2hNQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBTG1NRjs7QUtoTUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FMbU1GO0FNbk5FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGdDQUFBO0FOb05KO0FFekxFO0VJbENBO0lBVUksV0FBQTtFTnFOSjtBQUNGO0FNbk5JO0VBQ0UsUUFBQTtBTnFOTjtBTWxOSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FOb05OO0FFdk1FO0VJakJFO0lBT0ksa0JBQUE7RU5xTk47QUFDRjtBTW5OTTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QU5xTlI7QU1uTlE7RUFDRSx5QkFBQTtBTnFOVjs7QUsvTkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUxrT0Y7QUtoT0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUxrT0o7QUsvTkU7OztFQUdFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FMaU9KO0FLL05JOzs7RUFDRSx5QkFBQTtBTG1PTjtBS3hOQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBTDBORjtBRTFRRTtFR3FDRjtJQWVJLGFBQUE7RUwwTkY7QUFDRjtBS3hORTtFQUNFLE9BQUE7QUwwTko7QUt4Tkk7RUFDRSxVQUFBO0FMME5OO0FLdE5FO0VBQ0UsUUFBQTtBTHdOSjtBS3BORTtFQUNFLHlDQUFBO0FMc05KO0FLcE5JO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUxzTk47QUtwTk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FMc05SO0FLcE5RO0VBQ0UscUJBQUE7QUxzTlY7QUtuTlE7RUFDRSxtQkFBQTtBTHFOVjtBSzlNRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FMZ05KO0FLNU1NO0VBQ0UsOENBQUE7QUw4TVI7QUsxTUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBTDRNTjs7QU8vVUE7RUFmRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBUGtXRjtBRXZVRTtFS25CRjtJQU5JLGVBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RVBvV0Y7QUFDRjtBTzdWRTtFQUNFLHlCQUFBO0FQK1ZKO0FPNVZFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FQOFZKO0FPdlZFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBUHlWSjtBT3RWSTtFQUNFLGlCQUFBO0VBQ0EsY0N2Q0k7QVIrWFY7QU90Vk07RUFDRSx5QkFBQTtBUHdWUjtBT25WRTtFQUNFLGFBQUE7QVBxVko7O0FPalZBO0VBaEVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBMkRBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QVAyVkY7QUU5WEU7RUs4QkY7SUF2REksZUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtFUDJaRjtBQUNGO0FPaFdFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FQa1dKO0FPL1ZFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsVUFBQTtBUGdXSjtBTzlWSTtFQUNFLGNDOUVJO0VEK0VKLGlCQUFBO0FQZ1dOO0FPOVZNO0VBQ0UseUJBQUE7QVBnV1I7QU8zVkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FQNlZKO0FPMVZFO0VBQ0UsYUFBQTtBUDRWSjs7QUFwY0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF1Y0Y7O0FBbGNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBcWNGO0FFN2JFO0VGZkY7SUFVSSxVQUFBO0VBc2NGO0FBQ0Y7O0FBbmNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQXNjRjtBRTNjRTtFRkRGO0lBUUksVUFBQTtFQXdjRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcImxvZ29cXFwiO1xcclxcbkBpbXBvcnQgXFxcImxvY2F0aW9uXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJwaG9uZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyLWNhdGFsb2ctbWVudVxcXCI7XFxyXFxuQGltcG9ydCBcXFwidXNlcl9tZW51XFxcIjtcXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXgtd2lkdGg6IDEzMTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIC8vd2lkdGg6IDEwMCU7XFxyXFxuICBAaW5jbHVkZSBfNjAwIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9faW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogMTMxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgQGluY2x1ZGUgXzYwMCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vLi4vbWl4aW5fbWVkaWFcXFwiO1xcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDAgMCAwIDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29fc3F1YXJlIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBfODAwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIF82MDAge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHJcXG4gIC5sb2dvX3ZpdGV4IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBAaW5jbHVkZSBfNjAwIHtcXHJcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDAgMjBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGNvbG9yOiAjMzQzMTMzO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcblxcclxcbiAgQGluY2x1ZGUgXzgwMCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDkwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBfNDAwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XCIsXCIvLyBVc2luZ1xcclxcbi8vLmRpdiB7XFxyXFxuLy8gICBAaW5jbHVkZSBfMTIwMCB7XFxyXFxuLy8gICAgICAgQGNvbnRlbnQ7XFxyXFxuLy8gICB9XFxyXFxuLy99XFxyXFxuXFxyXFxuQG1peGluIF8xMjAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF8xMDAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF85MDAge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfODAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gXzYwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF81MDAge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfNDAwe1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBfMzAwe1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi4vLi4vbWl4aW5fbWVkaWFcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uLy4uL3ZhclxcXCI7XFxyXFxuXFxyXFxuLmxvY2F0aW9ue1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDVweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBAaW5jbHVkZSBfODAwe1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3Zne1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC04cHg7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLW1haW4pO1xcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uLy4uL3ZhclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vLi4vbWl4aW5fbWVkaWFcXFwiO1xcclxcblxcclxcbi8qKioqKiDQktGB0L/Qu9GL0LLQsNGO0YnQuNC1INGC0LXQu9C10YTQvtC90YsgKi9cXHJcXG4ucGhvbmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQ6IGJvbGQgMTdweC8yMXB4ICdQcm94aW1hIE5vdmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogMCAyNXB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBfNTAwIHtcXHJcXG4gICAgZm9udDogYm9sZCAxMnB4LzE3cHggJ1Byb3hpbWEgTm92YScsIHNhbnMtc2VyaWY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5waG9uZSBzdmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTIwcHg7XFxyXFxuICBib3R0b206IDNweDtcXHJcXG4gIGNvbG9yOiAjMWJiYzliO1xcclxcbiAgd2lkdGg6IDE0cHg7XFxyXFxuICBAaW5jbHVkZSBfNDAwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICB3aWR0aDogMTFweDtcXHJcXG4gICAgYm90dG9tOiAycHg7XFxyXFxuICAgIGxlZnQ6IC0xOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUgPiBhIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGNvbG9yOiAjNGU0ZTRlO1xcclxcblxcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC0yNXB4O1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XFxyXFxuICAgIEBpbmNsdWRlIF81MDAge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4gIC5waG9uZTpob3ZlciAucGhvbmVfX3BvcHVwLWlubmVyIHtcXHJcXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBob25lX19wb3B1cCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTE1JTtcXHJcXG4gICAgYm90dG9tOiAtMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogNjtcXHJcXG4gICAgQGluY2x1ZGUgXzYwMHtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICBsZWZ0OiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGhvbmVfX3BvcHVwLWlubmVyIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IGhzbCgxNjgsIDEwJSwgNjAlKTtcXHJcXG4gICAgZm9udDogMTVweC8xOXB4ICdQcm94aW1hIE5vdmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogIzE4MTYxNztcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waG9uZV9fcG9wdXAtaW5uZXI6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2ZmZjtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxOTJweDtcXHJcXG4gICAgdG9wOiAtMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waG9uZV9fcG9wdXAtaGVhZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGhvbmVfX3BvcHVwIHAge1xcclxcbiAgICBtYXJnaW46IDAgMCAxMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBob25lX19wb3B1cC1waG9uZXMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGhvbmVfX3BvcHVwLXBob25lcyBhIHtcXHJcXG4gICAgZm9udDogYm9sZCAxN3B4LzIxcHggJ1Byb3hpbWEgTm92YScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiAjMzQzMTMzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblwiLFwiQGltcG9ydCBcXFwiLi4vLi4vdmFyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9hY2NvcmRpb24vcGFydGlhbHMvX2xheW91dC5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi8uLi9taXhpbl9tZWRpYVxcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9tb2JpbGUtbWVudVxcXCI7XFxyXFxuXFxyXFxuLmhlYWRlci1jYXRhbG9nLW1lbnUge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG9wYWNpdHk6IC45MjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY2F0YWxvZy1tZW51X193cmFwIHtcXHJcXG4gIG1heC13aWR0aDogMTMxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbW9iaWxlLW1lbnUoKTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnV0aWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXHJcXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XFxyXFxuICAgIHdpZHRoOiAxN3B4O1xcclxcbiAgICBoZWlnaHQ6IDE3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gsXFxyXFxuICAuZ2FtYnVyZ2VyLFxcclxcbiAgLmNhcnQge1xcclxcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IGluaXRpYWw7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmZjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUge1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaC1jYXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjI3NWZmLCAwKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udDogNjAwIDE3cHgvMTdweCBpbnRybywgJ1Byb3hpbWEgTm92YScsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuXFxyXFxuICBAaW5jbHVkZSBfODAwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6Zmlyc3QtY2hpbGQgdWwge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcblxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgcmlnaHQ6IDgwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJjpsYXN0LWNoaWxkIHVsIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjI3NWZmLCAuNSk7XFxyXFxuXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgcGFkZGluZzogMzBweCAyNXB4IDE1cHggMjVweDtcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICB0b3A6IDEwMCU7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcclxcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAgIGN1cnNvcjogdGV4dDtcXHJcXG5cXHJcXG4gICAgICBsaSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206ICNmMGYwZjAgMXB4IHNvbGlkO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNhYmFiYWIzMztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGE6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlOztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIHVsIHtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250OiA2MDAgMTRweC8xN3B4ICdQcm94aW1hIE5vdmEnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAtNHB4O1xcclxcbiAgICAgIHJpZ2h0OiA1MCU7XFxyXFxuICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL21peGluX21lZGlhXFxcIjtcXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlLW1lbnUge1xcclxcblxcclxcbiAgLm1vYmlsZS1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMCU7XFxyXFxuICAgIHJpZ2h0OiAtMTUwJTtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAvL21pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNzhhYWZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiByaWdodCA1MDBtcyBlYXNlLW91dDtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgXzUwMCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5zaG93IHtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9iaWxlLW1lbnVfX3dyYXAge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBfNTAwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLm1vYmlsZS1tZW51X19pdGVtIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCA1MHB4IDEwcHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuLi8uLi92YXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4uLy4uL21peGluX21lZGlhXFxcIjtcXHJcXG5cXHJcXG5AbWl4aW4gdXNlci1tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICMyYjMwM2E7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gIEBpbmNsdWRlIF81MDAge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udXNlci1tZW51IHtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIHVzZXItbWVudTtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y1ZjVmNTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyY6YWZ0ZXIge1xcclxcbiAgLy8gIGNvbnRlbnQ6ICfimLAnO1xcclxcbiAgLy99XFxyXFxuXFxyXFxuICAudXNlci1tZW51X19tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHotaW5kZXg6IDUwMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMCU7XFxyXFxuICAgIHJpZ2h0OiAtMXB4O1xcclxcbiAgICB3aWR0aDogMjgwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItYTtcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmhvdmVyID4gLnVzZXItbWVudV9fbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ndWVzdC1tZW51IHtcXHJcXG4gIEBpbmNsdWRlIHVzZXItbWVudTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICB3aWR0aDogMTdweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ndWVzdC1tZW51X19tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdG9wOiAxMDMlO1xcclxcbiAgICByaWdodDogLTFweDtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDExcHggMTZweCAwcHggIzFkN2M2ODQwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLWE7XFxyXFxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItbWVudV9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4IDNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIgPiAuZ3Vlc3QtbWVudV9fbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLFwiLy8kY29sb3ItbWFpbjogIzFiYmM5YjEvLztcXHJcXG5cXHJcXG4kY29sb3ItbWFpbi1ncmVlbjogIzFiYmM5YjtcXHJcXG5cXHJcXG4kY29sb3ItbWFpbjogdmFyKC0tY29sb3ItbWFpbik7XFxyXFxuXFxyXFxuJGNvbG9yLW1haW4taG92ZXI6IHNoYWRlKCM2Q0EzRkUsIDYwJSk7XFxyXFxuLy8kY29sb3ItbWFpbi1ob3ZlcjojMDA5OTc5O1xcclxcblxcclxcbiRkYXJrLWdyZXktaG92ZXI6ICMzNDM2MzU7XFxyXFxuXFxyXFxuJGNvbG9yLXdoaXRlLWhvdmVyOiAjZTdlN2U3O1xcclxcbiRjb2xvci1ob3Zlci1ncmF5OiAjZTVlNWU1O1xcclxcblxcclxcbiRjb2xvci1yZWQ6ICNlMzAwMDA7XFxyXFxuXFxyXFxuJGNvbG9yLWE6ICM1YTVhNWE7XFxyXFxuXFxyXFxuJGNvbG9yLXRpdGxlOiAjMmEyYTJhO1xcclxcblxcclxcbiRjb2xvci1ncmF5LW1pbjogIzgwODA4MDtcXHJcXG4kY29sb3ItZ3JheS1taW4taG92ZXI6ICM2RTZFNkU7XFxyXFxuXFxyXFxuJGNvbG9yLWdyYXktbWlkOiAjNTY1OTU4O1xcclxcbiRjb2xvci1ncmF5LW1pZC1ob3ZlcjogIzRENEY0RTtcXHJcXG5cXHJcXG4kY29sb3ItZ3JheS1tYXg6ICMzZDQwM2Y7XFxyXFxuJGNvbG9yLWdyYXktbWF4LWhvdmVyOiAkZGFyay1ncmV5LWhvdmVyO1xcclxcblxcclxcbiRjb2xvci10ZXh0OiAkZGFyay1ncmV5LWhvdmVyO1xcclxcblxcclxcbiRmb250LWxhYmVsOiA0MDAgMTRweCBBcmlhbCwgU2VyaWY7XFxyXFxuJGZvbnQtbGFiZWwtZm9jdXM6IDQwMCAxNnB4IEFyaWFsLCBTZXJpZjtcXHJcXG5cXHJcXG4kZm9udC1sYWJlbC1Sb2JvdG86IDE0cHggXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnQtbGFiZWwtUm9ib3RvLWZvY3VzOiAxNnB4IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnBvcHVwX19pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4pO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wb3B1cC1oaWRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMDRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4pO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMnB4IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDk5JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgOTklIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnBvcHVwX19jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFweDtcXG4gIGxlZnQ6IDFweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3Zhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQ1JXO0VEU1gsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkN6Qlc7RUQwQlgsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRTtJQUFHLHFCQUFBO0VBQUg7RUFDQTtJQUFJLHFCQUFBO0lBQXNCLFlBQUE7RUFHMUI7RUFGQTtJQUFJLHFCQUFBO0lBQXFCLFlBQUE7RUFNekI7RUFMQTtJQUFLLFVBQUE7RUFRTDtBQUNGOztBQWJBO0VBQ0U7SUFBRyxxQkFBQTtFQUFIO0VBQ0E7SUFBSSxxQkFBQTtJQUFzQixZQUFBO0VBRzFCO0VBRkE7SUFBSSxxQkFBQTtJQUFxQixZQUFBO0VBTXpCO0VBTEE7SUFBSyxVQUFBO0VBUUw7QUFDRjtBQU5BO0VBQ0U7SUFBSSxxQkFBQTtJQUFzQixZQUFBO0VBVTFCO0VBVEE7SUFBSyxxQkFBQTtFQVlMO0VBWEE7SUFBTSxtQkFBQTtJQUFvQixVQUFBO0VBZTFCO0FBQ0Y7QUFiQTtFQUNFO0lBQUksNkJBQUE7SUFBOEIsWUFBQTtFQWlCbEM7RUFoQkE7SUFBSyw2QkFBQTtFQW1CTDtFQWxCQTtJQUFNLDJCQUFBO0lBQTRCLFVBQUE7RUFzQmxDO0FBQ0Y7QUFwQkE7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFzQkhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vdmFyXFxcIjtcXHJcXG4ucG9wdXB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLnBvcHVwX19pdGVte1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDIwNHB4O1xcclxcbiAgYmFja2dyb3VuZDogJGNvbG9yLW1haW47XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiAycHggMDtcXHJcXG5cXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhpZGV7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMjA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbWFpbjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcblxcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcclxcbiAgMCV7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO31cXHJcXG4gIDgwJXt0cmFuc2Zvcm06IHNjYWxlKDAuOCk7b3BhY2l0eTouNTt9XFxyXFxuICA5OSV7dHJhbnNmb3JtOiBzY2FsZSguNyk7b3BhY2l0eTogMC4xO31cXHJcXG4gIDEwMCV7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNyk7b3BhY2l0eTogMC41O31cXHJcXG4gIDgwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO31cXHJcXG4gIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO29wYWNpdHk6IDAuNTt9XFxyXFxuICA4MCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO31cXHJcXG4gIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jbG9zZXtcXHJcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgdG9wOiAxcHg7XFxyXFxuICAgbGVmdDogMXB4O1xcclxcbiAgIHdpZHRoOiAxMHB4O1xcclxcbiAgIGhlaWdodDogMTBweDtcXHJcXG4gICBjb2xvcjogd2hpdGU7XFxyXFxuICAgYmFja2dyb3VuZDogcmVkO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICBwYWRkaW5nOiAxcHg7XFxyXFxuIH1cIixcIi8vJGNvbG9yLW1haW46ICMxYmJjOWIxLy87XFxyXFxuXFxyXFxuJGNvbG9yLW1haW4tZ3JlZW46ICMxYmJjOWI7XFxyXFxuXFxyXFxuJGNvbG9yLW1haW46IHZhcigtLWNvbG9yLW1haW4pO1xcclxcblxcclxcbiRjb2xvci1tYWluLWhvdmVyOiBzaGFkZSgjNkNBM0ZFLCA2MCUpO1xcclxcbi8vJGNvbG9yLW1haW4taG92ZXI6IzAwOTk3OTtcXHJcXG5cXHJcXG4kZGFyay1ncmV5LWhvdmVyOiAjMzQzNjM1O1xcclxcblxcclxcbiRjb2xvci13aGl0ZS1ob3ZlcjogI2U3ZTdlNztcXHJcXG4kY29sb3ItaG92ZXItZ3JheTogI2U1ZTVlNTtcXHJcXG5cXHJcXG4kY29sb3ItcmVkOiAjZTMwMDAwO1xcclxcblxcclxcbiRjb2xvci1hOiAjNWE1YTVhO1xcclxcblxcclxcbiRjb2xvci10aXRsZTogIzJhMmEyYTtcXHJcXG5cXHJcXG4kY29sb3ItZ3JheS1taW46ICM4MDgwODA7XFxyXFxuJGNvbG9yLWdyYXktbWluLWhvdmVyOiAjNkU2RTZFO1xcclxcblxcclxcbiRjb2xvci1ncmF5LW1pZDogIzU2NTk1ODtcXHJcXG4kY29sb3ItZ3JheS1taWQtaG92ZXI6ICM0RDRGNEU7XFxyXFxuXFxyXFxuJGNvbG9yLWdyYXktbWF4OiAjM2Q0MDNmO1xcclxcbiRjb2xvci1ncmF5LW1heC1ob3ZlcjogJGRhcmstZ3JleS1ob3ZlcjtcXHJcXG5cXHJcXG4kY29sb3ItdGV4dDogJGRhcmstZ3JleS1ob3ZlcjtcXHJcXG5cXHJcXG4kZm9udC1sYWJlbDogNDAwIDE0cHggQXJpYWwsIFNlcmlmO1xcclxcbiRmb250LWxhYmVsLWZvY3VzOiA0MDAgMTZweCBBcmlhbCwgU2VyaWY7XFxyXFxuXFxyXFxuJGZvbnQtbGFiZWwtUm9ib3RvOiAxNHB4IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiRmb250LWxhYmVsLVJvYm90by1mb2N1czogMTZweCBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvTWVkaXVtXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC8q0YHQutGA0YvRgtGMINC00LXRgNCz0LDQvdGM0LUg0YHRgtGA0LDQvdC40YbRiyDQsiDQv9C+0Y/QstC70LXQvdC40Lgg0L/QvtC70L7RgdGLINC/0YDQvtC60YDRg9GC0LrQuCovXFxuICBwYWRkaW5nOiAwIGNhbGMoMHB4IC0gKDEwMHZ3IC0gMTAwJSkpIDAgMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbnAge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxudGV4dGFyZWE6Zm9jdXMsXFxuLmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZmxleDEge1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvbm9ybWFsaXplLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9taXhpbl9tZWRpYS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQVVoQjtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUNBQUE7RUFDQSx3REFBQTtFQUNBLHlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFURjtBQ29CRTtFRHRCRjtJQWNJLFVBQUE7RUFSRjtBQUNGOztBQWFBO0VBQ0UsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLHFCQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBVkY7O0FBYUE7Ozs7RUFJRSxhQUFBO0FBVkY7O0FBYUE7RUFDRSx3QkFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtBQVZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIm1peGluX21lZGlhXFxcIjtcXHJcXG5cXHJcXG4vL0Bmb250LWZhY2Uge1xcclxcbi8vICBmb250LWZhbWlseTogXFxcIlJvYm90b01lZGl1bVxcXCI7XFxyXFxuLy8gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4vLyAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4vLyAgc3JjOiB1cmwoXFxcIi4vZm9udC9Sb2JvdG9NZWRpdW0vUm9ib3RvTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXHJcXG4vLyAgdXJsKFxcXCIvcmVzb3VyY2VzL2pzL2ZvbnQvUm9ib3RvTWVkaXVtL1JvYm90b01lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbi8vfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvTWVkaXVtXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC8q0YHQutGA0YvRgtGMINC00LXRgNCz0LDQvdGM0LUg0YHRgtGA0LDQvdC40YbRiyDQsiDQv9C+0Y/QstC70LXQvdC40Lgg0L/QvtC70L7RgdGLINC/0YDQvtC60YDRg9GC0LrQuCovXFxyXFxuICBwYWRkaW5nOiAwIGNhbGMoMHB4IC0gKDEwMHZ3IC0gMTAwJSkpIDAgMDtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBfNTAwIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxucCB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSxcXHJcXG50ZXh0YXJlYTpmb2N1cyxcXHJcXG4uYnV0dG9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mbGV4MSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiLy8gVXNpbmdcXHJcXG4vLy5kaXYge1xcclxcbi8vICAgQGluY2x1ZGUgXzEyMDAge1xcclxcbi8vICAgICAgIEBjb250ZW50O1xcclxcbi8vICAgfVxcclxcbi8vfVxcclxcblxcclxcbkBtaXhpbiBfMTIwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfMTAwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfOTAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gXzgwMCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIF82MDAge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBfNTAwIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gXzQwMHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gXzMwMHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCl7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBcIi9pbWFnZXMvaGVhZGVyLWJpZy5wbmc/NmEyZDA0Y2I5NzAzNDRlYmNhMGI0MzFmNGZiNzdmNjNcIjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzNdIS4vY2FiaW5ldC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVszXSEuL2VkaXQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbM10hLi9sb2dpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVszXSEuL2NvbW1vbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVszXSEuL2FsZXJ0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzNdIS4vY29va2llLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzNdIS4vZm9vdGVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzNdIS4vZm9ybXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbM10hLi9hdXRvY29tcGxldGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbM10hLi9oZWFkZXIuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbM10hLi9wb3B1cC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0ub25lT2ZbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS5vbmVPZlsxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLm9uZU9mWzFdLnVzZVszXSEuL25vcm1hbGl6ZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvaGVhZGVyL2F1dG9jb21wbGV0ZSdcclxuXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9hbGVydC9hbGVydCdcclxuXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9mb3Jtcy5zY3NzJ1xyXG5cclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2Nvb2tpZS9jb29raWUnXHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3MnXHJcblxyXG5pbXBvcnQgJy4vY2hhbmdlcGFzc3dvcmQnXHJcbmltcG9ydCAnLi9sb2dpbidcclxuaW1wb3J0ICcuL3JlZ2lzdGVyJ1xyXG5pbXBvcnQgJy4vY2FiaW5ldCdcclxuaW1wb3J0ICcuL3JldHVybl9wYXNzJ1xyXG5pbXBvcnQgJy4vZWRpdCdcclxuXHJcbmltcG9ydCAnLi4vbm9ybWFsaXplLnNjc3MnXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwib24iLCJzYXZlIiwiZSIsInRoIiwiZm9ybSIsImZvcm1EYXRhIiwicG9zdCIsImVsIiwidmFsdWUiLCJyZXMiLCJtc2ciLCJpbm5lclRleHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidmFsaWRhdGUiLCJwb3B1cCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIm5hbWUiLCJzdXJOYW1lIiwibWlkZGxlTmFtZSIsImJpcnRoRGF0ZSIsInBob25lIiwic2hvdyIsInRvZ2dsZSIsImV2ZW50IiwiaW5wdXQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInNlbmREYXRhIiwiZW1haWwiLCJwYXNzIiwidmFsaWRhdGVFbWFpbExvZ2luIiwic2VuZCIsIiRtZXNzYWdlIiwicGFzc3dvcmQiLCIkcmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiaW5uZXJIVE1MIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic29ydCIsImVycm9yIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXIiLCJtYXRjaCIsInN0eWxlIiwib3BhY2l0eSIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwidHh0IiwiY2FsbGJhY2siLCJjbG9zZSIsInBvcHVwX19pdGVtIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsImhpZGVEZWxheSIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhZGQiLCJyZW1vdmVEZWxheSIsImNvbnRhaW5zIiwiY2xvc2VzdCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwidW5pcSIsImFycmF5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZ2V0Iiwia2V5IiwicCIsInNlYXJjaCIsIlJlZ0V4cCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9rZW4iLCJyZXEiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwiRm9ybURhdGEiLCJzdHJpbmdpZnkiLCJvbmVycm9yIiwiRXJyb3IiLCJvbmxvYWQiLCJyZXNwb25zZSIsIk15SnF1ZXJ5IiwiZWxlbWVudHMiLCJlbFR5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJldiIsImYiLCJmb3JFYWNoIiwicyIsImF0dHIiLCJhdHRyTmFtZSIsImF0dHJWYWwiLCJzZWxlY3RlZEluZGV4VmFsdWUiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbnMiLCJvcHRpb25zIiwiY291bnQiLCJ0ZXh0IiwiY2hlY2tlZCIsImdldFdpdGhTdHlsZSIsInZhbCIsImFyciIsInB1c2giLCJpbmNsdWRlcyIsImhhc0NsYXNzIiwiYXBwZW5kQ2hpbGQiLCJmaW5kIiwic2VsZWN0b3IiLCJjc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkVG9vbHRpcCIsImFyZ3MiLCJlbHMiLCJtYXAiLCJvbm1vdXNlZW50ZXIiLCJ0aXAiLCJtZXNzYWdlIiwiYmluZCIsIm9ubW91c2VsZWF2ZSIsInRlc3RfZGVsZXRlX2J1dHRvbiIsImVsZW0iLCJfZWxlbSIsIm9uY2xpY2siLCJzaG93VG9vbGlwIiwiaGlkZVRvb2x0aXAiLCJvbm1vdXNlbW92ZSIsImNoYW5nZVRvb2x0aXBQb3MiLCJjb25maXJtIiwiZGVsIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInRvcCIsImxlZnQiLCJwYWdlWSIsInBhZ2VYIiwiZmV0Y2hXcmFwIiwiT2JqIiwiZmlsZSIsImZldGNoIiwibWV0aG9kIiwicHJvbSIsImZldGNoVyIsImhlYWRlcnMiLCJjaGVja19jb29raWUiLCJjb29raWVfbmFtZSIsImdldENvb2tpZSIsImNvb2tpZSIsImNsaWNrZWQiLCJzZXRDb29raWUiLCJkYXRlIiwiRGF0ZSIsIm1pbnV0ZSIsImRheSIsImRheXMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImF1dG9jb21wbGV0ZSIsInJlc3VsdCIsImpzb24iLCJjaGlsZE5vZGVzIiwiYSIsImFsaWFzIiwicHJldmlld19waWMiLCJtb2JpbGVNZW51IiwibW9iaWxlIiwibW0iXSwic291cmNlUm9vdCI6IiJ9