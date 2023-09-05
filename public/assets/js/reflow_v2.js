(() => {
  var jr = Object.create;
  var he = Object.defineProperty;
  var Qr = Object.getOwnPropertyDescriptor;
  var Wr = Object.getOwnPropertyNames,
    xt = Object.getOwnPropertySymbols,
    Xr = Object.getPrototypeOf,
    _t = Object.prototype.hasOwnProperty,
    Zr = Object.prototype.propertyIsEnumerable;
  var Be = (t, e, r) =>
      e in t
        ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[e] = r),
    wt = (t, e) => {
      for (var r in e || (e = {})) _t.call(e, r) && Be(t, r, e[r]);
      if (xt) for (var r of xt(e)) Zr.call(e, r) && Be(t, r, e[r]);
      return t;
    };
  var Jr = (t) => he(t, "__esModule", { value: !0 });
  var Yr = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  var Kr = (t, e, r) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let i of Wr(e))
          !_t.call(t, i) &&
            i !== "default" &&
            he(t, i, {
              get: () => e[i],
              enumerable: !(r = Qr(e, i)) || r.enumerable,
            });
      return t;
    },
    ei = (t) =>
      Kr(
        Jr(
          he(
            t != null ? jr(Xr(t)) : {},
            "default",
            t && t.__esModule && "default" in t
              ? { get: () => t.default, enumerable: !0 }
              : { value: t, enumerable: !0 }
          )
        ),
        t
      );
  var w = (t, e, r) => (Be(t, typeof e != "symbol" ? e + "" : e, r), r);
  var jt = Yr((Vn, fe) => {
    var Et,
      Lt,
      Tt,
      Pt,
      kt,
      At,
      It,
      Rt,
      Mt,
      ue,
      Ne,
      Bt,
      Ht,
      Dt,
      te,
      qt,
      Ot,
      Nt,
      Ut,
      $t,
      Ft,
      Gt,
      zt,
      Vt,
      pe;
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
        : typeof fe == "object" && typeof fe.exports == "object"
        ? t(r(e, r(fe.exports)))
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
      (Et = function (i, a) {
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
        (Lt =
          Object.assign ||
          function (i) {
            for (var a, s = 1, n = arguments.length; s < n; s++) {
              a = arguments[s];
              for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o]);
            }
            return i;
          }),
        (Tt = function (i, a) {
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
        (Pt = function (i, a, s, n) {
          var o = arguments.length,
            l =
              o < 3
                ? a
                : n === null
                ? (n = Object.getOwnPropertyDescriptor(a, s))
                : n,
            h;
          if (
            typeof Reflect == "object" &&
            typeof Reflect.decorate == "function"
          )
            l = Reflect.decorate(i, a, s, n);
          else
            for (var d = i.length - 1; d >= 0; d--)
              (h = i[d]) &&
                (l = (o < 3 ? h(l) : o > 3 ? h(a, s, l) : h(a, s)) || l);
          return o > 3 && l && Object.defineProperty(a, s, l), l;
        }),
        (kt = function (i, a) {
          return function (s, n) {
            a(s, n, i);
          };
        }),
        (At = function (i, a) {
          if (
            typeof Reflect == "object" &&
            typeof Reflect.metadata == "function"
          )
            return Reflect.metadata(i, a);
        }),
        (It = function (i, a, s, n) {
          function o(l) {
            return l instanceof s
              ? l
              : new s(function (h) {
                  h(l);
                });
          }
          return new (s || (s = Promise))(function (l, h) {
            function d(m) {
              try {
                u(n.next(m));
              } catch (v) {
                h(v);
              }
            }
            function p(m) {
              try {
                u(n.throw(m));
              } catch (v) {
                h(v);
              }
            }
            function u(m) {
              m.done ? l(m.value) : o(m.value).then(d, p);
            }
            u((n = n.apply(i, a || [])).next());
          });
        }),
        (Rt = function (i, a) {
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
            h;
          return (
            (h = { next: d(0), throw: d(1), return: d(2) }),
            typeof Symbol == "function" &&
              (h[Symbol.iterator] = function () {
                return this;
              }),
            h
          );
          function d(u) {
            return function (m) {
              return p([u, m]);
            };
          }
          function p(u) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((n = 1),
                  o &&
                    (l =
                      u[0] & 2
                        ? o.return
                        : u[0]
                        ? o.throw || ((l = o.return) && l.call(o), 0)
                        : o.next) &&
                    !(l = l.call(o, u[1])).done)
                )
                  return l;
                switch (((o = 0), l && (u = [u[0] & 2, l.value]), u[0])) {
                  case 0:
                  case 1:
                    l = u;
                    break;
                  case 4:
                    return s.label++, { value: u[1], done: !1 };
                  case 5:
                    s.label++, (o = u[1]), (u = [0]);
                    continue;
                  case 7:
                    (u = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      ((l = s.trys),
                      !(l = l.length > 0 && l[l.length - 1]) &&
                        (u[0] === 6 || u[0] === 2))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (u[0] === 3 && (!l || (u[1] > l[0] && u[1] < l[3]))) {
                      s.label = u[1];
                      break;
                    }
                    if (u[0] === 6 && s.label < l[1]) {
                      (s.label = l[1]), (l = u);
                      break;
                    }
                    if (l && s.label < l[2]) {
                      (s.label = l[2]), s.ops.push(u);
                      break;
                    }
                    l[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                u = a.call(i, s);
              } catch (m) {
                (u = [6, m]), (o = 0);
              } finally {
                n = l = 0;
              }
            if (u[0] & 5) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          }
        }),
        (Mt = function (i, a) {
          for (var s in i)
            s !== "default" &&
              !Object.prototype.hasOwnProperty.call(a, s) &&
              pe(a, i, s);
        }),
        (pe = Object.create
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
        (ue = function (i) {
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
        (Ne = function (i, a) {
          var s = typeof Symbol == "function" && i[Symbol.iterator];
          if (!s) return i;
          var n = s.call(i),
            o,
            l = [],
            h;
          try {
            for (; (a === void 0 || a-- > 0) && !(o = n.next()).done; )
              l.push(o.value);
          } catch (d) {
            h = { error: d };
          } finally {
            try {
              o && !o.done && (s = n.return) && s.call(n);
            } finally {
              if (h) throw h.error;
            }
          }
          return l;
        }),
        (Bt = function () {
          for (var i = [], a = 0; a < arguments.length; a++)
            i = i.concat(Ne(arguments[a]));
          return i;
        }),
        (Ht = function () {
          for (var i = 0, a = 0, s = arguments.length; a < s; a++)
            i += arguments[a].length;
          for (var n = Array(i), o = 0, a = 0; a < s; a++)
            for (var l = arguments[a], h = 0, d = l.length; h < d; h++, o++)
              n[o] = l[h];
          return n;
        }),
        (Dt = function (i, a, s) {
          if (s || arguments.length === 2)
            for (var n = 0, o = a.length, l; n < o; n++)
              (l || !(n in a)) &&
                (l || (l = Array.prototype.slice.call(a, 0, n)), (l[n] = a[n]));
          return i.concat(l || Array.prototype.slice.call(a));
        }),
        (te = function (i) {
          return this instanceof te ? ((this.v = i), this) : new te(i);
        }),
        (qt = function (i, a, s) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var n = s.apply(i, a || []),
            o,
            l = [];
          return (
            (o = {}),
            h("next"),
            h("throw"),
            h("return"),
            (o[Symbol.asyncIterator] = function () {
              return this;
            }),
            o
          );
          function h(b) {
            n[b] &&
              (o[b] = function (_) {
                return new Promise(function (C, S) {
                  l.push([b, _, C, S]) > 1 || d(b, _);
                });
              });
          }
          function d(b, _) {
            try {
              p(n[b](_));
            } catch (C) {
              v(l[0][3], C);
            }
          }
          function p(b) {
            b.value instanceof te
              ? Promise.resolve(b.value.v).then(u, m)
              : v(l[0][2], b);
          }
          function u(b) {
            d("next", b);
          }
          function m(b) {
            d("throw", b);
          }
          function v(b, _) {
            b(_), l.shift(), l.length && d(l[0][0], l[0][1]);
          }
        }),
        (Ot = function (i) {
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
              ? function (h) {
                  return (s = !s)
                    ? { value: te(i[o](h)), done: o === "return" }
                    : l
                    ? l(h)
                    : h;
                }
              : l;
          }
        }),
        (Nt = function (i) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var a = i[Symbol.asyncIterator],
            s;
          return a
            ? a.call(i)
            : ((i = typeof ue == "function" ? ue(i) : i[Symbol.iterator]()),
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
              function (h) {
                return new Promise(function (d, p) {
                  (h = i[l](h)), o(d, p, h.done, h.value);
                });
              };
          }
          function o(l, h, d, p) {
            Promise.resolve(p).then(function (u) {
              l({ value: u, done: d });
            }, h);
          }
        }),
        (Ut = function (i, a) {
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
      ($t = function (i) {
        if (i && i.__esModule) return i;
        var a = {};
        if (i != null)
          for (var s in i)
            s !== "default" &&
              Object.prototype.hasOwnProperty.call(i, s) &&
              pe(a, i, s);
        return r(a, i), a;
      }),
        (Ft = function (i) {
          return i && i.__esModule ? i : { default: i };
        }),
        (Gt = function (i, a, s, n) {
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
        (zt = function (i, a, s, n, o) {
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
        (Vt = function (i, a) {
          if (a === null || (typeof a != "object" && typeof a != "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof i == "function" ? a === i : i.has(a);
        }),
        t("__extends", Et),
        t("__assign", Lt),
        t("__rest", Tt),
        t("__decorate", Pt),
        t("__param", kt),
        t("__metadata", At),
        t("__awaiter", It),
        t("__generator", Rt),
        t("__exportStar", Mt),
        t("__createBinding", pe),
        t("__values", ue),
        t("__read", Ne),
        t("__spread", Bt),
        t("__spreadArrays", Ht),
        t("__spreadArray", Dt),
        t("__await", te),
        t("__asyncGenerator", qt),
        t("__asyncDelegator", Ot),
        t("__asyncValues", Nt),
        t("__makeTemplateObject", Ut),
        t("__importStar", $t),
        t("__importDefault", Ft),
        t("__classPrivateFieldGet", Gt),
        t("__classPrivateFieldSet", zt),
        t("__classPrivateFieldIn", Vt);
    });
  });
  var He = new Map();
  function ti(t, e = {}, r = !0) {
    if (typeof t != "string" || !t.trim().length)
      return Promise.reject("Reflow: Endpoint Required");
    if (((t = t.replace(/^\/+/, "")), He.has(t))) return He.get(t);
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
    return r && e.method != "POST" && He.set(t, i), i;
  }
  var E = ti;
  var De = class {
    constructor(e, r = {}) {
      w(this, "mockData", null);
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
    renderTestModeBadge(e, r) {
      if (!Reflow.testmode) return;
      let i =
        this.node.querySelector(".ref-test-mode-badge") ||
        document.createElement("div");
      i.remove(),
        (i.innerText = "Test Mode"),
        (i.title = `Test Mode is enabled. The Reflow data displayed on the page is from your store's Test mode. 
To view Live data, disable the reflow.js "data-testmode" attribute.`),
        i.classList.add("ref-test-mode-badge"),
        r == "append" ? e.append(i) : e.prepend(i);
    }
    getAPIEndpoint() {
      return "";
    }
    async fetchData() {
      if (this.mockData) return this.mockData;
      let e = this.getAPIEndpoint(),
        r = await E(e);
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
  w(De, "type", "");
  var A = De;
  function ri(t) {
    let e = document.createElement("div");
    return (e.innerHTML = t.trim()), e.firstElementChild;
  }
  var Ct = ri;
  function ii(t, e = null) {
    return (
      (e = e || document), t.trim()[0] == "<" ? Ct(t) : e.querySelectorAll(t)
    );
  }
  var c = ii;
  var Oe = class extends A {
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
            ((this.button = c('<a class="ref-button"></a>')),
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
        Oe.scan().forEach((r) => r.node.remove()),
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
    qe = Oe;
  w(qe, "type", "toast");
  var D = qe;
  var St = class extends A {
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
            ((r = Math.min(r, 99999)),
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
          c(".ref-increase", this.node)[0].classList.remove("inactive"),
          e >= this.getMaxQuantity() &&
            c(".ref-increase", this.node)[0].classList.add("inactive");
      }
      getMaxQuantity() {
        return parseInt(this.node.dataset.reflowMaxQty, 10) || 999;
      }
      setMaxQuantity(e = 999) {
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
    ee = St;
  var Qt = ei(jt()),
    {
      __extends: ae,
      __assign: k,
      __rest: jn,
      __decorate: Qn,
      __param: Wn,
      __metadata: Xn,
      __awaiter: Zn,
      __generator: Jn,
      __exportStar: Yn,
      __createBinding: Kn,
      __values: eo,
      __read: to,
      __spread: ro,
      __spreadArrays: io,
      __spreadArray: me,
      __await: ao,
      __asyncGenerator: so,
      __asyncDelegator: no,
      __asyncValues: oo,
      __makeTemplateObject: lo,
      __importStar: co,
      __importDefault: ho,
      __classPrivateFieldGet: uo,
      __classPrivateFieldSet: po,
      __classPrivateFieldIn: fo,
    } = Qt.default;
  var L;
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
  })(L || (L = {}));
  var R;
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
  })(R || (R = {}));
  var X;
  (function (t) {
    (t[(t.number = 0)] = "number"), (t[(t.dateTime = 1)] = "dateTime");
  })(X || (X = {}));
  function Ue(t) {
    return t.type === R.literal;
  }
  function Wt(t) {
    return t.type === R.argument;
  }
  function ge(t) {
    return t.type === R.number;
  }
  function ye(t) {
    return t.type === R.date;
  }
  function ve(t) {
    return t.type === R.time;
  }
  function be(t) {
    return t.type === R.select;
  }
  function xe(t) {
    return t.type === R.plural;
  }
  function Xt(t) {
    return t.type === R.pound;
  }
  function _e(t) {
    return t.type === R.tag;
  }
  function we(t) {
    return !!(t && typeof t == "object" && t.type === X.number);
  }
  function se(t) {
    return !!(t && typeof t == "object" && t.type === X.dateTime);
  }
  var $e = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  var ai =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  function Zt(t) {
    var e = {};
    return (
      t.replace(ai, function (r) {
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
  var Jt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  function Yt(t) {
    if (t.length === 0) throw new Error("Number skeleton cannot be empty");
    for (
      var e = t.split(Jt).filter(function (u) {
          return u.length > 0;
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
      for (var o = n[0], l = n.slice(1), h = 0, d = l; h < d.length; h++) {
        var p = d[h];
        if (p.length === 0) throw new Error("Invalid number skeleton");
      }
      r.push({ stem: o, options: l });
    }
    return r;
  }
  function si(t) {
    return t.replace(/^(.*?)-/, "");
  }
  var Kt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    er = /^(@+)?(\+|#+)?[rs]?$/g,
    ni = /(\*)(0+)|(#+)(0+)|(0+)/g,
    tr = /^(0+)$/;
  function rr(t) {
    var e = {};
    return (
      t[t.length - 1] === "r"
        ? (e.roundingPriority = "morePrecision")
        : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"),
      t.replace(er, function (r, i, a) {
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
  function ir(t) {
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
  function oi(t) {
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
        !tr.test(t))
      )
        throw new Error("Malformed concise eng/scientific notation");
      e.minimumIntegerDigits = t.length;
    }
    return e;
  }
  function ar(t) {
    var e = {},
      r = ir(t);
    return r || e;
  }
  function sr(t) {
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
          (e.style = "unit"), (e.unit = si(a.options[0]));
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
          e = k(
            k(k({}, e), { notation: "scientific" }),
            a.options.reduce(function (l, h) {
              return k(k({}, l), ar(h));
            }, {})
          );
          continue;
        case "engineering":
          e = k(
            k(k({}, e), { notation: "engineering" }),
            a.options.reduce(function (l, h) {
              return k(k({}, l), ar(h));
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
          a.options[0].replace(ni, function (l, h, d, p, u, m) {
            if (h) e.minimumIntegerDigits = d.length;
            else {
              if (p && u)
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
      if (tr.test(a.stem)) {
        e.minimumIntegerDigits = a.stem.length;
        continue;
      }
      if (Kt.test(a.stem)) {
        if (a.options.length > 1)
          throw new RangeError(
            "Fraction-precision stems only accept a single optional option"
          );
        a.stem.replace(Kt, function (l, h, d, p, u, m) {
          return (
            d === "*"
              ? (e.minimumFractionDigits = h.length)
              : p && p[0] === "#"
              ? (e.maximumFractionDigits = p.length)
              : u && m
              ? ((e.minimumFractionDigits = u.length),
                (e.maximumFractionDigits = u.length + m.length))
              : ((e.minimumFractionDigits = h.length),
                (e.maximumFractionDigits = h.length)),
            ""
          );
        });
        var s = a.options[0];
        s === "w"
          ? (e = k(k({}, e), { trailingZeroDisplay: "stripIfInteger" }))
          : s && (e = k(k({}, e), rr(s)));
        continue;
      }
      if (er.test(a.stem)) {
        e = k(k({}, e), rr(a.stem));
        continue;
      }
      var n = ir(a.stem);
      n && (e = k(k({}, e), n));
      var o = oi(a.stem);
      o && (e = k(k({}, e), o));
    }
    return e;
  }
  var ne = {
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
  function nr(t, e) {
    for (var r = "", i = 0; i < t.length; i++) {
      var a = t.charAt(i);
      if (a === "j") {
        for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === a; ) s++, i++;
        var n = 1 + (s & 1),
          o = s < 2 ? 1 : 3 + (s >> 1),
          l = "a",
          h = li(e);
        for ((h == "H" || h == "k") && (o = 0); o-- > 0; ) r += l;
        for (; n-- > 0; ) r = h + r;
      } else a === "J" ? (r += "H") : (r += a);
    }
    return r;
  }
  function li(t) {
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
    var a = ne[i || ""] || ne[r || ""] || ne["".concat(r, "-001")] || ne["001"];
    return a[0];
  }
  var Fe,
    di = new RegExp("^".concat($e.source, "*")),
    ci = new RegExp("".concat($e.source, "*$"));
  function T(t, e) {
    return { start: t, end: e };
  }
  var hi = !!String.prototype.startsWith,
    ui = !!String.fromCodePoint,
    pi = !!Object.fromEntries,
    fi = !!String.prototype.codePointAt,
    mi = !!String.prototype.trimStart,
    gi = !!String.prototype.trimEnd,
    yi = !!Number.isSafeInteger,
    vi = yi
      ? Number.isSafeInteger
      : function (t) {
          return (
            typeof t == "number" &&
            isFinite(t) &&
            Math.floor(t) === t &&
            Math.abs(t) <= 9007199254740991
          );
        },
    Ge = !0;
  try {
    (or = hr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")),
      (Ge =
        ((Fe = or.exec("a")) === null || Fe === void 0 ? void 0 : Fe[0]) ===
        "a");
  } catch (t) {
    Ge = !1;
  }
  var or,
    lr = hi
      ? function (e, r, i) {
          return e.startsWith(r, i);
        }
      : function (e, r, i) {
          return e.slice(i, i + r.length) === r;
        },
    ze = ui
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
    dr = pi
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
    cr = fi
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
    bi = mi
      ? function (e) {
          return e.trimStart();
        }
      : function (e) {
          return e.replace(di, "");
        },
    xi = gi
      ? function (e) {
          return e.trimEnd();
        }
      : function (e) {
          return e.replace(ci, "");
        };
  function hr(t, e) {
    return new RegExp(t, e);
  }
  var Ve;
  Ge
    ? ((je = hr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")),
      (Ve = function (e, r) {
        var i;
        je.lastIndex = r;
        var a = je.exec(e);
        return (i = a[1]) !== null && i !== void 0 ? i : "";
      }))
    : (Ve = function (e, r) {
        for (var i = []; ; ) {
          var a = cr(e, r);
          if (a === void 0 || pr(a) || Ci(a)) break;
          i.push(a), (r += a >= 65536 ? 2 : 1);
        }
        return ze.apply(void 0, i);
      });
  var je,
    ur = (function () {
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
                    type: R.pound,
                    location: T(o, this.clonePosition()),
                  });
              } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
                if (i) break;
                return this.error(
                  L.UNMATCHED_CLOSING_TAG,
                  T(this.clonePosition(), this.clonePosition())
                );
              } else if (s === 60 && !this.ignoreTag && Qe(this.peek() || 0)) {
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
                type: R.literal,
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
              if (this.isEOF() || !Qe(this.char()))
                return this.error(L.INVALID_TAG, T(o, this.clonePosition()));
              var l = this.clonePosition(),
                h = this.parseTagName();
              return a !== h
                ? this.error(
                    L.UNMATCHED_CLOSING_TAG,
                    T(l, this.clonePosition())
                  )
                : (this.bumpSpace(),
                  this.bumpIf(">")
                    ? {
                        val: {
                          type: R.tag,
                          value: a,
                          children: n,
                          location: T(i, this.clonePosition()),
                        },
                        err: null,
                      }
                    : this.error(L.INVALID_TAG, T(o, this.clonePosition())));
            } else
              return this.error(L.UNCLOSED_TAG, T(i, this.clonePosition()));
          } else return this.error(L.INVALID_TAG, T(i, this.clonePosition()));
        }),
        (t.prototype.parseTagName = function () {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && wi(this.char()); ) this.bump();
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
          return { val: { type: R.literal, value: a, location: l }, err: null };
        }),
        (t.prototype.tryParseLeftAngleBracket = function () {
          return !this.isEOF() &&
            this.char() === 60 &&
            (this.ignoreTag || !_i(this.peek() || 0))
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
          return ze.apply(void 0, r);
        }),
        (t.prototype.tryParseUnquoted = function (e, r) {
          if (this.isEOF()) return null;
          var i = this.char();
          return i === 60 ||
            i === 123 ||
            (i === 35 && (r === "plural" || r === "selectordinal")) ||
            (i === 125 && e > 0)
            ? null
            : (this.bump(), ze(i));
        }),
        (t.prototype.parseArgument = function (e, r) {
          var i = this.clonePosition();
          if ((this.bump(), this.bumpSpace(), this.isEOF()))
            return this.error(
              L.EXPECT_ARGUMENT_CLOSING_BRACE,
              T(i, this.clonePosition())
            );
          if (this.char() === 125)
            return (
              this.bump(),
              this.error(L.EMPTY_ARGUMENT, T(i, this.clonePosition()))
            );
          var a = this.parseIdentifierIfPossible().value;
          if (!a)
            return this.error(L.MALFORMED_ARGUMENT, T(i, this.clonePosition()));
          if ((this.bumpSpace(), this.isEOF()))
            return this.error(
              L.EXPECT_ARGUMENT_CLOSING_BRACE,
              T(i, this.clonePosition())
            );
          switch (this.char()) {
            case 125:
              return (
                this.bump(),
                {
                  val: {
                    type: R.argument,
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
                      L.EXPECT_ARGUMENT_CLOSING_BRACE,
                      T(i, this.clonePosition())
                    )
                  : this.parseArgumentOptions(e, r, a, i)
              );
            default:
              return this.error(
                L.MALFORMED_ARGUMENT,
                T(i, this.clonePosition())
              );
          }
        }),
        (t.prototype.parseIdentifierIfPossible = function () {
          var e = this.clonePosition(),
            r = this.offset(),
            i = Ve(this.message, r),
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
              return this.error(L.EXPECT_ARGUMENT_TYPE, T(n, l));
            case "number":
            case "date":
            case "time": {
              this.bumpSpace();
              var h = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var d = this.clonePosition(),
                  p = this.parseSimpleArgStyleIfPossible();
                if (p.err) return p;
                var u = xi(p.val);
                if (u.length === 0)
                  return this.error(
                    L.EXPECT_ARGUMENT_STYLE,
                    T(this.clonePosition(), this.clonePosition())
                  );
                var m = T(d, this.clonePosition());
                h = { style: u, styleLocation: m };
              }
              var v = this.tryParseArgumentClose(a);
              if (v.err) return v;
              var b = T(a, this.clonePosition());
              if (h && lr(h == null ? void 0 : h.style, "::", 0)) {
                var _ = bi(h.style.slice(2));
                if (o === "number") {
                  var p = this.parseNumberSkeletonFromString(
                    _,
                    h.styleLocation
                  );
                  return p.err
                    ? p
                    : {
                        val: {
                          type: R.number,
                          value: i,
                          location: b,
                          style: p.val,
                        },
                        err: null,
                      };
                } else {
                  if (_.length === 0)
                    return this.error(L.EXPECT_DATE_TIME_SKELETON, b);
                  var C = _;
                  this.locale && (C = nr(_, this.locale));
                  var u = {
                      type: X.dateTime,
                      pattern: C,
                      location: h.styleLocation,
                      parsedOptions: this.shouldParseSkeletons ? Zt(C) : {},
                    },
                    S = o === "date" ? R.date : R.time;
                  return {
                    val: { type: S, value: i, location: b, style: u },
                    err: null,
                  };
                }
              }
              return {
                val: {
                  type:
                    o === "number" ? R.number : o === "date" ? R.date : R.time,
                  value: i,
                  location: b,
                  style:
                    (s = h == null ? void 0 : h.style) !== null && s !== void 0
                      ? s
                      : null,
                },
                err: null,
              };
            }
            case "plural":
            case "selectordinal":
            case "select": {
              var B = this.clonePosition();
              if ((this.bumpSpace(), !this.bumpIf(",")))
                return this.error(
                  L.EXPECT_SELECT_ARGUMENT_OPTIONS,
                  T(B, k({}, B))
                );
              this.bumpSpace();
              var U = this.parseIdentifierIfPossible(),
                $ = 0;
              if (o !== "select" && U.value === "offset") {
                if (!this.bumpIf(":"))
                  return this.error(
                    L.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    T(this.clonePosition(), this.clonePosition())
                  );
                this.bumpSpace();
                var p = this.tryParseDecimalInteger(
                  L.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                  L.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                );
                if (p.err) return p;
                this.bumpSpace(),
                  (U = this.parseIdentifierIfPossible()),
                  ($ = p.val);
              }
              var I = this.tryParsePluralOrSelectOptions(e, o, r, U);
              if (I.err) return I;
              var v = this.tryParseArgumentClose(a);
              if (v.err) return v;
              var M = T(a, this.clonePosition());
              return o === "select"
                ? {
                    val: {
                      type: R.select,
                      value: i,
                      options: dr(I.val),
                      location: M,
                    },
                    err: null,
                  }
                : {
                    val: {
                      type: R.plural,
                      value: i,
                      options: dr(I.val),
                      offset: $,
                      pluralType: o === "plural" ? "cardinal" : "ordinal",
                      location: M,
                    },
                    err: null,
                  };
            }
            default:
              return this.error(L.INVALID_ARGUMENT_TYPE, T(n, l));
          }
        }),
        (t.prototype.tryParseArgumentClose = function (e) {
          return this.isEOF() || this.char() !== 125
            ? this.error(
                L.EXPECT_ARGUMENT_CLOSING_BRACE,
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
                    L.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
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
            i = Yt(e);
          } catch (a) {
            return this.error(L.INVALID_NUMBER_SKELETON, r);
          }
          return {
            val: {
              type: X.number,
              tokens: i,
              location: r,
              parsedOptions: this.shouldParseSkeletons ? sr(i) : {},
            },
            err: null,
          };
        }),
        (t.prototype.tryParsePluralOrSelectOptions = function (e, r, i, a) {
          for (
            var s, n = !1, o = [], l = new Set(), h = a.value, d = a.location;
            ;

          ) {
            if (h.length === 0) {
              var p = this.clonePosition();
              if (r !== "select" && this.bumpIf("=")) {
                var u = this.tryParseDecimalInteger(
                  L.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  L.INVALID_PLURAL_ARGUMENT_SELECTOR
                );
                if (u.err) return u;
                (d = T(p, this.clonePosition())),
                  (h = this.message.slice(p.offset, this.offset()));
              } else break;
            }
            if (l.has(h))
              return this.error(
                r === "select"
                  ? L.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                  : L.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                d
              );
            h === "other" && (n = !0), this.bumpSpace();
            var m = this.clonePosition();
            if (!this.bumpIf("{"))
              return this.error(
                r === "select"
                  ? L.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                  : L.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                T(this.clonePosition(), this.clonePosition())
              );
            var v = this.parseMessage(e + 1, r, i);
            if (v.err) return v;
            var b = this.tryParseArgumentClose(m);
            if (b.err) return b;
            o.push([h, { value: v.val, location: T(m, this.clonePosition()) }]),
              l.add(h),
              this.bumpSpace(),
              (s = this.parseIdentifierIfPossible()),
              (h = s.value),
              (d = s.location);
          }
          return o.length === 0
            ? this.error(
                r === "select"
                  ? L.EXPECT_SELECT_ARGUMENT_SELECTOR
                  : L.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                T(this.clonePosition(), this.clonePosition())
              )
            : this.requiresOtherClause && !n
            ? this.error(
                L.MISSING_OTHER_CLAUSE,
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
            ? ((n *= i), vi(n) ? { val: n, err: null } : this.error(r, l))
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
          var r = cr(this.message, e);
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
          if (lr(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && pr(this.char()); ) this.bump();
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
  function Qe(t) {
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
  }
  function _i(t) {
    return Qe(t) || t === 47;
  }
  function wi(t) {
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
  function pr(t) {
    return (
      (t >= 9 && t <= 13) ||
      t === 32 ||
      t === 133 ||
      (t >= 8206 && t <= 8207) ||
      t === 8232 ||
      t === 8233
    );
  }
  function Ci(t) {
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
  function We(t) {
    t.forEach(function (e) {
      if ((delete e.location, be(e) || xe(e)))
        for (var r in e.options)
          delete e.options[r].location, We(e.options[r].value);
      else
        (ge(e) && we(e.style)) || ((ye(e) || ve(e)) && se(e.style))
          ? delete e.style.location
          : _e(e) && We(e.children);
    });
  }
  function Z(t, e) {
    e === void 0 && (e = {}),
      (e = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e));
    var r = new ur(t, e).parse();
    if (r.err) {
      var i = SyntaxError(L[r.err.kind]);
      throw (
        ((i.location = r.err.location), (i.originalMessage = r.err.message), i)
      );
    }
    return (e == null ? void 0 : e.captureLocation) || We(r.val), r.val;
  }
  function oe(t, e) {
    var r = e && e.cache ? e.cache : ki,
      i = e && e.serializer ? e.serializer : Pi,
      a = e && e.strategy ? e.strategy : Ei;
    return a(t, { cache: r, serializer: i });
  }
  function Si(t) {
    return t == null || typeof t == "number" || typeof t == "boolean";
  }
  function fr(t, e, r, i) {
    var a = Si(i) ? i : r(i),
      s = e.get(a);
    return typeof s == "undefined" && ((s = t.call(this, i)), e.set(a, s)), s;
  }
  function mr(t, e, r) {
    var i = Array.prototype.slice.call(arguments, 3),
      a = r(i),
      s = e.get(a);
    return typeof s == "undefined" && ((s = t.apply(this, i)), e.set(a, s)), s;
  }
  function Xe(t, e, r, i, a) {
    return r.bind(e, t, i, a);
  }
  function Ei(t, e) {
    var r = t.length === 1 ? fr : mr;
    return Xe(t, this, r, e.cache.create(), e.serializer);
  }
  function Li(t, e) {
    return Xe(t, this, mr, e.cache.create(), e.serializer);
  }
  function Ti(t, e) {
    return Xe(t, this, fr, e.cache.create(), e.serializer);
  }
  var Pi = function () {
    return JSON.stringify(arguments);
  };
  function Ze() {
    this.cache = Object.create(null);
  }
  Ze.prototype.get = function (t) {
    return this.cache[t];
  };
  Ze.prototype.set = function (t, e) {
    this.cache[t] = e;
  };
  var ki = {
      create: function () {
        return new Ze();
      },
    },
    Ce = { variadic: Li, monadic: Ti };
  var J;
  (function (t) {
    (t.MISSING_VALUE = "MISSING_VALUE"),
      (t.INVALID_VALUE = "INVALID_VALUE"),
      (t.MISSING_INTL_API = "MISSING_INTL_API");
  })(J || (J = {}));
  var le = (function (t) {
    ae(e, t);
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
  var Je = (function (t) {
    ae(e, t);
    function e(r, i, a, s) {
      return (
        t.call(
          this,
          'Invalid values for "'
            .concat(r, '": "')
            .concat(i, '". Options are "')
            .concat(Object.keys(a).join('", "'), '"'),
          J.INVALID_VALUE,
          s
        ) || this
      );
    }
    return e;
  })(le);
  var gr = (function (t) {
    ae(e, t);
    function e(r, i, a) {
      return (
        t.call(
          this,
          'Value for "'.concat(r, '" must be of type ').concat(i),
          J.INVALID_VALUE,
          a
        ) || this
      );
    }
    return e;
  })(le);
  var yr = (function (t) {
    ae(e, t);
    function e(r, i) {
      return (
        t.call(
          this,
          'The intl string context variable "'
            .concat(r, '" was not provided to the string "')
            .concat(i, '"'),
          J.MISSING_VALUE,
          i
        ) || this
      );
    }
    return e;
  })(le);
  var O;
  (function (t) {
    (t[(t.literal = 0)] = "literal"), (t[(t.object = 1)] = "object");
  })(O || (O = {}));
  function Ai(t) {
    return t.length < 2
      ? t
      : t.reduce(function (e, r) {
          var i = e[e.length - 1];
          return (
            !i || i.type !== O.literal || r.type !== O.literal
              ? e.push(r)
              : (i.value += r.value),
            e
          );
        }, []);
  }
  function Ii(t) {
    return typeof t == "function";
  }
  function de(t, e, r, i, a, s, n) {
    if (t.length === 1 && Ue(t[0]))
      return [{ type: O.literal, value: t[0].value }];
    for (var o = [], l = 0, h = t; l < h.length; l++) {
      var d = h[l];
      if (Ue(d)) {
        o.push({ type: O.literal, value: d.value });
        continue;
      }
      if (Xt(d)) {
        typeof s == "number" &&
          o.push({ type: O.literal, value: r.getNumberFormat(e).format(s) });
        continue;
      }
      var p = d.value;
      if (!(a && p in a)) throw new yr(p, n);
      var u = a[p];
      if (Wt(d)) {
        (!u || typeof u == "string" || typeof u == "number") &&
          (u = typeof u == "string" || typeof u == "number" ? String(u) : ""),
          o.push({
            type: typeof u == "string" ? O.literal : O.object,
            value: u,
          });
        continue;
      }
      if (ye(d)) {
        var m =
          typeof d.style == "string"
            ? i.date[d.style]
            : se(d.style)
            ? d.style.parsedOptions
            : void 0;
        o.push({ type: O.literal, value: r.getDateTimeFormat(e, m).format(u) });
        continue;
      }
      if (ve(d)) {
        var m =
          typeof d.style == "string"
            ? i.time[d.style]
            : se(d.style)
            ? d.style.parsedOptions
            : i.time.medium;
        o.push({ type: O.literal, value: r.getDateTimeFormat(e, m).format(u) });
        continue;
      }
      if (ge(d)) {
        var m =
          typeof d.style == "string"
            ? i.number[d.style]
            : we(d.style)
            ? d.style.parsedOptions
            : void 0;
        m && m.scale && (u = u * (m.scale || 1)),
          o.push({ type: O.literal, value: r.getNumberFormat(e, m).format(u) });
        continue;
      }
      if (_e(d)) {
        var v = d.children,
          b = d.value,
          _ = a[b];
        if (!Ii(_)) throw new gr(b, "function", n);
        var C = de(v, e, r, i, a, s),
          S = _(
            C.map(function ($) {
              return $.value;
            })
          );
        Array.isArray(S) || (S = [S]),
          o.push.apply(
            o,
            S.map(function ($) {
              return {
                type: typeof $ == "string" ? O.literal : O.object,
                value: $,
              };
            })
          );
      }
      if (be(d)) {
        var B = d.options[u] || d.options.other;
        if (!B) throw new Je(d.value, u, Object.keys(d.options), n);
        o.push.apply(o, de(B.value, e, r, i, a));
        continue;
      }
      if (xe(d)) {
        var B = d.options["=".concat(u)];
        if (!B) {
          if (!Intl.PluralRules)
            throw new le(
              `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
              J.MISSING_INTL_API,
              n
            );
          var U = r
            .getPluralRules(e, { type: d.pluralType })
            .select(u - (d.offset || 0));
          B = d.options[U] || d.options.other;
        }
        if (!B) throw new Je(d.value, u, Object.keys(d.options), n);
        o.push.apply(o, de(B.value, e, r, i, a, u - (d.offset || 0)));
        continue;
      }
    }
    return Ai(o);
  }
  function Ri(t, e) {
    return e
      ? k(
          k(k({}, t || {}), e || {}),
          Object.keys(t).reduce(function (r, i) {
            return (r[i] = k(k({}, t[i]), e[i] || {})), r;
          }, {})
        )
      : t;
  }
  function Mi(t, e) {
    return e
      ? Object.keys(t).reduce(function (r, i) {
          return (r[i] = Ri(t[i], e[i])), r;
        }, k({}, t))
      : t;
  }
  function Ye(t) {
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
  function Bi(t) {
    return (
      t === void 0 && (t = { number: {}, dateTime: {}, pluralRules: {} }),
      {
        getNumberFormat: oe(
          function () {
            for (var e, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            return new ((e = Intl.NumberFormat).bind.apply(
              e,
              me([void 0], r, !1)
            ))();
          },
          { cache: Ye(t.number), strategy: Ce.variadic }
        ),
        getDateTimeFormat: oe(
          function () {
            for (var e, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            return new ((e = Intl.DateTimeFormat).bind.apply(
              e,
              me([void 0], r, !1)
            ))();
          },
          { cache: Ye(t.dateTime), strategy: Ce.variadic }
        ),
        getPluralRules: oe(
          function () {
            for (var e, r = [], i = 0; i < arguments.length; i++)
              r[i] = arguments[i];
            return new ((e = Intl.PluralRules).bind.apply(
              e,
              me([void 0], r, !1)
            ))();
          },
          { cache: Ye(t.pluralRules), strategy: Ce.variadic }
        ),
      }
    );
  }
  var vr = (function () {
    function t(e, r, i, a) {
      var s = this;
      if (
        (r === void 0 && (r = t.defaultLocale),
        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
        (this.format = function (n) {
          var o = s.formatToParts(n);
          if (o.length === 1) return o[0].value;
          var l = o.reduce(function (h, d) {
            return (
              !h.length ||
              d.type !== O.literal ||
              typeof h[h.length - 1] != "string"
                ? h.push(d.value)
                : (h[h.length - 1] += d.value),
              h
            );
          }, []);
          return l.length <= 1 ? l[0] || "" : l;
        }),
        (this.formatToParts = function (n) {
          return de(
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
      (this.formats = Mi(t.formats, i)),
        (this.formatters = (a && a.formatters) || Bi(this.formatterCache));
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
      (t.__parse = Z),
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
  var br = vr;
  var Hi = ["add_to_cart.prompt_personalization_text"];
  function y(t, e = {}, r = {}) {
    let i = Reflow.locales;
    if (!i) throw new Error("Reflow: Missing locale JSON");
    t = t.toLowerCase();
    let a = i[t],
      s = i.locale;
    if (!s || !a)
      return r.ignoreNotFoundErrors
        ? null
        : (console.error(
            "Reflow: Unable to resolve locale string with id '" + t + "'"
          ),
          "");
    try {
      return new br(a, s).format(e);
    } catch (n) {
      return (
        console.error(
          "Reflow: Unable to resolve IntlMessageFormat with id '" + t + "'"
        ),
        ""
      );
    }
  }
  function g(t, e = {}, r = {}) {
    let i = document.createElement("div");
    return (i.innerText = y(t, e, r)), i.innerHTML;
  }
  function xr(t) {
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
      let s, n;
      if (a == "geo") {
        for (let [o, l] of Object.entries(t.geo)) {
          if (l.country_name) {
            try {
              s = Z(l.country_name);
            } catch (h) {
              console.error(
                `Reflow: Localization - Invalid ICU Message syntax for "geo.${o}.country_name". English language version will be used instead.`
              );
              continue;
            }
            if (
              ((n = s.filter((h) => h.type == 1).map((h) => h.value)), n.length)
            ) {
              console.error(
                `Reflow: Localization - Unsupported properties in ICU Message for "geo.${o}.country_name". English language version will be used instead.`
              );
              continue;
            }
            r["geo." + o.toLowerCase() + ".country_name"] = l.country_name;
          }
          if (l.regions)
            for (let [h, d] of Object.entries(l.regions)) {
              try {
                s = Z(d);
              } catch (p) {
                console.error(
                  `Reflow: Localization - Invalid ICU Message syntax for "geo.${o}.regions.${h}". English language version will be used instead.`
                );
                continue;
              }
              if (
                ((n = s.filter((p) => p.type == 1).map((p) => p.value)),
                n.length)
              ) {
                console.error(
                  `Reflow: Localization - Unsupported properties in ICU Message for "geo.${o}.regions.${h}". English language version will be used instead.`
                );
                continue;
              }
              r["geo." + o.toLowerCase() + ".regions." + h.toLowerCase()] = d;
            }
        }
        continue;
      }
      if (!e[a] && !Hi.includes(a)) {
        console.error(
          'Reflow: Localization - Unsupported key "' +
            a +
            '" in localization JSON'
        );
        continue;
      }
      try {
        s = Z(t[a]);
      } catch (o) {
        console.error(
          `Reflow: Localization - Invalid ICU Message syntax for "${a}". English language version will be used instead.`
        );
        continue;
      }
      if (((n = s.filter((o) => o.type == 1).map((o) => o.value)), n.length)) {
        let o = Z(e[a])
            .filter((h) => h.type == 1)
            .map((h) => h.value),
          l = n.filter((h) => !o.includes(h));
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
  var _r = class {
      constructor(e) {
        (this.options = e),
          (this.model = e.model),
          (this.fields = e.fields || ["name", "city", "address", "country"]);
        let r = e.fieldPrefix,
          i = e.required ? "required" : "",
          a = '<div class="ref-address-widget">';
        this.fields.includes("name") &&
          (a += `
			<label>
				<span>${g("name")}</span>
				<input type="text" class="ref-form-control ref-field-details-name" value="" name="${r}-name" data-state-src="${r}-name" ${i} minlength="5" />
				<div class="ref-validation-error"></div>
			</label>`),
          this.fields.includes("address") &&
            (a += `
			<label>
				<span>${g("address")}</span>
				<textarea row="2" class="ref-form-control ref-field-details-address-line" name="${r}-address" data-state-src="${r}-address" ${i} minlength="5"></textarea>
				<div class="ref-validation-error"></div>
			</label>`),
          this.fields.includes("city") &&
            (a += `
			<label>
				<span>${g("city")}</span>
				<input type="text" class="ref-form-control ref-field-details-city" value="" name="${r}-city" data-state-src="${r}-city" ${i} minlength="2" />
				<div class="ref-validation-error"></div>
			</label>`),
          this.fields.includes("country") &&
            (a += `
			<div class="ref-error-parent">
				<label>
					<span>${g("country")}</span>
					<select class="ref-form-control ref-field-details-country" name="${r}-country" data-state-src="${r}-country" ${i}></select> 
				</label>
				<div class="ref-row ref-row-region">
					<label>
						<span>${g("state")}</span>
						<select class="ref-form-control ref-field-details-region" name="${r}-state" data-state-src="${r}-state" ${i}></select>
					</label>
					<label>
						<span>${g("postcode")}</span>
						<input type="text" class="ref-form-control ref-field-details-postcode" name="${r}-postcode" data-state-src="${r}-postcode" value="" ${i} />
					</label>
				</div>
				<div class="ref-validation-error"></div>
			</div>`),
          (a += "</div>"),
          (this.node = c(a)),
          this.fields.includes("name") &&
            ((this.nameInput = this.node.querySelector(
              ".ref-field-details-name"
            )),
            this.nameInput.addEventListener(
              "change",
              this.onNameChange.bind(this)
            )),
          this.fields.includes("address") &&
            ((this.addressLineInput = this.node.querySelector(
              ".ref-field-details-address-line"
            )),
            this.addressLineInput.addEventListener(
              "change",
              this.onAddressLineChange.bind(this)
            )),
          this.fields.includes("city") &&
            ((this.cityInput = this.node.querySelector(
              ".ref-field-details-city"
            )),
            this.cityInput.addEventListener(
              "change",
              this.onCityChange.bind(this)
            )),
          this.fields.includes("country") &&
            ((this.countrySelect = this.node.querySelector(
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
            ));
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
      setGetCountries(e) {
        this.options.getCountries = e;
      }
      update(e = !1, r = !1) {
        if (
          (this.fields.includes("name") &&
            (this.nameInput.value = this.model.name || ""),
          this.fields.includes("address") &&
            (this.addressLineInput.value = this.model.address || ""),
          this.fields.includes("city") &&
            (this.cityInput.value = this.model.city || ""),
          this.fields.includes("country"))
        ) {
          if (e) {
            this.countrySelect.innerHTML = `<option value="">${g(
              "cart.select_country"
            )}</option>`;
            for (let a of this.getCountries()) {
              let s =
                  g(
                    "geo." + a.country_code + ".country_name",
                    {},
                    { ignoreNotFoundErrors: !0 }
                  ) || a.country_name,
                n = c(`<option value="${a.country_code}">${s}</option>`);
              a.country_code == this.model.country && (n.selected = !0),
                this.countrySelect.append(n);
            }
          }
          (this.postcodeField.style.display = "none"),
            (this.stateField.style.display = "none"),
            (this.postcodeInput.disabled = !0),
            (this.regionSelect.disabled = !0);
          let i = this.getCountryByCode(this.model.country);
          if (this.model.country && i) {
            let a = !0;
            if (
              (this.options.fieldPrefix == "digital" &&
                i.country_code != "US" &&
                (a = !1),
              a &&
                i.has_postcode &&
                ((this.postcodeField.style.display = "block"),
                (this.postcodeInput.disabled = !1),
                (this.postcodeInput.value = this.model.postcode || ""),
                (this.postcodeField.querySelector("label span").textContent =
                  i.postcode_title || y("postcode"))),
              a &&
                i.has_regions &&
                ((this.stateField.style.display = "block"),
                (this.regionSelect.disabled = !1),
                (this.stateField.querySelector("label span").textContent =
                  i.region_title),
                e || r))
            ) {
              this.regionSelect.innerHTML = "";
              for (let [s, n] of Object.entries(i.regions)) {
                let o = c(`<option value="${s}"></option>`);
                (o.textContent =
                  y(
                    "geo." + i.country_code + ".regions." + s,
                    {},
                    { ignoreNotFoundErrors: !0 }
                  ) || n),
                  s == this.model.state && (o.selected = !0),
                  this.regionSelect.append(o);
              }
            }
          }
        }
        return this.node;
      }
    },
    re = _r;
  var Ke = class extends A {
    constructor(e, r = {}) {
      super(e, r);
      (e.innerHTML = `
		<div class="reflow-auth-button">

			<div class="ref-auth-button-guest">
				<div class="ref-button ref-sign-in">${g("auth.sign_in")}</div>
				<div class="ref-register">${g(
          "auth.prompt_register"
        )} <span class="text-primary">${g("auth.register")}<span></div>
			</div>

			<div class="ref-auth-button-signed">
				<a class="ref-profile-info"></a>
				<div class="ref-button ref-sign-out">${g("auth.sign_out")}</div>
			</div>

		</div>`),
        (this.signIn = e.querySelector(".ref-sign-in, .ref-register")),
        (this.register = e.querySelector(".ref-register")),
        (this.signOut = e.querySelector(".ref-sign-out"));
    }
    init() {
      this.signIn.addEventListener("click", function (e) {
        Reflow.auth.signIn();
      }),
        this.register.addEventListener("click", function (e) {
          Reflow.auth.signIn("register");
        }),
        this.signOut.addEventListener("click", function (e) {
          Reflow.auth.signOut();
        }),
        Reflow.auth.on("signin", ({ profile: e, isNew: r }) => {
          this.update();
          let i = this.getSignInRedirect();
          if (i) {
            let a = new URL(i, window.location.href);
            window.location = a.href;
          }
        }),
        Reflow.auth.on("signout", ({ error: e }) => {
          if ((this.update(), e && e == "profile_not_found")) {
            let i = new D(c('<div data-reflow-type="toast"></div>'), {
              type: "error",
              title:
                "There was a problem with loading your user profile. You have been signed out.",
              timeout: 0,
            });
            i.init(), i.show();
            return;
          }
          let r = this.getSignOutRedirect();
          if (r) {
            let i = new URL(r, window.location.href);
            window.location = i.href;
          }
        }),
        Reflow.auth.on("profile-refreshed", () => {
          this.update();
        });
    }
    getSignInRedirect() {
      return this.node.dataset.reflowSigninRedirect;
    }
    getSignOutRedirect() {
      return this.node.dataset.reflowSignoutRedirect;
    }
    getUserPageURL() {
      return this.node.dataset.reflowUserPageUrl;
    }
    async fetchData() {
      return this.mockData ? this.mockData : Reflow.auth.profile;
    }
    async update() {
      let e = this.node.querySelector(".ref-auth-button-guest"),
        r = this.node.querySelector(".ref-auth-button-signed");
      if (
        ((e.style.display = "none"),
        (r.style.display = "none"),
        Reflow.auth.isSignedIn())
      ) {
        r.style.display = "block";
        let i = this.parseShowString(),
          a = await this.fetchData(),
          s = r.querySelector(".ref-profile-info");
        if (((s.innerHTML = ""), i.full || i.photo)) {
          let o = document.createElement("img");
          o.classList.add("ref-profile-photo"), (o.src = a.photo), s.append(o);
        }
        if (i.full || i.name) {
          let o = document.createElement("span");
          o.classList.add("ref-profile-name"),
            (o.textContent = a.name),
            s.append(o);
        }
        let n = this.getUserPageURL();
        n && (s.href = n);
      } else e.style.display = "block";
    }
  };
  w(Ke, "type", "auth-button");
  var Q = Ke;
  function Di(t, e = 100, r = !1) {
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
  var Se = Di;
  function qi(t, e) {
    let r = 0;
    return (
      e.hasDecimal && ((t = t / 100), (r = 2)),
      new Intl.NumberFormat(Reflow.locales.locale || "en-US", {
        style: "currency",
        currency: e.code,
        maximumFractionDigits: r,
      }).format(t)
    );
  }
  var H = qi;
  function z(t, e = y("error")) {
    let r = new D(c('<div data-reflow-type="toast"></div>'), {
      type: "error",
      title: e,
      description: t,
    });
    r.init(), r.show();
  }
  function V(t, e) {
    var a;
    let i =
      (((a = t == null ? void 0 : t.data) == null ? void 0 : a.errors) || {})[
        e
      ] || "";
    return (
      t.data.errorCode &&
        (typeof t.data.errorCode == "string"
          ? (i = y(t.data.errorCode))
          : (i = y(t.data.errorCode.code, t.data.errorCode.formats))),
      i
    );
  }
  var Ee = (t, e, r) => {
      document.dispatchEvent(new Event(t), e),
        "BroadcastChannel" in window &&
          new BroadcastChannel("reflow").postMessage({ event: t, data: r });
    },
    W = (t, e) => {
      if ((document.addEventListener(t, e), "BroadcastChannel" in window)) {
        let r = new BroadcastChannel("reflow");
        r.onmessage = (i) => {
          i.data.event && i.data.event == t && e();
        };
      }
    };
  var G = class extends A {
      constructor(e, r) {
        super(e, r);
        w(this, "_state", null);
        w(this, "step", "cart");
        w(this, "activeDeliveryTab", "pickup");
        w(this, "shippingMethodIndex", -1);
        w(this, "chosenStoreLocation", -1);
        w(this, "shippingAddress", {});
        w(this, "billingAddress", {});
        w(this, "digitalAddress", {});
        w(this, "billingVisible", !1);
        w(this, "paypalButtonsInitialized", !1);
        w(this, "paypalErrorText", null);
        w(this, "backendUpdateTimeout", null);
        w(this, "pendingBackendUpdates", {});
        (e.innerHTML = `
			<div class="reflow-shopping-cart" style="display:none">

				<div class="ref-loading-overlay"></div>
				<div class="ref-message"></div>

				<div class="ref-cart">
					<div class="ref-heading">${g("shopping_cart")}</div>
					<div class="ref-th">
						<div class="ref-product-col">${g("product")}</div>
						<div class="ref-price-col">${g("price")}</div>
						<div class="ref-quantity-col">${g("quantity")}</div>
						<div class="ref-total-col">${g("total")}</div>
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
								<div class="ref-button ref-standard-checkout-button">${g("cart.checkout")}</div>
							</div>
						</div>
					</div>
				</div>

				<div class="ref-checkout">
					<div class="ref-checkout-content">
						<form class="ref-details">
							<div class="ref-back">\u2190 ${g("cart.back_to_cart")}</div>
							<div class="ref-heading">${g("cart.customer_details")}</div>

							<div class="text-center ref-auth-button-holder">
								<div class="ref-auth-button" data-reflow-type="auth-button"></div>
							</div>

							<label>
								<span>${g("email")}</span>
								<input type="email" name="email" id="ref-field-email" class="ref-form-control" value="" required data-state-src="email" />
								<div class="ref-validation-error"></div>
							</label>
							<label class="ref-phone-input">
								<span>${g("phone")}</span>
								<input type="tel" name="phone" id="ref-field-phone" class="ref-form-control" value="" pattern="[0-9\\+\\- ]{5,30}" placeholder="+1234567890" required  data-state-src="phone" />
								<div class="ref-validation-error"></div>
							</label>
							<label class="ref-customer-name-input">
								<span>${g("name")}</span>
								<input type="text" name="customer-name" class="ref-form-control" value="" data-state-src="customer-name" minlength="5" required />
								<div class="ref-validation-error"></div>
							</label>

							<fieldset class="ref-digital-delivery" disabled>
								<div class="ref-digital-address-holder"></div>
								<input type="hidden" name="delivery-method" value="digital" />
							</fieldset>


							<div class="ref-heading ref-heading-delivery">${g("delivery")}</div>
							<div class="ref-delivery-unavailable"></div>
							<div class="ref-delivery-card">

								<div class="ref-tab ref-local-pickup-tab" data-ref-delivery="pickup">
									<label class="ref-tab-toggle">
										<input type="radio" value="pickup" name="delivery-method" required />
										<div class="ref-heading-small">${g("pickup_at_store")}</div>
									</label>
									<fieldset class="ref-tab-content">
										<div class="ref-heading-small">${g("cart.select_store")}</div>
										<div class="ref-locations ref-error-parent"></div>

										<div class="ref-billing-container">
											<div class="ref-button ref-add-billing">${g("cart.add_billing")}</div>

											<fieldset class="ref-billing-address" disabled>
												<div class="ref-row">
													<div class="ref-heading-small">${g("billing_address")}</div>
													<div class="ref-button ref-remove-billing">${g("remove")}</div>
												</div>
												<div class="ref-billing-address-holder"></div>
											</fieldset>
										</div>
									</fieldset>
								</div>

								<div class="ref-tab ref-shipping-tab" data-ref-delivery="shipping">
									<label class="ref-tab-toggle">
										<input type="radio" value="shipping" name="delivery-method" required />
										<div class="ref-heading-small">${g("cart.deliver_to_address")}</div>
									</label>
									<fieldset class="ref-tab-content">
										<div class="ref-heading-small">${g("shipping_address")}</div>
										<div class="ref-shipping-address-holder"></div>

										<div class="ref-auth-save-address">
											<label>
												<input type="checkbox" name="auth-save-address" checked>
												<span>${g("cart.save_address")}</span>
											</label>
										</div>

										<div class="ref-billing-container">
											<div class="ref-button ref-add-billing">${g("cart.add_billing")}</div>

											<fieldset class="ref-billing-address" disabled>
												<div class="ref-row">
													<div class="ref-heading-small">${g("billing_address")}</div>
													<div class="ref-button ref-remove-billing">${g("remove")}</div>
												</div>
												<div class="ref-billing-address-holder"></div>
											</fieldset>
										</div>
									
										<div class="ref-heading-shipping-methods ref-heading-small">${g(
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
										<span class="ref-field-toggle-title">${g("cart.tax_exemption_add")}</span>
									</span>
									<div class="ref-collapse">
										<div class="ref-tax-exemption-file">
											<div class="ref-old-tax-file">
												<a href="#" class="ref-tax-file-dl">${g("cart.tax_exemption_file")}</a>
												<span class="ref-remove-tax-file">${g("remove")}</span>
											</div>
											<label class="ref-new-tax-file">
												<span class="ref-tax-file-label">${g("cart.tax_exemption_file_prompt")}</span>
												<input type="file" name="tax-exemption-file" id="ref-field-exemption-file" class="ref-form-control" accept=".doc,.docx,.pdf,.jpg,.jpeg,.png" />
												<div class="ref-validation-error"></div>
											</label>
										</div>
										<label class="ref-tax-exemption-text">
											<span>${g("cart.tax_exemption_number_prompt")}</span>
											<input type="text" name="tax-exemption-text" id="ref-field-exemption-text" class="ref-form-control" maxlength="30" />
											<div class="ref-validation-error"></div>
										</label>
									</div>
								</div>
							</div>

							<hr />

							<div class="ref-field-collapsible ref-note-to-seller open">
								<span class="ref-field-toggle">
									<span class="ref-field-toggle-title">${g("cart.note_to_seller")}</span>
								</span>
								<label class="ref-collapse">
									<textarea id="ref-field-note-seller" class="ref-form-control" name="note-to-seller" row="4" maxlength="1000" placeholder="${g(
                    "cart.note_to_seller_placeholder"
                  )}" data-state-src="note"></textarea>
								</label>
								<div class="ref-validation-error"></div>
							</div>

							<hr />

							<div>
								<div class="ref-heading ref-heading-payment">${g("payment")}</div>
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
						<div class="ref-heading">${g("cart.order_summary")}</div>
						<div class="ref-products"></div>
						<hr>
						<div class="ref-discount-code">
							<div class="ref-discount-code-container">
								<div class="ref-discount-code-input-holder">
									<input id="ref-discount-code-input" class="ref-form-control" name="discount-code" type="text" maxlength="32" autocomplete="off" placeholder="${g(
                    "cart.discount_code_placeholder"
                  )}">
									<span class="ref-discount-code-input-clear" title="${g("clear")}">\u2715</span>
								</div>
								<div class="ref-button ref-button-success ref-add-code inactive">${g(
                  "apply"
                )}</div>
							</div>
							<div class="ref-validation-error"></div>
						</div>
						<hr>
						<div class="ref-totals">
							<div class="ref-subtotal">
								<div class="ref-row"><span>${g("subtotal")}</span><span></span></div>
							</div>
							<div class="ref-applied-coupon">
								<div class="ref-row">
									<div class="ref-row"><span></span><span class="ref-remove-coupon">${g(
                    "remove"
                  )}</span></div>
									<span></span>
								</div>
								<div class="ref-applied-coupon-error"></div>
							</div>
							<div class="ref-shipping">
								<div class="ref-row"><span>${g("shipping")}</span><span></span></div>
							</div>
							<div class="ref-taxes">
								<div class="ref-row"><span></span><span></span></div>
							</div>
							<div class="ref-applied-gift-card">
								<div class="ref-row">
									<div class="ref-row"><span></span><span class="ref-remove-gift-card">${g(
                    "remove"
                  )}</span></div>
									<span></span>
								</div>
								<div class="ref-row"></div>
								<div class="ref-applied-gift-card-error"></div>
							</div>
						</div>
						<hr />
						<div class="ref-total">
							<div class="ref-row"><span>${g("total")}</span><span></span></div>
							<div class="ref-total-note"></div>
						</div>
					</div>
					<div class="ref-summary-toggle ref-field-collapsible">
						<span class="ref-field-toggle">
							<span class="ref-field-toggle-title">${g("cart.show_summary")}</span>
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
          (this.discountCode = e.querySelector(".ref-discount-code")),
          (this.discountCodeInput = e.querySelector(
            "#ref-discount-code-input"
          )),
          (this.applyDiscountCodeButton = e.querySelector(
            ".ref-button.ref-add-code"
          )),
          (this.discountCodeClear = e.querySelector(
            ".ref-discount-code-input-clear"
          )),
          (this.discountCodeError = e.querySelector(
            ".ref-discount-code .ref-validation-error"
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
          (this.authButton = new Q(
            this.node.querySelector(".ref-auth-button")
          )),
          (this.shippingAddressWidget = new re({
            model: this.shippingAddress,
            fieldPrefix: "shipping",
            required: !0,
            getCountries: () => this.getShippableCountries(),
            onChange: () => this.updateAddress("shipping"),
          })),
          (this.billingAddressWidget = new re({
            model: this.billingAddress,
            fieldPrefix: "billing",
            required: !0,
            getCountries: () => this.getShippableCountries(),
          })),
          (this.digitalAddressWidget = new re({
            model: this.digitalAddress,
            fieldPrefix: "digital",
            fields: ["country"],
            required: !0,
            getCountries: () => this.getShippableCountries(),
            onChange: () => this.updateAddress("digital"),
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
          this.discountCodeInput.addEventListener(
            "input",
            this.onDiscountCodeInput.bind(this)
          ),
          this.node.addEventListener("click", this.onClick.bind(this)),
          this.node.addEventListener("keypress", this.onKeypress.bind(this)),
          this.node.addEventListener(
            "change",
            this.saveToLocalStorage.bind(this)
          ),
          (this.scheduleRefresh = Se(this.refresh.bind(this), 250)),
          W("reflow-add-to-cart", this.scheduleRefresh),
          W("reflow-update-cart-product", this.scheduleRefresh),
          W("reflow-remove-cart-product", this.scheduleRefresh),
          this.authButton.init(),
          Reflow.auth.on("signin", ({ profile: e, isNew: r }) => {
            this.fillInputsFromAuthProfile(), this.update();
          }),
          Reflow.auth.on("profile-refreshed", () => {
            this.fillInputsFromAuthProfile(), this.update();
          }),
          Reflow.auth.on("signout", () => {
            this.update();
          });
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
          : (G._paypalPromise ||
              (G._paypalPromise = new Promise((e, r) => {
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
            G._paypalPromise);
      }
      restoreUserInput() {
        if (!!this.state) {
          if (!this.isDemoMode()) {
            let e = this.node.querySelectorAll("[data-state-src]"),
              r = this.state,
              i = Reflow.cart.localFormData.getAll();
            for (let o of e) {
              let l = o.getAttribute("data-state-src"),
                h = o.getAttribute("type"),
                d = i[l] !== void 0 ? i[l] : r[l];
              d !== void 0 &&
                (h == "checkbox" ? (o.checked = !!d) : (o.value = d));
            }
            let a = this.state.shippingAddress || {},
              s = this.state.billingAddress || {},
              n = this.state.digitalAddress || {};
            for (let [o, l] of Object.entries(i)) {
              let h = o.split("-");
              if (h.length > 1) {
                let d = h[0],
                  p = h[1];
                d == "shipping" && (a[p] = l),
                  d == "billing" && (s[p] = l),
                  d == "digital" && (n[p] = l);
              }
            }
            Object.assign(this.shippingAddress, a),
              Object.assign(this.billingAddress, s),
              Object.assign(this.digitalAddress, n);
          }
          (this.billingVisible = this.isBillingFilled()),
            this.shippingAddressWidget.update(!0, !0),
            this.billingAddressWidget.update(!0, !0),
            this.digitalAddressWidget.update(!0, !0),
            Reflow.auth.profile && this.fillInputsFromAuthProfile(),
            this.offersLocalPickup()
              ? (this.activeDeliveryTab = "pickup")
              : this.offersShipping() && (this.activeDeliveryTab = "shipping");
        }
      }
      fillInputsFromAuthProfile() {
        let e = Reflow.auth.profile,
          r = this.node.querySelector("#ref-field-email"),
          i = this.node.querySelector(".ref-customer-name-input input"),
          a = this.node.querySelector(".ref-phone-input input"),
          s = this.shippingAddress || {},
          n = !1;
        if (
          (e.email && r && !r.value && (r.value = e.email),
          e.meta.phone && a && !a.value && (a.value = e.meta.phone),
          e.name &&
            (i && !i.value && (i.value = e.name), s.name || (s.name = e.name)),
          e.meta.address)
        ) {
          let o = e.meta.address;
          for (let l of ["address", "city", "country", "postcode", "state"])
            o[l] && !s[l] && ((s[l] = o[l]), (n = !0));
        }
        Object.assign(this.shippingAddress, s),
          this.shippingAddressWidget.update(!0, !0),
          n && this.updateAddress("shipping");
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
              h = s.dataset.personalization;
            h && h.length && l.append("personalization", h),
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
                z(void 0, this.getStateErrorMessage(s));
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
              c(".ref-checkout-summary", this.node)[0].classList.toggle("open"),
            e.target.closest(".button-demo-payment"))
          ) {
            let s = new D(c('<div data-reflow-type="toast"></div>'), {
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
              await E(
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
                : y("store_unavailable");
              z(l);
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
              ),
              Reflow.auth.isSignedIn() &&
                n.append("auth-account-id", Reflow.auth.profile.id);
            try {
              if (
                (await this.refreshState(), this.update(), !this.canFinish())
              ) {
                z(this.getStateErrors()[0]);
                return;
              }
              let l = await E(
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
                let h = Object.entries(this.state.paymentProviders).find(
                  (u) => u[0] == s.dataset.paymentId
                );
                if (!h) return;
                if (((h = h[1]), !h.instructions)) {
                  window.location = this.getSuccessURL({
                    order_id: l.order.id,
                    secure_hash: l.order.secure_hash,
                  });
                  return;
                }
                let d = this.checkout.querySelector(".ref-instructions");
                d.querySelector(".ref-payment-method-name").textContent =
                  h.name;
                let p = h.instructions.replaceAll("{orderid}", l.order.id);
                (p = p.replaceAll(
                  "{amount}",
                  this.formatMoney(l.order.amount)
                )),
                  (d.querySelector(
                    ".ref-payment-method-instructions"
                  ).innerHTML = p),
                  this.setStep("instructions"),
                  this.update();
              }
              if (o == "pay-in-store" && l.order) {
                let h = this.state.locations.find((u) => u.chosen);
                if (!h || !h.instructions) {
                  window.location = this.getSuccessURL({
                    order_id: l.order.id,
                    secure_hash: l.order.secure_hash,
                  });
                  return;
                }
                let d = this.checkout.querySelector(".ref-instructions");
                d.querySelector(".ref-payment-method-name").textContent =
                  y("pickup_at_store");
                let p = h.instructions.replaceAll("{orderid}", l.order.id);
                (p = p.replaceAll(
                  "{amount}",
                  this.formatMoney(l.order.amount)
                )),
                  (d.querySelector(
                    ".ref-payment-method-instructions"
                  ).innerHTML = p),
                  this.setStep("instructions"),
                  this.update();
              }
            } catch (l) {
              l.data &&
                l.data.errors &&
                (this.showFormErrors(l.data.errors),
                l.data.errors.system &&
                  z(V(l, "system"), y("cart.errors.cannot_complete")));
            } finally {
              this.hideLoading();
            }
          }
          if (e.target.closest(".ref-add-code")) {
            let s = this.discountCodeInput.value.trim();
            if (((this.discountCodeError.textContent = ""), !s.length)) return;
            this.showLoading();
            try {
              let n = new FormData();
              n.append("code", s);
              let o = await E(
                `/apply-discount-code/${this.key}/`,
                { method: "POST", body: n },
                !1
              );
              this.discountCodeInput.value = "";
              let l = new D(c('<div data-reflow-type="toast"></div>'), {
                type: "success",
                title: y("cart." + o.type + "_added"),
              });
              l.init(), l.show(), await this.refresh();
            } catch (n) {
              this.discountCodeError.textContent = V(n);
            } finally {
              this.hideLoading();
            }
          }
          if (
            (e.target.closest(".ref-discount-code-input-clear") &&
              ((this.discountCodeInput.value = ""),
              this.applyDiscountCodeButton.classList.add("inactive"),
              (this.discountCodeError.textContent = "")),
            e.target.closest(".ref-remove-coupon"))
          ) {
            if (!this.state.coupon) return;
            this.showLoading();
            try {
              await E(`/remove-coupon/${this.key}/`, { method: "POST" }, !1);
              let s = new D(c('<div data-reflow-type="toast"></div>'), {
                type: "success",
                title: y("cart.coupon_removed"),
              });
              s.init(), s.show(), await this.refresh();
            } catch (s) {
              z();
            } finally {
              this.hideLoading();
            }
          }
          if (e.target.closest(".ref-remove-gift-card")) {
            if (!this.state.giftCard) return;
            this.showLoading();
            try {
              await E(`/remove-gift-card/${this.key}/`, { method: "POST" }, !1);
              let s = new D(c('<div data-reflow-type="toast"></div>'), {
                type: "success",
                title: y("cart.gift_card_removed"),
              });
              s.init(), s.show(), await this.refresh();
            } catch (s) {
              z();
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
      onDiscountCodeInput(e) {
        (this.discountCodeError.textContent = ""),
          e.target.value.length
            ? (this.applyDiscountCodeButton.classList.remove("inactive"),
              (this.discountCodeClear.style.display = "block"))
            : (this.applyDiscountCodeButton.classList.add("inactive"),
              (this.discountCodeClear.style.display = "none"));
      }
      showFormErrors(e) {
        for (let r in e) {
          let i = this.detailsForm.querySelector(`[name=${r}]`);
          if (!i) continue;
          let a = i.closest(".ref-error-parent") || i.closest("label"),
            s = "";
          Array.isArray(e[r]) && (s = e[r][0]),
            s || (s = y(e[r])),
            s || (s = e[r]),
            (a.querySelector(".ref-validation-error").textContent = s);
        }
      }
      clearFormErrors() {
        for (let e of c(".ref-validation-error", this.node)) e.textContent = "";
      }
      getStep() {
        return this.step;
      }
      setStep(e) {
        G.steps.includes(e) && (this.step = e);
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
      getDigitalAddress() {
        let e = {},
          r = this.digitalAddress.country;
        if (!(!r || !this.getCountryByCode(r))) {
          if (((e.country = r), r == "US")) {
            if (
              !this.digitalAddress.postcode ||
              ((e.postcode = this.digitalAddress.postcode),
              !this.digitalAddress.state)
            )
              return;
            e.state = this.digitalAddress.state;
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
          return i ? y("cart.errors." + r, i) : y("cart.errors." + r);
        } catch (r) {
          return e.message || "";
        }
      }
      getStateErrors() {
        return (this.state.errors || [])
          .map(this.getStateErrorMessage.bind(this))
          .filter((r) => !!r);
      }
      async updateAddress(e) {
        let r;
        if (
          (e == "shipping" && (r = this.getShippingAddress()),
          e == "digital" && (r = this.getDigitalAddress()),
          !r)
        )
          return;
        let i = new FormData();
        if (
          (i.append("address", JSON.stringify(r)),
          i.append("delivery_method", e),
          this.clearFormErrors(),
          this.showLoading(),
          (
            await E(
              `/update-address/${this.key}/`,
              { method: "POST", body: i },
              !1
            )
          ).taxExemptionRemoved)
        ) {
          let s = new D(c('<div data-reflow-type="toast"></div>'), {
            type: "warning",
            title: y("cart.tax_exemption_cleared"),
            description: y("cart.tax_exemption_cleared_details"),
          });
          s.init(), s.show();
        }
        await this.refresh();
      }
      async onTaxExemptionChange(e) {
        let r,
          i = this.hasPhysicalProducts() ? this.activeDeliveryTab : "digital";
        if ((i == "shipping" && (r = this.getShippingAddress()), i == "pickup"))
          for (let n of this.state.locations) n.chosen && (r = n.address);
        if ((i == "digital" && (r = this.getDigitalAddress()), !r)) {
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
          await E(
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
            (i.textContent = y("cart." + r.id)),
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
        return !1;
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
        let r = c(`
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
						<div class="ref-product-remove">${g("remove")}</div>
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
          let d = c(".ref-product-variants", r)[0],
            p = c('<div class="ref-product-variant"></div>');
          (p.textContent = e.variant.option_name + ": " + e.variant.name),
            d.append(p);
        }
        if (e.personalization && e.personalization.length)
          try {
            r.dataset.personalization = JSON.stringify(
              e.personalization.map((p) => {
                let u = { id: p.id };
                return (
                  p.inputText && (u.inputText = p.inputText),
                  p.selected && (u.selected = p.selected),
                  p.filename && (u.filename = p.filename),
                  p.filehash && (u.filehash = p.filehash),
                  u
                );
              })
            );
            let d = c(".ref-product-personalization-holder", r)[0];
            for (let p of e.personalization) {
              let u = c('<div class="ref-product-personalization"></div>'),
                m = `${p.name}${p.inputText ? ': "' + p.inputText + '" ' : ""}${
                  p.selected ? ': "' + p.selected + '" ' : ""
                }${p.filename ? ': "' + p.filename + '" ' : ""} ${
                  p.price
                    ? "+" + this.formatMoney(p.price)
                    : "- " + y("price_free")
                }`;
              (u.title = m),
                (m = m.length > 55 ? m.substring(0, 55) + "..." : m),
                (u.textContent = m),
                d.append(u);
            }
          } catch (d) {
            console.error("Reflow:", d);
          }
        let a = c(".ref-product-photo", r)[0];
        (a.src = e.image.sm),
          (a.alt = i),
          (c(".ref-product-name", r)[0].textContent = i);
        let s = c(".ref-product-price", r) || [];
        for (let d of s)
          this.getTaxPricingType() == "inclusive"
            ? (d.textContent = this.formatMoney(
                e.unitPrice + e.tax / e.quantity
              ))
            : (d.textContent = this.formatMoney(e.unitPrice));
        if (e.inStock) {
          if (e.quantity > e.availableQuantity)
            for (let d of c(".ref-product-qty-message", r))
              d.textContent = y("cart.left_in_stock", {
                in_stock: e.availableQuantity,
              });
          else if (e.quantity > e.maxQty)
            for (let d of c(".ref-product-qty-message", r))
              d.textContent = y("cart.max_product_qty", {
                max_quantity: e.maxQty,
              });
        }
        let n = c(".ref-product-total-sum", r) || [];
        for (let d of n)
          e.inStock
            ? this.getTaxPricingType() == "inclusive"
              ? (d.textContent = this.formatMoney(e.price + e.tax))
              : (d.textContent = this.formatMoney(e.price))
            : ((d.textContent = y("out_of_stock")),
              d.classList.add("out-of-stock"));
        let o = c(".ref-product-quantity input", r) || [];
        for (let d of o) d.value = e.quantity;
        let l = y("product");
        e.categories.length && (l = e.categories[0].name),
          (c(".ref-product-category", r)[0].textContent = l);
        let h = c(".ref-quantity-container", r) || [];
        for (let d of h) {
          let p = new ee(d, {
            inStock: e.inStock,
            onChange: (u) => {
              let m = u.getProduct(),
                v = u.getQuantity(),
                b = u.getVariant(),
                _ = r,
                C = new FormData(),
                S = _.dataset.personalization;
              S && S.length && C.append("personalization", S),
                Reflow.cart.scheduleAPICall(
                  m + (b ? `-${b}` : "") + "-quantity",
                  () => Reflow.cart.updateProduct(m, v, b, C)
                );
            },
          });
          p.init(),
            e.variant && p.setVariant(e.variant.id),
            p.setProduct(e.id),
            p.setMaxQuantity(Math.min(e.availableQuantity, e.maxQty)),
            p.setQuantity(e.quantity),
            p.update();
        }
        return r;
      }
      renderProductCompact(e) {
        let r = c(`
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
					<div class="ref-product-remove">${g("remove")}</div>
				</div>
			</div>
		`),
          i = e.name;
        (r.dataset.id = e.id),
          e.variant &&
            ((r.dataset.variant_id = e.variant.id),
            (i += ` (${e.variant.name})`));
        let a = c(".ref-product-photo", r)[0];
        (a.src = e.image.sm),
          (a.alt = i),
          (c(".ref-product-name", r)[0].textContent = i),
          (c(".ref-product-secondary", r)[0].textContent =
            this.formatMoney(e.unitPrice) + " x " + e.quantity),
          e.inStock && e.quantity > e.availableQuantity
            ? (r.classList.add("ref-warning"),
              (c(".ref-product-qty-message", r)[0].textContent = y(
                "cart.left_in_stock",
                { in_stock: e.availableQuantity }
              )),
              (c(".ref-product-update-cart", r)[0].textContent =
                y("cart.update")))
            : e.inStock && e.quantity > e.maxQty
            ? (r.classList.add("ref-warning"),
              (c(".ref-product-qty-message", r)[0].textContent = y(
                "cart.max_product_qty",
                { max_quantity: e.maxQty }
              )),
              (c(".ref-product-update-cart", r)[0].textContent =
                y("cart.update")))
            : (c(".ref-product-qty-message", r)[0].remove(),
              c(".ref-product-update-cart", r)[0].remove());
        let s = c(".ref-product-total", r)[0];
        if (
          (e.inStock
            ? ((s.textContent = this.formatMoney(e.price)),
              c(".ref-product-remove", r)[0].remove())
            : ((s.textContent = y("out_of_stock")),
              s.classList.add("out-of-stock")),
          e.personalization && e.personalization.length)
        ) {
          let n = c(".ref-product-personalization-holder", r)[0];
          for (let o of e.personalization) {
            let l = c('<div class="ref-product-personalization"></div>'),
              h = `${o.name}${o.inputText ? ': "' + o.inputText + '"' : ""}${
                o.selected ? ': "' + o.selected + '"' : ""
              }${o.filename ? ': "' + o.filename + '" ' : ""}`;
            (l.title = h),
              (h = h.length > 25 ? h.substring(0, 25) + "..." : h),
              (l.textContent = h),
              n.append(l);
          }
        }
        return r;
      }
      renderShippingMethod(e, r) {
        let i = c(`<label class="ref-row">
			<div class="ref-method-radio"><input type="radio" value="" name="shipping-method" required /></div>
			<div class="ref-method-name"></div>
			<div class="ref-method-price">$19.00</div>
		</label>`),
          a = c("input", i)[0];
        (a.value = r), (a.checked = e.chosen);
        let s = c(".ref-method-name", i)[0],
          n = document.createElement("b");
        if (((n.textContent = e.name), s.append(n), e.delivery_time)) {
          let o = document.createElement("small");
          (o.textContent =
            this.getDeliveryDate(e.delivery_time) +
            " - " +
            this.getDeliveryDate(e.delivery_time + 2)),
            s.append(o);
        }
        if (e.note) {
          let o = document.createElement("small");
          (o.textContent = e.note), s.append(o);
        }
        return (
          (c(".ref-method-price", i)[0].textContent = this.formatMoney(
            e.price
          )),
          i
        );
      }
      renderStoreLocation(e, r) {
        let i = c(`<label>
			<input type="radio" value="" name="store-location" required />
			<div class="ref-location-card">
				<b class="ref-location-name"></b>
				<div class="ref-location-address"></div>
				<div class="ref-location-contacts"></div>
			</div>
		</label>`);
        i.dataset.refLocation = e.id;
        let a = c("input", i)[0];
        (a.value = r), (a.checked = e.chosen);
        let s = c(".ref-location-name", i)[0];
        s.textContent = e.name;
        let n = c(".ref-location-address", i)[0],
          o = e.address.address + ", " + e.address.city + ", ";
        e.address.country == "US" &&
          e.address.state &&
          (o += e.address.state + ", "),
          (o += e.address.countryName),
          (n.textContent = o);
        let l = document.createElement("b");
        (l.textContent = `${y("address")}: `), n.prepend(l);
        let h = c(".ref-location-contacts", i)[0];
        if (e.email) {
          let d = document.createElement("span");
          d.textContent = e.email;
          let p = document.createElement("b");
          (p.textContent = `${y("email")}: `), d.prepend(p), h.append(d);
        }
        if (e.phone) {
          let d = document.createElement("span");
          d.textContent = e.phone;
          let p = document.createElement("b");
          (p.textContent = `${y("phone")}: `), d.prepend(p), h.append(d);
        }
        if (e.working_hours) {
          let d = document.createElement("span");
          d.textContent = e.working_hours;
          let p = document.createElement("b");
          (p.textContent = `${y("working_hours")}: `),
            d.prepend(p),
            h.append(d);
        }
        if (e.delivery_time) {
          let d = document.createElement("span");
          d.textContent = this.getDeliveryDate(e.delivery_time);
          let p = document.createElement("b");
          (p.textContent = `${y("cart.order_ready_for_pickup_label")}: `),
            d.prepend(p),
            h.append(d);
        }
        return i;
      }
      renderPaymentButton(e, r, i, a) {
        let s = document.createElement("div");
        return (
          (s.textContent = e),
          s.classList.add("ref-button"),
          s.classList.add("ref-payment-button"),
          r &&
            ((r = r.toLowerCase().replaceAll("_", "-").replaceAll(" ", "-")),
            s.classList.add("ref-payment-" + r)),
          (s.dataset.method = i),
          a && (s.dataset.paymentId = a),
          s
        );
      }
      formatMoney(e) {
        return H(e, this.state.currencyConfig);
      }
      hasNextStep() {
        return G.steps.indexOf(this.step) == 0;
      }
      hasPreviousStep() {
        return G.steps.indexOf(this.step) == 1;
      }
      next() {
        let e = G.steps.indexOf(this.step);
        this.step = G.steps[e + 1];
      }
      previous() {
        let e = G.steps.indexOf(this.step);
        this.step = G.steps[e - 1];
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
            await E(
              `/invalidate-tax-exemption/${this.key}/`,
              { method: "POST", body: r },
              !1
            )
          ).taxExemptionRemoved)
        ) {
          let a = new D(c('<div data-reflow-type="toast"></div>'), {
            type: "warning",
            title: y("cart.tax_exemption_cleared"),
            description: y("cart.tax_exemption_cleared_details"),
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
      onlyPaypalNoDelivery() {
        return !(
          !this.hasPhysicalProducts() ||
          !this.isPaypalSupported() ||
          this.offersShipping() ||
          this.isStripeSupported() ||
          this.hasCustomPayments() ||
          this.hasPayInStorePayments()
        );
      }
      isStripeSupported() {
        return this.state.paymentProviders.stripe.supported;
      }
      isPaypalSupported() {
        return this.hasPhysicalProducts() && !this.offersShipping()
          ? !1
          : this.state.paymentProviders.paypal.supported;
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
        if (!this.state) return this.showMessage(y("cart.errors.unavailable"));
        if (!this.state.products.length)
          return this.showMessage(y("cart.errors.empty"));
        (this.cart.style.display = "block"),
          this.renderTestModeBadge(this.node),
          (this.productTable.innerHTML = "");
        for (let s of this.state.products)
          this.productTable.append(this.renderProduct(s));
        let e = this.cart.querySelector(".ref-links");
        e.innerHTML = "";
        for (let s of this.getFooterLinks()) e.append(s);
        if (
          (this.getTaxPricingType() == "inclusive"
            ? (this.cartSubtotal.textContent =
                `${y("subtotal")}: ` +
                this.formatMoney(this.state.subtotal + this.state.taxes.amount))
            : (this.cartSubtotal.textContent =
                `${y("subtotal")}: ` + this.formatMoney(this.state.subtotal)),
          (i = this.state.vacationMode) == null ? void 0 : i.enabled)
        ) {
          let s = this.cart.querySelector(".ref-standard-checkout-button");
          if (
            (s.classList.add("inactive"),
            this.state.vacationMode.message.length)
          ) {
            let n = c('<div class="ref-store-message"></div>');
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
                    c(
                      "<span>" +
                        (s === this.state.footerLinks.length - 1
                          ? ` ${g("and")} `
                          : ", ") +
                        "</span>"
                    )
                  )
                : r.append(
                    c(`<span>${g("cart.terms_agree", { terms: "" })} </span>`)
                  );
            let o = c("<a>");
            (o.href = n.url), (o.textContent = y("cart." + n.id)), r.append(o);
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
        var ft;
        this.renderTestModeBadge(
          this.node.querySelector(".ref-checkout-content")
        ),
          this.clearFormErrors(),
          (this.checkout.style.display = "flex");
        let e = this.checkout.querySelector(".ref-details"),
          r = this.checkout.querySelector(".ref-instructions");
        (e.style.display = "none"),
          (r.style.display = "none"),
          this.step == "details"
            ? (e.style.display = "block")
            : this.step == "instructions" && (r.style.display = "block");
        let i = this.checkout.querySelector(".ref-products");
        i.innerHTML = "";
        for (let x of this.state.products)
          i.append(this.renderProductCompact(x));
        let a = this.checkout.querySelector(".ref-subtotal");
        (a.firstElementChild.children[1].textContent = this.formatMoney(
          this.state.subtotal
        )),
          this.discountCode.classList.remove("hidden"),
          (this.discountCode.nextElementSibling.style.display = "block");
        let s = this.checkout.querySelector(".ref-applied-coupon");
        s.style.display = "none";
        let n = this.checkout.querySelector(".ref-applied-gift-card");
        if (((n.style.display = "none"), this.state.coupon)) {
          s.style.display = "block";
          let x = this.state.coupon,
            P = x.name || x.code.toUpperCase();
          P.length > 15 && (P = P.substring(0, 15) + "..."),
            (s.firstElementChild.firstElementChild.children[0].textContent = P),
            (s.firstElementChild.children[1].textContent = x.errorCode
              ? ""
              : "-" + this.formatMoney(this.state.discount)),
            (s.querySelector(".ref-applied-coupon-error").textContent =
              V({ data: { errorCode: x.errorCode } }) || "");
        }
        if (this.state.giftCard) {
          n.style.display = "block";
          let x = this.state.giftCard,
            P = x.code;
          (n.firstElementChild.firstElementChild.children[0].textContent = P),
            (n.firstElementChild.children[1].textContent = x.errorCode
              ? ""
              : "-" + this.formatMoney(x.discountAmount)),
            (n.children[1].textContent =
              "(" +
              y("cart.gift_card_balance", {
                amount: this.formatMoney(x.balance),
              }) +
              ")"),
            (n.querySelector(".ref-applied-gift-card-error").textContent =
              V({ data: { errorCode: x.errorCode } }) || "");
        }
        this.state.giftCard &&
          this.state.coupon &&
          (this.discountCode.classList.add("hidden"),
          (this.discountCode.nextElementSibling.style.display = "none"),
          (this.discountCodeError.textContent = "")),
          this.step == "instructions" &&
            (this.discountCode.classList.add("hidden"),
            (this.discountCode.nextElementSibling.style.display = "none"),
            (s.querySelector(".ref-remove-coupon").style.display = "none"),
            (n.querySelector(".ref-remove-gift-card").style.display = "none"));
        let o = this.checkout.querySelector(".ref-shipping");
        if (((o.style.display = "none"), this.hasPhysicalProducts())) {
          o.style.display = "block";
          let x = y("shipping"),
            P = y("cart.shipping_not_selected");
          if (this.activeDeliveryTab == "shipping")
            for (let F of this.state.shipping)
              F.chosen &&
                ((x = `${y("shipping")} (${F.name})`),
                (P = this.formatMoney(F.price)));
          if (this.activeDeliveryTab == "pickup") {
            (x = y("pickup_at_store")), (P = this.formatMoney(0));
            for (let F of this.state.locations)
              F.chosen && (x = y("cart.pickup_at_store", { store: F.name }));
          }
          (o.firstElementChild.children[0].textContent = x),
            (o.firstElementChild.children[1].textContent = P);
        }
        let l = this.checkout.querySelector(".ref-total");
        (l.firstElementChild.children[1].textContent = this.formatMoney(
          this.state.total
        )),
          (this.checkout.querySelector(".ref-total-note").textContent = y(
            "cart.prices_currency_description",
            { currency: this.state.currency }
          ));
        let h = this.checkout.querySelector(".ref-summary-total");
        (h.textContent = this.formatMoney(this.state.total)),
          (this.taxNote.style.display = "none");
        let d = this.checkout.querySelector(".ref-taxes");
        if (
          ((d.style.display = "none"),
          (this.fileExemptionInput.disabled = !0),
          (this.textExemptionInput.disabled = !0),
          this.state.taxes)
        ) {
          let x = this.state.taxes.details,
            P = x.taxRate,
            F = d.querySelectorAll("span");
          if (
            ((F[0].textContent =
              `${P.name} (${P.rate}%)` +
              (x.exemption ? " \u2013 " + x.exemption : "")),
            (F[1].textContent = this.formatMoney(this.state.taxes.amount)),
            (d.style.display = "block"),
            x.exemptionType)
          ) {
            this.taxNote.style.display = "block";
            let Tn = this.node.querySelector(
                ".ref-tax-note .ref-field-collapsible"
              ),
              mt = this.taxNote.querySelector(".ref-tax-exemption-file"),
              gt = this.taxNote.querySelector(".ref-tax-exemption-text");
            (mt.style.display = "none"), (gt.style.display = "none");
            let j = this.state.taxExemption;
            if (x.exemptionType == "file") {
              (mt.style.display = "block"),
                (this.fileExemptionInput.disabled = !1);
              let yt = this.taxNote.querySelector(".ref-new-tax-file");
              yt.style.display = "block";
              let vt = this.taxNote.querySelector(".ref-old-tax-file");
              vt.style.display = "none";
              let bt = this.taxNote.querySelector(".ref-tax-file-dl");
              (bt.href = "#"),
                j &&
                  j.download &&
                  ((yt.style.display = "none"),
                  (vt.style.display = "block"),
                  (bt.href = j.download));
            }
            x.exemptionType == "vat_number" &&
              ((gt.style.display = "block"),
              (this.textExemptionInput.disabled = !1),
              (this.textExemptionInput.value = ""),
              j &&
                j.vat_number &&
                ((this.textExemptionInput.value =
                  j.vat_number.input || j.vat_number.number),
                j.vat_number.status == "invalid" &&
                  this.showFormErrors({
                    "tax-exemption-text": "cart.errors.vat_number_invalid",
                  }),
                j.status == "unvalidated" &&
                  this.showFormErrors({
                    "tax-exemption-text":
                      "cart.errors.vat_number_validation_fail",
                  })));
          }
        }
        let p = this.checkout.querySelector(".ref-links");
        p.innerHTML = "";
        for (let x of this.getFooterLinks()) p.append(x);
        let u = e.querySelector(".ref-phone-input");
        u && !this.state.collectPhone && u.remove();
        let m = this.hasPhysicalProducts(),
          v = !m,
          b = m && this.offersShipping(),
          _ = m && this.offersLocalPickup(),
          C = b && _,
          S = e.querySelector(".ref-heading-delivery"),
          B = e.querySelector(".ref-delivery-unavailable"),
          U = e.querySelector(".ref-delivery-card"),
          $ = U.querySelectorAll(
            '.ref-delivery-card input[name="delivery-method"]'
          );
        (S.style.display = "none"),
          (B.style.display = "none"),
          (U.style.display = "none");
        for (let x of $) x.disabled = !0;
        let I = e.querySelector(".ref-digital-delivery");
        (I.style.display = "none"), (I.disabled = !0);
        let M = e.querySelector(".ref-customer-name-input");
        if (
          ((M.style.display = "none"),
          (M.querySelector("input").disabled = !0),
          (this.activeDeliveryTab == "pickup" || v) &&
            ((M.style.display = "block"),
            (M.querySelector("input").disabled = !1)),
          m &&
            !this.canDeliver() &&
            ((S.style.display = "block"),
            (B.style.display = "block"),
            (B.textContent = y("cart.errors.delivery_unavailable"))),
          b || _)
        ) {
          (S.style.display = "block"), (U.style.display = "block");
          for (let x of $) x.disabled = !1;
          C && U.classList.add("tabbable");
        }
        let q = e.querySelector(".ref-local-pickup-tab");
        if (((q.style.display = "none"), _)) {
          (q.style.display = "block"),
            q.classList.remove("open"),
            (q.querySelector(".ref-tab-toggle input").checked = !1),
            (q.querySelector("fieldset.ref-tab-content").disabled = !0),
            this.activeDeliveryTab == "pickup" &&
              (q.classList.add("open"),
              (q.querySelector(".ref-tab-toggle input").checked = !0),
              (q.querySelector("fieldset.ref-tab-content").disabled = !1)),
            (this.locationsHolder.innerHTML = "");
          for (let x = 0, P = this.state.locations; x < P.length; x++)
            this.locationsHolder.append(this.renderStoreLocation(P[x], x));
          this.locationsHolder.append(
            c('<div class="ref-validation-error"></div>')
          ),
            C || (S.textContent = y("pickup_at_store"));
        }
        let N = e.querySelector(".ref-shipping-tab");
        if (
          ((N.style.display = "none"),
          b &&
            (e
              .querySelector(".ref-shipping-address-holder")
              .append(this.shippingAddressWidget.update(!0, !0)),
            (N.style.display = "block"),
            N.classList.remove("open"),
            (N.querySelector(".ref-tab-toggle input").checked = !1),
            (N.querySelector("fieldset.ref-tab-content").disabled = !0),
            (this.shippingMethodHeading.style.display = "none"),
            (this.shippingMethodHolder.innerHTML = ""),
            this.activeDeliveryTab == "shipping" &&
              (N.classList.add("open"),
              (N.querySelector(".ref-tab-toggle input").checked = !0),
              (N.querySelector("fieldset.ref-tab-content").disabled = !1),
              this.isShippingFilled())))
        )
          if (this.canShip()) {
            this.shippingMethodHeading.style.display = "block";
            for (let x = 0, P = this.state.shipping; x < P.length; x++)
              this.shippingMethodHolder.append(
                this.renderShippingMethod(P[x], x, !1)
              );
            this.shippingMethodHolder.append(
              c('<div class="ref-validation-error"></div>')
            );
          } else
            this.showFormErrors({
              "shipping-country": "cart.errors.address_not_supported",
            });
        v &&
          ((I.style.display = "block"),
          (I.disabled = !1),
          e
            .querySelector(".ref-digital-address-holder")
            .append(this.digitalAddressWidget.update(!0, !0)),
          (this.billingVisible = !1)),
          (this.activeDeliveryTab == "pickup"
            ? e.querySelector(
                ".ref-local-pickup-tab .ref-billing-address-holder"
              )
            : e.querySelector(".ref-shipping-tab .ref-billing-address-holder")
          ).append(this.billingAddressWidget.update(!0, !0));
        for (let x of this.node.querySelectorAll(".ref-add-billing"))
          (x.style.display = "inline-block"),
            this.billingVisible && (x.style.display = "none");
        for (let x of this.node.querySelectorAll(
          "fieldset.ref-billing-address"
        ))
          (x.style.display = "none"),
            (x.disabled = !0),
            this.billingVisible &&
              ((x.style.display = "block"), (x.disabled = !1));
        let K = Object.entries(this.state.paymentProviders).sort(
            (x, P) => P[1].order - x[1].order
          ),
          ie = this.node.querySelector(".ref-heading-payment");
        (ie.style.display = "none"),
          (K.some((x) => x[1].supported) || this.hasZeroValue()) &&
            (ie.style.display = "block");
        let Me = this.node.querySelector(".ref-paypal-payment-holder");
        if (
          ((Me.style.display = "block"),
          (!this.isPaypalSupported() ||
            ((ft = this.state.vacationMode) == null ? void 0 : ft.enabled) ||
            this.hasZeroValue()) &&
            (Me.style.display = "none"),
          this.activeDeliveryTab == "pickup" &&
            this.chosenStoreLocation >= 0 &&
            K.some((x) => x[1].supported && x[1].provider != "paypal") &&
            (Me.style.display = "none"),
          (this.standardPaymentButtonHolder.innerHTML = ""),
          this.hasZeroValue())
        ) {
          let x = document.createElement("div");
          (x.className = "ref-button ref-payment-button"),
            (x.dataset.method = "zero-value-cart"),
            (x.textContent = y("cart.complete_order")),
            this.standardPaymentButtonHolder.append(x);
        } else
          for (let [x, P] of K)
            if (P.provider != "paypal") {
              if (
                P.provider == "stripe" &&
                P.supported &&
                P.paymentOptions.length
              )
                for (let F of P.paymentOptions)
                  F.id == "card"
                    ? (this.standardPaymentButtonHolder.append(
                        this.renderPaymentButton(
                          y("credit_card"),
                          "card",
                          "stripe"
                        )
                      ),
                      this.standardPaymentButtonHolder.append(
                        this.renderPaymentButton(
                          "Apple Pay / Google Pay",
                          "apple-pay-google-pay",
                          "stripe"
                        )
                      ))
                    : this.standardPaymentButtonHolder.append(
                        this.renderPaymentButton(F.name, F.id, "stripe")
                      );
              P.provider == "custom" &&
                this.standardPaymentButtonHolder.append(
                  this.renderPaymentButton(P.name, P.name, "custom", P.id)
                ),
                P.provider == "pay-in-store" &&
                  this.standardPaymentButtonHolder.prepend(
                    this.renderPaymentButton(
                      y("pay_on_pickup"),
                      "in-store",
                      "pay-in-store"
                    )
                  );
            }
        let ut = this.node.querySelector(".ref-auth-button-holder"),
          pt = this.node.querySelector(".ref-auth-save-address");
        if (
          ((ut.style.display = "none"),
          (pt.style.display = "none"),
          this.state.signInProviders.length &&
            ((ut.style.display = "block"),
            this.authButton.update(),
            Reflow.auth.isSignedIn() && (pt.style.display = "block")),
          this.isDemoMode())
        ) {
          this.node
            .querySelectorAll(".ref-payment-button")
            .forEach((x) => x.classList.add("button-demo-payment")),
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
          i.append("checkout-step", this.step),
          Reflow.auth.isSignedIn() &&
            i.append("auth-account-id", Reflow.auth.profile.id);
        let a = await E(
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
          let a = await E(
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
          let s = await E(
            `/update-paypal-shipping/${this.key}/`,
            { method: "POST", body: i },
            !1
          );
          return r.resolve();
        } catch (i) {
          return (
            z(V(i), "Couldn't update PayPal shipping"),
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
          this.applyDiscountCodeButton.setAttribute("data-disabled-click", !0);
      }
      hideLoading() {
        this.loadingOverlay.classList.remove("visible"),
          this.node
            .querySelectorAll(".ref-payment-button")
            .forEach((e) => e.removeAttribute("data-disabled-click")),
          this.applyDiscountCodeButton.removeAttribute("data-disabled-click");
      }
      saveFocus() {
        this.savedFocusTarget = document.activeElement;
      }
      restoreFocus() {
        this.savedFocusTarget &&
          (this.savedFocusTarget.focus(), (this.savedFocusTarget = null));
      }
      getDeliveryDate(e) {
        var r = new Date(new Date().getTime() + 1e3 * 60 * 60 * 24 * e),
          i = { month: "long", day: "numeric" };
        return r.toLocaleDateString(Reflow.locales.locale, i);
      }
      getTaxPricingType() {
        return this.state.taxes ? this.state.taxes.details.pricingType : null;
      }
      async update() {
        if ((this.saveFocus(), this.resetView(), !G.steps.includes(this.step)))
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
            this.showMessage(y("cart.errors.unavailable"));
            return;
          }
        if (!this.arePaymentProvidersAvailable()) {
          this.showMessage("This store has no payment methods configured.");
          return;
        }
        if (this.onlyPaypalNoDelivery()) {
          this.showMessage(
            "This store offers only PayPal payments but does not support product delivery. Checkout unavailable."
          );
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
    Le = G;
  w(Le, "type", "shopping-cart"),
    w(Le, "steps", ["cart", "details", "instructions"]);
  var wr = Le;
  var et = class extends A {
    constructor(e, r = {}) {
      super(e, r);
      (e.innerHTML =
        '<div class="reflow-add-to-cart ref-product-controls"></div>'),
        (this.button = c('<a href="#" class="ref-button"></a>')),
        (this.controls = e.querySelector(".ref-product-controls")),
        (this.onVariantChange = r.onVariantChange),
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
          let n = new FormData(),
            o = [];
          for (let l of this.node.querySelectorAll(
            ".ref-personalization-checkbox:checked, .ref-personalization.ref-required"
          )) {
            let h = l.closest(".ref-personalization");
            if (!h || !h.id) continue;
            let d = { id: h.id },
              p = h.querySelector("input[type=text]");
            p && (d.inputText = p.value.trim());
            let u = h.querySelector("select");
            u && (d.selected = u.value.trim());
            let m = h.querySelector("input[type=file]");
            if (m) {
              let v = m.files[0];
              if (!v) continue;
              let b =
                "pers_file_" +
                Math.floor(Math.random() * 999999).toString() +
                Date.now();
              (d.filename = v.name),
                (d.filehash = b),
                n.append(`personalization_files[${b}]`, v);
            }
            o.push(d);
          }
          o.length && n.append("personalization", JSON.stringify(o));
          try {
            let l = await Reflow.cart.addProduct(r, a, i, n),
              h = this.getCartURL(),
              d = { type: "success", title: y("add_to_cart.success") };
            h &&
              ((d.button = y("add_to_cart.see_cart")),
              (d.buttonAction = () => {
                window.location.href = h;
              })),
              (this.notification = new D(
                c('<div data-reflow-type="toast"></div>'),
                d
              )),
              this.notification.init(),
              this.notification.show(),
              this.setQuantity(1);
            let p = this.node.querySelector(".ref-quantity-widget input");
            p && (p.value = 1),
              (this.personalizationValues = {}),
              this.update();
          } catch (l) {
            z(V(l, "system"), y("add_to_cart.error")),
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
        let a = r.querySelector("input[type=text], select, input[type=file]");
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
      if (e.target.matches(".ref-personalization-dropdown")) {
        let r = e.target.closest(".ref-personalization");
        this.setPersonalizationInput(r.id, "dropdown", e.target.value);
      }
      if (e.target.matches(".ref-personalization-file-input")) {
        let r = e.target.files[0] || null;
        if (r && r.size > 10 * 1e3 * 1e3) {
          e.target.value = "";
          let i = new D(c('<div data-reflow-type="toast"></div>'), {
            type: "error",
            title: "File Upload Error",
            description: "File size must be under 10 MB.",
          });
          i.init(), i.show();
        }
      }
    }
    getAPIEndpoint() {
      if (!this.node.dataset.reflowProduct)
        throw new Error("ID for product missing");
      return "/products/" + this.node.dataset.reflowProduct;
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
      if (!e)
        try {
          e = await this.fetchData();
        } catch (a) {
          throw (
            (a.status == 404
              ? (this.node.textContent = y("product.missing"))
              : (this.node.textContent = "Unable to load product."),
            a)
          );
        }
      let r = this.getAddToCartText() || y("add_to_cart.button_text");
      e.inStock || (r = y("out_of_stock")),
        this.setText(r),
        this.setProduct(e.id),
        this.activate();
      let i = this.parseShowString();
      if (((this.controls.innerHTML = ""), !e.inStock)) this.deactivate();
      else if (e.vacationMode && e.vacationMode.enabled) {
        if ((this.deactivate(), e.vacationMode.message.length)) {
          let a = c('<div class="ref-store-message"></div>');
          (a.textContent = e.vacationMode.message), this.node.prepend(a);
        }
      } else {
        if (
          (i.full || i.variants) &&
          e.variants.variants &&
          e.variants.variants.length
        ) {
          let a = c('<div class="ref-variant"></div>'),
            s = c("<label></label>"),
            n = c("<span></span>");
          (n.textContent = e.variants.option_name || ""), s.append(n);
          let o = c(
            '<select class="ref-form-control ref-field-variants" name="variant-state" required></select>'
          );
          for (let l of e.variants.variants) {
            let h = c("<option></option>");
            (h.value = l.id),
              (h.textContent = l.name),
              l.in_stock || (h.disabled = !0),
              o.append(h);
          }
          this.getVariant() && (o.value = this.getVariant()),
            o.value && this.setVariant(o.value),
            s.append(o),
            a.append(s),
            this.controls.append(a);
        }
        if (i.full || i.quantity) {
          let a = c("<span></span>"),
            s = new ee(a, {
              inStock: !0,
              onChange: (o) => {
                this.setQuantity(o.getQuantity());
              },
            });
          s.init();
          let n = Math.min(e.availableQuantity, e.maxQty);
          if (this.getVariant() && e.variants.variants) {
            let o = e.variants.variants.find((l) => l.id == this.getVariant());
            o &&
              ((n = Math.min(o.availableQuantity, e.maxQty)),
              s.setVariant(this.getVariant()));
          }
          s.setProduct(this.getProduct()),
            s.setMaxQuantity(n),
            s.setQuantity(this.getQuantity()),
            s.update(),
            this.controls.append(a);
        }
        if (
          e.personalization &&
          e.personalization.length &&
          (i.full || i.personalization)
        ) {
          let a = c(
            '<form class="ref-personalization-holder ref-personalization-form"></form>'
          );
          for (let s of e.personalization) {
            let n = c('<div class="ref-personalization"></div>');
            n.id = s.id;
            let o = !!this.getPersonalizationInput(s.id, "checkbox"),
              l = s.required,
              h = c('<span class="ref-row"></span>'),
              d = c("<div></div>"),
              p = c('<label class="ref-personalization-label"></label>');
            if (((p.textContent = s.name), d.append(p), h.append(d), !l)) {
              let u = c(
                '<input type="checkbox" class="ref-form-control ref-personalization-checkbox"></input>'
              );
              (u.checked = o), p.append(u);
              let m = c('<span class="ref-price"></span>');
              (m.textContent =
                s.price > 0 ? H(s.price, e.currency) : y("price_free")),
                h.append(m);
            }
            if ((n.append(h), s.instructions && s.instructions.length)) {
              let u = c('<p class="ref-instructions"></p>');
              (u.textContent = s.instructions),
                (u.style.display = o || l ? "block" : "none"),
                n.append(u);
            }
            if (s.type == "text") {
              let u = c(
                '<input type="text" class="ref-form-control ref-personalization-text-input"></input>'
              );
              (u.style.display = o || l ? "block" : "none"),
                (o || l) && (u.required = !0),
                s.min && u.setAttribute("minlength", s.min),
                s.max && u.setAttribute("maxlength", s.max),
                n.append(u);
              let m = this.getPersonalizationInput(s.id, "text");
              m && (u.value = m);
            }
            if (s.type == "dropdown") {
              let u = c(
                '<select class="ref-form-control ref-personalization-dropdown"></select>'
              );
              (u.style.display = o || l ? "block" : "none"),
                (o || l) && (u.required = !0);
              let m = s.dropdownOptions.split(",");
              for (let b of m) {
                if (((b = b.trim()), !b)) continue;
                let _ = c("<option></option>");
                (_.value = b), (_.text = b), u.append(_);
              }
              n.append(u);
              let v = this.getPersonalizationInput(s.id, "dropdown");
              v && (u.value = v);
            }
            if (s.type == "file") {
              let u = c(
                '<input type="file" class="ref-form-control ref-personalization-file-input"></input>'
              );
              (u.style.display = o || l ? "block" : "none"),
                (o || l) && (u.required = !0),
                s.filetypes && s.filetypes.length && (u.accept = s.filetypes),
                n.append(u);
            }
            s.required &&
              (n.classList.add("ref-required"),
              s.type == "text" &&
                p.append(c(`<span title=${y("required")} > *</span>`)),
              s.type == "checkbox" &&
                p.append(
                  c(
                    '<span class="ref-check"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg></span>'
                  )
                )),
              a.append(n);
          }
          this.controls.append(a);
        }
      }
      if (
        (i.full || i.button) &&
        (this.controls.append(this.button), e.minQty > 0)
      ) {
        let a = c('<p class="ref-min-qty-message"></p>');
        (a.textContent = y("add_to_cart.min_quantity_per_order", {
          quantity: e.minQty,
        })),
          this.controls.append(a);
      }
    }
  };
  w(et, "type", "add-to-cart");
  var Te = et;
  var Oi =
      /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/,
    Cr = (t) => t.match(Oi)[1],
    Sr = (t) => {
      let e = Cr(t);
      return {
        sm: "https://img.youtube.com/vi/" + e + "/default.jpg",
        md: "https://img.youtube.com/vi/" + e + "/mddefault.jpg",
        lg: "https://img.youtube.com/vi/" + e + "/hqdefault.jpg",
      };
    },
    tt = (t) => "https://www.youtube.com/embed/" + Cr(t),
    Er = (t, e, r = []) => {
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
  var ce = class extends A {
      constructor(e, r) {
        super(e, r);
        let i = c('<span data-reflow-type="add-to-cart"></span>');
        this.addToCart = new Te(i, { onVariantChange: this.update.bind(this) });
      }
      init() {
        this.node.addEventListener("click", this.onClick.bind(this)),
          this.addToCart.init();
      }
      onClick(e) {
        if (e.target.matches(".ref-thumbnails .ref-image")) {
          let r = c(".ref-thumbnails .ref-image", this.node),
            i = Array.from(r).indexOf(e.target);
          this.previewItem(i);
        }
        e.target.closest(".ref-preview") &&
          this.gallery &&
          this.gallery.openAt(this.activeIndex);
      }
      previewItem(e = 0) {
        let r = c(".ref-preview .ref-image", this.node),
          i = r[this.activeIndex];
        i &&
          i.dataset.reflowPreviewType === "video" &&
          Er("preview-" + this.activeIndex, "pauseVideo"),
          (this.activeIndex = e);
        let a = c(".ref-thumbnails .ref-image", this.node),
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
        if (e) return "/products/" + e;
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
          : (ce._glightboxPromise ||
              (ce._glightboxPromise = new Promise((e, r) => {
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
            ce._glightboxPromise);
      }
      async update() {
        let e,
          r = null;
        try {
          e = await this.fetchData();
        } catch (o) {
          throw (
            (o.status == 404
              ? (this.node.textContent = y("product.missing"))
              : (this.node.textContent = "Unable to load product."),
            o)
          );
        }
        e.variants &&
          e.variants.variants &&
          ((r = e.variants.variants.find((o) => !!o.in_stock)),
          this.addToCart.getVariant() &&
            (r = e.variants.variants.find(
              (o) => o.id == this.addToCart.getVariant()
            )));
        let i = this.parseShowString(),
          a = c('<div class="reflow-product"></div>');
        if (i.full || i.media) {
          let o = c('<div class="ref-media"></div>'),
            l = c('<div class="ref-preview"></div>');
          if ((o.append(l), !e.media.length)) {
            var s = c('<img class="ref-image active">');
            (s.src = e.image.md), l.append(s);
          }
          let h = [],
            d = this.activeIndex || 0,
            p = e.media.length > 1,
            u = c('<div class="ref-thumbnails"></div>');
          if ((p && o.append(u), r)) {
            let m = e.media.findIndex((v) => v.id == r.image);
            d = m >= 0 ? m : d;
          }
          for (let m = 0; m < e.media.length; m++) {
            let v = e.media[m],
              b = c('<div class="ref-thumbnail"></div>'),
              _ = c('<div class="ref-image"></div>');
            _.dataset.reflowPreviewType = v.type;
            let C;
            if (v.type == "image")
              (_.style.backgroundImage = `url('${v.src.sm}')`),
                (_.dataset.reflowPreview = v.url),
                (C = c('<img class="ref-image">')),
                (C.src = v.src.md),
                (C.dataset.reflowPreviewType = v.type),
                h.push({ href: v.src.lg, type: "image" });
            else {
              let S = Sr(v.url);
              _.classList.add("ref-video"),
                (_.style.backgroundImage = `url('${S.sm}')`),
                (_.dataset.reflowPreview = tt(v.url)),
                (C = c(`
						<iframe id="preview-${m}"
							class="ref-image ref-video"
							frameborder="0"
							allowfullscreen="true"
							src="${tt(v.url)}?enablejsapi=1">
						</iframe>`)),
                (C.dataset.reflowPreviewType = v.type),
                h.push({
                  href: v.url,
                  type: "video",
                  source: "youtube",
                  width: 900,
                });
            }
            l.append(C),
              b.append(_),
              u.append(b),
              d == m &&
                ((this.activeIndex = m),
                _.classList.add("active"),
                C.classList.add("active"));
          }
          if ((this.renderLightboxGallery(h), e.promoBadge)) {
            let m = c('<div class="ref-promo-badge"></div>');
            (m.textContent = e.promoBadge), o.append(m);
          }
          a.append(o);
        }
        let n = c('<div class="ref-product-data"></div>');
        if ((a.append(n), this.renderTestModeBadge(n), i.full || i.name)) {
          let o = c('<h2 class="ref-name"></h2>');
          (o.textContent = e.name), n.append(o);
        }
        if (i.full || i.categories) {
          let o = c('<div class="ref-categories"></div>');
          for (let l of e.categories) {
            let h = c('<span class="ref-category"></span>');
            this.node.dataset.reflowCategoryLink &&
              ((h = c('<a class="ref-category"></a>')),
              (h.href = this.node.dataset.reflowCategoryLink.replace(
                /\{id\}/g,
                l.id
              ))),
              (h.textContent = l.name),
              o.append(h);
          }
          n.append(o);
        }
        if (i.full || i.price) {
          let o = c('<strong class="ref-price"></strong>');
          if (
            ((o.textContent = H(e.priceInt, e.currency)),
            e.priceRange.length > 1 &&
              r &&
              (o.textContent = H(r.price, e.currency)),
            e.onSale.enabled)
          ) {
            o.classList.add("ref-on-sale");
            let l = c('<s class="ref-original-price"></s>');
            (l.textContent = H(e.onSale.originalPrice, e.currency)),
              e.priceRange.length > 1 &&
                r &&
                r.original_price &&
                (l.textContent = H(r.original_price, e.currency)),
              o.prepend(l);
          }
          n.append(o);
        }
        if (e.inventoryType == "advanced" && e.showQuantity) {
          let o = c('<span class="ref-qty-available"></span>');
          r
            ? (o.textContent = y("product.left_in_stock", {
                numberItems: r.availableQuantity,
              }))
            : (o.textContent = y("product.left_in_stock", {
                numberItems: e.availableQuantity,
              })),
            n.append(o);
        }
        if (
          ((i.full || i["add-to-cart"]) &&
            (this.addToCart.setCartURL(this.getCartURL()),
            this.addToCart.setAddToCartText(this.getAddToCartText()),
            this.addToCart.update(e),
            n.append(this.addToCart.node)),
          i.full || i.description)
        ) {
          let o = c('<div class="ref-description"></div>');
          (o.innerHTML = e.descriptionHTML), n.append(o);
        }
        (this.node.innerHTML = ""), this.node.append(a);
      }
    },
    rt = ce;
  w(rt, "type", "product");
  var Pe = rt;
  var it = class extends A {
    constructor(e, r = {}) {
      super(e, r);
      this.parent = r.parent;
    }
    init() {
      this.node.addEventListener("click", this.onClick.bind(this));
    }
    onClick(e) {
      let r = e.target.closest(".ref-page-item");
      if (r) {
        e.preventDefault();
        let i = r.dataset.reflowPage,
          a = new URL(window.location);
        a.searchParams.set("page", i),
          history.pushState({ page: i }, document.title, a),
          this.parent.update();
      }
    }
    renderPaginationItem(e = 1, r = "1", i = !1, a = !1, s = "") {
      let n = c('<li class="ref-page-item"></li>');
      n.dataset.reflowPage = e;
      let o = i
        ? c('<span class="ref-page-link"></span>')
        : c('<a class="ref-page-link"></a>');
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
    update(e = {}) {
      let r = e.current_page,
        i = e.per_page,
        a = e.total,
        s = Math.ceil(a / i);
      if (s <= 1) return document.createDocumentFragment();
      let n = c('<ul class="ref-pagination"></ul>'),
        o = r - 1 <= 0,
        l = o ? 1 : r - 1,
        h = r + 1 > s,
        d = h ? s : r + 1;
      n.append(this.renderPaginationItem(l, "", !1, o, "ref-prev-btn"));
      for (var p = 0; p < s; p++)
        n.append(this.renderPaginationItem(p + 1, p + 1, r === p + 1));
      return (
        n.append(this.renderPaginationItem(d, "", !1, h, "ref-next-btn")),
        (this.node.innerHTML = ""),
        this.node.append(n),
        this.node
      );
    }
  };
  w(it, "type", "pagination");
  var ke = it;
  var at = class extends A {
      constructor(e, r = {}) {
        super(e, r);
        (this.backdrop = c('<div class="ref-backdrop"></div>')),
          (this.productPreview = c(`<div class="ref-product-preview">
			<div class="ref-product-preview-header">
				<div class="ref-title"></div>
				<div class="ref-close-button">\xD7</div>
			</div>
			<div class="ref-product-preview-content"></div>
		</div>`)),
          (this.buttonToProduct = new WeakMap()),
          (this.pagination = new ke(
            c('<div data-reflow-type="pagination"></div>'),
            { parent: this }
          ));
      }
      init() {
        this.node.addEventListener("click", this.onClick.bind(this)),
          window.addEventListener("popstate", (e) => {
            this.update();
          }),
          this.pagination.init();
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
          h = `?page=${i}&perpage=${a}`;
        return (
          s && (h += "&category=" + parseInt(s, 10)),
          n && (h += "&order=" + encodeURIComponent(n)),
          o && (h += "&search=" + encodeURIComponent(o)),
          l && (h += "&similarToProd=" + parseInt(l, 10)),
          "/products/" + h
        );
      }
      onClick(e) {
        e.target.closest(".ref-backdrop") &&
          (e.preventDefault(), this.hidePreview());
        let i = e.target.closest(".preview-toggle");
        if (i) {
          e.preventDefault();
          let s = this.buttonToProduct.get(i);
          if (!s) return;
          let n = this.getCartURL(),
            o = c('<div data-reflow-type="product"></div>'),
            l = new Pe(o);
          (o.dataset.reflowProduct = s.id),
            (o.dataset.reflowShow = "media,price,add-to-cart"),
            n && l.setCartURL(n),
            l.init(),
            l.update();
          let h = c(
              ".ref-product-preview-header .ref-title",
              this.productPreview
            )[0],
            d = c(".ref-product-preview-content", this.productPreview)[0];
          (h.textContent = s.name),
            (d.innerHTML = ""),
            d.append(o),
            this.showPreview();
        }
        e.target.closest(".ref-close-button") &&
          (e.preventDefault(), this.hidePreview());
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
          this.node.dataset.reflowAddtocartText || y("add_to_cart.button_text")
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
      async update() {
        let e;
        try {
          e = await this.fetchData();
        } catch (n) {
          console.error("Reflow:", n);
        }
        if (!e || !e.data.length) {
          this.node.textContent = y("product_list.empty");
          return;
        }
        let r = c('<div class="reflow-product-list"></div>'),
          i = c('<div class="ref-products"></div>'),
          a = this.node.dataset.reflowLayout;
        a && at.possibleLayouts.includes(a) && r.classList.add("ref-" + a);
        let s = this.parseShowString();
        for (let n of e.data) {
          let o = c('<div class="ref-product"></div>');
          this.node.dataset.reflowProductLink &&
            ((o = c('<a class="ref-product"></a>')),
            (o.href = this.node.dataset.reflowProductLink
              .replace(/\{id\}/g, n.id)
              .replace(/\{handle\}/g, n.handle || "")));
          let l = c('<div class="ref-product-data"></div>'),
            h = !1,
            d = c('<div class="ref-product-info"></div>'),
            p = !1;
          if (s.full || s.image) {
            let u = c('<div class="ref-media">'),
              m = c('<img class="ref-image">');
            if (
              ((m.src = n.image.md),
              (m.loading = "lazy"),
              u.append(m),
              n.promoBadge)
            ) {
              let v = c('<div class="ref-promo-badge"></div>'),
                b = n.promoBadge;
              (v.textContent = b), u.append(v);
            }
            o.append(u);
          }
          if (s.full || s.name) {
            let u = c('<h5 class="ref-name"></h5>');
            (u.textContent = n.name), d.append(u), (p = !0), (h = !0);
          }
          if (s.full || s.excerpt) {
            let u = c('<p class="ref-excerpt"></p>');
            (u.textContent = n.excerpt), d.append(u), (p = !0), (h = !0);
          }
          if ((p && l.append(d), s.full || s.price)) {
            let u = c('<strong class="ref-price"></strong>'),
              m = c('<s class="ref-original-price"></s>');
            if (n.priceRange.length > 1 && n.variants) {
              let v = n.variants.variants.filter((_) => !!_.in_stock);
              v.length || (v = n.variants.variants);
              let b = v.sort((_, C) => _.price - C.price)[0];
              (u.textContent = H(b.price, n.currency)),
                n.onSale.enabled &&
                  !!b.original_price &&
                  (u.classList.add("ref-on-sale"),
                  (m.textContent = H(b.original_price, n.currency)),
                  u.prepend(m));
            } else
              (u.textContent = H(n.priceInt, n.currency)),
                n.onSale.enabled &&
                  (u.classList.add("ref-on-sale"),
                  (m.textContent = H(n.onSale.originalPrice, n.currency)),
                  u.prepend(m));
            l.append(u), (h = !0);
          }
          if ((h && o.append(l), n.inStock)) {
            if (s.full || s["add-to-cart"]) {
              let u = c('<div class="ref-addons"></div>'),
                m = c('<a href="#" class="ref-button preview-toggle"></a>');
              (m.textContent = this.getAddToCartText()),
                this.buttonToProduct.set(m, n),
                u.append(m),
                o.append(u);
            }
          } else {
            let u = c('<div class="ref-addons out-of-stock"></div>'),
              m = c('<a href="#" class="ref-button inactive"></a>');
            (m.textContent = y("out_of_stock")), u.append(m), o.append(u);
          }
          i.append(o);
        }
        if ((r.append(i), s.full || s.pagination)) {
          let n = this.pagination.update(e.meta);
          r.append(n);
        }
        (s.full || s["add-to-cart"]) && r.append(this.productPreview),
          (this.node.innerHTML = ""),
          this.node.append(r),
          this.renderTestModeBadge(this.node);
      }
    },
    Ae = at;
  w(Ae, "type", "product-list"), w(Ae, "possibleLayouts", ["list", "cards"]);
  var Lr = Ae;
  var st = class extends A {
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
      (this.cancel.style.display = this.input.value.length ? "block" : "none"),
        (this.input.placeholder =
          this.node.dataset.reflowPlaceholder ||
          y("product_search.placeholder")),
        (this.searchBtn.style.display =
          this.node.dataset.reflowShowButton == "true" ? "block" : "none"),
        (this.searchBtn.textContent =
          this.node.dataset.reflowButtonText || y("product_search.button"));
    }
  };
  w(st, "type", "product-search");
  var Tr = st;
  var nt = class extends A {
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
          i = c('<div class="reflow-category-list"></div>');
        r && nt.possibleLayouts.includes(r) && i.classList.add("ref-" + r);
        let a = c('<ul class="ref-categories"></ul>');
        i.append(a),
          this.buildListsRecursive(a, e),
          (this.node.innerHTML = ""),
          this.node.append(i);
      }
      isLinkHrefActive(e) {
        try {
          let r = new URL(e),
            i = new URL(window.location.href);
          if (r.origin !== i.origin || r.pathname !== i.pathname) return !1;
          for (let a of r.searchParams)
            if (!i.searchParams.has(a[0]) || i.searchParams.get(a[0]) !== a[1])
              return !1;
          return !0;
        } catch (r) {
          return !1;
        }
      }
      buildListsRecursive(e, r) {
        for (let i of r) {
          let a = c('<li class="ref-category"></li>'),
            s = i.subcategories;
          e.append(a);
          let n = c("<span></span>");
          if (
            (this.node.dataset.reflowCategoryLink &&
              ((n = c("<a></a>")),
              (n.href = this.node.dataset.reflowCategoryLink.replace(
                /\{id\}/g,
                i.id
              )),
              this.isLinkHrefActive(n.href) && n.classList.add("active")),
            (n.textContent = i.name),
            a.append(n),
            s && s.length)
          ) {
            this.node.dataset.reflowLayout !== "unstyled" &&
              a.classList.add("ref-dropdown-toggle");
            let o = c("<ul></ul>");
            a.append(o), this.buildListsRecursive(o, s);
          }
        }
      }
    },
    Ie = nt;
  w(Ie, "type", "category-list"),
    w(Ie, "possibleLayouts", ["unstyled", "horizontal-bar", "vertical-bar"]);
  var Pr = Ie;
  var ot = class extends A {
    constructor(e, r = {}) {
      super(e, r);
      w(this, "_state", null);
      w(this, "possibleTypes", ["dropdown", "sidebar"]);
      w(this, "backendUpdateTimeout", null);
      w(this, "pendingBackendUpdates", {});
      (this.backdrop = c('<div class="ref-backdrop"></div>')),
        (this.summary = c(`
			<div class="ref-summary">
				<div class="ref-summary-header">
					<h5 class="ref-summary-title">${g("cart")}</h5>
					<div class="ref-close-button">\xD7</div>
				</div>
				<div class="ref-summary-body">
					<div class="ref-loading-overlay"></div>
					<div class="ref-message">${g("cart.errors.empty")}</div>
					<div class="ref-cart-summary">
						<div class="ref-products"></div>
						<hr>
						<div class="ref-totals">
							<div class="ref-subtotal">
								<div class="ref-row"><span>${g("subtotal")}</span><span></span></div>
							</div>
							<div class="ref-shipping-taxes">${g("cart.subtotal_only")}</div>
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
        (this.scheduleRefresh = Se(this.refresh.bind(this), 250)),
        W("reflow-add-to-cart", this.scheduleRefresh),
        W("reflow-update-cart-product", this.scheduleRefresh),
        W("reflow-remove-cart-product", this.scheduleRefresh);
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
      return H(e, this.state.currencyConfig);
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
      let r = c(`
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
      let a = c(".ref-product-photo", r)[0];
      if (
        ((a.src = e.image.sm),
        (a.alt = i),
        (c(".ref-product-name", r)[0].textContent = i),
        e.inStock && e.quantity > e.availableQuantity
          ? (c(".ref-product-qty-message", r)[0].textContent = y(
              "cart.left_in_stock",
              { in_stock: e.availableQuantity }
            ))
          : e.inStock && e.quantity > e.maxQty
          ? (c(".ref-product-qty-message", r)[0].textContent = y(
              "cart.max_product_qty",
              { max_quantity: e.maxQty }
            ))
          : c(".ref-product-qty-message", r)[0].remove(),
        (c(".ref-product-total", r)[0].textContent = e.inStock
          ? this.formatMoney(e.price)
          : y("out_of_stock")),
        e.personalization && e.personalization.length)
      )
        try {
          r.dataset.personalization = JSON.stringify(
            e.personalization.map((h) => {
              let d = { id: h.id };
              return (
                h.inputText && (d.inputText = h.inputText),
                h.selected && (d.selected = h.selected),
                h.filename && (d.filename = h.filename),
                h.filehash && (d.filehash = h.filehash),
                d
              );
            })
          );
          let l = c(".ref-product-personalization-holder", r)[0];
          for (let h of e.personalization) {
            let d = c('<div class="ref-product-personalization"></div>'),
              p = `${h.name}${h.inputText ? ': "' + h.inputText + '"' : ""}${
                h.selected ? ': "' + h.selected + '" ' : ""
              }${h.filename ? ': "' + h.filename + '" ' : ""}`;
            (d.title = p),
              (p = p.length > 25 ? p.substring(0, 25) + "..." : p),
              (d.textContent = p),
              l.append(d);
          }
        } catch (l) {
          console.error("Reflow:", l);
        }
      let s = c("<div></div>"),
        n = new ee(s, {
          inStock: e.inStock,
          onChange: (l) => {
            let h = l.getProduct(),
              d = l.getQuantity(),
              p = l.getVariant(),
              u = new FormData(),
              m = r.dataset.personalization;
            m && m.length && u.append("personalization", m),
              Reflow.cart.scheduleAPICall(
                h + (p ? `-${p}` : "") + "-quantity",
                () => Reflow.cart.updateProduct(h, d, p, u)
              );
          },
        });
      n.init(),
        e.variant && n.setVariant(e.variant.id),
        n.setProduct(e.id),
        n.setMaxQuantity(Math.min(e.availableQuantity, e.maxQty)),
        n.setQuantity(e.quantity),
        n.update();
      let o = c(".ref-product-quantity", r)[0];
      return (
        o.append(n.node),
        o.append(c(`<div class="ref-product-remove">${g("remove")}</div>`)),
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
          this.productContainer.textContent = y("cart.errors.unavailable");
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
            s = y("close"),
            n = "#";
          if (!this.state.products.length)
            (r.style.display = "none"), (i.style.display = "block");
          else {
            for (let d of this.state.products)
              this.productContainer.append(this.renderProductCompact(d));
            let l = this.summaryBody.querySelector(".ref-subtotal");
            l.firstElementChild.children[1].textContent = this.formatMoney(
              this.state.subtotal
            );
            let h = this.getCartURL();
            h && ((a = "checkout"), (s = y("cart.checkout")), (n = h)),
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
  w(ot, "type", "view-cart");
  var kr = ot;
  var Ar = class {
      constructor() {
        w(this, "_state", null);
        w(this, "backendUpdateTimeout", null);
        w(this, "pendingBackendUpdates", {});
        this.localFormData = new Ir();
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
        return (await E("/carts/", { method: "POST" }, !1)).cartKey;
      }
      async fetch(e, r = {}) {
        let i = "",
          a = [];
        for (let s in r) a.push(`${s}=${r[s]}`);
        return (
          a.length && (i = "?" + a.join("&")),
          await E("/carts/" + e + i, {}, !1)
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
        let o = await E(n, { method: "POST", body: a });
        return (
          o.cartKey && (this.key = o.cartKey),
          Ee("reflow-add-to-cart", document, { productID: e }),
          (this.quantity = o.cartQuantity),
          o
        );
      }
      async updateProduct(e, r = 1, i, a) {
        try {
          let s = await E(
            `/update-cart-product/${this.key}/${e}/` + r + "/" + (i || ""),
            { method: "POST", body: a },
            !1
          );
          return (
            Ee("reflow-update-cart-product", document, { productID: e }),
            (this.quantity = s.cartQuantity),
            s
          );
        } catch (s) {
          z(V(s, "system"));
        }
      }
      async removeProduct(e, r, i) {
        let a = await E(
          `/remove-cart-product/${this.key}/${e}/` + (r || ""),
          { method: "POST", body: i },
          !1
        );
        return (
          Ee("reflow-remove-cart-product", document, { productID: e }),
          (this.quantity = a.cartQuantity),
          a
        );
      }
      async createPaypalOrder(e, r) {
        return (
          await E(`/create-paypal-order/${this.key}/`, { method: "POST" }, !1)
        ).orderID;
      }
      async capturePaypalOrder(e, r) {
        let i = new FormData();
        i.append("orderID", e.orderID);
        try {
          return await E(
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
          let s = await E(
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
    Ir = class {
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
    Rr = Ar;
  var lt = class extends A {
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
        r = await E(e, {}, !1);
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
      return H(e, this.currencyConfig);
    }
    getDeliveryDate(e) {
      var r = new Date(e),
        i = { month: "long", day: "numeric" };
      return r.toLocaleDateString(Reflow.locales.locale, i);
    }
    getCustomerFacingStatus(e) {
      let r = "pending",
        i = {
          failed: "payment_failed",
          refunded: "refunded",
          returned: "returned",
          delivered: "received",
          ready_for_pickup: "ready_for_pickup",
          shipped: "shipped",
          paid: "processed",
          pending: "pending",
          unfulfilled: "pending",
        };
      for (let a of Object.entries(i))
        if (a[0] == e.fulfillment_status || a[0] == e.payment_status) {
          r = a[1];
          break;
        }
      return r;
    }
    appendAddressLines(e, r) {
      if (Array.isArray(e))
        for (let i of e) {
          if (i.name == "Name") continue;
          let a = c("<span></span>");
          (a.textContent = y(i.name) + ": " + i.val), r.append(a);
        }
      else
        for (let i of ["address", "city", "postcode", "state", "country"])
          if (e[i]) {
            let a = c("<span></span>");
            (a.textContent = y(i) + ": " + e[i]), r.append(a);
          }
    }
    async update() {
      var u;
      let e,
        r = c('<div class="reflow-order-status">Loading</div>');
      (this.node.innerHTML = ""), this.node.append(r);
      try {
        e = await this.fetchData();
      } catch (m) {
        throw m.missingParams
          ? ((r.textContent = y("order_status.check_email")), m)
          : (this.retries++,
            this.retries >= this.maxRetries
              ? ((r.textContent = y("order_status.check_email")), m)
              : (setTimeout(() => {
                  this.update();
                }, this.retryTimeout),
                m));
      }
      r.innerHTML = "";
      let i = c('<div class="col"></div>'),
        a = this.parseShowString(),
        s = c('<div class="ref-order-info"></div>');
      this.renderTestModeBadge(s);
      let n = c("<h2></h2>");
      (n.innerHTML = g("order_status.order", { orderId: e.id })), s.append(n);
      let o = c('<div class="ref-order-line ref-status"></div>');
      (o.innerHTML =
        "<b>" +
        g("order_status.status") +
        "</b>" +
        g("order_status." + this.getCustomerFacingStatus(e))),
        s.append(o);
      let l = c('<div class="ref-order-line ref-created"></div>'),
        h = new Date(e.created_at * 1e3);
      if (
        ((l.innerHTML = `<b>${g(
          "order_status.created"
        )}</b>${h.toLocaleString()}`),
        s.append(l),
        e.payment_status == "pending" && e.payment_instructions)
      ) {
        let m = c('<div class="ref-order-payment-instructions"></div>');
        (m.innerHTML = e.payment_instructions),
          m.prepend(c("<br>")),
          m.prepend(c(`<b>${g("payment")}</b>`)),
          s.append(m);
      }
      let d = i.cloneNode();
      if ((d.append(s), r.append(d), a.full || a.customer)) {
        let m = c(
          `<div class="ref-order-customer"><h2>${g(
            "order_status.customer_details"
          )}</h2></div>`
        );
        if (e.customer.name) {
          let _ = c('<div class="ref-order-line ref-customer-name"></div>');
          (_.textContent = e.customer.name),
            _.prepend(c(`<b>${g("name")}</b>`)),
            m.append(_);
        }
        let v = c('<div class="ref-order-line ref-customer-email"></div>');
        if (
          ((v.textContent = e.customer.email),
          v.prepend(c(`<b>${g("email")}</b>`)),
          m.append(v),
          e.customer.phone)
        ) {
          let _ = c('<div class="ref-order-line ref-customer-phone"></div>');
          (_.textContent = e.customer.phone),
            _.prepend(c(`<b>${g("phone")}</b>`)),
            m.append(_);
        }
        let b = i.cloneNode();
        b.append(m), r.append(b);
      }
      let p;
      if (a.full || a.shipping) {
        let m = e.delivery_method || "shipping";
        if (m == "shipping") {
          if (
            ((p = c(
              `<div class="ref-order-shipping"><h2>${g("shipping")}</h2></div>`
            )),
            e.shipping_method)
          ) {
            let v = c(
                `<div class="ref-order-line ref-shipping-method"><b>${g(
                  "shipping_method"
                )}</b></div>`
              ),
              b = c("<span></span>");
            if (
              ((b.textContent =
                e.shipping_method.name +
                (e.shipping_method.price
                  ? " (" + this.formatMoney(e.shipping_method.price) + ")"
                  : "")),
              v.append(b),
              p.append(v),
              e.delivery_period)
            ) {
              let _ = c(
                  `<div class="ref-order-line"><b>${g(
                    "cart.estimated_delivery"
                  )}</b></div>`
                ),
                C = c("<span></span>");
              (C.textContent =
                this.getDeliveryDate(e.delivery_period.start_date) +
                " - " +
                this.getDeliveryDate(e.delivery_period.end_date)),
                _.append(C),
                p.append(_);
            }
          }
          if (e.shipping_address) {
            let v = c(
              '<div class="ref-order-line ref-shipping-address"></div>'
            );
            this.appendAddressLines(e.shipping_address, v),
              v.prepend(c(`<b>${g("shipping_address")}</b>`)),
              p.append(v);
          }
        }
        if (m == "pickup") {
          p = c(
            `<div class="ref-order-local-pickup"><h2>${g(
              "pickup_at_store"
            )}</h2></div>`
          );
          let v = c(`<div class="ref-order-line"><b>${g("store")}</b></div>`),
            b = c("<span></span>");
          (b.textContent = e.pickup_location.name), v.append(b), p.append(v);
          let _ = c('<div class="ref-order-line"></div>');
          this.appendAddressLines(e.pickup_location.address, _),
            _.prepend(c(`<b>${g("address")}</b>`)),
            p.append(_);
          for (let C of ["phone", "email", "working_hours"])
            if (e.pickup_location[C]) {
              let S = c(`<div class="ref-order-line"><b>${g(C)}</b></div>`),
                B = c("<span></span>");
              (B.textContent = e.pickup_location[C]), S.append(B), p.append(S);
            }
          if (e.delivery_period) {
            let C = c(
                `<div class="ref-order-line"><b>${g(
                  "cart.order_ready_for_pickup_label"
                )}</b></div>`
              ),
              S = c("<span></span>");
            (S.textContent =
              this.getDeliveryDate(e.delivery_period.start_date) +
              " - " +
              this.getDeliveryDate(e.delivery_period.end_date)),
              C.append(S),
              p.append(C);
          }
        }
        if (p) {
          let v = i.cloneNode();
          v.append(p), r.append(v);
        }
      }
      if (e.note) {
        let m = c('<div class="ref-order-line ref-note"></div>');
        (m.textContent = e.note),
          m.prepend(c(`<b>${g("note_to_seller")}</b>`)),
          p ? p.append(m) : s.append(m);
      }
      if ((a.full || a.billing) && e.billing_address) {
        let m = c(
            `<div class="ref-order-billing"><h2>${g("billing")}</h2></div>`
          ),
          v = Array.isArray(e.billing_address)
            ? e.billing_address.find((C) => C.name == "Name").val
            : e.billing_address.name;
        if (v) {
          let C = c(
              `<div class="ref-order-line ref-billing-address"><b>${g(
                "billing_name"
              )}</b></div>`
            ),
            S = c("<span></span>");
          (S.textContent = v), C.append(S), m.append(C);
        }
        let b = c(
          `<div class="ref-order-line ref-billing-address"><b>${g(
            "billing_address"
          )}</b></div>`
        );
        this.appendAddressLines(e.billing_address, b), m.append(b);
        let _ = i.cloneNode();
        _.append(m), r.append(_);
      }
      if (a.full || a["line-items"]) {
        let m = e.discounts ? e.discounts.amount : 0,
          v = e.shipping_method ? e.shipping_method.price : 0,
          b = e.paid_gross,
          _ = e.taxes ? e.taxes.amount : 0,
          C = b + m - v - _,
          S = c(
            `<div class="ref-line-items"><h2>${g(
              "order_status.order_summary"
            )}</h2></div>`
          );
        for (let [I, M] of e.products.entries()) {
          let q = c(
            '<div class="ref-order-line ref-line-item ref-product-line"><div class="ref-name"></div><div class="ref-price"><b></b><small></small></div></div>'
          );
          if (
            ((q.querySelector(".ref-name").textContent = M.nameLine),
            (q.querySelector(".ref-price b").textContent = this.formatMoney(
              M.price
            )),
            (q.querySelector(".ref-price small").textContent =
              "(" +
              (M.quantity > 1 ? M.quantity + " \xD7 " : "") +
              this.formatMoney(M.unitPrice) +
              ")"),
            S.append(q),
            M.personalization && M.personalization.length)
          ) {
            S.append(c(`<b>${g("order_status.product_personalizations")}</b>`));
            for (let N of M.personalization) {
              let Y = c(
                '<div class="ref-order-line ref-line-item ref-personalization-line"><div class="ref-name"></div><div class="ref-price"><small></small></div></div>'
              );
              Y.querySelector(".ref-name").textContent = N.name;
              let K = N.inputText || N.selected || N.filename || !1;
              if (K) {
                Y.querySelector(".ref-name").textContent = N.name + ": ";
                let ie = c("<small></small>");
                (ie.textContent = '"' + K + '"'),
                  Y.querySelector(".ref-name").append(ie);
              }
              (Y.querySelector(".ref-price small").textContent =
                "(" +
                (M.quantity > 1 ? M.quantity + " \xD7 " : "") +
                this.formatMoney(N.price) +
                ")"),
                S.append(Y);
            }
          }
          I < e.products.length - 1 &&
            S.append(
              c(
                '<div class="ref-tiny-separator">\u2219\u2219\u2219\u2219\u2219</div>'
              )
            );
        }
        let B = c(
          `<div class="ref-order-line ref-line-item">${g(
            "subtotal"
          )} <span class="ref-price"></span></div>`
        );
        if (
          ((B.querySelector(".ref-price").textContent = this.formatMoney(C)),
          S.append(c("<hr>")),
          S.append(B),
          v)
        ) {
          let I = c(
            `<div class="ref-order-line ref-line-item">${g(
              "shipping"
            )} <span class="ref-price"></span></div>`
          );
          (I.querySelector(".ref-price").textContent = this.formatMoney(v)),
            S.append(I);
        }
        if (m) {
          let I = c(
            '<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>'
          );
          (I.querySelector(".ref-name").textContent =
            e.discounts.coupon.name || e.discounts.coupon.code.toUpperCase()),
            (I.querySelector(".ref-price").textContent =
              "-" + this.formatMoney(m)),
            S.append(I);
        }
        if ((u = e.taxes) == null ? void 0 : u.amount) {
          let I = e.taxes.details,
            M = I.taxRate,
            q = c(
              '<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>'
            );
          (q.querySelector(".ref-name").textContent =
            M.name +
            " (" +
            M.rate +
            "%)" +
            (I.exemption ? " \u2013 " + I.exemption : "")),
            (q.querySelector(".ref-price").textContent = this.formatMoney(_)),
            S.append(q);
        }
        if (e.gift_card) {
          let I = c(
            '<div class="ref-order-line ref-line-item"><div class="ref-name"></div><span class="ref-price"></span></div>'
          );
          (I.querySelector(".ref-name").textContent =
            "**** **** **** " + e.gift_card.last_4),
            (I.querySelector(".ref-price").textContent =
              "-" + this.formatMoney(e.gift_card.discountAmount)),
            S.append(I);
        }
        let U = c(
          `<div class="ref-order-line ref-line-item">${g(
            "total"
          )} <b><span class="ref-price"></span></b></div>`
        );
        (U.querySelector(".ref-price").textContent = this.formatMoney(b)),
          S.append(c("<hr>")),
          S.append(U);
        let $ = i.cloneNode();
        $.append(S), r.append($);
      }
      (this.node.innerHTML = ""), this.node.append(r);
    }
  };
  w(lt, "type", "order-status");
  var Mr = lt;
  var dt = class extends A {
    constructor(e, r = {}) {
      super(e, r);
      (e.innerHTML = `
		<div class="reflow-user-orders">

			<div class="ref-auth-orders-guest">
				<div class="ref-signin-prompt">${g("user_orders.sign_in_prompt")}</div>
				<div class="ref-auth-button" data-reflow-type="auth-button"></div>
			</div>

			<div class="ref-auth-orders-signed">
				<div class="ref-orders"></div>
			</div>

		</div>`),
        (this.authButton = new Q(this.node.querySelector(".ref-auth-button"))),
        (this.pagination = new ke(
          c(
            '<div class="ref-orders-pagination" data-reflow-type="pagination"></div>'
          ),
          { parent: this }
        ));
    }
    init() {
      this.node.addEventListener("click", this.onClick.bind(this)),
        Reflow.auth.on("signin", ({ profile: e, isNew: r }) => {
          this.update();
        }),
        Reflow.auth.on("signout", () => {
          this.update();
        }),
        this.authButton.init(),
        this.pagination.init();
    }
    onClick(e) {
      let r = e.target.closest(".ref-order-link");
      if (r) {
        let i = r.dataset.orderLink;
        if (!i) return;
        window.location = i;
      }
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
    getPerPage() {
      let e,
        r = 20;
      return (
        this.hasDynamicPagination() &&
          (e = new URL(location.href).searchParams.get("per_page")),
        e || this.node.dataset.reflowPerpage || r
      );
    }
    hasDynamicPagination() {
      let e = this.parseShowString();
      return e.full || e.pagination;
    }
    getOrderPageURL() {
      return this.node.dataset.reflowOrderPageUrl;
    }
    getCustomerFacingStatus(e) {
      let r = "pending",
        i = {
          failed: "payment_failed",
          refunded: "refunded",
          returned: "returned",
          delivered: "received",
          ready_for_pickup: "ready_for_pickup",
          shipped: "shipped",
          paid: "processed",
          pending: "pending",
          unfulfilled: "pending",
        };
      for (let a of Object.entries(i))
        if (a[0] == e.fulfillment_status || a[0] == e.payment_status) {
          r = a[1];
          break;
        }
      return r;
    }
    getAPIEndpoint() {
      let e = this.getPage(),
        r = this.getPerPage(),
        i = `?page=${e}&perpage=${r}`;
      return "/my/orders/" + i;
    }
    async fetchData() {
      if (this.mockData) return this.mockData;
      let e = this.getAPIEndpoint(),
        r;
      try {
        r = await E(e, {
          headers: { Authorization: `Bearer ${Reflow.auth.get("key")}` },
        });
      } catch (i) {
        throw (
          (console.error("Reflow: Unable to fetch user orders"),
          i.data && console.error(i.data),
          i.status == 403 &&
            (Reflow.auth.clear(),
            Reflow.auth.broadcastEvent("signout", {
              error: "profile_not_found",
            })),
          i)
        );
      }
      return r;
    }
    async update() {
      let e = this.node.querySelector(".ref-auth-orders-guest"),
        r = this.node.querySelector(".ref-auth-orders-signed");
      if (
        ((e.style.display = "none"),
        (r.style.display = "none"),
        Reflow.auth.isSignedIn())
      ) {
        r.style.display = "block";
        let i;
        try {
          i = await this.fetchData();
        } catch (p) {
          throw p;
        }
        let a = this.node.querySelector(".ref-orders");
        if (((a.innerHTML = ""), !i || !i.data.length)) {
          a.textContent = g("user_orders.empty");
          return;
        }
        this.renderTestModeBadge(a);
        let s = this.parseShowString(),
          n = this.getOrderPageURL(),
          o = c(`<div class="ref-orders-table">
				<table>
					<thead><tr></tr></thead>
					<tbody></tbody>
				</table>
			</div>`),
          l = o.querySelector("thead tr"),
          h = o.querySelector("tbody"),
          d;
        (s.full || s.id) &&
          ((d = document.createElement("td")),
          (d.textContent = y("order")),
          l.append(d)),
          (s.full || s.date) &&
            ((d = document.createElement("td")),
            (d.textContent = y("date")),
            l.append(d)),
          (s.full || s.status) &&
            ((d = document.createElement("td")),
            (d.textContent = y("status")),
            l.append(d)),
          (s.full || s["products-count"]) &&
            ((d = document.createElement("td")),
            (d.textContent = y("products")),
            l.append(d)),
          (s.full || s.total) &&
            ((d = document.createElement("td")),
            (d.textContent = y("total")),
            l.append(d)),
          n && ((d = document.createElement("td")), l.append(d));
        for (let p of i.data) {
          let u = document.createElement("tr");
          if (
            ((s.full || s.id) &&
              ((d = document.createElement("td")),
              (d.textContent = "#" + p.id),
              u.append(d)),
            (s.full || s.date) &&
              ((d = document.createElement("td")),
              (d.textContent = new Date(p.created_at * 1e3).toLocaleString()),
              u.append(d)),
            (s.full || s.status) &&
              ((d = document.createElement("td")),
              (d.textContent = y(
                "order_status." + this.getCustomerFacingStatus(p)
              )),
              u.append(d)),
            (s.full || s["products-count"]) &&
              ((d = document.createElement("td")),
              (d.textContent = p.products.length),
              u.append(d)),
            (s.full || s.total) &&
              ((d = document.createElement("td")),
              (d.textContent = H(p.paid_gross, p.currencyConfig)),
              u.append(d)),
            n)
          ) {
            (d = document.createElement("td")),
              (d.textContent = "\u203A"),
              u.append(d),
              u.classList.add("ref-order-link");
            let m = new URL(n, window.location.href);
            m.searchParams.set("order_id", p.id),
              m.searchParams.set("secure_hash", p.secure_hash),
              (u.dataset.orderLink = m.href);
          }
          h.append(u);
        }
        if ((a.append(o), s.full || s.pagination)) {
          let p = this.pagination.update(i.meta);
          a.append(p);
        }
      } else (e.style.display = "block"), this.authButton.update();
    }
  };
  w(dt, "type", "user-orders");
  var Br = dt;
  var ct = class extends A {
    constructor(e, r = {}) {
      super(e, r);
      (e.innerHTML = `
		<div class="reflow-user-settings">

			<div class="ref-auth-settings-guest">
				<div class="ref-signin-prompt">${g("user_settings.sign_in_prompt")}</div>
				<div class="ref-auth-button" data-reflow-type="auth-button"></div>
			</div>

			<div class="ref-auth-settings-signed">
				<form class="ref-settings"></form>
			</div>

		</div>`),
        (this.authButton = new Q(this.node.querySelector(".ref-auth-button"))),
        (this.shippingAddress = {}),
        (this.addressWidget = new re({
          model: this.shippingAddress,
          fieldPrefix: "shipping",
          fields: ["address", "city", "country"],
          getCountries: () => [],
        }));
    }
    init() {
      this.node.addEventListener("click", this.onClick.bind(this)),
        this.node.addEventListener("change", this.onChange.bind(this)),
        Reflow.auth.on("signin", ({ profile: e, isNew: r }) => {
          this.update(!1);
        }),
        Reflow.auth.on("profile-refreshed", () => {
          this.update(!1);
        }),
        Reflow.auth.on("signout", () => {
          this.update();
        }),
        this.authButton.init();
    }
    onClick(e) {
      if (e.target.closest(".ref-submit")) {
        if (!Reflow.auth.isSignedIn()) return;
        let i = this.node.querySelector(".ref-settings");
        if (!i.checkValidity()) {
          i.reportValidity();
          return;
        }
        let a = { meta: {} },
          s = i.querySelector("input[name=ref-profile-photo]");
        s && s.files[0] && (a.photo = s.files[0]);
        let n = i.querySelector("input[name=ref-profile-name]");
        n && (a.name = n.value);
        let o = i.querySelector("input[name=ref-profile-email]");
        o && (a.email = o.value);
        let l = i.querySelector("input[name=ref-profile-phone]");
        l && (a.meta.phone = l.value),
          i.querySelector(".ref-address-settings") &&
            (a.meta.address = this.shippingAddress);
        let d = new D(c('<div data-reflow-type="toast"></div>'), {});
        d.init(),
          Reflow.auth.updateProfile(
            a,
            (p) => {
              let u = "";
              p.email_update &&
                !p.email_update.verified &&
                (u = y("user_settings.profile_update_email_verify_required", {
                  email: p.email_update.new_email,
                })),
                d.set({
                  type: "success",
                  title: y("user_settings.profile_update_success"),
                  description: u,
                }),
                d.show();
            },
            () => {
              d.set({
                type: "error",
                title: y("user_settings.profile_update_failed"),
              }),
                d.show();
            }
          );
      }
      if (e.target.closest(".ref-change-password")) {
        if (!Reflow.auth.isSignedIn()) return;
        let i = new D(c('<div data-reflow-type="toast"></div>'), {});
        i.init(),
          Reflow.auth
            .sendPasswordResetLink()
            .then((a) => {
              i.set({
                type: "success",
                title: y("user_settings.password_reset_link_email_sent", {
                  email: Reflow.auth.profile.email,
                }),
              }),
                i.show();
            })
            .catch((a) => {
              i.set({
                type: "error",
                title: y("user_settings.profile_update_failed"),
              }),
                i.show();
            });
      }
    }
    onChange(e) {
      let r = e.target.closest(".ref-photo-input");
      if (r) {
        let i = r.files[0];
        if (!i) return;
        if (i.size > 5e6) {
          let s = new D(c('<div data-reflow-type="toast"></div>'), {
            type: "error",
            title: "Image size too large. Please upload an image under 5 MB.",
          });
          s.init(), s.show();
          return;
        }
        let a = this.node.querySelector(".ref-settings .ref-profile-photo");
        a.src = URL.createObjectURL(i);
      }
    }
    async fetchData(e = !0) {
      if (this.mockData) return this.mockData;
      let r;
      if (!e) r = Reflow.auth.profile;
      else
        try {
          r = await Reflow.auth.getProfile();
          let i = await E("/shippable-countries/");
          this.addressWidget.setGetCountries(() => i);
        } catch (i) {
          return console.error("Reflow:", i), null;
        }
      return r;
    }
    async update(e = !0) {
      let r = this.node.querySelector(".ref-auth-settings-guest"),
        i = this.node.querySelector(".ref-auth-settings-signed");
      if (
        ((r.style.display = "none"),
        (i.style.display = "none"),
        Reflow.auth.isSignedIn())
      ) {
        i.style.display = "block";
        let a = await this.fetchData(e);
        if (!a) return;
        let s = this.node.querySelector(".ref-settings");
        s.innerHTML = "";
        let n = this.parseShowString();
        if (
          (s.append(
            c(`<div><h4>${g("user_settings.user_settings")}</h4></div>`)
          ),
          this.renderTestModeBadge(s, "append"),
          n.full || n.photo)
        ) {
          let l = document.createElement("img");
          l.classList.add("ref-profile-photo"), (l.src = a.photo), s.append(l);
          let h = c(`<div class="ref-setting ref-setting-photo">
					<label>
						<div class="ref-change-photo">${g("user_settings.change_photo")}</div>
						<input type="file" name="ref-profile-photo" class="ref-photo-input" accept="image/*">
					</label>
				</div>`);
          s.append(h);
        }
        if (n.full || n.name) {
          let l = c(`<div class="ref-setting">
					<label>
						<div><b>${g("name")}</b></div>
						<input type="text" name="ref-profile-name" class="ref-form-control" minlength="5" required>
					</label>
				</div>`),
            h = l.querySelector("input");
          (h.value = a.name), s.append(l);
        }
        if (n.full || n.email) {
          let l = c(`<div class="ref-setting">
					<label>
						<div><b>${g("email")}</b></div>
						<input type="email" name="ref-profile-email" class="ref-form-control" required>
					</label>
				</div>`),
            h = l.querySelector("input");
          (h.value = a.email), s.append(l);
        }
        if (n.full || n.phone) {
          let l = c(`<div class="ref-setting">
					<label>
						<div><b>${g("phone")}</b></div>
						<input type="phone" name="ref-profile-phone" class="ref-form-control" pattern="[0-9\\+\\- ]{5,30}">
					</label>
				</div>`),
            h = l.querySelector("input");
          (h.value = a.meta.phone || ""), s.append(l);
        }
        if (n.full || n.address) {
          let l = c(`<div class="ref-setting ref-address-settings">
					<div><b>${g("shipping_address")}</b></div>
					<div class="ref-address-holder"></div>
				</div>`),
            h = a.meta.address || {};
          Object.assign(this.shippingAddress, h),
            l
              .querySelector(".ref-address-holder")
              .append(this.addressWidget.update(!0, !0)),
            s.append(l);
        }
        if (a.provider && a.provider == "email_password") {
          let l = c(`<div class="ref-setting ref-change-password">
				<div type="button" class="ref-button ref-change-password">${g(
          "user_settings.change_password"
        )}</div>
			</div>`);
          s.append(l);
        }
        let o = c(
          `<div type="button" class="ref-button ref-submit">${g(
            "user_settings.save"
          )}</div>`
        );
        s.append(o);
      } else (r.style.display = "block"), this.authButton.update();
    }
  };
  w(ct, "type", "user-settings");
  var Hr = ct;
  var Dr = class {
      constructor() {
        this.get("expiresAt") < Date.now() && this.clear(),
          (this._listeners = {}),
          (this._signInWindow = null),
          (this._authToken = null),
          "BroadcastChannel" in window &&
            ((this._broadcastChannel = new BroadcastChannel("reflow-auth")),
            (this._broadcastChannel.onmessage = (e) => {
              e.data.type == "signout" &&
                (this.clear(),
                this.trigger("signout", { error: e.data.error })),
                e.data.type == "signin" &&
                  this.trigger("signin", {
                    profile: e.data.profile,
                    isNew: e.data.isNew,
                  }),
                e.data.type == "profile-refreshed" &&
                  this.trigger("profile-refreshed");
            })),
          (this._messageListener = (e) => {
            !this._signInWindow ||
              (e.source === this._signInWindow &&
                e.data.authToken &&
                (this._authToken = e.data.authToken));
          }),
          setInterval(async () => {
            this.isSignedIn() &&
              this.get("refreshAt") < Date.now() &&
              (await this.getProfile());
          }, 1e3 * 60),
          window.addEventListener("message", this._messageListener);
      }
      get(e) {
        let r = {};
        try {
          r = JSON.parse(localStorage.reflowAuth);
        } catch (i) {}
        return e ? r[e] : r;
      }
      set(e) {
        let r = this.get();
        Object.assign(r, e), (localStorage.reflowAuth = JSON.stringify(r));
      }
      clear() {
        delete localStorage.reflowAuth;
      }
      isSignedIn() {
        return !!this.get("key");
      }
      on(e, r) {
        (e = e.toLowerCase()),
          e in this._listeners || (this._listeners[e] = []),
          this._listeners[e].push(r);
      }
      off(e, r) {
        if (((e = e.toLowerCase()), !(e in this._listeners)))
          throw new Error("Unrecognized event name.");
        if (!this._listeners[e].includes(r))
          throw new Error("Callback doesn't exist or has aleady been removed.");
        this._listeners[e].splice(this._listeners[e].indexOf(r), 1);
      }
      trigger(e, r) {
        if (e in this._listeners) for (let i of this._listeners[e]) i(r);
      }
      get profile() {
        return this.get("profile");
      }
      scheduleRefresh() {
        this.set({ refreshAt: Date.now() + 60 * 5 * 1e3 });
      }
      broadcastEvent(e, r) {
        this.trigger(e, r),
          this._broadcastChannel &&
            this._broadcastChannel.postMessage(wt({ type: e }, r));
      }
      async getProfile() {
        try {
          let e = await E(
            "/auth/profile",
            { headers: { Authorization: `Bearer ${this.get("key")}` } },
            !1
          );
          return (
            this.set({ profile: e }),
            this.broadcastEvent("profile-refreshed"),
            this.scheduleRefresh(),
            e
          );
        } catch (e) {
          throw (
            (console.error("Reflow: Unable to fetch profile"),
            e.data && console.error(e.data),
            e.status == 403 &&
              (this.clear(),
              this.broadcastEvent("signout", { error: "profile_not_found" })),
            e)
          );
        }
      }
      async updateProfile(e, r, i) {
        try {
          let a = new FormData();
          for (let n in e) {
            if (n == null) continue;
            let o = e[n];
            n == "meta" && (o = JSON.stringify(o)), a.set(n, o);
          }
          let s = await E("/auth/profile", {
            method: "POST",
            headers: { Authorization: `Bearer ${this.get("key")}` },
            body: a,
          });
          return (
            this.set({ profile: s.profile }),
            this.broadcastEvent("profile-refreshed"),
            this.scheduleRefresh(),
            r && r(s),
            s
          );
        } catch (a) {
          throw (
            (console.error("Reflow: Unable to update profile."),
            a.data && console.error(a.data),
            i && i(),
            a.status == 403 &&
              (this.clear(),
              this.broadcastEvent("signout", { error: "profile_not_found" })),
            a)
          );
        }
      }
      async sendPasswordResetLink() {
        try {
          return await E("/auth/user/send-reset-password-email", {
            method: "POST",
            headers: { Authorization: `Bearer ${this.get("key")}` },
          });
        } catch (e) {
          throw (
            (console.error("Reflow: Unable to send reset password link email."),
            e.data && console.error(e.data),
            e)
          );
        }
      }
      async signIn(e = "login") {
        if (this.isSignedIn() || this._isLoading) return !1;
        if (this._signInWindow) return this._signInWindow.focus(), !1;
        let r = 600,
          i = 600,
          a = window.outerHeight / 2 + window.screenY - i / 2,
          s = window.outerWidth / 2 + window.screenX - r / 2;
        this._signInWindow = window.open(
          "about:blank",
          "reflow-signin",
          `width=${r},height=${i},top=${a},left=${s}`
        );
        let n;
        try {
          if (
            ((this._isLoading = !0),
            (n = await E("/auth/urls")),
            (this._isLoading = !1),
            !n.signinURL)
          )
            throw new Error("Unable to retrieve the auth URL");
        } catch (d) {
          throw (
            (console.error("Reflow: " + d),
            d.data && console.error(d.data),
            d.error && console.error(d.error),
            this._signInWindow.close(),
            (this._signInWindow = null),
            (this._isLoading = !1),
            d)
          );
        }
        let o = new URL(n.signinURL),
          l = new URLSearchParams(o.search);
        l.append("origin", window.location.origin),
          l.append("step", e),
          (o.search = l.toString()),
          (this._signInWindow.location = o.toString()),
          (this._checkWindowClosedInterval = setInterval(() => {
            this._signInWindow &&
              this._signInWindow.closed &&
              (this._signInWindow = null),
              this._signInWindow ||
                clearInterval(this._checkWindowClosedInterval);
          }, 500));
        let h = document.hasFocus();
        clearInterval(this._loginCheckInterval),
          (this._loginCheckInterval = setInterval(async () => {
            if (this.isSignedIn()) {
              clearInterval(this._loginCheckInterval);
              return;
            }
            if (!!this._authToken) {
              if (!h && document.hasFocus()) {
                h = !0;
                let d;
                try {
                  d = await E(
                    "/auth/validate-token?auth-token=" + this._authToken,
                    { method: "POST" }
                  );
                } catch (p) {
                  clearInterval(this._loginCheckInterval);
                  return;
                }
                d.valid &&
                  (this.set({
                    key: d.session,
                    expiresAt: Date.now() + d.lifetime * 1e3,
                    profile: d.profile,
                  }),
                  this.trigger("signin", {
                    profile: d.profile,
                    isNew: d.isNew,
                  }),
                  this._broadcastChannel &&
                    this._broadcastChannel.postMessage({
                      type: "signin",
                      profile: d.profile,
                      isNew: d.isNew,
                    }),
                  this.scheduleRefresh());
              }
              h = document.hasFocus();
            }
          }, 250));
      }
      async signOut() {
        if (!this.isSignedIn()) return !1;
        try {
          await E("/auth/signout", {
            method: "POST",
            headers: { Authorization: `Bearer ${this.get("key")}` },
          });
        } catch (e) {
          console.error("Reflow: " + e), e.data && console.error(e.data);
        }
        return this.clear(), this.broadcastEvent("signout", { error: !1 }), !0;
      }
    },
    qr = Dr;
  var Ni = "en-US",
    Ui = "Shopping Cart",
    $i = "Cart",
    Fi = "Product",
    Gi = "Products",
    zi = "Order",
    Vi = "Price",
    ji = "Quantity",
    Qi = "Payment",
    Wi = "Name",
    Xi = "Email",
    Zi = "Phone",
    Ji = "Delivery",
    Yi = "Shipping",
    Ki = "Address",
    ea = "City",
    ta = "Country",
    ra = "State",
    ia = "Postal Code",
    aa = "Shipping Method",
    sa = "Shipping Address",
    na = "Pickup at Store",
    oa = "Store",
    la = "Working Hours",
    da = "Billing",
    ca = "Billing Name",
    ha = "Billing Address",
    ua = "Note",
    pa = "Total",
    fa = "Subtotal",
    ma = "Free",
    ga = "Credit Card",
    ya = "Pay on Pickup",
    va = "Out of Stock",
    ba = "and",
    xa = "date",
    _a = "status",
    wa = "Apply",
    Ca = "Remove",
    Sa = "Clear",
    Ea = "Close",
    La = "Error",
    Ta = "Required",
    Pa = "Checkout",
    ka = "Back to Cart",
    Aa = "Update Cart",
    Ia = "Complete Order",
    Ra = "I agree to the {terms}",
    Ma = "Terms & Conditions",
    Ba = "Privacy Policy",
    Ha = "Refund Policy",
    Da = "Customer Details",
    qa = "Shipping and taxes are calculated during checkout.",
    Oa = "Pick up at {store}",
    Na = "Order Ready for Pickup",
    Ua = "Estimated Delivery",
    $a = "Select a Store",
    Fa = "Add Billing Info",
    Ga = "Deliver to Address",
    za = "Not yet selected",
    Va = "Select Country",
    ja = "Note to Seller",
    Qa =
      "If you have any specific instructions you want to give to the seller, write them here.",
    Wa = "Save my address for future purchases",
    Xa = "Apply a Tax Exemption",
    Za = "Tax Exemption File",
    Ja = "Attach a document or photo of your tax exemption",
    Ya = "Enter your EU VAT number",
    Ka = "Tax exemption invalidated",
    es =
      "The provided tax exemption info could not be applied to the newly selected address.",
    ts = "Enter coupon or gift card code",
    rs = "Coupon added",
    is = "Coupon removed",
    as = "Gift Card added",
    ss = "Gift Card removed",
    ns = "available balance - {amount}",
    os = "Order Summary",
    ls = "Show Summary",
    ds = "All prices are in {currency}",
    cs =
      "{in_stock, plural, =0 {0 items left in stock} other {Only # left in stock.}}",
    hs = "Maximum of {max_quantity} per customer",
    us = "Unable to load shopping cart.",
    ps = "Your shopping cart is empty.",
    fs = "Couldn't complete checkout.",
    ms = "VAT number is invalid or can't be used in cross-border transactions.",
    gs = "VAT could't be validated.",
    ys = "Product delivery is not available. Please contact us.",
    vs = "The store is unable to ship your order to this address.",
    bs = "The code you entered is not valid.",
    xs = "The code you entered is not valid.",
    _s = "Only one coupon can be applied.",
    ws = "Only one gift card can be applied.",
    Cs =
      "The gift card cannot be applied to the cart. There is a gift card product being purchased",
    Ss = "Coupon cannot be applied to any of the products in the cart.",
    Es = "Coupon requires a minimum order amount of {amount}.",
    Ls = "Coupon has expired.",
    Ts = "One or more products are out of stock.",
    Ps =
      "Only {available} {product} available in the store. There {in_cart, plural, =1 {is} other {are}} {in_cart} in your cart.",
    ks =
      "Invalid coupon in cart. Please remove the coupon to continue with checkout.",
    As = "The products cannot be shipped to the provided address.",
    Is = "The minimum product value for placing an order is {min_val}.",
    Rs = "Cart value exceeds supported limits.",
    Ms =
      "The minimum purchase amount for {product} is at least {min_qty}. There {in_cart, plural, =1 {is} other {are}} {in_cart} in your cart.",
    Bs =
      "A maximum of {max_qty} {product} can be purchased per customer. {in_cart, plural, =0 {} =1 {There is 1 already in your cart.} other {There are # already in your cart.}}",
    Hs = "{numberItems} left in stock",
    Ds = "This product doesn't exist.",
    qs = "Product is out of stock.",
    Os = "Not enough items in stock.",
    Ns = "No products found",
    Us = "Search",
    $s = "Search Products",
    Fs = "Add to Cart",
    Gs = "Product added to cart.",
    zs = "Couldn't add product to cart",
    Vs = "See Cart",
    js = "Minimum Per Order is {quantity}",
    Qs = "Order #{orderId}",
    Ws = "Status",
    Xs = "Created",
    Zs = "Order Summary",
    Js = "Personalizations",
    Ys = "Customer Details",
    Ks = "processed",
    en = "pending",
    tn = "shipped",
    rn = "ready for pickup",
    an = "received",
    sn = "refunded",
    nn = "canceled",
    on = "payment failed",
    ln = "returned",
    dn = "Please check your email for order confirmation.",
    cn = "Sign In",
    hn = "Sign Out",
    un = "Register",
    pn = "Don't have an account?",
    fn = "Sign in to view your orders",
    mn = "No orders found",
    gn = "User Settings",
    yn = "Sign in to view your profile",
    vn = "Profile Updated",
    bn =
      "A verification email was sent to {email}. Please follow the link in the email to confirm your new address.",
    xn = "Profile Update Failed",
    _n = "Change Photo",
    wn = "Change Password",
    Cn =
      "A verification email was sent to {email}. Please follow the link in the email to change your password.",
    Sn = "Save",
    En = "The store is temporarily unavailable.",
    Or = {
      locale: Ni,
      shopping_cart: Ui,
      cart: $i,
      product: Fi,
      products: Gi,
      order: zi,
      price: Vi,
      quantity: ji,
      payment: Qi,
      name: Wi,
      email: Xi,
      phone: Zi,
      delivery: Ji,
      shipping: Yi,
      address: Ki,
      city: ea,
      country: ta,
      state: ra,
      postcode: ia,
      shipping_method: aa,
      shipping_address: sa,
      pickup_at_store: na,
      store: oa,
      working_hours: la,
      billing: da,
      billing_name: ca,
      billing_address: ha,
      note_to_seller: ua,
      total: pa,
      subtotal: fa,
      price_free: ma,
      credit_card: ga,
      pay_on_pickup: ya,
      out_of_stock: va,
      and: ba,
      date: xa,
      status: _a,
      apply: wa,
      remove: Ca,
      clear: Sa,
      close: Ea,
      error: La,
      required: Ta,
      "cart.checkout": Pa,
      "cart.back_to_cart": ka,
      "cart.update": Aa,
      "cart.complete_order": Ia,
      "cart.terms_agree": Ra,
      "cart.terms_of_service": Ma,
      "cart.privacy_policy": Ba,
      "cart.refund_policy": Ha,
      "cart.customer_details": Da,
      "cart.subtotal_only": qa,
      "cart.pickup_at_store": Oa,
      "cart.order_ready_for_pickup_label": Na,
      "cart.estimated_delivery": Ua,
      "cart.select_store": $a,
      "cart.add_billing": Fa,
      "cart.deliver_to_address": Ga,
      "cart.shipping_not_selected": za,
      "cart.select_country": Va,
      "cart.note_to_seller": ja,
      "cart.note_to_seller_placeholder": Qa,
      "cart.save_address": Wa,
      "cart.tax_exemption_add": Xa,
      "cart.tax_exemption_file": Za,
      "cart.tax_exemption_file_prompt": Ja,
      "cart.tax_exemption_number_prompt": Ya,
      "cart.tax_exemption_cleared": Ka,
      "cart.tax_exemption_cleared_details": es,
      "cart.discount_code_placeholder": ts,
      "cart.coupon_added": rs,
      "cart.coupon_removed": is,
      "cart.gift_card_added": as,
      "cart.gift_card_removed": ss,
      "cart.gift_card_balance": ns,
      "cart.order_summary": os,
      "cart.show_summary": ls,
      "cart.prices_currency_description": ds,
      "cart.left_in_stock": cs,
      "cart.max_product_qty": hs,
      "cart.errors.unavailable": us,
      "cart.errors.empty": ps,
      "cart.errors.cannot_complete": fs,
      "cart.errors.vat_number_invalid": ms,
      "cart.errors.vat_number_validation_fail": gs,
      "cart.errors.delivery_unavailable": ys,
      "cart.errors.address_not_supported": vs,
      "cart.errors.invalid_discount_code": bs,
      "cart.errors.coupon_invalid_code": xs,
      "cart.errors.coupon_already_applied": _s,
      "cart.errors.gift_card_already_applied": ws,
      "cart.errors.cannot_apply_gift_card_to_cart_with_giftcard": Cs,
      "cart.errors.coupon_no_matching_products": Ss,
      "cart.errors.coupon_min_amount": Es,
      "cart.errors.coupon_expired": Ls,
      "cart.errors.out_of_stock": Ts,
      "cart.errors.unavailable_quantity": Ps,
      "cart.errors.invalid_coupon": ks,
      "cart.errors.cannot_ship": As,
      "cart.errors.min_val_not_reached": Is,
      "cart.errors.max_val_exceeded": Rs,
      "cart.errors.product_min_qty_not_reached": Ms,
      "cart.errors.product_max_qty_exceeded": Bs,
      "product.left_in_stock": Hs,
      "product.missing": Ds,
      "product.out_of_stock": qs,
      "product.unavailable_quantity": Os,
      "product_list.empty": Ns,
      "product_search.button": Us,
      "product_search.placeholder": $s,
      "add_to_cart.button_text": Fs,
      "add_to_cart.success": Gs,
      "add_to_cart.error": zs,
      "add_to_cart.see_cart": Vs,
      "add_to_cart.min_quantity_per_order": js,
      "order_status.order": Qs,
      "order_status.status": Ws,
      "order_status.created": Xs,
      "order_status.order_summary": Zs,
      "order_status.product_personalizations": Js,
      "order_status.customer_details": Ys,
      "order_status.processed": Ks,
      "order_status.pending": en,
      "order_status.shipped": tn,
      "order_status.ready_for_pickup": rn,
      "order_status.received": an,
      "order_status.refunded": sn,
      "order_status.canceled": nn,
      "order_status.payment_failed": on,
      "order_status.returned": ln,
      "order_status.check_email": dn,
      "auth.sign_in": cn,
      "auth.sign_out": hn,
      "auth.register": un,
      "auth.prompt_register": pn,
      "user_orders.sign_in_prompt": fn,
      "user_orders.empty": mn,
      "user_settings.user_settings": gn,
      "user_settings.sign_in_prompt": yn,
      "user_settings.profile_update_success": vn,
      "user_settings.profile_update_email_verify_required": bn,
      "user_settings.profile_update_failed": xn,
      "user_settings.change_photo": _n,
      "user_settings.change_password": wn,
      "user_settings.password_reset_link_email_sent": Cn,
      "user_settings.save": Sn,
      store_unavailable: En,
    };
  var Nr = "2.0.0";
  var Re = document.currentScript,
    ht = parseInt(Re.getAttribute("data-reflow-store"), 10),
    Ur = !!Re.getAttribute("data-reflow-dev"),
    $r = Re.getAttribute("data-reflow-locale"),
    Fr = Re.getAttribute("data-testmode");
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", Gr)
    : Gr();
  async function Gr() {
    if (!(!ht && (console.error("Reflow: Invalid Store ID"), !Ur))) {
      if ("Reflow" in window) {
        console.error("Reflow: window.Reflow already exists");
        return;
      }
      (window.Reflow = {
        APIURL: "https://api.reflowhq.com/v1",
        storeID: ht,
        version: Nr,
        cart: new Rr(),
        scan: Vr,
        api: E,
        auth: new qr(),
        locales: Or,
        testmode: !1,
      }),
        $r &&
          (await fetch($r)
            .then((t) => t.json())
            .then((t) => xr(t))
            .then((t) => Object.assign(window.Reflow.locales, t))
            .catch((t) =>
              console.error("Reflow: unable to load localization file")
            )),
        Fr &&
          Fr == "true" &&
          ((Reflow.testmode = !0),
          (Reflow.APIURL = Reflow.APIURL.replace("api.", "test-api."))),
        setTimeout(() => {
          document.dispatchEvent(
            new Event("reflow-ready", { cancelable: !0 })
          ) && Vr(Ur);
        }, 0);
    }
  }
  var zr = new WeakSet();
  function Vr(t = !1) {
    let e = [];
    e.push(...Pe.scan()),
      e.push(...Lr.scan()),
      e.push(...Tr.scan()),
      e.push(...Pr.scan()),
      e.push(...wr.scan()),
      e.push(...Te.scan()),
      e.push(...Mr.scan()),
      e.push(...kr.scan()),
      e.push(...Q.scan()),
      e.push(...Br.scan()),
      e.push(...Hr.scan()),
      e.length > 10 &&
        console.warn(
          "Reflow: Only the first 10 components on this page will be rendered, the rest will be ignored."
        ),
      (e = e.slice(0, 10));
    for (let r of e)
      if (!zr.has(r.node)) {
        if ((zr.add(r.node), r.init(), t && !ht)) {
          r.node.innerHTML = "No Reflow Store ID provided.";
          continue;
        }
        r.update().catch((i) => console.error("Reflow:", i));
      }
  }
})();
