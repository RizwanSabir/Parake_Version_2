// vendor/other/module-62975.js — webpack module 62975
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = r.GLOBAL_OBJ,
  s = "sentryReplaySession",
  a = "Unable to send Replay",
  c = 15e4,
  u = 5e3,
  l = 2e7;
var d = Object.defineProperty,
  p = (e, t, n) =>
    ((e, t, n) =>
      t in e
        ? d(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n))(e, "symbol" != typeof t ? t + "" : t, n),
  f = ((e) => (
    (e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"),
    e
  ))(f || {});
function h(e) {
  const t = e?.host;
  return Boolean(t?.shadowRoot === e);
}
function g(e) {
  return "[object ShadowRoot]" === Object.prototype.toString.call(e);
}
function m(e) {
  try {
    const n = e.rules || e.cssRules;
    return n
      ? ((t = Array.from(n, _).join("")).includes(" background-clip: text;") &&
          !t.includes(" -webkit-background-clip: text;") &&
          (t = t.replace(
            /\sbackground-clip:\s*text;/g,
            " -webkit-background-clip: text; background-clip: text;",
          )),
        t)
      : null;
  } catch (e) {
    return null;
  }
  var t;
}
function _(e) {
  let t;
  if (
    (function (e) {
      return "styleSheet" in e;
    })(e)
  )
    try {
      t =
        m(e.styleSheet) ||
        (function (e) {
          const { cssText: t } = e;
          if (t.split('"').length < 3) return t;
          const n = ["@import", `url(${JSON.stringify(e.href)})`];
          return (
            "" === e.layerName
              ? n.push("layer")
              : e.layerName && n.push(`layer(${e.layerName})`),
            e.supportsText && n.push(`supports(${e.supportsText})`),
            e.media.length && n.push(e.media.mediaText),
            n.join(" ") + ";"
          );
        })(e);
    } catch (e) {}
  else if (
    (function (e) {
      return "selectorText" in e;
    })(e)
  ) {
    let t = e.cssText;
    const n = e.selectorText.includes(":"),
      r = "string" == typeof e.style.all && e.style.all;
    if (
      (r &&
        (t = (function (e) {
          let t = "";
          for (let n = 0; n < e.style.length; n++) {
            const r = e.style,
              o = r[n],
              i = r.getPropertyPriority(o);
            t += `${o}:${r.getPropertyValue(o)}${i ? " !important" : ""};`;
          }
          return `${e.selectorText} { ${t} }`;
        })(e)),
      n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")),
      n || r)
    )
      return t;
  }
  return t || e.cssText;
}
class S {
  constructor() {
    p(this, "idNodeMap", new Map()), p(this, "nodeMetaMap", new WeakMap());
  }
  getId(e) {
    if (!e) return -1;
    const t = this.getMeta(e)?.id;
    return t ?? -1;
  }
  getNode(e) {
    return this.idNodeMap.get(e) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(e) {
    return this.nodeMetaMap.get(e) || null;
  }
  removeNodeFromMap(e) {
    const t = this.getId(e);
    this.idNodeMap.delete(t),
      e.childNodes && e.childNodes.forEach((e) => this.removeNodeFromMap(e));
  }
  has(e) {
    return this.idNodeMap.has(e);
  }
  hasNode(e) {
    return this.nodeMetaMap.has(e);
  }
  add(e, t) {
    const n = t.id;
    this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
  }
  replace(e, t) {
    const n = this.getNode(e);
    if (n) {
      const e = this.nodeMetaMap.get(n);
      e && this.nodeMetaMap.set(t, e);
    }
    this.idNodeMap.set(e, t);
  }
  reset() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
}
function E({ maskInputOptions: e, tagName: t, type: n }) {
  return (
    "OPTION" === t && (t = "SELECT"),
    Boolean(
      e[t.toLowerCase()] ||
        (n && e[n]) ||
        "password" === n ||
        ("INPUT" === t && !n && e.text),
    )
  );
}
function y({ isMasked: e, element: t, value: n, maskInputFn: r }) {
  let o = n || "";
  return e ? (r && (o = r(o, t)), "*".repeat(o.length)) : o;
}
function T(e) {
  return e.toLowerCase();
}
function b(e) {
  return e.toUpperCase();
}
const I = "__rrweb_original__";
function v(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? T(t) : null;
}
function A(e, t, n) {
  return "INPUT" !== t || ("radio" !== n && "checkbox" !== n)
    ? e.value
    : e.getAttribute("value") || "";
}
function N(e, t) {
  let n;
  try {
    n = new URL(e, t ?? window.location.href);
  } catch (e) {
    return null;
  }
  const r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
  return r?.[1] ?? null;
}
const R = {};
function C(e) {
  const t = R[e];
  if (t) return t;
  const n = window.document;
  let r = window[e];
  if (n && "function" == typeof n.createElement)
    try {
      const t = n.createElement("iframe");
      (t.hidden = !0), n.head.appendChild(t);
      const o = t.contentWindow;
      o && o[e] && (r = o[e]), n.head.removeChild(t);
    } catch (e) {}
  return (R[e] = r.bind(window));
}
function O(...e) {
  return C("setTimeout")(...e);
}
function w(...e) {
  return C("clearTimeout")(...e);
}
function k(e) {
  try {
    return e.contentDocument;
  } catch {}
}
let P = 1;
const L = new RegExp("[^a-z0-9-_:]");
function x() {
  return P++;
}
let M, D;
const U = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  B = /^(?:[a-z+]+:)?\/\//i,
  G = /^www\..*/i,
  F = /^(data:)([^,]*),(.*)/i;
function j(e, t) {
  return (e || "").replace(U, (e, n, r, o, i, s) => {
    const a = r || i || s,
      c = n || o || "";
    if (!a) return e;
    if (B.test(a) || G.test(a)) return `url(${c}${a}${c})`;
    if (F.test(a)) return `url(${c}${a}${c})`;
    if ("/" === a[0])
      return `url(${c}${
        (function (e) {
          let t = "";
          return (
            (t =
              e.indexOf("//") > -1
                ? e.split("/").slice(0, 3).join("/")
                : e.split("/")[0]),
            (t = t.split("?")[0]),
            t
          );
        })(t) + a
      }${c})`;
    const u = t.split("/"),
      l = a.split("/");
    u.pop();
    for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
    return `url(${c}${u.join("/")}${c})`;
  });
}
const H = /^[^ \t\n\r\u000c]+/,
  W = /^[, \t\n\r\u000c]+/,
  V = new WeakMap();
function $(e, t) {
  return t && "" !== t.trim() ? Y(e, t) : t;
}
function Y(e, t) {
  let n = V.get(e);
  if ((n || ((n = e.createElement("a")), V.set(e, n)), t)) {
    if (t.startsWith("blob:") || t.startsWith("data:")) return t;
  } else t = "";
  return n.setAttribute("href", t), n.href;
}
function q(e, t, n, r, o, i, s) {
  if (!r) return r;
  if ("src" === n || ("href" === n && ("use" !== t || "#" !== r[0])))
    return $(e, r);
  if ("xlink:href" === n && "#" !== r[0]) return $(e, r);
  if ("background" === n && ("table" === t || "td" === t || "th" === t))
    return $(e, r);
  if ("srcset" === n)
    return (function (e, t) {
      if ("" === t.trim()) return t;
      let n = 0;
      function r(e) {
        let r;
        const o = e.exec(t.substring(n));
        return o ? ((r = o[0]), (n += r.length), r) : "";
      }
      const o = [];
      for (; r(W), !(n >= t.length); ) {
        let i = r(H);
        if ("," === i.slice(-1))
          (i = $(e, i.substring(0, i.length - 1))), o.push(i);
        else {
          let r = "";
          i = $(e, i);
          let s = !1;
          for (;;) {
            const e = t.charAt(n);
            if ("" === e) {
              o.push((i + r).trim());
              break;
            }
            if (s) ")" === e && (s = !1);
            else {
              if ("," === e) {
                (n += 1), o.push((i + r).trim());
                break;
              }
              "(" === e && (s = !0);
            }
            (r += e), (n += 1);
          }
        }
      }
      return o.join(", ");
    })(e, r);
  if ("style" === n) {
    let t = j(r, Y(e));
    return (
      s &&
        s.size > 0 &&
        (t = (function (e, t) {
          if (!e || 0 === t.size) return e;
          try {
            const n = e.split(";"),
              r = [];
            for (let e of n) {
              if (((e = e.trim()), !e)) continue;
              const n = e.indexOf(":");
              if (-1 === n) {
                r.push(e);
                continue;
              }
              const o = e.slice(0, n).trim();
              t.has(o) || r.push(e);
            }
            return r.join("; ") + (r.length > 0 && e.endsWith(";") ? ";" : "");
          } catch (t) {
            return e;
          }
        })(t, s)),
      t
    );
  }
  return "object" === t && "data" === n
    ? $(e, r)
    : "function" == typeof i
      ? i(n, r, o)
      : r;
}
function K(e, t, n) {
  return ("video" === e || "audio" === e) && "autoplay" === t;
}
function X(e, t, n = 1 / 0, r = 0) {
  return e
    ? e.nodeType !== e.ELEMENT_NODE || r > n
      ? -1
      : t(e)
        ? r
        : X(e.parentNode, t, n, r + 1)
    : -1;
}
function Z(e, t) {
  return (n) => {
    const r = n;
    if (null === r) return !1;
    try {
      if (e)
        if ("string" == typeof e) {
          if (r.matches(`.${e}`)) return !0;
        } else if (
          (function (e, t) {
            for (let n = e.classList.length; n--; ) {
              const r = e.classList[n];
              if (t.test(r)) return !0;
            }
            return !1;
          })(r, e)
        )
          return !0;
      return !(!t || !r.matches(t));
    } catch {
      return !1;
    }
  };
}
function z(e, t, n, r, o, i) {
  try {
    const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (null === s) return !1;
    if ("INPUT" === s.tagName) {
      const e = s.getAttribute("autocomplete");
      if (
        [
          "current-password",
          "new-password",
          "cc-number",
          "cc-exp",
          "cc-exp-month",
          "cc-exp-year",
          "cc-csc",
        ].includes(e)
      )
        return !0;
    }
    let a = -1,
      c = -1;
    if (i) {
      if (((c = X(s, Z(r, o))), c < 0)) return !0;
      a = X(s, Z(t, n), c >= 0 ? c : 1 / 0);
    } else {
      if (((a = X(s, Z(t, n))), a < 0)) return !1;
      c = X(s, Z(r, o), a >= 0 ? a : 1 / 0);
    }
    return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !i);
  } catch (e) {}
  return !!i;
}
function J(e) {
  return null == e ? "" : e.toLowerCase();
}
function Q(e, t) {
  const {
    doc: n,
    mirror: r,
    blockClass: o,
    blockSelector: i,
    unblockSelector: s,
    maskAllText: a,
    maskTextClass: c,
    unmaskTextClass: u,
    maskTextSelector: l,
    unmaskTextSelector: d,
    skipChild: p = !1,
    inlineStylesheet: _ = !0,
    maskInputOptions: S = {},
    maskAttributeFn: R,
    maskTextFn: C,
    maskInputFn: P,
    slimDOMOptions: U,
    dataURLOptions: B = {},
    inlineImages: G = !1,
    recordCanvas: F = !1,
    onSerialize: H,
    onIframeLoad: W,
    iframeLoadTimeout: V = 5e3,
    onBlockedImageLoad: $,
    onStylesheetLoad: X,
    stylesheetLoadTimeout: Z = 5e3,
    keepIframeSrcFn: ee = () => !1,
    newlyAddedElement: te = !1,
    ignoreCSSAttributes: ne,
  } = t;
  let { preserveWhiteSpace: re = !0 } = t;
  const oe = (function (e, t) {
    const {
        doc: n,
        mirror: r,
        blockClass: o,
        blockSelector: i,
        unblockSelector: s,
        maskAllText: a,
        maskAttributeFn: c,
        maskTextClass: u,
        unmaskTextClass: l,
        maskTextSelector: d,
        unmaskTextSelector: p,
        inlineStylesheet: h,
        maskInputOptions: g = {},
        maskTextFn: _,
        maskInputFn: S,
        dataURLOptions: N = {},
        inlineImages: R,
        recordCanvas: C,
        keepIframeSrcFn: O,
        newlyAddedElement: w = !1,
        ignoreCSSAttributes: P,
      } = t,
      x = (function (e, t) {
        if (!t.hasNode(e)) return;
        const n = t.getId(e);
        return 1 === n ? void 0 : n;
      })(n, r);
    switch (e.nodeType) {
      case e.DOCUMENT_NODE:
        return "CSS1Compat" !== e.compatMode
          ? {
              type: f.Document,
              childNodes: [],
              compatMode: e.compatMode,
            }
          : { type: f.Document, childNodes: [] };
      case e.DOCUMENT_TYPE_NODE:
        return {
          type: f.DocumentType,
          name: e.name,
          publicId: e.publicId,
          systemId: e.systemId,
          rootId: x,
        };
      case e.ELEMENT_NODE:
        return (function (e, t) {
          const {
              doc: n,
              blockClass: r,
              blockSelector: o,
              unblockSelector: i,
              inlineStylesheet: s,
              maskInputOptions: a = {},
              maskAttributeFn: c,
              maskInputFn: u,
              dataURLOptions: l = {},
              inlineImages: d,
              recordCanvas: p,
              keepIframeSrcFn: h,
              newlyAddedElement: g = !1,
              rootId: _,
              maskTextClass: S,
              unmaskTextClass: N,
              maskTextSelector: R,
              unmaskTextSelector: C,
              ignoreCSSAttributes: O,
            } = t,
            w = (function (e, t, n, r) {
              try {
                if (r && e.matches(r)) return !1;
                if ("string" == typeof t) {
                  if (e.classList.contains(t)) return !0;
                } else
                  for (let n = e.classList.length; n--; ) {
                    const r = e.classList[n];
                    if (t.test(r)) return !0;
                  }
                if (n) return e.matches(n);
              } catch (e) {}
              return !1;
            })(e, r, o, i),
            P = (function (e) {
              if (e instanceof HTMLFormElement) return "form";
              const t = T(e.tagName);
              return L.test(t) ? "div" : t;
            })(e);
          let x = {};
          const U = e.attributes.length;
          for (let t = 0; t < U; t++) {
            const r = e.attributes[t];
            r.name &&
              !K(P, r.name, r.value) &&
              (x[r.name] = q(n, P, T(r.name), r.value, e, c, O));
          }
          if ("link" === P && s) {
            const t = Array.from(n.styleSheets).find((t) => t.href === e.href);
            let r = null;
            t && (r = m(t)),
              r &&
                ((x.rel = null),
                (x.href = null),
                (x.crossorigin = null),
                (x._cssText = j(r, t.href)));
          }
          if (
            "style" === P &&
            e.sheet &&
            !(e.innerText || e.textContent || "").trim().length
          ) {
            const t = m(e.sheet);
            t && (x._cssText = j(t, Y(n)));
          }
          if (
            "input" === P ||
            "textarea" === P ||
            "select" === P ||
            "option" === P
          ) {
            const t = e,
              n = v(t),
              r = A(t, b(P), n),
              o = t.checked;
            if ("submit" !== n && "button" !== n && r) {
              const e = z(
                t,
                S,
                R,
                N,
                C,
                E({ type: n, tagName: b(P), maskInputOptions: a }),
              );
              x.value = y({
                isMasked: e,
                element: t,
                value: r,
                maskInputFn: u,
              });
            }
            o && (x.checked = o);
          }
          if (
            ("option" === P &&
              (e.selected && !a.select ? (x.selected = !0) : delete x.selected),
            "canvas" === P && p)
          )
            if ("2d" === e.__context)
              (function (e) {
                const t = e.getContext("2d");
                if (!t) return !0;
                for (let n = 0; n < e.width; n += 50)
                  for (let r = 0; r < e.height; r += 50) {
                    const o = t.getImageData,
                      i = I in o ? o[I] : o;
                    if (
                      new Uint32Array(
                        i.call(
                          t,
                          n,
                          r,
                          Math.min(50, e.width - n),
                          Math.min(50, e.height - r),
                        ).data.buffer,
                      ).some((e) => 0 !== e)
                    )
                      return !1;
                  }
                return !0;
              })(e) || (x.rr_dataURL = e.toDataURL(l.type, l.quality));
            else if (!("__context" in e)) {
              const t = e.toDataURL(l.type, l.quality),
                r = n.createElement("canvas");
              (r.width = e.width),
                (r.height = e.height),
                t !== r.toDataURL(l.type, l.quality) && (x.rr_dataURL = t);
            }
          if ("img" === P && d) {
            M || ((M = n.createElement("canvas")), (D = M.getContext("2d")));
            const t = e,
              r = (t.currentSrc || t.getAttribute("src"), t.crossOrigin),
              o = () => {
                t.removeEventListener("load", o);
                try {
                  (M.width = t.naturalWidth),
                    (M.height = t.naturalHeight),
                    D.drawImage(t, 0, 0),
                    (x.rr_dataURL = M.toDataURL(l.type, l.quality));
                } catch (e) {
                  if ("anonymous" !== t.crossOrigin)
                    return (
                      (t.crossOrigin = "anonymous"),
                      void (t.complete && 0 !== t.naturalWidth
                        ? o()
                        : t.addEventListener("load", o))
                    );
                }
                "anonymous" === t.crossOrigin &&
                  (r ? (x.crossOrigin = r) : t.removeAttribute("crossorigin"));
              };
            t.complete && 0 !== t.naturalWidth
              ? o()
              : t.addEventListener("load", o);
          }
          if (
            (("audio" !== P && "video" !== P) ||
              ((x.rr_mediaState = e.paused ? "paused" : "played"),
              (x.rr_mediaCurrentTime = e.currentTime)),
            g ||
              (e.scrollLeft && (x.rr_scrollLeft = e.scrollLeft),
              e.scrollTop && (x.rr_scrollTop = e.scrollTop)),
            w)
          ) {
            const { width: t, height: n } = e.getBoundingClientRect();
            x = {
              class: x.class,
              rr_width: `${t}px`,
              rr_height: `${n}px`,
            };
          }
          let B;
          "iframe" !== P ||
            h(x.src) ||
            (w || k(e) || (x.rr_src = x.src), delete x.src);
          try {
            customElements.get(P) && (B = !0);
          } catch (e) {}
          return {
            type: f.Element,
            tagName: P,
            attributes: x,
            childNodes: [],
            isSVG:
              ((G = e),
              Boolean("svg" === G.tagName || G.ownerSVGElement) || void 0),
            needBlock: w,
            rootId: _,
            isCustom: B,
          };
          var G;
        })(e, {
          doc: n,
          blockClass: o,
          blockSelector: i,
          unblockSelector: s,
          inlineStylesheet: h,
          maskAttributeFn: c,
          maskInputOptions: g,
          maskInputFn: S,
          dataURLOptions: N,
          inlineImages: R,
          recordCanvas: C,
          keepIframeSrcFn: O,
          newlyAddedElement: w,
          rootId: x,
          maskTextClass: u,
          unmaskTextClass: l,
          maskTextSelector: d,
          unmaskTextSelector: p,
          ignoreCSSAttributes: P,
        });
      case e.TEXT_NODE:
        return (function (e, t) {
          const {
              maskAllText: n,
              maskTextClass: r,
              unmaskTextClass: o,
              maskTextSelector: i,
              unmaskTextSelector: s,
              maskTextFn: a,
              maskInputOptions: c,
              maskInputFn: u,
              rootId: l,
            } = t,
            d = e.parentNode && e.parentNode.tagName;
          let p = e.textContent;
          const h = "STYLE" === d || void 0,
            g = "SCRIPT" === d || void 0,
            _ = "TEXTAREA" === d || void 0;
          if (h && p) {
            try {
              e.nextSibling ||
                e.previousSibling ||
                (e.parentNode.sheet?.cssRules && (p = m(e.parentNode.sheet)));
            } catch (e) {}
            p = j(p, Y(t.doc));
          }
          g && (p = "SCRIPT_PLACEHOLDER");
          const S = z(e, r, i, o, s, n);
          return (
            h ||
              g ||
              _ ||
              !p ||
              !S ||
              (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")),
            _ &&
              p &&
              (c.textarea || S) &&
              (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")),
            "OPTION" === d &&
              p &&
              (p = y({
                isMasked: z(
                  e,
                  r,
                  i,
                  o,
                  s,
                  E({ type: null, tagName: d, maskInputOptions: c }),
                ),
                element: e,
                value: p,
                maskInputFn: u,
              })),
            {
              type: f.Text,
              textContent: p || "",
              isStyle: h,
              rootId: l,
            }
          );
        })(e, {
          doc: n,
          maskAllText: a,
          maskTextClass: u,
          unmaskTextClass: l,
          maskTextSelector: d,
          unmaskTextSelector: p,
          maskTextFn: _,
          maskInputOptions: g,
          maskInputFn: S,
          rootId: x,
        });
      case e.CDATA_SECTION_NODE:
        return { type: f.CDATA, textContent: "", rootId: x };
      case e.COMMENT_NODE:
        return {
          type: f.Comment,
          textContent: e.textContent || "",
          rootId: x,
        };
      default:
        return !1;
    }
  })(e, {
    doc: n,
    mirror: r,
    blockClass: o,
    blockSelector: i,
    maskAllText: a,
    unblockSelector: s,
    maskTextClass: c,
    unmaskTextClass: u,
    maskTextSelector: l,
    unmaskTextSelector: d,
    inlineStylesheet: _,
    maskInputOptions: S,
    maskAttributeFn: R,
    maskTextFn: C,
    maskInputFn: P,
    dataURLOptions: B,
    inlineImages: G,
    recordCanvas: F,
    keepIframeSrcFn: ee,
    newlyAddedElement: te,
    ignoreCSSAttributes: ne,
  });
  if (!oe) return null;
  let ie;
  ie = r.hasNode(e)
    ? r.getId(e)
    : !(function (e, t) {
          if (t.comment && e.type === f.Comment) return !0;
          if (e.type === f.Element) {
            if (
              t.script &&
              ("script" === e.tagName ||
                ("link" === e.tagName &&
                  ("preload" === e.attributes.rel ||
                    "modulepreload" === e.attributes.rel)) ||
                ("link" === e.tagName &&
                  "prefetch" === e.attributes.rel &&
                  "string" == typeof e.attributes.href &&
                  "js" === N(e.attributes.href)))
            )
              return !0;
            if (
              t.headFavicon &&
              (("link" === e.tagName && "shortcut icon" === e.attributes.rel) ||
                ("meta" === e.tagName &&
                  (J(e.attributes.name).match(
                    /^msapplication-tile(image|color)$/,
                  ) ||
                    "application-name" === J(e.attributes.name) ||
                    "icon" === J(e.attributes.rel) ||
                    "apple-touch-icon" === J(e.attributes.rel) ||
                    "shortcut icon" === J(e.attributes.rel))))
            )
              return !0;
            if ("meta" === e.tagName) {
              if (
                t.headMetaDescKeywords &&
                J(e.attributes.name).match(/^description|keywords$/)
              )
                return !0;
              if (
                t.headMetaSocial &&
                (J(e.attributes.property).match(/^(og|twitter|fb):/) ||
                  J(e.attributes.name).match(/^(og|twitter):/) ||
                  "pinterest" === J(e.attributes.name))
              )
                return !0;
              if (
                t.headMetaRobots &&
                ("robots" === J(e.attributes.name) ||
                  "googlebot" === J(e.attributes.name) ||
                  "bingbot" === J(e.attributes.name))
              )
                return !0;
              if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                return !0;
              if (
                t.headMetaAuthorship &&
                ("author" === J(e.attributes.name) ||
                  "generator" === J(e.attributes.name) ||
                  "framework" === J(e.attributes.name) ||
                  "publisher" === J(e.attributes.name) ||
                  "progid" === J(e.attributes.name) ||
                  J(e.attributes.property).match(/^article:/) ||
                  J(e.attributes.property).match(/^product:/))
              )
                return !0;
              if (
                t.headMetaVerification &&
                ("google-site-verification" === J(e.attributes.name) ||
                  "yandex-verification" === J(e.attributes.name) ||
                  "csrf-token" === J(e.attributes.name) ||
                  "p:domain_verify" === J(e.attributes.name) ||
                  "verify-v1" === J(e.attributes.name) ||
                  "verification" === J(e.attributes.name) ||
                  "shopify-checkout-api-token" === J(e.attributes.name))
              )
                return !0;
            }
          }
          return !1;
        })(oe, U) &&
        (re || oe.type !== f.Text || oe.isStyle || oe.textContent.trim().length)
      ? x()
      : -2;
  const se = Object.assign(oe, { id: ie });
  if ((r.add(e, se), -2 === ie)) return null;
  H && H(e);
  let ae = !p;
  if (se.type === f.Element) {
    ae = ae && !se.needBlock;
    const t = e.shadowRoot;
    t && g(t) && (se.isShadowHost = !0);
  }
  if ((se.type === f.Document || se.type === f.Element) && ae) {
    U.headWhitespace &&
      se.type === f.Element &&
      "head" === se.tagName &&
      (re = !1);
    const t = {
        doc: n,
        mirror: r,
        blockClass: o,
        blockSelector: i,
        maskAllText: a,
        unblockSelector: s,
        maskTextClass: c,
        unmaskTextClass: u,
        maskTextSelector: l,
        unmaskTextSelector: d,
        skipChild: p,
        inlineStylesheet: _,
        maskInputOptions: S,
        maskAttributeFn: R,
        maskTextFn: C,
        maskInputFn: P,
        slimDOMOptions: U,
        dataURLOptions: B,
        inlineImages: G,
        recordCanvas: F,
        preserveWhiteSpace: re,
        onSerialize: H,
        onIframeLoad: W,
        iframeLoadTimeout: V,
        onBlockedImageLoad: $,
        onStylesheetLoad: X,
        stylesheetLoadTimeout: Z,
        keepIframeSrcFn: ee,
        ignoreCSSAttributes: ne,
      },
      h = e.childNodes ? Array.from(e.childNodes) : [];
    for (const e of h) {
      const n = Q(e, t);
      n && se.childNodes.push(n);
    }
    if (
      (function (e) {
        return e.nodeType === e.ELEMENT_NODE;
      })(e) &&
      e.shadowRoot
    )
      for (const n of Array.from(e.shadowRoot.childNodes)) {
        const r = Q(n, t);
        r && (g(e.shadowRoot) && (r.isShadow = !0), se.childNodes.push(r));
      }
  }
  if (
    (e.parentNode && h(e.parentNode) && g(e.parentNode) && (se.isShadow = !0),
    se.type !== f.Element ||
      "iframe" !== se.tagName ||
      se.needBlock ||
      (function (e, t, n) {
        const r = (function (e) {
          try {
            return e.contentWindow;
          } catch {}
        })(e);
        if (!r) return;
        let o,
          i = !1;
        try {
          o = r.document.readyState;
        } catch (e) {
          return;
        }
        if ("complete" !== o) {
          const r = O(() => {
            i || (t(), (i = !0));
          }, n);
          return void e.addEventListener("load", () => {
            w(r), (i = !0), t();
          });
        }
        const s = "about:blank";
        if (r.location.href !== s || e.src === s || "" === e.src)
          return O(t, 0), e.addEventListener("load", t);
        e.addEventListener("load", t);
      })(
        e,
        () => {
          const t = k(e);
          if (t && W) {
            const n = Q(t, {
              doc: t,
              mirror: r,
              blockClass: o,
              blockSelector: i,
              unblockSelector: s,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: _,
              maskInputOptions: S,
              maskAttributeFn: R,
              maskTextFn: C,
              maskInputFn: P,
              slimDOMOptions: U,
              dataURLOptions: B,
              inlineImages: G,
              recordCanvas: F,
              preserveWhiteSpace: re,
              onSerialize: H,
              onIframeLoad: W,
              iframeLoadTimeout: V,
              onStylesheetLoad: X,
              stylesheetLoadTimeout: Z,
              keepIframeSrcFn: ee,
              ignoreCSSAttributes: ne,
            });
            n && W(e, n);
          }
        },
        V,
      ),
    se.type === f.Element &&
      "img" === se.tagName &&
      !e.complete &&
      se.needBlock)
  ) {
    const t = e,
      n = () => {
        if (t.isConnected && !t.complete && $)
          try {
            const e = t.getBoundingClientRect();
            e.width > 0 && e.height > 0 && $(t, se, e);
          } catch (e) {}
        t.removeEventListener("load", n);
      };
    t.isConnected && t.addEventListener("load", n);
  }
  return (
    se.type === f.Element &&
      "link" === se.tagName &&
      "string" == typeof se.attributes.rel &&
      ("stylesheet" === se.attributes.rel ||
        ("preload" === se.attributes.rel &&
          "string" == typeof se.attributes.href &&
          "css" === N(se.attributes.href))) &&
      (function (e, t, n) {
        let r,
          o = !1;
        try {
          r = e.sheet;
        } catch (e) {
          r = null;
        }
        if (r) return;
        const i = O(() => {
          o || (t(), (o = !0));
        }, n);
        e.addEventListener("load", () => {
          w(i), (o = !0), t();
        });
      })(
        e,
        () => {
          if (X) {
            const t = Q(e, {
              doc: n,
              mirror: r,
              blockClass: o,
              blockSelector: i,
              unblockSelector: s,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: _,
              maskInputOptions: S,
              maskAttributeFn: R,
              maskTextFn: C,
              maskInputFn: P,
              slimDOMOptions: U,
              dataURLOptions: B,
              inlineImages: G,
              recordCanvas: F,
              preserveWhiteSpace: re,
              onSerialize: H,
              onIframeLoad: W,
              iframeLoadTimeout: V,
              onStylesheetLoad: X,
              stylesheetLoadTimeout: Z,
              keepIframeSrcFn: ee,
              ignoreCSSAttributes: ne,
            });
            t && X(e, t);
          }
        },
        Z,
      ),
    se.type === f.Element && delete se.needBlock,
    se
  );
}
function ee(e, t, n = document) {
  const r = { capture: !0, passive: !0 };
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
let te = {
  map: {},
  getId: () => -1,
  getNode: () => null,
  removeNodeFromMap() {},
  has: () => !1,
  reset() {},
};
function ne(e, t, n = {}) {
  let r = null,
    o = 0;
  return function (...i) {
    const s = Date.now();
    o || !1 !== n.leading || (o = s);
    const a = t - (s - o),
      c = this;
    a <= 0 || a > t
      ? (r &&
          ((function (...e) {
            Te("clearTimeout")(...e);
          })(r),
          (r = null)),
        (o = s),
        e.apply(c, i))
      : r ||
        !1 === n.trailing ||
        (r = be(() => {
          (o = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(c, i);
        }, a));
  };
}
function re(e, t, n, r, o = window) {
  const i = o.Object.getOwnPropertyDescriptor(e, t);
  return (
    o.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set(e) {
              be(() => {
                n.set.call(this, e);
              }, 0),
                i && i.set && i.set.call(this, e);
            },
          },
    ),
    () => re(e, t, i || {}, !0)
  );
}
function oe(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const r = e[t],
      o = n(r);
    return (
      "function" == typeof o &&
        ((o.prototype = o.prototype || {}),
        Object.defineProperties(o, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = o),
      () => {
        e[t] = r;
      }
    );
  } catch {
    return () => {};
  }
}
"undefined" != typeof window &&
  window.Proxy &&
  window.Reflect &&
  (te = new Proxy(te, { get: (e, t, n) => Reflect.get(e, t, n) }));
let ie = Date.now;
function se(e) {
  const t = e.document;
  return {
    left: t.scrollingElement
      ? t.scrollingElement.scrollLeft
      : void 0 !== e.pageXOffset
        ? e.pageXOffset
        : t?.documentElement.scrollLeft ||
          t?.body?.parentElement?.scrollLeft ||
          t?.body?.scrollLeft ||
          0,
    top: t.scrollingElement
      ? t.scrollingElement.scrollTop
      : void 0 !== e.pageYOffset
        ? e.pageYOffset
        : t?.documentElement.scrollTop ||
          t?.body?.parentElement?.scrollTop ||
          t?.body?.scrollTop ||
          0,
  };
}
function ae() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function ce() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function ue(e) {
  if (!e) return null;
  try {
    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  } catch (e) {
    return null;
  }
}
function le(e, t, n, r, o) {
  if (!e) return !1;
  const i = ue(e);
  if (!i) return !1;
  const s = Z(t, n);
  if (!o) {
    const e = r && i.matches(r);
    return s(i) && !e;
  }
  const a = X(i, s);
  let c = -1;
  return !(a < 0) && (r && (c = X(i, Z(null, r))), (a > -1 && c < 0) || a < c);
}
function de(e, t) {
  return -2 === t.getId(e);
}
function pe(e, t) {
  if (h(e)) return !1;
  const n = t.getId(e);
  return (
    !t.has(n) ||
    ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
      (!e.parentNode || pe(e.parentNode, t)))
  );
}
function fe(e) {
  return Boolean(e.changedTouches);
}
function he(e, t) {
  return Boolean("IFRAME" === e.nodeName && t.getMeta(e));
}
function ge(e, t) {
  return Boolean(
    "LINK" === e.nodeName &&
      e.nodeType === e.ELEMENT_NODE &&
      e.getAttribute &&
      "stylesheet" === e.getAttribute("rel") &&
      t.getMeta(e),
  );
}
function me(e) {
  return Boolean(e?.shadowRoot);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (ie = () => new Date().getTime());
class _e {
  constructor() {
    (this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map());
  }
  getId(e) {
    return this.styleIDMap.get(e) ?? -1;
  }
  has(e) {
    return this.styleIDMap.has(e);
  }
  add(e, t) {
    if (this.has(e)) return this.getId(e);
    let n;
    return (
      (n = void 0 === t ? this.id++ : t),
      this.styleIDMap.set(e, n),
      this.idStyleMap.set(n, e),
      n
    );
  }
  getStyle(e) {
    return this.idStyleMap.get(e) || null;
  }
  reset() {
    (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1);
  }
  generateId() {
    return this.id++;
  }
}
function Se(e) {
  let t = null;
  return (
    e.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function Ee(e) {
  const t = e.ownerDocument;
  return (
    !!t &&
    (t.contains(e) ||
      (function (e) {
        const t = e.ownerDocument;
        if (!t) return !1;
        const n = (function (e) {
          let t,
            n = e;
          for (; (t = Se(n)); ) n = t;
          return n;
        })(e);
        return t.contains(n);
      })(e))
  );
}
const ye = {};
function Te(e) {
  const t = ye[e];
  if (t) return t;
  const n = window.document;
  let r = window[e];
  if (n && "function" == typeof n.createElement)
    try {
      const t = n.createElement("iframe");
      (t.hidden = !0), n.head.appendChild(t);
      const o = t.contentWindow;
      o && o[e] && (r = o[e]), n.head.removeChild(t);
    } catch (e) {}
  return (ye[e] = r.bind(window));
}
function be(...e) {
  return Te("setTimeout")(...e);
}
var Ie = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(Ie || {}),
  ve = ((e) => (
    (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
    (e[(e.Selection = 14)] = "Selection"),
    (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (e[(e.CustomElement = 16)] = "CustomElement"),
    e
  ))(ve || {}),
  Ae = ((e) => (
    (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel"),
    e
  ))(Ae || {}),
  Ne = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(Ne || {}),
  Re = ((e) => (
    (e[(e.Play = 0)] = "Play"),
    (e[(e.Pause = 1)] = "Pause"),
    (e[(e.Seeked = 2)] = "Seeked"),
    (e[(e.VolumeChange = 3)] = "VolumeChange"),
    (e[(e.RateChange = 4)] = "RateChange"),
    e
  ))(Re || {});
let Ce;
function Oe(e) {
  Ce = e;
}
function we() {
  Ce = void 0;
}
const ke = (e) =>
  Ce
    ? (...t) => {
        try {
          return e(...t);
        } catch (e) {
          if (Ce && !0 === Ce(e)) return () => {};
          throw e;
        }
      }
    : e;
for (
  var Pe = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Le = 0;
  Le < 64;
  Le++
)
  Pe[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
      Le,
    )
  ] = Le;
class xe {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
  snapshot() {}
  addWindow() {}
  addShadowRoot() {}
  resetShadowRoots() {}
}
function Me(e) {
  try {
    return e.contentDocument;
  } catch (e) {}
}
function De(e) {
  try {
    return e.contentWindow;
  } catch (e) {}
}
class Ue {
  constructor(e) {
    (this.doc = e), (this.unattachedDoc = null);
  }
  parse(e) {
    return (
      this.parseWithConstructableStylesheet(e) ||
      this.parseWithDetachedElement(e)
    );
  }
  parseWithConstructableStylesheet(e) {
    if (
      "undefined" == typeof CSSStyleSheet ||
      "function" != typeof CSSStyleSheet.prototype.replaceSync
    )
      return null;
    try {
      const t = new CSSStyleSheet();
      t.replaceSync(`x { ${e} }`);
      const n = t.cssRules[0];
      return n && n.type === CSSRule.STYLE_RULE ? n.style : null;
    } catch {
      return null;
    }
  }
  parseWithDetachedElement(e) {
    const t = this.getUnattachedDoc().createElement("span");
    return t.setAttribute("style", e), t.style;
  }
  getUnattachedDoc() {
    if (!this.unattachedDoc)
      try {
        this.unattachedDoc = document.implementation.createHTMLDocument();
      } catch {
        this.unattachedDoc = this.doc;
      }
    return this.unattachedDoc;
  }
}
function Be(e) {
  return "__ln" in e;
}
class Ge {
  constructor() {
    (this.length = 0), (this.head = null), (this.tail = null);
  }
  get(e) {
    if (e >= this.length) throw new Error("Position outside of list range");
    let t = this.head;
    for (let n = 0; n < e; n++) t = t?.next || null;
    return t;
  }
  addNode(e) {
    const t = { value: e, previous: null, next: null };
    if (((e.__ln = t), e.previousSibling && Be(e.previousSibling))) {
      const n = e.previousSibling.__ln.next;
      (t.next = n),
        (t.previous = e.previousSibling.__ln),
        (e.previousSibling.__ln.next = t),
        n && (n.previous = t);
    } else if (
      e.nextSibling &&
      Be(e.nextSibling) &&
      e.nextSibling.__ln.previous
    ) {
      const n = e.nextSibling.__ln.previous;
      (t.previous = n),
        (t.next = e.nextSibling.__ln),
        (e.nextSibling.__ln.previous = t),
        n && (n.next = t);
    } else
      this.head && (this.head.previous = t),
        (t.next = this.head),
        (this.head = t);
    null === t.next && (this.tail = t), this.length++;
  }
  removeNode(e) {
    const t = e.__ln;
    this.head &&
      (t.previous
        ? ((t.previous.next = t.next),
          t.next ? (t.next.previous = t.previous) : (this.tail = t.previous))
        : ((this.head = t.next),
          this.head ? (this.head.previous = null) : (this.tail = null)),
      e.__ln && delete e.__ln,
      this.length--);
  }
}
const Fe = (e, t) => `${e}@${t}`;
class je {
  constructor() {
    (this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.attributeMap = new WeakMap()),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (e) => {
        e.forEach(this.processMutation), this.emit();
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const e = [],
          t = new Set(),
          n = new Ge(),
          r = (e) => {
            let t = e,
              n = -2;
            for (; -2 === n; )
              (t = t && t.nextSibling), (n = t && this.mirror.getId(t));
            return n;
          },
          o = (o) => {
            if (!o.parentNode || !Ee(o)) return;
            const i = h(o.parentNode)
                ? this.mirror.getId(Se(o))
                : this.mirror.getId(o.parentNode),
              s = r(o);
            if (-1 === i || -1 === s) return n.addNode(o);
            const a = Q(o, {
              doc: this.doc,
              mirror: this.mirror,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              maskAllText: this.maskAllText,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              unmaskTextClass: this.unmaskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskInputOptions: this.maskInputOptions,
              maskAttributeFn: this.maskAttributeFn,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (e) => {
                he(e, this.mirror) &&
                  !le(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) &&
                  this.iframeManager.addIframe(e),
                  ge(e, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(e),
                  me(o) &&
                    this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc);
              },
              onIframeLoad: (e, t) => {
                if (
                  le(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  )
                )
                  return;
                this.iframeManager.attachIframe(e, t);
                const n = De(e);
                n && this.canvasManager.addWindow(n),
                  this.shadowDomManager.observeAttachShadow(e);
              },
              onStylesheetLoad: (e, t) => {
                this.stylesheetManager.attachLinkElement(e, t);
              },
              onBlockedImageLoad: (e, t, { width: n, height: r }) => {
                this.mutationCb({
                  adds: [],
                  removes: [],
                  texts: [],
                  attributes: [
                    {
                      id: t.id,
                      attributes: {
                        style: { width: `${n}px`, height: `${r}px` },
                      },
                    },
                  ],
                });
              },
              ignoreCSSAttributes: this.ignoreCSSAttributes,
            });
            a && (e.push({ parentId: i, nextId: s, node: a }), t.add(a.id));
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const e of this.movedSet)
          (We(this.removes, e, this.mirror) &&
            !this.movedSet.has(e.parentNode)) ||
            o(e);
        for (const e of this.addedSet)
          Ve(this.droppedSet, e) || We(this.removes, e, this.mirror)
            ? Ve(this.movedSet, e)
              ? o(e)
              : this.droppedSet.add(e)
            : o(e);
        let i = null;
        for (; n.length; ) {
          let e = null;
          if (i) {
            const t = this.mirror.getId(i.value.parentNode),
              n = r(i.value);
            -1 !== t && -1 !== n && (e = i);
          }
          if (!e) {
            let t = n.tail;
            for (; t; ) {
              const n = t;
              if (((t = t.previous), n)) {
                const t = this.mirror.getId(n.value.parentNode);
                if (-1 === r(n.value)) continue;
                if (-1 !== t) {
                  e = n;
                  break;
                }
                {
                  const t = n.value;
                  if (
                    t.parentNode &&
                    t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ) {
                    const r = t.parentNode.host;
                    if (-1 !== this.mirror.getId(r)) {
                      e = n;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!e) {
            for (; n.head; ) n.removeNode(n.head.value);
            break;
          }
          (i = e.previous), n.removeNode(e.value), o(e.value);
        }
        const s = {
          texts: this.texts
            .map((e) => ({
              id: this.mirror.getId(e.node),
              value: e.value,
            }))
            .filter((e) => !t.has(e.id))
            .filter((e) => this.mirror.has(e.id)),
          attributes: this.attributes
            .map((e) => {
              const { attributes: t } = e;
              if ("string" == typeof t.style) {
                const n = JSON.stringify(e.styleDiff),
                  r = JSON.stringify(e._unchangedStyles);
                n.length < t.style.length &&
                  (n + r).split("var(").length ===
                    t.style.split("var(").length &&
                  (t.style = e.styleDiff);
              }
              return { id: this.mirror.getId(e.node), attributes: t };
            })
            .filter((e) => !t.has(e.id))
            .filter((e) => this.mirror.has(e.id)),
          removes: this.removes,
          adds: e,
        };
        (s.texts.length ||
          s.attributes.length ||
          s.removes.length ||
          s.adds.length) &&
          ((this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(s));
      }),
      (this.processMutation = (e) => {
        if (!de(e.target, this.mirror))
          switch (e.type) {
            case "characterData": {
              const t = e.target.textContent;
              le(
                e.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1,
              ) ||
                t === e.oldValue ||
                this.texts.push({
                  value:
                    z(
                      e.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText,
                    ) && t
                      ? this.maskTextFn
                        ? this.maskTextFn(t, ue(e.target))
                        : t.replace(/[\S]/g, "*")
                      : t,
                  node: e.target,
                });
              break;
            }
            case "attributes": {
              const t = e.target;
              let n = e.attributeName,
                r = e.target.getAttribute(n);
              if ("value" === n) {
                const n = v(t),
                  o = t.tagName;
                r = A(t, o, n);
                const i = E({
                  maskInputOptions: this.maskInputOptions,
                  tagName: o,
                  type: n,
                });
                r = y({
                  isMasked: z(
                    e.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    i,
                  ),
                  element: t,
                  value: r,
                  maskInputFn: this.maskInputFn,
                });
              }
              if (
                le(
                  e.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                r === e.oldValue
              )
                return;
              let o = this.attributeMap.get(e.target);
              if (
                "IFRAME" === t.tagName &&
                "src" === n &&
                !this.keepIframeSrcFn(r)
              ) {
                if (Me(t)) return;
                n = "rr_src";
              }
              if (
                (o ||
                  ((o = {
                    node: e.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {},
                  }),
                  this.attributes.push(o),
                  this.attributeMap.set(e.target, o)),
                "type" === n &&
                  "INPUT" === t.tagName &&
                  "password" === (e.oldValue || "").toLowerCase() &&
                  t.setAttribute("data-rr-is-password", "true"),
                !K(t.tagName, n) &&
                  ((o.attributes[n] = q(
                    this.doc,
                    T(t.tagName),
                    T(n),
                    r,
                    t,
                    this.maskAttributeFn,
                  )),
                  "style" === n))
              ) {
                const n = e.oldValue
                  ? this.styleDeclarationParser.parse(e.oldValue)
                  : null;
                for (const e of Array.from(t.style)) {
                  const r = t.style.getPropertyValue(e),
                    i = t.style.getPropertyPriority(e);
                  r !== (n?.getPropertyValue(e) || "") ||
                  i !== (n?.getPropertyPriority(e) || "")
                    ? (o.styleDiff[e] = "" === i ? r : [r, i])
                    : (o._unchangedStyles[e] = [r, i]);
                }
                if (n)
                  for (const e of Array.from(n))
                    "" === t.style.getPropertyValue(e) && (o.styleDiff[e] = !1);
              }
              break;
            }
            case "childList":
              if (
                le(
                  e.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !0,
                )
              )
                return;
              e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                e.removedNodes.forEach((t) => {
                  const n = this.mirror.getId(t),
                    r = h(e.target)
                      ? this.mirror.getId(e.target.host)
                      : this.mirror.getId(e.target);
                  le(
                    e.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) ||
                    de(t, this.mirror) ||
                    !(function (e, t) {
                      return -1 !== t.getId(e);
                    })(t, this.mirror) ||
                    (this.addedSet.has(t)
                      ? (He(this.addedSet, t), this.droppedSet.add(t))
                      : (this.addedSet.has(e.target) && -1 === n) ||
                        pe(e.target, this.mirror) ||
                        (this.movedSet.has(t) && this.movedMap[Fe(n, r)]
                          ? He(this.movedSet, t)
                          : this.removes.push({
                              parentId: r,
                              id: n,
                              isShadow:
                                !(!h(e.target) || !g(e.target)) || void 0,
                            })),
                    this.mapRemoves.push(t));
                });
          }
      }),
      (this.genAdds = (e, t) => {
        if (
          !this.processedNodeManager.inOtherBuffer(e, this) &&
          !this.addedSet.has(e) &&
          !this.movedSet.has(e)
        ) {
          if (this.mirror.hasNode(e)) {
            if (de(e, this.mirror)) return;
            this.movedSet.add(e);
            let n = null;
            t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
              n &&
                -1 !== n &&
                (this.movedMap[Fe(this.mirror.getId(e), n)] = !0);
          } else this.addedSet.add(e), this.droppedSet.delete(e);
          le(
            e,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1,
          ) ||
            (e.childNodes && e.childNodes.forEach((e) => this.genAdds(e)),
            me(e) &&
              e.shadowRoot.childNodes.forEach((t) => {
                this.processedNodeManager.add(t, this), this.genAdds(t, e);
              }));
        }
      });
  }
  init(e) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
      "ignoreCSSAttributes",
    ].forEach((t) => {
      this[t] = e[t];
    }),
      (this.styleDeclarationParser = new Ue(this.doc));
  }
  freeze() {
    (this.frozen = !0), this.canvasManager.freeze();
  }
  unfreeze() {
    (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    (this.locked = !0), this.canvasManager.lock();
  }
  unlock() {
    (this.locked = !1), this.canvasManager.unlock(), this.emit();
  }
  reset() {
    this.shadowDomManager.reset(), this.canvasManager.reset();
  }
}
function He(e, t) {
  e.delete(t), t.childNodes?.forEach((t) => He(e, t));
}
function We(e, t, n) {
  return (
    0 !== e.length &&
    (function (e, t, n) {
      let r = t.parentNode;
      for (; r; ) {
        const t = n.getId(r);
        if (e.some((e) => e.id === t)) return !0;
        r = r.parentNode;
      }
      return !1;
    })(e, t, n)
  );
}
function Ve(e, t) {
  return 0 !== e.size && $e(e, t);
}
function $e(e, t) {
  const { parentNode: n } = t;
  return !!n && (!!e.has(n) || $e(e, n));
}
const Ye = [];
function qe(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function Ke(e, t) {
  const n = new je();
  Ye.push(n), n.init(e);
  let r = window.MutationObserver || window.__rrMutationObserver;
  const o = window?.Zone?.__symbol__?.("MutationObserver");
  o && window[o] && (r = window[o]);
  const i = new r(
    ke((t) => {
      (e.onMutation && !1 === e.onMutation(t)) || n.processMutations.bind(n)(t);
    }),
  );
  return (
    i.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    i
  );
}
function Xe({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: o,
  unblockSelector: i,
  sampling: s,
}) {
  return ee(
    "scroll",
    ke(
      ne(
        ke((s) => {
          const a = qe(s);
          if (!a || le(a, r, o, i, !0)) return;
          const c = n.getId(a);
          if (a === t && t.defaultView) {
            const n = se(t.defaultView);
            e({ id: c, x: n.left, y: n.top });
          } else e({ id: c, x: a.scrollLeft, y: a.scrollTop });
        }),
        s.scroll || 100,
      ),
    ),
    t,
  );
}
const Ze = ["INPUT", "TEXTAREA", "SELECT"],
  ze = new WeakMap();
function Je({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: o,
  unblockSelector: i,
  ignoreClass: s,
  ignoreSelector: a,
  maskInputOptions: c,
  maskInputFn: u,
  sampling: l,
  userTriggeredOnInput: d,
  maskTextClass: p,
  unmaskTextClass: f,
  maskTextSelector: h,
  unmaskTextSelector: g,
}) {
  function m(e) {
    let n = qe(e);
    const l = e.isTrusted,
      m = n && b(n.tagName);
    if (
      ("OPTION" === m && (n = n.parentElement),
      !n || !m || Ze.indexOf(m) < 0 || le(n, r, o, i, !0))
    )
      return;
    const S = n;
    if (S.classList.contains(s) || (a && S.matches(a))) return;
    const T = v(n);
    let I = A(S, m, T),
      N = !1;
    const R = E({ maskInputOptions: c, tagName: m, type: T }),
      C = z(n, p, h, f, g, R);
    ("radio" !== T && "checkbox" !== T) || (N = n.checked),
      (I = y({ isMasked: C, element: n, value: I, maskInputFn: u })),
      _(
        n,
        d
          ? { text: I, isChecked: N, userTriggered: l }
          : { text: I, isChecked: N },
      );
    const O = n.name;
    "radio" === T &&
      O &&
      N &&
      t.querySelectorAll(`input[type="radio"][name="${O}"]`).forEach((e) => {
        if (e !== n) {
          const t = y({
            isMasked: C,
            element: e,
            value: A(e, m, T),
            maskInputFn: u,
          });
          _(
            e,
            d
              ? { text: t, isChecked: !N, userTriggered: !1 }
              : { text: t, isChecked: !N },
          );
        }
      });
  }
  function _(t, r) {
    const o = ze.get(t);
    if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
      ze.set(t, r);
      const o = n.getId(t);
      ke(e)({ ...r, id: o });
    }
  }
  const S = ("last" === l.input ? ["change"] : ["input", "change"]).map((e) =>
      ee(e, ke(m), t),
    ),
    T = t.defaultView;
  if (!T)
    return () => {
      S.forEach((e) => e());
    };
  const I = T.Object.getOwnPropertyDescriptor(
      T.HTMLInputElement.prototype,
      "value",
    ),
    N = [
      [T.HTMLInputElement.prototype, "value"],
      [T.HTMLInputElement.prototype, "checked"],
      [T.HTMLSelectElement.prototype, "value"],
      [T.HTMLTextAreaElement.prototype, "value"],
      [T.HTMLSelectElement.prototype, "selectedIndex"],
      [T.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    I &&
      I.set &&
      S.push(
        ...N.map((e) =>
          re(
            e[0],
            e[1],
            {
              set() {
                ke(m)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            T,
          ),
        ),
      ),
    ke(() => {
      S.forEach((e) => e());
    })
  );
}
function Qe(e) {
  return (function (e, t) {
    if (
      (rt("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule) ||
      (rt("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
      (rt("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule) ||
      (rt("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
    ) {
      const n = Array.from(e.parentRule.cssRules).indexOf(e);
      t.unshift(n);
    } else if (e.parentStyleSheet) {
      const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
      t.unshift(n);
    }
    return t;
  })(e, []);
}
function et(e, t, n) {
  let r, o;
  return e
    ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (o = n.getId(e)),
      { styleId: o, id: r })
    : {};
}
function tt({ mirror: e, stylesheetManager: t }, n) {
  let r = null;
  r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
  const o =
      "#document" === n.nodeName
        ? n.defaultView?.Document
        : n.ownerDocument?.defaultView?.ShadowRoot,
    i = o?.prototype
      ? Object.getOwnPropertyDescriptor(o?.prototype, "adoptedStyleSheets")
      : void 0;
  return null !== r && -1 !== r && o && i
    ? (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: i.configurable,
        enumerable: i.enumerable,
        get() {
          return i.get?.call(this);
        },
        set(e) {
          const n = i.set?.call(this, e);
          if (null !== r && -1 !== r)
            try {
              t.adoptStyleSheets(e, r);
            } catch (e) {}
          return n;
        },
      }),
      ke(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: i.configurable,
          enumerable: i.enumerable,
          get: i.get,
          set: i.set,
        });
      }))
    : () => {};
}
function nt(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n) return () => {};
  let r;
  e.recordDOM && (r = Ke(e, e.doc));
  const o = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
      if (!1 === t.mousemove) return () => {};
      const o = "number" == typeof t.mousemove ? t.mousemove : 50,
        i = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
      let s,
        a = [];
      const c = ne(
          ke((t) => {
            const n = Date.now() - s;
            e(
              a.map((e) => ((e.timeOffset -= n), e)),
              t,
            ),
              (a = []),
              (s = null);
          }),
          i,
        ),
        u = ke(
          ne(
            ke((e) => {
              const t = qe(e),
                { clientX: n, clientY: o } = fe(e) ? e.changedTouches[0] : e;
              s || (s = ie()),
                a.push({
                  x: n,
                  y: o,
                  id: r.getId(t),
                  timeOffset: ie() - s,
                }),
                c(
                  "undefined" != typeof DragEvent && e instanceof DragEvent
                    ? ve.Drag
                    : e instanceof MouseEvent
                      ? ve.MouseMove
                      : ve.TouchMove,
                );
            }),
            o,
            { trailing: !1 },
          ),
        ),
        l = [ee("mousemove", u, n), ee("touchmove", u, n), ee("drag", u, n)];
      return ke(() => {
        l.forEach((e) => e());
      });
    })(e),
    i = (function ({
      mouseInteractionCb: e,
      doc: t,
      mirror: n,
      blockClass: r,
      blockSelector: o,
      unblockSelector: i,
      sampling: s,
    }) {
      if (!1 === s.mouseInteraction) return () => {};
      const a =
          !0 === s.mouseInteraction || void 0 === s.mouseInteraction
            ? {}
            : s.mouseInteraction,
        c = [];
      let u = null;
      return (
        Object.keys(Ae)
          .filter(
            (e) =>
              Number.isNaN(Number(e)) &&
              !e.endsWith("_Departed") &&
              !1 !== a[e],
          )
          .forEach((s) => {
            let a = T(s);
            const l = ((t) => (s) => {
              const a = qe(s);
              if (le(a, r, o, i, !0)) return;
              let c = null,
                l = t;
              if ("pointerType" in s) {
                switch (s.pointerType) {
                  case "mouse":
                    c = Ne.Mouse;
                    break;
                  case "touch":
                    c = Ne.Touch;
                    break;
                  case "pen":
                    c = Ne.Pen;
                }
                c === Ne.Touch
                  ? Ae[t] === Ae.MouseDown
                    ? (l = "TouchStart")
                    : Ae[t] === Ae.MouseUp && (l = "TouchEnd")
                  : Ne.Pen;
              } else fe(s) && (c = Ne.Touch);
              null !== c
                ? ((u = c),
                  ((l.startsWith("Touch") && c === Ne.Touch) ||
                    (l.startsWith("Mouse") && c === Ne.Mouse)) &&
                    (c = null))
                : Ae[t] === Ae.Click && ((c = u), (u = null));
              const d = fe(s) ? s.changedTouches[0] : s;
              if (!d) return;
              const p = n.getId(a),
                { clientX: f, clientY: h } = d;
              ke(e)({
                type: Ae[l],
                id: p,
                x: f,
                y: h,
                ...(null !== c && { pointerType: c }),
              });
            })(s);
            if (window.PointerEvent)
              switch (Ae[s]) {
                case Ae.MouseDown:
                case Ae.MouseUp:
                  a = a.replace("mouse", "pointer");
                  break;
                case Ae.TouchStart:
                case Ae.TouchEnd:
                  return;
              }
            c.push(ee(a, l, t));
          }),
        ke(() => {
          c.forEach((e) => e());
        })
      );
    })(e),
    s = Xe(e),
    a = (function ({ viewportResizeCb: e }, { win: t }) {
      let n = -1,
        r = -1;
      return ee(
        "resize",
        ke(
          ne(
            ke(() => {
              const t = ae(),
                o = ce();
              (n === t && r === o) ||
                (e({ width: Number(o), height: Number(t) }), (n = t), (r = o));
            }),
            200,
          ),
        ),
        t,
      );
    })(e, { win: n }),
    c = Je(e),
    u = (function ({
      mediaInteractionCb: e,
      blockClass: t,
      blockSelector: n,
      unblockSelector: r,
      mirror: o,
      sampling: i,
      doc: s,
    }) {
      const a = ke((s) =>
          ne(
            ke((i) => {
              const a = qe(i);
              if (!a || le(a, t, n, r, !0)) return;
              const {
                currentTime: c,
                volume: u,
                muted: l,
                playbackRate: d,
              } = a;
              e({
                type: s,
                id: o.getId(a),
                currentTime: c,
                volume: u,
                muted: l,
                playbackRate: d,
              });
            }),
            i.media || 500,
          ),
        ),
        c = [
          ee("play", a(Re.Play), s),
          ee("pause", a(Re.Pause), s),
          ee("seeked", a(Re.Seeked), s),
          ee("volumechange", a(Re.VolumeChange), s),
          ee("ratechange", a(Re.RateChange), s),
        ];
      return ke(() => {
        c.forEach((e) => e());
      });
    })(e);
  let l = () => {},
    d = () => {},
    p = () => {},
    f = () => {};
  e.recordDOM &&
    ((l = (function (
      { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
      { win: r },
    ) {
      if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
      const o = r.CSSStyleSheet.prototype.insertRule;
      r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
        apply: ke((r, o, i) => {
          const [s, a] = i,
            { id: c, styleId: u } = et(o, t, n.styleMirror);
          return (
            ((c && -1 !== c) || (u && -1 !== u)) &&
              e({ id: c, styleId: u, adds: [{ rule: s, index: a }] }),
            r.apply(o, i)
          );
        }),
      });
      const i = r.CSSStyleSheet.prototype.deleteRule;
      let s, a;
      (r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
        apply: ke((r, o, i) => {
          const [s] = i,
            { id: a, styleId: c } = et(o, t, n.styleMirror);
          return (
            ((a && -1 !== a) || (c && -1 !== c)) &&
              e({ id: a, styleId: c, removes: [{ index: s }] }),
            r.apply(o, i)
          );
        }),
      })),
        r.CSSStyleSheet.prototype.replace &&
          ((s = r.CSSStyleSheet.prototype.replace),
          (r.CSSStyleSheet.prototype.replace = new Proxy(s, {
            apply: ke((r, o, i) => {
              const [s] = i,
                { id: a, styleId: c } = et(o, t, n.styleMirror);
              return (
                ((a && -1 !== a) || (c && -1 !== c)) &&
                  e({ id: a, styleId: c, replace: s }),
                r.apply(o, i)
              );
            }),
          }))),
        r.CSSStyleSheet.prototype.replaceSync &&
          ((a = r.CSSStyleSheet.prototype.replaceSync),
          (r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
            apply: ke((r, o, i) => {
              const [s] = i,
                { id: a, styleId: c } = et(o, t, n.styleMirror);
              return (
                ((a && -1 !== a) || (c && -1 !== c)) &&
                  e({ id: a, styleId: c, replaceSync: s }),
                r.apply(o, i)
              );
            }),
          })));
      const c = {};
      ot("CSSGroupingRule")
        ? (c.CSSGroupingRule = r.CSSGroupingRule)
        : (ot("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule),
          ot("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule),
          ot("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
      const u = {};
      return (
        Object.entries(c).forEach(([r, o]) => {
          (u[r] = {
            insertRule: o.prototype.insertRule,
            deleteRule: o.prototype.deleteRule,
          }),
            (o.prototype.insertRule = new Proxy(u[r].insertRule, {
              apply: ke((r, o, i) => {
                const [s, a] = i,
                  { id: c, styleId: u } = et(
                    o.parentStyleSheet,
                    t,
                    n.styleMirror,
                  );
                return (
                  ((c && -1 !== c) || (u && -1 !== u)) &&
                    e({
                      id: c,
                      styleId: u,
                      adds: [{ rule: s, index: [...Qe(o), a || 0] }],
                    }),
                  r.apply(o, i)
                );
              }),
            })),
            (o.prototype.deleteRule = new Proxy(u[r].deleteRule, {
              apply: ke((r, o, i) => {
                const [s] = i,
                  { id: a, styleId: c } = et(
                    o.parentStyleSheet,
                    t,
                    n.styleMirror,
                  );
                return (
                  ((a && -1 !== a) || (c && -1 !== c)) &&
                    e({
                      id: a,
                      styleId: c,
                      removes: [{ index: [...Qe(o), s] }],
                    }),
                  r.apply(o, i)
                );
              }),
            }));
        }),
        ke(() => {
          (r.CSSStyleSheet.prototype.insertRule = o),
            (r.CSSStyleSheet.prototype.deleteRule = i),
            s && (r.CSSStyleSheet.prototype.replace = s),
            a && (r.CSSStyleSheet.prototype.replaceSync = a),
            Object.entries(c).forEach(([e, t]) => {
              (t.prototype.insertRule = u[e].insertRule),
                (t.prototype.deleteRule = u[e].deleteRule);
            });
        })
      );
    })(e, { win: n })),
    (d = tt(e, e.doc)),
    (p = (function (
      {
        styleDeclarationCb: e,
        mirror: t,
        ignoreCSSAttributes: n,
        stylesheetManager: r,
      },
      { win: o },
    ) {
      const i = o.CSSStyleDeclaration.prototype.setProperty;
      o.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
        apply: ke((o, s, a) => {
          const [c, u, l] = a;
          if (n.has(c)) return i.apply(s, [c, u, l]);
          const { id: d, styleId: p } = et(
            s.parentRule?.parentStyleSheet,
            t,
            r.styleMirror,
          );
          return (
            ((d && -1 !== d) || (p && -1 !== p)) &&
              e({
                id: d,
                styleId: p,
                set: { property: c, value: u, priority: l },
                index: Qe(s.parentRule),
              }),
            o.apply(s, a)
          );
        }),
      });
      const s = o.CSSStyleDeclaration.prototype.removeProperty;
      return (
        (o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
          apply: ke((o, i, a) => {
            const [c] = a;
            if (n.has(c)) return s.apply(i, [c]);
            const { id: u, styleId: l } = et(
              i.parentRule?.parentStyleSheet,
              t,
              r.styleMirror,
            );
            return (
              ((u && -1 !== u) || (l && -1 !== l)) &&
                e({
                  id: u,
                  styleId: l,
                  remove: { property: c },
                  index: Qe(i.parentRule),
                }),
              o.apply(i, a)
            );
          }),
        })),
        ke(() => {
          (o.CSSStyleDeclaration.prototype.setProperty = i),
            (o.CSSStyleDeclaration.prototype.removeProperty = s);
        })
      );
    })(e, { win: n })),
    e.collectFonts &&
      (f = (function ({ fontCb: e, doc: t }) {
        const n = t.defaultView;
        if (!n) return () => {};
        const r = [],
          o = new WeakMap(),
          i = n.FontFace;
        n.FontFace = function (e, t, n) {
          const r = new i(e, t, n);
          return (
            o.set(r, {
              family: e,
              buffer: "string" != typeof t,
              descriptors: n,
              fontSource:
                "string" == typeof t
                  ? t
                  : JSON.stringify(Array.from(new Uint8Array(t))),
            }),
            r
          );
        };
        const s = oe(t.fonts, "add", function (t) {
          return function (n) {
            return (
              be(
                ke(() => {
                  const t = o.get(n);
                  t && (e(t), o.delete(n));
                }),
                0,
              ),
              t.apply(this, [n])
            );
          };
        });
        return (
          r.push(() => {
            n.FontFace = i;
          }),
          r.push(s),
          ke(() => {
            r.forEach((e) => e());
          })
        );
      })(e)));
  const h = (function (e) {
      const {
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: o,
        unblockSelector: i,
        selectionCb: s,
      } = e;
      let a = !0;
      const c = ke(() => {
        const e = t.getSelection();
        if (!e || (a && e?.isCollapsed)) return;
        a = e.isCollapsed || !1;
        const c = [],
          u = e.rangeCount || 0;
        for (let t = 0; t < u; t++) {
          const s = e.getRangeAt(t),
            {
              startContainer: a,
              startOffset: u,
              endContainer: l,
              endOffset: d,
            } = s;
          le(a, r, o, i, !0) ||
            le(l, r, o, i, !0) ||
            c.push({
              start: n.getId(a),
              startOffset: u,
              end: n.getId(l),
              endOffset: d,
            });
        }
        s({ ranges: c });
      });
      return c(), ee("selectionchange", c);
    })(e),
    g = (function ({ doc: e, customElementCb: t }) {
      const n = e.defaultView;
      return n && n.customElements
        ? oe(n.customElements, "define", function (e) {
            return function (n, r, o) {
              try {
                t({ define: { name: n } });
              } catch (e) {}
              return e.apply(this, [n, r, o]);
            };
          })
        : () => {};
    })(e),
    m = [];
  for (const t of e.plugins) m.push(t.observer(t.callback, n, t.options));
  return ke(() => {
    Ye.forEach((e) => e.reset()),
      r?.disconnect(),
      o(),
      i(),
      s(),
      a(),
      c(),
      u(),
      l(),
      d(),
      p(),
      f(),
      h(),
      g(),
      m.forEach((e) => e());
  });
}
function rt(e) {
  return void 0 !== window[e];
}
function ot(e) {
  return Boolean(
    void 0 !== window[e] &&
      window[e].prototype &&
      "insertRule" in window[e].prototype &&
      "deleteRule" in window[e].prototype,
  );
}
class it {
  constructor(e) {
    (this.generateIdFn = e),
      (this.iframeIdToRemoteIdMap = new WeakMap()),
      (this.iframeRemoteIdToIdMap = new WeakMap());
  }
  getId(e, t, n, r) {
    const o = n || this.getIdToRemoteIdMap(e),
      i = r || this.getRemoteIdToIdMap(e);
    let s = o.get(t);
    return s || ((s = this.generateIdFn()), o.set(t, s), i.set(s, t)), s;
  }
  getIds(e, t) {
    const n = this.getIdToRemoteIdMap(e),
      r = this.getRemoteIdToIdMap(e);
    return t.map((t) => this.getId(e, t, n, r));
  }
  getRemoteId(e, t, n) {
    const r = n || this.getRemoteIdToIdMap(e);
    if ("number" != typeof t) return t;
    return r.get(t) || -1;
  }
  getRemoteIds(e, t) {
    const n = this.getRemoteIdToIdMap(e);
    return t.map((t) => this.getRemoteId(e, t, n));
  }
  reset(e) {
    if (!e)
      return (
        (this.iframeIdToRemoteIdMap = new WeakMap()),
        void (this.iframeRemoteIdToIdMap = new WeakMap())
      );
    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
  }
  getIdToRemoteIdMap(e) {
    let t = this.iframeIdToRemoteIdMap.get(e);
    return t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t;
  }
  getRemoteIdToIdMap(e) {
    let t = this.iframeRemoteIdToIdMap.get(e);
    return t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t;
  }
}
class st {
  constructor() {
    (this.crossOriginIframeMirror = new it(x)),
      (this.crossOriginIframeRootIdMap = new WeakMap());
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class at {
  constructor(e) {
    (this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new it(x)),
      (this.crossOriginIframeRootIdMap = new WeakMap()),
      (this.mutationCb = e.mutationCb),
      (this.wrappedEmit = e.wrappedEmit),
      (this.stylesheetManager = e.stylesheetManager),
      (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
      (this.crossOriginIframeStyleMirror = new it(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror,
        ),
      )),
      (this.mirror = e.mirror),
      this.recordCrossOriginIframes &&
        window.addEventListener("message", this.handleMessage.bind(this));
  }
  addIframe(e) {
    this.iframes.set(e, !0);
    const t = De(e);
    t && this.crossOriginIframeMap.set(t, e);
  }
  addLoadListener(e) {
    this.loadListener = e;
  }
  attachIframe(e, t) {
    this.mutationCb({
      adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      this.recordCrossOriginIframes &&
        De(e)?.addEventListener("message", this.handleMessage.bind(this)),
      this.loadListener?.(e);
    const n = Me(e);
    n &&
      n.adoptedStyleSheets &&
      n.adoptedStyleSheets.length > 0 &&
      this.stylesheetManager.adoptStyleSheets(
        n.adoptedStyleSheets,
        this.mirror.getId(n),
      );
  }
  handleMessage(e) {
    const t = e;
    if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
    if (!e.source) return;
    const n = this.crossOriginIframeMap.get(e.source);
    if (!n) return;
    const r = this.transformCrossOriginEvent(n, t.data.event);
    r && this.wrappedEmit(r, t.data.isCheckout);
  }
  transformCrossOriginEvent(e, t) {
    switch (t.type) {
      case Ie.FullSnapshot: {
        this.crossOriginIframeMirror.reset(e),
          this.crossOriginIframeStyleMirror.reset(e),
          this.replaceIdOnNode(t.data.node, e);
        const n = t.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(e, n),
          this.patchRootIdOnNode(t.data.node, n),
          {
            timestamp: t.timestamp,
            type: Ie.IncrementalSnapshot,
            data: {
              source: ve.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(e),
                  nextId: null,
                  node: t.data.node,
                },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            },
          }
        );
      }
      case Ie.Meta:
      case Ie.Load:
      case Ie.DomContentLoaded:
        return !1;
      case Ie.Plugin:
        return t;
      case Ie.Custom:
        return (
          this.replaceIds(t.data.payload, e, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          t
        );
      case Ie.IncrementalSnapshot:
        switch (t.data.source) {
          case ve.Mutation:
            return (
              t.data.adds.forEach((t) => {
                this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                  this.replaceIdOnNode(t.node, e);
                const n = this.crossOriginIframeRootIdMap.get(e);
                n && this.patchRootIdOnNode(t.node, n);
              }),
              t.data.removes.forEach((t) => {
                this.replaceIds(t, e, ["parentId", "id"]);
              }),
              t.data.attributes.forEach((t) => {
                this.replaceIds(t, e, ["id"]);
              }),
              t.data.texts.forEach((t) => {
                this.replaceIds(t, e, ["id"]);
              }),
              t
            );
          case ve.Drag:
          case ve.TouchMove:
          case ve.MouseMove:
            return (
              t.data.positions.forEach((t) => {
                this.replaceIds(t, e, ["id"]);
              }),
              t
            );
          case ve.ViewportResize:
            return !1;
          case ve.MediaInteraction:
          case ve.MouseInteraction:
          case ve.Scroll:
          case ve.CanvasMutation:
          case ve.Input:
            return this.replaceIds(t.data, e, ["id"]), t;
          case ve.StyleSheetRule:
          case ve.StyleDeclaration:
            return (
              this.replaceIds(t.data, e, ["id"]),
              this.replaceStyleIds(t.data, e, ["styleId"]),
              t
            );
          case ve.Font:
            return t;
          case ve.Selection:
            return (
              t.data.ranges.forEach((t) => {
                this.replaceIds(t, e, ["start", "end"]);
              }),
              t
            );
          case ve.AdoptedStyleSheet:
            return (
              this.replaceIds(t.data, e, ["id"]),
              this.replaceStyleIds(t.data, e, ["styleIds"]),
              t.data.styles?.forEach((t) => {
                this.replaceStyleIds(t, e, ["styleId"]);
              }),
              t
            );
        }
    }
    return !1;
  }
  replace(e, t, n, r) {
    for (const o of r)
      (Array.isArray(t[o]) || "number" == typeof t[o]) &&
        (Array.isArray(t[o])
          ? (t[o] = e.getIds(n, t[o]))
          : (t[o] = e.getId(n, t[o])));
    return t;
  }
  replaceIds(e, t, n) {
    return this.replace(this.crossOriginIframeMirror, e, t, n);
  }
  replaceStyleIds(e, t, n) {
    return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
  }
  replaceIdOnNode(e, t) {
    this.replaceIds(e, t, ["id", "rootId"]),
      "childNodes" in e &&
        e.childNodes.forEach((e) => {
          this.replaceIdOnNode(e, t);
        });
  }
  patchRootIdOnNode(e, t) {
    e.type === f.Document || e.rootId || (e.rootId = t),
      "childNodes" in e &&
        e.childNodes.forEach((e) => {
          this.patchRootIdOnNode(e, t);
        });
  }
}
class ct {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class ut {
  constructor(e) {
    (this.shadowDoms = new WeakSet()),
      (this.restoreHandlers = []),
      (this.mutationCb = e.mutationCb),
      (this.scrollCb = e.scrollCb),
      (this.bypassOptions = e.bypassOptions),
      (this.mirror = e.mirror),
      this.init();
  }
  init() {
    this.reset(), this.patchAttachShadow(Element, document);
  }
  addShadowRoot(e, t) {
    if (!g(e)) return;
    if (this.shadowDoms.has(e)) return;
    this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
    const n = Ke(
      {
        ...this.bypassOptions,
        doc: t,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      },
      e,
    );
    this.restoreHandlers.push(() => n.disconnect()),
      this.restoreHandlers.push(
        Xe({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: e,
          mirror: this.mirror,
        }),
      ),
      be(() => {
        e.adoptedStyleSheets &&
          e.adoptedStyleSheets.length > 0 &&
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            e.adoptedStyleSheets,
            this.mirror.getId(e.host),
          ),
          this.restoreHandlers.push(
            tt(
              {
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
              },
              e,
            ),
          );
      }, 0);
  }
  observeAttachShadow(e) {
    const t = Me(e),
      n = De(e);
    t && n && this.patchAttachShadow(n.Element, t);
  }
  patchAttachShadow(e, t) {
    const n = this;
    this.restoreHandlers.push(
      oe(e.prototype, "attachShadow", function (e) {
        return function (r) {
          const o = e.call(this, r);
          return (
            this.shadowRoot && Ee(this) && n.addShadowRoot(this.shadowRoot, t),
            o
          );
        };
      }),
    );
  }
  reset() {
    this.restoreHandlers.forEach((e) => {
      try {
        e();
      } catch (e) {}
    }),
      (this.restoreHandlers = []),
      (this.shadowDoms = new WeakSet()),
      this.bypassOptions.canvasManager.resetShadowRoots();
  }
}
class lt {
  constructor(e) {
    (this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new _e()),
      (this.mutationCb = e.mutationCb),
      (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
  }
  attachLinkElement(e, t) {
    "_cssText" in t.attributes &&
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{ id: t.id, attributes: t.attributes }],
      }),
      this.trackLinkElement(e);
  }
  trackLinkElement(e) {
    this.trackedLinkElements.has(e) ||
      (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
  }
  adoptStyleSheets(e, t) {
    if (0 === e.length) return;
    const n = { id: t, styleIds: [] },
      r = [];
    for (const t of e) {
      let e;
      this.styleMirror.has(t)
        ? (e = this.styleMirror.getId(t))
        : ((e = this.styleMirror.add(t)),
          r.push({
            styleId: e,
            rules: Array.from(t.rules || CSSRule, (e, t) => ({
              rule: _(e),
              index: t,
            })),
          })),
        n.styleIds.push(e);
    }
    r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
  }
  reset() {
    this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
  }
  trackStylesheetInLinkElement(e) {}
}
class dt {
  constructor() {
    (this.nodeMap = new WeakMap()), (this.active = !1);
  }
  inOtherBuffer(e, t) {
    const n = this.nodeMap.get(e);
    return n && Array.from(n).some((e) => e !== t);
  }
  add(e, t) {
    this.active ||
      ((this.active = !0),
      (function (...e) {
        Te("requestAnimationFrame")(...e);
      })(() => {
        (this.nodeMap = new WeakMap()), (this.active = !1);
      })),
      this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
  }
  destroy() {}
}
let pt, ft;
try {
  if (2 !== Array.from([1], (e) => 2 * e)[0]) {
    const e = document.createElement("iframe");
    document.body.appendChild(e),
      (Array.from = e.contentWindow?.Array.from || Array.from),
      document.body.removeChild(e);
  }
} catch (e) {}
const ht = new S();
function gt(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: o = "rr-block",
    blockSelector: i = null,
    unblockSelector: s = null,
    ignoreClass: a = "rr-ignore",
    ignoreSelector: c = null,
    maskAllText: u = !1,
    maskTextClass: l = "rr-mask",
    unmaskTextClass: d = null,
    maskTextSelector: p = null,
    unmaskTextSelector: f = null,
    inlineStylesheet: h = !0,
    maskAllInputs: g,
    maskInputOptions: m,
    slimDOMOptions: _,
    maskAttributeFn: E,
    maskInputFn: y,
    maskTextFn: T,
    maxCanvasSize: b = null,
    packFn: I,
    sampling: v = {},
    dataURLOptions: A = {},
    mousemoveWait: N,
    recordDOM: R = !0,
    recordCanvas: C = !1,
    recordCrossOriginIframes: O = !1,
    recordAfter: w = "DOMContentLoaded" === e.recordAfter
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: k = !1,
    collectFonts: P = !1,
    inlineImages: L = !1,
    plugins: x,
    keepIframeSrcFn: M = () => !1,
    ignoreCSSAttributes: D = new Set([]),
    errorHandler: U,
    onMutation: B,
    getCanvasManager: G,
  } = e;
  Oe(U);
  const F = !O || window.parent === window;
  let j = !1;
  if (!F)
    try {
      window.parent.document && (j = !1);
    } catch (e) {
      j = !0;
    }
  if (F && !t) throw new Error("emit function is required");
  if (!F && !j) return () => {};
  void 0 !== N && void 0 === v.mousemove && (v.mousemove = N), ht.reset();
  const H =
      !0 === g
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : void 0 !== m
          ? m
          : {},
    W =
      !0 === _ || "all" === _
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === _,
            headMetaDescKeywords: "all" === _,
          }
        : _ || {};
  let V;
  !(function (e = window) {
    "NodeList" in e &&
      !e.NodeList.prototype.forEach &&
      (e.NodeList.prototype.forEach = Array.prototype.forEach),
      "DOMTokenList" in e &&
        !e.DOMTokenList.prototype.forEach &&
        (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
      Node.prototype.contains ||
        (Node.prototype.contains = (...e) => {
          let t = e[0];
          if (!(0 in e)) throw new TypeError("1 argument is required");
          do {
            if (this === t) return !0;
          } while ((t = t && t.parentNode));
          return !1;
        });
  })();
  let $ = 0;
  const Y = (e) => {
    for (const t of x || []) t.eventProcessor && (e = t.eventProcessor(e));
    return I && !j && (e = I(e)), e;
  };
  pt = (e, o) => {
    const i = e;
    if (
      ((i.timestamp = ie()),
      !Ye[0]?.isFrozen() ||
        i.type === Ie.FullSnapshot ||
        (i.type === Ie.IncrementalSnapshot && i.data.source === ve.Mutation) ||
        Ye.forEach((e) => e.unfreeze()),
      F)
    )
      t?.(Y(i), o);
    else if (j) {
      const e = {
        type: "rrweb",
        event: Y(i),
        origin: window.location.origin,
        isCheckout: o,
      };
      window.parent.postMessage(e, "*");
    }
    if (i.type === Ie.FullSnapshot) (V = i), ($ = 0);
    else if (i.type === Ie.IncrementalSnapshot) {
      if (i.data.source === ve.Mutation && i.data.isAttachIframe) return;
      $++;
      const e = r && $ >= r,
        t = n && V && i.timestamp - V.timestamp > n;
      (e || t) && re(!0);
    }
  };
  const q = (e) => {
      pt({
        type: Ie.IncrementalSnapshot,
        data: { source: ve.Mutation, ...e },
      });
    },
    K = (e) =>
      pt({
        type: Ie.IncrementalSnapshot,
        data: { source: ve.Scroll, ...e },
      }),
    X = (e) =>
      pt({
        type: Ie.IncrementalSnapshot,
        data: { source: ve.CanvasMutation, ...e },
      }),
    Z = new lt({
      mutationCb: q,
      adoptedStyleSheetCb: (e) =>
        pt({
          type: Ie.IncrementalSnapshot,
          data: { source: ve.AdoptedStyleSheet, ...e },
        }),
    }),
    z =
      "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
        ? new st()
        : new at({
            mirror: ht,
            mutationCb: q,
            stylesheetManager: Z,
            recordCrossOriginIframes: O,
            wrappedEmit: pt,
          });
  for (const e of x || [])
    e.getMirror &&
      e.getMirror({
        nodeMirror: ht,
        crossOriginIframeMirror: z.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: z.crossOriginIframeStyleMirror,
      });
  const J = new dt(),
    te = (function (e, t) {
      try {
        return e ? e(t) : new xe();
      } catch {
        return new xe();
      }
    })(G, {
      mirror: ht,
      win: window,
      mutationCb: (e) =>
        pt({
          type: Ie.IncrementalSnapshot,
          data: { source: ve.CanvasMutation, ...e },
        }),
      recordCanvas: C,
      blockClass: o,
      blockSelector: i,
      unblockSelector: s,
      maxCanvasSize: b,
      sampling: v.canvas,
      dataURLOptions: A,
      errorHandler: U,
    }),
    ne =
      "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new ct()
        : new ut({
            mutationCb: q,
            scrollCb: K,
            bypassOptions: {
              onMutation: B,
              blockClass: o,
              blockSelector: i,
              unblockSelector: s,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: f,
              inlineStylesheet: h,
              maskInputOptions: H,
              dataURLOptions: A,
              maskAttributeFn: E,
              maskTextFn: T,
              maskInputFn: y,
              recordCanvas: C,
              inlineImages: L,
              sampling: v,
              slimDOMOptions: W,
              iframeManager: z,
              stylesheetManager: Z,
              canvasManager: te,
              keepIframeSrcFn: M,
              processedNodeManager: J,
              ignoreCSSAttributes: D,
            },
            mirror: ht,
          }),
    re = (e = !1) => {
      if (!R) return;
      pt(
        {
          type: Ie.Meta,
          data: {
            href: window.location.href,
            width: ce(),
            height: ae(),
          },
        },
        e,
      ),
        Z.reset(),
        ne.init(),
        Ye.forEach((e) => e.lock());
      const t = (function (e, t) {
        const {
          mirror: n = new S(),
          blockClass: r = "rr-block",
          blockSelector: o = null,
          unblockSelector: i = null,
          maskAllText: s = !1,
          maskTextClass: a = "rr-mask",
          unmaskTextClass: c = null,
          maskTextSelector: u = null,
          unmaskTextSelector: l = null,
          inlineStylesheet: d = !0,
          inlineImages: p = !1,
          recordCanvas: f = !1,
          maskAllInputs: h = !1,
          maskAttributeFn: g,
          maskTextFn: m,
          maskInputFn: _,
          slimDOM: E = !1,
          dataURLOptions: y,
          preserveWhiteSpace: T,
          onSerialize: b,
          onIframeLoad: I,
          iframeLoadTimeout: v,
          onBlockedImageLoad: A,
          onStylesheetLoad: N,
          stylesheetLoadTimeout: R,
          keepIframeSrcFn: C = () => !1,
          ignoreCSSAttributes: O = new Set([]),
        } = t || {};
        return Q(e, {
          doc: e,
          mirror: n,
          blockClass: r,
          blockSelector: o,
          unblockSelector: i,
          maskAllText: s,
          maskTextClass: a,
          unmaskTextClass: c,
          maskTextSelector: u,
          unmaskTextSelector: l,
          skipChild: !1,
          inlineStylesheet: d,
          maskInputOptions:
            !0 === h
              ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0,
                }
              : !1 === h
                ? {}
                : h,
          maskAttributeFn: g,
          maskTextFn: m,
          maskInputFn: _,
          slimDOMOptions:
            !0 === E || "all" === E
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaDescKeywords: "all" === E,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaAuthorship: !0,
                  headMetaVerification: !0,
                }
              : !1 === E
                ? {}
                : E,
          dataURLOptions: y,
          inlineImages: p,
          recordCanvas: f,
          preserveWhiteSpace: T,
          onSerialize: b,
          onIframeLoad: I,
          iframeLoadTimeout: v,
          onBlockedImageLoad: A,
          onStylesheetLoad: N,
          stylesheetLoadTimeout: R,
          keepIframeSrcFn: C,
          newlyAddedElement: !1,
          ignoreCSSAttributes: O,
        });
      })(document, {
        mirror: ht,
        blockClass: o,
        blockSelector: i,
        unblockSelector: s,
        maskAllText: u,
        maskTextClass: l,
        unmaskTextClass: d,
        maskTextSelector: p,
        unmaskTextSelector: f,
        inlineStylesheet: h,
        maskAllInputs: H,
        maskAttributeFn: E,
        maskInputFn: y,
        maskTextFn: T,
        slimDOM: W,
        dataURLOptions: A,
        recordCanvas: C,
        inlineImages: L,
        onSerialize: (e) => {
          he(e, ht) && z.addIframe(e),
            ge(e, ht) && Z.trackLinkElement(e),
            me(e) && ne.addShadowRoot(e.shadowRoot, document);
        },
        onIframeLoad: (e, t) => {
          z.attachIframe(e, t);
          const n = De(e);
          n && te.addWindow(n), ne.observeAttachShadow(e);
        },
        onStylesheetLoad: (e, t) => {
          Z.attachLinkElement(e, t);
        },
        onBlockedImageLoad: (e, t, { width: n, height: r }) => {
          q({
            adds: [],
            removes: [],
            texts: [],
            attributes: [
              {
                id: t.id,
                attributes: {
                  style: { width: `${n}px`, height: `${r}px` },
                },
              },
            ],
          });
        },
        keepIframeSrcFn: M,
        ignoreCSSAttributes: D,
      });
      t &&
        (pt({
          type: Ie.FullSnapshot,
          data: { node: t, initialOffset: se(window) },
        }),
        Ye.forEach((e) => e.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          Z.adoptStyleSheets(document.adoptedStyleSheets, ht.getId(document)));
    };
  ft = re;
  try {
    const e = [],
      t = (e) =>
        ke(nt)(
          {
            onMutation: B,
            mutationCb: q,
            mousemoveCb: (e, t) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: t, positions: e },
              }),
            mouseInteractionCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.MouseInteraction, ...e },
              }),
            scrollCb: K,
            viewportResizeCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.ViewportResize, ...e },
              }),
            inputCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.Input, ...e },
              }),
            mediaInteractionCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.MediaInteraction, ...e },
              }),
            styleSheetRuleCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.StyleSheetRule, ...e },
              }),
            styleDeclarationCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.StyleDeclaration, ...e },
              }),
            canvasMutationCb: X,
            fontCb: (e) =>
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.Font, ...e },
              }),
            selectionCb: (e) => {
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.Selection, ...e },
              });
            },
            customElementCb: (e) => {
              pt({
                type: Ie.IncrementalSnapshot,
                data: { source: ve.CustomElement, ...e },
              });
            },
            blockClass: o,
            ignoreClass: a,
            ignoreSelector: c,
            maskAllText: u,
            maskTextClass: l,
            unmaskTextClass: d,
            maskTextSelector: p,
            unmaskTextSelector: f,
            maskInputOptions: H,
            inlineStylesheet: h,
            sampling: v,
            recordDOM: R,
            recordCanvas: C,
            inlineImages: L,
            userTriggeredOnInput: k,
            collectFonts: P,
            doc: e,
            maskAttributeFn: E,
            maskInputFn: y,
            maskTextFn: T,
            keepIframeSrcFn: M,
            blockSelector: i,
            unblockSelector: s,
            slimDOMOptions: W,
            dataURLOptions: A,
            mirror: ht,
            iframeManager: z,
            stylesheetManager: Z,
            shadowDomManager: ne,
            processedNodeManager: J,
            canvasManager: te,
            ignoreCSSAttributes: D,
            plugins:
              x
                ?.filter((e) => e.observer)
                ?.map((e) => ({
                  observer: e.observer,
                  options: e.options,
                  callback: (t) =>
                    pt({
                      type: Ie.Plugin,
                      data: { plugin: e.name, payload: t },
                    }),
                })) || [],
          },
          {},
        );
    z.addLoadListener((n) => {
      try {
        e.push(t(n.contentDocument));
      } catch (e) {}
    });
    const n = () => {
      re(), e.push(t(document));
    };
    return (
      "interactive" === document.readyState ||
      "complete" === document.readyState
        ? n()
        : (e.push(
            ee("DOMContentLoaded", () => {
              pt({ type: Ie.DomContentLoaded, data: {} }),
                "DOMContentLoaded" === w && n();
            }),
          ),
          e.push(
            ee(
              "load",
              () => {
                pt({ type: Ie.Load, data: {} }), "load" === w && n();
              },
              window,
            ),
          )),
      () => {
        e.forEach((e) => e()), J.destroy(), (ft = void 0), we();
      }
    );
  } catch (e) {}
}
var mt, _t;
function St(e) {
  return e > 9999999999 ? e : 1e3 * e;
}
function Et(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function yt(e, t) {
  "sentry.transaction" !== t.category &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: Ie.Custom,
          timestamp: 1e3 * (t.timestamp || 0),
          data: {
            tag: "breadcrumb",
            payload: r.normalize(t, 10, 1e3),
          },
        }),
        "console" === t.category
      ),
    ));
}
function Tt(e) {
  return e.closest("button,a") || e;
}
function bt(e) {
  const t = It(e);
  return t && t instanceof Element ? Tt(t) : t;
}
function It(e) {
  return (function (e) {
    return r.isObjectLike(e) && "target" in e;
  })(e)
    ? e.target
    : e;
}
let vt;
(gt.mirror = ht),
  (gt.takeFullSnapshot = function (e) {
    if (!ft) throw new Error("please take full snapshot after start recording");
    ft(e);
  }),
  ((_t = mt || (mt = {}))[(_t.NotStarted = 0)] = "NotStarted"),
  (_t[(_t.Running = 1)] = "Running"),
  (_t[(_t.Stopped = 2)] = "Stopped");
const At = new Set([
  ve.Mutation,
  ve.StyleSheetRule,
  ve.StyleDeclaration,
  ve.AdoptedStyleSheet,
  ve.CanvasMutation,
  ve.Selection,
  ve.MediaInteraction,
]);
class Nt {
  constructor(e, t, n = yt) {
    (this._lastMutation = 0),
      (this._lastScroll = 0),
      (this._clicks = []),
      (this._timeout = t.timeout / 1e3),
      (this._threshold = t.threshold / 1e3),
      (this._scrollTimeout = t.scrollTimeout / 1e3),
      (this._replay = e),
      (this._ignoreSelector = t.ignoreSelector),
      (this._addBreadcrumbEvent = n);
  }
  addListeners() {
    const e =
      ((t = () => {
        this._lastMutation = Ct();
      }),
      vt ||
        ((vt = []),
        r.fill(i, "open", function (e) {
          return function (...t) {
            if (vt)
              try {
                vt.forEach((e) => e());
              } catch {}
            return e.apply(i, t);
          };
        })),
      vt.push(t),
      () => {
        const e = vt ? vt.indexOf(t) : -1;
        e > -1 && vt.splice(e, 1);
      });
    var t;
    this._teardown = () => {
      e(),
        (this._clicks = []),
        (this._lastMutation = 0),
        (this._lastScroll = 0);
    };
  }
  removeListeners() {
    this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
  }
  handleClick(e, t) {
    if (
      (function (e, t) {
        return (
          !Rt.includes(e.tagName) ||
          ("INPUT" === e.tagName &&
            !["submit", "button"].includes(e.getAttribute("type") || "")) ||
          !(
            "A" !== e.tagName ||
            !(
              e.hasAttribute("download") ||
              (e.hasAttribute("target") && "_self" !== e.getAttribute("target"))
            )
          ) ||
          !(!t || !e.matches(t))
        );
      })(t, this._ignoreSelector) ||
      !(function (e) {
        return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp);
      })(e)
    )
      return;
    const n = {
      timestamp: Et(e.timestamp),
      clickBreadcrumb: e,
      clickCount: 0,
      node: t,
    };
    this._clicks.some(
      (e) => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1,
    ) ||
      (this._clicks.push(n),
      1 === this._clicks.length && this._scheduleCheckClicks());
  }
  registerMutation(e = Date.now()) {
    this._lastMutation = Et(e);
  }
  registerScroll(e = Date.now()) {
    this._lastScroll = Et(e);
  }
  registerClick(e) {
    const t = Tt(e);
    this._handleMultiClick(t);
  }
  _handleMultiClick(e) {
    this._getClicks(e).forEach((e) => {
      e.clickCount++;
    });
  }
  _getClicks(e) {
    return this._clicks.filter((t) => t.node === e);
  }
  _checkClicks() {
    const e = [],
      t = Ct();
    this._clicks.forEach((n) => {
      !n.mutationAfter &&
        this._lastMutation &&
        (n.mutationAfter =
          n.timestamp <= this._lastMutation
            ? this._lastMutation - n.timestamp
            : void 0),
        !n.scrollAfter &&
          this._lastScroll &&
          (n.scrollAfter =
            n.timestamp <= this._lastScroll
              ? this._lastScroll - n.timestamp
              : void 0),
        n.timestamp + this._timeout <= t && e.push(n);
    });
    for (const t of e) {
      const e = this._clicks.indexOf(t);
      e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1));
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(e) {
    const t = this._replay,
      n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
      r = e.mutationAfter && e.mutationAfter <= this._threshold,
      o = !n && !r,
      { clickCount: s, clickBreadcrumb: a } = e;
    if (o) {
      const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
        r = n < 1e3 * this._timeout ? "mutation" : "timeout",
        o = {
          type: "default",
          message: a.message,
          timestamp: a.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...a.data,
            url: i.location.href,
            route: t.getCurrentRoute(),
            timeAfterClickMs: n,
            endReason: r,
            clickCount: s || 1,
          },
        };
      return void this._addBreadcrumbEvent(t, o);
    }
    if (s > 1) {
      const e = {
        type: "default",
        message: a.message,
        timestamp: a.timestamp,
        category: "ui.multiClick",
        data: {
          ...a.data,
          url: i.location.href,
          route: t.getCurrentRoute(),
          clickCount: s,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(t, e);
    }
  }
  _scheduleCheckClicks() {
    this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
      (this._checkClickTimeout = o.setTimeout(() => this._checkClicks(), 1e3));
  }
}
const Rt = ["A", "BUTTON", "INPUT"];
function Ct() {
  return Date.now() / 1e3;
}
function Ot(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var wt = ((e) => (
  (e[(e.Document = 0)] = "Document"),
  (e[(e.DocumentType = 1)] = "DocumentType"),
  (e[(e.Element = 2)] = "Element"),
  (e[(e.Text = 3)] = "Text"),
  (e[(e.CDATA = 4)] = "CDATA"),
  (e[(e.Comment = 5)] = "Comment"),
  e
))(wt || {});
const kt = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
  "data-sentry-component",
]);
function Pt(e) {
  const t = {};
  !e["data-sentry-component"] &&
    e["data-sentry-element"] &&
    (e["data-sentry-component"] = e["data-sentry-element"]);
  for (const n in e)
    if (kt.has(n)) {
      let r = n;
      ("data-testid" !== n && "data-test-id" !== n) || (r = "testId"),
        (t[r] = e[n]);
    }
  return t;
}
function Lt(e, t) {
  const n = gt.mirror.getId(e),
    r = n && gt.mirror.getNode(n),
    o = r && gt.mirror.getMeta(r),
    i =
      o &&
      (function (e) {
        return e.type === wt.Element;
      })(o)
        ? o
        : null;
  return {
    message: t,
    data: i
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: i.tagName,
            textContent: Array.from(i.childNodes)
              .map((e) => e.type === wt.Text && e.textContent)
              .filter(Boolean)
              .map((e) => e.trim())
              .join(""),
            attributes: Pt(i.attributes),
          },
        }
      : {},
  };
}
const xt = {
  resource: function (e) {
    const {
      entryType: t,
      initiatorType: n,
      name: r,
      responseEnd: o,
      startTime: i,
      decodedBodySize: s,
      encodedBodySize: a,
      responseStatus: c,
      transferSize: u,
    } = e;
    return ["fetch", "xmlhttprequest"].includes(n)
      ? null
      : {
          type: `${t}.${n}`,
          start: Ut(i),
          end: Ut(o),
          name: r,
          data: {
            size: u,
            statusCode: c,
            decodedBodySize: s,
            encodedBodySize: a,
          },
        };
  },
  paint: function (e) {
    const { duration: t, entryType: n, name: r, startTime: o } = e,
      i = Ut(o);
    return { type: n, name: r, start: i, end: i + t, data: void 0 };
  },
  navigation: function (e) {
    const {
      entryType: t,
      name: n,
      decodedBodySize: r,
      duration: o,
      domComplete: i,
      encodedBodySize: s,
      domContentLoadedEventStart: a,
      domContentLoadedEventEnd: c,
      domInteractive: u,
      loadEventStart: l,
      loadEventEnd: d,
      redirectCount: p,
      startTime: f,
      transferSize: h,
      type: g,
    } = e;
    return 0 === o
      ? null
      : {
          type: `${t}.${g}`,
          start: Ut(f),
          end: Ut(i),
          name: n,
          data: {
            size: h,
            decodedBodySize: r,
            encodedBodySize: s,
            duration: o,
            domInteractive: u,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: c,
            loadEventStart: l,
            loadEventEnd: d,
            domComplete: i,
            redirectCount: p,
          },
        };
  },
};
function Mt(e, t) {
  return ({ metric: n }) => {
    t.replayPerformanceEntries.push(e(n));
  };
}
function Dt(e) {
  const t = xt[e.entryType];
  return t ? t(e) : null;
}
function Ut(e) {
  return (
    ((r.browserPerformanceTimeOrigin() || i.performance.timeOrigin) + e) / 1e3
  );
}
function Bt(e) {
  const t = e.entries[e.entries.length - 1];
  return Ht(e, "largest-contentful-paint", t?.element ? [t.element] : void 0);
}
function Gt(e) {
  return void 0 !== e.sources;
}
function Ft(e) {
  const t = [],
    n = [];
  for (const r of e.entries)
    if (Gt(r)) {
      const e = [];
      for (const t of r.sources)
        if (t.node) {
          n.push(t.node);
          const r = gt.mirror.getId(t.node);
          r && e.push(r);
        }
      t.push({ value: r.value, nodeIds: e.length ? e : void 0 });
    }
  return Ht(e, "cumulative-layout-shift", n, t);
}
function jt(e) {
  const t = e.entries[e.entries.length - 1];
  return Ht(e, "interaction-to-next-paint", t?.target ? [t.target] : void 0);
}
function Ht(e, t, n, r) {
  const o = e.value,
    i = e.rating,
    s = Ut(o);
  return {
    type: "web-vital",
    name: t,
    start: s,
    end: s,
    data: {
      value: o,
      size: o,
      rating: i,
      nodeIds: n ? n.map((e) => gt.mirror.getId(e)) : void 0,
      attributions: r,
    },
  };
}
const Wt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
  Vt = ["log", "warn", "error"],
  $t = "[Replay] ";
function Yt(e, t = "info") {
  r.addBreadcrumb(
    {
      category: "console",
      data: { logger: "replay" },
      level: t,
      message: `${$t}${e}`,
    },
    { level: t },
  );
}
const qt = (function () {
  let e = !1,
    t = !1;
  const n = {
    exception: () => {},
    infoTick: () => {},
    setConfig: (n) => {
      (e = !!n.captureExceptions), (t = !!n.traceInternals);
    },
  };
  return (
    Wt
      ? (Vt.forEach((e) => {
          n[e] = (...n) => {
            r.debug[e]($t, ...n),
              t && Yt(n.join(""), r.severityLevelFromString(e));
          };
        }),
        (n.exception = (o, ...i) => {
          i.length && n.error && n.error(...i),
            r.debug.error($t, o),
            e
              ? r.captureException(o, {
                  mechanism: {
                    handled: !0,
                    type: "auto.function.replay.debug",
                  },
                })
              : t && Yt(o, "error");
        }),
        (n.infoTick = (...e) => {
          r.debug.log($t, ...e), t && setTimeout(() => Yt(e[0]), 0);
        }))
      : Vt.forEach((e) => {
          n[e] = () => {};
        }),
    n
  );
})();
class Kt extends Error {
  constructor() {
    super("Event buffer exceeded maximum size of 20000000.");
  }
}
class Xt {
  constructor() {
    (this.events = []),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      (this.waitForCheckout = !1);
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(e) {
    const t = JSON.stringify(e).length;
    if (((this._totalSize += t), this._totalSize > l)) throw new Kt();
    this.events.push(e);
  }
  finish() {
    return new Promise((e) => {
      const t = this.events;
      this.clear(), e(JSON.stringify(t));
    });
  }
  clear() {
    (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
  }
  getEarliestTimestamp() {
    let e = null;
    for (const { timestamp: t } of this.events)
      (null === e || t < e) && (e = t);
    return null === e ? e : St(e);
  }
}
class Zt {
  constructor(e) {
    (this._onMessage = ({ data: e }) => {
      const t = e;
      if ("number" != typeof t.id) return;
      const n = this._pending.get(t.id);
      if (n && n.method === t.method) {
        if ((this._pending.delete(t.id), !t.success))
          return (
            Wt && qt.error("Error in compression worker: ", t.response),
            void n.reject(new Error("Error in compression worker"))
          );
        n.resolve(t.response);
      }
    }),
      (this._worker = e),
      (this._id = 0),
      (this._pending = new Map()),
      this._worker.addEventListener("message", this._onMessage);
  }
  ensureReady() {
    return (
      this._ensureReadyPromise ||
        (this._ensureReadyPromise = new Promise((e, t) => {
          this._worker.addEventListener(
            "message",
            ({ data: n }) => {
              n.success
                ? e()
                : (Wt &&
                    qt.warn(
                      "Received worker message with unsuccessful status",
                      n,
                    ),
                  t(
                    new Error(
                      "Received worker message with unsuccessful status",
                    ),
                  ));
            },
            { once: !0 },
          ),
            this._worker.addEventListener(
              "error",
              (e) => {
                Wt && qt.warn("Failed to load Replay compression worker", e),
                  t(
                    new Error(
                      `Failed to load Replay compression worker: ${e instanceof ErrorEvent && e.message ? e.message : "Unknown error. This can happen due to CSP policy restrictions, network issues, or the worker script failing to load."}`,
                    ),
                  );
              },
              { once: !0 },
            );
        })),
      this._ensureReadyPromise
    );
  }
  destroy() {
    Wt && qt.log("Destroying compression worker"),
      this._worker.removeEventListener("message", this._onMessage),
      this._pending.forEach((e) => e.reject(new Error("Worker destroyed"))),
      this._pending.clear(),
      this._worker.terminate();
  }
  postMessage(e, t) {
    const n = this._getAndIncrementId();
    return new Promise((r, o) => {
      this._pending.set(n, { method: e, resolve: r, reject: o });
      try {
        this._worker.postMessage({ id: n, method: e, arg: t });
      } catch (e) {
        this._pending.delete(n), o(e);
      }
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class zt {
  constructor(e) {
    (this._worker = new Zt(e)),
      (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      (this.waitForCheckout = !1);
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(e) {
    const t = St(e.timestamp);
    (!this._earliestTimestamp || t < this._earliestTimestamp) &&
      (this._earliestTimestamp = t);
    const n = JSON.stringify(e);
    return (
      (this._totalSize += n.length),
      this._totalSize > l
        ? Promise.reject(new Kt())
        : this._sendEventToWorker(n)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      this._worker.postMessage("clear").then(null, (e) => {
        Wt && qt.exception(e, 'Sending "clear" message to worker failed', e);
      });
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(e) {
    return this._worker.postMessage("addEvent", e);
  }
  async _finishRequest() {
    const e = await this._worker.postMessage("finish");
    return (this._earliestTimestamp = null), (this._totalSize = 0), e;
  }
}
class Jt {
  constructor(e) {
    (this._fallback = new Xt()),
      (this._compression = new zt(e)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
  }
  get waitForCheckout() {
    return this._used.waitForCheckout;
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  set hasCheckout(e) {
    this._used.hasCheckout = e;
  }
  set waitForCheckout(e) {
    this._used.waitForCheckout = e;
  }
  destroy() {
    this._fallback.destroy(), this._compression.destroy();
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(e) {
    return this._used.addEvent(e);
  }
  async finish() {
    return await this.ensureWorkerIsLoaded(), this._used.finish();
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch (e) {
      return void (
        Wt &&
        qt.exception(
          e,
          "Failed to load the compression worker, falling back to simple buffer",
        )
      );
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: e, hasCheckout: t, waitForCheckout: n } = this._fallback,
      r = [];
    for (const t of e) r.push(this._compression.addEvent(t));
    (this._compression.hasCheckout = t),
      (this._compression.waitForCheckout = n),
      (this._used = this._compression);
    try {
      await Promise.all(r), this._fallback.clear();
    } catch (e) {
      Wt && qt.exception(e, "Failed to add events when switching buffers.");
    }
  }
}
function Qt() {
  try {
    return "sessionStorage" in i && !!i.sessionStorage;
  } catch {
    return !1;
  }
}
function en(e) {
  return void 0 !== e && Math.random() < e;
}
function tn(e) {
  if (Qt())
    try {
      i.sessionStorage.setItem(s, JSON.stringify(e));
    } catch {}
}
function nn(e) {
  const t = Date.now();
  return {
    id: e.id || r.uuid4(),
    started: e.started || t,
    lastActivity: e.lastActivity || t,
    segmentId: e.segmentId || 0,
    sampled: e.sampled,
    previousSessionId: e.previousSessionId,
    dirty: e.dirty || !1,
  };
}
function rn(
  { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
  { previousSessionId: r } = {},
) {
  const o = (function (e, t) {
      return en(e) ? "session" : !!t && "buffer";
    })(e, t),
    i = nn({ sampled: o, previousSessionId: r });
  return n && tn(i), i;
}
function on(e, t, n = +new Date()) {
  return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= n);
}
function sn(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
  return (
    !!(function (
      e,
      {
        maxReplayDuration: t,
        sessionIdleExpire: n,
        targetTime: r = Date.now(),
      },
    ) {
      return on(e.started, t, r) || on(e.lastActivity, n, r);
    })(e, { sessionIdleExpire: t, maxReplayDuration: n }) &&
    ("buffer" !== e.sampled || 0 !== e.segmentId)
  );
}
function an(
  { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n },
  r,
) {
  const o =
    r.stickySession &&
    (function () {
      if (!Qt()) return null;
      try {
        const e = i.sessionStorage.getItem(s);
        if (!e) return null;
        const t = JSON.parse(e);
        return Wt && qt.infoTick("Loading existing session"), nn(t);
      } catch {
        return null;
      }
    })();
  return o
    ? sn(o, { sessionIdleExpire: e, maxReplayDuration: t })
      ? (Wt &&
          qt.infoTick(
            "Session in sessionStorage is expired, creating new one...",
          ),
        rn(r, { previousSessionId: o.id }))
      : o
    : (Wt && qt.infoTick("Creating new session"),
      rn(r, { previousSessionId: n }));
}
function cn(e, t, n) {
  return !!ln(e, t) && (un(e, t, n), !0);
}
async function un(e, t, n) {
  const { eventBuffer: o } = e;
  if (!o || (o.waitForCheckout && !n)) return null;
  const i = "buffer" === e.recordingMode;
  try {
    n && i && o.clear(), n && ((o.hasCheckout = !0), (o.waitForCheckout = !1));
    const r = (function (e, t) {
      try {
        if (
          "function" == typeof t &&
          (function (e) {
            return e.type === Ie.Custom;
          })(e)
        )
          return t(e);
      } catch (e) {
        return (
          Wt &&
            qt.exception(
              e,
              "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...",
            ),
          null
        );
      }
      return e;
    })(t, e.getOptions().beforeAddRecordingEvent);
    if (!r) return;
    return await o.addEvent(r);
  } catch (t) {
    if (!e.isEnabled()) return e.handleException(t), null;
    const n = t && t instanceof Kt,
      s = n ? "eventBufferOverflow" : "eventBufferError",
      a = r.getClient();
    if (a) {
      const e = n ? "buffer_overflow" : "internal_sdk_error";
      a.recordDroppedEvent(e, "replay");
    }
    if (n && i) return o.clear(), (o.waitForCheckout = !0), null;
    e.handleException(t), await e.stop({ reason: s });
  }
}
function ln(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const n = St(t.timestamp);
  return !(
    n + e.timeouts.sessionIdlePause < Date.now() ||
    (n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration &&
      (Wt &&
        qt.infoTick(
          `Skipping event with timestamp ${n} because it is after maxReplayDuration`,
        ),
      1))
  );
}
function dn(e, t, n) {
  const r = e.getContext();
  t && r.traceIds.size < 100 && r.traceIds.add(t),
    n && r.segmentNames.size < 100 && r.segmentNames.add(n);
}
function pn(e) {
  return !e.type;
}
function fn(e) {
  return "transaction" === e.type;
}
function hn(e) {
  return "feedback" === e.type;
}
function gn(e) {
  return !!e.category;
}
function mn() {
  const e = r.getCurrentScope().getPropagationContext().dsc;
  e && delete e.replay_id;
  const t = r.getActiveSpan();
  t && delete r.getDynamicSamplingContextFromSpan(t).replay_id;
}
function _n(e) {
  const t = r.getCurrentScope().getPropagationContext().dsc;
  t && (t.replay_id = e);
  const n = r.getActiveSpan();
  n && (r.getDynamicSamplingContextFromSpan(n).replay_id = e);
}
function Sn(e, t) {
  return t.map(({ type: t, start: n, end: r, name: o, data: i }) => {
    const s = e.throttledAddEvent({
      type: Ie.Custom,
      timestamp: n,
      data: {
        tag: "performanceSpan",
        payload: {
          op: t,
          description: o,
          startTimestamp: n,
          endTimestamp: r,
          data: i,
        },
      },
    });
    return "string" == typeof s ? Promise.resolve(null) : s;
  });
}
function En(e, t) {
  e.isEnabled() &&
    null !== t &&
    ((function (e, t) {
      return (
        (!Wt || !e.getOptions()._experiments.traceInternals) &&
        r.isSentryRequestUrl(t, r.getClient())
      );
    })(e, t.name) ||
      e.addUpdate(() => (Sn(e, [t]), !0)));
}
function yn(e) {
  if (!e) return;
  const t = new TextEncoder();
  try {
    if ("string" == typeof e) return t.encode(e).length;
    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
    if (e instanceof FormData) {
      const n = o.serializeFormData(e);
      return t.encode(n).length;
    }
    if (e instanceof Blob) return e.size;
    if (e instanceof ArrayBuffer) return e.byteLength;
  } catch {}
}
function Tn(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function bn(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  const n = { ...e._meta },
    r = n.warnings || [];
  return (n.warnings = [...r, t]), (e._meta = n), e;
}
function In(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: r,
    url: o,
    method: i,
    statusCode: s,
    request: a,
    response: c,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: o,
    data: { method: i, statusCode: s, request: a, response: c },
  };
}
function vn(e) {
  return {
    headers: {},
    size: e,
    _meta: { warnings: ["URL_SKIPPED"] },
  };
}
function An(e, t, n) {
  if (!t && 0 === Object.keys(e).length) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const r = { headers: e, size: t },
    { body: o, warnings: i } = (function (e) {
      if (!e || "string" != typeof e) return { body: e };
      const t = e.length > c,
        n = (function (e) {
          const t = e[0],
            n = e[e.length - 1];
          return ("[" === t && "]" === n) || ("{" === t && "}" === n);
        })(e);
      if (t) {
        const t = e.slice(0, c);
        return n
          ? { body: t, warnings: ["MAYBE_JSON_TRUNCATED"] }
          : { body: `${t}…`, warnings: ["TEXT_TRUNCATED"] };
      }
      if (n)
        try {
          return { body: JSON.parse(e) };
        } catch {}
      return { body: e };
    })(n);
  return (r.body = o), i?.length && (r._meta = { warnings: i }), r;
}
function Nn(e, t) {
  return Object.entries(e).reduce((n, [r, o]) => {
    const i = r.toLowerCase();
    return t.includes(i) && e[r] && (n[i] = o), n;
  }, {});
}
function Rn(e, t) {
  const n = (function (e, t = i.document.baseURI) {
    if (
      e.startsWith("http://") ||
      e.startsWith("https://") ||
      e.startsWith(i.location.origin)
    )
      return e;
    const n = new URL(e, t);
    if (n.origin !== new URL(t).origin) return e;
    const r = n.href;
    return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
  })(e);
  return r.stringMatchesSomePattern(n, t);
}
function Cn(e, t) {
  const n = {};
  return (
    t.forEach((t) => {
      e.get(t) && (n[t] = e.get(t));
    }),
    n
  );
}
function On(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? Cn(n, t)
      : Array.isArray(n)
        ? {}
        : Nn(n, t)
    : {};
}
function wn(e) {
  const t = r.getClient();
  try {
    const {
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: i,
        networkCaptureBodies: s,
        networkRequestHeaders: a,
        networkResponseHeaders: c,
      } = e.getOptions(),
      u = {
        replay: e,
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: i,
        networkCaptureBodies: s,
        networkRequestHeaders: a,
        networkResponseHeaders: c,
      };
    t &&
      t.on("beforeAddBreadcrumb", (e, t) =>
        (function (e, t, n) {
          if (t.data)
            try {
              (function (e) {
                return "xhr" === e.category;
              })(t) &&
                (function (e) {
                  return e?.xhr;
                })(n) &&
                ((function (e, t) {
                  const { xhr: n, input: o } = t;
                  if (!n) return;
                  const i = yn(o),
                    s = n.getResponseHeader("content-length")
                      ? Tn(n.getResponseHeader("content-length"))
                      : (function (e, t) {
                          try {
                            return yn(
                              "json" === t && r.isObjectLike(e)
                                ? JSON.stringify(e)
                                : e,
                            );
                          } catch {
                            return;
                          }
                        })(n.response, n.responseType);
                  void 0 !== i && (e.data.request_body_size = i),
                    void 0 !== s && (e.data.response_body_size = s);
                })(t, n),
                (async function (e, t, n) {
                  try {
                    const i = (function (e, t, n) {
                        const i = Date.now(),
                          {
                            startTimestamp: s = i,
                            endTimestamp: a = i,
                            input: c,
                            xhr: u,
                          } = t,
                          {
                            url: l,
                            method: d,
                            status_code: p = 0,
                            request_body_size: f,
                            response_body_size: h,
                          } = e.data;
                        if (!l) return null;
                        if (
                          !u ||
                          !Rn(l, n.networkDetailAllowUrls) ||
                          Rn(l, n.networkDetailDenyUrls)
                        )
                          return {
                            startTimestamp: s,
                            endTimestamp: a,
                            url: l,
                            method: d,
                            statusCode: p,
                            request: vn(f),
                            response: vn(h),
                          };
                        const g = u[o.SENTRY_XHR_DATA_KEY],
                          m = g
                            ? Nn(g.request_headers, n.networkRequestHeaders)
                            : {},
                          _ = Nn(
                            o.parseXhrResponseHeaders(u),
                            n.networkResponseHeaders,
                          ),
                          [S, E] = n.networkCaptureBodies
                            ? o.getBodyString(c, qt)
                            : [void 0],
                          [y, T] = n.networkCaptureBodies
                            ? (function (e) {
                                const t = [];
                                try {
                                  return [e.responseText];
                                } catch (e) {
                                  t.push(e);
                                }
                                try {
                                  return (function (e, t) {
                                    try {
                                      if ("string" == typeof e) return [e];
                                      if (e instanceof Document)
                                        return [e.body.outerHTML];
                                      if ("json" === t && r.isObjectLike(e))
                                        return [JSON.stringify(e)];
                                      if (!e) return [void 0];
                                    } catch (t) {
                                      return (
                                        Wt &&
                                          qt.exception(
                                            t,
                                            "Failed to serialize body",
                                            e,
                                          ),
                                        [void 0, "BODY_PARSE_ERROR"]
                                      );
                                    }
                                    return (
                                      Wt &&
                                        qt.log(
                                          "Skipping network body because of body type",
                                          e,
                                        ),
                                      [void 0, "UNPARSEABLE_BODY_TYPE"]
                                    );
                                  })(e.response, e.responseType);
                                } catch (e) {
                                  t.push(e);
                                }
                                return (
                                  Wt &&
                                    qt.warn(
                                      "Failed to get xhr response body",
                                      ...t,
                                    ),
                                  [void 0]
                                );
                              })(u)
                            : [void 0],
                          b = An(m, f, S),
                          I = An(_, h, y);
                        return {
                          startTimestamp: s,
                          endTimestamp: a,
                          url: l,
                          method: d,
                          statusCode: p,
                          request: E ? bn(b, E) : b,
                          response: T ? bn(I, T) : I,
                        };
                      })(e, t, n),
                      s = In("resource.xhr", i);
                    En(n.replay, s);
                  } catch (e) {
                    Wt && qt.exception(e, "Failed to capture xhr breadcrumb");
                  }
                })(t, n, e)),
                (function (e) {
                  return "fetch" === e.category;
                })(t) &&
                  (function (e) {
                    return void 0 !== e?.input;
                  })(n) &&
                  ((function (e, t) {
                    const { input: n, response: r } = t,
                      i = yn(n ? o.getFetchRequestArgBody(n) : void 0),
                      s = r ? Tn(r.headers.get("content-length")) : void 0;
                    void 0 !== i && (e.data.request_body_size = i),
                      void 0 !== s && (e.data.response_body_size = s);
                  })(t, n),
                  (async function (e, t, n) {
                    try {
                      const r = await (async function (e, t, n) {
                          const r = Date.now(),
                            { startTimestamp: i = r, endTimestamp: s = r } = t,
                            {
                              url: a,
                              method: c,
                              status_code: u = 0,
                              request_body_size: l,
                              response_body_size: d,
                            } = e.data,
                            p =
                              Rn(a, n.networkDetailAllowUrls) &&
                              !Rn(a, n.networkDetailDenyUrls),
                            f = p
                              ? (function (
                                  {
                                    networkCaptureBodies: e,
                                    networkRequestHeaders: t,
                                  },
                                  n,
                                  r,
                                ) {
                                  const i = n
                                    ? ((a = t),
                                      1 === (s = n).length &&
                                      "string" != typeof s[0]
                                        ? On(s[0], a)
                                        : 2 === s.length
                                          ? On(s[1], a)
                                          : {})
                                    : {};
                                  var s, a;
                                  if (!e) return An(i, r, void 0);
                                  const c = o.getFetchRequestArgBody(n),
                                    [u, l] = o.getBodyString(c, qt),
                                    d = An(i, r, u);
                                  return l ? bn(d, l) : d;
                                })(n, t.input, l)
                              : vn(l),
                            h = await (async function (
                              e,
                              {
                                networkCaptureBodies: t,
                                networkResponseHeaders: n,
                              },
                              r,
                              i,
                            ) {
                              if (!e && void 0 !== i) return vn(i);
                              const s = r ? Cn(r.headers, n) : {};
                              if (!r || (!t && void 0 !== i))
                                return An(s, i, void 0);
                              const [a, c] = await (async function (e) {
                                  const t = (function (e) {
                                    try {
                                      return e.clone();
                                    } catch (e) {
                                      Wt &&
                                        qt.exception(
                                          e,
                                          "Failed to clone response body",
                                        );
                                    }
                                  })(e);
                                  if (!t) return [void 0, "BODY_PARSE_ERROR"];
                                  try {
                                    const e = await (function (e) {
                                      return new Promise((t, n) => {
                                        const r = o.setTimeout(
                                          () =>
                                            n(
                                              new Error(
                                                "Timeout while trying to read response body",
                                              ),
                                            ),
                                          500,
                                        );
                                        (async function (e) {
                                          return await e.text();
                                        })(e)
                                          .then(
                                            (e) => t(e),
                                            (e) => n(e),
                                          )
                                          .finally(() => clearTimeout(r));
                                      });
                                    })(t);
                                    return [e];
                                  } catch (e) {
                                    return e instanceof Error &&
                                      e.message.indexOf("Timeout") > -1
                                      ? (Wt &&
                                          qt.warn(
                                            "Parsing text body from response timed out",
                                          ),
                                        [void 0, "BODY_PARSE_TIMEOUT"])
                                      : (Wt &&
                                          qt.exception(
                                            e,
                                            "Failed to get text body from response",
                                          ),
                                        [void 0, "BODY_PARSE_ERROR"]);
                                  }
                                })(r),
                                u = (function (
                                  e,
                                  {
                                    networkCaptureBodies: t,
                                    responseBodySize: n,
                                    captureDetails: r,
                                    headers: o,
                                  },
                                ) {
                                  try {
                                    const i =
                                      e?.length && void 0 === n ? yn(e) : n;
                                    return r ? An(o, i, t ? e : void 0) : vn(i);
                                  } catch (e) {
                                    return (
                                      Wt &&
                                        qt.exception(
                                          e,
                                          "Failed to serialize response body",
                                        ),
                                      An(o, n, void 0)
                                    );
                                  }
                                })(a, {
                                  networkCaptureBodies: t,
                                  responseBodySize: i,
                                  captureDetails: e,
                                  headers: s,
                                });
                              return c ? bn(u, c) : u;
                            })(p, n, t.response, d);
                          return {
                            startTimestamp: i,
                            endTimestamp: s,
                            url: a,
                            method: c,
                            statusCode: u,
                            request: f,
                            response: h,
                          };
                        })(e, t, n),
                        i = In("resource.fetch", r);
                      En(n.replay, i);
                    } catch (e) {
                      Wt &&
                        qt.exception(e, "Failed to capture fetch breadcrumb");
                    }
                  })(t, n, e));
            } catch (e) {
              Wt && qt.exception(e, "Error when enriching network breadcrumb");
            }
        })(u, e, t),
      );
  } catch {}
}
function kn(e) {
  const t = r.getClient();
  o.addClickKeypressInstrumentationHandler(
    ((e) => (t) => {
      if (!e.isEnabled()) return;
      const n = (function (e) {
        const { target: t, message: n } = (function (e) {
          const t = "click" === e.name;
          let n,
            r = null;
          try {
            (r = t ? bt(e.event) : It(e.event)),
              (n =
                o.htmlTreeAsString(r, { maxStringLength: 200 }) || "<unknown>");
          } catch {
            n = "<unknown>";
          }
          return { target: r, message: n };
        })(e);
        return Ot({ category: `ui.${e.name}`, ...Lt(t, n) });
      })(t);
      if (!n) return;
      const r = "click" === t.name,
        i = r ? t.event : void 0;
      var s, a, c;
      !(r && e.clickDetector && i?.target) ||
        i.altKey ||
        i.metaKey ||
        i.ctrlKey ||
        i.shiftKey ||
        ((s = e.clickDetector),
        (a = n),
        (c = bt(t.event)),
        s.handleClick(a, c)),
        yt(e, n);
    })(e),
  ),
    o.addHistoryInstrumentationHandler(
      (function (e) {
        return (t) => {
          if (!e.isEnabled()) return;
          const n = (function (e) {
            const { from: t, to: n } = e,
              r = Date.now() / 1e3;
            return {
              type: "navigation.push",
              start: r,
              end: r,
              name: n,
              data: { previous: t },
            };
          })(t);
          null !== n &&
            (e.getContext().urls.push(n.name),
            e.triggerUserActivity(),
            e.addUpdate(() => (Sn(e, [n]), !1)));
        };
      })(e),
    ),
    (function (e) {
      const t = r.getClient();
      t &&
        t.on("beforeAddBreadcrumb", (t) =>
          (function (e, t) {
            if (!e.isEnabled() || !gn(t)) return;
            const n = (function (e) {
              return !gn(e) ||
                ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
                  e.category,
                ) ||
                e.category.startsWith("ui.")
                ? null
                : "console" === e.category
                  ? (function (e) {
                      const t = e.data?.arguments;
                      if (!Array.isArray(t) || 0 === t.length) return Ot(e);
                      let n = !1;
                      const o = t.map((e) => {
                        if (!e) return e;
                        if ("string" == typeof e)
                          return e.length > u
                            ? ((n = !0), `${e.slice(0, u)}…`)
                            : e;
                        if ("object" == typeof e)
                          try {
                            const t = r.normalize(e, 7);
                            return JSON.stringify(t).length > u
                              ? ((n = !0),
                                `${JSON.stringify(t, null, 2).slice(0, u)}…`)
                              : t;
                          } catch {}
                        return e;
                      });
                      return Ot({
                        ...e,
                        data: {
                          ...e.data,
                          arguments: o,
                          ...(n
                            ? {
                                _meta: {
                                  warnings: ["CONSOLE_ARG_TRUNCATED"],
                                },
                              }
                            : {}),
                        },
                      });
                    })(e)
                  : Ot(e);
            })(t);
            n && yt(e, n);
          })(e, t),
        );
    })(e),
    wn(e);
  const n = (function (e) {
    return Object.assign(
      (t, n) => {
        if (
          (e.session &&
            sn(e.session, {
              maxReplayDuration: e.getOptions().maxReplayDuration,
              sessionIdleExpire: e.timeouts.sessionIdleExpire,
            }) &&
            mn(),
          !e.isEnabled() || e.isPaused())
        )
          return t;
        if (
          (function (e) {
            return "replay_event" === e.type;
          })(t)
        )
          return delete t.breadcrumbs, t;
        if (!pn(t) && !fn(t) && !hn(t)) return t;
        if (!e.checkAndHandleExpiredSession()) return mn(), t;
        if (hn(t))
          return (
            e.flush(),
            (t.contexts.feedback.replay_id = e.getSessionId()),
            (function (e, t) {
              e.triggerUserActivity(),
                e.addUpdate(
                  () =>
                    !t.timestamp ||
                    (e.throttledAddEvent({
                      type: Ie.Custom,
                      timestamp: 1e3 * t.timestamp,
                      data: {
                        tag: "breadcrumb",
                        payload: {
                          timestamp: t.timestamp,
                          type: "default",
                          category: "sentry.feedback",
                          data: { feedbackId: t.event_id },
                        },
                      },
                    }),
                    !1),
                );
            })(e, t),
            t
          );
        if (
          (function (e, t) {
            return !(
              e.type ||
              !e.exception?.values?.length ||
              !t.originalException?.__rrweb__
            );
          })(t, n) &&
          !e.getOptions()._experiments.captureExceptions
        )
          return Wt && qt.log("Ignoring error from rrweb internals", t), null;
        const r = (function (e, t) {
          return (
            "buffer" === e.recordingMode &&
            t.message !== a &&
            !(!t.exception || t.type) &&
            en(e.getOptions().errorSampleRate)
          );
        })(e, t);
        if (
          ((r || "session" === e.recordingMode) &&
            (t.tags = { ...t.tags, replayId: e.getSessionId() }),
          r && "buffer" === e.recordingMode && "buffer" === e.session?.sampled)
        ) {
          const t = e.session;
          (t.dirty = !0), e.getOptions().stickySession && tn(t);
        }
        return t;
      },
      { id: "Replay" },
    );
  })(e);
  r.addEventProcessor(n),
    t &&
      (t.on(
        "beforeSendEvent",
        (function (e) {
          return (t) => {
            e.isEnabled() &&
              pn(t) &&
              (function (e, t) {
                const n = t.exception?.values?.[0]?.value;
                "string" == typeof n &&
                  (n.match(
                    /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
                  ) ||
                    n.match(
                      /(does not match server-rendered HTML|Hydration failed because)/i,
                    )) &&
                  yt(
                    e,
                    Ot({
                      category: "replay.hydrate-error",
                      data: { url: r.getLocationHref() },
                    }),
                  );
              })(e, t);
          };
        })(e),
      ),
      t.on(
        "afterSendEvent",
        (function (e) {
          return (t, n) => {
            if (!e.isEnabled() || (!pn(t) && !fn(t))) return;
            const r = n.statusCode;
            !r ||
              r < 200 ||
              r >= 300 ||
              (fn(t)
                ? (function (e, t) {
                    dn(e, t.contexts?.trace?.trace_id, t.transaction);
                  })(e, t)
                : (function (e, t) {
                    const n = e.getContext();
                    if (
                      (t.event_id &&
                        n.errorIds.size < 100 &&
                        n.errorIds.add(t.event_id),
                      "buffer" !== e.recordingMode || !t.tags?.replayId)
                    )
                      return;
                    const { beforeErrorSampling: r } = e.getOptions();
                    ("function" != typeof r || r(t)) &&
                      o.setTimeout(async () => {
                        try {
                          await e.sendBufferedReplayOrFlush();
                        } catch (t) {
                          e.handleException(t);
                        }
                      });
                  })(e, t));
          };
        })(e),
      ),
      t.on("createDsc", (t) => {
        const n = e.getSessionId();
        n &&
          e.isEnabled() &&
          "session" === e.recordingMode &&
          e.checkAndHandleExpiredSession() &&
          (t.replay_id = n);
      }),
      t.on(
        "processSegmentSpan",
        (function (e) {
          return (t) => {
            e.isEnabled() && dn(e, t.trace_id, t.name || void 0);
          };
        })(e),
      ),
      t.on("spanStart", (t) => {
        e.lastActiveSpan = t;
      }),
      t.on("spanEnd", (t) => {
        e.lastActiveSpan = t;
      }),
      t.on("beforeSendFeedback", async (t, n) => {
        const r = e.getSessionId();
        n?.includeReplay &&
          e.isEnabled() &&
          r &&
          t.contexts?.feedback &&
          ("api" === t.contexts.feedback.source &&
            (await e.sendBufferedReplayOrFlush()),
          (t.contexts.feedback.replay_id = r));
      }),
      t.on("openFeedbackWidget", async () => {
        await e.sendBufferedReplayOrFlush();
      }));
}
function Pn(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
    o = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: o,
    end: o,
    data: {
      memory: {
        jsHeapSizeLimit: t,
        totalJSHeapSize: n,
        usedJSHeapSize: r,
      },
    },
  };
}
const Ln = r.GLOBAL_OBJ.navigator;
function xn(e) {
  let t = !1;
  return (n, r) => {
    try {
      if (!e.checkAndHandleExpiredSession())
        return void (
          Wt && qt.warn("Received replay event after session expired.")
        );
      const o = r || !t;
      (t = !0),
        (function (e) {
          const t = e.data;
          if (
            e.type === Ie.IncrementalSnapshot &&
            t &&
            "object" == typeof t &&
            "source" in t &&
            t.source === ve.Mutation &&
            "attributes" in t &&
            Array.isArray(t.attributes)
          )
            for (const e of t.attributes) {
              const t = gt.mirror.getNode(e.id),
                n = t && gt.mirror.getMeta(t);
              if (n?.type === wt.Element)
                for (const [t, r] of Object.entries(e.attributes))
                  null === r ? delete n.attributes[t] : (n.attributes[t] = r);
            }
        })(n),
        e.clickDetector &&
          (function (e, t) {
            try {
              if (
                !(function (e) {
                  return 3 === e.type;
                })(t)
              )
                return;
              const { source: n } = t.data;
              if (
                (At.has(n) && e.registerMutation(t.timestamp),
                n === ve.Scroll && e.registerScroll(t.timestamp),
                (function (e) {
                  return e.data.source === ve.MouseInteraction;
                })(t))
              ) {
                const { type: n, id: r } = t.data,
                  o = gt.mirror.getNode(r);
                o instanceof HTMLElement &&
                  n === Ae.Click &&
                  e.registerClick(o);
              }
            } catch {}
          })(e.clickDetector, n),
        e.addUpdate(() => {
          if (
            ("buffer" === e.recordingMode && o && e.setInitialState(),
            !cn(e, n, o))
          )
            return !0;
          if (!o) return !1;
          const t = e.session;
          if (
            ((function (e, t) {
              t &&
                0 === e.session?.segmentId &&
                cn(
                  e,
                  (function (e) {
                    const t = e.getOptions();
                    return {
                      type: Ie.Custom,
                      timestamp: Date.now(),
                      data: {
                        tag: "options",
                        payload: {
                          shouldRecordCanvas: e.isRecordingCanvas(),
                          sessionSampleRate: t.sessionSampleRate,
                          errorSampleRate: t.errorSampleRate,
                          useCompressionOption: t.useCompression,
                          blockAllMedia: t.blockAllMedia,
                          maskAllText: t.maskAllText,
                          maskAllInputs: t.maskAllInputs,
                          useCompression:
                            !!e.eventBuffer && "worker" === e.eventBuffer.type,
                          networkDetailHasUrls:
                            t.networkDetailAllowUrls.length > 0,
                          networkCaptureBodies: t.networkCaptureBodies,
                          networkRequestHasHeaders:
                            t.networkRequestHeaders.length > 0,
                          networkResponseHasHeaders:
                            t.networkResponseHeaders.length > 0,
                        },
                      },
                    };
                  })(e),
                  !1,
                );
            })(e, o),
            "buffer" === e.recordingMode && t && e.eventBuffer && !t.dirty)
          ) {
            const n = e.eventBuffer.getEarliestTimestamp();
            n &&
              (Wt &&
                qt.log(
                  `Updating session start time to earliest event in buffer to ${new Date(n)}`,
                ),
              (t.started = n),
              e.getOptions().stickySession && tn(t));
          }
          return (
            t?.previousSessionId ||
              ("session" === e.recordingMode && e.flush()),
            !0
          );
        });
    } catch (t) {
      e.handleException(t);
    }
  };
}
class Mn extends Error {
  constructor(e) {
    super(`Transport returned status code ${e}`);
  }
}
class Dn extends Error {
  constructor(e) {
    super("Rate limit hit"), (this.rateLimits = e);
  }
}
class Un extends Error {
  constructor() {
    super("Session is too long, not sending replay");
  }
}
async function Bn(e, t = { count: 0, interval: 5e3 }) {
  const { recordingData: n, onError: i } = e;
  if (n.length)
    try {
      return (
        await (async function ({
          recordingData: e,
          replayId: t,
          segmentId: n,
          eventContext: o,
          timestamp: i,
          session: s,
        }) {
          const c = (function ({ recordingData: e, headers: t }) {
              let n;
              const r = `${JSON.stringify(t)}\n`;
              if ("string" == typeof e) n = `${r}${e}`;
              else {
                const t = new TextEncoder().encode(r);
                (n = new Uint8Array(t.length + e.length)),
                  n.set(t),
                  n.set(e, t.length);
              }
              return n;
            })({ recordingData: e, headers: { segment_id: n } }),
            {
              urls: u,
              errorIds: l,
              traceIds: d,
              segmentNames: p,
              initialTimestamp: f,
            } = o,
            h = r.getClient(),
            g = r.getCurrentScope(),
            m = h?.getTransport(),
            _ = h?.getDsn();
          if (!(h && m && _ && s.sampled)) return Promise.resolve({});
          const S = {
              type: "replay_event",
              replay_start_timestamp: f / 1e3,
              timestamp: i / 1e3,
              error_ids: l,
              trace_ids: d,
              segment_names: p,
              urls: u,
              replay_id: t,
              segment_id: n,
              replay_type: s.sampled,
            },
            E = await (async function ({
              client: e,
              scope: t,
              replayId: n,
              event: o,
            }) {
              const i = {
                event_id: n,
                integrations:
                  "object" != typeof e._integrations ||
                  null === e._integrations ||
                  Array.isArray(e._integrations)
                    ? void 0
                    : Object.keys(e._integrations),
              };
              e.emit("preprocessEvent", o, i);
              const s = await r.prepareEvent(
                e.getOptions(),
                o,
                i,
                t,
                e,
                r.getIsolationScope(),
              );
              if (!s) return null;
              e.emit("postprocessEvent", s, i),
                (s.platform = s.platform || "javascript");
              const a = e.getSdkMetadata(),
                { name: c, version: u, settings: l } = a?.sdk || {};
              return (
                (s.sdk = {
                  ...s.sdk,
                  name: c || "sentry.javascript.unknown",
                  version: u || "0.0.0",
                  settings: l,
                }),
                s
              );
            })({ scope: g, client: h, replayId: t, event: S });
          if (!E)
            return (
              h.recordDroppedEvent("event_processor", "replay"),
              Wt &&
                qt.log(
                  "An event processor returned `null`, will not send event.",
                ),
              Promise.resolve({})
            );
          delete E.sdkProcessingMetadata;
          const y = (function (e, t, n, o) {
            return r.createEnvelope(
              r.createEventEnvelopeHeaders(
                e,
                r.getSdkMetadataForEnvelopeHeader(e),
                o,
                n,
              ),
              [
                [{ type: "replay_event" }, e],
                [
                  {
                    type: "replay_recording",
                    length:
                      "string" == typeof t
                        ? new TextEncoder().encode(t).length
                        : t.length,
                  },
                  t,
                ],
              ],
            );
          })(E, c, _, h.getOptions().tunnel);
          let T;
          try {
            T = await m.send(y);
          } catch (e) {
            const t = new Error(a);
            try {
              t.cause = e;
            } catch {}
            throw t;
          }
          const b = r.updateRateLimits({}, T);
          if (r.isRateLimited(b, "replay")) throw new Dn(b);
          if (
            "number" == typeof T.statusCode &&
            (T.statusCode < 200 || T.statusCode >= 300)
          )
            throw new Mn(T.statusCode);
          return T;
        })(e),
        !0
      );
    } catch (n) {
      if (n instanceof Mn || n instanceof Dn) throw n;
      if (
        (r.setContext("Replays", { _retryCount: t.count }),
        i && i(n),
        t.count >= 3)
      ) {
        const e = new Error(`${a} - max retries exceeded`);
        try {
          e.cause = n;
        } catch {}
        throw e;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((n, r) => {
          o.setTimeout(async () => {
            try {
              await Bn(e, t), n(!0);
            } catch (e) {
              r(e);
            }
          }, t.interval);
        })
      );
    }
}
const Gn = "__THROTTLED";
class Fn {
  constructor({ options: e, recordingOptions: t }) {
    (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = {
        sessionIdlePause: 3e5,
        sessionIdleExpire: 9e5,
      }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._requiresManualStart = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        segmentNames: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = t),
      (this._options = e),
      (this._debouncedFlush = (function (e, t, n) {
        return r.debounce(e, t, {
          ...n,
          setTimeoutImpl: o.setTimeout,
        });
      })(() => this._flush(), this._options.flushMinDelay, {
        maxWait: this._options.flushMaxDelay,
      })),
      (this._throttledAddEvent = (function (e, t, n) {
        const r = new Map();
        let o = !1;
        return (...i) => {
          const s = Math.floor(Date.now() / 1e3);
          if (
            (((e) => {
              const t = e - n;
              r.forEach((e, n) => {
                n < t && r.delete(n);
              });
            })(s),
            [...r.values()].reduce((e, t) => e + t, 0) >= t)
          ) {
            const e = o;
            return (o = !0), e ? "__SKIPPED" : Gn;
          }
          o = !1;
          const a = r.get(s) || 0;
          return r.set(s, a + 1), e(...i);
        };
      })(
        (e, t) =>
          (function (e, t, n) {
            return ln(e, t) ? un(e, t, n) : Promise.resolve(null);
          })(this, e, t),
        300,
        5,
      ));
    const { slowClickTimeout: n, slowClickIgnoreSelectors: s } =
        this.getOptions(),
      a = n
        ? {
            threshold: Math.min(3e3, n),
            timeout: n,
            scrollTimeout: 300,
            ignoreSelector: s ? s.join(",") : "",
          }
        : void 0;
    if ((a && (this.clickDetector = new Nt(this, a)), Wt)) {
      const t = e._experiments;
      qt.setConfig({
        captureExceptions: !!t.captureExceptions,
        traceInternals: !!t.traceInternals,
      });
    }
    (this._handleVisibilityChange = () => {
      "visible" === i.document.visibilityState
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    }),
      (this._handleWindowBlur = () => {
        const e = Ot({ category: "ui.blur" });
        this._doChangeToBackgroundTasks(e);
      }),
      (this._handleWindowFocus = () => {
        const e = Ot({ category: "ui.focus" });
        this._doChangeToForegroundTasks(e);
      }),
      (this._handleKeyboardEvent = (e) => {
        !(function (e, t) {
          if (!e.isEnabled()) return;
          e.updateUserActivity();
          const n = (function (e) {
            const {
              metaKey: t,
              shiftKey: n,
              ctrlKey: r,
              altKey: i,
              key: s,
              target: a,
            } = e;
            if (
              !a ||
              (function (e) {
                return (
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  e.isContentEditable
                );
              })(a) ||
              !s
            )
              return null;
            const c = t || r || i,
              u = 1 === s.length;
            if (!c && u) return null;
            const l =
              o.htmlTreeAsString(a, { maxStringLength: 200 }) || "<unknown>";
            return Ot({
              category: "ui.keyDown",
              message: l,
              data: {
                ...Lt(a, l).data,
                metaKey: t,
                shiftKey: n,
                ctrlKey: r,
                altKey: i,
                key: s,
              },
            });
          })(t);
          n && yt(e, n);
        })(this, e);
      });
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  isRecordingCanvas() {
    return Boolean(this._canvas);
  }
  getOptions() {
    return this._options;
  }
  handleException(e) {
    Wt && qt.exception(e), this._options.onError && this._options.onError(e);
  }
  initializeSampling(e) {
    const { errorSampleRate: t, sessionSampleRate: n } = this._options,
      r = t <= 0 && n <= 0;
    (this._requiresManualStart = r),
      r ||
        (this._initializeSessionForSampling(e),
        this.session
          ? !1 !== this.session.sampled &&
            ((this.recordingMode =
              "buffer" === this.session.sampled && 0 === this.session.segmentId
                ? "buffer"
                : "session"),
            Wt && qt.infoTick(`Starting replay in ${this.recordingMode} mode`),
            this._initializeRecording())
          : Wt &&
            qt.exception(new Error("Unable to initialize and create session")));
  }
  start() {
    if (this._isEnabled && "session" === this.recordingMode)
      return void (Wt && qt.log("Recording is already in progress"));
    if (this._isEnabled && "buffer" === this.recordingMode)
      return void (
        Wt &&
        qt.log("Buffering is in progress, call `flush()` to save the replay")
      );
    Wt && qt.infoTick("Starting replay in session mode"),
      this._updateUserActivity();
    const e = an(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      },
    );
    (this.session = e),
      (this.recordingMode = "session"),
      this._initializeRecording();
  }
  startBuffering() {
    if (this._isEnabled)
      return void (
        Wt &&
        qt.log("Buffering is in progress, call `flush()` to save the replay")
      );
    Wt && qt.infoTick("Starting replay in buffer mode");
    const e = an(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      },
    );
    (this.session = e),
      (this.recordingMode = "buffer"),
      this._initializeRecording();
  }
  startRecording() {
    try {
      const e = this._canvas;
      this._stopRecording = gt({
        ...this._recordingOptions,
        ...("buffer" === this.recordingMode
          ? { checkoutEveryNms: 6e4 }
          : this._options._experiments.continuousCheckout && {
              checkoutEveryNms: Math.max(
                36e4,
                this._options._experiments.continuousCheckout,
              ),
            }),
        emit: xn(this),
        ...(/iPhone|iPad|iPod/i.test(Ln?.userAgent ?? "") ||
        (/Macintosh/i.test(Ln?.userAgent ?? "") &&
          Ln?.maxTouchPoints &&
          Ln?.maxTouchPoints > 1)
          ? { sampling: { mousemove: !1 } }
          : {}),
        onMutation: this._onMutationHandler.bind(this),
        ...(e
          ? {
              recordCanvas: e.recordCanvas,
              getCanvasManager: e.getCanvasManager,
              sampling: e.sampling,
              dataURLOptions: e.dataURLOptions,
            }
          : {}),
      });
    } catch (e) {
      this.handleException(e);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (e) {
      return this.handleException(e), !1;
    }
  }
  async stop({ forceFlush: e = !1, reason: t } = {}) {
    if (!this._isEnabled) return;
    (this._isEnabled = !1), (this.recordingMode = "buffer");
    const n = t ?? "manual";
    r.getClient()?.emit("replayEnd", {
      sessionId: this.session?.id,
      reason: n,
    });
    try {
      Wt && qt.log(`Stopping Replay triggered by ${n}`),
        mn(),
        this._removeListeners(),
        this.stopRecording(),
        this._debouncedFlush.cancel(),
        e && (await this._flush({ force: !0 })),
        this.eventBuffer?.destroy(),
        (this.eventBuffer = null),
        (o = this),
        (function () {
          if (Qt())
            try {
              i.sessionStorage.removeItem(s);
            } catch {}
        })(),
        (o.session = void 0);
    } catch (e) {
      this.handleException(e);
    }
    var o;
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      Wt && qt.log("Pausing replay"));
  }
  resume() {
    this._isPaused &&
      this._checkSession() &&
      ((this._isPaused = !1),
      this.startRecording(),
      Wt && qt.log("Resuming replay"));
  }
  async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
    if ("session" === this.recordingMode) return this.flushImmediate();
    const t = Date.now();
    Wt && qt.log("Converting buffer to session"), await this.flushImmediate();
    const n = this.stopRecording();
    e &&
      n &&
      "session" !== this.recordingMode &&
      ((this.recordingMode = "session"),
      this.session &&
        ((this.session.dirty = !1),
        this._updateUserActivity(t),
        this._updateSessionActivity(t),
        this._maybeSaveSession(),
        _n(this.session.id)),
      this.startRecording());
  }
  addUpdate(e) {
    const t = e();
    "buffer" !== this.recordingMode &&
      this._isEnabled &&
      !0 !== t &&
      this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), this._stopRecording))
      this.checkAndHandleExpiredSession(), this._updateSessionActivity();
    else {
      if (!this._checkSession()) return;
      this.resume();
    }
  }
  updateUserActivity() {
    this._updateUserActivity(), this._updateSessionActivity();
  }
  conditionalFlush() {
    return "buffer" === this.recordingMode
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return this._debouncedFlush(), this._debouncedFlush.flush();
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId(e) {
    if (!e || !1 !== this.session?.sampled) return this.session?.id;
  }
  checkAndHandleExpiredSession() {
    if (
      !this._lastActivity ||
      !on(this._lastActivity, this.timeouts.sessionIdlePause) ||
      "session" !== this.session?.sampled
    )
      return !!this._checkSession();
    this.pause();
  }
  setInitialState() {
    const e = `${i.location.pathname}${i.location.hash}${i.location.search}`,
      t = `${i.location.origin}${e}`;
    (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = t),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(t);
  }
  throttledAddEvent(e, t) {
    const n = this._throttledAddEvent(e, t);
    if (n === Gn) {
      const e = Ot({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !cn(this, {
            type: 5,
            timestamp: e.timestamp || 0,
            data: { tag: "breadcrumb", payload: e, metric: !0 },
          }),
      );
    }
    return n;
  }
  getCurrentRoute() {
    const e = this.lastActiveSpan || r.getActiveSpan(),
      t = e && r.getRootSpan(e),
      n = ((t && r.spanToJSON(t).data) || {})[
        r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE
      ];
    if (t && n && ["route", "custom"].includes(n))
      return r.spanToJSON(t).description;
  }
  _initializeRecording() {
    this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = (function ({ useCompression: e, workerUrl: t }) {
        if (e && window.Worker) {
          const e = (function (e) {
            try {
              const t =
                e ||
                ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ &&
                __SENTRY_EXCLUDE_REPLAY_WORKER__
                  ? ""
                  : (function () {
                      const e = new Blob(
                        [
                          'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                        ],
                        { type: "text/javascript" },
                      );
                      return URL.createObjectURL(e);
                    })());
              if (!t) return;
              Wt &&
                qt.log("Using compression worker" + (e ? ` from ${e}` : ""));
              const n = new Worker(t);
              return new Jt(n);
            } catch (e) {
              Wt && qt.exception(e, "Failed to create compression worker");
            }
          })(t);
          if (e) return e;
        }
        return Wt && qt.log("Using simple buffer"), new Xt();
      })({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.session &&
        r.getClient()?.emit("replayStart", {
          sessionId: this.session.id,
          recordingMode: this.recordingMode,
        }),
      this.startRecording(),
      "session" === this.recordingMode && this.session && _n(this.session.id);
  }
  _initializeSessionForSampling(e) {
    const t = this._options.errorSampleRate > 0,
      n = an(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          previousSessionId: e,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: t,
        },
      );
    this.session = n;
  }
  _checkSession() {
    if (!this.session) return !1;
    const e = this.session;
    return (
      !sn(e, {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      }) || (this._refreshSession(e), !1)
    );
  }
  async _refreshSession(e) {
    this._isEnabled &&
      (await this.stop({ reason: "sessionExpired" }),
      this.initializeSampling(e.id));
  }
  _addListeners() {
    try {
      i.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        i.addEventListener("blur", this._handleWindowBlur),
        i.addEventListener("focus", this._handleWindowFocus),
        i.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (kn(this), (this._hasInitializedCoreListeners = !0));
    } catch (e) {
      this.handleException(e);
    }
    this._performanceCleanupCallback = (function (e) {
      function t(t) {
        e.performanceEntries.includes(t) || e.performanceEntries.push(t);
      }
      function n({ entries: e }) {
        e.forEach(t);
      }
      const r = [];
      return (
        ["navigation", "paint", "resource"].forEach((e) => {
          r.push(o.addPerformanceInstrumentationHandler(e, n));
        }),
        r.push(
          o.addLcpInstrumentationHandler(Mt(Bt, e)),
          o.addClsInstrumentationHandler(Mt(Ft, e)),
          o.addInpInstrumentationHandler(Mt(jt, e)),
        ),
        () => {
          r.forEach((e) => e());
        }
      );
    })(this);
  }
  _removeListeners() {
    try {
      i.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        i.removeEventListener("blur", this._handleWindowBlur),
        i.removeEventListener("focus", this._handleWindowFocus),
        i.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback();
    } catch (e) {
      this.handleException(e);
    }
  }
  _doChangeToBackgroundTasks(e) {
    this.session &&
      (sn(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      })
        ? mn()
        : (e && this._createCustomBreadcrumb(e), this.conditionalFlush()));
  }
  _doChangeToForegroundTasks(e) {
    this.session &&
      (this.checkAndHandleExpiredSession()
        ? e && this._createCustomBreadcrumb(e)
        : Wt && qt.log("Document has become active, but session has expired"));
  }
  _updateUserActivity(e = Date.now()) {
    this._lastActivity = e;
  }
  _updateSessionActivity(e = Date.now()) {
    this.session && ((this.session.lastActivity = e), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(e) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: Ie.Custom,
        timestamp: e.timestamp || 0,
        data: { tag: "breadcrumb", payload: e },
      });
    });
  }
  _addPerformanceEntries() {
    let e = ((t = this.performanceEntries), t.map(Dt).filter(Boolean)).concat(
      this.replayPerformanceEntries,
    );
    var t;
    if (
      ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._requiresManualStart)
    ) {
      const t = this._context.initialTimestamp / 1e3;
      e = e.filter((e) => e.start >= t);
    }
    return Promise.all(Sn(this, e));
  }
  _clearContext() {
    this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      this._context.segmentNames.clear(),
      (this._context.urls = []);
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: e, eventBuffer: t } = this;
    if (!e || !t || this._requiresManualStart) return;
    if (e.segmentId) return;
    const n = t.getEarliestTimestamp();
    n &&
      n < this._context.initialTimestamp &&
      (this._context.initialTimestamp = n);
  }
  _popEventContext() {
    const e = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      segmentNames: Array.from(this._context.segmentNames),
      urls: this._context.urls,
    };
    return this._clearContext(), e;
  }
  async _runFlush() {
    const e = this.getSessionId();
    if (this.session && this.eventBuffer && e) {
      if (
        (await this._addPerformanceEntries(),
        this.eventBuffer?.hasEvents &&
          (await (async function (e) {
            try {
              return Promise.all(Sn(e, [Pn(i.performance.memory)]));
            } catch {
              return [];
            }
          })(this),
          this.eventBuffer && e === this.getSessionId()))
      )
        try {
          this._updateInitialTimestampFromEventBuffer();
          const t = Date.now();
          if (
            t - this._context.initialTimestamp >
            this._options.maxReplayDuration + 3e4
          )
            throw new Un();
          const n = this._popEventContext(),
            r = this.session.segmentId++;
          this._maybeSaveSession();
          const o = await this.eventBuffer.finish();
          await Bn({
            replayId: e,
            recordingData: o,
            segmentId: r,
            eventContext: n,
            session: this.session,
            timestamp: t,
            onError: (e) => this.handleException(e),
          });
        } catch (e) {
          this.handleException(e), this.stop({ reason: "sendError" });
          const t = r.getClient();
          if (t) {
            let n;
            (n =
              e instanceof Dn
                ? "ratelimit_backoff"
                : e instanceof Un
                  ? "invalid"
                  : "send_error"),
              t.recordDroppedEvent(n, "replay");
          }
        }
    } else Wt && qt.error("No session or eventBuffer found to flush.");
  }
  async _flush({ force: e = !1 } = {}) {
    if (!this._isEnabled && !e) return;
    if (!this.checkAndHandleExpiredSession())
      return void (
        Wt &&
        qt.error("Attempting to finish replay event after session expired.")
      );
    if (!this.session) return;
    const t = this.session.started,
      n = Date.now() - t;
    this._debouncedFlush.cancel();
    const r = n < this._options.minReplayDuration,
      o = n > this._options.maxReplayDuration + 5e3;
    if (r || o)
      return (
        Wt &&
          qt.log(
            `Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`,
          ),
        void (r && this._debouncedFlush())
      );
    const i = this.eventBuffer;
    i &&
      0 === this.session.segmentId &&
      !i.hasCheckout &&
      Wt &&
      qt.log("Flushing initial segment without checkout.");
    const s = !!this._flushLock;
    this._flushLock || (this._flushLock = this._runFlush());
    try {
      await this._flushLock;
    } catch (e) {
      this.handleException(e);
    } finally {
      (this._flushLock = void 0), s && this._debouncedFlush();
    }
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && tn(this.session);
  }
  _onMutationHandler(e) {
    const { ignoreMutations: t } = this._options._experiments;
    if (
      t?.length &&
      e.some((e) => {
        const n = (function (e) {
            if (!e) return null;
            try {
              return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            } catch {
              return null;
            }
          })(e.target),
          r = t.join(",");
        return n?.matches(r);
      })
    )
      return !1;
    const n = e.length,
      r = this._options.mutationLimit,
      o = r && n > r;
    if (n > this._options.mutationBreadcrumbLimit || o) {
      const e = Ot({
        category: "replay.mutations",
        data: { count: n, limit: o },
      });
      this._createCustomBreadcrumb(e);
    }
    return (
      !o ||
      (this.stop({
        reason: "mutationLimit",
        forceFlush: "session" === this.recordingMode,
      }),
      !1)
    );
  }
}
function jn(e, t) {
  return [...e, ...t].join(",");
}
const Hn =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  Wn = ["content-length", "content-type", "accept"],
  Vn = Symbol.for("sentry__originalRequestBody");
let $n = !1,
  Yn = !1;
class qn {
  constructor({
    flushMinDelay: e = 5e3,
    flushMaxDelay: t = 5500,
    minReplayDuration: n = 4999,
    maxReplayDuration: o = 36e5,
    stickySession: i = !0,
    useCompression: s = !0,
    workerUrl: a,
    _experiments: c = {},
    maskAllText: u = !0,
    maskAllInputs: l = !0,
    blockAllMedia: d = !0,
    mutationBreadcrumbLimit: p = 750,
    mutationLimit: f = 1e4,
    slowClickTimeout: h = 7e3,
    slowClickIgnoreSelectors: g = [],
    networkDetailAllowUrls: m = [],
    networkDetailDenyUrls: _ = [],
    networkCaptureBodies: S = !0,
    networkRequestHeaders: E = [],
    networkResponseHeaders: y = [],
    mask: T = [],
    maskAttributes: b = ["title", "placeholder", "aria-label"],
    unmask: I = [],
    block: v = [],
    unblock: A = [],
    ignore: N = [],
    maskFn: R,
    beforeAddRecordingEvent: C,
    beforeErrorSampling: O,
    onError: w,
    attachRawBodyFromRequest: k = !1,
  } = {}) {
    this.name = "Replay";
    const P = (function ({
      mask: e,
      unmask: t,
      block: n,
      unblock: r,
      ignore: o,
    }) {
      return {
        maskTextSelector: jn(e, [".sentry-mask", "[data-sentry-mask]"]),
        unmaskTextSelector: jn(t, []),
        blockSelector: jn(n, [
          ".sentry-block",
          "[data-sentry-block]",
          "base",
          "iframe[srcdoc]:not([src])",
        ]),
        unblockSelector: jn(r, []),
        ignoreSelector: jn(o, [
          ".sentry-ignore",
          "[data-sentry-ignore]",
          'input[type="file"]',
        ]),
      };
    })({ mask: T, unmask: I, block: v, unblock: A, ignore: N });
    if (
      ((this._recordingOptions = {
        maskAllInputs: l,
        maskAllText: u,
        maskInputOptions: { password: !0 },
        maskTextFn: R,
        maskInputFn: R,
        maskAttributeFn: (e, t, n) =>
          (function ({
            el: e,
            key: t,
            maskAttributes: n,
            maskAllText: r,
            privacyOptions: o,
            value: i,
          }) {
            if (o.unmaskTextSelector && e.matches(o.unmaskTextSelector))
              return i;
            const s = n.includes(t),
              a =
                r &&
                "value" === t &&
                "INPUT" === e.tagName &&
                ["submit", "button"].includes(e.getAttribute("type") || "");
            return s || a ? i.replace(/[\S]/g, "*") : i;
          })({
            maskAttributes: b,
            maskAllText: u,
            privacyOptions: P,
            key: e,
            value: t,
            el: n,
          }),
        ...P,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (e) => {
          try {
            e.__rrweb__ = !0;
          } catch {}
        },
        recordCrossOriginIframes: Boolean(c.recordCrossOriginIframes),
      }),
      (this._initialOptions = {
        flushMinDelay: e,
        flushMaxDelay: t,
        minReplayDuration: Math.min(n, 5e4),
        maxReplayDuration: Math.min(o, 36e5),
        stickySession: i,
        useCompression: s,
        workerUrl: a,
        blockAllMedia: d,
        maskAllInputs: l,
        maskAllText: u,
        mutationBreadcrumbLimit: p,
        mutationLimit: f,
        slowClickTimeout: h,
        slowClickIgnoreSelectors: g,
        networkDetailAllowUrls: m,
        networkDetailDenyUrls: _,
        networkCaptureBodies: S,
        networkRequestHeaders: Kn(E),
        networkResponseHeaders: Kn(y),
        beforeAddRecordingEvent: C,
        beforeErrorSampling: O,
        onError: w,
        attachRawBodyFromRequest: k,
        _experiments: c,
      }),
      this._initialOptions.blockAllMedia &&
        ((this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${Hn}`
          : Hn),
        (this._recordingOptions.ignoreCSSAttributes = new Set([
          "background-image",
        ]))),
      this._isInitialized && r.isBrowser())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported",
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return $n;
  }
  set _isInitialized(e) {
    $n = e;
  }
  afterAllSetup(e) {
    r.isBrowser() &&
      !this._replay &&
      (this._initialOptions.attachRawBodyFromRequest &&
        (function () {
          if ("undefined" == typeof Request || Yn) return;
          const e = Request;
          try {
            const t = function (t, n) {
              const r = new e(t, n);
              return null != n?.body && (r[Vn] = n.body), r;
            };
            (t.prototype = e.prototype), (r.GLOBAL_OBJ.Request = t), (Yn = !0);
          } catch {}
        })(),
      this._setup(e),
      this._initialize(e));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop(e) {
    return this._replay
      ? this._replay.stop({
          forceFlush: e?.flush ?? "session" === this._replay.recordingMode,
          reason: "manual",
        })
      : Promise.resolve();
  }
  flush(e) {
    return this._replay
      ? this._replay.isEnabled()
        ? this._replay.sendBufferedReplayOrFlush(e)
        : (this._replay.start(), Promise.resolve())
      : Promise.resolve();
  }
  getReplayId(e) {
    if (this._replay?.isEnabled()) return this._replay.getSessionId(e);
  }
  getRecordingMode() {
    if (this._replay?.isEnabled()) return this._replay.recordingMode;
  }
  processSpan(e) {
    const t = this.getReplayId(!0);
    t &&
      (r.safeSetSpanJSONAttributes(e, { "sentry.replay_id": t }),
      "buffer" === this.getRecordingMode() &&
        r.safeSetSpanJSONAttributes(e, {
          "sentry._internal.replay_is_buffering": !0,
        }));
  }
  _initialize(e) {
    this._replay &&
      (this._maybeLoadFromReplayCanvasIntegration(e),
      this._replay.initializeSampling());
  }
  _setup(e) {
    const t = (function (e, t) {
      const n = t.getOptions(),
        o = { sessionSampleRate: 0, errorSampleRate: 0, ...e },
        i = r.parseSampleRate(n.replaysSessionSampleRate),
        s = r.parseSampleRate(n.replaysOnErrorSampleRate);
      return (
        null == i && null == s && r.consoleSandbox(() => {}),
        null != i && (o.sessionSampleRate = i),
        null != s && (o.errorSampleRate = s),
        o
      );
    })(this._initialOptions, e);
    this._replay = new Fn({
      options: t,
      recordingOptions: this._recordingOptions,
    });
  }
  _maybeLoadFromReplayCanvasIntegration(e) {
    try {
      const t = e.getIntegrationByName("ReplayCanvas");
      if (!t) return;
      this._replay._canvas = t.getOptions();
    } catch {}
  }
}
function Kn(e) {
  return [...Wn, ...e.map((e) => e.toLowerCase())];
}
(t.getReplay = function () {
  const e = r.getClient();
  return e?.getIntegrationByName("Replay");
}),
  (t.replayIntegration = (e) => new qn(e));
