"use strict";

(self["webpackChunkgulpwebpack2024"] = self["webpackChunkgulpwebpack2024"] || []).push([ [ 101 ], {
    101: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        var _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
        var _files_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
        function _createForOfIteratorHelper(o, allowArrayLike) {
            var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
            if (!it) {
                if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                    if (it) o = it;
                    var i = 0;
                    var F = function F() {};
                    return {
                        s: F,
                        n: function n() {
                            if (i >= o.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: o[i++]
                            };
                        },
                        e: function e(_e) {
                            throw _e;
                        },
                        f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var err, normalCompletion = true, didErr = false;
            return {
                s: function s() {
                    it = it.call(o);
                },
                n: function n() {
                    var step = it.next();
                    normalCompletion = step.done;
                    return step;
                },
                e: function e(_e2) {
                    didErr = true;
                    err = _e2;
                },
                f: function f() {
                    try {
                        if (!normalCompletion && it["return"] != null) it["return"]();
                    } finally {
                        if (didErr) throw err;
                    }
                }
            };
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _typeof(o) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, _typeof(o);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _toPropertyKey(t) {
            var i = _toPrimitive(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }
        function _toPrimitive(t, r) {
            if ("object" != _typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != _typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        var ScrollWatcher = function() {
            function ScrollWatcher(props) {
                _classCallCheck(this, ScrollWatcher);
                var defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            return _createClass(ScrollWatcher, [ {
                key: "scrollWatcherUpdate",
                value: function scrollWatcherUpdate() {
                    this.scrollWatcherRun();
                }
            }, {
                key: "scrollWatcherRun",
                value: function scrollWatcherRun() {
                    document.documentElement.classList.add("watcher");
                    this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
                }
            }, {
                key: "scrollWatcherConstructor",
                value: function scrollWatcherConstructor(items) {
                    var _this = this;
                    if (items.length) {
                        this.scrollWatcherLogging("Проснулся, слежу за объектами (".concat(items.length, ")..."));
                        var uniqParams = (0, _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.v3)(Array.from(items).map((function(item) {
                            return "".concat(item.dataset.watchRoot ? item.dataset.watchRoot : null, "|").concat(item.dataset.watchMargin ? item.dataset.watchMargin : "0px", "|").concat(item.dataset.watchThreshold ? item.dataset.watchThreshold : 0);
                        })));
                        uniqParams.forEach((function(uniqParam) {
                            var uniqParamArray = uniqParam.split("|");
                            var paramsWatch = {
                                root: uniqParamArray[0],
                                margin: uniqParamArray[1],
                                threshold: uniqParamArray[2]
                            };
                            var groupItems = Array.from(items).filter((function(item) {
                                var watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                                var watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                                var watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                                if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                            }));
                            var configWatcher = _this.getScrollWatcherConfig(paramsWatch);
                            _this.scrollWatcherInit(groupItems, configWatcher);
                        }));
                    } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
                }
            }, {
                key: "getScrollWatcherConfig",
                value: function getScrollWatcherConfig(paramsWatch) {
                    var configWatcher = {};
                    if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging("Эмм... родительского объекта ".concat(paramsWatch.root, " нет на странице"));
                    configWatcher.rootMargin = paramsWatch.margin;
                    if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                        this.scrollWatcherLogging("Ой ой, настройку data-watch-margin нужно задавать в PX или %");
                        return;
                    }
                    if (paramsWatch.threshold === "prx") {
                        paramsWatch.threshold = [];
                        for (var i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                    } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                    configWatcher.threshold = paramsWatch.threshold;
                    return configWatcher;
                }
            }, {
                key: "scrollWatcherCreate",
                value: function scrollWatcherCreate(configWatcher) {
                    var _this2 = this;
                    this.observer = new IntersectionObserver((function(entries, observer) {
                        entries.forEach((function(entry) {
                            _this2.scrollWatcherCallback(entry, observer);
                        }));
                    }), configWatcher);
                }
            }, {
                key: "scrollWatcherInit",
                value: function scrollWatcherInit(items, configWatcher) {
                    var _this3 = this;
                    this.scrollWatcherCreate(configWatcher);
                    items.forEach((function(item) {
                        return _this3.observer.observe(item);
                    }));
                }
            }, {
                key: "scrollWatcherIntersecting",
                value: function scrollWatcherIntersecting(entry, targetElement) {
                    if (entry.isIntersecting) {
                        !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                        this.scrollWatcherLogging("Я вижу ".concat(targetElement.classList, ", добавил класс _watcher-view"));
                    } else {
                        targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                        this.scrollWatcherLogging("Я не вижу ".concat(targetElement.classList, ", убрал класс _watcher-view"));
                    }
                }
            }, {
                key: "scrollWatcherOff",
                value: function scrollWatcherOff(targetElement, observer) {
                    observer.unobserve(targetElement);
                    this.scrollWatcherLogging("Я перестал следить за ".concat(targetElement.classList));
                }
            }, {
                key: "scrollWatcherLogging",
                value: function scrollWatcherLogging(message) {
                    this.config.logging ? (0, _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.yU)("[Наблюдатель]: ".concat(message)) : null;
                }
            }, {
                key: "scrollWatcherCallback",
                value: function scrollWatcherCallback(entry, observer) {
                    var targetElement = entry.target;
                    this.scrollWatcherIntersecting(entry, targetElement);
                    targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                    document.dispatchEvent(new CustomEvent("watcherCallback", {
                        detail: {
                            entry
                        }
                    }));
                }
            } ]);
        }();
        _files_modules_js__WEBPACK_IMPORTED_MODULE_1__.t.watcher = new ScrollWatcher({});
        function currentBlock() {
            var navItems = document.querySelectorAll(".header__nav__item");
            var watchItems = document.querySelectorAll("[data-watch]");
            document.addEventListener("scroll", (function(e) {
                var viewport = document.documentElement.clientHeight / 2;
                var overLaps = [];
                var target;
                var _step, _iterator = _createForOfIteratorHelper(watchItems);
                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var item = _step.value;
                        if (item.classList.contains("_watcher-view")) {
                            overLaps.push(item);
                            target = item.getAttribute("data-watch");
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
                if (overLaps.length > 1) {
                    var first = overLaps[0].getBoundingClientRect().bottom;
                    first > viewport ? overLaps.splice(1, 1) : overLaps.splice(0, 1);
                    target = overLaps[0].getAttribute("data-watch");
                }
                var _step2, _iterator2 = _createForOfIteratorHelper(navItems);
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var nav = _step2.value;
                        if (nav.getAttribute("data-goto").slice(1) == target) nav.classList.add("td"); else nav.classList.remove("td");
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
            }));
        }
        currentBlock();
    }
} ]);