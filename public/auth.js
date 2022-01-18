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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08) !important;\n}\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 0.75rem);\n  padding-left: var(--bs-gutter-x, 0.75rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-brand {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.55);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\nbutton:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: box-shadow 0.15s ease-in-out;\n}\n\nbutton, [type=button], [type=reset], [type=submit] {\n  -webkit-appearance: button;\n}\n\nbutton, select {\n  text-transform: none;\n}\n\ninput, button, select, optgroup, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.dropup, .dropend, .dropdown, .dropstart {\n  position: relative;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n\n.dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.d-none {\n  display: none !important;\n}\n\ninput, textarea, textarea:focus, .button:focus {\n  outline: none;\n}\n\ninput, button, select, optgroup, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\nsection, main {\n  flex: 1 0 auto;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-header {\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem 1rem;\n}\n\na {\n  text-decoration: none;\n}\n\na {\n  color: #0d6efd;\n  text-decoration: underline;\n}\n\n[required]:before {\n  content: \"ss\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  color: red;\n  position: absolute;\n  right: -100%;\n}\n\n.pass {\n  position: relative;\n}\n\n.password-control {\n  position: absolute;\n  top: 20px;\n  right: 6px;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: url(/pic/srvc/view.svg) 0 0 no-repeat;\n}\n\n.password-control.view {\n  background: url(/pic/srvc/no-view.svg) 0 0 no-repeat;\n}\n\nsection,\nmain {\n  flex: 1 0 auto;\n}\n\n.message {\n  font-size: 0.9rem;\n}\n.message a {\n  padding: 0;\n  color: shade(#6CA3FE, 60%);\n  font-weight: 600;\n}\n\n.error {\n  border: 3px solid #c14000;\n  border-radius: 3px;\n  padding: 10px;\n  color: #c14000;\n}\n\n.success {\n  color: #1bbc9b;\n  font-weight: 600;\n  background-color: #ffffff;\n  border: 1px solid;\n  padding: 15px;\n}\n\n.return_pass .submit {\n  cursor: pointer;\n}\n\n.login_return_pass {\n  color: #1bbc9b;\n  font-weight: 600;\n  background-color: #ffffff;\n  border: 1px solid;\n  padding: 15px;\n}", "",{"version":3,"sources":["webpack://./resources/js/Auth/authBootstrap.scss","webpack://./resources/js/Auth/login.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADCA;EACE,kBAAA;EACA,4EAAA;ACEF;;ADCA;EACE,6DAAA;ACEF;;ADAA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,sBAAA;ACGF;;ADAA;EACE,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,8BAAA;ACGF;;ADAA;EACE,WAAA;EACA,0CAAA;EACA,yCAAA;EACA,kBAAA;EACA,iBAAA;ACGF;;ADAA;EACE,yBAAA;ACGF;;ADDA;EACE,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;ACIF;;ADFA;EACE,0BAAA;EACA,gCAAA;ACKF;;ADHA;EACE,eAAA;ACMF;;ADCA;EACE,wBAAA;EACA,kBAAA;EACA,cAAA;EACA,6BAAA;EACA,6BAAA;EACA,sBAAA;EACA,wCAAA;ACEF;;ADCA;EACE,0BAAA;ACEF;;ADAA;EACE,oBAAA;ACGF;;ADDA;EACE,SAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;ACIF;;ADDA;EACE,6PAAA;ACIF;;ADFA;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;ACKF;;ADFA;EACE,aAAA;ACKF;;ADHA;EACE,gBAAA;EACA,YAAA;EACA,mBAAA;ACMF;;ADJA;EACE,6BAAA;ACOF;;ADJA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ACOF;;ADJA;EACE,4BAAA;ACOF;;ADJA;EACE,kBAAA;ACOF;;ADJA;EACE,0BAAA;ACOF;;ADLA;EACE,gBAAA;EACA,eAAA;ACQF;;ADLA;EACE,gBAAA;ACQF;;ADNA;EACE,kBAAA;EACA,aAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,4BAAA;EACA,qCAAA;EACA,sBAAA;ACSF;;ADNA;EACE,cAAA;EACA,WAAA;EACA,qBAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;ACSF;;ADNA;EACE,wBAAA;ACSF;;ADLA;EACE,aAAA;ACQF;;ADNA;EACE,SAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;ACSF;;ADNA;EACE,8BAAA;EACA,iCAAA;ACSF;;ADNA;EACE,cAAA;ACSF;;ADNA;EACE,kCAAA;ACSF;;ADPA;EACE,qBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,yCAAA;EACA,6CAAA;EACA,4CAAA;ACUF;;ADPA;EACE,cAAA;EACA,WAAA;EACA,eAAA;EACA,6CAAA;EACA,4CAAA;EACA,8BAAA;ACUF;;ADPA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,2BAAA;EACA,sCAAA;EACA,sBAAA;ACUF;;ADPA;EACE,0DAAA;ACUF;;ADRA;EACE,oBAAA;EACA,gBAAA;EACA,qCAAA;EACA,6CAAA;ACWF;;ADRA;EACE,cAAA;EACA,kBAAA;ACWF;;ADRA;EACE,qBAAA;ACWF;;ADTA;EACE,cAAA;EACA,0BAAA;ACYF;;AA3PA;EACE,aAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,YAAA;AA8PF;;AA3PA;EACE,kBAAA;AA8PF;;AA5PA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,iDAAA;AA+PF;;AA7PA;EACE,oDAAA;AAgQF;;AA5PA;;EAEE,cAAA;AA+PF;;AA5PA;EACE,iBAAA;AA+PF;AA9PE;EACE,UAAA;EACA,0BClCe;EDmCf,gBAAA;AAgQJ;;AA7PA;EACE,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;AAgQF;;AA7PA;EACE,cAAA;EACA,gBAAA;EACA,yBAAA;EACA,iBAAA;EACA,aAAA;AAgQF;;AA7PA;EACE,eAAA;AAgQF;;AA9PA;EACE,cAAA;EACA,gBAAA;EACA,yBAAA;EACA,iBAAA;EACA,aAAA;AAiQF","sourcesContent":["*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\n.bg-white{\r\n  --bs-bg-opacity: 1;\r\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\r\n}\r\n\r\n.shadow-sm {\r\n  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {\r\n  display: flex;\r\n  flex-wrap: inherit;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {\r\n  width: 100%;\r\n  padding-right: var(--bs-gutter-x, 0.75rem);\r\n  padding-left: var(--bs-gutter-x, 0.75rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-light .navbar-brand {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n.navbar-brand {\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n}\r\n.navbar-light .navbar-toggler {\r\n  color: rgba(0, 0, 0, 0.55);\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n}\r\nbutton:not(:disabled), [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled) {\r\n  cursor: pointer;\r\n}\r\n//@media (prefers-reduced-motion: reduce){\r\n//.navbar-toggler {\r\n//  transition: none;\r\n//}\r\n\r\n.navbar-toggler {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: box-shadow 0.15s ease-in-out;\r\n}\r\n\r\nbutton, [type=button], [type=reset], [type=submit] {\r\n  -webkit-appearance: button;\r\n}\r\nbutton, select {\r\n  text-transform: none;\r\n}\r\ninput, button, select, optgroup, textarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n}\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100%;\r\n}\r\n\r\n.collapse:not(.show) {\r\n  display: none;\r\n}\r\n.navbar-collapse {\r\n  flex-basis: 100%;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n}\r\n.me-auto {\r\n  margin-right: auto !important;\r\n}\r\n\r\n.navbar-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.ms-auto {\r\n  margin-left: auto !important;\r\n}\r\n\r\n.dropup, .dropend, .dropdown, .dropstart {\r\n  position: relative;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: rgba(0, 0, 0, 0.55);\r\n}\r\n.navbar-nav .nav-link {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n  position: static;\r\n}\r\n.dropdown-menu {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  display: none;\r\n  min-width: 10rem;\r\n  padding: 0.5rem 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown-item {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.25rem 1rem;\r\n  clear: both;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  text-align: inherit;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.d-none {\r\n  display: none !important;\r\n}\r\n\r\n\r\ninput, textarea, textarea:focus, .button:focus {\r\n  outline: none;\r\n}\r\ninput, button, select, optgroup, textarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\nsection, main {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.justify-content-center {\r\n  justify-content: center !important;\r\n}\r\n.row {\r\n  --bs-gutter-x: 1.5rem;\r\n  --bs-gutter-y: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: calc(-1 * var(--bs-gutter-y));\r\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\r\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\r\n}\r\n\r\n.row > * {\r\n  flex-shrink: 0;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\r\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\r\n  margin-top: var(--bs-gutter-y);\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-header:first-child {\r\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n.card-header {\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-body {\r\n  flex: 1 1 auto;\r\n  padding: 1rem 1rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\na {\r\n  color: #0d6efd;\r\n  text-decoration: underline;\r\n}\r\n\r\n","@import \"../var\";\r\n@import \"./authBootstrap\";\r\n\r\n\r\n[required]:before{\r\n  content: 'ss';\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  color:red;\r\n  position: absolute;\r\n  right: -100%;\r\n}\r\n\r\n.pass {\r\n  position: relative;\r\n}\r\n.password-control {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 6px;\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(/pic/srvc/view.svg) 0 0 no-repeat;\r\n}\r\n.password-control.view {\r\n  background: url(/pic/srvc/no-view.svg) 0 0 no-repeat;\r\n}\r\n\r\n\r\nsection,\r\nmain {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.message{\r\n  font-size: .9rem;\r\n  a{\r\n    padding: 0;\r\n    color: $color-main-hover;\r\n    font-weight: 600;\r\n  }\r\n}\r\n.error{\r\n  border: 3px solid #c14000;\r\n  border-radius: 3px;\r\n  padding: 10px;\r\n  color: #c14000;\r\n}\r\n\r\n.success{\r\n  color: #1bbc9b;\r\n  font-weight: 600;\r\n  background-color: #ffffff;\r\n  border: 1px solid;\r\n  padding: 15px;\r\n}\r\n\r\n.return_pass .submit{\r\n  cursor: pointer;\r\n}\r\n.login_return_pass{\r\n  color: #1bbc9b;\r\n  font-weight: 600;\r\n  background-color: #ffffff;\r\n  border: 1px solid;\r\n  padding: 15px;\r\n}","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.logo {\n  display: flex;\n  margin: 0 0 0 10px;\n  align-items: center;\n  height: 30px;\n  flex: 1 0 auto;\n}\n.logo a {\n  width: 100px;\n  display: block;\n}\n\n.logo_square {\n  height: 100%;\n  margin-right: 5px;\n  width: 30px;\n}\n@media (max-width: 800px) {\n  .logo_square {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .logo_square {\n    display: none;\n  }\n}\n\n.header .logo_vitex {\n  height: 30px;\n}\n@media (max-width: 600px) {\n  .header .logo_vitex {\n    height: 25px;\n  }\n}\n\n.logo__description {\n  width: 120px;\n  margin: 0 10px 0 20px;\n  display: inline-block;\n  color: #343133;\n  font-size: 12px;\n}\n@media (max-width: 800px) {\n  .logo__description {\n    display: none;\n    font-size: 10px;\n    width: 90px;\n  }\n}\n@media (max-width: 400px) {\n  .logo__description {\n    display: none;\n  }\n}\n\n.location {\n  font-size: 12px;\n  padding: 0 15px;\n  max-width: 105px;\n  position: relative;\n  flex: 1;\n}\n@media (max-width: 800px) {\n  .location {\n    display: none;\n  }\n}\n.location svg {\n  position: absolute;\n  left: -8px;\n  top: 30%;\n  width: 15px;\n  height: 15px;\n  stroke: var(--color-main);\n}\n\n/***** Всплывающие телефоны */\n.phone {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: bold 17px/21px \"Proxima Nova\", sans-serif;\n  padding: 0 25px;\n  white-space: nowrap;\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .phone {\n    font: bold 12px/17px \"Proxima Nova\", sans-serif;\n  }\n}\n\n.phone svg {\n  position: absolute;\n  left: -20px;\n  bottom: 3px;\n  color: #1bbc9b;\n  width: 14px;\n}\n@media (max-width: 400px) {\n  .phone svg {\n    font-size: 17px;\n    width: 11px;\n    bottom: 2px;\n    left: -18px;\n  }\n}\n\n.phone > a {\n  position: relative;\n  color: #4e4e4e;\n}\n.phone > a:after {\n  content: \"\";\n  position: absolute;\n  left: -25px;\n  top: 30%;\n  display: inline-block;\n  border: 5px solid transparent;\n  border-top-color: var(--color-main);\n  margin-left: 9px;\n}\n@media (max-width: 500px) {\n  .phone > a:after {\n    position: absolute;\n    top: 5px;\n  }\n}\n\n.phone:hover .phone__popup-inner {\n  padding: 25px 30px;\n  height: auto;\n  overflow: visible;\n}\n\n.phone__popup {\n  position: absolute;\n  left: -15%;\n  bottom: -10px;\n  padding-top: 0;\n  height: 0;\n  z-index: 6;\n}\n@media (max-width: 600px) {\n  .phone__popup {\n    right: 0;\n    left: initial;\n  }\n}\n\n.phone__popup-inner {\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 6px 12px #8fa39f;\n  font: 15px/19px \"Proxima Nova\", sans-serif;\n  color: #181617;\n  padding: 0 30px;\n  height: 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.phone__popup-inner:before {\n  content: \"\";\n  border-bottom: 10px solid #fff;\n  border-left: 11px solid transparent;\n  border-right: 11px solid transparent;\n  position: absolute;\n  left: 192px;\n  top: -10px;\n}\n\n.phone__popup-head {\n  border-bottom: 1px solid #ebebeb;\n  padding-bottom: 15px;\n  margin-bottom: 16px;\n  white-space: initial;\n}\n\n.phone__popup p {\n  margin: 0 0 11px;\n}\n\n.phone__popup-phones {\n  margin: 0;\n}\n\n.phone__popup-phones a {\n  font: bold 17px/21px \"Proxima Nova\", sans-serif;\n  color: #343133;\n  line-height: 1.7;\n}\n\n.header-catalog-menu {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 1px;\n  background: var(--color-main);\n  min-height: 40px;\n  display: flex;\n  opacity: 0.92;\n  z-index: 1;\n}\n\n.header-catalog-menu__wrap {\n  max-width: 1310px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-end;\n}\n.header-catalog-menu__wrap .mobile-menu {\n  position: absolute;\n  top: 100%;\n  right: -150%;\n  width: 250px;\n  background: #78aafe;\n  transition: right 500ms ease-out;\n}\n@media (max-width: 500px) {\n  .header-catalog-menu__wrap .mobile-menu {\n    width: 100%;\n  }\n}\n.header-catalog-menu__wrap .mobile-menu.show {\n  right: 0;\n}\n.header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap {\n  display: flex;\n  flex-flow: column;\n  margin: 20px;\n  text-align: end;\n}\n@media (max-width: 500px) {\n  .header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap {\n    text-align: center;\n  }\n}\n.header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap .mobile-menu__item {\n  color: #ffffff;\n  padding: 10px 50px 10px;\n  cursor: pointer;\n}\n.header-catalog-menu__wrap .mobile-menu .mobile-menu__wrap .mobile-menu__item:hover {\n  background-color: #0070ff;\n}\n\n.utils {\n  display: flex;\n  padding: 0 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.utils svg {\n  stroke: white;\n  stroke-width: 3px;\n  width: 17px;\n  height: 17px;\n  padding: 0 15px;\n}\n.utils .search,\n.utils .gamburger,\n.utils .cart {\n  position: initial;\n  height: 100%;\n  margin: initial;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n}\n.utils .search:hover,\n.utils .gamburger:hover,\n.utils .cart:hover {\n  background-color: #0070ff;\n}\n.h-cat {\n  background-color: rgba(34, 117, 255, 0);\n  position: relative;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #fff;\n  font: 600 17px/17px intro, \"Proxima Nova\", sans-serif;\n}\n@media (max-width: 800px) {\n  .h-cat {\n    display: none;\n  }\n}\n.h-cat:first-child ul {\n  left: 0;\n}\n.h-cat:first-child ul:before {\n  right: 80%;\n}\n.h-cat:last-child ul {\n  right: 0;\n}\n.h-cat:hover {\n  background-color: rgba(34, 117, 255, 0.5);\n}\n.h-cat:hover ul {\n  height: auto;\n  padding: 30px 25px 15px 25px;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  background-color: white;\n  top: 100%;\n  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.28);\n  overflow: visible;\n  cursor: text;\n}\n.h-cat:hover ul li {\n  cursor: pointer;\n  padding: 10px 5px;\n  border-bottom: #f0f0f0 1px solid;\n  transition: 0.3s;\n}\n.h-cat:hover ul li:hover {\n  background: #ababab33;\n}\n.h-cat:hover ul li a:hover {\n  background: #eeeeee;\n}\n.h-cat ul {\n  height: 0;\n  position: absolute;\n  top: 45px;\n  overflow: hidden;\n  color: black;\n  z-index: 2;\n}\n.h-cat ul li a {\n  font: 600 14px/17px \"Proxima Nova\", sans-serif;\n}\n.h-cat ul:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  transform: rotate(45deg);\n  position: absolute;\n  top: -4px;\n  right: 50%;\n  border-top: 10px solid white;\n  border-left: 10px solid white;\n}\n\n.user-menu {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 17px;\n  cursor: pointer;\n  color: #2b303a;\n  margin-right: 10px;\n  flex: 0 1 auto;\n}\n@media (max-width: 500px) {\n  .user-menu {\n    font-size: 12px;\n    display: none;\n    padding: 3px 10px;\n  }\n}\n.user-menu:hover {\n  background-color: #f0f0f0;\n}\n.user-menu img {\n  border: 2px solid #f5f5f5;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 6px;\n  width: 44px;\n}\n.user-menu .user-menu__menu {\n  display: none;\n  flex-flow: column;\n  border: 1px solid #eee;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background: #fff;\n  z-index: 501;\n  position: absolute;\n  top: 100%;\n  right: -1px;\n  width: 280px;\n  padding: 10px;\n}\n.user-menu .user-menu__menu a {\n  padding: 5px 10px;\n  color: #5a5a5a;\n}\n.user-menu .user-menu__menu a:hover {\n  background-color: #e5e5e5;\n}\n.user-menu:hover > .user-menu__menu {\n  display: flex;\n}\n\n.guest-menu {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 17px;\n  cursor: pointer;\n  color: #2b303a;\n  margin-right: 10px;\n  flex: 0 1 auto;\n  border: 1px solid grey;\n  border-radius: 4px;\n  padding: 5px 15px;\n  z-index: 2;\n}\n@media (max-width: 500px) {\n  .guest-menu {\n    font-size: 12px;\n    display: none;\n    padding: 3px 10px;\n  }\n}\n.guest-menu svg {\n  width: 17px;\n  padding-right: 10px;\n}\n.guest-menu .guest-menu__menu {\n  position: absolute;\n  display: none;\n  flex-flow: column;\n  background-color: #ffffff;\n  padding: 10px;\n  top: 103%;\n  right: -1px;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  box-shadow: 0px 11px 16px 0px #1d7c6840;\n  z-index: 1;\n}\n.guest-menu .guest-menu__menu a {\n  color: #5a5a5a;\n  padding: 5px 10px;\n}\n.guest-menu .guest-menu__menu a:hover {\n  background-color: #e5e5e5;\n}\n.guest-menu .user-menu__icon {\n  width: 14px;\n  height: 15px;\n  padding: 0 5px 3px;\n}\n.guest-menu:hover > .guest-menu__menu {\n  display: flex;\n}\n\nheader {\n  display: flex;\n  flex: 0 0 auto;\n  background: #fff;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.header {\n  display: flex;\n  position: relative;\n  align-items: center;\n  margin: 10px 20px;\n  justify-content: space-between;\n  max-width: 1310px;\n  height: 50px;\n}\n@media (max-width: 600px) {\n  .header {\n    padding: 0;\n  }\n}\n\n.header__info {\n  display: flex;\n  position: relative;\n  align-items: center;\n  max-width: 1310px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n@media (max-width: 600px) {\n  .header__info {\n    padding: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./resources/js/components/header/header.scss","webpack://./resources/js/components/header/logo.scss","webpack://./resources/js/mixin_media.scss","webpack://./resources/js/components/header/location.scss","webpack://./resources/js/components/header/phone.scss","webpack://./resources/js/components/header/header-catalog-menu.scss","webpack://./resources/js/components/header/mobile-menu.scss","webpack://./resources/js/components/header/user_menu.scss","webpack://./resources/js/var.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACEhB;EACE,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;ADAF;ACEE;EACE,YAAA;EACA,cAAA;ADAJ;;ACKA;EACE,YAAA;EACA,iBAAA;EACA,WAAA;ADFF;AESE;EDVF;IAMI,aAAA;EDDF;AACF;AEUE;EDhBF;IASI,aAAA;EDCF;AACF;;ACKE;EACE,YAAA;ADFJ;AECE;EDAA;IAGI,YAAA;EDAJ;AACF;;ACIA;EACE,YAAA;EACA,qBAAA;EACA,qBAAA;EACA,cAAA;EACA,eAAA;ADDF;AElBE;EDcF;IAQI,aAAA;IACA,eAAA;IACA,WAAA;EDAF;AACF;AEPE;EDJF;IAcI,aAAA;EDCF;AACF;;AGrDA;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,OAAA;AHwDF;AEtCE;ECvBF;IAOI,aAAA;EH0DF;AACF;AGxDE;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AH0DJ;;AI1EA,6BAAA;AACA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,+CAAA;EACA,eAAA;EACA,mBAAA;EACA,OAAA;AJ6EF;AEnDE;EElCF;IAWI,+CAAA;EJ8EF;AACF;;AI3EA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;AJ8EF;AE1DE;EEzBF;IAOI,eAAA;IACA,WAAA;IACA,WAAA;IACA,WAAA;EJgFF;AACF;;AI7EA;EACE,kBAAA;EACA,cAAA;AJgFF;AI9EE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,qBAAA;EACA,6BAAA;EACA,mCAAA;EACA,gBAAA;AJgFJ;AEvFE;EEDA;IAUI,kBAAA;IACA,QAAA;EJkFJ;AACF;;AI9EE;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;AJiFJ;;AI9EE;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,SAAA;EACA,UAAA;AJiFJ;AElHE;EE2BA;IAQI,QAAA;IACA,aAAA;EJmFJ;AACF;;AIhFE;EACE,YAAA;EACA,gBAAA;EACA,8BAAA;EACA,0CAAA;EACA,cAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,oBAAA;AJmFJ;;AIhFE;EACE,WAAA;EACA,8BAAA;EACA,mCAAA;EACA,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AJmFJ;;AIhFE;EACE,gCAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;AJmFJ;;AIhFE;EACE,gBAAA;AJmFJ;;AIhFE;EACE,SAAA;AJmFJ;;AIhFE;EACE,+CAAA;EACA,cAAA;EACA,gBAAA;AJmFJ;;AKhMA;EACE,wBAAA;EAAA,gBAAA;EACA,QAAA;EACA,6BAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,UAAA;ALmMF;;AKhMA;EACE,iBAAA;EACA,WAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;ALmMF;AMnNE;EACE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EAEA,mBAAA;EACA,gCAAA;ANoNJ;AEzLE;EIlCA;IAUI,WAAA;ENqNJ;AACF;AMnNI;EACE,QAAA;ANqNN;AMlNI;EACE,aAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;ANoNN;AEvME;EIjBE;IAOI,kBAAA;ENqNN;AACF;AMnNM;EACE,cAAA;EACA,uBAAA;EACA,eAAA;ANqNR;AMnNQ;EACE,yBAAA;ANqNV;;AK/NA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;ALkOF;AKhOE;EACE,aAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;ALkOJ;AK/NE;;;EAGE,iBAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;ALiOJ;AK/NI;;;EACE,yBAAA;ALmON;AKxNA;EACE,uCAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,OAAA;EACA,WAAA;EACA,qDAAA;AL0NF;AE1QE;EGqCF;IAeI,aAAA;EL0NF;AACF;AKxNE;EACE,OAAA;AL0NJ;AKxNI;EACE,UAAA;AL0NN;AKtNE;EACE,QAAA;ALwNJ;AKpNE;EACE,yCAAA;ALsNJ;AKpNI;EACE,YAAA;EACA,4BAAA;EACA,+BAAA;EAAA,4BAAA;EAAA,uBAAA;EACA,uBAAA;EACA,SAAA;EACA,6CAAA;EACA,iBAAA;EACA,YAAA;ALsNN;AKpNM;EACE,eAAA;EACA,iBAAA;EACA,gCAAA;EACA,gBAAA;ALsNR;AKpNQ;EACE,qBAAA;ALsNV;AKnNQ;EACE,mBAAA;ALqNV;AK9ME;EACE,SAAA;EACA,kBAAA;EACA,SAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;ALgNJ;AK5MM;EACE,8CAAA;AL8MR;AK1MI;EACE,WAAA;EACA,cAAA;EACA,QAAA;EACA,SAAA;EACA,wBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,4BAAA;EACA,6BAAA;AL4MN;;AO/UA;EAfE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,cAAA;APkWF;AEvUE;EKnBF;IANI,eAAA;IACA,aAAA;IACA,iBAAA;EPoWF;AACF;AO7VE;EACE,yBAAA;AP+VJ;AO5VE;EACE,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,WAAA;AP8VJ;AOvVE;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,2CAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;APyVJ;AOtVI;EACE,iBAAA;EACA,cCvCI;AR+XV;AOtVM;EACE,yBAAA;APwVR;AOnVE;EACE,aAAA;APqVJ;;AOjVA;EAhEE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,cAAA;EA2DA,sBAAA;EACA,kBAAA;EACA,iBAAA;EACA,UAAA;AP2VF;AE9XE;EK8BF;IAvDI,eAAA;IACA,aAAA;IACA,iBAAA;EP2ZF;AACF;AOhWE;EACE,WAAA;EACA,mBAAA;APkWJ;AO/VE;EACE,kBAAA;EACA,aAAA;EACA,iBAAA;EAEA,yBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,uCAAA;EACA,UAAA;APgWJ;AO9VI;EACE,cC9EI;ED+EJ,iBAAA;APgWN;AO9VM;EACE,yBAAA;APgWR;AO3VE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AP6VJ;AO1VE;EACE,aAAA;AP4VJ;;AApcA;EACE,aAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;AAucF;;AAlcA;EACE,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,8BAAA;EACA,iBAAA;EACA,YAAA;AAqcF;AE7bE;EFfF;IAUI,UAAA;EAscF;AACF;;AAncA;EACE,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,8BAAA;EACA,eAAA;AAscF;AE3cE;EFDF;IAQI,UAAA;EAwcF;AACF","sourcesContent":["@import \"logo\";\r\n@import \"location\";\r\n@import \"phone\";\r\n@import \"header-catalog-menu\";\r\n@import \"user_menu\";\r\n\r\nheader {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  background: #fff;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n.header {\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  margin: 10px 20px;\r\n  justify-content: space-between;\r\n  max-width: 1310px;\r\n  height: 50px;\r\n  //width: 100%;\r\n  @include _600 {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n.header__info {\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  max-width: 1310px;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  @include _600 {\r\n    padding: 0;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","@import \"../../mixin_media\";\r\n\r\n.logo {\r\n  display: flex;\r\n  margin: 0 0 0 10px;\r\n  align-items: center;\r\n  height: 30px;\r\n  flex: 1 0 auto;\r\n\r\n  a {\r\n    width: 100px;\r\n    display: block;\r\n  }\r\n\r\n}\r\n\r\n.logo_square {\r\n  height: 100%;\r\n  margin-right: 5px;\r\n  width: 30px;\r\n\r\n  @include _800 {\r\n    display: none;\r\n  }\r\n  @include _600 {\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n.header {\r\n\r\n  .logo_vitex {\r\n    height: 30px;\r\n    @include _600 {\r\n      height: 25px;\r\n    }\r\n  }\r\n}\r\n\r\n.logo__description {\r\n  width: 120px;\r\n  margin: 0 10px 0 20px;\r\n  display: inline-block;\r\n  color: #343133;\r\n  font-size: 12px;\r\n\r\n  @include _800 {\r\n    display: none;\r\n    font-size: 10px;\r\n    width: 90px;\r\n  }\r\n\r\n  @include _400 {\r\n    display: none;\r\n  }\r\n}","// Using\r\n//.div {\r\n//   @include _1200 {\r\n//       @content;\r\n//   }\r\n//}\r\n\r\n@mixin _1200 {\r\n  @media (max-width: 1200px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _1000 {\r\n  @media (max-width: 1000px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _900 {\r\n  @media (max-width: 900px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _800 {\r\n  @media (max-width: 800px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _600 {\r\n  @media (max-width: 600px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _500 {\r\n  @media (max-width: 500px){\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin _400{\r\n  @media (max-width: 400px){\r\n    @content;\r\n  }\r\n}\r\n@mixin _300{\r\n  @media (max-width: 300px){\r\n    @content;\r\n  }\r\n}","@import \"../../mixin_media\";\r\n@import \"../../var\";\r\n\r\n.location{\r\n  font-size: 12px;\r\n  padding: 0 15px;\r\n  max-width: 105px;\r\n  position: relative;\r\n  flex: 1;\r\n  @include _800{\r\n    display: none;\r\n  }\r\n\r\n  svg{\r\n    position: absolute;\r\n    left: -8px;\r\n    top: 30%;\r\n    width: 15px;\r\n    height: 15px;\r\n    stroke: var(--color-main);\r\n  }\r\n}","@import \"../../var\";\r\n@import \"../../mixin_media\";\r\n\r\n/***** Всплывающие телефоны */\r\n.phone {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font: bold 17px/21px 'Proxima Nova', sans-serif;\r\n  padding: 0 25px;\r\n  white-space: nowrap;\r\n  flex: 1;\r\n\r\n  @include _500 {\r\n    font: bold 12px/17px 'Proxima Nova', sans-serif;\r\n  }\r\n}\r\n\r\n.phone svg {\r\n  position: absolute;\r\n  left: -20px;\r\n  bottom: 3px;\r\n  color: #1bbc9b;\r\n  width: 14px;\r\n  @include _400 {\r\n    font-size: 17px;\r\n    width: 11px;\r\n    bottom: 2px;\r\n    left: -18px;\r\n  }\r\n}\r\n\r\n.phone > a {\r\n  position: relative;\r\n  color: #4e4e4e;\r\n\r\n  &:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: -25px;\r\n    top: 30%;\r\n    display: inline-block;\r\n    border: 5px solid transparent;\r\n    border-top-color: var(--color-main);\r\n    margin-left: 9px;\r\n    @include _500 {\r\n      position: absolute;\r\n      top: 5px;\r\n    }\r\n  }\r\n}\r\n\r\n  .phone:hover .phone__popup-inner {\r\n    padding: 25px 30px;\r\n    height: auto;\r\n    overflow: visible;\r\n  }\r\n\r\n  .phone__popup {\r\n    position: absolute;\r\n    left: -15%;\r\n    bottom: -10px;\r\n    padding-top: 0;\r\n    height: 0;\r\n    z-index: 6;\r\n    @include _600{\r\n      right: 0;\r\n      left: initial;\r\n    }\r\n  }\r\n\r\n  .phone__popup-inner {\r\n    width: 200px;\r\n    background: #fff;\r\n    box-shadow: 0 6px 12px hsl(168, 10%, 60%);\r\n    font: 15px/19px 'Proxima Nova', sans-serif;\r\n    color: #181617;\r\n    padding: 0 30px;\r\n    height: 0;\r\n    overflow: hidden;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .phone__popup-inner:before {\r\n    content: '';\r\n    border-bottom: 10px solid #fff;\r\n    border-left: 11px solid transparent;\r\n    border-right: 11px solid transparent;\r\n    position: absolute;\r\n    left: 192px;\r\n    top: -10px;\r\n  }\r\n\r\n  .phone__popup-head {\r\n    border-bottom: 1px solid #ebebeb;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 16px;\r\n    white-space: initial;\r\n  }\r\n\r\n  .phone__popup p {\r\n    margin: 0 0 11px;\r\n  }\r\n\r\n  .phone__popup-phones {\r\n    margin: 0;\r\n  }\r\n\r\n  .phone__popup-phones a {\r\n    font: bold 17px/21px 'Proxima Nova', sans-serif;\r\n    color: #343133;\r\n    line-height: 1.7;\r\n  }\r\n\r\n\r\n","@import \"../../var\";\r\n@import \"../accordion/partials/_layout.scss\";\r\n@import \"../../mixin_media\";\r\n@import \"./mobile-menu\";\r\n\r\n.header-catalog-menu {\r\n  position: sticky;\r\n  top: 1px;\r\n  background: var(--color-main);\r\n  min-height: 40px;\r\n  display: flex;\r\n  opacity: .92;\r\n  z-index: 1;\r\n}\r\n\r\n.header-catalog-menu__wrap {\r\n  max-width: 1310px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n\r\n  @include mobile-menu();\r\n\r\n\r\n}\r\n\r\n.utils {\r\n  display: flex;\r\n  padding: 0 20px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  svg {\r\n    stroke: white;\r\n    stroke-width: 3px;\r\n    width: 17px;\r\n    height: 17px;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .search,\r\n  .gamburger,\r\n  .cart {\r\n    position: initial;\r\n    height: 100%;\r\n    margin: initial;\r\n    display: flex;\r\n    cursor: pointer;\r\n    align-items: center;\r\n\r\n    &:hover {\r\n      background-color: #0070ff;\r\n    }\r\n  }\r\n\r\n  .menu {\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\n.h-cat {\r\n  background-color: rgba(#2275ff, 0);\r\n  position: relative;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  transition: .5s;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  color: #fff;\r\n  font: 600 17px/17px intro, 'Proxima Nova', sans-serif;\r\n\r\n\r\n  @include _800 {\r\n    display: none;\r\n  }\r\n\r\n  &:first-child ul {\r\n    left: 0;\r\n\r\n    &:before {\r\n      right: 80%;\r\n    }\r\n  }\r\n\r\n  &:last-child ul {\r\n    right: 0;\r\n  }\r\n\r\n\r\n  &:hover {\r\n    background-color: rgba(#2275ff, .5);\r\n\r\n    ul {\r\n      height: auto;\r\n      padding: 30px 25px 15px 25px;\r\n      max-height: fit-content;\r\n      background-color: white;\r\n      top: 100%;\r\n      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.28);\r\n      overflow: visible;\r\n      cursor: text;\r\n\r\n      li {\r\n        cursor: pointer;\r\n        padding: 10px 5px;\r\n        border-bottom: #f0f0f0 1px solid;\r\n        transition: .3s;\r\n\r\n        &:hover {\r\n          background: #ababab33;\r\n        }\r\n\r\n        a:hover {\r\n          background: #eeeeee;;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n  ul {\r\n    height: 0;\r\n    position: absolute;\r\n    top: 45px;\r\n    overflow: hidden;\r\n    color: black;\r\n    z-index: 2;\r\n\r\n    li {\r\n\r\n      a {\r\n        font: 600 14px/17px 'Proxima Nova', sans-serif;\r\n      }\r\n    }\r\n\r\n    &:before {\r\n      content: '';\r\n      display: block;\r\n      width: 0;\r\n      height: 0;\r\n      transform: rotate(45deg);\r\n      position: absolute;\r\n      top: -4px;\r\n      right: 50%;\r\n      border-top: 10px solid white;\r\n      border-left: 10px solid white;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n","@import \"../../mixin_media\";\r\n\r\n@mixin mobile-menu {\r\n\r\n  .mobile-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    right: -150%;\r\n    width: 250px;\r\n    //min-height: 100vh;\r\n    background: #78aafe;\r\n    transition: right 500ms ease-out;\r\n\r\n    @include _500 {\r\n      width: 100%;\r\n    }\r\n\r\n    &.show {\r\n      right: 0;\r\n    }\r\n\r\n    .mobile-menu__wrap {\r\n      display: flex;\r\n      flex-flow: column;\r\n      margin: 20px;\r\n      text-align: end;\r\n\r\n      @include _500 {\r\n        text-align: center;\r\n      }\r\n\r\n      .mobile-menu__item {\r\n        color: #ffffff;\r\n        padding: 10px 50px 10px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          background-color: #0070ff;\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n}","@import \"../../var\";\r\n@import \"../../mixin_media\";\r\n\r\n@mixin user-menu {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  color: #2b303a;\r\n  margin-right: 10px;\r\n  flex: 0 1 auto;\r\n  @include _500 {\r\n    font-size: 12px;\r\n    display: none;\r\n    padding: 3px 10px;\r\n  }\r\n}\r\n\r\n.user-menu {\r\n\r\n  @include user-menu;\r\n\r\n  &:hover {\r\n    background-color: #f0f0f0;\r\n  }\r\n\r\n  img {\r\n    border: 2px solid #f5f5f5;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-right: 6px;\r\n    width: 44px;\r\n  }\r\n\r\n  //&:after {\r\n  //  content: '☰';\r\n  //}\r\n\r\n  .user-menu__menu {\r\n    display: none;\r\n    flex-flow: column;\r\n    border: 1px solid #eee;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n    background: #fff;\r\n    z-index: 501;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: -1px;\r\n    width: 280px;\r\n    padding: 10px;\r\n\r\n\r\n    a {\r\n      padding: 5px 10px;\r\n      color: $color-a;\r\n\r\n      &:hover {\r\n        background-color: #e5e5e5;\r\n      }\r\n    }\r\n  }\r\n\r\n  &:hover > .user-menu__menu {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.guest-menu {\r\n  @include user-menu;\r\n  border: 1px solid grey;\r\n  border-radius: 4px;\r\n  padding: 5px 15px;\r\n  z-index: 2;\r\n\r\n  svg {\r\n    width: 17px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .guest-menu__menu {\r\n    position: absolute;\r\n    display: none;\r\n    flex-flow: column;\r\n\r\n    background-color: #ffffff;\r\n    padding: 10px;\r\n    top: 103%;\r\n    right: -1px;\r\n    height: max-content;\r\n    box-shadow: 0px 11px 16px 0px #1d7c6840;\r\n    z-index: 1;\r\n\r\n    a {\r\n      color: $color-a;\r\n      padding: 5px 10px;\r\n\r\n      &:hover {\r\n        background-color: #e5e5e5;\r\n      }\r\n    }\r\n  }\r\n\r\n  .user-menu__icon {\r\n    width: 14px;\r\n    height: 15px;\r\n    padding: 0 5px 3px;\r\n  }\r\n\r\n  &:hover > .guest-menu__menu {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n\r\n\r\n","//$color-main: #1bbc9b1//;\r\n\r\n$color-main-green: #1bbc9b;\r\n\r\n$color-main: var(--color-main);\r\n\r\n$color-main-hover: shade(#6CA3FE, 60%);\r\n//$color-main-hover:#009979;\r\n\r\n$dark-grey-hover: #343635;\r\n\r\n$color-white-hover: #e7e7e7;\r\n$color-hover-gray: #e5e5e5;\r\n\r\n$color-red: #e30000;\r\n\r\n$color-a: #5a5a5a;\r\n\r\n$color-title: #2a2a2a;\r\n\r\n$color-gray-min: #808080;\r\n$color-gray-min-hover: #6E6E6E;\r\n\r\n$color-gray-mid: #565958;\r\n$color-gray-mid-hover: #4D4F4E;\r\n\r\n$color-gray-max: #3d403f;\r\n$color-gray-max-hover: $dark-grey-hover;\r\n\r\n$color-text: $dark-grey-hover;\r\n\r\n$font-label: 400 14px Arial, Serif;\r\n$font-label-focus: 400 16px Arial, Serif;\r\n\r\n$font-label-Roboto: 14px \"Roboto\", sans-serif;\r\n$font-label-Roboto-focus: 16px \"Roboto\", sans-serif;"],"sourceRoot":""}]);
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
//# sourceMappingURL=auth.js.map