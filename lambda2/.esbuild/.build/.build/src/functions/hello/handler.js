var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _a = __getOwnPropSymbols(b); _i < _a.length; _i++) {
            var prop = _a[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __markAsModule = function (target) { return __defProp(target, "__esModule", { value: true }); };
var __commonJS = function (cb, mod) { return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}; };
var __export = function (target, all) {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = function (target, module2, copyDefault, desc) {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        var _loop_1 = function (key) {
            if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
                __defProp(target, key, { get: function () { return module2[key]; }, enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
        };
        for (var _i = 0, _a = __getOwnPropNames(module2); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
    }
    return target;
};
var __toESM = function (module2, isNodeMode) {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: function () { return module2.default; }, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ (function (cache) {
    return function (module2, temp) {
        return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
    };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
// node_modules/@middy/core/index.js
var require_core = __commonJS({
    "node_modules/@middy/core/index.js": function (exports, module2) {
        "use strict";
        var _this = this;
        var middy2 = function (baseHandler, plugin) {
            if (baseHandler === void 0) { baseHandler = function () {
            }; }
            var _plugin$beforePrefetc;
            plugin === null || plugin === void 0 ? void 0 : (_plugin$beforePrefetc = plugin.beforePrefetch) === null || _plugin$beforePrefetc === void 0 ? void 0 : _plugin$beforePrefetc.call(plugin);
            var beforeMiddlewares = [];
            var afterMiddlewares = [];
            var onErrorMiddlewares = [];
            var instance = function (event, context) {
                if (event === void 0) { event = {}; }
                if (context === void 0) { context = {}; }
                var _plugin$requestStart;
                plugin === null || plugin === void 0 ? void 0 : (_plugin$requestStart = plugin.requestStart) === null || _plugin$requestStart === void 0 ? void 0 : _plugin$requestStart.call(plugin);
                var request = {
                    event: event,
                    context: context,
                    response: void 0,
                    error: void 0,
                    internal: {}
                };
                return runRequest(request, __spreadArray([], beforeMiddlewares, true), baseHandler, __spreadArray([], afterMiddlewares, true), __spreadArray([], onErrorMiddlewares, true), plugin);
            };
            instance.use = function (middlewares) {
                if (Array.isArray(middlewares)) {
                    for (var _i = 0, middlewares_1 = middlewares; _i < middlewares_1.length; _i++) {
                        var middleware = middlewares_1[_i];
                        instance.applyMiddleware(middleware);
                    }
                    return instance;
                }
                return instance.applyMiddleware(middlewares);
            };
            instance.applyMiddleware = function (middleware) {
                var before = middleware.before, after = middleware.after, onError = middleware.onError;
                if (!before && !after && !onError) {
                    throw new Error('Middleware must be an object containing at least one key among "before", "after", "onError"');
                }
                if (before)
                    instance.before(before);
                if (after)
                    instance.after(after);
                if (onError)
                    instance.onError(onError);
                return instance;
            };
            instance.before = function (beforeMiddleware) {
                beforeMiddlewares.push(beforeMiddleware);
                return instance;
            };
            instance.after = function (afterMiddleware) {
                afterMiddlewares.unshift(afterMiddleware);
                return instance;
            };
            instance.onError = function (onErrorMiddleware) {
                onErrorMiddlewares.push(onErrorMiddleware);
                return instance;
            };
            instance.__middlewares = {
                before: beforeMiddlewares,
                after: afterMiddlewares,
                onError: onErrorMiddlewares
            };
            return instance;
        };
        var runRequest = function (request, beforeMiddlewares, baseHandler, afterMiddlewares, onErrorMiddlewares, plugin) { return __awaiter(_this, void 0, void 0, function () {
            var _plugin$beforeHandler, _plugin$afterHandler, _a, e_1, e2_1, _plugin$requestEnd;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 10, 12]);
                        return [4 /*yield*/, runMiddlewares(request, beforeMiddlewares, plugin)];
                    case 1:
                        _b.sent();
                        if (!(request.response === void 0)) return [3 /*break*/, 4];
                        plugin === null || plugin === void 0 ? void 0 : (_plugin$beforeHandler = plugin.beforeHandler) === null || _plugin$beforeHandler === void 0 ? void 0 : _plugin$beforeHandler.call(plugin);
                        _a = request;
                        return [4 /*yield*/, baseHandler(request.event, request.context)];
                    case 2:
                        _a.response = _b.sent();
                        plugin === null || plugin === void 0 ? void 0 : (_plugin$afterHandler = plugin.afterHandler) === null || _plugin$afterHandler === void 0 ? void 0 : _plugin$afterHandler.call(plugin);
                        return [4 /*yield*/, runMiddlewares(request, afterMiddlewares, plugin)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 12];
                    case 5:
                        e_1 = _b.sent();
                        request.response = void 0;
                        request.error = e_1;
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, runMiddlewares(request, onErrorMiddlewares, plugin)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e2_1 = _b.sent();
                        e2_1.originalError = request.error;
                        request.error = e2_1;
                        throw request.error;
                    case 9:
                        if (request.response === void 0)
                            throw request.error;
                        return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, (plugin === null || plugin === void 0 ? void 0 : (_plugin$requestEnd = plugin.requestEnd) === null || _plugin$requestEnd === void 0 ? void 0 : _plugin$requestEnd.call(plugin, request))];
                    case 11:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, request.response];
                }
            });
        }); };
        var runMiddlewares = function (request, middlewares, plugin) { return __awaiter(_this, void 0, void 0, function () {
            var _i, middlewares_2, nextMiddleware, _plugin$beforeMiddlew, _plugin$afterMiddlewa, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, middlewares_2 = middlewares;
                        _a.label = 1;
                    case 1:
                        if (!(_i < middlewares_2.length)) return [3 /*break*/, 4];
                        nextMiddleware = middlewares_2[_i];
                        plugin === null || plugin === void 0 ? void 0 : (_plugin$beforeMiddlew = plugin.beforeMiddleware) === null || _plugin$beforeMiddlew === void 0 ? void 0 : _plugin$beforeMiddlew.call(plugin, nextMiddleware === null || nextMiddleware === void 0 ? void 0 : nextMiddleware.name);
                        return [4 /*yield*/, (nextMiddleware === null || nextMiddleware === void 0 ? void 0 : nextMiddleware(request))];
                    case 2:
                        res = _a.sent();
                        plugin === null || plugin === void 0 ? void 0 : (_plugin$afterMiddlewa = plugin.afterMiddleware) === null || _plugin$afterMiddlewa === void 0 ? void 0 : _plugin$afterMiddlewa.call(plugin, nextMiddleware === null || nextMiddleware === void 0 ? void 0 : nextMiddleware.name);
                        if (res !== void 0) {
                            request.response = res;
                            return [2 /*return*/];
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        module2.exports = middy2;
    }
});
// node_modules/@middy/util/codes.json
var require_codes = __commonJS({
    "node_modules/@middy/util/codes.json": function (exports, module2) {
        module2.exports = {
            "100": "Continue",
            "101": "Switching Protocols",
            "102": "Processing",
            "103": "Early Hints",
            "200": "OK",
            "201": "Created",
            "202": "Accepted",
            "203": "Non-Authoritative Information",
            "204": "No Content",
            "205": "Reset Content",
            "206": "Partial Content",
            "207": "Multi-Status",
            "208": "Already Reported",
            "226": "IM Used",
            "300": "Multiple Choices",
            "301": "Moved Permanently",
            "302": "Found",
            "303": "See Other",
            "304": "Not Modified",
            "305": "Use Proxy",
            "306": "(Unused)",
            "307": "Temporary Redirect",
            "308": "Permanent Redirect",
            "400": "Bad Request",
            "401": "Unauthorized",
            "402": "Payment Required",
            "403": "Forbidden",
            "404": "Not Found",
            "405": "Method Not Allowed",
            "406": "Not Acceptable",
            "407": "Proxy Authentication Required",
            "408": "Request Timeout",
            "409": "Conflict",
            "410": "Gone",
            "411": "Length Required",
            "412": "Precondition Failed",
            "413": "Payload Too Large",
            "414": "URI Too Long",
            "415": "Unsupported Media Type",
            "416": "Range Not Satisfiable",
            "417": "Expectation Failed",
            "418": "I'm a teapot",
            "421": "Misdirected Request",
            "422": "Unprocessable Entity",
            "423": "Locked",
            "424": "Failed Dependency",
            "425": "Unordered Collection",
            "426": "Upgrade Required",
            "428": "Precondition Required",
            "429": "Too Many Requests",
            "431": "Request Header Fields Too Large",
            "451": "Unavailable For Legal Reasons",
            "500": "Internal Server Error",
            "501": "Not Implemented",
            "502": "Bad Gateway",
            "503": "Service Unavailable",
            "504": "Gateway Timeout",
            "505": "HTTP Version Not Supported",
            "506": "Variant Also Negotiates",
            "507": "Insufficient Storage",
            "508": "Loop Detected",
            "509": "Bandwidth Limit Exceeded",
            "510": "Not Extended",
            "511": "Network Authentication Required"
        };
    }
});
// node_modules/@middy/util/index.js
var require_util = __commonJS({
    "node_modules/@middy/util/index.js": function (exports, module2) {
        "use strict";
        var _this = this;
        var Agent = require("https").Agent;
        var awsClientDefaultOptions = {
            httpOptions: {
                agent: new Agent({
                    secureProtocol: "TLSv1_2_method"
                })
            }
        };
        var createPrefetchClient = function (options) {
            var awsClientOptions = __spreadValues(__spreadValues({}, awsClientDefaultOptions), options.awsClientOptions);
            var client = new options.AwsClient(awsClientOptions);
            if (options.awsClientCapture) {
                return options.awsClientCapture(client);
            }
            return client;
        };
        var createClient = function (options, request) { return __awaiter(_this, void 0, void 0, function () {
            var awsClientCredentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        awsClientCredentials = {};
                        if (!options.awsClientAssumeRole) return [3 /*break*/, 2];
                        if (!request)
                            throw new Error("Request required when assuming role");
                        return [4 /*yield*/, getInternal({
                                credentials: options.awsClientAssumeRole
                            }, request)];
                    case 1:
                        awsClientCredentials = _a.sent();
                        _a.label = 2;
                    case 2:
                        awsClientCredentials = __spreadValues(__spreadValues({}, awsClientCredentials), options.awsClientOptions);
                        return [2 /*return*/, createPrefetchClient(__spreadProps(__spreadValues({}, options), {
                                awsClientOptions: awsClientCredentials
                            }))];
                }
            });
        }); };
        var canPrefetch = function (options) {
            return !(options !== null && options !== void 0 && options.awsClientAssumeRole) && !(options !== null && options !== void 0 && options.disablePrefetch);
        };
        var getInternal = function (variables, request) { return __awaiter(_this, void 0, void 0, function () {
            var keys, values, promises, _loop_2, _valuePromise, _i, values_1, internalKey, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!variables || !request)
                            return [2 /*return*/, {}];
                        keys = [];
                        values = [];
                        if (variables === true) {
                            keys = values = Object.keys(request.internal);
                        }
                        else if (typeof variables === "string") {
                            keys = values = [variables];
                        }
                        else if (Array.isArray(variables)) {
                            keys = values = variables;
                        }
                        else if (typeof variables === "object") {
                            keys = Object.keys(variables);
                            values = Object.values(variables);
                        }
                        promises = [];
                        _loop_2 = function (internalKey) {
                            var pathOptionKey = internalKey.split(".");
                            var rootOptionKey = pathOptionKey.shift();
                            var valuePromise = request.internal[rootOptionKey];
                            if (typeof ((_valuePromise = valuePromise) === null || _valuePromise === void 0 ? void 0 : _valuePromise.then) !== "function") {
                                valuePromise = Promise.resolve(valuePromise);
                            }
                            promises.push(valuePromise.then(function (value) { return pathOptionKey.reduce(function (p, c) { return p === null || p === void 0 ? void 0 : p[c]; }, value); }));
                        };
                        for (_i = 0, values_1 = values; _i < values_1.length; _i++) {
                            internalKey = values_1[_i];
                            _loop_2(internalKey);
                        }
                        return [4 /*yield*/, Promise.allSettled(promises)];
                    case 1:
                        values = _a.sent();
                        errors = values.filter(function (res) { return res.status === "rejected"; }).map(function (res) { return res.reason.message; });
                        if (errors.length)
                            throw new Error(JSON.stringify(errors));
                        return [2 /*return*/, keys.reduce(function (obj, key, index) {
                                var _a;
                                return __spreadProps(__spreadValues({}, obj), (_a = {},
                                    _a[sanitizeKey(key)] = values[index].value,
                                    _a));
                            }, {})];
                }
            });
        }); };
        var sanitizeKeyPrefixLeadingNumber = /^([0-9])/;
        var sanitizeKeyRemoveDisallowedChar = /[^a-zA-Z0-9]+/g;
        var sanitizeKey = function (key) {
            return key.replace(sanitizeKeyPrefixLeadingNumber, "_$1").replace(sanitizeKeyRemoveDisallowedChar, "_");
        };
        var cache = {};
        var processCache = function (options, fetch, request) {
            if (fetch === void 0) { fetch = function () { return void 0; }; }
            var cacheExpiry = options.cacheExpiry, cacheKey = options.cacheKey;
            if (cacheExpiry) {
                var cached = getCache(cacheKey);
                var unexpired = cached && (cacheExpiry < 0 || cached.expiry > Date.now());
                if (unexpired && cached.modified) {
                    var value2 = fetch(request, cached.value);
                    cache[cacheKey] = {
                        value: __spreadValues(__spreadValues({}, cached.value), value2),
                        expiry: cached.expiry
                    };
                    return cache[cacheKey];
                }
                if (unexpired) {
                    return __spreadProps(__spreadValues({}, cached), {
                        cache: true
                    });
                }
            }
            var value = fetch(request);
            var expiry = Date.now() + cacheExpiry;
            if (cacheExpiry) {
                cache[cacheKey] = {
                    value: value,
                    expiry: expiry
                };
            }
            return {
                value: value,
                expiry: expiry
            };
        };
        var getCache = function (key) {
            return cache[key];
        };
        var modifyCache = function (cacheKey, value) {
            if (!cache[cacheKey])
                return;
            cache[cacheKey] = __spreadProps(__spreadValues({}, cache[cacheKey]), {
                value: value,
                modified: true
            });
        };
        var clearCache = function (keys) {
            if (keys === void 0) { keys = null; }
            var _keys;
            keys = (_keys = keys) !== null && _keys !== void 0 ? _keys : Object.keys(cache);
            if (!Array.isArray(keys))
                keys = [keys];
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var cacheKey = keys_1[_i];
                cache[cacheKey] = void 0;
            }
        };
        var jsonSafeParse = function (string, reviver) {
            if (typeof string !== "string")
                return string;
            var firstChar = string[0];
            if (firstChar !== "{" && firstChar !== "[" && firstChar !== '"')
                return string;
            try {
                return JSON.parse(string, reviver);
            }
            catch (e) {
            }
            return string;
        };
        var normalizeHttpResponse = function (response) {
            var _response$headers, _response;
            if (response === void 0) {
                response = {};
            }
            else if (Array.isArray(response) || typeof response !== "object" || response === null) {
                response = {
                    body: response
                };
            }
            response.headers = (_response$headers = (_response = response) === null || _response === void 0 ? void 0 : _response.headers) !== null && _response$headers !== void 0 ? _response$headers : {};
            return response;
        };
        var statuses = require_codes();
        var inherits = require("util").inherits;
        var createErrorRegexp = /[^a-zA-Z]/g;
        var createError = function (code, message, properties) {
            if (properties === void 0) { properties = {}; }
            var name = statuses[code].replace(createErrorRegexp, "");
            var className = name.substr(-5) !== "Error" ? name + "Error" : name;
            function HttpError(message2) {
                var msg = message2 !== null && message2 !== void 0 ? message2 : statuses[code];
                var err = new Error(msg);
                Error.captureStackTrace(err, HttpError);
                Object.setPrototypeOf(err, HttpError.prototype);
                Object.defineProperty(err, "message", {
                    enumerable: true,
                    configurable: true,
                    value: msg,
                    writable: true
                });
                Object.defineProperty(err, "name", {
                    enumerable: false,
                    configurable: true,
                    value: className,
                    writable: true
                });
                return err;
            }
            inherits(HttpError, Error);
            var desc = Object.getOwnPropertyDescriptor(HttpError, "name");
            desc.value = className;
            Object.defineProperty(HttpError, "name", desc);
            Object.assign(HttpError.prototype, {
                status: code,
                statusCode: code,
                expose: code < 500
            }, properties);
            return new HttpError(message);
        };
        module2.exports = {
            createPrefetchClient: createPrefetchClient,
            createClient: createClient,
            canPrefetch: canPrefetch,
            getInternal: getInternal,
            sanitizeKey: sanitizeKey,
            processCache: processCache,
            getCache: getCache,
            modifyCache: modifyCache,
            clearCache: clearCache,
            jsonSafeParse: jsonSafeParse,
            normalizeHttpResponse: normalizeHttpResponse,
            createError: createError
        };
    }
});
// node_modules/@middy/http-json-body-parser/index.js
var require_http_json_body_parser = __commonJS({
    "node_modules/@middy/http-json-body-parser/index.js": function (exports, module2) {
        "use strict";
        var _this = this;
        var mimePattern = /^application\/(.+\+)?json(;.*)?$/;
        var defaults = {
            reviver: void 0
        };
        var httpJsonBodyParserMiddleware = function (opts) {
            if (opts === void 0) { opts = {}; }
            var options = __spreadValues(__spreadValues({}, defaults), opts);
            var httpJsonBodyParserMiddlewareBefore = function (request) { return __awaiter(_this, void 0, void 0, function () {
                var _headers$ContentType, _a, headers, body, contentTypeHeader, data, createError;
                return __generator(this, function (_b) {
                    _a = request.event, headers = _a.headers, body = _a.body;
                    contentTypeHeader = (_headers$ContentType = headers === null || headers === void 0 ? void 0 : headers["Content-Type"]) !== null && _headers$ContentType !== void 0 ? _headers$ContentType : headers === null || headers === void 0 ? void 0 : headers["content-type"];
                    if (mimePattern.test(contentTypeHeader)) {
                        try {
                            data = request.event.isBase64Encoded ? Buffer.from(body, "base64").toString() : body;
                            request.event.rawBody = body;
                            request.event.body = JSON.parse(data, options.reviver);
                        }
                        catch (err) {
                            createError = require_util().createError;
                            throw createError(422, "Content type defined as JSON but an invalid JSON was provided");
                        }
                    }
                    return [2 /*return*/];
                });
            }); };
            return {
                before: httpJsonBodyParserMiddlewareBefore
            };
        };
        module2.exports = httpJsonBodyParserMiddleware;
    }
});
// src/functions/hello/handler.ts
var handler_exports = {};
__export(handler_exports, {
    main: function () { return main; }
});
// src/libs/api-gateway.ts
var formatJSONResponse = function (response) {
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    };
};
// src/libs/lambda.ts
var import_core = __toESM(require_core());
var import_http_json_body_parser = __toESM(require_http_json_body_parser());
var middyfy = function (handler) {
    return (0, import_core.default)(handler).use((0, import_http_json_body_parser.default)());
};
// src/functions/hello/handler.ts
var hello = function (event) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, formatJSONResponse({
                message: "Hello ".concat(event.body.name, ", welcome to the exciting Serverless world!"),
                event: event
            })];
    });
}); };
var main = middyfy(hello);
module.exports = __toCommonJS(handler_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    main: main
});
//# sourceMappingURL=handler.js.map
//# sourceMappingURL=handler.js.map