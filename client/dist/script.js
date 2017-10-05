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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyView = function () {
    function KeyView() {
        var _this = this;

        _classCallCheck(this, KeyView);

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.id = 100;
        this.name = "Test";
        this.score = Math.random() * 10;
        document.addEventListener("keydown", function (keyBoardDown) {
            if (keyBoardDown.keyCode === 39) {
                _this.right = true;
            }
            if (keyBoardDown.keyCode === 37) {
                _this.left = true;
            }
            if (keyBoardDown.keyCode === 38) {
                _this.up = true;
            }
            if (keyBoardDown.keyCode === 40) {
                _this.down = true;
            }
        });

        document.addEventListener("keyup", function (keyBoardUp) {

            if (keyBoardUp.keyCode === 39) {
                _this.right = false;
            }
            if (keyBoardUp.keyCode === 37) {
                _this.left = false;
            }
            if (keyBoardUp.keyCode === 38) {
                _this.up = false;
            }
            if (keyBoardUp.keyCode === 40) {
                _this.down = false;
            }
        });
    }

    _createClass(KeyView, [{
        key: "location",
        get: function get() {
            return {
                left: this.left,
                right: this.right,
                up: this.up,
                down: this.down
            };
        }
    }]);

    return KeyView;
}();

module.exports = KeyView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyview = __webpack_require__(0);

var _keyview2 = _interopRequireDefault(_keyview);

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

var _draw = __webpack_require__(3);

var _draw2 = _interopRequireDefault(_draw);

var _multiplayer = __webpack_require__(4);

var _multiplayer2 = _interopRequireDefault(_multiplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var socket = io.connect('http://localhost:3000');
socket.on('messages', function () {
    c.loop();
});
var players = [];

var Controller = function () {
    function Controller() {
        var _this = this;

        _classCallCheck(this, Controller);

        this.mousePos = {
            x: 0,
            y: 0
        };
        this.Mp = new _multiplayer2.default();
        this.canvas = new _draw2.default();
        this.player = new _player2.default();
        this.key = new _keyview2.default();

        window.addEventListener("mousemove", function (e) {
            _this.mousePos.x = e.clientX;
            _this.mousePos.y = e.clientY;
        });
        var data = {
            x: this.player.props.xPos,
            y: this.player.props.yPos,
            height: this.player.props.height,
            width: this.player.props.width,
            color: this.player.props.color
        };
        // console.log(data);
        socket.emit('start', data);
    }

    _createClass(Controller, [{
        key: "loop",
        value: function loop() {
            var _this2 = this;

            this.canvas.clearScreen();
            socket.on('heartbeat', function (data) {
                players = data;
            });
            this.player.move(this.key.location);
            var data = {
                x: this.player.props.xPos,
                y: this.player.props.yPos,
                height: this.player.props.height,
                width: this.player.props.width,
                color: this.player.props.color
            };
            players.forEach(function (player) {
                _this2.canvas.drawPlayer(player);
            });

            socket.emit('update', data);
            window.requestAnimationFrame(function () {
                _this2.loop();
            });
        }
    }]);

    return Controller;
}();

var c = new Controller();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyview = __webpack_require__(0);

var _keyview2 = _interopRequireDefault(_keyview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.props = {
            xPos: 10,
            yPos: 10,
            height: 20,
            width: 20,
            hp: 3,
            color: this.randomColor(),
            uniqueID: new Date().valueOf() + Math.random()
        };
        this.key = new _keyview2.default();
    }

    _createClass(Player, [{
        key: "move",
        value: function move(movement) {
            if (movement.left && this.props.xPos <= window.innerWidth - window.innerWidth) {
                this.props.xPos === 0;
            } else if (movement.left) {
                this.props.xPos -= 10;
            }

            if (movement.right && this.props.xPos >= window.innerWidth - 10) {
                this.props.xPos === window.innerWidth;
            } else if (movement.right === true) {
                this.props.xPos += 10;
            }

            if (movement.down && this.props.yPos >= window.innerHeight - 10) {
                this.props.yPos === window.innerHeight;
            } else if (movement.down) {
                this.props.yPos += 10;
            }

            if (movement.up && this.props.yPos <= window.innerHeight - window.innerHeight) {
                this.props.yPos === 0;
            } else if (movement.up) {
                this.props.yPos -= 10;
            }
            // this.collision();
        }
    }, {
        key: "collision",
        value: function collision(particle) {
            var _this = this;

            console.log(particle);
            if (!particle) return;

            if (particle.x + particle.size >= this.props.xPos && particle.x <= this.props.xPos + this.props.width && particle.y + particle.size >= this.props.yPos && particle.y <= this.props.yPos + this.props.height) {
                console.log("hi");
                this.props.hp = this.props.hp - 1;
                this.props.color = "rgba(200,0,0,1)";
                setTimeout(function () {
                    _this.props.color = "rgba(0,127,127,1)";
                }, 100);
                return true;
            }
            return false;
        }
    }, {
        key: "randomColor",
        value: function randomColor() {
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }
    }, {
        key: "checkHp",
        value: function checkHp() {
            return this.props.hp;
        }
    }, {
        key: "pLocation",
        get: function get() {
            return {
                x: this.props.xPos + "",
                y: this.props.yPos + "",
                height: this.props.height,
                width: this.props.width
            };
        }
    }]);

    return Player;
}();

module.exports = Player;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.screenSize = {
            x: window.innerWidth,
            y: window.innerHeight
        };
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
        this.font = "30px Arial";
        this.canvas.width = this.screenSize.x * 0.8;
        this.canvas.height = this.screenSize.y * 0.8;
    }

    _createClass(Canvas, [{
        key: "clearScreen",
        value: function clearScreen() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }, {
        key: "drawPlayer",
        value: function drawPlayer(data) {

            this.context.fillStyle = data.color;
            this.context.fillRect(data.x, data.y, data.height, data.width);
        }
    }, {
        key: "showHp",
        value: function showHp(hp) {
            this.context.fillStyle = "red";
            this.context.fillText("Lives : " + hp, 100, 100);
        }
    }, {
        key: "size",
        get: function get() {
            return {
                width: this.canvas.width,
                height: this.canvas.height
            };
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Multiplayer = function () {
    function Multiplayer() {
        _classCallCheck(this, Multiplayer);
    }

    _createClass(Multiplayer, [{
        key: 'emit',
        value: function emit(socket, player) {
            socket.emit('location', {
                x: player.x,
                y: player.y
            });
        }
    }, {
        key: 'getLocation',
        value: function getLocation(socket) {
            socket.on('locations', function (data) {

                return data;
            });
        }
    }]);

    return Multiplayer;
}();

exports.default = Multiplayer;

/***/ })
/******/ ]);