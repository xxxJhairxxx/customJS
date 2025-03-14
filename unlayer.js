var unlayer;
!(function () {
    var e = {
            90880: function (e, t, r) {
                "use strict";
                r.d(t, {
                    Zy: function () {
                        return u;
                    },
                });
                const n = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
                    i = (e) => {
                        if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
                        const t = e.match(n);
                        if (!t) throw new Error(`Invalid argument not valid semver ('${e}' received)`);
                        return t.shift(), t;
                    },
                    a = (e) => "*" === e || "x" === e || "X" === e,
                    o = (e) => {
                        const t = parseInt(e, 10);
                        return isNaN(t) ? e : t;
                    },
                    s = (e, t) => {
                        if (a(e) || a(t)) return 0;
                        const [r, n] = ((e, t) => (typeof e != typeof t ? [String(e), String(t)] : [e, t]))(o(e), o(t));
                        return r > n ? 1 : r < n ? -1 : 0;
                    },
                    l = (e, t) => {
                        for (let r = 0; r < Math.max(e.length, t.length); r++) {
                            const n = s(e[r] || "0", t[r] || "0");
                            if (0 !== n) return n;
                        }
                        return 0;
                    },
                    u = (e, t) => {
                        const r = i(e),
                            n = i(t),
                            a = r.pop(),
                            o = n.pop(),
                            s = l(r, n);
                        return 0 !== s ? s : a && o ? l(a.split("."), o.split(".")) : a || o ? (a ? -1 : 1) : 0;
                    };
            },
        },
        t = {};
    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var a = (t[n] = { exports: {} });
        return e[n](a, a.exports, r), a.exports;
    }
    (r.d = function (e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = "/");
    var n,
        i,
        a = {};
    (Window.prototype.forceJURL = !1),
        (function (e) {
            "use strict";
            var t = !1;
            if (!e.forceJURL)
                try {
                    var r = new URL("b", "http://a");
                    (r.pathname = "c%20d"), (t = "http://a/c%20d" === r.href);
                } catch (e) {}
            if (!t) {
                var n = Object.create(null);
                (n.ftp = 21), (n.file = 0), (n.gopher = 70), (n.http = 80), (n.https = 443), (n.ws = 80), (n.wss = 443);
                var i = Object.create(null);
                (i["%2e"] = "."), (i[".%2e"] = ".."), (i["%2e."] = ".."), (i["%2e%2e"] = "..");
                var a = void 0,
                    o = /[a-zA-Z]/,
                    s = /[a-zA-Z0-9+\-.]/;
                y.prototype = {
                    toString: function () {
                        return this.href;
                    },
                    get href() {
                        if (this._isInvalid) return this._url;
                        var e = "";
                        return (
                            ("" == this._username && null == this._password) || (e = this._username + (null != this._password ? ":" + this._password : "") + "@"),
                            this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
                        );
                    },
                    set href(e) {
                        p.call(this), v.call(this, e);
                    },
                    get protocol() {
                        return this._scheme + ":";
                    },
                    set protocol(e) {
                        this._isInvalid || v.call(this, e + ":", "scheme start");
                    },
                    get host() {
                        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
                    },
                    set host(e) {
                        !this._isInvalid && this._isRelative && v.call(this, e, "host");
                    },
                    get hostname() {
                        return this._host;
                    },
                    set hostname(e) {
                        !this._isInvalid && this._isRelative && v.call(this, e, "hostname");
                    },
                    get port() {
                        return this._port;
                    },
                    set port(e) {
                        !this._isInvalid && this._isRelative && v.call(this, e, "port");
                    },
                    get pathname() {
                        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
                    },
                    set pathname(e) {
                        !this._isInvalid && this._isRelative && ((this._path = []), v.call(this, e, "relative path start"));
                    },
                    get search() {
                        return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
                    },
                    set search(e) {
                        !this._isInvalid && this._isRelative && ((this._query = "?"), "?" == e[0] && (e = e.slice(1)), v.call(this, e, "query"));
                    },
                    get hash() {
                        return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
                    },
                    set hash(e) {
                        this._isInvalid || (e ? ((this._fragment = "#"), "#" == e[0] && (e = e.slice(1)), v.call(this, e, "fragment")) : (this._fragment = ""));
                    },
                    get origin() {
                        var e;
                        if (this._isInvalid || !this._scheme) return "";
                        switch (this._scheme) {
                            case "data":
                            case "file":
                            case "javascript":
                            case "mailto":
                                return "null";
                        }
                        return (e = this.host) ? this._scheme + "://" + e : "";
                    },
                };
                var l = e.URL;
                l &&
                    ((y.createObjectURL = function (e) {
                        return l.createObjectURL.apply(l, arguments);
                    }),
                    (y.revokeObjectURL = function (e) {
                        l.revokeObjectURL(e);
                    })),
                    (e.URL = y);
            }
            function u(e) {
                return void 0 !== n[e];
            }
            function c() {
                p.call(this), (this._isInvalid = !0);
            }
            function f(e) {
                return "" == e && c.call(this), e.toLowerCase();
            }
            function h(e) {
                var t = e.charCodeAt(0);
                return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e);
            }
            function d(e) {
                var t = e.charCodeAt(0);
                return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e);
            }
            function v(e, t, r) {
                function l(e) {
                    b.push(e);
                }
                var v = t || "scheme start",
                    p = 0,
                    y = "",
                    m = !1,
                    g = !1,
                    b = [];
                e: for (; (e[p - 1] != a || 0 == p) && !this._isInvalid; ) {
                    var _ = e[p];
                    switch (v) {
                        case "scheme start":
                            if (!_ || !o.test(_)) {
                                if (t) {
                                    l("Invalid scheme.");
                                    break e;
                                }
                                (y = ""), (v = "no scheme");
                                continue;
                            }
                            (y += _.toLowerCase()), (v = "scheme");
                            break;
                        case "scheme":
                            if (_ && s.test(_)) y += _.toLowerCase();
                            else {
                                if (":" != _) {
                                    if (t) {
                                        if (a == _) break e;
                                        l("Code point not allowed in scheme: " + _);
                                        break e;
                                    }
                                    (y = ""), (p = 0), (v = "no scheme");
                                    continue;
                                }
                                if (((this._scheme = y), (y = ""), t)) break e;
                                u(this._scheme) && (this._isRelative = !0),
                                    (v = "file" == this._scheme ? "relative" : this._isRelative && r && r._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data");
                            }
                            break;
                        case "scheme data":
                            "?" == _ ? ((this._query = "?"), (v = "query")) : "#" == _ ? ((this._fragment = "#"), (v = "fragment")) : a != _ && "\t" != _ && "\n" != _ && "\r" != _ && (this._schemeData += h(_));
                            break;
                        case "no scheme":
                            if (r && u(r._scheme)) {
                                v = "relative";
                                continue;
                            }
                            l("Missing scheme."), c.call(this);
                            break;
                        case "relative or authority":
                            if ("/" != _ || "/" != e[p + 1]) {
                                l("Expected /, got: " + _), (v = "relative");
                                continue;
                            }
                            v = "authority ignore slashes";
                            break;
                        case "relative":
                            if (((this._isRelative = !0), "file" != this._scheme && (this._scheme = r._scheme), a == _)) {
                                (this._host = r._host), (this._port = r._port), (this._path = r._path.slice()), (this._query = r._query), (this._username = r._username), (this._password = r._password);
                                break e;
                            }
                            if ("/" == _ || "\\" == _) "\\" == _ && l("\\ is an invalid code point."), (v = "relative slash");
                            else if ("?" == _) (this._host = r._host), (this._port = r._port), (this._path = r._path.slice()), (this._query = "?"), (this._username = r._username), (this._password = r._password), (v = "query");
                            else {
                                if ("#" != _) {
                                    var w = e[p + 1],
                                        k = e[p + 2];
                                    ("file" != this._scheme || !o.test(_) || (":" != w && "|" != w) || (a != k && "/" != k && "\\" != k && "?" != k && "#" != k)) &&
                                        ((this._host = r._host), (this._port = r._port), (this._username = r._username), (this._password = r._password), (this._path = r._path.slice()), this._path.pop()),
                                        (v = "relative path");
                                    continue;
                                }
                                (this._host = r._host),
                                    (this._port = r._port),
                                    (this._path = r._path.slice()),
                                    (this._query = r._query),
                                    (this._fragment = "#"),
                                    (this._username = r._username),
                                    (this._password = r._password),
                                    (v = "fragment");
                            }
                            break;
                        case "relative slash":
                            if ("/" != _ && "\\" != _) {
                                "file" != this._scheme && ((this._host = r._host), (this._port = r._port), (this._username = r._username), (this._password = r._password)), (v = "relative path");
                                continue;
                            }
                            "\\" == _ && l("\\ is an invalid code point."), (v = "file" == this._scheme ? "file host" : "authority ignore slashes");
                            break;
                        case "authority first slash":
                            if ("/" != _) {
                                l("Expected '/', got: " + _), (v = "authority ignore slashes");
                                continue;
                            }
                            v = "authority second slash";
                            break;
                        case "authority second slash":
                            if (((v = "authority ignore slashes"), "/" != _)) {
                                l("Expected '/', got: " + _);
                                continue;
                            }
                            break;
                        case "authority ignore slashes":
                            if ("/" != _ && "\\" != _) {
                                v = "authority";
                                continue;
                            }
                            l("Expected authority, got: " + _);
                            break;
                        case "authority":
                            if ("@" == _) {
                                m && (l("@ already seen."), (y += "%40")), (m = !0);
                                for (var M = 0; M < y.length; M++) {
                                    var S = y[M];
                                    if ("\t" != S && "\n" != S && "\r" != S)
                                        if (":" != S || null !== this._password) {
                                            var T = h(S);
                                            null !== this._password ? (this._password += T) : (this._username += T);
                                        } else this._password = "";
                                    else l("Invalid whitespace in authority.");
                                }
                                y = "";
                            } else {
                                if (a == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _) {
                                    (p -= y.length), (y = ""), (v = "host");
                                    continue;
                                }
                                y += _;
                            }
                            break;
                        case "file host":
                            if (a == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _) {
                                2 != y.length || !o.test(y[0]) || (":" != y[1] && "|" != y[1]) ? (0 == y.length || ((this._host = f.call(this, y)), (y = "")), (v = "relative path start")) : (v = "relative path");
                                continue;
                            }
                            "\t" == _ || "\n" == _ || "\r" == _ ? l("Invalid whitespace in file host.") : (y += _);
                            break;
                        case "host":
                        case "hostname":
                            if (":" != _ || g) {
                                if (a == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _) {
                                    if (((this._host = f.call(this, y)), (y = ""), (v = "relative path start"), t)) break e;
                                    continue;
                                }
                                "\t" != _ && "\n" != _ && "\r" != _ ? ("[" == _ ? (g = !0) : "]" == _ && (g = !1), (y += _)) : l("Invalid code point in host/hostname: " + _);
                            } else if (((this._host = f.call(this, y)), (y = ""), (v = "port"), "hostname" == t)) break e;
                            break;
                        case "port":
                            if (/[0-9]/.test(_)) y += _;
                            else {
                                if (a == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _ || t) {
                                    if ("" != y) {
                                        var j = parseInt(y, 10);
                                        j != n[this._scheme] && (this._port = j + ""), (y = "");
                                    }
                                    if (t) break e;
                                    v = "relative path start";
                                    continue;
                                }
                                "\t" == _ || "\n" == _ || "\r" == _ ? l("Invalid code point in port: " + _) : c.call(this);
                            }
                            break;
                        case "relative path start":
                            if (("\\" == _ && l("'\\' not allowed in path."), (v = "relative path"), "/" != _ && "\\" != _)) continue;
                            break;
                        case "relative path":
                            var I;
                            a != _ && "/" != _ && "\\" != _ && (t || ("?" != _ && "#" != _))
                                ? "\t" != _ && "\n" != _ && "\r" != _ && (y += h(_))
                                : ("\\" == _ && l("\\ not allowed in relative path."),
                                  (I = i[y.toLowerCase()]) && (y = I),
                                  ".." == y
                                      ? (this._path.pop(), "/" != _ && "\\" != _ && this._path.push(""))
                                      : "." == y && "/" != _ && "\\" != _
                                      ? this._path.push("")
                                      : "." != y && ("file" == this._scheme && 0 == this._path.length && 2 == y.length && o.test(y[0]) && "|" == y[1] && (y = y[0] + ":"), this._path.push(y)),
                                  (y = ""),
                                  "?" == _ ? ((this._query = "?"), (v = "query")) : "#" == _ && ((this._fragment = "#"), (v = "fragment")));
                            break;
                        case "query":
                            t || "#" != _ ? a != _ && "\t" != _ && "\n" != _ && "\r" != _ && (this._query += d(_)) : ((this._fragment = "#"), (v = "fragment"));
                            break;
                        case "fragment":
                            a != _ && "\t" != _ && "\n" != _ && "\r" != _ && (this._fragment += _);
                    }
                    p++;
                }
            }
            function p() {
                (this._scheme = ""),
                    (this._schemeData = ""),
                    (this._username = ""),
                    (this._password = null),
                    (this._host = ""),
                    (this._port = ""),
                    (this._path = []),
                    (this._query = ""),
                    (this._fragment = ""),
                    (this._isInvalid = !1),
                    (this._isRelative = !1);
            }
            function y(e, t) {
                void 0 === t || t instanceof y || (t = new y(String(t))), (this._url = "" + e), p.call(this);
                var r = this._url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                v.call(this, r, null, t);
            }
        })(window),
        (function (e) {
            var t = "currentScript",
                r = e.getElementsByTagName("script");
            t in e ||
                Object.defineProperty(e, t, {
                    get: function () {
                        try {
                            throw new Error();
                        } catch (n) {
                            var e,
                                t = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack) || [!1])[1];
                            for (e in r) if (r[e].src == t || "interactive" == r[e].readyState) return r[e];
                            return null;
                        }
                    },
                });
        })(document),
        (i = (n = new URL(document.currentScript.src)).href.substring(0, n.href.lastIndexOf("/") + 1)),
        (r.p = i),
        (function () {
            "use strict";
            function e(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function t(e) {
                return (
                    (t =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    t(e)
                );
            }
            function n(r, i) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = a._path,
                    s = void 0 === o ? [] : o,
                    l = a._visited,
                    u = void 0 === l ? new WeakMap() : l,
                    c = [];
                if (r && u.has(r)) return c;
                var f =
                    "function" == typeof i
                        ? i
                        : function (e) {
                              return e === i;
                          };
                f(r) && c.push(s);
                try {
                    (Array.isArray(r) || (r && "object" === t(r))) &&
                        (u.set(r, !0),
                        Object.entries(r).forEach(function (t) {
                            var r,
                                i,
                                a =
                                    ((i = 2),
                                    (function (e) {
                                        if (Array.isArray(e)) return e;
                                    })((r = t)) ||
                                        (function (e, t) {
                                            var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                            if (null != r) {
                                                var n,
                                                    i,
                                                    a,
                                                    o,
                                                    s = [],
                                                    l = !0,
                                                    u = !1;
                                                try {
                                                    if (((a = (r = r.call(e)).next), 0 === t)) {
                                                        if (Object(r) !== r) return;
                                                        l = !1;
                                                    } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
                                                } catch (e) {
                                                    (u = !0), (i = e);
                                                } finally {
                                                    try {
                                                        if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                                    } finally {
                                                        if (u) throw i;
                                                    }
                                                }
                                                return s;
                                            }
                                        })(r, i) ||
                                        (function (t, r) {
                                            if (t) {
                                                if ("string" == typeof t) return e(t, r);
                                                var n = {}.toString.call(t).slice(8, -1);
                                                return (
                                                    "Object" === n && t.constructor && (n = t.constructor.name),
                                                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, r) : void 0
                                                );
                                            }
                                        })(r, i) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })()),
                                o = a[0];
                            n(a[1], f, { _path: s.concat(o), _visited: u }).forEach(function (e) {
                                return c.push(e);
                            });
                        }));
                } catch (e) {
                    console.error(e);
                }
                return c;
            }
            function i(e) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    i(e)
                );
            }
            var o, s;
            function l(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n);
                }
            }
            function u(e, t, r) {
                return (t = c(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function c(e) {
                var t = (function (e) {
                    if ("object" != i(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != i(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == i(t) ? t : t + "";
            }
            r.d(a, {
                default: function () {
                    return V;
                },
            }),
                (window.__unlayer_lastFrameId = window.__unlayer_lastFrameId || 0),
                (window.__unlayer_multipleEditors = null === (o = window.__unlayer_multipleEditors) || void 0 === o || o),
                (window.__unlayer_originalFunctionReferences = null === (s = window.__unlayer_originalFunctionReferences) || void 0 === s || s);
            var f = {},
                h = (function () {
                    return (
                        (e = function e(t) {
                            var r = this;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                u(this, "id", void 0),
                                u(this, "ready", void 0),
                                u(this, "iframe", void 0),
                                u(this, "messages", void 0),
                                u(this, "callbackId", void 0),
                                u(this, "callbacks", void 0),
                                u(this, "destroy", function () {
                                    var e;
                                    window.removeEventListener("message", r.onWindowMessage, !1), null === (e = r.iframe) || void 0 === e || e.remove(), delete r.iframe;
                                }),
                                u(this, "onWindowMessage", function (e) {
                                    var t, n, i;
                                    if ((null == e ? void 0 : e.source) === (null === (t = r.iframe) || void 0 === t ? void 0 : t.contentWindow))
                                        if ("unlayer:destroy" !== (null == e || null === (n = e.data) || void 0 === n ? void 0 : n.action)) {
                                            var a,
                                                o = window.__unlayer_multipleEditors ? (null == e || null === (i = e.data) || void 0 === i ? void 0 : i.frameId) : 1;
                                            o && (null === (a = f[o]) || void 0 === a || a.receiveMessage(e));
                                        } else r.destroy();
                                }),
                                (this.id = ++window.__unlayer_lastFrameId),
                                (f[this.id] = this),
                                (this.ready = !1),
                                (this.iframe = this.createIframe(t)),
                                (this.messages = []),
                                (this.iframe.onload = function () {
                                    (r.ready = !0), r.flushMessages();
                                }),
                                (this.callbackId = 0),
                                (this.callbacks = {}),
                                window.removeEventListener("message", this.onWindowMessage, !1),
                                window.addEventListener("message", this.onWindowMessage, !1);
                        }),
                        (t = [
                            {
                                key: "createIframe",
                                value: function (e) {
                                    var t = document.createElement("iframe");
                                    return (
                                        (t.src = e),
                                        (t.frameBorder = "0"),
                                        (t.width = "100%"),
                                        (t.height = "100%"),
                                        (t.style.minWidth = "1024px"),
                                        (t.style.minHeight = "100%"),
                                        (t.style.height = "100%"),
                                        (t.style.width = "100%"),
                                        (t.style.border = "0px"),
                                        t
                                    );
                                },
                            },
                            {
                                key: "appendTo",
                                value: function (e) {
                                    this.iframe && e.appendChild(this.iframe);
                                },
                            },
                            {
                                key: "postMessage",
                                value: function (e, t) {
                                    this.scheduleMessage(Object.assign({ action: e }, t)), this.flushMessages();
                                },
                            },
                            {
                                key: "withMessage",
                                value: function (e, t, r) {
                                    var n = this.callbackId++;
                                    (this.callbacks[n] = r), this.postMessage(e, Object.assign({ frameId: this.id, callbackId: n }, t));
                                },
                            },
                            {
                                key: "_preprocessMessageFunctions",
                                value: function (e) {
                                    var t = this,
                                        r = Object.assign({}, e, { __unlayer_functions_map: Object.assign({}, null == e ? void 0 : e.__unlayer_functions_map, {}) });
                                    return (
                                        n(e, function (e) {
                                            return "function" == typeof e;
                                        }).forEach(function (e) {
                                            var n,
                                                i = e.slice(-1)[0],
                                                a = "onCreateOption" === i;
                                            try {
                                                n = e.reduce(function (e, t) {
                                                    return e[t];
                                                }, r);
                                                var o =
                                                    e.length > 1
                                                        ? e.slice(0, -1).reduce(function (e, t) {
                                                              return e[t];
                                                          }, r)
                                                        : r;
                                                if (!window.__unlayer_originalFunctionReferences && !a) return void (o[i] = "".concat(n));
                                                delete o[i];
                                            } catch (e) {
                                                console.error(e);
                                            }
                                            var s = t.callbackId++,
                                                l = t.id;
                                            t.callbacks[s] = n;
                                            var u = a && !window.__unlayer_originalFunctionReferences ? e.join(".") : "".concat(e.join("."), "_").concat(l, "_").concat(s);
                                            r.__unlayer_functions_map[u] = { frameId: l, callbackId: s, path: e };
                                        }),
                                        r
                                    );
                                },
                            },
                            {
                                key: "preprocessMessage",
                                value: function (e) {
                                    return this._preprocessMessageFunctions(e);
                                },
                            },
                            {
                                key: "scheduleMessage",
                                value: function (e) {
                                    var t = this.preprocessMessage(e);
                                    this.messages.push(t);
                                },
                            },
                            {
                                key: "flushMessages",
                                value: function () {
                                    var e = this;
                                    this.ready &&
                                        (this.messages.forEach(function (t) {
                                            e.iframe && e.iframe.contentWindow && e.iframe.contentWindow.postMessage(t, "*");
                                        }),
                                        (this.messages = []));
                                },
                            },
                            {
                                key: "handleMessage",
                                value: function (e) {
                                    var t = e.action,
                                        r = e.callbackId,
                                        n = e.doneId,
                                        i = e.result,
                                        a = e.resultArgs,
                                        o = this,
                                        s = Array.isArray(a) ? a : [i],
                                        l = null != i ? i : s[0],
                                        u = this.callbacks[r];
                                    switch (t) {
                                        case "response":
                                            u && (u(l), delete this.callbacks[r]);
                                            break;
                                        case "callback":
                                            var c;
                                            if (
                                                (null != s &&
                                                    null !== (c = s[0]) &&
                                                    void 0 !== c &&
                                                    c.attachments &&
                                                    (s[0].attachments = s[0].attachments.map(function (e) {
                                                        return new File([e.content], e.name, { type: e.type });
                                                    })),
                                                !u)
                                            )
                                                break;
                                            u.apply(
                                                null,
                                                s.concat(function () {
                                                    o.postMessage("done", { doneId: n, resultArgs: Array.from(arguments), result: Array.from(arguments)[0] });
                                                })
                                            );
                                    }
                                },
                            },
                            {
                                key: "receiveMessage",
                                value: function (e) {
                                    e.data && this.handleMessage(e.data);
                                },
                            },
                        ]),
                        t && l(e.prototype, t),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, t;
                })();
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function v(e) {
                return (
                    (v =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    v(e)
                );
            }
            function p(e) {
                var t;
                if (e)
                    return Object.assign(
                        {},
                        e,
                        !!e.attrs && {
                            attrs:
                                ((t = e.attrs),
                                t && "object" === v(t)
                                    ? Object.entries(t || {}).reduce(function (e, t) {
                                          var r,
                                              n,
                                              i,
                                              a =
                                                  ((i = 2),
                                                  (function (e) {
                                                      if (Array.isArray(e)) return e;
                                                  })((n = t)) ||
                                                      (function (e, t) {
                                                          var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                                          if (null != r) {
                                                              var n,
                                                                  i,
                                                                  a,
                                                                  o,
                                                                  s = [],
                                                                  l = !0,
                                                                  u = !1;
                                                              try {
                                                                  if (((a = (r = r.call(e)).next), 0 === t)) {
                                                                      if (Object(r) !== r) return;
                                                                      l = !1;
                                                                  } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
                                                              } catch (e) {
                                                                  (u = !0), (i = e);
                                                              } finally {
                                                                  try {
                                                                      if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                                                  } finally {
                                                                      if (u) throw i;
                                                                  }
                                                              }
                                                              return s;
                                                          }
                                                      })(n, i) ||
                                                      (function (e, t) {
                                                          if (e) {
                                                              if ("string" == typeof e) return d(e, t);
                                                              var r = {}.toString.call(e).slice(8, -1);
                                                              return (
                                                                  "Object" === r && e.constructor && (r = e.constructor.name),
                                                                  "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(e, t) : void 0
                                                              );
                                                          }
                                                      })(n, i) ||
                                                      (function () {
                                                          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                      })()),
                                              o = a[0],
                                              s = a[1];
                                          return Object.assign(
                                              {},
                                              e,
                                              (function (e, t, r) {
                                                  return (
                                                      (t = (function (e) {
                                                          var t = (function (e) {
                                                              if ("object" != v(e) || !e) return e;
                                                              var t = e[Symbol.toPrimitive];
                                                              if (void 0 !== t) {
                                                                  var r = t.call(e, "string");
                                                                  if ("object" != v(r)) return r;
                                                                  throw new TypeError("@@toPrimitive must return a primitive value.");
                                                              }
                                                              return String(e);
                                                          })(e);
                                                          return "symbol" == v(t) ? t : t + "";
                                                      })(t)) in e
                                                          ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                                                          : (e[t] = r),
                                                      e
                                                  );
                                              })({}, o, "function" == typeof s ? "".concat(null != (r = s) ? r : "") : s)
                                          );
                                      }, {})
                                    : t),
                        }
                    );
            }
            function y(e) {
                return p(e);
            }
            function m(e) {
                return e && Array.isArray(e) ? e.map(y) : [];
            }
            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function b(e) {
                if ("function" == typeof e)
                    return function (t, r) {
                        new Promise(function (r) {
                            r(e(t));
                        }).then(function (e) {
                            r(e);
                        });
                    };
            }
            function _(e) {
                return (
                    (_ =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    _(e)
                );
            }
            function w(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var n,
                                i,
                                a,
                                o,
                                s = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
                            } catch (e) {
                                (u = !0), (i = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                } finally {
                                    if (u) throw i;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return k(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? k(e, t) : void 0;
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function M(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, T(n.key), n);
                }
            }
            function S(e, t, r) {
                return (t = T(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function T(e) {
                var t = (function (e) {
                    if ("object" != _(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != _(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == _(t) ? t : t + "";
            }
            var j = r(90880).Zy,
                I = "1.235.0",
                O = "1.218.0",
                C = "1.235.0",
                E = O || I || C,
                P = function (e, t) {
                    return e.startsWith("dev") || e.startsWith("qa") || e.startsWith("previews") ? 1 : j(e, t);
                },
                x = function (e) {
                    return "".concat(e, " method is not available here. It must be passed as customJS. More info at https://docs.unlayer.com/docs/custom-js-css");
                },
                L = (function () {
                    return (
                        (e = function e(t) {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                S(this, "frame", null),
                                S(this, "versions", { current: void 0, latest: I, stable: O }),
                                (function (e) {
                                    for (
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                                            r = {},
                                            n = Object.getPrototypeOf(e);
                                        n;

                                    )
                                        Object.assign(r, Object.getOwnPropertyDescriptors(n)), (n = Object.getPrototypeOf(n));
                                    Object.entries(r).forEach(function (r) {
                                        var n = (function (e, t) {
                                                return (
                                                    (function (e) {
                                                        if (Array.isArray(e)) return e;
                                                    })(e) ||
                                                    (function (e, t) {
                                                        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                                        if (null != r) {
                                                            var n,
                                                                i,
                                                                a,
                                                                o,
                                                                s = [],
                                                                l = !0,
                                                                u = !1;
                                                            try {
                                                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                                                    if (Object(r) !== r) return;
                                                                    l = !1;
                                                                } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
                                                            } catch (e) {
                                                                (u = !0), (i = e);
                                                            } finally {
                                                                try {
                                                                    if (!l && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                                                } finally {
                                                                    if (u) throw i;
                                                                }
                                                            }
                                                            return s;
                                                        }
                                                    })(e, t) ||
                                                    (function (e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return g(e, t);
                                                            var r = {}.toString.call(e).slice(8, -1);
                                                            return (
                                                                "Object" === r && e.constructor && (r = e.constructor.name),
                                                                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0
                                                            );
                                                        }
                                                    })(e, t) ||
                                                    (function () {
                                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                    })()
                                                );
                                            })(r, 2),
                                            i = n[0],
                                            a = n[1];
                                        i && "string" == typeof i && (t.includes(i) || i.startsWith("__") || Object.defineProperty(e, i, Object.assign({}, a, { enumerable: !0 })));
                                    });
                                })(this),
                                t && this.init(t);
                        }),
                        (t = [
                            {
                                key: "init",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.loadEditor(e), this.renderEditor(e), this.initEditor(e);
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    var e;
                                    null === (e = this.frame) || void 0 === e || e.destroy(), (this.frame = null);
                                },
                            },
                            {
                                key: "version",
                                get: function () {
                                    return this.versions.current;
                                },
                            },
                            {
                                key: "loadEditor",
                                value: function (e) {
                                    var t, n;
                                    (e.offline || (null !== (t = e.appearance) && void 0 !== t && t.loader)) && (e.render = !1);
                                    var i = "latest" === e.version ? I || C : "stable" === e.version ? O || C : e.version || E;
                                    this.versions.current = i;
                                    var a = "".concat(r.p).concat(i, "/editor.html"),
                                        o = !1 === e.render ? "".concat(a, "?norender=true") : a;
                                    P(i, "1.0.57") <= 0 && (window.__unlayer_multipleEditors = !1),
                                        P(i, "1.5.37") <= 0 && (window.__unlayer_originalFunctionReferences = !1),
                                        (this.frame = new h(o)),
                                        null === (n = this.frame) || void 0 === n || n.withMessage("versions", { versions: this.versions });
                                },
                            },
                            {
                                key: "renderEditor",
                                value: function (e) {
                                    var t,
                                        r = null;
                                    if ((e.id ? (r = document.getElementById(e.id)) : e.className && (r = document.getElementsByClassName(e.className)[0]), !e.id && !e.className)) throw new Error("id or className must be provided.");
                                    if (!r) throw new Error("Could not find a valid element for given id or className.");
                                    null === (t = this.frame) || void 0 === t || t.appendTo(r);
                                },
                            },
                            {
                                key: "initEditor",
                                value: function (e) {
                                    var t,
                                        n = {};
                                    if (
                                        (e.env && (n.env = e.env),
                                        e.offline && ((n.licenseUrl = "".concat(r.p, "license.json")), (n.offline = e.offline)),
                                        (n.referrer = window.location.href),
                                        e.source && (n.source = e.source),
                                        e.amp && (n.amp = e.amp),
                                        e.defaultDevice && (n.defaultDevice = e.defaultDevice),
                                        e.devices && (n.devices = e.devices),
                                        e.displayMode && (n.displayMode = e.displayMode),
                                        "designMode" in e && (n.designMode = e.designMode),
                                        e.designId && (n.designId = e.designId),
                                        e.projectId && (n.projectId = e.projectId),
                                        e.user && (n.user = e.user),
                                        e.templateId && (n.templateId = e.templateId),
                                        e.stockTemplateId && (n.stockTemplateId = e.stockTemplateId),
                                        e.loadTimeout && (n.loadTimeout = e.loadTimeout),
                                        (e.safeHtml || e.safeHTML) && (n.safeHtml = e.safeHtml || e.safeHTML || !0),
                                        e.options && (n.options = e.options),
                                        "readOnly" in e && (n.readOnly = e.readOnly),
                                        e.validator && ("function" == typeof e.validator && window.__unlayer_originalFunctionReferences ? (n.validator = b(e.validator)) : (n.validator = e.validator)),
                                        void 0 !== e.multiLanguage && (n.multiLanguage = e.multiLanguage),
                                        e.languages && (n.languages = e.languages),
                                        e.tools)
                                    ) {
                                        var i = Object.entries(e.tools).reduce(function (e, t) {
                                            var r = w(t, 2),
                                                n = r[0],
                                                i = r[1];
                                            return Object.assign(
                                                {},
                                                e,
                                                S(
                                                    {},
                                                    n,
                                                    Object.entries(i).reduce(function (e, t) {
                                                        var r = w(t, 2),
                                                            n = r[0],
                                                            i = r[1];
                                                        return Object.assign({}, e, S({}, n, "function" == typeof i ? i.toString() : i));
                                                    }, {})
                                                )
                                            );
                                        }, {});
                                        n.tools = i;
                                    }
                                    e.excludeTools && (n.excludeTools = e.excludeTools),
                                        e.blocks && (n.blocks = e.blocks),
                                        e.editor && (n.editor = e.editor),
                                        e.fonts && (n.fonts = e.fonts),
                                        e.linkTypes && (n.linkTypes = m(e.linkTypes)),
                                        e.linkTypesSharedConfig && (n.linkTypesSharedConfig = p(e.linkTypesSharedConfig)),
                                        e.mergeTags && (n.mergeTags = e.mergeTags),
                                        e.displayConditions && (n.displayConditions = e.displayConditions),
                                        e.specialLinks && (n.specialLinks = e.specialLinks),
                                        e.designTags && (n.designTags = e.designTags),
                                        e.customCSS && (n.customCSS = e.customCSS),
                                        e.customJS && (n.customJS = e.customJS),
                                        e.locale && (n.locale = e.locale),
                                        e.textDirection && (n.textDirection = e.textDirection),
                                        e.translations && (n.translations = e.translations),
                                        e.appearance && (n.appearance = e.appearance),
                                        e.features && (n.features = e.features),
                                        e.designTagsConfig && (n.designTagsConfig = e.designTagsConfig),
                                        e.mergeTagsConfig && (n.mergeTagsConfig = e.mergeTagsConfig),
                                        e.tabs && (n.tabs = e.tabs),
                                        window.Cypress && (n.IS_TEST = !0),
                                        null === (t = this.frame) || void 0 === t || t.postMessage("config", n);
                                },
                            },
                            {
                                key: "registerColumns",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("registerColumns", { cells: e });
                                },
                            },
                            {
                                key: "registerCallback",
                                value: function (e, t) {
                                    var r;
                                    null === (r = this.frame) || void 0 === r || r.withMessage("registerCallback", { type: e }, t);
                                },
                            },
                            {
                                key: "unregisterCallback",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("unregisterCallback", { type: e });
                                },
                            },
                            {
                                key: "registerProvider",
                                value: function (e, t) {
                                    var r;
                                    null === (r = this.frame) || void 0 === r || r.withMessage("registerProvider", { type: e }, t);
                                },
                            },
                            {
                                key: "unregisterProvider",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("unregisterProvider", { type: e });
                                },
                            },
                            {
                                key: "reloadProvider",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("reloadProvider", { type: e });
                                },
                            },
                            {
                                key: "addEventListener",
                                value: function (e, t) {
                                    var r;
                                    null === (r = this.frame) || void 0 === r || r.withMessage("registerCallback", { type: e }, t);
                                },
                            },
                            {
                                key: "removeEventListener",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("unregisterCallback", { type: e });
                                },
                            },
                            {
                                key: "setDesignId",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("setDesignId", { id: e });
                                },
                            },
                            {
                                key: "setDesignMode",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("setDesignMode", { designMode: e });
                                },
                            },
                            {
                                key: "setDisplayMode",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("setDisplayMode", { displayMode: e });
                                },
                            },
                            {
                                key: "loadProject",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("loadProject", { projectId: e });
                                },
                            },
                            {
                                key: "loadUser",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("loadUser", { user: e });
                                },
                            },
                            {
                                key: "loadTemplate",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("loadTemplate", { templateId: e });
                                },
                            },
                            {
                                key: "loadStockTemplate",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("loadStockTemplate", { stockTemplateId: e });
                                },
                            },
                            {
                                key: "setLinkTypes",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setLinkTypes", { linkTypes: m(e) });
                                },
                            },
                            {
                                key: "setLinkTypesSharedConfig",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setLinkTypesSharedConfig", { linkTypesSharedConfig: p(e) });
                                },
                            },
                            {
                                key: "setMergeTags",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setMergeTags", { mergeTags: e });
                                },
                            },
                            {
                                key: "setSpecialLinks",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setSpecialLinks", { specialLinks: e });
                                },
                            },
                            {
                                key: "setDisplayConditions",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setDisplayConditions", { displayConditions: e });
                                },
                            },
                            {
                                key: "setLocale",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setLocale", { locale: e });
                                },
                            },
                            {
                                key: "setTextDirection",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setTextDirection", { textDirection: e });
                                },
                            },
                            {
                                key: "setTranslations",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setTranslations", { translations: e });
                                },
                            },
                            {
                                key: "loadBlank",
                                value: function () {
                                    var e,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    null === (e = this.frame) || void 0 === e || e.postMessage("loadBlank", { bodyValues: t });
                                },
                            },
                            {
                                key: "loadDesign",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("loadDesign", { design: e });
                                },
                            },
                            {
                                key: "saveDesign",
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    null === (t = this.frame) || void 0 === t || t.withMessage("saveDesign", r, e);
                                },
                            },
                            {
                                key: "exportHtml",
                                value: function (e, t) {
                                    var r;
                                    null === (r = this.frame) || void 0 === r || r.withMessage("exportHtml", t, e);
                                },
                            },
                            {
                                key: "exportLiveHtml",
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    null === (t = this.frame) || void 0 === t || t.withMessage("exportLiveHtml", r, e);
                                },
                            },
                            {
                                key: "exportPlainText",
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    null === (t = this.frame) || void 0 === t || t.withMessage("exportPlainText", r, e);
                                },
                            },
                            {
                                key: "exportImage",
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    null === (t = this.frame) || void 0 === t || t.withMessage("exportImage", r, e);
                                },
                            },
                            {
                                key: "exportPdf",
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    null === (t = this.frame) || void 0 === t || t.withMessage("exportPdf", r, e);
                                },
                            },
                            {
                                key: "exportZip",
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    null === (t = this.frame) || void 0 === t || t.withMessage("exportZip", r, e);
                                },
                            },
                            {
                                key: "setAppearance",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setAppearance", { appearance: e });
                                },
                            },
                            {
                                key: "setTheme",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setTheme", { theme: e });
                                },
                            },
                            {
                                key: "setBodyValues",
                                value: function (e, t) {
                                    var r;
                                    null === (r = this.frame) || void 0 === r || r.postMessage("setBodyValues", { bodyId: t, bodyValues: e });
                                },
                            },
                            {
                                key: "setStyleGuide",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setStyleGuide", { styleGuide: e });
                                },
                            },
                            {
                                key: "setDesignTagsConfig",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setDesignTagsConfig", { designTagsConfig: e });
                                },
                            },
                            {
                                key: "setMergeTagsConfig",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setMergeTagsConfig", { mergeTagsConfig: e });
                                },
                            },
                            {
                                key: "showPreview",
                                value: function (e) {
                                    var t,
                                        r = "string" == typeof e ? { device: e } : "number" == typeof e ? { resolution: e } : e;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("showPreview", r);
                                },
                            },
                            {
                                key: "hidePreview",
                                value: function () {
                                    var e;
                                    null === (e = this.frame) || void 0 === e || e.postMessage("hidePreview", {});
                                },
                            },
                            {
                                key: "canUndo",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("canUndo", {}, e);
                                },
                            },
                            {
                                key: "canRedo",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("canRedo", {}, e);
                                },
                            },
                            {
                                key: "undo",
                                value: function () {
                                    var e;
                                    null === (e = this.frame) || void 0 === e || e.postMessage("undo", {});
                                },
                            },
                            {
                                key: "redo",
                                value: function () {
                                    var e;
                                    null === (e = this.frame) || void 0 === e || e.postMessage("redo", {});
                                },
                            },
                            {
                                key: "audit",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("audit", {}, e);
                                },
                            },
                            {
                                key: "setValidator",
                                value: function (e) {
                                    var t;
                                    "function" == typeof e || null === e
                                        ? null === (t = this.frame) || void 0 === t || t.withMessage("setValidator", { validator: "function" == typeof e && window.__unlayer_originalFunctionReferences ? b(e) : e })
                                        : console.error("Validator must be a function or null");
                                },
                            },
                            {
                                key: "setToolValidator",
                                value: function (e, t) {
                                    var r;
                                    e && "string" == typeof e
                                        ? "function" == typeof t || null === t
                                            ? null === (r = this.frame) || void 0 === r || r.withMessage("setToolValidator", { tool: e, validator: "function" == typeof t && window.__unlayer_originalFunctionReferences ? b(t) : t })
                                            : console.error("Validator must be a function")
                                        : console.error("Tool name must be a string");
                                },
                            },
                            {
                                key: "updateTabs",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.withMessage("updateTabs", { tabs: e });
                                },
                            },
                            {
                                key: "clearValidators",
                                value: function () {
                                    var e;
                                    null === (e = this.frame) || void 0 === e || e.withMessage("clearValidators", {});
                                },
                            },
                            {
                                key: "setCurrentLanguage",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setCurrentLanguage", { language: e });
                                },
                            },
                            {
                                key: "setLanguages",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setLanguages", { languages: e });
                                },
                            },
                            {
                                key: "setColorPickerConfig",
                                value: function (e) {
                                    var t;
                                    null === (t = this.frame) || void 0 === t || t.postMessage("setColorPickerConfig", { colorPickerConfig: e });
                                },
                            },
                            {
                                key: "registerContainerExporter",
                                value: function () {
                                    throw new Error(x("registerContainerExporter"));
                                },
                            },
                            {
                                key: "registerItemExporter",
                                value: function () {
                                    throw new Error(x("registerItemExporter"));
                                },
                            },
                            {
                                key: "registerTool",
                                value: function () {
                                    throw new Error(x("registerTool"));
                                },
                            },
                            {
                                key: "registerPropertyEditor",
                                value: function () {
                                    throw new Error(x("registerPropertyEditor"));
                                },
                            },
                            {
                                key: "registerTab",
                                value: function () {
                                    throw new Error(x("registerTab"));
                                },
                            },
                            {
                                key: "createPanel",
                                value: function () {
                                    throw new Error(x("createPanel"));
                                },
                            },
                            {
                                key: "createViewer",
                                value: function () {
                                    throw new Error(x("createViewer"));
                                },
                            },
                            {
                                key: "createWidget",
                                value: function () {
                                    throw new Error(x("createWidget"));
                                },
                            },
                        ]),
                        t && M(e.prototype, t),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, t;
                })();
            function A(e) {
                return (
                    (A =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    A(e)
                );
            }
            function R(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, D(n.key), n);
                }
            }
            function D(e) {
                var t = (function (e) {
                    if ("object" != A(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != A(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == A(t) ? t : t + "";
            }
            function U() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (U = function () {
                    return !!e;
                })();
            }
            function q(e) {
                return (
                    (q = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    q(e)
                );
            }
            function W(e, t) {
                return (
                    (W = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    W(e, t)
                );
            }
            var F = (function (e) {
                    function t() {
                        return (
                            (function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                            (function (e, t, r) {
                                return (
                                    (t = q(t)),
                                    (function (e, t) {
                                        if (t && ("object" == A(t) || "function" == typeof t)) return t;
                                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                        return (function (e) {
                                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return e;
                                        })(e);
                                    })(e, U() ? Reflect.construct(t, r || [], q(e).constructor) : t.apply(e, r))
                                );
                            })(this, t, arguments)
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && W(e, t);
                        })(t, e),
                        (r = t),
                        (n = [
                            {
                                key: "createEditor",
                                value: function (e) {
                                    return new L(e);
                                },
                            },
                        ]) && R(r.prototype, n),
                        Object.defineProperty(r, "prototype", { writable: !1 }),
                        r
                    );
                    var r, n;
                })(L),
                V = new F();
        })(),
        (unlayer = a.default);
})();
