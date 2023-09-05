(() => {
  var Sr = Object.create;
  var le = Object.defineProperty;
  var Er = Object.getOwnPropertyDescriptor;
  var Tr = Object.getOwnPropertyNames;
  var Lr = Object.getPrototypeOf,
    Pr = Object.prototype.hasOwnProperty;
  var kr = (t, e, r) =>
    e in t
      ? le(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  var Ar = (t) => le(t, "__esModule", { value: !0 });
  var Ir = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  var Hr = (t, e, r) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let i of Tr(e))
          !Pr.call(t, i) &&
            i !== "default" &&
            le(t, i, {
              get: () => e[i],
              enumerable: !(r = Er(e, i)) || r.enumerable,
            });
      return t;
    },
    Mr = (t) =>
      Hr(
        Ar(
          le(
            t != null ? Sr(Lr(t)) : {},
            "default",
            t && t.__esModule && "default" in t
              ? { get: () => t.default, enumerable: !0 }
              : { value: t, enumerable: !0 }
          )
        ),
        t
      );
  var C = (t, e, r) => (kr(t, typeof e != "symbol" ? e + "" : e, r), r);
  var It = Ir((Vs, pe) => {
    var ct,
      ht,
      pt,
      ut,
      ft,
      mt,
      yt,
      vt,
      gt,
      ce,
      He,
      bt,
      xt,
      _t,
      Y,
      wt,
      Ct,
      St,
      Et,
      Tt,
      Lt,
      Pt,
      kt,
      At,
      he;
    (function (t) {
      var e =
        typeof global == "object"
          ? global
          : typeof self == "object"
          ? self
          : typeof this == "object"
          ? this
          : {};
      typeof define == "function" && define.amd
        ? define("tslib", ["exports"], function (i) {
            t(r(e, r(i)));
          })
        : typeof pe == "object" && typeof pe.exports == "object"
        ? t(r(e, r(pe.exports)))
        : t(r(e));
      function r(i, a) {
        return (
          i !== e &&
            (typeof Object.create == "function"
              ? Object.defineProperty(i, "__esModule", { value: !0 })
              : (i.__esModule = !0)),
          function (s, n) {
            return (i[s] = a ? a(s, n) : n);
          }
        );
      }
    })(function (t) {
      var e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (i, a) {
            i.__proto__ = a;
          }) ||
        function (i, a) {
          for (var s in a)
            Object.prototype.hasOwnProperty.call(a, s) && (i[s] = a[s]);
        };
      (ct = function (i, a) {
        if (typeof a != "function" && a !== null)
          throw new TypeError(
            "Class extends value " + String(a) + " is not a constructor or null"
          );
        e(i, a);
        function s() {
          this.constructor = i;
        }
        i.prototype =
          a === null
            ? Object.create(a)
            : ((s.prototype = a.prototype), new s());
      }),
        (ht =
          Object.assign ||
          function (i) {
            for (var a, s = 1, n = arguments.length; s < n; s++) {
              a = arguments[s];
              for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o]);
            }
            return i;
          }),
        (pt = function (i, a) {
          var s = {};
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) &&
              a.indexOf(n) < 0 &&
              (s[n] = i[n]);
          if (i != null && typeof Object.getOwnPropertySymbols == "function")
            for (
              var o = 0, n = Object.getOwnPropertySymbols(i);
              o < n.length;
              o++
            )
              a.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(i, n[o]) &&
                (s[n[o]] = i[n[o]]);
          return s;
        }),
        (ut = function (i, a, s, n) {
          var o = arguments.length,
            l =
              o < 3
                ? a
                : n === null
                ? (n = Object.getOwnPropertyDescriptor(a, s))
                : n,
            c;
          if (
            typeof Reflect == "object" &&
            typeof Reflect.decorate == "function"
          )
            l = Reflect.decorate(i, a, s, n);
          else
            for (var h = i.length - 1; h >= 0; h--)
              (c = i[h]) &&
                (l = (o < 3 ? c(l) : o > 3 ? c(a, s, l) : c(a, s)) || l);
          return o > 3 && l && Object.defineProperty(a, s, l), l;
        }),
        (ft = function (i, a) {
          return function (s, n) {
            a(s, n, i);
          };
        }),
        (mt = function (i, a) {
          if (
            typeof Reflect == "object" &&
            typeof Reflect.metadata == "function"
          )
            return Reflect.metadata(i, a);
        }),
        (yt = function (i, a, s, n) {
          function o(l) {
            return l instanceof s
              ? l
              : new s(function (c) {
                  c(l);
                });
          }
          return new (s || (s = Promise))(function (l, c) {
            function h(m) {
              try {
                p(n.next(m));
              } catch (b) {
                c(b);
              }
            }
            function f(m) {
              try {
                p(n.throw(m));
              } catch (b) {
                c(b);
              }
            }
            function p(m) {
              m.done ? l(m.value) : o(m.value).then(h, f);
            }
            p((n = n.apply(i, a || [])).next());
          });
        }),
        (vt = function (i, a) {
          var s = {
              label: 0,
              sent: function () {
                if (l[0] & 1) throw l[1];
                return l[1];
              },
              trys: [],
              ops: [],
            },
            n,
            o,
            l,
            c;
          return (
            (c = { next: h(0), throw: h(1), return: h(2) }),
            typeof Symbol == "function" &&
              (c[Symbol.iterator] = function () {
                return this;
              }),
            c
          );
          function h(p) {
            return function (m) {
              return f([p, m]);
            };
          }
          function f(p) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((n = 1),
                  o &&
                    (l =
                      p[0] & 2
                        ? o.return
                        : p[0]
                        ? o.throw || ((l = o.return) && l.call(o), 0)
                        : o.next) &&
                    !(l = l.call(o, p[1])).done)
                )
                  return l;
                switch (((o = 0), l && (p = [p[0] & 2, l.value]), p[0])) {
                  case 0:
                  case 1:
                    l = p;
                    break;
                  case 4:
                    return s.label++, { value: p[1], done: !1 };
                  case 5:
                    s.label++, (o = p[1]), (p = [0]);
                    continue;
                  case 7:
                    (p = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      ((l = s.trys),
                      !(l = l.length > 0 && l[l.length - 1]) &&
                        (p[0] === 6 || p[0] === 2))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (p[0] === 3 && (!l || (p[1] > l[0] && p[1] < l[3]))) {
                      s.label = p[1];
                      break;
                    }
                    if (p[0] === 6 && s.label < l[1]) {
                      (s.label = l[1]), (l = p);
                      break;
                    }
                    if (l && s.label < l[2]) {
                      (s.label = l[2]), s.ops.push(p);
                      break;
                    }
                    l[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                p = a.call(i, s);
              } catch (m) {
                (p = [6, m]), (o = 0);
              } finally {
                n = l = 0;
              }
            if (p[0] & 5) throw p[1];
            return { value: p[0] ? p[1] : void 0, done: !0 };
          }
        }),
        (gt = function (i, a) {
          for (var s in i)
            s !== "default" &&
              !Object.prototype.hasOwnProperty.call(a, s) &&
              he(a, i, s);
        }),
        (he = Object.create
          ? function (i, a, s, n) {
              n === void 0 && (n = s);
              var o = Object.getOwnPropertyDescriptor(a, s);
              (!o ||
                ("get" in o ? !a.__esModule : o.writable || o.configurable)) &&
                (o = {
                  enumerable: !0,
                  get: function () {
                    return a[s];
                  },
                }),
                Object.defineProperty(i, n, o);
            }
          : function (i, a, s, n) {
              n === void 0 && (n = s), (i[n] = a[s]);
            }),
        (ce = function (i) {
          var a = typeof Symbol == "function" && Symbol.iterator,
            s = a && i[a],
            n = 0;
          if (s) return s.call(i);
          if (i && typeof i.length == "number")
            return {
              next: function () {
                return (
                  i && n >= i.length && (i = void 0),
                  { value: i && i[n++], done: !i }
                );
              },
            };
          throw new TypeError(
            a ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }),
        (He = function (i, a) {
          var s = typeof Symbol == "function" && i[Symbol.iterator];
          if (!s) return i;
          var n = s.call(i),
            o,
            l = [],
            c;
          try {
            for (; (a === void 0 || a-- > 0) && !(o = n.next()).done; )
              l.push(o.value);
          } catch (h) {
            c = { error: h };
          } finally {
            try {
              o && !o.done && (s = n.return) && s.call(n);
            } finally {
              if (c) throw c.error;
            }
          }
          return l;
        }),
        (bt = function () {
          for (var i = [], a = 0; a < arguments.length; a++)
            i = i.concat(He(arguments[a]));
          return i;
        }),
        (xt = function () {
          for (var i = 0, a = 0, s = arguments.length; a < s; a++)
            i += arguments[a].length;
          for (var n = Array(i), o = 0, a = 0; a < s; a++)
            for (var l = arguments[a], c = 0, h = l.length; c < h; c++, o++)
              n[o] = l[c];
          return n;
        }),
        (_t = function (i, a, s) {
          if (s || arguments.length === 2)
            for (var n = 0, o = a.length, l; n < o; n++)
              (l || !(n in a)) &&
                (l || (l = Array.prototype.slice.call(a, 0, n)), (l[n] = a[n]));
          return i.concat(l || Array.prototype.slice.call(a));
        }),
        (Y = function (i) {
          return this instanceof Y ? ((this.v = i), this) : new Y(i);
        }),
        (wt = function (i, a, s) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var n = s.apply(i, a || []),
            o,
            l = [];
          return (
            (o = {}),
            c("next"),
            c("throw"),
            c("return"),
            (o[Symbol.asyncIterator] = function () {
              return this;
            }),
            o
          );
          function c(y) {
            n[y] &&
              (o[y] = function (w) {
                return new Promise(function (x, E) {
                  l.push([y, w, x, E]) > 1 || h(y, w);
                });
              });
          }
          function h(y, w) {
            try {
              f(n[y](w));
            } catch (x) {
              b(l[0][3], x);
            }
          }
          function f(y) {
            y.value instanceof Y
              ? Promise.resolve(y.value.v).then(p, m)
              : b(l[0][2], y);
          }
          function p(y) {
            h("next", y);
          }
          function m(y) {
            h("throw", y);
          }
          function b(y, w) {
            y(w), l.shift(), l.length && h(l[0][0], l[0][1]);
          }
        }),
        (Ct = function (i) {
          var a, s;
          return (
            (a = {}),
            n("next"),
            n("throw", function (o) {
              throw o;
            }),
            n("return"),
            (a[Symbol.iterator] = function () {
              return this;
            }),
            a
          );
          function n(o, l) {
            a[o] = i[o]
              ? function (c) {
                  return (s = !s)
                    ? { value: Y(i[o](c)), done: o === "return" }
                    : l
                    ? l(c)
                    : c;
                }
              : l;
          }
        }),
        (St = function (i) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var a = i[Symbol.asyncIterator],
            s;
          return a
            ? a.call(i)
            : ((i = typeof ce == "function" ? ce(i) : i[Symbol.iterator]()),
              (s = {}),
              n("next"),
              n("throw"),
              n("return"),
              (s[Symbol.asyncIterator] = function () {
                return this;
              }),
              s);
          function n(l) {
            s[l] =
              i[l] &&
              function (c) {
                return new Promise(function (h, f) {
                  (c = i[l](c)), o(h, f, c.done, c.value);
                });
              };
          }
          function o(l, c, h, f) {
            Promise.resolve(f).then(function (p) {
              l({ value: p, done: h });
            }, c);
          }
        }),
        (Et = function (i, a) {
          return (
            Object.defineProperty
              ? Object.defineProperty(i, "raw", { value: a })
              : (i.raw = a),
            i
          );
        });
      var r = Object.create
        ? function (i, a) {
            Object.defineProperty(i, "default", { enumerable: !0, value: a });
          }
        : function (i, a) {
            i.default = a;
          };
      (Tt = function (i) {
        if (i && i.__esModule) return i;
        var a = {};
        if (i != null)
          for (var s in i)
            s !== "default" &&
              Object.prototype.hasOwnProperty.call(i, s) &&
              he(a, i, s);
        return r(a, i), a;
      }),
        (Lt = function (i) {
          return i && i.__esModule ? i : { default: i };
        }),
        (Pt = function (i, a, s, n) {
          if (s === "a" && !n)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if (typeof a == "function" ? i !== a || !n : !a.has(i))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return s === "m" ? n : s === "a" ? n.call(i) : n ? n.value : a.get(i);
        }),
        (kt = function (i, a, s, n, o) {
          if (n === "m") throw new TypeError("Private method is not writable");
          if (n === "a" && !o)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if (typeof a == "function" ? i !== a || !o : !a.has(i))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return n === "a" ? o.call(i, s) : o ? (o.value = s) : a.set(i, s), s;
        }),
        (At = function (i, a) {
          if (a === null || (typeof a != "object" && typeof a != "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof i == "function" ? a === i : i.has(a);
        }),
        t("__extends", ct),
        t("__assign", ht),
        t("__rest", pt),
        t("__decorate", ut),
        t("__param", ft),
        t("__metadata", mt),
        t("__awaiter", yt),
        t("__generator", vt),
        t("__exportStar", gt),
        t("__createBinding", he),
        t("__values", ce),
        t("__read", He),
        t("__spread", bt),
        t("__spreadArrays", xt),
        t("__spreadArray", _t),
        t("__await", Y),
        t("__asyncGenerator", wt),
        t("__asyncDelegator", Ct),
        t("__asyncValues", St),
        t("__makeTemplateObject", Et),
        t("__importStar", Tt),
        t("__importDefault", Lt),
        t("__classPrivateFieldGet", Pt),
        t("__classPrivateFieldSet", kt),
        t("__classPrivateFieldIn", At);
    });
  });
  var Pe = new Map();
  function Br(t, e = {}, r = !0) {
    if (typeof t != "string" || !t.trim().length)
      return Promise.reject("Reflow: Endpoint Required");
    if (((t = t.replace(/\/+/, "")), Pe.has(t))) return Pe.get(t);
    let i = fetch(
      Reflow.APIURL + "/stores/" + Reflow.storeID + "/" + t,
      e
    ).then(async (a) => {
      let s = await a.json();
      if (!a.ok) {
        let n = Error(s.error || "HTTP error");
        throw ((n.status = a.status), (n.data = s), n);
      }
      return s;
    });
    return r && e.method != "POST" && Pe.set(t, i), i;
  }
  var I = Br;
  var ke = class {
    constructor(e, r = {}) {
      C(this, "mockData", null);
      (this.node = e),
        (this.demoMode = r.demoMode || !1),
        r.mockData && (this.mockData = r.mockData);
    }
    static scan() {
      let e = document.querySelectorAll(`[data-reflow-type=${this.type}]`);
      return Array.from(e)
        .filter((r) => !r.parentNode.closest("[data-reflow-type]"))
        .map((r) => new this(r));
    }
    init() {}
    getAPIEndpoint() {
      return "";
    }
    async fetchData() {
      if (this.mockData) return this.mockData;
      let e = this.getAPIEndpoint(),
        r = await I(e);
      return r.error ? (console.error("Reflow:", r.error), null) : r;
    }
    parseConfigString(e) {
      let r = {};
      for (let i of e.split(",")) r[i.trim().toLowerCase()] = !0;
      return r;
    }
    parseShowString() {
      return this.node.dataset.reflowShow
        ? this.parseConfigString(this.node.dataset.reflowShow)
        : { full: !0 };
    }
    isDemoMode() {
      return this.demoMode;
    }
    async update() {}
  };
  C(ke, "type", "");
  var R = ke;
  function Rr(t) {
    let e = document.createElement("div");
    return (e.innerHTML = t.trim()), e.firstElementChild;
  }
  var lt = Rr;
  function Nr(t, e = null) {
    return (
      (e = e || document), t.trim()[0] == "<" ? lt(t) : e.querySelectorAll(t)
    );
  }
  var d = Nr;
  var Ie = class extends R {
      constructor(e, r = {}) {
        super(e, r);
        (r = Object.assign(
          {
            type: "success",
            action: this.hide.bind(this),
            buttonAction: null,
            title: "",
            description: "",
            button: null,
            timeout: 5e3,
          },
          r
        )),
          this.set(r),
          (this.node.innerHTML = `
			<div class="ref-notification-content">
				<div class="ref-notification-title"></div>
				<div class="ref-notification-description"></div>
				<div class="ref-close-button">\xD7</div>
			</div>
		`),
          (this.descriptionElement = this.node.querySelector(
            ".ref-notification-description"
          )),
          r.button &&
            ((this.button = d('<a class="ref-button"></a>')),
            (this.button.textContent = r.button),
            this.node
              .querySelector(".ref-notification-content")
              .append(this.button)),
          (this.hideTimeout = null);
      }
      init() {
        this.node.addEventListener("click", this.onClick.bind(this));
      }
      set(e = {}) {
        Object.assign(this, e),
          e.timeout === 0 && clearTimeout(this.hideTimeout);
      }
      onClick(e) {
        if (e.target.closest(".ref-close-button")) {
          this.hide();
          return;
        }
        if (e.target.closest(".ref-button") && this.buttonAction) {
          this.buttonAction();
          return;
        }
        this.action && this.action(this);
      }
      hide() {
        this.node.remove();
      }
      show() {
        Ie.scan().forEach((r) => r.node.remove()),
          document.body.append(this.node),
          this.update(),
          this.timeout && this.hideAfter(this.timeout);
      }
      hideAfter(e) {
        clearTimeout(this.hideTimeout),
          (this.hideTimeout = setTimeout(() => {
            this.hide();
          }, e));
      }
      update() {
        let e = this.node.querySelector(".ref-notification-title");
        e && (e.textContent = this.title);
        let r = this.node.querySelector(".ref-notification-description");
        return (
          r && (r.textContent = this.description),
          this.node.classList.add("ref-notification", this.type),
          this.button && this.button.classList.add("ref-button-" + this.type),
          this.description || this.node.classList.add("no-description"),
          setTimeout(() => {
            this.node.style.transform = "translateY(-20px)";
          }, 0),
          this.node
        );
      }
    },
    Ae = Ie;
  C(Ae, "type", "toast");
  var $ = Ae;
  var dt = class extends R {
      constructor(e, r = {}) {
        super(e, r);
        (e.innerHTML = `
			<div class="ref-quantity-widget">
				<div class="ref-decrease"><span></span></div>
				<input type="text" value="1" />
				<div class="ref-increase"><span></span></div>
			</div>
		`),
          (this.input = e.querySelector("input")),
          (this.inStock = r.inStock),
          (this._onQuantityChange = r.onChange);
      }
      init() {
        this.node.addEventListener("change", this.onChange.bind(this)),
          this.node.addEventListener("click", this.onClick.bind(this));
      }
      onChange(e) {
        if (e.target === this.input) {
          if (!this.inStock) return;
          let r = Math.max(1, parseInt(e.target.value, 10) || 1);
          if (
            ((r = Math.min(r, 999999999)),
            (e.target.value = r),
            r == this.getQuantity(r))
          )
            return;
          this.setQuantity(r),
            this._onQuantityChange && this._onQuantityChange(this);
          return;
        }
      }
      async onClick(e) {
        let r = !!e.target.closest(".ref-increase"),
          i = !!e.target.closest(".ref-decrease");
        if (r || i) {
          if (!this.inStock) return;
          let a = this.input,
            s = parseInt(a.value, 10),
            n = this.getMaxQuantity();
          if (r) {
            if (s >= n) return;
            s++;
          } else if (i) {
            if (s <= 1) return;
            s--;
          }
          (a.value = s),
            this.setQuantity(s),
            this._onQuantityChange && this._onQuantityChange(this);
        }
      }
      getProduct() {
        return this.node.dataset.reflowProduct;
      }
      setProduct(e) {
        this.node.dataset.reflowProduct = e;
      }
      getQuantity() {
        return this.node.dataset.reflowQuantity || 1;
      }
      setQuantity(e = 1) {
        (this.node.dataset.reflowQuantity = e),
          d(".ref-increase", this.node)[0].classList.remove("inactive"),
          e >= this.getMaxQuantity() &&
            d(".ref-increase", this.node)[0].classList.add("inactive");
      }
      getMaxQuantity() {
        return parseInt(this.node.dataset.reflowMaxQty, 10) || 999999;
      }
      setMaxQuantity(e = 999999) {
        this.node.dataset.reflowMaxQty = e;
      }
      getVariant() {
        return this.node.dataset.reflowVariant;
      }
      setVariant(e) {
        this.node.dataset.reflowVariant = e;
      }
      async update(e) {
        return (
          (this.input.value = this.getQuantity()),
          this.inStock ||
            this.node
              .querySelector(".ref-quantity-widget")
              .classList.add("inactive"),
          this.node
        );
      }
    },
    W = dt;
  function Dr(t, e = 100, r = !1) {
    var i = 0,
      a = null;
    return (...s) => {
      r && !i && t(...s),
        i++,
        clearTimeout(a),
        (a = setTimeout(() => {
          (!r || i > 1) && t(...s), (i = 0);
        }, e));
    };
  }
  var de = Dr;
  function Or(t, e) {
    let r = 0;
    return (
      e.hasDecimal && ((t = t / 100), (r = 2)),
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: e.code,
        maximumFractionDigits: r,
      }).format(t)
    );
  }
  var J = Or;
  var Ht = Mr(It()),
    {
      __extends: ee,
      __assign: L,
      __rest: zs,
      __decorate: js,
      __param: Qs,
      __metadata: Xs,
      __awaiter: Zs,
      __generator: Ws,
      __exportStar: Js,
      __createBinding: Ys,
      __values: Ks,
      __read: en,
      __spread: tn,
      __spreadArrays: rn,
      __spreadArray: ue,
      __await: an,
      __asyncGenerator: sn,
      __asyncDelegator: nn,
      __asyncValues: on,
      __makeTemplateObject: ln,
      __importStar: dn,
      __importDefault: cn,
      __classPrivateFieldGet: hn,
      __classPrivateFieldSet: pn,
      __classPrivateFieldIn: un,
    } = Ht.default;
  var S;
  (function (t) {
    (t[(t.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
      "EXPECT_ARGUMENT_CLOSING_BRACE"),
      (t[(t.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
      (t[(t.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
      (t[(t.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
      (t[(t.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
      (t[(t.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
      (t[(t.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
      (t[(t.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
      (t[(t.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
      (t[(t.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
      (t[(t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
        "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
      (t[(t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
        "EXPECT_SELECT_ARGUMENT_OPTIONS"),
      (t[(t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
        "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
      (t[(t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
        "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
      (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
        "EXPECT_SELECT_ARGUMENT_SELECTOR"),
      (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
        "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
      (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
        "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
      (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
        "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
      (t[(t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
        "INVALID_PLURAL_ARGUMENT_SELECTOR"),
      (t[(t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
        "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
      (t[(t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
        "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
      (t[(t.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
      (t[(t.INVALID_TAG = 23)] = "INVALID_TAG"),
      (t[(t.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
      (t[(t.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
      (t[(t.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
  })(S || (S = {}));
  var H;
  (function (t) {
    (t[(t.literal = 0)] = "literal"),
      (t[(t.argument = 1)] = "argument"),
      (t[(t.number = 2)] = "number"),
      (t[(t.date = 3)] = "date"),
      (t[(t.time = 4)] = "time"),
      (t[(t.select = 5)] = "select"),
      (t[(t.plural = 6)] = "plural"),
      (t[(t.pound = 7)] = "pound"),
      (t[(t.tag = 8)] = "tag");
  })(H || (H = {}));
  var X;
  (function (t) {
    (t[(t.number = 0)] = "number"), (t[(t.dateTime = 1)] = "dateTime");
  })(X || (X = {}));
  function Me(t) {
    return t.type === H.literal;
  }
  function Mt(t) {
    return t.type === H.argument;
  }
  function fe(t) {
    return t.type === H.number;
  }
  function me(t) {
    return t.type === H.date;
  }
  function ye(t) {
    return t.type === H.time;
  }
  function ve(t) {
    return t.type === H.select;
  }
  function ge(t) {
    return t.type === H.plural;
  }
  function Bt(t) {
    return t.type === H.pound;
  }
  function be(t) {
    return t.type === H.tag;
  }
  function xe(t) {
    return !!(t && typeof t == "object" && t.type === X.number);
  }
  function te(t) {
    return !!(t && typeof t == "object" && t.type === X.dateTime);
  }
  var Be = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  var qr =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  function Rt(t) {
    var e = {};
    return (
      t.replace(qr, function (r) {
        var i = r.length;
        switch (r[0]) {
          case "G":
            e.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
            break;
          case "y":
            e.year = i === 2 ? "2-digit" : "numeric";
            break;
          case "Y":
          case "u":
          case "U":
          case "r":
            throw new RangeError(
              "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
            );
          case "q":
          case "Q":
            throw new RangeError("`q/Q` (quarter) patterns are not supported");
          case "M":
          case "L":
            e.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
            break;
          case "w":
          case "W":
            throw new RangeError("`w/W` (week) patterns are not supported");
          case "d":
            e.day = ["numeric", "2-digit"][i - 1];
            break;
          case "D":
          case "F":
          case "g":
            throw new RangeError(
              "`D/F/g` (day) patterns are not supported, use `d` instead"
            );
          case "E":
            e.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
            break;
          case "e":
            if (i < 4)
              throw new RangeError(
                "`e..eee` (weekday) patterns are not supported"
              );
            e.weekday = ["short", "long", "narrow", "short"][i - 4];
            break;
          case "c":
            if (i < 4)
              throw new RangeError(
                "`c..ccc` (weekday) patterns are not supported"
              );
            e.weekday = ["short", "long", "narrow", "short"][i - 4];
            break;
          case "a":
            e.hour12 = !0;
            break;
          case "b":
          case "B":
            throw new RangeError(
              "`b/B` (period) patterns are not supported, use `a` instead"
            );
          case "h":
            (e.hourCycle = "h12"), (e.hour = ["numeric", "2-digit"][i - 1]);
            break;
          case "H":
            (e.hourCycle = "h23"), (e.hour = ["numeric", "2-digit"][i - 1]);
            break;
          case "K":
            (e.hourCycle = "h11"), (e.hour = ["numeric", "2-digit"][i - 1]);
            break;
          case "k":
            (e.hourCycle = "h24"), (e.hour = ["numeric", "2-digit"][i - 1]);
            break;
          case "j":
          case "J":
          case "C":
            throw new RangeError(
              "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
            );
          case "m":
            e.minute = ["numeric", "2-digit"][i - 1];
            break;
          case "s":
            e.second = ["numeric", "2-digit"][i - 1];
            break;
          case "S":
          case "A":
            throw new RangeError(
              "`S/A` (second) patterns are not supported, use `s` instead"
            );
          case "z":
            e.timeZoneName = i < 4 ? "short" : "long";
            break;
          case "Z":
          case "O":
          case "v":
          case "V":
          case "X":
          case "x":
            throw new RangeError(
              "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
            );
        }
        return "";
      }),
      e
    );
  }
  var Nt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  function Dt(t) {
    if (t.length === 0) throw new Error("Number skeleton cannot be empty");
    for (
      var e = t.split(Nt).filter(function (p) {
          return p.length > 0;
        }),
        r = [],
        i = 0,
        a = e;
      i < a.length;
      i++
    ) {
      var s = a[i],
        n = s.split("/");
      if (n.length === 0) throw new Error("Invalid number skeleton");
      for (var o = n[0], l = n.slice(1), c = 0, h = l; c < h.length; c++) {
        var f = h[c];
        if (f.length === 0) throw new Error("Invalid number skeleton");
      }
      r.push({ stem: o, options: l });
    }
    return r;
  }
  function Ur(t) {
    return t.replace(/^(.*?)-/, "");
  }
  var Ot = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    qt = /^(@+)?(\+|#+)?[rs]?$/g,
    Fr = /(\*)(0+)|(#+)(0+)|(0+)/g,
    Ut = /^(0+)$/;
  function Ft(t) {
    var e = {};
    return (
      t[t.length - 1] === "r"
        ? (e.roundingPriority = "morePrecision")
        : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"),
      t.replace(qt, function (r, i, a) {
        return (
          typeof a != "string"
            ? ((e.minimumSignificantDigits = i.length),
              (e.maximumSignificantDigits = i.length))
            : a === "+"
            ? (e.minimumSignificantDigits = i.length)
            : i[0] === "#"
            ? (e.maximumSignificantDigits = i.length)
            : ((e.minimumSignificantDigits = i.length),
              (e.maximumSignificantDigits =
                i.length + (typeof a == "string" ? a.length : 0))),
          ""
        );
      }),
      e
    );
  }
  function $t(t) {
    switch (t) {
      case "sign-auto":
        return { signDisplay: "auto" };
      case "sign-accounting":
      case "()":
        return { currencySign: "accounting" };
      case "sign-always":
      case "+!":
        return { signDisplay: "always" };
      case "sign-accounting-always":
      case "()!":
        return { signDisplay: "always", currencySign: "accounting" };
      case "sign-except-zero":
      case "+?":
        return { signDisplay: "exceptZero" };
      case "sign-accounting-except-zero":
      case "()?":
        return { signDisplay: "exceptZero", currencySign: "accounting" };
      case "sign-never":
      case "+_":
        return { signDisplay: "never" };
    }
  }
  function $r(t) {
    var e;
    if (
      (t[0] === "E" && t[1] === "E"
        ? ((e = { notation: "engineering" }), (t = t.slice(2)))
        : t[0] === "E" && ((e = { notation: "scientific" }), (t = t.slice(1))),
      e)
    ) {
      var r = t.slice(0, 2);
      if (
        (r === "+!"
          ? ((e.signDisplay = "always"), (t = t.slice(2)))
          : r === "+?" && ((e.signDisplay = "exceptZero"), (t = t.slice(2))),
        !Ut.test(t))
      )
        throw new Error("Malformed concise eng/scientific notation");
      e.minimumIntegerDigits = t.length;
    }
    return e;
  }
  function Gt(t) {
    var e = {},
      r = $t(t);
    return r || e;
  }
  function Vt(t) {
    for (var e = {}, r = 0, i = t; r < i.length; r++) {
      var a = i[r];
      switch (a.stem) {
        case "percent":
        case "%":
          e.style = "percent";
          continue;
        case "%x100":
          (e.style = "percent"), (e.scale = 100);
          continue;
        case "currency":
          (e.style = "currency"), (e.currency = a.options[0]);
          continue;
        case "group-off":
        case ",_":
          e.useGrouping = !1;
          continue;
        case "precision-integer":
        case ".":
          e.maximumFractionDigits = 0;
          continue;
        case "measure-unit":
        case "unit":
          (e.style = "unit"), (e.unit = Ur(a.options[0]));
          continue;
        case "compact-short":
        case "K":
          (e.notation = "compact"), (e.compactDisplay = "short");
          continue;
        case "compact-long":
        case "KK":
          (e.notation = "compact"), (e.compactDisplay = "long");
          continue;
        case "scientific":
          e = L(
            L(L({}, e), { notation: "scientific" }),
            a.options.reduce(function (l, c) {
              return L(L({}, l), Gt(c));
            }, {})
          );
          continue;
        case "engineering":
          e = L(
            L(L({}, e), { notation: "engineering" }),
            a.options.reduce(function (l, c) {
              return L(L({}, l), Gt(c));
            }, {})
          );
          continue;
        case "notation-simple":
          e.notation = "standard";
          continue;
        case "unit-width-narrow":
          (e.currencyDisplay = "narrowSymbol"), (e.unitDisplay = "narrow");
          continue;
        case "unit-width-short":
          (e.currencyDisplay = "code"), (e.unitDisplay = "short");
          continue;
        case "unit-width-full-name":
          (e.currencyDisplay = "name"), (e.unitDisplay = "long");
          continue;
        case "unit-width-iso-code":
          e.currencyDisplay = "symbol";
          continue;
        case "scale":
          e.scale = parseFloat(a.options[0]);
          continue;
        case "integer-width":
          if (a.options.length > 1)
            throw new RangeError(
              "integer-width stems only accept a single optional option"
            );
          a.options[0].replace(Fr, function (l, c, h, f, p, m) {
            if (c) e.minimumIntegerDigits = h.length;
            else {
              if (f && p)
                throw new Error(
                  "We currently do not support maximum integer digits"
                );
              if (m)
                throw new Error(
                  "We currently do not support exact integer digits"
                );
            }
            return "";
          });
          continue;
      }
      if (Ut.test(a.stem)) {
        e.minimumIntegerDigits = a.stem.length;
        continue;
      }
      if (Ot.test(a.stem)) {
        if (a.options.length > 1)
          throw new RangeError(
            "Fraction-precision stems only accept a single optional option"
          );
        a.stem.replace(Ot, function (l, c, h, f, p, m) {
          return (
            h === "*"
              ? (e.minimumFractionDigits = c.length)
              : f && f[0] === "#"
              ? (e.maximumFractionDigits = f.length)
              : p && m
              ? ((e.minimumFractionDigits = p.length),
                (e.maximumFractionDigits = p.length + m.length))
              : ((e.minimumFractionDigits = c.length),
                (e.maximumFractionDigits = c.length)),
            ""
          );
        });
        var s = a.options[0];
        s === "w"
          ? (e = L(L({}, e), { trailingZeroDisplay: "stripIfInteger" }))
          : s && (e = L(L({}, e), Ft(s)));
        continue;
      }
      if (qt.test(a.stem)) {
        e = L(L({}, e), Ft(a.stem));
        continue;
      }
      var n = $t(a.stem);
      n && (e = L(L({}, e), n));
      var o = $r(a.stem);
      o && (e = L(L({}, e), o));
    }
    return e;
  }
  var re = {
    AX: ["H"],
    BQ: ["H"],
    CP: ["H"],
    CZ: ["H"],
    DK: ["H"],
    FI: ["H"],
    ID: ["H"],
    IS: ["H"],
    ML: ["H"],
    NE: ["H"],
    RU: ["H"],
    SE: ["H"],
    SJ: ["H"],
    SK: ["H"],
    AS: ["h", "H"],
    BT: ["h", "H"],
    DJ: ["h", "H"],
    ER: ["h", "H"],
    GH: ["h", "H"],
    IN: ["h", "H"],
    LS: ["h", "H"],
    PG: ["h", "H"],
    PW: ["h", "H"],
    SO: ["h", "H"],
    TO: ["h", "H"],
    VU: ["h", "H"],
    WS: ["h", "H"],
    "001": ["H", "h"],
    AL: ["h", "H", "hB"],
    TD: ["h", "H", "hB"],
    "ca-ES": ["H", "h", "hB"],
    CF: ["H", "h", "hB"],
    CM: ["H", "h", "hB"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    LU: ["H", "h", "hB"],
    NP: ["H", "h", "hB"],
    PF: ["H", "h", "hB"],
    SC: ["H", "h", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    TF: ["H", "h", "hB"],
    VA: ["H", "h", "hB"],
    CY: ["h", "H", "hb", "hB"],
    GR: ["h", "H", "hb", "hB"],
    CO: ["h", "H", "hB", "hb"],
    DO: ["h", "H", "hB", "hb"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    NA: ["h", "H", "hB", "hb"],
    PA: ["h", "H", "hB", "hb"],
    PR: ["h", "H", "hB", "hb"],
    VE: ["h", "H", "hB", "hb"],
    AC: ["H", "h", "hb", "hB"],
    AI: ["H", "h", "hb", "hB"],
    BW: ["H", "h", "hb", "hB"],
    BZ: ["H", "h", "hb", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CX: ["H", "h", "hb", "hB"],
    DG: ["H", "h", "hb", "hB"],
    FK: ["H", "h", "hb", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GI: ["H", "h", "hb", "hB"],
    IE: ["H", "h", "hb", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IO: ["H", "h", "hb", "hB"],
    JE: ["H", "h", "hb", "hB"],
    LT: ["H", "h", "hb", "hB"],
    MK: ["H", "h", "hb", "hB"],
    MN: ["H", "h", "hb", "hB"],
    MS: ["H", "h", "hb", "hB"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    PN: ["H", "h", "hb", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SX: ["H", "h", "hb", "hB"],
    TA: ["H", "h", "hb", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    "af-ZA": ["H", "h", "hB", "hb"],
    AR: ["H", "h", "hB", "hb"],
    CL: ["H", "h", "hB", "hb"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    EA: ["H", "h", "hB", "hb"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    GT: ["H", "h", "hB", "hb"],
    HN: ["H", "h", "hB", "hb"],
    IC: ["H", "h", "hB", "hb"],
    KG: ["H", "h", "hB", "hb"],
    KM: ["H", "h", "hB", "hb"],
    LK: ["H", "h", "hB", "hb"],
    MA: ["H", "h", "hB", "hb"],
    MX: ["H", "h", "hB", "hb"],
    NI: ["H", "h", "hB", "hb"],
    PY: ["H", "h", "hB", "hb"],
    SV: ["H", "h", "hB", "hb"],
    UY: ["H", "h", "hB", "hb"],
    JP: ["H", "h", "K"],
    AD: ["H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AT: ["H", "hB"],
    AW: ["H", "hB"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BR: ["H", "hB"],
    CG: ["H", "hB"],
    CI: ["H", "hB"],
    CV: ["H", "hB"],
    DE: ["H", "hB"],
    EE: ["H", "hB"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GF: ["H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GW: ["H", "hB"],
    HR: ["H", "hB"],
    IL: ["H", "hB"],
    IT: ["H", "hB"],
    KZ: ["H", "hB"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    MF: ["H", "hB"],
    MQ: ["H", "hB"],
    MZ: ["H", "hB"],
    NC: ["H", "hB"],
    NL: ["H", "hB"],
    PM: ["H", "hB"],
    PT: ["H", "hB"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    SI: ["H", "hB"],
    SR: ["H", "hB"],
    ST: ["H", "hB"],
    TG: ["H", "hB"],
    TR: ["H", "hB"],
    WF: ["H", "hB"],
    YT: ["H", "hB"],
    BD: ["h", "hB", "H"],
    PK: ["h", "hB", "H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BG: ["H", "hB", "h"],
    CH: ["H", "hB", "h"],
    GE: ["H", "hB", "h"],
    LI: ["H", "hB", "h"],
    ME: ["H", "hB", "h"],
    RS: ["H", "hB", "h"],
    UA: ["H", "hB", "h"],
    UZ: ["H", "hB", "h"],
    XK: ["H", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    BB: ["h", "hb", "H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    CA: ["h", "hb", "H", "hB"],
    DM: ["h", "hb", "H", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    FJ: ["h", "hb", "H", "hB"],
    FM: ["h", "hb", "H", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GM: ["h", "hb", "H", "hB"],
    GU: ["h", "hb", "H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    JM: ["h", "hb", "H", "hB"],
    KI: ["h", "hb", "H", "hB"],
    KN: ["h", "hb", "H", "hB"],
    KY: ["h", "hb", "H", "hB"],
    LC: ["h", "hb", "H", "hB"],
    LR: ["h", "hb", "H", "hB"],
    MH: ["h", "hb", "H", "hB"],
    MP: ["h", "hb", "H", "hB"],
    MW: ["h", "hb", "H", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    SB: ["h", "hb", "H", "hB"],
    SG: ["h", "hb", "H", "hB"],
    SL: ["h", "hb", "H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    SZ: ["h", "hb", "H", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    BO: ["H", "hB", "h", "hb"],
    EC: ["H", "hB", "h", "hb"],
    ES: ["H", "hB", "h", "hb"],
    GQ: ["H", "hB", "h", "hb"],
    PE: ["H", "hB", "h", "hb"],
    AE: ["h", "hB", "hb", "H"],
    "ar-001": ["h", "hB", "hb", "H"],
    BH: ["h", "hB", "hb", "H"],
    DZ: ["h", "hB", "hb", "H"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    HK: ["h", "hB", "hb", "H"],
    IQ: ["h", "hB", "hb", "H"],
    JO: ["h", "hB", "hb", "H"],
    KW: ["h", "hB", "hb", "H"],
    LB: ["h", "hB", "hb", "H"],
    LY: ["h", "hB", "hb", "H"],
    MO: ["h", "hB", "hb", "H"],
    MR: ["h", "hB", "hb", "H"],
    OM: ["h", "hB", "hb", "H"],
    PH: ["h", "hB", "hb", "H"],
    PS: ["h", "hB", "hb", "H"],
    QA: ["h", "hB", "hb", "H"],
    SA: ["h", "hB", "hb", "H"],
    SD: ["h", "hB", "hb", "H"],
    SY: ["h", "hB", "hb", "H"],
    TN: ["h", "hB", "hb", "H"],
    YE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    LA: ["H", "hb", "hB", "h"],
    CN: ["H", "hB", "hb", "h"],
    LV: ["H", "hB", "hb", "h"],
    TL: ["H", "hB", "hb", "h"],
    "zu-ZA": ["H", "hB", "hb", "h"],
    CD: ["hB", "H"],
    IR: ["hB", "H"],
    "hi-IN": ["hB", "h", "H"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "te-IN": ["hB", "h", "H"],
    KH: ["hB", "h", "H", "hb"],
    "ta-IN": ["hB", "h", "hb", "H"],
    BN: ["hb", "hB", "h", "H"],
    MY: ["hb", "hB", "h", "H"],
    ET: ["hB", "hb", "h", "H"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    TW: ["hB", "hb", "h", "H"],
    KE: ["hB", "hb", "H", "h"],
    MM: ["hB", "hb", "H", "h"],
    TZ: ["hB", "hb", "H", "h"],
    UG: ["hB", "hb", "H", "h"],
  };
  function zt(t, e) {
    for (var r = "", i = 0; i < t.length; i++) {
      var a = t.charAt(i);
      if (a === "j") {
        for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === a; ) s++, i++;
        var n = 1 + (s & 1),
          o = s < 2 ? 1 : 3 + (s >> 1),
          l = "a",
          c = Gr(e);
        for ((c == "H" || c == "k") && (o = 0); o-- > 0; ) r += l;
        for (; n-- > 0; ) r = c + r;
      } else a === "J" ? (r += "H") : (r += a);
    }
    return r;
  }
  function Gr(t) {
    var e = t.hourCycle;
    if (
      (e === void 0 &&
        t.hourCycles &&
        t.hourCycles.length &&
        (e = t.hourCycles[0]),
      e)
    )
      switch (e) {
        case "h24":
          return "k";
        case "h23":
          return "H";
        case "h12":
          return "h";
        case "h11":
          return "K";
        default:
          throw new Error("Invalid hourCycle");
      }
    var r = t.language,
      i;
    r !== "root" && (i = t.maximize().region);
    var a = re[i || ""] || re[r || ""] || re["".concat(r, "-001")] || re["001"];
    return a[0];
  }
  var Re,
    Vr = new RegExp("^".concat(Be.source, "*")),
    zr = new RegExp("".concat(Be.source, "*$"));
  function T(t, e) {
    return { start: t, end: e };
  }
  var jr = !!String.prototype.startsWith,
    Qr = !!String.fromCodePoint,
    Xr = !!Object.fromEntries,
    Zr = !!String.prototype.codePointAt,
    Wr = !!String.prototype.trimStart,
    Jr = !!String.prototype.trimEnd,
    Yr = !!Number.isSafeInteger,
    Kr = Yr
      ? Number.isSafeInteger
      : function (t) {
          return (
            typeof t == "number" &&
            isFinite(t) &&
            Math.floor(t) === t &&
            Math.abs(t) <= 9007199254740991
          );
        },
    Ne = !0;
  try {
    (jt = Wt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")),
      (Ne =
        ((Re = jt.exec("a")) === null || Re === void 0 ? void 0 : Re[0]) ===
        "a");
  } catch (t) {
    Ne = !1;
  }
  var jt,
    Qt = jr
      ? function (e, r, i) {
          return e.startsWith(r, i);
        }
      : function (e, r, i) {
          return e.slice(i, i + r.length) === r;
        },
    De = Qr
      ? String.fromCodePoint
      : function () {
          for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
          for (var i = "", a = e.length, s = 0, n; a > s; ) {
            if (((n = e[s++]), n > 1114111))
              throw RangeError(n + " is not a valid code point");
            i +=
              n < 65536
                ? String.fromCharCode(n)
                : String.fromCharCode(
                    ((n -= 65536) >> 10) + 55296,
                    (n % 1024) + 56320
                  );
          }
          return i;
        },
    Xt = Xr
      ? Object.fromEntries
      : function (e) {
          for (var r = {}, i = 0, a = e; i < a.length; i++) {
            var s = a[i],
              n = s[0],
              o = s[1];
            r[n] = o;
          }
          return r;
        },
    Zt = Zr
      ? function (e, r) {
          return e.codePointAt(r);
        }
      : function (e, r) {
          var i = e.length;
          if (!(r < 0 || r >= i)) {
            var a = e.charCodeAt(r),
              s;
            return a < 55296 ||
              a > 56319 ||
              r + 1 === i ||
              (s = e.charCodeAt(r + 1)) < 56320 ||
              s > 57343
              ? a
              : ((a - 55296) << 10) + (s - 56320) + 65536;
          }
        },
    ei = Wr
      ? function (e) {
          return e.trimStart();
        }
      : function (e) {
          return e.replace(Vr, "");
        },
    ti = Jr
      ? function (e) {
          return e.trimEnd();
        }
      : function (e) {
          return e.replace(zr, "");
        };
  function Wt(t, e) {
    return new RegExp(t, e);
  }
  var Oe;
  Ne
    ? ((qe = Wt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")),
      (Oe = function (e, r) {
        var i;
        qe.lastIndex = r;
        var a = qe.exec(e);
        return (i = a[1]) !== null && i !== void 0 ? i : "";
      }))
    : (Oe = function (e, r) {
        for (var i = []; ; ) {
          var a = Zt(e, r);
          if (a === void 0 || Yt(a) || ai(a)) break;
          i.push(a), (r += a >= 65536 ? 2 : 1);
        }
        return De.apply(void 0, i);
      });
  var qe,
    Jt = (function () {
      function t(e, r) {
        r === void 0 && (r = {}),
          (this.message = e),
          (this.position = { offset: 0, line: 1, column: 1 }),
          (this.ignoreTag = !!r.ignoreTag),
          (this.locale = r.locale),
          (this.requiresOtherClause = !!r.requiresOtherClause),
          (this.shouldParseSkeletons = !!r.shouldParseSkeletons);
      }
      return (
        (t.prototype.parse = function () {
          if (this.offset() !== 0) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1);
        }),
        (t.prototype.parseMessage = function (e, r, i) {
          for (var a = []; !this.isEOF(); ) {
            var s = this.char();
            if (s === 123) {
              var n = this.parseArgument(e, i);
              if (n.err) return n;
              a.push(n.val);
            } else {
              if (s === 125 && e > 0) break;
              if (s === 35 && (r === "plural" || r === "selectordinal")) {
                var o = this.clonePosition();
                this.bump(),
                  a.push({
                    type: H.pound,
                    location: T(o, this.clonePosition()),
                  });
              } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
                if (i) break;
                return this.error(
                  S.UNMATCHED_CLOSING_TAG,
                  T(this.clonePosition(), this.clonePosition())
                );
              } else if (s === 60 && !this.ignoreTag && Ue(this.peek() || 0)) {
                var n = this.parseTag(e, r);
                if (n.err) return n;
                a.push(n.val);
              } else {
                var n = this.parseLiteral(e, r);
                if (n.err) return n;
                a.push(n.val);
              }
            }
          }
          return { val: a, err: null };
        }),
        (t.prototype.parseTag = function (e, r) {
          var i = this.clonePosition();
          this.bump();
          var a = this.parseTagName();
          if ((this.bumpSpace(), this.bumpIf("/>")))
            return {
              val: {
                type: H.literal,
                value: "<".concat(a, "/>"),
                location: T(i, this.clonePosition()),
              },
              err: null,
            };
          if (this.bumpIf(">")) {
            var s = this.parseMessage(e + 1, r, !0);
            if (s.err) return s;
            var n = s.val,
              o = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ue(this.char()))
                return this.error(S.INVALID_TAG, T(o, this.clonePosition()));
              var l = this.clonePosition(),
                c = this.parseTagName();
              return a !== c
                ? this.error(
                    S.UNMATCHED_CLOSING_TAG,
                    T(l, this.clonePosition())
                  )
                : (this.bumpSpace(),
                  this.bumpIf(">")
                    ? {
                        val: {
                          type: H.tag,
                          value: a,
                          children: n,
                          location: T(i, this.clonePosition()),
                        },
                        err: null,
                      }
                    : this.error(S.INVALID_TAG, T(o, this.clonePosition())));
            } else
              return this.error(S.UNCLOSED_TAG, T(i, this.clonePosition()));
          } else return this.error(S.INVALID_TAG, T(i, this.clonePosition()));
        }),
        (t.prototype.parseTagName = function () {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && ii(this.char()); ) this.bump();
          return this.message.slice(e, this.offset());
        }),
        (t.prototype.parseLiteral = function (e, r) {
          for (var i = this.clonePosition(), a = ""; ; ) {
            var s = this.tryParseQuote(r);
            if (s) {
              a += s;
              continue;
            }
            var n = this.tryParseUnquoted(e, r);
            if (n) {
              a += n;
              continue;
            }
            var o = this.tryParseLeftAngleBracket();
            if (o) {
              a += o;
              continue;
            }
            break;
          }
          var l = T(i, this.clonePosition());
          return { val: { type: H.literal, value: a, location: l }, err: null };
        }),
        (t.prototype.tryParseLeftAngleBracket = function () {
          return !this.isEOF() &&
            this.char() === 60 &&
            (this.ignoreTag || !ri(this.peek() || 0))
            ? (this.bump(), "<")
            : null;
        }),
        (t.prototype.tryParseQuote = function (e) {
          if (this.isEOF() || this.char() !== 39) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if (e === "plural" || e === "selectordinal") break;
              return null;
            default:
              return null;
          }
          this.bump();
          var r = [this.char()];
          for (this.bump(); !this.isEOF(); ) {
            var i = this.char();
            if (i === 39)
              if (this.peek() === 39) r.push(39), this.bump();
              else {
                this.bump();
                break;
              }
            else r.push(i);
            this.bump();
          }
          return De.apply(void 0, r);
        }),
        (t.prototype.tryParseUnquoted = function (e, r) {
          if (this.isEOF()) return null;
          var i = this.char();
          return i === 60 ||
            i === 123 ||
            (i === 35 && (r === "plural" || r === "selectordinal")) ||
            (i === 125 && e > 0)
            ? null
            : (this.bump(), De(i));
        }),
        (t.prototype.parseArgument = function (e, r) {
          var i = this.clonePosition();
          if ((this.bump(), this.bumpSpace(), this.isEOF()))
            return this.error(
              S.EXPECT_ARGUMENT_CLOSING_BRACE,
              T(i, this.clonePosition())
            );
          if (this.char() === 125)
            return (
              this.bump(),
              this.error(S.EMPTY_ARGUMENT, T(i, this.clonePosition()))
            );
          var a = this.parseIdentifierIfPossible().value;
          if (!a)
            return this.error(S.MALFORMED_ARGUMENT, T(i, this.clonePosition()));
          if ((this.bumpSpace(), this.isEOF()))
            return this.error(
              S.EXPECT_ARGUMENT_CLOSING_BRACE,
              T(i, this.clonePosition())
            );
          switch (this.char()) {
            case 125:
              return (
                this.bump(),
                {
                  val: {
                    type: H.argument,
                    value: a,
                    location: T(i, this.clonePosition()),
                  },
                  err: null,
                }
              );
            case 44:
              return (
                this.bump(),
                this.bumpSpace(),
                this.isEOF()
                  ? this.error(
                      S.EXPECT_ARGUMENT_CLOSING_BRACE,
                      T(i, this.clonePosition())
                    )
                  : this.parseArgumentOptions(e, r, a, i)
              );
            default:
              return this.error(
                S.MALFORMED_ARGUMENT,
                T(i, this.clonePosition())
              );
          }
        }),
        (t.prototype.parseIdentifierIfPossible = function () {
          var e = this.clonePosition(),
            r = this.offset(),
            i = Oe(this.message, r),
            a = r + i.length;
          this.bumpTo(a);
          var s = this.clonePosition(),
            n = T(e, s);
          return { value: i, location: n };
        }),
        (t.prototype.parseArgumentOptions = function (e, r, i, a) {
          var s,
            n = this.clonePosition(),
            o = this.parseIdentifierIfPossible().value,
            l = this.clonePosition();
          switch (o) {
            case "":
              return this.error(S.EXPECT_ARGUMENT_TYPE, T(n, l));
            case "number":
            case "date":
            case "time": {
              this.bumpSpace();
              var c = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var h = this.clonePosition(),
                  f = this.parseSimpleArgStyleIfPossible();
                if (f.err) return f;
                var p = ti(f.val);
                if (p.length === 0)
                  return this.error(
                    S.EXPECT_ARGUMENT_STYLE,
                    T(this.clonePosition(), this.clonePosition())
                  );
                var m = T(h, this.clonePosition());
                c = { style: p, styleLocation: m };
              }
              var b = this.tryParseArgumentClose(a);
              if (b.err) return b;
              var y = T(a, this.clonePosition());
              if (c && Qt(c == null ? void 0 : c.style, "::", 0)) {
                var w = ei(c.style.slice(2));
                if (o === "number") {
                  var f = this.parseNumberSkeletonFromString(
                    w,
                    c.styleLocation
                  );
                  return f.err
                    ? f
                    : {
                        val: {
                          type: H.number,
                          value: i,
                          location: y,
                          style: f.val,
                        },
                        err: null,
                      };
                } else {
                  if (w.length === 0)
                    return this.error(S.EXPECT_DATE_TIME_SKELETON, y);
                  var x = w;
                  this.locale && (x = zt(w, this.locale));
                  var p = {
                      type: X.dateTime,
                      pattern: x,
                      location: c.styleLocation,
                      parsedOptions: this.shouldParseSkeletons ? Rt(x) : {},
                    },
                    E = o === "date" ? H.date : H.time;
                  return {
                    val: { type: E, value: i, location: y, style: p },
                    err: null,
                  };
                }
              }
              return {
                val: {
                  type:
                    o === "number" ? H.number : o === "date" ? H.date : H.time,
                  value: i,
                  location: y,
                  style:
                    (s = c == null ? void 0 : c.style) !== null && s !== void 0
                      ? s
                      : null,
                },
                err: null,
              };
            }
            case "plural":
            case "selectordinal":
            case "select": {
              var A = this.clonePosition();
              if ((this.bumpSpace(), !this.bumpIf(",")))
                return this.error(
                  S.EXPECT_SELECT_ARGUMENT_OPTIONS,
                  T(A, L({}, A))
                );
              this.bumpSpace();
              var B = this.parseIdentifierIfPossible(),
                P = 0;
              if (o !== "select" && B.value === "offset") {
                if (!this.bumpIf(":"))
                  return this.error(
                    S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    T(this.clonePosition(), this.clonePosition())
                  );
                this.bumpSpace();
                var f = this.tryParseDecimalInteger(
                  S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                  S.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                );
                if (f.err) return f;
                this.bumpSpace(),
                  (B = this.parseIdentifierIfPossible()),
                  (P = f.val);
              }
              var D = this.tryParsePluralOrSelectOptions(e, o, r, B);
              if (D.err) return D;
              var b = this.tryParseArgumentClose(a);
              if (b.err) return b;
              var O = T(a, this.clonePosition());
              return o === "select"
                ? {
                    val: {
                      type: H.select,
                      value: i,
                      options: Xt(D.val),
                      location: O,
                    },
                    err: null,
                  }
                : {
                    val: {
                      type: H.plural,
                      value: i,
                      options: Xt(D.val),
                      offset: P,
                      pluralType: o === "plural" ? "cardinal" : "ordinal",
                      location: O,
                    },
                    err: null,
                  };
            }
            default:
              return this.error(S.INVALID_ARGUMENT_TYPE, T(n, l));
          }
        }),
        (t.prototype.tryParseArgumentClose = function (e) {
          return this.isEOF() || this.char() !== 125
            ? this.error(
                S.EXPECT_ARGUMENT_CLOSING_BRACE,
                T(e, this.clonePosition())
              )
            : (this.bump(), { val: !0, err: null });
        }),
        (t.prototype.parseSimpleArgStyleIfPossible = function () {
          for (var e = 0, r = this.clonePosition(); !this.isEOF(); ) {
            var i = this.char();
            switch (i) {
              case 39: {
                this.bump();
                var a = this.clonePosition();
                if (!this.bumpUntil("'"))
                  return this.error(
                    S.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                    T(a, this.clonePosition())
                  );
                this.bump();
                break;
              }
              case 123: {
                (e += 1), this.bump();
                break;
              }
              case 125: {
                if (e > 0) e -= 1;
                else
                  return {
                    val: this.message.slice(r.offset, this.offset()),
                    err: null,
                  };
                break;
              }
              default:
                this.bump();
                break;
            }
          }
          return {
            val: this.message.slice(r.offset, this.offset()),
            err: null,
          };
        }),
        (t.prototype.parseNumberSkeletonFromString = function (e, r) {
          var i = [];
          try {
            i = Dt(e);
          } catch (a) {
            return this.error(S.INVALID_NUMBER_SKELETON, r);
          }
          return {
            val: {
              type: X.number,
              tokens: i,
              location: r,
              parsedOptions: this.shouldParseSkeletons ? Vt(i) : {},
            },
            err: null,
          };
        }),
        (t.prototype.tryParsePluralOrSelectOptions = function (e, r, i, a) {
          for (
            var s, n = !1, o = [], l = new Set(), c = a.value, h = a.location;
            ;

          ) {
            if (c.length === 0) {
              var f = this.clonePosition();
              if (r !== "select" && this.bumpIf("=")) {
                var p = this.tryParseDecimalInteger(
                  S.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  S.INVALID_PLURAL_ARGUMENT_SELECTOR
                );
                if (p.err) return p;
                (h = T(f, this.clonePosition())),
                  (c = this.message.slice(f.offset, this.offset()));
              } else break;
            }
            if (l.has(c))
              return this.error(
                r === "select"
                  ? S.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                  : S.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                h
              );
            c === "other" && (n = !0), this.bumpSpace();
            var m = this.clonePosition();
            if (!this.bumpIf("{"))
              return this.error(
                r === "select"
                  ? S.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                  : S.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                T(this.clonePosition(), this.clonePosition())
              );
            var b = this.parseMessage(e + 1, r, i);
            if (b.err) return b;
            var y = this.tryParseArgumentClose(m);
            if (y.err) return y;
            o.push([c, { value: b.val, location: T(m, this.clonePosition()) }]),
              l.add(c),
              this.bumpSpace(),
              (s = this.parseIdentifierIfPossible()),
              (c = s.value),
              (h = s.location);
          }
          return o.length === 0
            ? this.error(
                r === "select"
                  ? S.EXPECT_SELECT_ARGUMENT_SELECTOR
                  : S.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                T(this.clonePosition(), this.clonePosition())
              )
            : this.requiresOtherClause && !n
            ? this.error(
                S.MISSING_OTHER_CLAUSE,
                T(this.clonePosition(), this.clonePosition())
              )
            : { val: o, err: null };
        }),
        (t.prototype.tryParseDecimalInteger = function (e, r) {
          var i = 1,
            a = this.clonePosition();
          this.bumpIf("+") || (this.bumpIf("-") && (i = -1));
          for (var s = !1, n = 0; !this.isEOF(); ) {
            var o = this.char();
            if (o >= 48 && o <= 57)
              (s = !0), (n = n * 10 + (o - 48)), this.bump();
            else break;
          }
          var l = T(a, this.clonePosition());
          return s
            ? ((n *= i), Kr(n) ? { val: n, err: null } : this.error(r, l))
            : this.error(e, l);
        }),
        (t.prototype.offset = function () {
          return this.position.offset;
        }),
        (t.prototype.isEOF = function () {
          return this.offset() === this.message.length;
        }),
        (t.prototype.clonePosition = function () {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
          };
        }),
        (t.prototype.char = function () {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var r = Zt(this.message, e);
          if (r === void 0)
            throw Error(
              "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
            );
          return r;
        }),
        (t.prototype.error = function (e, r) {
          return {
            val: null,
            err: { kind: e, message: this.message, location: r },
          };
        }),
        (t.prototype.bump = function () {
          if (!this.isEOF()) {
            var e = this.char();
            e === 10
              ? ((this.position.line += 1),
                (this.position.column = 1),
                (this.position.offset += 1))
              : ((this.position.column += 1),
                (this.position.offset += e < 65536 ? 1 : 2));
          }
        }),
        (t.prototype.bumpIf = function (e) {
          if (Qt(this.message, e, this.offset())) {
            for (var r = 0; r < e.length; r++) this.bump();
            return !0;
          }
          return !1;
        }),
        (t.prototype.bumpUntil = function (e) {
          var r = this.offset(),
            i = this.message.indexOf(e, r);
          return i >= 0
            ? (this.bumpTo(i), !0)
            : (this.bumpTo(this.message.length), !1);
        }),
        (t.prototype.bumpTo = function (e) {
          if (this.offset() > e)
            throw Error(
              "targetOffset "
                .concat(
                  e,
                  " must be greater than or equal to the current offset "
                )
                .concat(this.offset())
            );
          for (e = Math.min(e, this.message.length); ; ) {
            var r = this.offset();
            if (r === e) break;
            if (r > e)
              throw Error(
                "targetOffset ".concat(
                  e,
                  " is at invalid UTF-16 code unit boundary"
                )
              );
            if ((this.bump(), this.isEOF())) break;
          }
        }),
        (t.prototype.bumpSpace = function () {
          for (; !this.isEOF() && Yt(this.char()); ) this.bump();
        }),
        (t.prototype.peek = function () {
          if (this.isEOF()) return null;
          var e = this.char(),
            r = this.offset(),
            i = this.message.charCodeAt(r + (e >= 65536 ? 2 : 1));
          return i != null ? i : null;
        }),
        t
      );
    })();
  function Ue(t) {
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
  }
  function ri(t) {
    return Ue(t) || t === 47;
  }
  function ii(t) {
    return (
      t === 45 ||
      t === 46 ||
      (t >= 48 && t <= 57) ||
      t === 95 ||
      (t >= 97 && t <= 122) ||
      (t >= 65 && t <= 90) ||
      t == 183 ||
      (t >= 192 && t <= 214) ||
      (t >= 216 && t <= 246) ||
      (t >= 248 && t <= 893) ||
      (t >= 895 && t <= 8191) ||
      (t >= 8204 && t <= 8205) ||
      (t >= 8255 && t <= 8256) ||
      (t >= 8304 && t <= 8591) ||
      (t >= 11264 && t <= 12271) ||
      (t >= 12289 && t <= 55295) ||
      (t >= 63744 && t <= 64975) ||
      (t >= 65008 && t <= 65533) ||
      (t >= 65536 && t <= 983039)
    );
  }
  function Yt(t) {
    return (
      (t >= 9 && t <= 13) ||
      t === 32 ||
      t === 133 ||
      (t >= 8206 && t <= 8207) ||
      t === 8232 ||
      t === 8233
    );
  }
  function ai(t) {
    return (
      (t >= 33 && t <= 35) ||
      t === 36 ||
      (t >= 37 && t <= 39) ||
      t === 40 ||
      t === 41 ||
      t === 42 ||
      t === 43 ||
      t === 44 ||
      t === 45 ||
      (t >= 46 && t <= 47) ||
      (t >= 58 && t <= 59) ||
      (t >= 60 && t <= 62) ||
      (t >= 63 && t <= 64) ||
      t === 91 ||
      t === 92 ||
      t === 93 ||
      t === 94 ||
      t === 96 ||
      t === 123 ||
      t === 124 ||
      t === 125 ||
      t === 126 ||
      t === 161 ||
      (t >= 162 && t <= 165) ||
      t === 166 ||
      t === 167 ||
      t === 169 ||
      t === 171 ||
      t === 172 ||
      t === 174 ||
      t === 176 ||
      t === 177 ||
      t === 182 ||
      t === 187 ||
      t === 191 ||
      t === 215 ||
      t === 247 ||
      (t >= 8208 && t <= 8213) ||
      (t >= 8214 && t <= 8215) ||
      t === 8216 ||
      t === 8217 ||
      t === 8218 ||
      (t >= 8219 && t <= 8220) ||
      t === 8221 ||
      t === 8222 ||
      t === 8223 ||
      (t >= 8224 && t <= 8231) ||
      (t >= 8240 && t <= 8248) ||
      t === 8249 ||
      t === 8250 ||
      (t >= 8251 && t <= 8254) ||
      (t >= 8257 && t <= 8259) ||
      t === 8260 ||
      t === 8261 ||
      t === 8262 ||
      (t >= 8263 && t <= 8273) ||
      t === 8274 ||
      t === 8275 ||
      (t >= 8277 && t <= 8286) ||
      (t >= 8592 && t <= 8596) ||
      (t >= 8597 && t <= 8601) ||
      (t >= 8602 && t <= 8603) ||
      (t >= 8604 && t <= 8607) ||
      t === 8608 ||
      (t >= 8609 && t <= 8610) ||
      t === 8611 ||
      (t >= 8612 && t <= 8613) ||
      t === 8614 ||
      (t >= 8615 && t <= 8621) ||
      t === 8622 ||
      (t >= 8623 && t <= 8653) ||
      (t >= 8654 && t <= 8655) ||
      (t >= 8656 && t <= 8657) ||
      t === 8658 ||
      t === 8659 ||
      t === 8660 ||
      (t >= 8661 && t <= 8691) ||
      (t >= 8692 && t <= 8959) ||
      (t >= 8960 && t <= 8967) ||
      t === 8968 ||
      t === 8969 ||
      t === 8970 ||
      t === 8971 ||
      (t >= 8972 && t <= 8991) ||
      (t >= 8992 && t <= 8993) ||
      (t >= 8994 && t <= 9e3) ||
      t === 9001 ||
      t === 9002 ||
      (t >= 9003 && t <= 9083) ||
      t === 9084 ||
      (t >= 9085 && t <= 9114) ||
      (t >= 9115 && t <= 9139) ||
      (t >= 9140 && t <= 9179) ||
      (t >= 9180 && t <= 9185) ||
      (t >= 9186 && t <= 9254) ||
      (t >= 9255 && t <= 9279) ||
      (t >= 9280 && t <= 9290) ||
      (t >= 9291 && t <= 9311) ||
      (t >= 9472 && t <= 9654) ||
      t === 9655 ||
      (t >= 9656 && t <= 9664) ||
      t === 9665 ||
      (t >= 9666 && t <= 9719) ||
      (t >= 9720 && t <= 9727) ||
      (t >= 9728 && t <= 9838) ||
      t === 9839 ||
      (t >= 9840 && t <= 10087) ||
      t === 10088 ||
      t === 10089 ||
      t === 10090 ||
      t === 10091 ||
      t === 10092 ||
      t === 10093 ||
      t === 10094 ||
      t === 10095 ||
      t === 10096 ||
      t === 10097 ||
      t === 10098 ||
      t === 10099 ||
      t === 10100 ||
      t === 10101 ||
      (t >= 10132 && t <= 10175) ||
      (t >= 10176 && t <= 10180) ||
      t === 10181 ||
      t === 10182 ||
      (t >= 10183 && t <= 10213) ||
      t === 10214 ||
      t === 10215 ||
      t === 10216 ||
      t === 10217 ||
      t === 10218 ||
      t === 10219 ||
      t === 10220 ||
      t === 10221 ||
      t === 10222 ||
      t === 10223 ||
      (t >= 10224 && t <= 10239) ||
      (t >= 10240 && t <= 10495) ||
      (t >= 10496 && t <= 10626) ||
      t === 10627 ||
      t === 10628 ||
      t === 10629 ||
      t === 10630 ||
      t === 10631 ||
      t === 10632 ||
      t === 10633 ||
      t === 10634 ||
      t === 10635 ||
      t === 10636 ||
      t === 10637 ||
      t === 10638 ||
      t === 10639 ||
      t === 10640 ||
      t === 10641 ||
      t === 10642 ||
      t === 10643 ||
      t === 10644 ||
      t === 10645 ||
      t === 10646 ||
      t === 10647 ||
      t === 10648 ||
      (t >= 10649 && t <= 10711) ||
      t === 10712 ||
      t === 10713 ||
      t === 10714 ||
      t === 10715 ||
      (t >= 10716 && t <= 10747) ||
      t === 10748 ||
      t === 10749 ||
      (t >= 10750 && t <= 11007) ||
      (t >= 11008 && t <= 11055) ||
      (t >= 11056 && t <= 11076) ||
      (t >= 11077 && t <= 11078) ||
      (t >= 11079 && t <= 11084) ||
      (t >= 11085 && t <= 11123) ||
      (t >= 11124 && t <= 11125) ||
      (t >= 11126 && t <= 11157) ||
      t === 11158 ||
      (t >= 11159 && t <= 11263) ||
      (t >= 11776 && t <= 11777) ||
      t === 11778 ||
      t === 11779 ||
      t === 11780 ||
      t === 11781 ||
      (t >= 11782 && t <= 11784) ||
      t === 11785 ||
      t === 11786 ||
      t === 11787 ||
      t === 11788 ||
      t === 11789 ||
      (t >= 11790 && t <= 11798) ||
      t === 11799 ||
      (t >= 11800 && t <= 11801) ||
      t === 11802 ||
      t === 11803 ||
      t === 11804 ||
      t === 11805 ||
      (t >= 11806 && t <= 11807) ||
      t === 11808 ||
      t === 11809 ||
      t === 11810 ||
      t === 11811 ||
      t === 11812 ||
      t === 11813 ||
      t === 11814 ||
      t === 11815 ||
      t === 11816 ||
      t === 11817 ||
      (t >= 11818 && t <= 11822) ||
      t === 11823 ||
      (t >= 11824 && t <= 11833) ||
      (t >= 11834 && t <= 11835) ||
      (t >= 11836 && t <= 11839) ||
      t === 11840 ||
      t === 11841 ||
      t === 11842 ||
      (t >= 11843 && t <= 11855) ||
      (t >= 11856 && t <= 11857) ||
      t === 11858 ||
      (t >= 11859 && t <= 11903) ||
      (t >= 12289 && t <= 12291) ||
      t === 12296 ||
      t === 12297 ||
      t === 12298 ||
      t === 12299 ||
      t === 12300 ||
      t === 12301 ||
      t === 12302 ||
      t === 12303 ||
      t === 12304 ||
      t === 12305 ||
      (t >= 12306 && t <= 12307) ||
      t === 12308 ||
      t === 12309 ||
      t === 12310 ||
      t === 12311 ||
      t === 12312 ||
      t === 12313 ||
      t === 12314 ||
      t === 12315 ||
      t === 12316 ||
      t === 12317 ||
      (t >= 12318 && t <= 12319) ||
      t === 12320 ||
      t === 12336 ||
      t === 64830 ||
      t === 64831 ||
      (t >= 65093 && t <= 65094)
    );
  }
  function Fe(t) {
    t.forEach(function (e) {
      if ((delete e.location, ve(e) || ge(e)))
        for (var r in e.options)
          delete e.options[r].location, Fe(e.options[r].value);
      else
        (fe(e) && xe(e.style)) || ((me(e) || ye(e)) && te(e.style))
          ? delete e.style.location
          : be(e) && Fe(e.children);
    });
  }
  function ie(t, e) {
    e === void 0 && (e = {}),
      (e = L({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e));
    var r = new Jt(t, e).parse();
    if (r.err) {
      var i = SyntaxError(S[r.err.kind]);
      throw (
        ((i.location = r.err.location), (i.originalMessage = r.err.message), i)
      );
    }
    return (e == null ? void 0 : e.captureLocation) || Fe(r.val), r.val;
  }
  function ae(t, e) {
    var r = e && e.cache ? e.cache : ci,
      i = e && e.serializer ? e.serializer : di,
      a = e && e.strategy ? e.strategy : ni;
    return a(t, { cache: r, serializer: i });
  }
  function si(t) {
    return t == null || typeof t == "number" || typeof t == "boolean";
  }
  function Kt(t, e, r, i) {
    var a = si(i) ? i : r(i),
      s = e.get(a);
    return typeof s == "undefined" && ((s = t.call(this, i)), e.set(a, s)), s;
  }
  function er(t, e, r) {
    var i = Array.prototype.slice.call(arguments, 3),
      a = r(i),
      s = e.get(a);
    return typeof s == "undefined" && ((s = t.apply(this, i)), e.set(a, s)), s;
  }
  function $e(t, e, r, i, a) {
    return r.bind(e, t, i, a);
  }
  function ni(t, e) {
    var r = t.length === 1 ? Kt : er;
    return $e(t, this, r, e.cache.create(), e.serializer);
  }
  function oi(t, e) {
    return $e(t, this, er, e.cache.create(), e.serializer);
  }
  function li(t, e) {
    return $e(t, this, Kt, e.cache.create(), e.serializer);
  }
  var di = function () {
    return JSON.stringify(arguments);
  };
  function Ge() {
    this.cache = Object.create(null);
  }
  Ge.prototype.get = function (t) {
    return this.cache[t];
  };
  Ge.prototype.set = function (t, e) {
    this.cache[t] = e;
  };
  var ci = {
      create: function () {
        return new Ge();
      },
    },
    _e = { variadic: oi, monadic: li };
  var Z;
  (function (t) {
    (t.MISSING_VALUE = "MISSING_VALUE"),
      (t.INVALID_VALUE = "INVALID_VALUE"),
      (t.MISSING_INTL_API = "MISSING_INTL_API");
  })(Z || (Z = {}));
  var se = (function (t) {
    ee(e, t);
    function e(r, i, a) {
      var s = t.call(this, r) || this;
      return (s.code = i), (s.originalMessage = a), s;
    }
    return (
      (e.prototype.toString = function () {
        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
      }),
      e
    );
  })(Error);
  var Ve = (function (t) {
    ee(e, t);
    function e(r, i, a, s) {
      return (
        t.call(
          this,
          'Invalid values for "'
            .concat(r, '": "')
            .concat(i, '". Options are "')
            .concat(Object.keys(a).join('", "'), '"'),
          Z.INVALID_VALUE,
          s
        ) || this
      );
    }
    return e;
  })(se);
  var tr = (function (t) {
    ee(e, t);
    function e(r, i, a) {
      return (
        t.call(
          this,
          'Value for "'.concat(r, '" must be of type ').concat(i),
          Z.INVALID_VALUE,
          a
        ) || this
      );
    }
    return e;
  })(se);
  var rr = (function (t) {
    ee(e, t);
    function e(r, i) {
      return (
        t.call(
          this,
          'The intl string context variable "'
            .concat(r, '" was not provided to the string "')
            .concat(i, '"'),
          Z.MISSING_VALUE,
          i
        ) || this
      );
    }
    return e;
  })(se);
  var N;
  (function (t) {
    (t[(t.literal = 0)] = "literal"), (t[(t.object = 1)] = "object");
  })(N || (N = {}));
  function hi(t) {
    return t.length < 2
      ? t
      : t.reduce(function (e, r) {
          var i = e[e.length - 1];
          return (
            !i || i.type !== N.literal || r.type !== N.literal
              ? e.push(r)
              : (i.value += r.value),
            e
          );
        }, []);
  }
  function pi(t) {
    return typeof t == "function";
  }
  function ne(t, e, r, i, a, s, n) {
    if (t.length === 1 && Me(t[0]))
      return [{ type: N.literal, value: t[0].value }];
    for (var o = [], l = 0, c = t; l < c.length; l++) {
      var h = c[l];
      if (Me(h)) {
        o.push({ type: N.literal, value: h.value });
        continue;
      }
      if (Bt(h)) {
        typeof s == "number" &&
          o.push({ type: N.literal, value: r.getNumberFormat(e).format(s) });
        continue;
      }
      var f = h.value;
      if (!(a && f in a)) throw new rr(f, n);
      var p = a[f];
      if (Mt(h)) {
        (!p || typeof p == "string" || typeof p == "number") &&
          (p = typeof p == "string" || typeof p == "number" ? String(p) : ""),
          o.push({
            type: typeof p == "string" ? N.literal : N.object,
            value: p,
          });
        continue;
      }
      if (me(h)) {
        var m =
          typeof h.style == "string"
            ? i.date[h.style]
            : te(h.style)
            ? h.style.parsedOptions
            : void 0;
        o.push({ type: N.literal, value: r.getDateTimeFormat(e, m).format(p) });
        continue;
      }
      if (ye(h)) {
        var m =
          typeof h.style == "string"
            ? i.time[h.style]
            : te(h.style)
            ? h.style.parsedOptions
            : i.time.medium;
        o.push({ type: N.literal, value: r.getDateTimeFormat(e, m).format(p) });
        continue;
      }
      if (fe(h)) {
        var m =
          typeof h.style == "string"
            ? i.number[h.style]
            : xe(h.style)
            ? h.style.parsedOptions
            : void 0;
        m && m.scale && (p = p * (m.scale || 1)),
          o.push({ type: N.literal, value: r.getNumberFormat(e, m).format(p) });
        continue;
      }
      if (be(h)) {
        var b = h.children,
          y = h.value,
          w = a[y];
        if (!pi(w)) throw new tr(y, "function", n);
        var x = ne(b, e, r, i, a, s),
          E = w(
            x.map(function (P) {
              return P.value;
            })
          );
        Array.isArray(E) || (E = [E]),
          o.push.apply(
            o,
            E.map(function (P) {
              return {
                type: typeof P == "string" ? N.literal : N.object,
                value: P,
              };
            })
          );
      }
      if (ve(h)) {
        var A = h.options[p] || h.options.other;
        if (!A) throw new Ve(h.value, p, Object.keys(h.options), n);
        o.push.apply(o, ne(A.value, e, r, i, a));
        continue;
      }
      if (ge(h)) {
        var A = h.options["=".concat(p)];
        if (!A) {
          if (!Intl.PluralRules)
            throw new se(
              `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
              Z.MISSING_INTL_API,
              n
            );
          var B = r
            .getPluralRules(e, { type: h.pluralType })
            .select(p - (h.offset || 0));
          A = h.options[B] || h.options.other;
        }
        if (!A) throw new Ve(h.value, p, Object.keys(h.options), n);
        o.push.apply(o, ne(A.value, e, r, i, a, p - (h.offset || 0)));
        continue;
      }
    }
    return hi(o);
  }
  function ui(t, e) {
    return e
      ? L(
          L(L({}, t || {}), e || {}),
          Object.keys(t).reduce(function (r, i) {
            return (r[i] = L(L({}, t[i]), e[i] || {})), r;
          }, {})
        )
      : t;
  }
  function fi(t, e) {
    return e
      ? Object.keys(t).reduce(function (r, i) {
          return (r[i] = ui(t[i], e[i])), r;
        }, L({}, t))
      : t;
  }
  function ze(t) {
    return {
      create: function () {
        return {
          get: function (e) {
            return t[e];
          },
          set: function (e, r) {
            t[e] = r;
          },
        };
      },
    };
  }
  function mi(t) {
    return (
      t === void 0 && (t = { number: {}, dateTime: {}, pluralRules: {} }),
      {
        getNumberFormat: ae(
          function () {
            for (var e, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            return new ((e = Intl.NumberFormat).bind.apply(
              e,
              ue([void 0], r, !1)
            ))();
          },
          { cache: ze(t.number), strategy: _e.variadic }
        ),
        getDateTimeFormat: ae(
          function () {
            for (var e, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            return new ((e = Intl.DateTimeFormat).bind.apply(
              e,
              ue([void 0], r, !1)
            ))();
          },
          { cache: ze(t.dateTime), strategy: _e.variadic }
        ),
        getPluralRules: ae(
          function () {
            for (var e, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            return new ((e = Intl.PluralRules).bind.apply(
              e,
              ue([void 0], r, !1)
            ))();
          },
          { cache: ze(t.pluralRules), strategy: _e.variadic }
        ),
      }
    );
  }
  var ir = (function () {
    function t(e, r, i, a) {
      var s = this;
      if (
        (r === void 0 && (r = t.defaultLocale),
        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
        (this.format = function (n) {
          var o = s.formatToParts(n);
          if (o.length === 1) return o[0].value;
          var l = o.reduce(function (c, h) {
            return (
              !c.length ||
              h.type !== N.literal ||
              typeof c[c.length - 1] != "string"
                ? c.push(h.value)
                : (c[c.length - 1] += h.value),
              c
            );
          }, []);
          return l.length <= 1 ? l[0] || "" : l;
        }),
        (this.formatToParts = function (n) {
          return ne(
            s.ast,
            s.locales,
            s.formatters,
            s.formats,
            n,
            void 0,
            s.message
          );
        }),
        (this.resolvedOptions = function () {
          var n;
          return {
            locale:
              ((n = s.resolvedLocale) === null || n === void 0
                ? void 0
                : n.toString()) ||
              Intl.NumberFormat.supportedLocalesOf(s.locales)[0],
          };
        }),
        (this.getAst = function () {
          return s.ast;
        }),
        (this.locales = r),
        (this.resolvedLocale = t.resolveLocale(r)),
        typeof e == "string")
      ) {
        if (((this.message = e), !t.__parse))
          throw new TypeError(
            "IntlMessageFormat.__parse must be set to process `message` of type `string`"
          );
        this.ast = t.__parse(e, {
          ignoreTag: a == null ? void 0 : a.ignoreTag,
          locale: this.resolvedLocale,
        });
      } else this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      (this.formats = fi(t.formats, i)),
        (this.formatters = (a && a.formatters) || mi(this.formatterCache));
    }
    return (
      Object.defineProperty(t, "defaultLocale", {
        get: function () {
          return (
            t.memoizedDefaultLocale ||
              (t.memoizedDefaultLocale =
                new Intl.NumberFormat().resolvedOptions().locale),
            t.memoizedDefaultLocale
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.memoizedDefaultLocale = null),
      (t.resolveLocale = function (e) {
        if (typeof Intl.Locale != "undefined") {
          var r = Intl.NumberFormat.supportedLocalesOf(e);
          return r.length > 0
            ? new Intl.Locale(r[0])
            : new Intl.Locale(typeof e == "string" ? e : e[0]);
        }
      }),
      (t.__parse = ie),
      (t.formats = {
        number: {
          integer: { maximumFractionDigits: 0 },
          currency: { style: "currency" },
          percent: { style: "percent" },
        },
        date: {
          short: { month: "numeric", day: "numeric", year: "2-digit" },
          medium: { month: "short", day: "numeric", year: "numeric" },
          long: { month: "long", day: "numeric", year: "numeric" },
          full: {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          },
        },
        time: {
          short: { hour: "numeric", minute: "numeric" },
          medium: { hour: "numeric", minute: "numeric", second: "numeric" },
          long: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          },
          full: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          },
        },
      }),
      t
    );
  })();
  var ar = ir;
  var yi = ["add_to_cart.prompt_personalization_text"];
  function g(t, e = {}) {
    let r = Reflow.locales;
    if (!r) throw new Error("Reflow: Missing locale JSON");
    t = t.toLowerCase();
    let i = r[t],
      a = r.locale;
    if (!a || !i)
      return (
        console.error(
          "Reflow: Unable to resolve locale string with id '" + t + "'"
        ),
        ""
      );
    try {
      return new ar(i, a).format(e);
    } catch (s) {
      return (
        console.error(
          "Reflow: Unable to resolve IntlMessageFormat with id '" + t + "'"
        ),
        ""
      );
    }
  }
  function v(t, e = {}) {
    let r = document.createElement("div");
    return (r.innerText = g(t, e)), r.innerHTML;
  }
  function sr(t) {
    let e = Reflow.locales,
      r = {},
      i = "";
    if (!t.locale)
      return (
        console.error(
          "Reflow: Localization - Missing locale in localization JSON"
        ),
        {}
      );
    for (let a in e) t[a] || (i += a + ", ");
    i.length &&
      ((i = i.slice(0, -2)),
      console.info(
        "Reflow: Localization - The following keys are missing form the provided localization JSON. English language version will be used for the respective phrases instead. [" +
          i +
          "]"
      ));
    for (let a in t) {
      if (!e[a] && !yi.includes(a)) {
        console.error(
          'Reflow: Localization - Unsupported key "' +
            a +
            '" in localization JSON'
        );
        continue;
      }
      let s;
      try {
        s = ie(t[a]);
      } catch (o) {
        console.error(
          `Reflow: Localization - Invalid ICU Message syntax for "${a}". English language version will be used instead.`
        );
        continue;
      }
      let n = s.filter((o) => o.type == 1).map((o) => o.value);
      if (n.length) {
        let o = ie(e[a])
            .filter((c) => c.type == 1)
            .map((c) => c.value),
          l = n.filter((c) => !o.includes(c));
        if (l.length) {
          console.error(
            `Reflow: Localization - Unsupported property {${l[0]}} in "${a}". English language version will be used instead.`
          );
          continue;
        }
      }
      r[a] = t[a];
    }
    return r;
  }
  function F(t, e = g("error")) {
    let r = new $(d('<div data-reflow-type="toast"></div>'), {
      type: "error",
      title: e,
      description: t,
    });
    r.init(), r.show();
  }
  function z(t, e) {
    var a;
    let i =
      (((a = t == null ? void 0 : t.data) == null ? void 0 : a.errors) || {})[
        e
      ] || "";
    return (
      t.data.errorCode &&
        (typeof t.data.errorCode == "string"
          ? (i = g(t.data.errorCode))
          : (i = g(t.data.errorCode.code, t.data.errorCode.formats))),
      i
    );
  }
  var we = (t, e, r) => {
      document.dispatchEvent(new Event(t), e),
        "BroadcastChannel" in window &&
          new BroadcastChannel("reflow").postMessage({ event: t, data: r });
    },
    Q = (t, e) => {
      if ((document.addEventListener(t, e), "BroadcastChannel" in window)) {
        let r = new BroadcastChannel("reflow");
        r.onmessage = (i) => {
          i.data.event && i.data.event == t && e();
        };
      }
    };
  var q = class extends R {
      constructor(e, r) {
        super(e, r);
        C(this, "_state", null);
        C(this, "step", "cart");
        C(this, "activeDeliveryTab", "pickup");
        C(this, "shippingMethodIndex", -1);
        C(this, "chosenStoreLocation", -1);
        C(this, "shippingAddress", {});
        C(this, "billingAddress", {});
        C(this, "billingVisible", !1);
        C(this, "paypalButtonsInitialized", !1);
        C(this, "paypalErrorText", null);
        C(this, "backendUpdateTimeout", null);
        C(this, "pendingBackendUpdates", {});
        (e.innerHTML = `
			<div class="reflow-shopping-cart" style="display:none">

				<div class="ref-loading-overlay"></div>
				<div class="ref-message"></div>

				<div class="ref-cart">
					<div class="ref-heading">${v("shopping_cart")}</div>
					<div class="ref-th">
						<div class="ref-product-col">${v("product")}</div>
						<div class="ref-price-col">${v("price")}</div>
						<div class="ref-quantity-col">${v("quantity")}</div>
						<div class="ref-total-col">${v("total")}</div>
					</div>
					<div class="ref-cart-table"></div>
					<div class="ref-footer">
						<div class="ref-links"></div>
						<div class="ref-totals">
							<div class="ref-subtotal"></div>
							<form class="ref-accept-terms">
								<label>
									<input type="checkbox" id="ref-terms-agreement" required data-state-src="accept-terms">
									<span class="ref-terms-agreement-text"></span>
								</label>
							</form>
							<div class="ref-row ref-checkout-buttons">
								<div class="ref-paypal-express-checkout-holder"></div>
								<div class="ref-button ref-standard-checkout-button">${v("cart.checkout")}</div>
							</div>
						</div>
					</div>
				</div>

				<div class="ref-checkout">
					<div class="ref-checkout-content">
						<form class="ref-details">
							<div class="ref-back">\u2190 ${v("cart.back_to_cart")}</div>
							<div class="ref-heading">${v("cart.customer_details")}</div>
							<label>
								<span>${v("email")}</span>
								<input type="email" name="email" id="ref-field-email" class="ref-form-control" value="" required data-state-src="email" />
								<div class="ref-validation-error"></div>
							</label>
							<label class="ref-phone-input">
								<span>${v("phone")}</span>
								<input type="tel" name="phone" id="ref-field-phone" class="ref-form-control" value="" pattern="[0-9\\+\\- ]{5,30}" placeholder="+1234567890" required  data-state-src="phone" />
								<div class="ref-validation-error"></div>
							</label>
							<label class="ref-pickup-customer-name-input">
								<span>${v("name")}</span>
								<input type="text" name="pickup-customer-name" class="ref-form-control" value="" data-state-src="pickup-customer-name" minlength="5" required />
								<div class="ref-validation-error"></div>
							</label>

							<div class="ref-heading ref-heading-delivery">${v("delivery")}</div>
							<div class="ref-delivery-unavailable"></div>
							<div class="ref-delivery-card">

								<div class="ref-tab ref-local-pickup-tab" data-ref-delivery="pickup">
									<label class="ref-tab-toggle">
										<input type="radio" value="pickup" name="delivery-method" required />
										<div class="ref-heading-small">${v("pickup_at_store")}</div>
									</label>
									<fieldset class="ref-tab-content">
										<div class="ref-heading-small">${v("cart.select_store")}</div>
										<div class="ref-locations ref-error-parent"></div>

										<div class="ref-billing-container">
											<div class="ref-button ref-add-billing">${v("cart.add_billing")}</div>

											<fieldset class="ref-billing-address" disabled>
												<div class="ref-row">
													<div class="ref-heading-small">${v("billing_address")}</div>
													<div class="ref-button ref-remove-billing">${v("remove")}</div>
												</div>
												<div class="ref-billing-address-holder"></div>
											</fieldset>
										</div>
									</fieldset>
								</div>

								<div class="ref-tab ref-shipping-tab" data-ref-delivery="shipping">
									<label class="ref-tab-toggle">
										<input type="radio" value="shipping" name="delivery-method" required />
										<div class="ref-heading-small">${v("cart.deliver_to_address")}</div>
									</label>
									<fieldset class="ref-tab-content">
										<div class="ref-heading-small">${v("shipping_address")}</div>
										<div class="ref-shipping-address-holder"></div>

										<div class="ref-billing-container">
											<div class="ref-button ref-add-billing">${v("cart.add_billing")}</div>

											<fieldset class="ref-billing-address" disabled>
												<div class="ref-row">
													<div class="ref-heading-small">${v("billing_address")}</div>
													<div class="ref-button ref-remove-billing">${v("remove")}</div>
												</div>
												<div class="ref-billing-address-holder"></div>
											</fieldset>
										</div>
									
										<div class="ref-heading-shipping-methods ref-heading-small">${v(
                      "shipping_method"
                    )}</div>
										<div class="ref-shipping-methods ref-error-parent"></div>

									</fieldset>
								</div>
							
							</div>

							<div class="ref-tax-note">
								<hr>

								<div class="ref-field-collapsible open">
									<span class="ref-field-toggle">
										<span class="ref-field-toggle-title">${v("cart.tax_exemption_add")}</span>
									</span>
									<div class="ref-collapse">
										<div class="ref-tax-exemption-file">
											<div class="ref-old-tax-file">
												<a href="#" class="ref-tax-file-dl">${v("cart.tax_exemption_file")}</a>
												<span class="ref-remove-tax-file">${v("remove")}</span>
											</div>
											<label class="ref-new-tax-file">
												<span class="ref-tax-file-label">${v("cart.tax_exemption_file_prompt")}</span>
												<input type="file" name="tax-exemption-file" id="ref-field-exemption-file" class="ref-form-control" accept=".doc,.docx,.pdf,.jpg,.jpeg,.png" />
												<div class="ref-validation-error"></div>
											</label>
										</div>
										<label class="ref-tax-exemption-text">
											<span>${v("cart.tax_exemption_number_prompt")}</span>
											<input type="text" name="tax-exemption-text" id="ref-field-exemption-text" class="ref-form-control" maxlength="30" />
											<div class="ref-validation-error"></div>
										</label>
									</div>
								</div>
							</div>

							<hr />

							<div class="ref-field-collapsible ref-note-to-seller open">
								<span class="ref-field-toggle">
									<span class="ref-field-toggle-title">${v("cart.note_to_seller")}</span>
								</span>
								<label class="ref-collapse">
									<textarea id="ref-field-note-seller" class="ref-form-control" name="note-to-seller" row="4" maxlength="1000" placeholder="${v(
                    "cart.note_to_seller_placeholder"
                  )}" data-state-src="note"></textarea>
								</label>
								<div class="ref-validation-error"></div>
							</div>

							<hr />

							<div>
								<div class="ref-heading ref-heading-payment">${v("payment")}</div>
								<div class="ref-paypal-payment-holder"></div>
								<div class="ref-standard-payment-buttons"></div>
							</div>
						</form>

						<div class="ref-instructions">
							<div class="ref-heading ref-payment-method-name"></div>
							<div class="ref-payment-method-instructions"></div>
						</div>

						<div class="ref-links"></div>
					</div>

					<div class="ref-checkout-summary">
						<div class="ref-heading">${v("cart.order_summary")}</div>
						<div class="ref-products"></div>
						<hr>
						<div class="ref-coupon-code">
							<div class="ref-coupon-container">
								<div class="ref-coupon-input-holder">
									<input id="ref-coupon-input" class="ref-form-control" name="coupon-code" type="text" maxlength="32" autocomplete="off" placeholder="${v(
                    "cart.coupon_placeholder"
                  )}">
									<span class="ref-coupon-input-clear" title="${v("clear")}">\u2715</span>
								</div>
								<div class="ref-button ref-button-success ref-add-code inactive">${v(
                  "apply"
                )}</div>
							</div>
							<div class="ref-validation-error"></div>
						</div>
						<hr>
						<div class="ref-totals">
							<div class="ref-subtotal">
								<div class="ref-row"><span>${v("subtotal")}</span><span></span></div>
							</div>
							<div class="ref-applied-coupon">
								<div class="ref-row">
									<div class="ref-row"><span></span><span class="ref-remove-coupon">${v(
                    "remove"
                  )}</span></div>
									<span></span>
								</div>
								<div class="ref-applied-coupon-error"></div>
							</div>
							<div class="ref-shipping">
								<div class="ref-row"><span>${v("shipping")}</span><span></span></div>
							</div>
							<div class="ref-taxes">
								<div class="ref-row"><span></span><span></span></div>
							</div>
						</div>
						<hr />
						<div class="ref-total">
							<div class="ref-row"><span>${v("total")}</span><span></span></div>
							<div class="ref-total-note"></div>
						</div>
					</div>
					<div class="ref-summary-toggle ref-field-collapsible">
						<span class="ref-field-toggle">
							<span class="ref-field-toggle-title">${v("cart.show_summary")}</span>
							<span class="ref-summary-total"></span>
						</span>
					</div>
				</div>
			</div>
		`),
          (this.message = e.querySelector(".ref-message")),
          (this.cart = e.querySelector(".ref-cart")),
          (this.checkout = e.querySelector(".ref-checkout")),
          (this.productTable = e.querySelector(".ref-cart-table")),
          (this.loadingOverlay = e.querySelector(".ref-loading-overlay")),
          (this.cartSubtotal = e.querySelector(".ref-cart .ref-subtotal")),
          (this.noteToSeller = e.querySelector(".ref-note-to-seller")),
          (this.acceptTerms = e.querySelector(".ref-accept-terms")),
          (this.couponCode = e.querySelector(".ref-coupon-code")),
          (this.couponInput = e.querySelector("#ref-coupon-input")),
          (this.couponButton = e.querySelector(".ref-button.ref-add-code")),
          (this.couponClear = e.querySelector(".ref-coupon-input-clear")),
          (this.couponError = e.querySelector(
            ".ref-coupon-code .ref-validation-error"
          )),
          (this.detailsForm = e.querySelector("form.ref-details")),
          (this.taxNote = e.querySelector(".ref-tax-note")),
          (this.fileExemptionInput = e.querySelector(
            "#ref-field-exemption-file"
          )),
          (this.textExemptionInput = e.querySelector(
            "#ref-field-exemption-text"
          )),
          (this.shippingMethodHeading = e.querySelector(
            ".ref-heading-shipping-methods"
          )),
          (this.shippingMethodHolder = e.querySelector(
            ".ref-shipping-methods"
          )),
          (this.locationsHolder = e.querySelector(".ref-locations")),
          (this.standardPaymentButtonHolder = e.querySelector(
            ".ref-standard-payment-buttons"
          )),
          (this.shippingAddressWidget = new je({
            model: this.shippingAddress,
            fieldPrefix: "shipping",
            getCountries: () => this.getShippableCountries(),
            onChange: () => this.updateShippingAddress(),
          })),
          (this.billingAddressWidget = new je({
            model: this.billingAddress,
            fieldPrefix: "billing",
            getCountries: () => this.getShippableCountries(),
          }));
      }
      init() {
        this.taxNote.addEventListener(
          "change",
          this.onTaxExemptionChange.bind(this)
        ),
          this.shippingMethodHolder.addEventListener(
            "change",
            this.onShippingMethodHolderChange.bind(this)
          ),
          this.locationsHolder.addEventListener(
            "change",
            this.onPickupLocationChange.bind(this)
          ),
          this.couponInput.addEventListener(
            "input",
            this.onCouponCodeInput.bind(this)
          ),
          this.node.addEventListener("click", this.onClick.bind(this)),
          this.node.addEventListener("keypress", this.onKeypress.bind(this)),
          this.node.addEventListener(
            "change",
            this.saveToLocalStorage.bind(this)
          ),
          (this.scheduleRefresh = de(this.refresh.bind(this), 250)),
          Q("reflow-add-to-cart", this.scheduleRefresh),
          Q("reflow-update-cart-product", this.scheduleRefresh),
          Q("reflow-remove-cart-product", this.scheduleRefresh);
      }
      isDemoMode() {
        return this.demoMode || (this.state && this.state.demoMode);
      }
      getShippableCountries() {
        var e;
        return ((e = this.state) == null ? void 0 : e.shippableCountries) || [];
      }
      offersShipping() {
        return this.getShippableCountries().length;
      }
      offersLocalPickup() {
        var e, r;
        return (r = (e = this.state) == null ? void 0 : e.locations) == null
          ? void 0
          : r.length;
      }
      getCountryByCode(e) {
        return this.getShippableCountries().find((r) => r.country_code == e);
      }
      isBillingFilled() {
        return Object.entries(this.billingAddress).some(
          (e) =>
            ["city", "country", "name", "address"].includes(e[0]) && e[1].length
        );
      }
      async getPaypalInstance() {
        return window.paypal
          ? window.paypal
          : (q._paypalPromise ||
              (q._paypalPromise = new Promise((e, r) => {
                let i = document.createElement("script");
                (i.onload = () => e(window.paypal)),
                  (i.onerror = (a) => r(a)),
                  document.body.append(i),
                  (i.src =
                    "https://www.paypal.com/sdk/js?client-id=" +
                    this.state.paymentProviders.paypal.clientID +
                    "&disable-funding=credit,bancontact,blik,eps,giropay,ideal,mercadopago,mybank,p24,sepa,sofort,venmo&merchant-id=" +
                    this.state.paymentProviders.paypal.merchantID +
                    "&currency=" +
                    this.state.currency +
                    "&integration-date=2021-09-01");
              })),
            q._paypalPromise);
      }
      restoreUserInput() {
        if (!!this.state) {
          if (!this.isDemoMode()) {
            let e = this.node.querySelectorAll("[data-state-src]"),
              r = this.state,
              i = Reflow.cart.localFormData.getAll();
            for (let n of e) {
              let o = n.getAttribute("data-state-src"),
                l = n.getAttribute("type"),
                c = i[o] !== void 0 ? i[o] : r[o];
              c !== void 0 &&
                (l == "checkbox" ? (n.checked = !!c) : (n.value = c));
            }
            let a = this.state.shippingAddress || {},
              s = this.state.billingAddress || {};
            for (let [n, o] of Object.entries(i)) {
              let l = n.split("-");
              if (l.length > 1) {
                let c = l[0],
                  h = l[1];
                c == "shipping" && (a[h] = o), c == "billing" && (s[h] = o);
              }
            }
            Object.assign(this.shippingAddress, a),
              Object.assign(this.billingAddress, s);
          }
          (this.billingVisible = this.isBillingFilled()),
            this.shippingAddressWidget.update(!0, !0),
            this.billingAddressWidget.update(!0, !0),
            this.offersLocalPickup()
              ? (this.activeDeliveryTab = "pickup")
              : this.offersShipping() && (this.activeDeliveryTab = "shipping");
        }
      }
      get key() {
        return localStorage.reflowCartKey;
      }
      async onClick(e) {
        var i, a;
        if (!e.target.getAttribute("data-disabled-click")) {
          if (e.target.closest(".ref-product-remove")) {
            let s = e.target.closest(".ref-product"),
              n = s.dataset.id,
              o = s.dataset.variant_id,
              l = new FormData(),
              c = s.dataset.personalization;
            c && c.length && l.append("personalization", c),
              Reflow.cart.scheduleAPICall(
                n + "-remove",
                () => Reflow.cart.removeProduct(n, o, l),
                0
              );
          }
          if (e.target.closest(".ref-cart .ref-standard-checkout-button")) {
            if (!this.acceptTerms.checkValidity()) {
              this.acceptTerms.reportValidity();
              return;
            }
            for (let s of this.state.errors)
              if (
                s.severity == "fatal" &&
                [
                  "unavailable-quantity",
                  "product-min-qty-not-reached",
                  "product-max-qty-exceeded",
                ].includes(s.type)
              ) {
                F(void 0, this.getStateErrorMessage(s));
                return;
              }
            this.setStep("details"), this.update();
          }
          if (
            (e.target.closest(".ref-back, .ref-product-update-cart") &&
              (this.setStep("cart"), this.update()),
            e.target.closest(".ref-field-collapsible .ref-field-toggle") &&
              e.target
                .closest(".ref-field-collapsible")
                .classList.toggle("open"),
            e.target.closest(".ref-summary-toggle") &&
              d(".ref-checkout-summary", this.node)[0].classList.toggle("open"),
            e.target.closest(".button-demo-payment"))
          ) {
            let s = new $(d('<div data-reflow-type="toast"></div>'), {
              type: "info",
              title: "Payments unavailable in demo",
              description:
                "To prevent accidental checkouts, payments are disabled in this demo.",
            });
            s.init(), s.show();
            return;
          }
          if (e.target.closest(".ref-add-billing")) {
            if (
              ((this.billingVisible = !0),
              e.target.closest(".ref-shipping-tab"))
            ) {
              Object.assign(this.billingAddress, this.shippingAddress);
              for (let s of Object.entries(this.billingAddress))
                Reflow.cart.localFormData.set("billing-" + s[0], s[1]);
            }
            this.update();
          }
          if (e.target.closest(".ref-remove-billing")) {
            this.billingVisible = !1;
            for (var r in this.billingAddress)
              Reflow.cart.localFormData.set("billing-" + r, ""),
                delete this.billingAddress[r];
            this.update();
          }
          if (
            (e.target.closest(".ref-remove-tax-file") &&
              (this.showLoading(),
              await I(
                `/remove-tax-exemption-file/${this.key}/`,
                { method: "POST" },
                !1
              ),
              await this.refresh()),
            e.target.closest(".ref-payment-button"))
          ) {
            let s = e.target.closest(".ref-payment-button");
            if (this.isDemoMode()) return;
            if ((i = this.state.vacationMode) == null ? void 0 : i.enabled) {
              let l = this.state.vacationMode.message.length
                ? this.state.vacationMode.message
                : g("store_unavailable");
              F(l);
              return;
            }
            if (
              (this.clearFormErrors(),
              !this.checkFormValidity(this.detailsForm))
            )
              return;
            this.showLoading();
            let n = new FormData(this.detailsForm);
            n.append(
              "success-url",
              this.getSuccessURL({ session_id: "{CHECKOUT_SESSION_ID}" })
            ),
              n.append("cancel-url", this.getCancelURL());
            let o = s.dataset.method;
            n.append("payment-method", o),
              n.append(
                "payment-id",
                (a = s.dataset.paymentId) != null ? a : ""
              );
            try {
              if (
                (await this.refreshState(), this.update(), !this.canFinish())
              ) {
                F(this.getStateErrors()[0]);
                return;
              }
              let l = await I(
                `/complete-checkout/${this.key}/`,
                { method: "POST", body: n },
                !1
              );
              if (!l.success) return;
              if (l.order && l.order.amount == 0) {
                window.location = this.getSuccessURL({
                  order_id: l.order.id,
                  secure_hash: l.order.secure_hash,
                });
                return;
              }
              if (
                (o == "zero-value-cart" &&
                  !l.order &&
                  (await this.refreshState(), this.update()),
                o == "stripe" && l.stripeCheckoutURL)
              ) {
                window.location = l.stripeCheckoutURL;
                return;
              }
              if (o == "custom" && l.order) {
                let c = Object.entries(this.state.paymentProviders).find(
                  (p) => p[0] == s.dataset.paymentId
                );
                if (!c) return;
                if (((c = c[1]), !c.instructions)) {
                  window.location = this.getSuccessURL({
                    order_id: l.order.id,
                    secure_hash: l.order.secure_hash,
                  });
                  return;
                }
                let h = this.checkout.querySelector(".ref-instructions");
                h.querySelector(".ref-payment-method-name").textContent =
                  c.name;
                let f = c.instructions.replaceAll("{orderid}", l.order.id);
                (f = f.replaceAll(
                  "{amount}",
                  this.formatMoney(l.order.amount)
                )),
                  (h.querySelector(
                    ".ref-payment-method-instructions"
                  ).innerHTML = f),
                  this.setStep("instructions"),
                  this.update();
              }
              if (o == "pay-in-store" && l.order) {
                window.location = this.getSuccessURL({
                  order_id: l.order.id,
                  secure_hash: l.order.secure_hash,
                });
                return;
              }
            } catch (l) {
              l.data &&
                l.data.errors &&
                (this.showFormErrors(l.data.errors),
                l.data.errors.system &&
                  F(z(l, "system"), g("cart.errors.cannot_complete")));
            } finally {
              this.hideLoading();
            }
          }
          if (e.target.closest(".ref-add-code")) {
            let s = this.couponInput.value.trim();
            if (((this.couponError.textContent = ""), !s.length)) return;
            this.showLoading();
            try {
              let n = new FormData();
              n.append("code", s),
                await I(
                  `/add-coupon/${this.key}/`,
                  { method: "POST", body: n },
                  !1
                ),
                (this.couponInput.value = "");
              let o = new $(d('<div data-reflow-type="toast"></div>'), {
                type: "success",
                title: g("cart.coupon_added"),
              });
              o.init(), o.show(), await this.refresh();
            } catch (n) {
              this.couponError.textContent = z(n, "coupon-code");
            } finally {
              this.hideLoading();
            }
          }
          if (
            (e.target.closest(".ref-coupon-input-clear") &&
              ((this.couponInput.value = ""),
              this.couponButton.classList.add("inactive"),
              (this.couponError.textContent = "")),
            e.target.closest(".ref-remove-coupon"))
          ) {
            if (!this.state.coupon) return;
            this.showLoading();
            try {
              await I(`/remove-coupon/${this.key}/`, { method: "POST" }, !1);
              let s = new $(d('<div data-reflow-type="toast"></div>'), {
                type: "success",
                title: g("cart.coupon_removed"),
              });
              s.init(), s.show(), await this.refresh();
            } catch (s) {
              F();
            } finally {
              this.hideLoading();
            }
          }
          if (e.target.closest(".ref-delivery-card .ref-tab-toggle")) {
            let s = e.target.closest(".ref-tab").dataset.refDelivery;
            if (this.activeDeliveryTab == s) return;
            (this.activeDeliveryTab = s),
              (this.chosenStoreLocation = -1),
              (this.shippingMethodIndex = -1),
              s == "shipping" &&
                this.isShippingFilled() &&
                (await this.invalidateTaxExemption(this.getShippingAddress())),
              this.refresh();
          }
        }
      }
      onKeypress(e) {
        e.keyCode == 13 &&
          e.target.matches(".ref-quantity-widget input") &&
          e.target.blur();
      }
      saveToLocalStorage(e) {
        let r = e.target.getAttribute("data-state-src");
        if (r) {
          let i = e.target.value.trim();
          e.target.type == "checkbox" && (i = e.target.checked),
            Reflow.cart.localFormData.set(r, i);
        }
      }
      checkFormValidity(e) {
        for (let r of e.querySelectorAll("input, textarea, select"))
          if (!r.checkValidity())
            return (
              r.parentElement.scrollIntoView(),
              setTimeout(() => r.reportValidity(), 600),
              !1
            );
        return !0;
      }
      onShippingMethodHolderChange(e) {
        (this.shippingMethodIndex = e.target.value), this.refresh();
      }
      async onPickupLocationChange(e) {
        let r = e.target.closest("label").dataset.refLocation,
          i = this.state.locations.find((a) => a.id == r);
        !i ||
          (await this.invalidateTaxExemption(i.address),
          (this.chosenStoreLocation = e.target.value),
          this.refresh());
      }
      onCouponCodeInput(e) {
        (this.couponError.textContent = ""),
          e.target.value.length
            ? (this.couponButton.classList.remove("inactive"),
              (this.couponClear.style.display = "block"))
            : (this.couponButton.classList.add("inactive"),
              (this.couponClear.style.display = "none"));
      }
      showFormErrors(e) {
        for (let r in e) {
          let i = this.detailsForm.querySelector(`[name=${r}]`);
          if (!i) continue;
          let a = i.closest(".ref-error-parent") || i.closest("label"),
            s = "";
          Array.isArray(e[r]) ? (s = e[r][0]) : (s = g(e[r])),
            (a.querySelector(".ref-validation-error").textContent = s);
        }
      }
      clearFormErrors() {
        for (let e of d(".ref-validation-error", this.node)) e.textContent = "";
      }
      getStep() {
        return this.step;
      }
      setStep(e) {
        q.steps.includes(e) && (this.step = e);
      }
      getShippingAddress() {
        let e = {};
        if (
          (this.shippingAddress.name && (e.name = this.shippingAddress.name),
          this.shippingAddress.address &&
            (e.address = this.shippingAddress.address),
          !this.shippingAddress.city)
        )
          return;
        e.city = this.shippingAddress.city;
        let r = this.shippingAddress.country;
        if (!r) return;
        let i = this.getCountryByCode(r);
        if (!!i) {
          if (((e.country = r), i.has_postcode)) {
            if (!this.shippingAddress.postcode) return;
            e.postcode = this.shippingAddress.postcode;
          }
          if (i.has_regions) {
            if (!this.shippingAddress.state) return;
            e.state = this.shippingAddress.state;
          }
          return e;
        }
      }
      isShippingFilled() {
        return !!this.getShippingAddress();
      }
      getSuccessURL(e = {}) {
        try {
          if (!this.node.dataset.reflowSuccessUrl) throw Error("invalid");
          let r = new URL(
              this.node.dataset.reflowSuccessUrl,
              window.location.href
            ),
            i = r.search;
          for (let a in e) (i += i.length ? "&" : "?"), (i += `${a}=${e[a]}`);
          return (r.search = i), r.href;
        } catch (r) {
          return window.location.href;
        }
      }
      getCancelURL() {
        try {
          if (!this.node.dataset.reflowCancelUrl) throw Error("invalid");
          return new URL(
            this.node.dataset.reflowCancelUrl,
            window.location.href
          ).href;
        } catch (e) {
          return window.location.href;
        }
      }
      canDeliver() {
        return !this.state.errors.filter(
          (e) => e.type == "delivery-unavailable"
        ).length;
      }
      canShip() {
        return (
          this.state.shipping.length &&
          !this.state.errors.filter((e) => e.type == "cannot-ship").length
        );
      }
      hasZeroValue() {
        return this.state.total == 0;
      }
      canFinish() {
        return !this.state.errors.filter((e) => e.severity == "fatal").length;
      }
      getStateErrorMessage(e = {}) {
        try {
          let r = e.type.replaceAll("-", "_"),
            i = e.formats || null;
          return i ? g("cart.errors." + r, i) : g("cart.errors." + r);
        } catch (r) {
          return e.message || "";
        }
      }
      getStateErrors() {
        return (this.state.errors || [])
          .map(this.getStateErrorMessage.bind(this))
          .filter((r) => !!r);
      }
      async updateShippingAddress() {
        let e = this.getShippingAddress();
        if (!e) return;
        let r = new FormData();
        if (
          (r.append("address", JSON.stringify(e)),
          this.clearFormErrors(),
          this.showLoading(),
          (
            await I(
              `/update-address/${this.key}/`,
              { method: "POST", body: r },
              !1
            )
          ).taxExemptionRemoved)
        ) {
          let a = new $(d('<div data-reflow-type="toast"></div>'), {
            type: "warning",
            title: g("cart.tax_exemption_cleared"),
            description: g("cart.tax_exemption_cleared_details"),
          });
          a.init(), a.show();
        }
        await this.refresh();
      }
      async onTaxExemptionChange(e) {
        let r,
          i = this.activeDeliveryTab;
        if ((i == "shipping" && (r = this.getShippingAddress()), i == "pickup"))
          for (let n of this.state.locations) n.chosen && (r = n.address);
        if (!r) {
          this.checkFormValidity(this.detailsForm);
          return;
        }
        let a = new FormData();
        a.append("address", JSON.stringify(r)), a.append("delivery-method", i);
        let s =
          e.target.name == "tax-exemption-file"
            ? e.target.files[0]
            : e.target.value;
        a.append(e.target.name, s), this.clearFormErrors(), this.showLoading();
        try {
          await I(
            `/update-tax-exemption/${this.key}/`,
            { method: "POST", body: a },
            !1
          );
        } catch (n) {
          console.error("Reflow:", n);
        }
        await this.refresh();
      }
      getFooterLinks() {
        let e = [];
        if (this.state)
          for (let r of this.state.footerLinks) {
            let i = document.createElement("a");
            (i.textContent = g("cart." + r.id)),
              (i.href = r.url),
              (i.target = "_blank"),
              e.push(i);
          }
        return e;
      }
      hasPhysicalProducts() {
        if (this.state) {
          for (let e of this.state.products)
            if (e.type == "physical" && e.inStock) return !0;
        }
        return !0;
      }
      showMessage(e) {
        (this.message.style.display = "block"), (this.message.textContent = e);
      }
      resetView() {
        (this.message.style.display = "none"),
          (this.cart.style.display = "none"),
          (this.checkout.style.display = "none");
      }
      async refresh() {
        this.showLoading(),
          await this.refreshState(),
          this.hideLoading(),
          this.update();
      }
      renderProduct(e) {
        let r = d(`
			<div class="ref-product">
				<div class="ref-product-col">
					<div class="ref-product-wrapper">
						<img class="ref-product-photo">
						<div class="ref-product-data">

							<div class="ref-product-info">
								<div>
									<div class="ref-product-name"></div>
									<div class="ref-product-category"></div>
									<div class="ref-product-variants"></div>
									<div class="ref-product-personalization-holder"></div>
								</div>

								<div class="ref-product-price ref-mobile-product-price"></div>
							</div>

							<div class="ref-product-controls ref-mobile-product-controls">
								<div class="ref-product-quantity">
									<div class="ref-quantity-container"></div>
									<div class="ref-product-qty-message"></div>
								</div>

								<div class="ref-product-remove"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 48 48" ><path fill="currentColor" d="M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg></div>
							</div>

						</div>
					</div>
				</div>
				<div class="ref-price-col">
					<div class="ref-product-price"></div>
				</div>
				<div class="ref-quantity-col">
					<div class="ref-product-quantity">
						<div class="ref-quantity-container"></div>
						<div class="ref-product-qty-message"></div>
						<div class="ref-product-remove">${v("remove")}</div>
					</div>
				</div>
				<div class="ref-total-col">
					<div class="ref-product-total">
						<div class="ref-product-total-sum"></div>
					</div>
				</div>
			</div>
		`),
          i = e.name;
        if (
          ((r.dataset.id = e.id), (r.dataset.quantity = e.quantity), e.variant)
        ) {
          r.dataset.variant_id = e.variant.id;
          let h = d(".ref-product-variants", r)[0],
            f = d('<div class="ref-product-variant"></div>');
          (f.textContent = e.variant.option_name + ": " + e.variant.name),
            h.append(f);
        }
        if (e.personalization && e.personalization.length)
          try {
            r.dataset.personalization = JSON.stringify(
              e.personalization.map((f) => {
                let p = { id: f.id };
                return f.inputText && (p.inputText = f.inputText), p;
              })
            );
            let h = d(".ref-product-personalization-holder", r)[0];
            for (let f of e.personalization) {
              let p = d('<div class="ref-product-personalization"></div>'),
                m = `${f.name}${
                  f.inputText ? ': "' + f.inputText + '" ' : ""
                } ${
                  f.price
                    ? "+" + this.formatMoney(f.price)
                    : "- " + g("price_free")
                }`;
              (p.title = m),
                (m = m.length > 55 ? m.substring(0, 55) + "..." : m),
                (p.textContent = m),
                h.append(p);
            }
          } catch (h) {
            console.error("Reflow:", h);
          }
        let a = d(".ref-product-photo", r)[0];
        (a.src = e.image.sm),
          (a.alt = i),
          (d(".ref-product-name", r)[0].textContent = i);
        let s = d(".ref-product-price", r) || [];
        for (let h of s) h.textContent = this.formatMoney(e.unitPrice);
        if (e.inStock) {
          if (e.quantity > e.availableQuantity)
            for (let h of d(".ref-product-qty-message", r))
              h.textContent = g("cart.left_in_stock", {
                in_stock: e.availableQuantity,
              });
          else if (e.quantity > e.maxQty)
            for (let h of d(".ref-product-qty-message", r))
              h.textContent = g("cart.max_product_qty", {
                max_quantity: e.maxQty,
              });
        }
        let n = d(".ref-product-total-sum", r) || [];
        for (let h of n)
          e.inStock
            ? (h.textContent = this.formatMoney(e.price))
            : ((h.textContent = g("out_of_stock")),
              h.classList.add("out-of-stock"));
        let o = d(".ref-product-quantity input", r) || [];
        for (let h of o) h.value = e.quantity;
        let l = g("product");
        e.categories.length && (l = e.categories[0].name),
          (d(".ref-product-category", r)[0].textContent = l);
        let c = d(".ref-quantity-container", r) || [];
        for (let h of c) {
          let f = new W(h, {
            inStock: e.inStock,
            onChange: (p) => {
              let m = p.getProduct(),
                b = p.getQuantity(),
                y = p.getVariant(),
                w = r,
                x = new FormData(),
                E = w.dataset.personalization;
              E && E.length && x.append("personalization", E),
                Reflow.cart.scheduleAPICall(
                  m + (y ? `-${y}` : "") + "-quantity",
                  () => Reflow.cart.updateProduct(m, b, y, x)
                );
            },
          });
          f.init(),
            e.variant && f.setVariant(e.variant.id),
            f.setProduct(e.id),
            f.setMaxQuantity(Math.min(e.availableQuantity, e.maxQty)),
            f.setQuantity(e.quantity),
            f.update();
        }
        return r;
      }
      renderProductCompact(e) {
        let r = d(`
			<div class="ref-product">
				<div class="ref-product-col">
					<img class="ref-product-photo">
					<div>
						<div class="ref-product-name"></div>
						<div class="ref-product-secondary"></div>
						<div class="ref-product-personalization-holder"></div>
						<div class="ref-product-qty-message"></div>
						<div class="ref-product-update-cart"></div>
					</div>
				</div>
				<div>
					<div class="ref-product-total"></div>
					<div class="ref-product-remove">${v("remove")}</div>
				</div>
			</div>
		`),
          i = e.name;
        (r.dataset.id = e.id),
          e.variant &&
            ((r.dataset.variant_id = e.variant.id),
            (i += ` (${e.variant.name})`));
        let a = d(".ref-product-photo", r)[0];
        (a.src = e.image.sm),
          (a.alt = i),
          (d(".ref-product-name", r)[0].textContent = i),
          (d(".ref-product-secondary", r)[0].textContent =
            this.formatMoney(e.unitPrice) + " x " + e.quantity),
          e.inStock && e.quantity > e.availableQuantity
            ? (r.classList.add("ref-warning"),
              (d(".ref-product-qty-message", r)[0].textContent = g(
                "cart.left_in_stock",
                { in_stock: e.availableQuantity }
              )),
              (d(".ref-product-update-cart", r)[0].textContent =
                g("cart.update")))
            : e.inStock && e.quantity > e.maxQty
            ? (r.classList.add("ref-warning"),
              (d(".ref-product-qty-message", r)[0].textContent = g(
                "cart.max_product_qty",
                { max_quantity: e.maxQty }
              )),
              (d(".ref-product-update-cart", r)[0].textContent =
                g("cart.update")))
            : (d(".ref-product-qty-message", r)[0].remove(),
              d(".ref-product-update-cart", r)[0].remove());
        let s = d(".ref-product-total", r)[0];
        if (
          (e.inStock
            ? ((s.textContent = this.formatMoney(e.price)),
              d(".ref-product-remove", r)[0].remove())
            : ((s.textContent = g("out_of_stock")),
              s.classList.add("out-of-stock")),
          e.personalization && e.personalization.length)
        ) {
          let n = d(".ref-product-personalization-holder", r)[0];
          for (let o of e.personalization) {
            let l = d('<div class="ref-product-personalization"></div>'),
              c = `${o.name}${o.inputText ? ': "' + o.inputText + '"' : ""}`;
            (l.title = c),
              (c = c.length > 25 ? c.substring(0, 25) + "..." : c),
              (l.textContent = c),
              n.append(l);
          }
        }
        return r;
      }
      renderShippingMethod(e, r) {
        let i = d(`<label class="ref-row">
			<div class="ref-method-radio"><input type="radio" value="" name="shipping-method" required /></div>
			<div class="ref-method-name"></div>
			<div class="ref-method-price">$19.00</div>
		</label>`),
          a = d("input", i)[0];
        (a.value = r), (a.checked = e.chosen);
        let s = d(".ref-method-name", i)[0],
          n = document.createElement("b");
        if (((n.textContent = e.name), s.append(n), e.note)) {
          let o = document.createElement("small");
          (o.textContent = e.note), s.append(o);
        }
        return (
          (d(".ref-method-price", i)[0].textContent = this.formatMoney(
            e.price
          )),
          i
        );
      }
      renderStoreLocation(e, r) {
        let i = d(`<label>
			<input type="radio" value="" name="store-location" required />
			<div class="ref-location-card">
				<b class="ref-location-name"></b>
				<div class="ref-location-address"></div>
				<div class="ref-location-contacts"></div>
			</div>
		</label>`);
        i.dataset.refLocation = e.id;
        let a = d("input", i)[0];
        (a.value = r), (a.checked = e.chosen);
        let s = d(".ref-location-name", i)[0];
        s.textContent = e.name;
        let n = d(".ref-location-address", i)[0],
          o = e.address.address + ", " + e.address.city + ", ";
        e.address.country == "US" &&
          e.address.state &&
          (o += e.address.state + ", "),
          (o += e.address.countryName),
          (n.textContent = o);
        let l = document.createElement("b");
        (l.textContent = `${g("address")}: `), n.prepend(l);
        let c = d(".ref-location-contacts", i)[0];
        if (e.email) {
          let h = document.createElement("span");
          h.textContent = e.email;
          let f = document.createElement("b");
          (f.textContent = `${g("email")}: `), h.prepend(f), c.append(h);
        }
        if (e.phone) {
          let h = document.createElement("span");
          h.textContent = e.phone;
          let f = document.createElement("b");
          (f.textContent = `${g("phone")}: `), h.prepend(f), c.append(h);
        }
        if (e.working_hours) {
          let h = document.createElement("span");
          h.textContent = e.working_hours;
          let f = document.createElement("b");
          (f.textContent = `${g("working_hours")}: `),
            h.prepend(f),
            c.append(h);
        }
        return i;
      }
      formatMoney(e) {
        return J(e, this.state.currencyConfig);
      }
      hasNextStep() {
        return q.steps.indexOf(this.step) == 0;
      }
      hasPreviousStep() {
        return q.steps.indexOf(this.step) == 1;
      }
      next() {
        let e = q.steps.indexOf(this.step);
        this.step = q.steps[e + 1];
      }
      previous() {
        let e = q.steps.indexOf(this.step);
        this.step = q.steps[e - 1];
      }
      get state() {
        return this.demoMode
          ? this._state || null
          : this._state || Reflow.cart.state || null;
      }
      set state(e = null) {
        this._state = e;
      }
      async refreshState() {
        if (this.mockData) {
          this.state = this.mockData;
          return;
        }
        let e = {};
        this.activeDeliveryTab && (e.deliveryMethod = this.activeDeliveryTab),
          this.shippingMethodIndex >= 0 &&
            (e.chosenShippingMethod = this.shippingMethodIndex),
          this.chosenStoreLocation >= 0 &&
            (e.chosenStoreLocation = this.chosenStoreLocation),
          await Reflow.cart.refresh(e);
      }
      async invalidateTaxExemption(e) {
        this.showLoading();
        let r = new FormData();
        if (
          (r.append("address", JSON.stringify(e)),
          (
            await I(
              `/invalidate-tax-exemption/${this.key}/`,
              { method: "POST", body: r },
              !1
            )
          ).taxExemptionRemoved)
        ) {
          let a = new $(d('<div data-reflow-type="toast"></div>'), {
            type: "warning",
            title: g("cart.tax_exemption_cleared"),
            description: g("cart.tax_exemption_cleared_details"),
          });
          a.init(), a.show();
        }
      }
      arePaymentProvidersAvailable() {
        return (
          this.isStripeSupported() ||
          this.isPaypalSupported() ||
          this.hasCustomPayments() ||
          this.hasPayInStorePayments()
        );
      }
      isStripeSupported() {
        return this.state.paymentProviders.stripe.supported;
      }
      isPaypalSupported() {
        return this.state.paymentProviders.paypal.supported;
      }
      hasCustomPayments() {
        return Object.entries(this.state.paymentProviders).some(
          (e) => e[1].provider == "custom"
        );
      }
      hasPayInStorePayments() {
        return this.state.locations.some((e) => !!e.pay_in_store);
      }
      updateCart() {
        var i, a;
        if (!this.state) return this.showMessage(g("cart.errors.unavailable"));
        if (!this.state.products.length)
          return this.showMessage(g("cart.errors.empty"));
        (this.cart.style.display = "block"), (this.productTable.innerHTML = "");
        for (let s of this.state.products)
          this.productTable.append(this.renderProduct(s));
        let e = this.cart.querySelector(".ref-links");
        e.innerHTML = "";
        for (let s of this.getFooterLinks()) e.append(s);
        if (
          ((this.cartSubtotal.textContent =
            `${g("subtotal")}: ` + this.formatMoney(this.state.subtotal)),
          (i = this.state.vacationMode) == null ? void 0 : i.enabled)
        ) {
          let s = this.cart.querySelector(".ref-standard-checkout-button");
          if (
            (s.classList.add("inactive"),
            this.state.vacationMode.message.length)
          ) {
            let n = d('<div class="ref-store-message"></div>');
            (n.textContent = this.state.vacationMode.message),
              this.cart.querySelector(".ref-totals").insertBefore(n, s);
          }
        }
        (this.acceptTerms.style.display = "none"),
          (this.acceptTerms.querySelector("#ref-terms-agreement").required =
            !1);
        let r = this.acceptTerms.querySelector(".ref-terms-agreement-text");
        r.innerHTML = "";
        for (let s = 0; s < this.state.footerLinks.length; s++) {
          let n = this.state.footerLinks[s];
          if (n.required) {
            (this.acceptTerms.style.display = "block"),
              (this.acceptTerms.querySelector("#ref-terms-agreement").required =
                !0),
              r.childNodes.length
                ? r.append(
                    d(
                      "<span>" +
                        (s === this.state.footerLinks.length - 1
                          ? ` ${v("and")} `
                          : ", ") +
                        "</span>"
                    )
                  )
                : r.append(
                    d(`<span>${v("cart.terms_agree", { terms: "" })} </span>`)
                  );
            let o = d("<a>");
            (o.href = n.url), (o.textContent = g("cart." + n.id)), r.append(o);
          }
        }
        if (this.isDemoMode()) {
          this.node.querySelector(
            ".ref-paypal-express-checkout-holder"
          ).innerHTML = `<div class="paypal-button paypal-button-gold button-demo-payment">
				<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet"><path fill="#003087" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"/><path fill="#003087" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"/><path fill="#003087" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"/><path fill="#009cde" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"/><path fill="#009cde" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"/><path fill="#009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"/></svg>
			</div>`;
          return;
        }
        this.paypalButtonsInitialized ||
          ((a = this.state.vacationMode) == null ? void 0 : a.enabled) ||
          (this.isPaypalSupported() &&
            (this.getPaypalInstance().then((s) => {
              s.Buttons({
                fundingSource: s.FUNDING.PAYPAL,
                createOrder: this.paypalCreateOrder.bind(this),
                onApprove: this.paypalOnApprove.bind(this),
                onError: this.paypalError.bind(this),
                onShippingChange: this.paypalShippingChange.bind(this),
                onCancel: this.paypalCancel.bind(this),
                style: { height: 42 },
              }).render(
                this.node.querySelector(".ref-paypal-express-checkout-holder")
              );
              let n = [s.FUNDING.PAYPAL];
              this.isStripeSupported() || n.push(s.FUNDING.CARD);
              for (let o of n)
                s.Buttons({
                  fundingSource: o,
                  createOrder: this.paypalCreateOrder.bind(this),
                  onApprove: this.paypalOnApprove.bind(this),
                  onError: this.paypalError.bind(this),
                  onShippingChange: this.paypalShippingChange.bind(this),
                  onCancel: this.paypalCancel.bind(this),
                }).render(
                  this.node.querySelector(".ref-paypal-payment-holder")
                );
            }),
            (this.paypalButtonsInitialized = !0)));
      }
      updateCheckout() {
        var K;
        this.checkout.style.display = "flex";
        let e = this.checkout.querySelector(".ref-details"),
          r = this.checkout.querySelector(".ref-instructions");
        (e.style.display = "none"),
          (r.style.display = "none"),
          this.step == "details"
            ? (e.style.display = "block")
            : this.step == "instructions" && (r.style.display = "block");
        let i = this.checkout.querySelector(".ref-products");
        i.innerHTML = "";
        for (let _ of this.state.products)
          i.append(this.renderProductCompact(_));
        let a = this.checkout.querySelector(".ref-subtotal");
        (a.firstElementChild.children[1].textContent = this.formatMoney(
          this.state.subtotal
        )),
          this.couponCode.classList.remove("hidden"),
          (this.couponCode.nextElementSibling.style.display = "block");
        let s = this.checkout.querySelector(".ref-applied-coupon");
        if (((s.style.display = "none"), this.state.coupon)) {
          this.couponCode.classList.add("hidden"),
            (this.couponCode.nextElementSibling.style.display = "none"),
            (this.couponError.textContent = ""),
            (s.style.display = "block");
          let _ = this.state.coupon,
            k = _.name || _.code.toUpperCase();
          k.length > 15 && (k = k.substring(0, 15) + "..."),
            (s.firstElementChild.firstElementChild.children[0].textContent = k),
            (s.firstElementChild.children[1].textContent = _.errorCode
              ? ""
              : "-" + this.formatMoney(this.state.discount)),
            (s.querySelector(".ref-applied-coupon-error").textContent =
              z({ data: { errorCode: _.errorCode } }) || "");
        }
        this.step == "instructions" &&
          (this.couponCode.classList.add("hidden"),
          (this.couponCode.nextElementSibling.style.display = "none"),
          (s.querySelector(".ref-remove-coupon").style.display = "none"));
        let n = this.checkout.querySelector(".ref-shipping");
        if (((n.style.display = "none"), this.hasPhysicalProducts())) {
          n.style.display = "block";
          let _ = g("shipping"),
            k = g("cart.shipping_not_selected");
          if (this.activeDeliveryTab == "shipping")
            for (let M of this.state.shipping)
              M.chosen &&
                ((_ = `${g("shipping")} (${M.name})`),
                (k = this.formatMoney(M.price)));
          if (this.activeDeliveryTab == "pickup") {
            (_ = g("pickup_at_store")), (k = this.formatMoney(0));
            for (let M of this.state.locations)
              M.chosen && (_ = g("cart.pickup_at_store", { store: M.name }));
          }
          (n.firstElementChild.children[0].textContent = _),
            (n.firstElementChild.children[1].textContent = k);
        }
        let o = this.checkout.querySelector(".ref-total");
        (o.firstElementChild.children[1].textContent = this.formatMoney(
          this.state.total
        )),
          (this.checkout.querySelector(".ref-total-note").textContent = g(
            "cart.prices_currency_description",
            { currency: this.state.currency }
          ));
        let l = this.checkout.querySelector(".ref-summary-total");
        (l.textContent = this.formatMoney(this.state.total)),
          (this.taxNote.style.display = "none");
        let c = this.checkout.querySelector(".ref-taxes");
        if (
          ((c.style.display = "none"),
          (this.fileExemptionInput.disabled = !0),
          (this.textExemptionInput.disabled = !0),
          this.state.taxes)
        ) {
          let _ = this.state.taxes.details,
            k = _.taxRate,
            M = c.querySelectorAll("span");
          if (
            ((M[0].textContent =
              `${k.name} (${k.rate}%)` +
              (_.exemption ? " \u2013 " + _.exemption : "")),
            (M[1].textContent = this.formatMoney(this.state.taxes.amount)),
            (c.style.display = "block"),
            _.exemptionType)
          ) {
            this.taxNote.style.display = "block";
            let U = this.node.querySelector(
                ".ref-tax-note .ref-field-collapsible"
              ),
              it = this.taxNote.querySelector(".ref-tax-exemption-file"),
              at = this.taxNote.querySelector(".ref-tax-exemption-text");
            (it.style.display = "none"), (at.style.display = "none");
            let V = this.state.taxExemption;
            if (_.exemptionType == "file") {
              (it.style.display = "block"),
                (this.fileExemptionInput.disabled = !1);
              let st = this.taxNote.querySelector(".ref-new-tax-file");
              st.style.display = "block";
              let nt = this.taxNote.querySelector(".ref-old-tax-file");
              nt.style.display = "none";
              let ot = this.taxNote.querySelector(".ref-tax-file-dl");
              (ot.href = "#"),
                V &&
                  V.download &&
                  ((st.style.display = "none"),
                  (nt.style.display = "block"),
                  (ot.href = V.download));
            }
            _.exemptionType == "vat_number" &&
              ((at.style.display = "block"),
              (this.textExemptionInput.disabled = !1),
              (this.textExemptionInput.value = ""),
              V &&
                V.vat_number &&
                ((this.textExemptionInput.value =
                  V.vat_number.input || V.vat_number.number),
                V.vat_number.status == "invalid" &&
                  this.showFormErrors({
                    "tax-exemption-text": "cart.errors.vat_number_invalid",
                  }),
                V.status == "unvalidated" &&
                  this.showFormErrors({
                    "tax-exemption-text":
                      "cart.errors.vat_number_validation_fail",
                  })));
          }
        }
        let h = this.checkout.querySelector(".ref-links");
        h.innerHTML = "";
        for (let _ of this.getFooterLinks()) h.append(_);
        let f = e.querySelector(".ref-phone-input");
        f && !this.state.collectPhone && f.remove();
        let p = e.querySelector(".ref-pickup-customer-name-input");
        (p.style.display = "none"),
          (p.querySelector("input").disabled = !0),
          this.activeDeliveryTab == "pickup" &&
            ((p.style.display = "block"),
            (p.querySelector("input").disabled = !1));
        let m = this.hasPhysicalProducts(),
          b = m && this.offersShipping(),
          y = m && this.offersLocalPickup(),
          w = b && y,
          x = e.querySelector(".ref-heading-delivery"),
          E = e.querySelector(".ref-delivery-unavailable"),
          A = e.querySelector(".ref-delivery-card");
        (x.style.display = "none"),
          (E.style.display = "none"),
          (A.style.display = "none"),
          this.canDeliver() ||
            ((x.style.display = "block"),
            (E.style.display = "block"),
            (E.textContent = g("cart.errors.delivery_unavailable"))),
          (b || y) &&
            ((x.style.display = "block"),
            (A.style.display = "block"),
            w && A.classList.add("tabbable"));
        let B = e.querySelector(".ref-local-pickup-tab");
        if (((B.style.display = "none"), y)) {
          (B.style.display = "block"),
            B.classList.remove("open"),
            (B.querySelector(".ref-tab-toggle input").checked = !1),
            (B.querySelector("fieldset.ref-tab-content").disabled = !0),
            this.activeDeliveryTab == "pickup" &&
              (B.classList.add("open"),
              (B.querySelector(".ref-tab-toggle input").checked = !0),
              (B.querySelector("fieldset.ref-tab-content").disabled = !1)),
            (this.locationsHolder.innerHTML = "");
          for (let _ = 0, k = this.state.locations; _ < k.length; _++)
            this.locationsHolder.append(this.renderStoreLocation(k[_], _));
          this.locationsHolder.append(
            d('<div class="ref-validation-error"></div>')
          ),
            w || (x.textContent = g("pickup_at_store"));
        }
        let P = e.querySelector(".ref-shipping-tab");
        if (
          ((P.style.display = "none"),
          b &&
            (e
              .querySelector(".ref-shipping-address-holder")
              .append(this.shippingAddressWidget.update(!0, !0)),
            (P.style.display = "block"),
            P.classList.remove("open"),
            (P.querySelector(".ref-tab-toggle input").checked = !1),
            (P.querySelector("fieldset.ref-tab-content").disabled = !0),
            (this.shippingMethodHeading.style.display = "none"),
            (this.shippingMethodHolder.innerHTML = ""),
            this.activeDeliveryTab == "shipping" &&
              (P.classList.add("open"),
              (P.querySelector(".ref-tab-toggle input").checked = !0),
              (P.querySelector("fieldset.ref-tab-content").disabled = !1),
              this.isShippingFilled())))
        )
          if (this.canShip()) {
            this.shippingMethodHeading.style.display = "block";
            for (let _ = 0, k = this.state.shipping; _ < k.length; _++)
              this.shippingMethodHolder.append(
                this.renderShippingMethod(k[_], _, !1)
              );
            this.shippingMethodHolder.append(
              d('<div class="ref-validation-error"></div>')
            );
          } else
            this.showFormErrors({
              "shipping-country": "cart.errors.address_not_supported",
            });
        (this.activeDeliveryTab == "pickup"
          ? e.querySelector(".ref-local-pickup-tab .ref-billing-address-holder")
          : e.querySelector(".ref-shipping-tab .ref-billing-address-holder")
        ).append(this.billingAddressWidget.update(!0, !0));
        for (let _ of this.node.querySelectorAll(".ref-add-billing"))
          (_.style.display = "inline-block"),
            this.billingVisible && (_.style.display = "none");
        for (let _ of this.node.querySelectorAll(
          "fieldset.ref-billing-address"
        ))
          (_.style.display = "none"),
            (_.disabled = !0),
            this.billingVisible &&
              ((_.style.display = "block"), (_.disabled = !1));
        let O = Object.entries(this.state.paymentProviders).sort(
            (_, k) => k[1].order - _[1].order
          ),
          j = this.node.querySelector(".ref-heading-payment");
        (j.style.display = "none"),
          (O.some((_) => _[1].supported) || this.hasZeroValue()) &&
            (j.style.display = "block");
        let G = this.node.querySelector(".ref-paypal-payment-holder");
        if (
          ((G.style.display = "block"),
          (!this.isPaypalSupported() ||
            ((K = this.state.vacationMode) == null ? void 0 : K.enabled) ||
            this.hasZeroValue()) &&
            (G.style.display = "none"),
          this.activeDeliveryTab == "pickup" &&
            this.chosenStoreLocation >= 0 &&
            O.some((_) => _[1].supported && _[1].provider != "paypal") &&
            (G.style.display = "none"),
          (this.standardPaymentButtonHolder.innerHTML = ""),
          this.hasZeroValue())
        ) {
          let _ = document.createElement("div");
          (_.className = "ref-button ref-payment-button"),
            (_.dataset.method = "zero-value-cart"),
            (_.textContent = g("cart.complete_order")),
            this.standardPaymentButtonHolder.append(_);
        } else
          for (let [_, k] of O)
            if (k.provider != "paypal") {
              if (
                k.provider == "stripe" &&
                k.supported &&
                k.paymentOptions.length
              )
                for (let M of k.paymentOptions) {
                  let U = document.createElement("div");
                  (U.className = "ref-button ref-payment-button"),
                    (U.dataset.method = "stripe"),
                    M.id == "card"
                      ? ((U.textContent = g("credit_card")),
                        this.standardPaymentButtonHolder.append(U),
                        (U = U.cloneNode()),
                        (U.textContent = "Apple Pay / Google Pay"),
                        this.standardPaymentButtonHolder.append(U))
                      : ((U.textContent = M.name),
                        this.standardPaymentButtonHolder.append(U));
                }
              if (k.provider == "custom") {
                let M = document.createElement("div");
                (M.className = "ref-button ref-payment-button"),
                  (M.dataset.method = "custom"),
                  (M.dataset.paymentId = k.id),
                  (M.textContent = k.name),
                  this.standardPaymentButtonHolder.append(M);
              }
              if (k.provider == "pay-in-store") {
                let M = document.createElement("div");
                (M.className = "ref-button ref-payment-button"),
                  (M.dataset.method = "pay-in-store"),
                  (M.textContent = g("pay_on_pickup")),
                  this.standardPaymentButtonHolder.prepend(M);
              }
            }
        if (this.isDemoMode()) {
          this.node
            .querySelectorAll(".ref-payment-button")
            .forEach((_) => _.classList.add("button-demo-payment")),
            (this.node.querySelector(
              ".ref-paypal-payment-holder"
            ).innerHTML = `<div class="paypal-button paypal-button-gold button-demo-payment">
				<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 101 32" preserveAspectRatio="xMinYMin meet"><path fill="#003087" d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"/><path fill="#003087" d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"/><path fill="#003087" d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"/><path fill="#009cde" d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"/><path fill="#009cde" d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"/><path fill="#009cde" d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"/></svg>
			</div>`);
          return;
        }
      }
      async paypalCreateOrder(e, r) {
        if (!this.acceptTerms.checkValidity()) {
          let s = "";
          for (let n = 0; n < this.state.footerLinks.length; n++) {
            let o = this.state.footerLinks[n];
            o.required &&
              ((s += s
                ? n === this.state.footerLinks.length - 1
                  ? " and "
                  : ", "
                : "Please agree to the "),
              (s += o.name));
          }
          (s += "."), (this.paypalErrorText = s);
          return;
        }
        if ((await this.refreshState(), this.update(), !this.canFinish())) {
          this.paypalErrorText = this.getStateErrors()[0];
          return;
        }
        let i = new FormData();
        this.step == "details" && (i = new FormData(this.detailsForm)),
          i.append("checkout-step", this.step);
        let a = await I(
          `/create-paypal-order/${this.key}/`,
          { method: "POST", body: i },
          !1
        );
        if (a.error && a.error == "PAYEE_ACCOUNT_RESTRICTED") {
          this.paypalErrorText =
            "Transaction could not be processed. The PayPal account associated with this store is restricted.";
          return;
        }
        if (a.error && a.error == "CUSTOMER_FORM_DATA") {
          (this.paypalErrorText =
            "Missing or incorrect data. Please review the checkout form."),
            this.showFormErrors(a.fields);
          return;
        }
        if (a.error && a.error == "VACATION_MODE") {
          this.paypalErrorText =
            "Transaction could not be processed. The store is currently unavailable.";
          return;
        }
        return a.orderID;
      }
      async paypalOnApprove(e, r) {
        let i = new FormData();
        i.append("orderID", e.orderID);
        try {
          let a = await I(
            `/capture-paypal-order/${this.key}/`,
            { method: "POST", body: i },
            !1
          );
          window.location = this.getSuccessURL({
            order_id: a.orderID,
            secure_hash: a.secureHash,
          });
        } catch (a) {
          if (!a.data) throw a;
          let s = a.data,
            n = Array.isArray(s.details) && s.details[0];
          if (n && n.issue === "INSTRUMENT_DECLINED") return r.restart();
          throw a;
        }
      }
      async paypalShippingChange(e, r) {
        try {
          let i = new FormData();
          i.append("orderID", e.orderID),
            i.append("address", JSON.stringify(e.shipping_address));
          let a = 0;
          e.selected_shipping_option &&
            e.selected_shipping_option.id &&
            (a = e.selected_shipping_option.id),
            i.append("selectedShippingOption", a);
          let s = await I(
            `/update-paypal-shipping/${this.key}/`,
            { method: "POST", body: i },
            !1
          );
          return r.resolve();
        } catch (i) {
          return (
            F(z(i), "Couldn't update PayPal shipping"),
            console.error("Reflow:", i),
            r.reject()
          );
        }
      }
      paypalCancel(e) {
        this.refresh();
      }
      paypalError(e) {
        let r =
          "Sorry, your transaction could not be processed. Please try again.";
        this.paypalErrorText &&
          ((r = this.paypalErrorText), (this.paypalErrorText = null)),
          setTimeout(function () {
            window.alert(r);
          }, 1e3);
      }
      showLoading() {
        this.loadingOverlay.classList.add("visible"),
          this.node
            .querySelectorAll(".ref-payment-button")
            .forEach((e) => e.setAttribute("data-disabled-click", !0)),
          this.couponButton.setAttribute("data-disabled-click", !0);
      }
      hideLoading() {
        this.loadingOverlay.classList.remove("visible"),
          this.node
            .querySelectorAll(".ref-payment-button")
            .forEach((e) => e.removeAttribute("data-disabled-click")),
          this.couponButton.removeAttribute("data-disabled-click");
      }
      saveFocus() {
        this.savedFocusTarget = document.activeElement;
      }
      restoreFocus() {
        this.savedFocusTarget &&
          (this.savedFocusTarget.focus(), (this.savedFocusTarget = null));
      }
      async update() {
        if ((this.saveFocus(), this.resetView(), !q.steps.includes(this.step)))
          throw new Error("Invalid Step: " + this.step);
        if (!this.state && !this.node.offsetParent) {
          console.warn("Reflow: Ignoring invisible Cart");
          return;
        }
        if (
          ((this.node.firstElementChild.style.display = "block"), !this.state)
        )
          try {
            await this.refreshState(), this.restoreUserInput();
          } catch (e) {
            this.showMessage(g("cart.errors.unavailable"));
            return;
          }
        if (!this.arePaymentProvidersAvailable()) {
          this.showMessage("This store has no payment methods configured.");
          return;
        }
        (this.step == "details" || this.step == "instructions") &&
          (this.state.products.length
            ? this.updateCheckout()
            : (this.step = "cart")),
          this.step == "cart" && this.updateCart(),
          this.restoreFocus();
      }
    },
    Ce = q;
  C(Ce, "type", "shopping-cart"),
    C(Ce, "steps", ["cart", "details", "instructions"]);
  var je = class {
      constructor(e) {
        (this.options = e), (this.model = e.model);
        let r = e.fieldPrefix,
          i = `<div class="ref-address-widget">
			<label>
				<span>${v("name")}</span>
				<input type="text" class="ref-form-control ref-field-details-name" value="" name="${r}-name" data-state-src="${r}-name" required minlength="5" />
				<div class="ref-validation-error"></div>
			</label>
			<label>
				<span>${v("address")}</span>
				<textarea row="2" class="ref-form-control ref-field-details-address-line" name="${r}-address" data-state-src="${r}-address" required minlength="5"></textarea>
				<div class="ref-validation-error"></div>
			</label>
			<label>
				<span>${v("city")}</span>
				<input type="text" class="ref-form-control ref-field-details-city" value="" name="${r}-city" data-state-src="${r}-city" required minlength="2" />
				<div class="ref-validation-error"></div>
			</label>
			<div class="ref-error-parent">
			<label>
				<span>${v("country")}</span>
				<select class="ref-form-control ref-field-details-country" name="${r}-country" data-state-src="${r}-country" required></select> 
			</label>
			<div class="ref-row ref-row-region">
				<label>
					<span>${v("state")}</span>
					<select class="ref-form-control ref-field-details-region" name="${r}-state" data-state-src="${r}-state" required></select>
				</label>
				<label>
					<span>${v("postcode")}</span>
					<input type="text" class="ref-form-control ref-field-details-postcode" name="${r}-postcode" data-state-src="${r}-postcode" value="" required />
				</label>
			</div>
			<div class="ref-validation-error"></div>
		</div>`;
        (i += "</div>"),
          (this.node = d(i)),
          (this.nameInput = this.node.querySelector(".ref-field-details-name")),
          (this.addressLineInput = this.node.querySelector(
            ".ref-field-details-address-line"
          )),
          (this.cityInput = this.node.querySelector(".ref-field-details-city")),
          (this.countrySelect = this.node.querySelector(
            ".ref-field-details-country"
          )),
          (this.regionSelect = this.node.querySelector(
            ".ref-field-details-region"
          )),
          (this.postcodeField = this.node.querySelector(
            ".ref-field-details-postcode"
          ).parentNode),
          (this.postcodeInput = this.postcodeField.querySelector("input")),
          (this.stateField = this.regionSelect.parentNode),
          this.postcodeInput.addEventListener(
            "change",
            this.onPostcodeInput.bind(this)
          ),
          this.countrySelect.addEventListener(
            "change",
            this.onCountryChange.bind(this)
          ),
          this.regionSelect.addEventListener(
            "change",
            this.onRegionChange.bind(this)
          ),
          this.nameInput.addEventListener(
            "change",
            this.onNameChange.bind(this)
          ),
          this.addressLineInput.addEventListener(
            "change",
            this.onAddressLineChange.bind(this)
          ),
          this.cityInput.addEventListener(
            "change",
            this.onCityChange.bind(this)
          );
      }
      onNameChange(e) {
        this.model.name = e.target.value.trim();
      }
      onAddressLineChange(e) {
        this.model.address = e.target.value.trim();
      }
      onCityChange(e) {
        (this.model.city = e.target.value.trim()), this.onChange();
      }
      onCountryChange(e) {
        (this.model.state = ""),
          (this.model.country = e.target.value),
          this.update(!1, !0),
          this.onChange();
      }
      onRegionChange(e) {
        (this.model.state = e.target.value), this.onChange();
      }
      onPostcodeInput(e) {
        (this.model.postcode = e.target.value.trim()), this.onChange();
      }
      onChange() {
        this.options.onChange && this.options.onChange();
      }
      getCountryByCode(e) {
        return e
          ? this.options.getCountries().find((r) => r.country_code == e)
          : null;
      }
      getCountries() {
        return this.options.getCountries();
      }
      update(e = !1, r = !1) {
        if (
          ((this.nameInput.value = this.model.name || ""),
          (this.addressLineInput.value = this.model.address || ""),
          (this.cityInput.value = this.model.city || ""),
          e)
        ) {
          this.countrySelect.innerHTML = `<option value="">${v(
            "cart.select_country"
          )}</option>`;
          for (let a of this.getCountries()) {
            let s = d(
              `<option value="${a.country_code}">${a.country_name}</option>`
            );
            a.country_code == this.model.country && (s.selected = !0),
              this.countrySelect.append(s);
          }
        }
        (this.postcodeField.style.display = "none"),
          (this.stateField.style.display = "none"),
          (this.postcodeInput.disabled = !0),
          (this.regionSelect.disabled = !0);
        let i = this.getCountryByCode(this.model.country);
        if (
          this.model.country &&
          i &&
          (i.has_postcode &&
            ((this.postcodeField.style.display = "block"),
            (this.postcodeInput.disabled = !1),
            (this.postcodeInput.value = this.model.postcode || ""),
            (this.postcodeField.querySelector("label span").textContent =
              i.postcode_title || g("postcode"))),
          i.has_regions &&
            ((this.stateField.style.display = "block"),
            (this.regionSelect.disabled = !1),
            (this.stateField.querySelector("label span").textContent =
              i.region_title),
            e || r))
        ) {
          this.regionSelect.innerHTML = `<option value="">${i.region_title}</option>`;
          for (let [a, s] of Object.entries(i.regions)) {
            let n = d(`<option value="${a}">${s}</option>`);
            a == this.model.state && (n.selected = !0),
              this.regionSelect.append(n);
          }
        }
        return this.node;
      }
    },
    nr = Ce;
  var Qe = class extends R {
    constructor(e, r) {
      super(e, r);
      (e.innerHTML =
        '<div class="reflow-add-to-cart ref-product-controls"></div>'),
        (this.button = d('<a href="#" class="ref-button"></a>')),
        (this.controls = e.querySelector(".ref-product-controls")),
        (this.onVariantChange = r == null ? void 0 : r.onVariantChange),
        (this.personalizationValues = {});
    }
    init() {
      this.node.addEventListener("change", this.onChange.bind(this)),
        this.node.addEventListener("click", async (e) => {
          if (!e.target.closest(".ref-button")) return;
          if (
            (e.preventDefault(),
            !this.node.dataset.reflowProduct ||
              !parseInt(this.node.dataset.reflowProduct, 10))
          ) {
            console.error("Reflow: Add To Cart button is missing a product");
            return;
          }
          let r = parseInt(this.node.dataset.reflowProduct, 10),
            i = this.node.dataset.reflowVariant || null,
            a = this.node.dataset.reflowQuantity || 1,
            s = this.node.querySelector(".ref-personalization-form");
          if (s && !s.checkValidity()) {
            s.reportValidity();
            return;
          }
          let n = [];
          for (let l of this.node.querySelectorAll(
            ".ref-personalization-checkbox:checked, .ref-personalization.ref-required"
          )) {
            let c = l.closest(".ref-personalization");
            if (!c || !c.id) continue;
            let h = { id: c.id },
              f = c.querySelector("input[type=text]");
            f && (h.inputText = f.value.trim()), n.push(h);
          }
          let o = new FormData();
          n.length && o.append("personalization", JSON.stringify(n));
          try {
            let l = await Reflow.cart.addProduct(r, a, i, o),
              c = this.getCartURL(),
              h = { type: "success", title: g("add_to_cart.success") };
            c &&
              ((h.button = g("add_to_cart.see_cart")),
              (h.buttonAction = () => {
                window.location.href = c;
              })),
              (this.notification = new $(
                d('<div data-reflow-type="toast"></div>'),
                h
              )),
              this.notification.init(),
              this.notification.show(),
              this.setQuantity(1);
            let f = this.node.querySelector(".ref-quantity-widget input");
            f && (f.value = 1),
              (this.personalizationValues = {}),
              this.update();
          } catch (l) {
            F(z(l, "system"), g("add_to_cart.error")),
              console.error("Reflow: Couldn't add product to cart", l);
          }
        });
    }
    onChange(e) {
      if (e.target.matches(".ref-field-variants")) {
        this.setVariant(e.target.value),
          this.onVariantChange && this.onVariantChange();
        return;
      }
      if (e.target.matches(".ref-quantity-widget input")) {
        this.setQuantity(e.target.value);
        return;
      }
      if (e.target.matches(".ref-personalization-checkbox")) {
        let r = e.target.closest(".ref-personalization"),
          i = r.querySelector(".ref-instructions");
        i && (i.style.display = e.target.checked ? "block" : "none");
        let a = r.querySelector("input[type=text]");
        a &&
          ((a.style.display = e.target.checked ? "block" : "none"),
          e.target.checked ? (a.required = !0) : a.removeAttribute("required")),
          this.setPersonalizationInput(r.id, "checkbox", e.target.checked);
        return;
      }
      if (e.target.matches(".ref-personalization-text-input")) {
        let r = e.target.closest(".ref-personalization");
        this.setPersonalizationInput(r.id, "text", e.target.value);
      }
    }
    getAPIEndpoint() {
      if (!this.node.dataset.reflowProduct)
        throw new Error("ID for product missing");
      return "/products/" + parseInt(this.node.dataset.reflowProduct, 10);
    }
    getProduct() {
      return this.node.dataset.reflowProduct;
    }
    setProduct(e) {
      this.node.dataset.reflowProduct = e;
    }
    getQuantity() {
      return this.node.dataset.reflowQuantity || 1;
    }
    setQuantity(e = 1) {
      this.node.dataset.reflowQuantity = e;
    }
    getVariant() {
      return this.node.dataset.reflowVariant;
    }
    setVariant(e) {
      this.node.dataset.reflowVariant = e;
    }
    setText(e) {
      this.button.textContent = e;
    }
    getAddToCartText() {
      return this.node.dataset.reflowAddtocartText;
    }
    setAddToCartText(e = "") {
      this.node.dataset.reflowAddtocartText = e;
    }
    getCartURL() {
      return this.node.dataset.reflowShoppingcartUrl;
    }
    setCartURL(e = "") {
      this.node.dataset.reflowShoppingcartUrl = e;
    }
    activate() {
      this.button.classList.remove("inactive");
    }
    deactivate() {
      this.button.classList.add("inactive");
    }
    setPersonalizationInput(e, r, i) {
      this.personalizationValues[e] || (this.personalizationValues[e] = {}),
        (this.personalizationValues[e][r] = i);
    }
    getPersonalizationInput(e, r) {
      return !this.personalizationValues[e] || !this.personalizationValues[e][r]
        ? null
        : this.personalizationValues[e][r];
    }
    async update(e) {
      var a;
      if (!e)
        try {
          e = await this.fetchData();
        } catch (s) {
          throw ((this.node.textContent = g("product.missing")), s);
        }
      let r = this.getAddToCartText() || g("add_to_cart.button_text");
      e.inStock || (r = g("out_of_stock")),
        this.setText(r),
        this.setProduct(e.id),
        this.activate();
      let i = this.parseShowString();
      if (((this.controls.innerHTML = ""), !e.inStock)) this.deactivate();
      else if ((a = e.vacationMode) == null ? void 0 : a.enabled) {
        if ((this.deactivate(), e.vacationMode.message.length)) {
          let s = d('<div class="ref-store-message"></div>');
          (s.textContent = e.vacationMode.message), this.node.prepend(s);
        }
      } else {
        if (
          (i.full || i.variants) &&
          e.variants.variants &&
          e.variants.variants.length
        ) {
          let s = d('<div class="ref-variant"></div>'),
            n = d("<label></label>"),
            o = d("<span></span>");
          (o.textContent = e.variants.option_name || ""), n.append(o);
          let l = d(
            '<select class="ref-form-control ref-field-variants" name="variant-state" required></select>'
          );
          for (let c of e.variants.variants) {
            let h = d("<option></option>");
            (h.value = c.id),
              (h.textContent = c.name),
              c.in_stock || (h.disabled = !0),
              l.append(h);
          }
          this.getVariant() && (l.value = this.getVariant()),
            l.value && this.setVariant(l.value),
            n.append(l),
            s.append(n),
            this.controls.append(s);
        }
        if (i.full || i.quantity) {
          let s = d("<span></span>"),
            n = new W(s, {
              inStock: !0,
              onChange: (l) => {
                this.setQuantity(l.getQuantity());
              },
            });
          n.init();
          let o = Math.min(e.availableQuantity, e.maxQty);
          if (this.getVariant() && e.variants.variants) {
            let l = e.variants.variants.find((c) => c.id == this.getVariant());
            l &&
              ((o = Math.min(l.availableQuantity, e.maxQty)),
              n.setVariant(this.getVariant()));
          }
          n.setProduct(this.getProduct()),
            n.setMaxQuantity(o),
            n.setQuantity(this.getQuantity()),
            n.update(),
            this.controls.append(s);
        }
        if (
          e.personalization &&
          e.personalization.length &&
          (i.full || i.personalization)
        ) {
          let s = d(
            '<form class="ref-personalization-holder ref-personalization-form"></form>'
          );
          for (let n of e.personalization) {
            let o = d('<div class="ref-personalization"></div>');
            o.id = n.id;
            let l = !!this.getPersonalizationInput(n.id, "checkbox"),
              c = n.required,
              h = d('<span class="ref-row"></span>'),
              f = d("<div></div>"),
              p = d('<label class="ref-personalization-label"></label>');
            if (((p.textContent = n.name), f.append(p), h.append(f), !c)) {
              let m = d(
                '<input type="checkbox" class="ref-form-control ref-personalization-checkbox"></input>'
              );
              (m.checked = l), p.append(m);
              let b = d('<span class="ref-price"></span>');
              (b.textContent =
                n.price > 0 ? n.priceFormatted : g("price_free")),
                h.append(b);
            }
            if ((o.append(h), n.instructions && n.instructions.length)) {
              let m = d('<p class="ref-instructions"></p>');
              (m.textContent = n.instructions),
                (m.style.display = l || c ? "block" : "none"),
                o.append(m);
            }
            if (n.type == "text") {
              let m = d(
                '<input type="text" class="ref-form-control ref-personalization-text-input"></input>'
              );
              (m.style.display = l || c ? "block" : "none"),
                (l || c) && (m.required = !0),
                n.min && m.setAttribute("minlength", n.min),
                n.max && m.setAttribute("maxlength", n.max),
                o.append(m);
              let b = this.getPersonalizationInput(n.id, "text");
              b && (m.value = b);
            }
            n.required &&
              (o.classList.add("ref-required"),
              n.type == "text" &&
                p.append(d(`<span title=${g("required")} > *</span>`)),
              n.type == "checkbox" &&
                p.append(
                  d(
                    '<span class="ref-check"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg></span>'
                  )
                )),
              s.append(o);
          }
          this.controls.append(s);
        }
      }
      if (
        (i.full || i.button) &&
        (this.controls.append(this.button), e.minQty > 0)
      ) {
        let s = d('<p class="ref-min-qty-message"></p>');
        (s.textContent = g("add_to_cart.min_quantity_per_order", {
          quantity: e.minQty,
        })),
          this.controls.append(s);
      }
    }
  };
  C(Qe, "type", "add-to-cart");
  var Se = Qe;
  var vi =
      /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/,
    or = (t) => t.match(vi)[1],
    lr = (t) => {
      let e = or(t);
      return {
        sm: "https://img.youtube.com/vi/" + e + "/default.jpg",
        md: "https://img.youtube.com/vi/" + e + "/mddefault.jpg",
        lg: "https://img.youtube.com/vi/" + e + "/hqdefault.jpg",
      };
    },
    Xe = (t) => "https://www.youtube.com/embed/" + or(t),
    dr = (t, e, r = []) => {
      var i = document.getElementById(t);
      i &&
        i.tagName.toUpperCase() != "IFRAME" &&
        (i = i.getElementsByTagName("iframe")[0]),
        i &&
          i.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: e, args: r }),
            "*"
          );
    };
  var oe = class extends R {
      constructor(e, r) {
        super(e, r);
        let i = d('<span data-reflow-type="add-to-cart"></span>');
        this.addToCart = new Se(i, { onVariantChange: this.update.bind(this) });
      }
      init() {
        this.node.addEventListener("click", this.onClick.bind(this)),
          this.addToCart.init();
      }
      onClick(e) {
        if (e.target.matches(".ref-thumbnails .ref-image")) {
          let r = d(".ref-thumbnails .ref-image", this.node),
            i = Array.from(r).indexOf(e.target);
          this.previewItem(i);
        }
        e.target.closest(".ref-preview") &&
          this.gallery &&
          this.gallery.openAt(this.activeIndex);
      }
      previewItem(e = 0) {
        let r = d(".ref-preview .ref-image", this.node),
          i = r[this.activeIndex];
        i &&
          i.dataset.reflowPreviewType === "video" &&
          dr("preview-" + this.activeIndex, "pauseVideo"),
          (this.activeIndex = e);
        let a = d(".ref-thumbnails .ref-image", this.node),
          s = a[e];
        a.forEach((n) => n.classList.remove("active")),
          s.classList.add("active"),
          r.forEach((n) => n.classList.remove("active")),
          r[e] && r[e].classList.add("active");
      }
      getAPIEndpoint() {
        let e =
          this.node.dataset.reflowProduct ||
          new URL(location.href).searchParams.get("product");
        if (e) return "/products/" + parseInt(e, 10);
        throw new Error("ID for product missing");
      }
      getCartURL() {
        return this.node.dataset.reflowShoppingcartUrl;
      }
      setCartURL(e) {
        this.node.dataset.reflowShoppingcartUrl = e;
      }
      getAddToCartText() {
        return this.node.dataset.reflowAddtocartText;
      }
      renderLightboxGallery(e) {
        this.isDemoMode() ||
          (this.gallery
            ? this.gallery.setElements(e)
            : this.getLightboxInstance().then((r) => {
                this.gallery = r({ loop: !0, elements: e });
              }));
      }
      async getLightboxInstance() {
        return window.GLightbox
          ? window.GLightbox
          : (oe._glightboxPromise ||
              (oe._glightboxPromise = new Promise((e, r) => {
                let i = [];
                i.push(
                  new Promise((a, s) => {
                    let n = document.createElement("script");
                    (n.onload = () => a()),
                      (n.onerror = (o) => s(o)),
                      document.body.append(n),
                      (n.src =
                        "https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.1.0/dist/js/glightbox.min.js");
                  })
                ),
                  i.push(
                    new Promise((a, s) => {
                      let n = document.createElement("link");
                      (n.onload = () => a()),
                        (n.onerror = (o) => s(o)),
                        document.head.append(n),
                        (n.rel = "stylesheet"),
                        (n.href =
                          "https://cdn.jsdelivr.net/gh/mcstudios/glightbox@3.1.0/dist/css/glightbox.min.css");
                    })
                  ),
                  Promise.all(i)
                    .then(() => e(window.GLightbox))
                    .catch(r);
              })),
            oe._glightboxPromise);
      }
      async update() {
        var o;
        let e,
          r = null;
        try {
          e = await this.fetchData();
        } catch (l) {
          throw ((this.node.textContent = g("product.missing")), l);
        }
        ((o = e.variants) == null ? void 0 : o.variants) &&
          ((r = e.variants.variants.find((l) => !!l.in_stock)),
          this.addToCart.getVariant() &&
            (r = e.variants.variants.find(
              (l) => l.id == this.addToCart.getVariant()
            )));
        let i = this.parseShowString(),
          a = d('<div class="reflow-product"></div>');
        if (i.full || i.media) {
          let l = d('<div class="ref-media"></div>'),
            c = d('<div class="ref-preview"></div>');
          if ((l.append(c), !e.media.length)) {
            var s = d('<img class="ref-image active">');
            (s.src = e.image.md), c.append(s);
          }
          let h = [],
            f = this.activeIndex || 0,
            p = e.media.length > 1,
            m = d('<div class="ref-thumbnails"></div>');
          if ((p && l.append(m), r)) {
            let b = e.media.findIndex((y) => y.id == r.image);
            f = b >= 0 ? b : f;
          }
          for (let b = 0; b < e.media.length; b++) {
            let y = e.media[b],
              w = d('<div class="ref-thumbnail"></div>'),
              x = d('<div class="ref-image"></div>');
            x.dataset.reflowPreviewType = y.type;
            let E;
            if (y.type == "image")
              (x.style.backgroundImage = `url('${y.src.sm}')`),
                (x.dataset.reflowPreview = y.url),
                (E = d('<img class="ref-image">')),
                (E.src = y.src.md),
                (E.dataset.reflowPreviewType = y.type),
                h.push({ href: y.src.lg, type: "image" });
            else {
              let A = lr(y.url);
              x.classList.add("ref-video"),
                (x.style.backgroundImage = `url('${A.sm}')`),
                (x.dataset.reflowPreview = Xe(y.url)),
                (E = d(`
						<iframe id="preview-${b}"
							class="ref-image ref-video"
							frameborder="0"
							allowfullscreen="true"
							src="${Xe(y.url)}?enablejsapi=1">
						</iframe>`)),
                (E.dataset.reflowPreviewType = y.type),
                h.push({
                  href: y.url,
                  type: "video",
                  source: "youtube",
                  width: 900,
                });
            }
            c.append(E),
              w.append(x),
              m.append(w),
              f == b &&
                ((this.activeIndex = b),
                x.classList.add("active"),
                E.classList.add("active"));
          }
          if (
            (this.renderLightboxGallery(h),
            e.onSale.enabled && e.onSale.badgeText)
          ) {
            let b = d('<div class="ref-sale-badge"></div>');
            (b.textContent = e.onSale.badgeText), l.append(b);
          }
          a.append(l);
        }
        let n = d('<div class="ref-product-data"></div>');
        if ((a.append(n), i.full || i.name)) {
          let l = d('<h2 class="ref-name"></h2>');
          (l.textContent = e.name), n.append(l);
        }
        if (i.full || i.categories) {
          let l = d('<div class="ref-categories"></div>');
          for (let c of e.categories) {
            let h = d('<span class="ref-category"></span>');
            this.node.dataset.reflowCategoryLink &&
              ((h = d('<a class="ref-category"></a>')),
              (h.href = this.node.dataset.reflowCategoryLink.replace(
                /\{id\}/g,
                c.id
              ))),
              (h.textContent = c.name),
              l.append(h);
          }
          n.append(l);
        }
        if (i.full || i.price) {
          let l = d('<strong class="ref-price"></strong>');
          if (
            ((l.textContent = e.priceFormatted),
            e.priceRange.length > 1 && r && (l.textContent = r.priceFormatted),
            e.onSale.enabled)
          ) {
            l.classList.add("ref-on-sale");
            let c = d('<s class="ref-original-price"></s>');
            (c.textContent = e.onSale.originalPriceFormatted),
              e.priceRange.length > 1 &&
                r &&
                r.original_price &&
                (c.textContent = r.originalPriceFormatted),
              l.prepend(c);
          }
          n.append(l);
        }
        if (e.inventoryType == "advanced" && e.showQuantity) {
          let l = d('<span class="ref-qty-available"></span>');
          r
            ? (l.textContent = g("product.left_in_stock", {
                numberItems: r.availableQuantity,
              }))
            : (l.textContent = g("product.left_in_stock", {
                numberItems: e.availableQuantity,
              })),
            n.append(l);
        }
        if (
          ((i.full || i["add-to-cart"]) &&
            (this.addToCart.setCartURL(this.getCartURL()),
            this.addToCart.setAddToCartText(this.getAddToCartText()),
            this.addToCart.update(e),
            n.append(this.addToCart.node)),
          i.full || i.description)
        ) {
          let l = d('<div class="ref-description"></div>');
          (l.innerHTML = e.descriptionHTML), n.append(l);
        }
        (this.node.innerHTML = ""), this.node.append(a);
      }
    },
    Ze = oe;
  C(Ze, "type", "product");
  var Ee = Ze;
  var We = class extends R {
      constructor(e, r = {}) {
        super(e, r);
        (this.backdrop = d('<div class="ref-backdrop"></div>')),
          (this.productPreview = d(`<div class="ref-product-preview">
			<div class="ref-product-preview-header">
				<div class="ref-title"></div>
				<div class="ref-close-button">\xD7</div>
			</div>
			<div class="ref-product-preview-content"></div>
		</div>`)),
          (this.buttonToProduct = new WeakMap());
      }
      init() {
        this.node.addEventListener("click", this.onClick.bind(this)),
          window.addEventListener("popstate", (e) => {
            this.update();
          });
      }
      getAPIEndpoint() {
        let e = this.node.dataset,
          r = new URL(location.href),
          i = this.getPage(),
          a = e.reflowPerpage || r.searchParams.get("per_page") || 20,
          s = e.reflowCategory || r.searchParams.get("category"),
          n = e.reflowOrder || r.searchParams.get("order"),
          o = e.reflowSearch || r.searchParams.get("search"),
          l = e.reflowSimilarTo,
          c = `?page=${i}&perpage=${a}`;
        return (
          s && (c += "&category=" + parseInt(s, 10)),
          n && (c += "&order=" + encodeURIComponent(n)),
          o && (c += "&search=" + encodeURIComponent(o)),
          l && (c += "&similarToProd=" + parseInt(l, 10)),
          "/products/" + c
        );
      }
      onClick(e) {
        e.target.closest(".ref-backdrop") &&
          (e.preventDefault(), this.hidePreview());
        let i = e.target.closest(".preview-toggle");
        if (i) {
          e.preventDefault();
          let n = this.buttonToProduct.get(i);
          if (!n) return;
          let o = this.getCartURL(),
            l = d('<div data-reflow-type="product"></div>'),
            c = new Ee(l);
          (l.dataset.reflowProduct = n.id),
            (l.dataset.reflowShow = "media,price,add-to-cart"),
            o && c.setCartURL(o),
            c.init(),
            c.update();
          let h = d(
              ".ref-product-preview-header .ref-title",
              this.productPreview
            )[0],
            f = d(".ref-product-preview-content", this.productPreview)[0];
          (h.textContent = n.name),
            (f.innerHTML = ""),
            f.append(l),
            this.showPreview();
        }
        e.target.closest(".ref-close-button") &&
          (e.preventDefault(), this.hidePreview());
        let s = e.target.closest(".ref-page-item");
        if (s) {
          e.preventDefault();
          let n = s.dataset.reflowPage,
            o = new URL(window.location);
          o.searchParams.set("page", n),
            history.pushState({ page: n }, document.title, o),
            this.update();
        }
      }
      hidePreview() {
        this.productPreview.classList.remove("open"),
          this.isDemoMode() ||
            (this.backdrop.remove(), this.backdrop.classList.remove("active"));
      }
      showPreview() {
        this.productPreview.classList.add("open"),
          this.isDemoMode() ||
            (this.node.append(this.backdrop),
            this.backdrop.classList.add("active"));
      }
      getCartURL() {
        return this.node.dataset.reflowShoppingcartUrl;
      }
      setCartURL(e) {
        this.node.dataset.reflowShoppingcartUrl = e;
      }
      shouldShowAddToCart() {
        return this.node.dataset.hasOwnProperty("reflowAddtocart");
      }
      getAddToCartText() {
        return (
          this.node.dataset.reflowAddtocartText || g("add_to_cart.button_text")
        );
      }
      getPage() {
        let e,
          r = 1;
        return (
          this.hasDynamicPagination() &&
            (e = new URL(location.href).searchParams.get("page")),
          e || this.node.dataset.reflowPage || r
        );
      }
      hasDynamicPagination() {
        let e = this.parseShowString();
        return e.full || e.pagination;
      }
      renderPaginationItem(e = 1, r = "1", i = !1, a = !1, s = "") {
        let n = d('<li class="ref-page-item"></li>');
        n.dataset.reflowPage = e;
        let o = i
          ? d('<span class="ref-page-link"></span>')
          : d('<a class="ref-page-link"></a>');
        if (
          ((o.textContent = r),
          s &&
            (s == "ref-prev-btn" &&
              (o.innerHTML =
                "<?xml version='1.0' encoding='iso-8859-1'?><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 34.075 34.075' style='enable-background:new 0 0 34.075 34.075;' xml:space='preserve'><g><g><path style='fill:currentColor;' d='M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79 L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792 C25.58,33.883,25.075,34.075,24.57,34.075z'/></g></g></svg>"),
            s == "ref-next-btn" &&
              (o.innerHTML =
                "<?xml version='1.0' encoding='iso-8859-1'?><svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 185.343 185.343' style='enable-background:new 0 0 185.343 185.343;' xml:space='preserve'><g><g><path style='fill:currentColor;' d='M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z'/></g></g></svg>"),
            o.classList.add(s)),
          i)
        )
          n.classList.add("active");
        else {
          let l = new URL(window.location);
          l.searchParams.set("page", e), (o.href = l);
        }
        return a && n.classList.add("disabled"), n.append(o), n;
      }
      renderPagination(e = {}) {
        let r = e.current_page,
          i = e.per_page,
          a = e.total,
          s = Math.ceil(a / i);
        if (s <= 1) return document.createDocumentFragment();
        let n = d('<ul class="ref-pagination"></ul>'),
          o = r - 1 <= 0,
          l = o ? 1 : r - 1,
          c = r + 1 > s,
          h = c ? s : r + 1;
        n.append(this.renderPaginationItem(l, "", !1, o, "ref-prev-btn"));
        for (var f = 0; f < s; f++)
          n.append(this.renderPaginationItem(f + 1, f + 1, r === f + 1));
        return (
          n.append(this.renderPaginationItem(h, "", !1, c, "ref-next-btn")), n
        );
      }
      async update() {
        let e;
        try {
          e = await this.fetchData();
        } catch (n) {
          console.error("Reflow:", n);
        }
        if (!e || !e.data.length) {
          this.node.textContent = g("product_list.empty");
          return;
        }
        let r = d('<div class="reflow-product-list"></div>'),
          i = d('<div class="ref-products"></div>'),
          a = this.node.dataset.reflowLayout;
        a && We.possibleLayouts.includes(a) && r.classList.add("ref-" + a);
        let s = this.parseShowString();
        for (let n of e.data) {
          let o = d('<div class="ref-product"></div>');
          this.node.dataset.reflowProductLink &&
            ((o = d('<a class="ref-product"></a>')),
            (o.href = this.node.dataset.reflowProductLink.replace(
              /\{id\}/g,
              n.id
            )));
          let l = d('<div class="ref-product-data"></div>'),
            c = !1,
            h = d('<div class="ref-product-info"></div>'),
            f = !1;
          if (s.full || s.image) {
            let p = d('<div class="ref-media">'),
              m = d('<img class="ref-image">');
            if (
              ((m.src = n.image.md),
              (m.loading = "lazy"),
              p.append(m),
              n.onSale.enabled && n.onSale.badgeText)
            ) {
              let b = d('<div class="ref-sale-badge"></div>'),
                y = n.onSale.badgeText;
              (b.textContent = y), p.append(b);
            }
            o.append(p);
          }
          if (s.full || s.name) {
            let p = d('<h5 class="ref-name"></h5>');
            (p.textContent = n.name), h.append(p), (f = !0), (c = !0);
          }
          if (s.full || s.excerpt) {
            let p = d('<p class="ref-excerpt"></p>');
            (p.textContent = n.excerpt), h.append(p), (f = !0), (c = !0);
          }
          if ((f && l.append(h), s.full || s.price)) {
            let p = d('<strong class="ref-price"></strong>'),
              m = d('<s class="ref-original-price"></s>');
            if (n.priceRange.length > 1 && n.variants) {
              let y = n.variants.variants
                .filter((w) => !!w.in_stock)
                .sort((w, x) => w.price - x.price)[0];
              (p.textContent = y.priceFormatted),
                n.onSale.enabled &&
                  !!y.originalPriceFormatted &&
                  (p.classList.add("ref-on-sale"),
                  (m.textContent = y.originalPriceFormatted),
                  p.prepend(m));
            } else
              (p.textContent = n.priceFormatted),
                n.onSale.enabled &&
                  (p.classList.add("ref-on-sale"),
                  (m.textContent = n.onSale.originalPriceFormatted),
                  p.prepend(m));
            l.append(p), (c = !0);
          }
          if ((c && o.append(l), s.full || s["add-to-cart"])) {
            let p = d('<div class="ref-addons"></div>'),
              m = d('<a href="#" class="ref-button preview-toggle"></a>');
            (m.textContent = this.getAddToCartText()),
              this.buttonToProduct.set(m, n),
              p.append(m),
              o.append(p);
          }
          i.append(o);
        }
        if ((r.append(i), s.full || s.pagination)) {
          let n = this.renderPagination(e.meta);
          r.append(n);
        }
        (s.full || s["add-to-cart"]) && r.append(this.productPreview),
          (this.node.innerHTML = ""),
          this.node.append(r);
      }
    },
    Te = We;
  C(Te, "type", "product-list"), C(Te, "possibleLayouts", ["list", "cards"]);
  var cr = Te;
  var Je = class extends R {
    constructor(e, r = {}) {
      super(e, r);
      (e.innerHTML = `
			<div class="reflow-product-search">
				<div class="ref-input-wrapper">
					<input type="text" class="ref-search" inputmode="search" />
					<span class="ref-cancel-search"></span>
				</div>
			<div class="ref-button" type="submit"></div>
		</div>`),
        (this.input = e.querySelector("input.ref-search")),
        (this.cancel = e.querySelector("span.ref-cancel-search")),
        (this.searchBtn = e.querySelector(".ref-button"));
    }
    init() {
      this.input.addEventListener("keydown", this.onKeyDown.bind(this)),
        this.input.addEventListener("input", this.onInput.bind(this)),
        this.cancel.addEventListener("click", this.cancelSearch.bind(this)),
        this.searchBtn.addEventListener(
          "click",
          this.redirectToProdListing.bind(this)
        ),
        (this.input.value = new URL(location.href).searchParams.get("search"));
    }
    onKeyDown(e) {
      if (e.key == "Enter") {
        if (!this.input.value.trim().length) {
          this.cancelSearch();
          return;
        }
        this.redirectToProdListing();
      }
      e.key == "Escape" && this.cancelSearch();
    }
    onInput() {
      this.cancel.style.display = this.input.value.length ? "block" : "none";
    }
    cancelSearch() {
      this.input.value = "";
      let e = new URL(location.href);
      e.searchParams.get("search") &&
        (e.searchParams.set("search", ""), (window.location = e.href)),
        (this.cancel.style.display = "none");
    }
    redirectToProdListing() {
      let e = this.input.value.trim();
      if (!e) {
        (this.input.value = ""), this.input.blur();
        return;
      }
      let r = new URL(
        this.node.dataset.reflowSearchUrl || window.location.href,
        window.location.href
      );
      r.searchParams.set("search", e),
        r.searchParams.set("page", 1),
        (window.location = r.href);
    }
    async update() {
      var e, r;
      (this.cancel.style.display = this.input.value.length ? "block" : "none"),
        (this.input.placeholder =
          (e = this.node.dataset.reflowPlaceholder) != null
            ? e
            : g("product_search.placeholder")),
        (this.searchBtn.style.display =
          this.node.dataset.reflowShowButton == "true" ? "block" : "none"),
        (this.searchBtn.textContent =
          (r = this.node.dataset.reflowButtonText) != null
            ? r
            : g("product_search.button"));
    }
  };
  C(Je, "type", "product-search");
  var hr = Je;
  var Ye = class extends R {
      constructor(e, r = {}) {
        super(e, r);
        this.reflowCategoryLink = e.dataset.reflowCategoryLink;
      }
      getAPIEndpoint() {
        let r = this.node.dataset.reflowRootCategory;
        return "categories" + (r ? "?root-category=" + parseInt(r, 10) : "");
      }
      async update() {
        let e = await this.fetchData();
        if (!e) return;
        let r = this.node.dataset.reflowLayout,
          i = d('<div class="reflow-category-list"></div>');
        r && Ye.possibleLayouts.includes(r) && i.classList.add("ref-" + r);
        let a = d('<ul class="ref-categories"></ul>');
        i.append(a),
          this.buildListsRecursive(a, e),
          (this.node.innerHTML = ""),
          this.node.append(i);
      }
      buildListsRecursive(e, r) {
        for (let i of r) {
          let a = d('<li class="ref-category"></li>'),
            s = i.subcategories;
          e.append(a);
          let n = d("<span></span>");
          if (
            (this.node.dataset.reflowCategoryLink &&
              ((n = d("<a></a>")),
              (n.href = this.node.dataset.reflowCategoryLink.replace(
                /\{id\}/g,
                i.id
              ))),
            (n.textContent = i.name),
            a.append(n),
            s && s.length)
          ) {
            this.node.dataset.reflowLayout !== "unstyled" &&
              a.classList.add("ref-dropdown-toggle");
            let o = d("<ul></ul>");
            a.append(o), this.buildListsRecursive(o, s);
          }
        }
      }
    },
    Le = Ye;
  C(Le, "type", "category-list"),
    C(Le, "possibleLayouts", ["unstyled", "horizontal-bar", "vertical-bar"]);
  var pr = Le;
  var Ke = class extends R {
    constructor(e, r = {}) {
      super(e, r);
      C(this, "_state", null);
      C(this, "possibleTypes", ["dropdown", "sidebar"]);
      C(this, "backendUpdateTimeout", null);
      C(this, "pendingBackendUpdates", {});
      (this.backdrop = d('<div class="ref-backdrop"></div>')),
        (this.summary = d(`
			<div class="ref-summary">
				<div class="ref-summary-header">
					<h5 class="ref-summary-title">${v("cart")}</h5>
					<div class="ref-close-button">\xD7</div>
				</div>
				<div class="ref-summary-body">
					<div class="ref-loading-overlay"></div>
					<div class="ref-message">${v("cart.errors.empty")}</div>
					<div class="ref-cart-summary">
						<div class="ref-products"></div>
						<hr>
						<div class="ref-totals">
							<div class="ref-subtotal">
								<div class="ref-row"><span>${v("subtotal")}</span><span></span></div>
							</div>
							<div class="ref-shipping-taxes">${v("cart.subtotal_only")}</div>
						</div>
					</div>
				</div>
				<div class="ref-summary-footer">
					<a href="#" class="ref-button"></a>
				</div>
			</div>
		`)),
        (this.summaryBody = this.summary.querySelector(".ref-summary-body")),
        (this.loadingOverlay = this.summary.querySelector(
          ".ref-loading-overlay"
        )),
        (this.productContainer = this.summary.querySelector(".ref-products")),
        (this.button = this.summary.querySelector(
          ".ref-summary-footer .ref-button"
        )),
        (this.productQuantityWidget = new WeakMap());
    }
    init() {
      this.node.addEventListener("click", this.onButtonClick.bind(this)),
        this.summary.addEventListener("click", this.onSidebarClick.bind(this)),
        (this.scheduleRefresh = de(this.refresh.bind(this), 250)),
        Q("reflow-add-to-cart", this.scheduleRefresh),
        Q("reflow-update-cart-product", this.scheduleRefresh),
        Q("reflow-remove-cart-product", this.scheduleRefresh);
    }
    onButtonClick(e) {
      if (!e.target.closest(".ref-summary")) {
        this.toggle();
        return;
      }
    }
    async onSidebarClick(e) {
      if (e.target.closest(".ref-close-button")) {
        e.preventDefault(), e.stopPropagation(), this.hide();
        return;
      }
      if (e.target.closest(".ref-product-remove")) {
        e.preventDefault(), e.stopPropagation();
        let r = e.target.closest(".ref-product"),
          i = this.productQuantityWidget.get(r),
          a = i.getProduct(),
          s = i.getVariant(),
          n = new FormData(),
          o = r.dataset.personalization;
        o && o.length && n.append("personalization", o),
          Reflow.cart.scheduleAPICall(
            a + "-remove",
            () => Reflow.cart.removeProduct(a, s, n),
            0
          );
      }
    }
    get state() {
      return this.demoMode
        ? this._state || null
        : this._state || Reflow.cart.state || null;
    }
    set state(e = null) {
      this._state = e;
    }
    toggle() {
      this.isSummaryOpen() ? this.hide() : this.show();
    }
    hide() {
      this.summary.classList.remove("open"),
        !this.isDemoMode() &&
          this.hasSummary() &&
          (this.backdrop.remove(), this.backdrop.classList.remove("active")),
        this.refresh();
    }
    show() {
      this.summary.classList.add("open"),
        !this.isDemoMode() &&
          this.hasSummary() &&
          (this.node.append(this.backdrop),
          this.backdrop.classList.add("active")),
        this.refresh();
    }
    get key() {
      return localStorage.reflowCartKey;
    }
    hasSummary() {
      return this.possibleTypes.includes(this.getSummaryType());
    }
    getSummaryType() {
      return this.node.dataset.reflowSummaryType;
    }
    getSummaryPosition() {
      return this.node.dataset.reflowSummaryPosition;
    }
    isSummaryOpen() {
      return this.summary.classList.contains("open");
    }
    getCartURL() {
      return this.node.dataset.reflowShoppingcartUrl;
    }
    setCartURL(e) {
      this.node.dataset.reflowShoppingcartUrl = e;
    }
    formatMoney(e) {
      return J(e, this.state.currencyConfig);
    }
    calculateTotalQuantity() {
      return this.demoMode
        ? this.state
          ? this.state.products.reduce((e, r) => e + r.quantity, 0)
          : 0
        : Reflow && Reflow.cart
        ? Reflow.cart.quantity
        : 0;
    }
    renderProductCompact(e) {
      let r = d(`
			<div class="ref-product">
				<div class="ref-product-col">
					<img class="ref-product-photo">
					<div class="ref-product-controls">
						<div class="ref-row">
							<div>
								<div class="ref-product-name"></div>
								<div class="ref-product-personalization-holder"></div>
							</div>
							<div class="ref-product-total"></div>
						</div>
						<div class="ref-product-quantity"></div>
						<div class="ref-product-qty-message"></div>
					</div>
				</div>
			</div>
		`),
        i = e.name;
      e.variant && (i += ` (${e.variant.name})`);
      let a = d(".ref-product-photo", r)[0];
      if (
        ((a.src = e.image.sm),
        (a.alt = i),
        (d(".ref-product-name", r)[0].textContent = i),
        e.inStock && e.quantity > e.availableQuantity
          ? (d(".ref-product-qty-message", r)[0].textContent = g(
              "cart.left_in_stock",
              { in_stock: e.availableQuantity }
            ))
          : e.inStock && e.quantity > e.maxQty
          ? (d(".ref-product-qty-message", r)[0].textContent = g(
              "cart.max_product_qty",
              { max_quantity: e.maxQty }
            ))
          : d(".ref-product-qty-message", r)[0].remove(),
        (d(".ref-product-total", r)[0].textContent = e.inStock
          ? this.formatMoney(e.price)
          : g("out_of_stock")),
        e.personalization && e.personalization.length)
      )
        try {
          r.dataset.personalization = JSON.stringify(
            e.personalization.map((c) => {
              let h = { id: c.id };
              return c.inputText && (h.inputText = c.inputText), h;
            })
          );
          let l = d(".ref-product-personalization-holder", r)[0];
          for (let c of e.personalization) {
            let h = d('<div class="ref-product-personalization"></div>'),
              f = `${c.name}${c.inputText ? ': "' + c.inputText + '"' : ""}`;
            (h.title = f),
              (f = f.length > 25 ? f.substring(0, 25) + "..." : f),
              (h.textContent = f),
              l.append(h);
          }
        } catch (l) {
          console.error("Reflow:", l);
        }
      let s = d("<div></div>"),
        n = new W(s, {
          inStock: e.inStock,
          onChange: (l) => {
            let c = l.getProduct(),
              h = l.getQuantity(),
              f = l.getVariant(),
              p = new FormData(),
              m = r.dataset.personalization;
            m && m.length && p.append("personalization", m),
              Reflow.cart.scheduleAPICall(
                c + (f ? `-${f}` : "") + "-quantity",
                () => Reflow.cart.updateProduct(c, h, f, p)
              );
          },
        });
      n.init(),
        e.variant && n.setVariant(e.variant.id),
        n.setProduct(e.id),
        n.setMaxQuantity(Math.min(e.availableQuantity, e.maxQty)),
        n.setQuantity(e.quantity),
        n.update();
      let o = d(".ref-product-quantity", r)[0];
      return (
        o.append(n.node),
        o.append(d(`<div class="ref-product-remove">${v("remove")}</div>`)),
        this.productQuantityWidget.set(r, n),
        r
      );
    }
    async refreshState() {
      if (this.mockData) {
        this.state = this.mockData;
        return;
      }
      this.isSummaryOpen() && (await Reflow.cart.refresh());
    }
    async refresh() {
      this.showLoading(),
        await this.refreshState(),
        this.hideLoading(),
        this.update();
    }
    showLoading() {
      this.loadingOverlay.classList.add("visible");
    }
    hideLoading() {
      this.loadingOverlay.classList.remove("visible");
    }
    async update() {
      if (!this.state)
        try {
          await this.refreshState();
        } catch (r) {
          this.productContainer.textContent = g("cart.errors.unavailable");
          return;
        }
      let e = this.calculateTotalQuantity();
      if (
        ((this.node.dataset.reflowCount = e),
        e
          ? this.node.classList.add("has-quantity")
          : this.node.classList.remove("has-quantity"),
        this.node.classList.add("reflow-cart-toggler"),
        this.hasSummary())
      ) {
        if (this.isSummaryOpen()) {
          let r = this.summaryBody.querySelector(".ref-cart-summary"),
            i = this.summaryBody.querySelector(".ref-message");
          this.productContainer.innerHTML = "";
          let a = "close",
            s = g("close"),
            n = "#";
          if (!this.state.products.length)
            (r.style.display = "none"), (i.style.display = "block");
          else {
            for (let h of this.state.products)
              this.productContainer.append(this.renderProductCompact(h));
            let l = this.summaryBody.querySelector(".ref-subtotal");
            l.firstElementChild.children[1].textContent = this.formatMoney(
              this.state.subtotal
            );
            let c = this.getCartURL();
            c && ((a = "checkout"), (s = g("cart.checkout")), (n = c)),
              (r.style.display = "flex"),
              (i.style.display = "none");
          }
          a === "close"
            ? this.button.classList.add("ref-close-button")
            : this.button.classList.remove("ref-close-button"),
            (this.button.style.display = "inline-block"),
            (this.button.href = n),
            (this.button.textContent = s);
        }
        this.summary.classList.remove("sidebar", "dropdown", "left", "right"),
          this.summary.classList.add(
            this.getSummaryType(),
            this.getSummaryPosition()
          ),
          this.node.append(this.summary),
          this.node.classList.add("has-summary");
      } else this.summary.remove(), this.node.classList.remove("has-summary");
      return this.node;
    }
  };
  C(Ke, "type", "view-cart");
  var ur = Ke;
  var fr = class {
      constructor() {
        C(this, "_state", null);
        C(this, "backendUpdateTimeout", null);
        C(this, "pendingBackendUpdates", {});
        this.localFormData = new mr();
      }
      calculateTotalQuantity() {
        return this.state
          ? this.state.products.reduce((e, r) => e + r.quantity, 0)
          : 0;
      }
      get key() {
        return localStorage.reflowCartKey;
      }
      set key(e) {
        localStorage.reflowCartKey = e;
      }
      get state() {
        return this._state;
      }
      set state(e) {
        (this._state = e), (this.quantity = this.calculateTotalQuantity());
      }
      get quantity() {
        return parseInt(localStorage.reflowCartQuantity, 10) || 0;
      }
      set quantity(e) {
        localStorage.reflowCartQuantity = e;
      }
      async create() {
        return (await I("/carts/", { method: "POST" }, !1)).cartKey;
      }
      async fetch(e, r = {}) {
        let i = "",
          a = [];
        for (let s in r) a.push(`${s}=${r[s]}`);
        return (
          a.length && (i = "?" + a.join("&")),
          await I("/carts/" + e + i, {}, !1)
        );
      }
      async refreshState(e = {}) {
        try {
          if (this.key) this.state = await this.fetch(this.key, e);
          else throw new Error("No Key");
        } catch (r) {
          !r.status || r.status == 404
            ? ((this.key = await this.create()),
              (this.state = await this.fetch(this.key, e)),
              this.localFormData.clear())
            : console.error("Reflow:", r);
        }
      }
      async refresh(e = {}) {
        await this.refreshState(e);
      }
      async addProduct(e, r = 1, i, a) {
        let s = "";
        this.key && (s = "?cartKey=" + this.key);
        let n = "/add-to-cart/" + e;
        (n += "/" + r), i && (n += "/" + i), (n += s);
        let o = await I(n, { method: "POST", body: a });
        return (
          o.cartKey && (this.key = o.cartKey),
          we("reflow-add-to-cart", document, { productID: e }),
          (this.quantity = o.cartQuantity),
          o
        );
      }
      async updateProduct(e, r = 1, i, a) {
        try {
          let s = await I(
            `/update-cart-product/${this.key}/${e}/` + r + "/" + (i || ""),
            { method: "POST", body: a },
            !1
          );
          return (
            we("reflow-update-cart-product", document, { productID: e }),
            (this.quantity = s.cartQuantity),
            s
          );
        } catch (s) {
          F(z(s, "system"));
        }
      }
      async removeProduct(e, r, i) {
        let a = await I(
          `/remove-cart-product/${this.key}/${e}/` + (r || ""),
          { method: "POST", body: i },
          !1
        );
        return (
          we("reflow-remove-cart-product", document, { productID: e }),
          (this.quantity = a.cartQuantity),
          a
        );
      }
      async createPaypalOrder(e, r) {
        return (
          await I(`/create-paypal-order/${this.key}/`, { method: "POST" }, !1)
        ).orderID;
      }
      async capturePaypalOrder(e, r) {
        let i = new FormData();
        i.append("orderID", e.orderID);
        try {
          return await I(
            `/capture-paypal-order/${this.key}/`,
            { method: "POST", body: i },
            !1
          );
        } catch (a) {
          if (!a.data) throw a;
          let s = a.data,
            n = Array.isArray(s.details) && s.details[0];
          if (n && n.issue === "INSTRUMENT_DECLINED") return r.restart();
          throw a;
        }
      }
      async updatePaypalShipping(e, r) {
        try {
          let i = new FormData();
          i.append("orderID", e.orderID),
            i.append("address", JSON.stringify(e.shipping_address));
          let a = 0;
          e.selected_shipping_option &&
            e.selected_shipping_option.id &&
            (a = e.selected_shipping_option.id),
            i.append("selectedShippingOption", a);
          let s = await I(
            `/update-paypal-shipping/${this.key}/`,
            { method: "POST", body: i },
            !1
          );
          return r.resolve();
        } catch (i) {
          let a = (i.data && i.data.errors && i.data.errors.system) || "";
          return console.error("Reflow:", i), r.reject();
        }
      }
      scheduleAPICall(e, r, i = 1e3) {
        (this.pendingBackendUpdates[e] = r),
          clearTimeout(this.backendUpdateTimeout),
          (this.backendUpdateTimeout = setTimeout(async () => {
            let a = [];
            for (let s in this.pendingBackendUpdates)
              a.push(this.pendingBackendUpdates[s]()),
                delete this.pendingBackendUpdates[s];
            await Promise.allSettled(a);
          }, i));
      }
    },
    mr = class {
      getAll() {
        return JSON.parse(localStorage.getItem("reflowFormData") || "{}");
      }
      get(e) {
        return this.getAll()[e];
      }
      set(e, r) {
        let i = this.getAll();
        (i[e] = r || ""),
          localStorage.setItem("reflowFormData", JSON.stringify(i));
      }
      isSet(e) {
        return this.get(e) !== void 0;
      }
      clear() {
        localStorage.setItem("reflowFormData", "{}");
      }
    },
    yr = fr;
  var et = class extends R {
    constructor(e, r) {
      super(e, r);
      (this.retries = 0),
        (this.maxRetries = 6),
        (this.retryTimeout = 5e3),
        (this.currencyConfig = {});
    }
    init() {}
    async fetchData() {
      if (this.mockData)
        return (
          (this.currencyConfig = this.mockData.currencyConfig), this.mockData
        );
      let e = this.getAPIEndpoint(),
        r = await I(e, {}, !1);
      return r.error
        ? (console.error("Reflow:", r.error), null)
        : ((this.currencyConfig = r.currencyConfig), r);
    }
    getAPIEndpoint() {
      let e = new URL(location.href),
        r = this.node.dataset;
      if (r.reflowOrder && r.reflowSecurehash)
        return (
          "/orders/" + r.reflowOrder + "?secure_hash=" + r.reflowSecurehash
        );
      let i = e.searchParams.get("session_id");
      if (i) return "/orders/stripe/" + i + "/";
      let a = e.searchParams.get("order_id"),
        s = e.searchParams.get("secure_hash");
      if (a && s) return "/orders/" + a + "?secure_hash=" + s;
      let n = new Error("Invalid API parameters");
      throw ((n.missingParams = !0), n);
    }
    formatMoney(e) {
      return J(e, this.currencyConfig);
    }
    async update() {
      var f;
      let e,
        r = d('<div class="reflow-order-status">Loading</div>');
      (this.node.innerHTML = ""), this.node.append(r);
      try {
        e = await this.fetchData();
      } catch (p) {
        throw p.missingParams
          ? ((r.textContent = g("order_status.check_email")), p)
          : (this.retries++,
            this.retries >= this.maxRetries
              ? ((r.textContent = g("order_status.check_email")), p)
              : (setTimeout(() => {
                  this.update();
                }, this.retryTimeout),
                p));
      }
      r.innerHTML = "";
      let i = d('<div class="col"></div>'),
        a = this.parseShowString(),
        s = d('<div class="ref-order-info"></div>'),
        n = d("<h2></h2>");
      (n.innerHTML = v("order_status.order", { orderId: e.id })), s.append(n);
      let o = d('<div class="ref-order-line ref-status"></div>');
      (o.innerHTML =
        "<b>" +
        v("order_status.status") +
        "</b>" +
        v("order_status." + e.status)),
        s.append(o);
      let l = d('<div class="ref-order-line ref-created"></div>'),
        c = new Date(e.created_at * 1e3);
      if (
        ((l.innerHTML = `<b>${v(
          "order_status.created"
        )}</b>${c.toLocaleString()}`),
        s.append(l),
        e.status == "pending" && e.payment_instructions)
      ) {
        let p = d('<div class="ref-order-payment-instructions"></div>');
        (p.innerHTML = e.payment_instructions),
          p.prepend(d(`<b>${v("payment")}</b>`)),
          s.append(p);
      }
      let h = i.cloneNode();
      if ((h.append(s), r.append(h), a.full || a.customer)) {
        let p = d(
          `<div class="ref-order-customer"><h2>${v(
            "order_status.customer_details"
          )}</h2></div>`
        );
        if (e.customer.name) {
          let y = d('<div class="ref-order-line ref-customer-name"></div>');
          (y.textContent = e.customer.name),
            y.prepend(d(`<b>${v("name")}</b>`)),
            p.append(y);
        }
        let m = d('<div class="ref-order-line ref-customer-email"></div>');
        if (
          ((m.textContent = e.customer.email),
          m.prepend(d(`<b>${v("email")}</b>`)),
          p.append(m),
          e.customer.phone)
        ) {
          let y = d('<div class="ref-order-line ref-customer-phone"></div>');
          (y.textContent = e.customer.phone),
            y.prepend(d(`<b>${v("phone")}</b>`)),
            p.append(y);
        }
        let b = i.cloneNode();
        b.append(p), r.append(b);
      }
      if (a.full || a.shipping) {
        let p,
          m = e.delivery_method || "shipping";
        if (m == "shipping") {
          if (
            ((p = d(
              `<div class="ref-order-shipping"><h2>${v("shipping")}</h2></div>`
            )),
            e.shipping_method)
          ) {
            let y = d(
                `<div class="ref-order-line ref-shipping-method"><b>${v(
                  "shipping_method"
                )}</b></div>`
              ),
              w = d("<span></span>");
            (w.textContent =
              e.shipping_method.name +
              (e.shipping_method.price
                ? " (" + this.formatMoney(e.shipping_method.price) + ")"
                : "")),
              y.append(w),
              p.append(y);
          }
          if (e.shipping_address) {
            let y = d(
              '<div class="ref-order-line ref-shipping-address"></div>'
            );
            for (let w of e.shipping_address) {
              let x = d("<span></span>");
              (x.textContent = g(w.name) + ": " + w.val), y.append(x);
            }
            y.prepend(d(`<b>${v("shipping_address")}</b>`)), p.append(y);
          }
        }
        if (m == "pickup") {
          p = d(
            `<div class="ref-order-local-pickup"><h2>${v(
              "pickup_at_store"
            )}</h2></div>`
          );
          let y = d(`<div class="ref-order-line"><b>${v("store")}</b></div>`),
            w = d("<span></span>");
          (w.textContent = e.pickup_location.name), y.append(w), p.append(y);
          let x = d('<div class="ref-order-line"></div>');
          for (let E of e.pickup_location.address) {
            let A = d("<span></span>");
            (A.textContent = E.name + ": " + E.val),
              (A.textContent = g(E.name) + ": " + E.val),
              x.append(A);
          }
          x.prepend(d(`<b>${v("address")}</b>`)), p.append(x);
          for (let E of ["phone", "email", "working_hours"])
            if (e.pickup_location[E]) {
              let A = d(`<div class="ref-order-line"><b>${v(E)}</b></div>`),
                B = d("<span></span>");
              (B.textContent = e.pickup_location[E]), A.append(B), p.append(A);
            }
        }
        if (e.note) {
          let y = d('<div class="ref-order-line ref-note"></div>');
          (y.textContent = e.note),
            y.prepend(d(`<b>${v("note_to_seller")}</b>`)),
            p.append(y);
        }
        let b = i.cloneNode();
        b.append(p), r.append(b);
      }
      if ((a.full || a.billing) && e.billing_address) {
        let p = d(
            `<div class="ref-order-billing"><h2>${v("billing")}</h2></div>`
          ),
          m = e.billing_address.find((w) => w.name == "Name");
        if (m) {
          let w = d(
              `<div class="ref-order-line ref-billing-address"><b>${v(
                "billing_name"
              )}</b></div>`
            ),
            x = d("<span></span>");
          (x.textContent = m.val), w.append(x), p.append(w);
        }
        let b = d(
          `<div class="ref-order-line ref-billing-address"><b>${v(
            "billing_address"
          )}</b></div>`
        );
        for (let w of e.billing_address) {
          if (w.name == "Name") continue;
          let x = d("<span></span>");
          (x.textContent = g(w.name) + ": " + w.val), b.append(x);
        }
        p.append(b);
        let y = i.cloneNode();
        y.append(p), r.append(y);
      }
      if (a.full || a["line-items"]) {
        let p = e.discounts ? e.discounts.amount : 0,
          m = e.shipping_method ? e.shipping_method.price : 0,
          b = e.paid_gross,
          y = e.taxes ? e.taxes.amount : 0,
          w = b + p - m - y,
          x = d(
            `<div class="ref-line-items"><h2>${v(
              "order_status.order_summary"
            )}</h2></div>`
          );
        for (let [P, D] of e.products.entries()) {
          let O = d(
            '<div class="ref-order-line ref-line-item ref-product-line"><div class="ref-name"></div><div class="ref-price"><b></b><small></small></div></div>'
          );
          if (
            ((O.querySelector(".ref-name").textContent = D.nameLine),
            (O.querySelector(".ref-price b").textContent = D.priceFormatted),
            (O.querySelector(".ref-price small").textContent = D.unitPriceLine),
            x.append(O),
            D.personalization && D.personalization.length)
          ) {
            x.append(d(`<b>${v("order_status.product_personalizations")}</b>`));
            for (let j of D.personalization) {
              let G = d(
                '<div class="ref-order-line ref-line-item ref-personalization-line"><div class="ref-name"></div><div class="ref-price"><small></small></div></div>'
              );
              if (
                ((G.querySelector(".ref-name").textContent = j.name),
                j.inputText)
              ) {
                G.querySelector(".ref-name").textContent = j.name + ": ";
                let K = d("<small></small>");
                (K.textContent = '"' + j.inputText + '"'),
                  G.querySelector(".ref-name").append(K);
              }
              (G.querySelector(".ref-price small").textContent = j.priceLine),
                x.append(G);
            }
          }
          P < e.products.length - 1 &&
            x.append(
              d(
                '<div class="ref-tiny-separator">\u2219\u2219\u2219\u2219\u2219</div>'
              )
            );
        }
        let E = d(
          `<div class="ref-order-line ref-line-item">${v(
            "subtotal"
          )} <span class="ref-price"></span></div>`
        );
        if (
          ((E.querySelector(".ref-price").textContent = this.formatMoney(w)),
          x.append(d("<hr>")),
          x.append(E),
          m)
        ) {
          let P = d(
            `<div class="ref-order-line ref-line-item">${v(
              "shipping"
            )} <span class="ref-price"></span></div>`
          );
          (P.querySelector(".ref-price").textContent = this.formatMoney(m)),
            x.append(P);
        }
        if (p) {
          let P = d(
            '<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>'
          );
          (P.querySelector(".ref-name").textContent =
            e.discounts.coupon.name || e.discounts.coupon.code.toUpperCase()),
            (P.querySelector(".ref-price").textContent =
              "-" + this.formatMoney(p)),
            x.append(P);
        }
        if ((f = e.taxes) == null ? void 0 : f.amount) {
          let P = e.taxes.details,
            D = P.taxRate,
            O = d(
              '<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>'
            );
          (O.querySelector(".ref-name").textContent =
            D.name +
            " (" +
            D.rate +
            "%)" +
            (P.exemption ? " \u2013 " + P.exemption : "")),
            (O.querySelector(".ref-price").textContent = this.formatMoney(y)),
            x.append(O);
        }
        let A = d(
          `<div class="ref-order-line ref-line-item">${v(
            "total"
          )} <b><span class="ref-price"></span></b></div>`
        );
        (A.querySelector(".ref-price").textContent = this.formatMoney(b)),
          x.append(d("<hr>")),
          x.append(A);
        let B = i.cloneNode();
        B.append(x), r.append(B);
      }
      (this.node.innerHTML = ""), this.node.append(r);
    }
  };
  C(et, "type", "order-status");
  var vr = et;
  var gi = "en-US",
    bi = "Shopping Cart",
    xi = "Cart",
    _i = "Product",
    wi = "Price",
    Ci = "Quantity",
    Si = "Payment",
    Ei = "Name",
    Ti = "Email",
    Li = "Phone",
    Pi = "Delivery",
    ki = "Shipping",
    Ai = "Address",
    Ii = "City",
    Hi = "Country",
    Mi = "State",
    Bi = "Postal Code",
    Ri = "Shipping Method",
    Ni = "Shipping Address",
    Di = "Pickup at Store",
    Oi = "Store",
    qi = "Working Hours",
    Ui = "Billing",
    Fi = "Billing Name",
    $i = "Billing Address",
    Gi = "Note",
    Vi = "Total",
    zi = "Subtotal",
    ji = "Free",
    Qi = "Credit Card",
    Xi = "Pay on Pickup",
    Zi = "Out of Stock",
    Wi = "and",
    Ji = "Apply",
    Yi = "Remove",
    Ki = "Clear",
    ea = "Close",
    ta = "Error",
    ra = "Required",
    ia = "Checkout",
    aa = "Back to Cart",
    sa = "Update Cart",
    na = "Complete Order",
    oa = "I agree to the {terms}",
    la = "Terms & Conditions",
    da = "Privacy Policy",
    ca = "Refund Policy",
    ha = "Customer Details",
    pa = "Shipping and taxes are calculated during checkout.",
    ua = "Pick up at {store}",
    fa = "Select a Store",
    ma = "Add Billing Info",
    ya = "Deliver to Address",
    va = "Not yet selected",
    ga = "Select Country",
    ba = "Note to Seller",
    xa =
      "If you have any specific instructions you want to give to the seller, write them here.",
    _a = "Apply a Tax Exemption",
    wa = "Tax Exemption File",
    Ca = "Attach a document or photo of your tax exemption",
    Sa = "Enter your EU VAT number",
    Ea = "Tax exemption invalidated",
    Ta =
      "The provided tax exemption info could not be applied to the newly selected address.",
    La = "Enter coupon or promo code",
    Pa = "Coupon added",
    ka = "Coupon removed",
    Aa = "Order Summary",
    Ia = "Show Summary",
    Ha = "All prices are in {currency}",
    Ma =
      "{in_stock, plural, =0 {0 items left in stock} other {Only # left in stock.}}",
    Ba = "Maximum of {max_quantity} per customer",
    Ra = "Unable to load shopping cart.",
    Na = "Your shopping cart is empty.",
    Da = "Couldn't complete checkout.",
    Oa = "VAT number is invalid or can't be used in cross-border transactions.",
    qa = "VAT could't be validated.",
    Ua = "Product delivery is not available. Please contact us.",
    Fa = "The store is unable to ship your order to this address.",
    $a = "The code you entered is not valid.",
    Ga = "Coupon cannot be applied to any of the products in the cart.",
    Va = "Coupon requires a minimum order amount of {amount}.",
    za = "Coupon has expired.",
    ja = "One or more products are out of stock.",
    Qa =
      "Only {available} {product} available in the store. There {in_cart, plural, =1 {is} other {are}} {in_cart} in your cart.",
    Xa =
      "Invalid coupon in cart. Please remove the coupon to continue with checkout.",
    Za = "The products cannot be shipped to the provided address.",
    Wa = "The minimum product value for placing an order is {min_val}.",
    Ja =
      "The minimum purchase amount for {product} is at least {min_qty}. There {in_cart, plural, =1 {is} other {are}} {in_cart} in your cart.",
    Ya =
      "A maximum of {max_qty} {product} can be purchased per customer. {in_cart, plural, =0 {} =1 {There is 1 already in your cart.} other {There are # already in your cart.}}",
    Ka = "{numberItems} left in stock",
    es = "This product doesn't exist.",
    ts = "Product is out of stock.",
    rs = "Not enough items in stock.",
    is = "No products found",
    as = "Search",
    ss = "Search Products",
    ns = "Add to Cart",
    os = "Product added to cart.",
    ls = "Couldn't add product to cart",
    ds = "See Cart",
    cs = "Minimum Per Order is {quantity}",
    hs = "Order #{orderId}",
    ps = "Status",
    us = "Created",
    fs = "Order Summary",
    ms = "Personalizations",
    ys = "Customer Details",
    vs = "processed",
    gs = "pending",
    bs = "shipped",
    xs = "received",
    _s = "refunded",
    ws = "payment failed",
    Cs = "Please check your email for order confirmation.",
    Ss = "The store is temporarily unavailable.",
    gr = {
      locale: gi,
      shopping_cart: bi,
      cart: xi,
      product: _i,
      price: wi,
      quantity: Ci,
      payment: Si,
      name: Ei,
      email: Ti,
      phone: Li,
      delivery: Pi,
      shipping: ki,
      address: Ai,
      city: Ii,
      country: Hi,
      state: Mi,
      postcode: Bi,
      shipping_method: Ri,
      shipping_address: Ni,
      pickup_at_store: Di,
      store: Oi,
      working_hours: qi,
      billing: Ui,
      billing_name: Fi,
      billing_address: $i,
      note_to_seller: Gi,
      total: Vi,
      subtotal: zi,
      price_free: ji,
      credit_card: Qi,
      pay_on_pickup: Xi,
      out_of_stock: Zi,
      and: Wi,
      apply: Ji,
      remove: Yi,
      clear: Ki,
      close: ea,
      error: ta,
      required: ra,
      "cart.checkout": ia,
      "cart.back_to_cart": aa,
      "cart.update": sa,
      "cart.complete_order": na,
      "cart.terms_agree": oa,
      "cart.terms_of_service": la,
      "cart.privacy_policy": da,
      "cart.refund_policy": ca,
      "cart.customer_details": ha,
      "cart.subtotal_only": pa,
      "cart.pickup_at_store": ua,
      "cart.select_store": fa,
      "cart.add_billing": ma,
      "cart.deliver_to_address": ya,
      "cart.shipping_not_selected": va,
      "cart.select_country": ga,
      "cart.note_to_seller": ba,
      "cart.note_to_seller_placeholder": xa,
      "cart.tax_exemption_add": _a,
      "cart.tax_exemption_file": wa,
      "cart.tax_exemption_file_prompt": Ca,
      "cart.tax_exemption_number_prompt": Sa,
      "cart.tax_exemption_cleared": Ea,
      "cart.tax_exemption_cleared_details": Ta,
      "cart.coupon_placeholder": La,
      "cart.coupon_added": Pa,
      "cart.coupon_removed": ka,
      "cart.order_summary": Aa,
      "cart.show_summary": Ia,
      "cart.prices_currency_description": Ha,
      "cart.left_in_stock": Ma,
      "cart.max_product_qty": Ba,
      "cart.errors.unavailable": Ra,
      "cart.errors.empty": Na,
      "cart.errors.cannot_complete": Da,
      "cart.errors.vat_number_invalid": Oa,
      "cart.errors.vat_number_validation_fail": qa,
      "cart.errors.delivery_unavailable": Ua,
      "cart.errors.address_not_supported": Fa,
      "cart.errors.coupon_invalid_code": $a,
      "cart.errors.coupon_no_matching_products": Ga,
      "cart.errors.coupon_min_amount": Va,
      "cart.errors.coupon_expired": za,
      "cart.errors.out_of_stock": ja,
      "cart.errors.unavailable_quantity": Qa,
      "cart.errors.invalid_coupon": Xa,
      "cart.errors.cannot_ship": Za,
      "cart.errors.min_val_not_reached": Wa,
      "cart.errors.product_min_qty_not_reached": Ja,
      "cart.errors.product_max_qty_exceeded": Ya,
      "product.left_in_stock": Ka,
      "product.missing": es,
      "product.out_of_stock": ts,
      "product.unavailable_quantity": rs,
      "product_list.empty": is,
      "product_search.button": as,
      "product_search.placeholder": ss,
      "add_to_cart.button_text": ns,
      "add_to_cart.success": os,
      "add_to_cart.error": ls,
      "add_to_cart.see_cart": ds,
      "add_to_cart.min_quantity_per_order": cs,
      "order_status.order": hs,
      "order_status.status": ps,
      "order_status.created": us,
      "order_status.order_summary": fs,
      "order_status.product_personalizations": ms,
      "order_status.customer_details": ys,
      "order_status.processed": vs,
      "order_status.pending": gs,
      "order_status.shipped": bs,
      "order_status.received": xs,
      "order_status.refunded": _s,
      "order_status.payment_failed": ws,
      "order_status.check_email": Cs,
      store_unavailable: Ss,
    };
  var tt = document.currentScript,
    rt = parseInt(tt.getAttribute("data-reflow-store"), 10),
    br = !!tt.getAttribute("data-reflow-dev"),
    xr = tt.getAttribute("data-reflow-locale");
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", _r)
    : _r();
  async function _r() {
    if (!(!rt && (console.error("Reflow: Invalid Store ID"), !br))) {
      if ("Reflow" in window) {
        console.error("Reflow: window.Reflow already exists");
        return;
      }
      (window.Reflow = {
        APIURL: "https://api.reflowhq.com/v1",
        storeID: rt,
        cart: new yr(),
        version: "1.0.0",
        scan: Cr,
        api: I,
        locales: gr,
      }),
        xr &&
          (await fetch(xr)
            .then((t) => t.json())
            .then((t) => sr(t))
            .then((t) => Object.assign(window.Reflow.locales, t))
            .catch((t) =>
              console.error("Reflow: unable to load localization file")
            )),
        setTimeout(() => {
          document.dispatchEvent(
            new Event("reflow-ready", { cancelable: !0 })
          ) && Cr(br);
        }, 0);
    }
  }
  var wr = new WeakSet();
  function Cr(t = !1) {
    let e = [];
    e.push(...Ee.scan()),
      e.push(...cr.scan()),
      e.push(...hr.scan()),
      e.push(...pr.scan()),
      e.push(...nr.scan()),
      e.push(...Se.scan()),
      e.push(...vr.scan()),
      e.push(...ur.scan()),
      e.length > 10 &&
        console.warn(
          "Reflow: Only the first 10 components on this page will be rendered, the rest will be ignored."
        ),
      (e = e.slice(0, 10));
    for (let r of e)
      if (!wr.has(r.node)) {
        if ((wr.add(r.node), r.init(), t && !rt)) {
          r.node.innerHTML = "No Reflow Store ID provided.";
          continue;
        }
        r.update().catch((i) => console.error("Reflow:", i));
      }
  }
})();
