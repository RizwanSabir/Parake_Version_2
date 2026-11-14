// vendor/module-62975.js — webpack module 62975
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(76414 /* vendor/module-76414 */),
  i = r.GLOBAL_OBJ,
  a = "sentryReplaySession",
  s = "Unable to send Replay",
  l = 15e4,
  c = 5e3,
  u = 2e7;
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
function m(e) {
  return "[object ShadowRoot]" === Object.prototype.toString.call(e);
}
function g(e) {
  try {
    const n = e.rules || e.cssRules;
    return n
      ? ((t = Array.from(n, y).join("")).includes(" background-clip: text;") &&
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
function y(e) {
  let t;
  if (
    (function (e) {
      return "styleSheet" in e;
    })(e)
  )
    try {
      t =
        g(e.styleSheet) ||
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
class v {
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
function b({ maskInputOptions: e, tagName: t, type: n }) {
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
function S({ isMasked: e, element: t, value: n, maskInputFn: r }) {
  let o = n || "";
  return e ? (r && (o = r(o, t)), "*".repeat(o.length)) : o;
}
function _(e) {
  return e.toLowerCase();
}
function x(e) {
  return e.toUpperCase();
}
const w = "__rrweb_original__";
function E(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? _(t) : null;
}
function T(e, t, n) {
  return "INPUT" !== t || ("radio" !== n && "checkbox" !== n)
    ? e.value
    : e.getAttribute("value") || "";
}
function k(e, t) {
  let n;
  try {
    n = new URL(e, t ?? window.location.href);
  } catch (e) {
    return null;
  }
  const r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
  return r?.[1] ?? null;
}
const C = {};
function I(e) {
  const t = C[e];
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
  return (C[e] = r.bind(window));
}
function A(...e) {
  return I("setTimeout")(...e);
}
function O(...e) {
  return I("clearTimeout")(...e);
}
function R(e) {
  try {
    return e.contentDocument;
  } catch {}
}
let M = 1;
const P = new RegExp("[^a-z0-9-_:]");
function N() {
  return M++;
}
let D, j;
const L = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  F = /^(?:[a-z+]+:)?\/\//i,
  U = /^www\..*/i,
  B = /^(data:)([^,]*),(.*)/i;
function z(e, t) {
  return (e || "").replace(L, (e, n, r, o, i, a) => {
    const s = r || i || a,
      l = n || o || "";
    if (!s) return e;
    if (F.test(s) || U.test(s)) return `url(${l}${s}${l})`;
    if (B.test(s)) return `url(${l}${s}${l})`;
    if ("/" === s[0])
      return `url(${l}${
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
        })(t) + s
      }${l})`;
    const c = t.split("/"),
      u = s.split("/");
    c.pop();
    for (const e of u) "." !== e && (".." === e ? c.pop() : c.push(e));
    return `url(${l}${c.join("/")}${l})`;
  });
}
const H = /^[^ \t\n\r\u000c]+/,
  V = /^[, \t\n\r\u000c]+/,
  q = new WeakMap();
function G(e, t) {
  return t && "" !== t.trim() ? W(e, t) : t;
}
function W(e, t) {
  let n = q.get(e);
  if ((n || ((n = e.createElement("a")), q.set(e, n)), t)) {
    if (t.startsWith("blob:") || t.startsWith("data:")) return t;
  } else t = "";
  return n.setAttribute("href", t), n.href;
}
function $(e, t, n, r, o, i, a) {
  if (!r) return r;
  if ("src" === n || ("href" === n && ("use" !== t || "#" !== r[0])))
    return G(e, r);
  if ("xlink:href" === n && "#" !== r[0]) return G(e, r);
  if ("background" === n && ("table" === t || "td" === t || "th" === t))
    return G(e, r);
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
      for (; r(V), !(n >= t.length); ) {
        let i = r(H);
        if ("," === i.slice(-1))
          (i = G(e, i.substring(0, i.length - 1))), o.push(i);
        else {
          let r = "";
          i = G(e, i);
          let a = !1;
          for (;;) {
            const e = t.charAt(n);
            if ("" === e) {
              o.push((i + r).trim());
              break;
            }
            if (a) ")" === e && (a = !1);
            else {
              if ("," === e) {
                (n += 1), o.push((i + r).trim());
                break;
              }
              "(" === e && (a = !0);
            }
            (r += e), (n += 1);
          }
        }
      }
      return o.join(", ");
    })(e, r);
  if ("style" === n) {
    let t = z(r, W(e));
    return (
      a &&
        a.size > 0 &&
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
        })(t, a)),
      t
    );
  }
  return "object" === t && "data" === n
    ? G(e, r)
    : "function" == typeof i
      ? i(n, r, o)
      : r;
}
function Y(e, t, n) {
  return ("video" === e || "audio" === e) && "autoplay" === t;
}
function K(e, t, n = 1 / 0, r = 0) {
  return e
    ? e.nodeType !== e.ELEMENT_NODE || r > n
      ? -1
      : t(e)
        ? r
        : K(e.parentNode, t, n, r + 1)
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
function Q(e, t, n, r, o, i) {
  try {
    const a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (null === a) return !1;
    if ("INPUT" === a.tagName) {
      const e = a.getAttribute("autocomplete");
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
    let s = -1,
      l = -1;
    if (i) {
      if (((l = K(a, Z(r, o))), l < 0)) return !0;
      s = K(a, Z(t, n), l >= 0 ? l : 1 / 0);
    } else {
      if (((s = K(a, Z(t, n))), s < 0)) return !1;
      l = K(a, Z(r, o), s >= 0 ? s : 1 / 0);
    }
    return s >= 0 ? !(l >= 0) || s <= l : !(l >= 0 || !i);
  } catch (e) {}
  return !!i;
}
function J(e) {
  return null == e ? "" : e.toLowerCase();
}
function X(e, t) {
  const {
    doc: n,
    mirror: r,
    blockClass: o,
    blockSelector: i,
    unblockSelector: a,
    maskAllText: s,
    maskTextClass: l,
    unmaskTextClass: c,
    maskTextSelector: u,
    unmaskTextSelector: d,
    skipChild: p = !1,
    inlineStylesheet: y = !0,
    maskInputOptions: v = {},
    maskAttributeFn: C,
    maskTextFn: I,
    maskInputFn: M,
    slimDOMOptions: L,
    dataURLOptions: F = {},
    inlineImages: U = !1,
    recordCanvas: B = !1,
    onSerialize: H,
    onIframeLoad: V,
    iframeLoadTimeout: q = 5e3,
    onBlockedImageLoad: G,
    onStylesheetLoad: K,
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
        unblockSelector: a,
        maskAllText: s,
        maskAttributeFn: l,
        maskTextClass: c,
        unmaskTextClass: u,
        maskTextSelector: d,
        unmaskTextSelector: p,
        inlineStylesheet: h,
        maskInputOptions: m = {},
        maskTextFn: y,
        maskInputFn: v,
        dataURLOptions: k = {},
        inlineImages: C,
        recordCanvas: I,
        keepIframeSrcFn: A,
        newlyAddedElement: O = !1,
        ignoreCSSAttributes: M,
      } = t,
      N = (function (e, t) {
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
          rootId: N,
        };
      case e.ELEMENT_NODE:
        return (function (e, t) {
          const {
              doc: n,
              blockClass: r,
              blockSelector: o,
              unblockSelector: i,
              inlineStylesheet: a,
              maskInputOptions: s = {},
              maskAttributeFn: l,
              maskInputFn: c,
              dataURLOptions: u = {},
              inlineImages: d,
              recordCanvas: p,
              keepIframeSrcFn: h,
              newlyAddedElement: m = !1,
              rootId: y,
              maskTextClass: v,
              unmaskTextClass: k,
              maskTextSelector: C,
              unmaskTextSelector: I,
              ignoreCSSAttributes: A,
            } = t,
            O = (function (e, t, n, r) {
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
            M = (function (e) {
              if (e instanceof HTMLFormElement) return "form";
              const t = _(e.tagName);
              return P.test(t) ? "div" : t;
            })(e);
          let N = {};
          const L = e.attributes.length;
          for (let t = 0; t < L; t++) {
            const r = e.attributes[t];
            r.name &&
              !Y(M, r.name, r.value) &&
              (N[r.name] = $(n, M, _(r.name), r.value, e, l, A));
          }
          if ("link" === M && a) {
            const t = Array.from(n.styleSheets).find((t) => t.href === e.href);
            let r = null;
            t && (r = g(t)),
              r &&
                ((N.rel = null),
                (N.href = null),
                (N.crossorigin = null),
                (N._cssText = z(r, t.href)));
          }
          if (
            "style" === M &&
            e.sheet &&
            !(e.innerText || e.textContent || "").trim().length
          ) {
            const t = g(e.sheet);
            t && (N._cssText = z(t, W(n)));
          }
          if (
            "input" === M ||
            "textarea" === M ||
            "select" === M ||
            "option" === M
          ) {
            const t = e,
              n = E(t),
              r = T(t, x(M), n),
              o = t.checked;
            if ("submit" !== n && "button" !== n && r) {
              const e = Q(
                t,
                v,
                C,
                k,
                I,
                b({ type: n, tagName: x(M), maskInputOptions: s }),
              );
              N.value = S({
                isMasked: e,
                element: t,
                value: r,
                maskInputFn: c,
              });
            }
            o && (N.checked = o);
          }
          if (
            ("option" === M &&
              (e.selected && !s.select ? (N.selected = !0) : delete N.selected),
            "canvas" === M && p)
          )
            if ("2d" === e.__context)
              (function (e) {
                const t = e.getContext("2d");
                if (!t) return !0;
                for (let n = 0; n < e.width; n += 50)
                  for (let r = 0; r < e.height; r += 50) {
                    const o = t.getImageData,
                      i = w in o ? o[w] : o;
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
              })(e) || (N.rr_dataURL = e.toDataURL(u.type, u.quality));
            else if (!("__context" in e)) {
              const t = e.toDataURL(u.type, u.quality),
                r = n.createElement("canvas");
              (r.width = e.width),
                (r.height = e.height),
                t !== r.toDataURL(u.type, u.quality) && (N.rr_dataURL = t);
            }
          if ("img" === M && d) {
            D || ((D = n.createElement("canvas")), (j = D.getContext("2d")));
            const t = e,
              r = (t.currentSrc || t.getAttribute("src"), t.crossOrigin),
              o = () => {
                t.removeEventListener("load", o);
                try {
                  (D.width = t.naturalWidth),
                    (D.height = t.naturalHeight),
                    j.drawImage(t, 0, 0),
                    (N.rr_dataURL = D.toDataURL(u.type, u.quality));
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
                  (r ? (N.crossOrigin = r) : t.removeAttribute("crossorigin"));
              };
            t.complete && 0 !== t.naturalWidth
              ? o()
              : t.addEventListener("load", o);
          }
          if (
            (("audio" !== M && "video" !== M) ||
              ((N.rr_mediaState = e.paused ? "paused" : "played"),
              (N.rr_mediaCurrentTime = e.currentTime)),
            m ||
              (e.scrollLeft && (N.rr_scrollLeft = e.scrollLeft),
              e.scrollTop && (N.rr_scrollTop = e.scrollTop)),
            O)
          ) {
            const { width: t, height: n } = e.getBoundingClientRect();
            N = {
              class: N.class,
              rr_width: `${t}px`,
              rr_height: `${n}px`,
            };
          }
          let F;
          "iframe" !== M ||
            h(N.src) ||
            (O || R(e) || (N.rr_src = N.src), delete N.src);
          try {
            customElements.get(M) && (F = !0);
          } catch (e) {}
          return {
            type: f.Element,
            tagName: M,
            attributes: N,
            childNodes: [],
            isSVG:
              ((U = e),
              Boolean("svg" === U.tagName || U.ownerSVGElement) || void 0),
            needBlock: O,
            rootId: y,
            isCustom: F,
          };
          var U;
        })(e, {
          doc: n,
          blockClass: o,
          blockSelector: i,
          unblockSelector: a,
          inlineStylesheet: h,
          maskAttributeFn: l,
          maskInputOptions: m,
          maskInputFn: v,
          dataURLOptions: k,
          inlineImages: C,
          recordCanvas: I,
          keepIframeSrcFn: A,
          newlyAddedElement: O,
          rootId: N,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: d,
          unmaskTextSelector: p,
          ignoreCSSAttributes: M,
        });
      case e.TEXT_NODE:
        return (function (e, t) {
          const {
              maskAllText: n,
              maskTextClass: r,
              unmaskTextClass: o,
              maskTextSelector: i,
              unmaskTextSelector: a,
              maskTextFn: s,
              maskInputOptions: l,
              maskInputFn: c,
              rootId: u,
            } = t,
            d = e.parentNode && e.parentNode.tagName;
          let p = e.textContent;
          const h = "STYLE" === d || void 0,
            m = "SCRIPT" === d || void 0,
            y = "TEXTAREA" === d || void 0;
          if (h && p) {
            try {
              e.nextSibling ||
                e.previousSibling ||
                (e.parentNode.sheet?.cssRules && (p = g(e.parentNode.sheet)));
            } catch (e) {}
            p = z(p, W(t.doc));
          }
          m && (p = "SCRIPT_PLACEHOLDER");
          const v = Q(e, r, i, o, a, n);
          return (
            h ||
              m ||
              y ||
              !p ||
              !v ||
              (p = s ? s(p, e.parentElement) : p.replace(/[\S]/g, "*")),
            y &&
              p &&
              (l.textarea || v) &&
              (p = c ? c(p, e.parentNode) : p.replace(/[\S]/g, "*")),
            "OPTION" === d &&
              p &&
              (p = S({
                isMasked: Q(
                  e,
                  r,
                  i,
                  o,
                  a,
                  b({ type: null, tagName: d, maskInputOptions: l }),
                ),
                element: e,
                value: p,
                maskInputFn: c,
              })),
            {
              type: f.Text,
              textContent: p || "",
              isStyle: h,
              rootId: u,
            }
          );
        })(e, {
          doc: n,
          maskAllText: s,
          maskTextClass: c,
          unmaskTextClass: u,
          maskTextSelector: d,
          unmaskTextSelector: p,
          maskTextFn: y,
          maskInputOptions: m,
          maskInputFn: v,
          rootId: N,
        });
      case e.CDATA_SECTION_NODE:
        return { type: f.CDATA, textContent: "", rootId: N };
      case e.COMMENT_NODE:
        return {
          type: f.Comment,
          textContent: e.textContent || "",
          rootId: N,
        };
      default:
        return !1;
    }
  })(e, {
    doc: n,
    mirror: r,
    blockClass: o,
    blockSelector: i,
    maskAllText: s,
    unblockSelector: a,
    maskTextClass: l,
    unmaskTextClass: c,
    maskTextSelector: u,
    unmaskTextSelector: d,
    inlineStylesheet: y,
    maskInputOptions: v,
    maskAttributeFn: C,
    maskTextFn: I,
    maskInputFn: M,
    dataURLOptions: F,
    inlineImages: U,
    recordCanvas: B,
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
                  "js" === k(e.attributes.href)))
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
        })(oe, L) &&
        (re || oe.type !== f.Text || oe.isStyle || oe.textContent.trim().length)
      ? N()
      : -2;
  const ae = Object.assign(oe, { id: ie });
  if ((r.add(e, ae), -2 === ie)) return null;
  H && H(e);
  let se = !p;
  if (ae.type === f.Element) {
    se = se && !ae.needBlock;
    const t = e.shadowRoot;
    t && m(t) && (ae.isShadowHost = !0);
  }
  if ((ae.type === f.Document || ae.type === f.Element) && se) {
    L.headWhitespace &&
      ae.type === f.Element &&
      "head" === ae.tagName &&
      (re = !1);
    const t = {
        doc: n,
        mirror: r,
        blockClass: o,
        blockSelector: i,
        maskAllText: s,
        unblockSelector: a,
        maskTextClass: l,
        unmaskTextClass: c,
        maskTextSelector: u,
        unmaskTextSelector: d,
        skipChild: p,
        inlineStylesheet: y,
        maskInputOptions: v,
        maskAttributeFn: C,
        maskTextFn: I,
        maskInputFn: M,
        slimDOMOptions: L,
        dataURLOptions: F,
        inlineImages: U,
        recordCanvas: B,
        preserveWhiteSpace: re,
        onSerialize: H,
        onIframeLoad: V,
        iframeLoadTimeout: q,
        onBlockedImageLoad: G,
        onStylesheetLoad: K,
        stylesheetLoadTimeout: Z,
        keepIframeSrcFn: ee,
        ignoreCSSAttributes: ne,
      },
      h = e.childNodes ? Array.from(e.childNodes) : [];
    for (const e of h) {
      const n = X(e, t);
      n && ae.childNodes.push(n);
    }
    if (
      (function (e) {
        return e.nodeType === e.ELEMENT_NODE;
      })(e) &&
      e.shadowRoot
    )
      for (const n of Array.from(e.shadowRoot.childNodes)) {
        const r = X(n, t);
        r && (m(e.shadowRoot) && (r.isShadow = !0), ae.childNodes.push(r));
      }
  }
  if (
    (e.parentNode && h(e.parentNode) && m(e.parentNode) && (ae.isShadow = !0),
    ae.type !== f.Element ||
      "iframe" !== ae.tagName ||
      ae.needBlock ||
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
          const r = A(() => {
            i || (t(), (i = !0));
          }, n);
          return void e.addEventListener("load", () => {
            O(r), (i = !0), t();
          });
        }
        const a = "about:blank";
        if (r.location.href !== a || e.src === a || "" === e.src)
          return A(t, 0), e.addEventListener("load", t);
        e.addEventListener("load", t);
      })(
        e,
        () => {
          const t = R(e);
          if (t && V) {
            const n = X(t, {
              doc: t,
              mirror: r,
              blockClass: o,
              blockSelector: i,
              unblockSelector: a,
              maskAllText: s,
              maskTextClass: l,
              unmaskTextClass: c,
              maskTextSelector: u,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: y,
              maskInputOptions: v,
              maskAttributeFn: C,
              maskTextFn: I,
              maskInputFn: M,
              slimDOMOptions: L,
              dataURLOptions: F,
              inlineImages: U,
              recordCanvas: B,
              preserveWhiteSpace: re,
              onSerialize: H,
              onIframeLoad: V,
              iframeLoadTimeout: q,
              onStylesheetLoad: K,
              stylesheetLoadTimeout: Z,
              keepIframeSrcFn: ee,
              ignoreCSSAttributes: ne,
            });
            n && V(e, n);
          }
        },
        q,
      ),
    ae.type === f.Element &&
      "img" === ae.tagName &&
      !e.complete &&
      ae.needBlock)
  ) {
    const t = e,
      n = () => {
        if (t.isConnected && !t.complete && G)
          try {
            const e = t.getBoundingClientRect();
            e.width > 0 && e.height > 0 && G(t, ae, e);
          } catch (e) {}
        t.removeEventListener("load", n);
      };
    t.isConnected && t.addEventListener("load", n);
  }
  return (
    ae.type === f.Element &&
      "link" === ae.tagName &&
      "string" == typeof ae.attributes.rel &&
      ("stylesheet" === ae.attributes.rel ||
        ("preload" === ae.attributes.rel &&
          "string" == typeof ae.attributes.href &&
          "css" === k(ae.attributes.href))) &&
      (function (e, t, n) {
        let r,
          o = !1;
        try {
          r = e.sheet;
        } catch (e) {
          r = null;
        }
        if (r) return;
        const i = A(() => {
          o || (t(), (o = !0));
        }, n);
        e.addEventListener("load", () => {
          O(i), (o = !0), t();
        });
      })(
        e,
        () => {
          if (K) {
            const t = X(e, {
              doc: n,
              mirror: r,
              blockClass: o,
              blockSelector: i,
              unblockSelector: a,
              maskAllText: s,
              maskTextClass: l,
              unmaskTextClass: c,
              maskTextSelector: u,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: y,
              maskInputOptions: v,
              maskAttributeFn: C,
              maskTextFn: I,
              maskInputFn: M,
              slimDOMOptions: L,
              dataURLOptions: F,
              inlineImages: U,
              recordCanvas: B,
              preserveWhiteSpace: re,
              onSerialize: H,
              onIframeLoad: V,
              iframeLoadTimeout: q,
              onStylesheetLoad: K,
              stylesheetLoadTimeout: Z,
              keepIframeSrcFn: ee,
              ignoreCSSAttributes: ne,
            });
            t && K(e, t);
          }
        },
        Z,
      ),
    ae.type === f.Element && delete ae.needBlock,
    ae
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
    const a = Date.now();
    o || !1 !== n.leading || (o = a);
    const s = t - (a - o),
      l = this;
    s <= 0 || s > t
      ? (r &&
          ((function (...e) {
            _e("clearTimeout")(...e);
          })(r),
          (r = null)),
        (o = a),
        e.apply(l, i))
      : r ||
        !1 === n.trailing ||
        (r = xe(() => {
          (o = !1 === n.leading ? 0 : Date.now()), (r = null), e.apply(l, i);
        }, s));
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
              xe(() => {
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
function ae(e) {
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
function se() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function le() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function ce(e) {
  if (!e) return null;
  try {
    return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
  } catch (e) {
    return null;
  }
}
function ue(e, t, n, r, o) {
  if (!e) return !1;
  const i = ce(e);
  if (!i) return !1;
  const a = Z(t, n);
  if (!o) {
    const e = r && i.matches(r);
    return a(i) && !e;
  }
  const s = K(i, a);
  let l = -1;
  return !(s < 0) && (r && (l = K(i, Z(null, r))), (s > -1 && l < 0) || s < l);
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
function me(e, t) {
  return Boolean(
    "LINK" === e.nodeName &&
      e.nodeType === e.ELEMENT_NODE &&
      e.getAttribute &&
      "stylesheet" === e.getAttribute("rel") &&
      t.getMeta(e),
  );
}
function ge(e) {
  return Boolean(e?.shadowRoot);
}
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (ie = () => new Date().getTime());
class ye {
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
function ve(e) {
  let t = null;
  return (
    e.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function be(e) {
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
          for (; (t = ve(n)); ) n = t;
          return n;
        })(e);
        return t.contains(n);
      })(e))
  );
}
const Se = {};
function _e(e) {
  const t = Se[e];
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
  return (Se[e] = r.bind(window));
}
function xe(...e) {
  return _e("setTimeout")(...e);
}
var we = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(we || {}),
  Ee = ((e) => (
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
  ))(Ee || {}),
  Te = ((e) => (
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
  ))(Te || {}),
  ke = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(ke || {}),
  Ce = ((e) => (
    (e[(e.Play = 0)] = "Play"),
    (e[(e.Pause = 1)] = "Pause"),
    (e[(e.Seeked = 2)] = "Seeked"),
    (e[(e.VolumeChange = 3)] = "VolumeChange"),
    (e[(e.RateChange = 4)] = "RateChange"),
    e
  ))(Ce || {});
let Ie;
function Ae(e) {
  Ie = e;
}
function Oe() {
  Ie = void 0;
}
const Re = (e) =>
  Ie
    ? (...t) => {
        try {
          return e(...t);
        } catch (e) {
          if (Ie && !0 === Ie(e)) return () => {};
          throw e;
        }
      }
    : e;
for (
  var Me = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Pe = 0;
  Pe < 64;
  Pe++
)
  Me[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
      Pe,
    )
  ] = Pe;
class Ne {
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
function De(e) {
  try {
    return e.contentDocument;
  } catch (e) {}
}
function je(e) {
  try {
    return e.contentWindow;
  } catch (e) {}
}
class Le {
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
function Fe(e) {
  return "__ln" in e;
}
class Ue {
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
    if (((e.__ln = t), e.previousSibling && Fe(e.previousSibling))) {
      const n = e.previousSibling.__ln.next;
      (t.next = n),
        (t.previous = e.previousSibling.__ln),
        (e.previousSibling.__ln.next = t),
        n && (n.previous = t);
    } else if (
      e.nextSibling &&
      Fe(e.nextSibling) &&
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
const Be = (e, t) => `${e}@${t}`;
class ze {
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
          n = new Ue(),
          r = (e) => {
            let t = e,
              n = -2;
            for (; -2 === n; )
              (t = t && t.nextSibling), (n = t && this.mirror.getId(t));
            return n;
          },
          o = (o) => {
            if (!o.parentNode || !be(o)) return;
            const i = h(o.parentNode)
                ? this.mirror.getId(ve(o))
                : this.mirror.getId(o.parentNode),
              a = r(o);
            if (-1 === i || -1 === a) return n.addNode(o);
            const s = X(o, {
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
                  !ue(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) &&
                  this.iframeManager.addIframe(e),
                  me(e, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(e),
                  ge(o) &&
                    this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc);
              },
              onIframeLoad: (e, t) => {
                if (
                  ue(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  )
                )
                  return;
                this.iframeManager.attachIframe(e, t);
                const n = je(e);
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
            s && (e.push({ parentId: i, nextId: a, node: s }), t.add(s.id));
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const e of this.movedSet)
          (Ve(this.removes, e, this.mirror) &&
            !this.movedSet.has(e.parentNode)) ||
            o(e);
        for (const e of this.addedSet)
          qe(this.droppedSet, e) || Ve(this.removes, e, this.mirror)
            ? qe(this.movedSet, e)
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
        const a = {
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
        (a.texts.length ||
          a.attributes.length ||
          a.removes.length ||
          a.adds.length) &&
          ((this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(a));
      }),
      (this.processMutation = (e) => {
        if (!de(e.target, this.mirror))
          switch (e.type) {
            case "characterData": {
              const t = e.target.textContent;
              ue(
                e.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1,
              ) ||
                t === e.oldValue ||
                this.texts.push({
                  value:
                    Q(
                      e.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText,
                    ) && t
                      ? this.maskTextFn
                        ? this.maskTextFn(t, ce(e.target))
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
                const n = E(t),
                  o = t.tagName;
                r = T(t, o, n);
                const i = b({
                  maskInputOptions: this.maskInputOptions,
                  tagName: o,
                  type: n,
                });
                r = S({
                  isMasked: Q(
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
                ue(
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
                if (De(t)) return;
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
                !Y(t.tagName, n) &&
                  ((o.attributes[n] = $(
                    this.doc,
                    _(t.tagName),
                    _(n),
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
                ue(
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
                  ue(
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
                        (this.movedSet.has(t) && this.movedMap[Be(n, r)]
                          ? He(this.movedSet, t)
                          : this.removes.push({
                              parentId: r,
                              id: n,
                              isShadow:
                                !(!h(e.target) || !m(e.target)) || void 0,
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
                (this.movedMap[Be(this.mirror.getId(e), n)] = !0);
          } else this.addedSet.add(e), this.droppedSet.delete(e);
          ue(
            e,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1,
          ) ||
            (e.childNodes && e.childNodes.forEach((e) => this.genAdds(e)),
            ge(e) &&
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
      (this.styleDeclarationParser = new Le(this.doc));
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
function Ve(e, t, n) {
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
function qe(e, t) {
  return 0 !== e.size && Ge(e, t);
}
function Ge(e, t) {
  const { parentNode: n } = t;
  return !!n && (!!e.has(n) || Ge(e, n));
}
const We = [];
function $e(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function Ye(e, t) {
  const n = new ze();
  We.push(n), n.init(e);
  let r = window.MutationObserver || window.__rrMutationObserver;
  const o = window?.Zone?.__symbol__?.("MutationObserver");
  o && window[o] && (r = window[o]);
  const i = new r(
    Re((t) => {
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
function Ke({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: o,
  unblockSelector: i,
  sampling: a,
}) {
  return ee(
    "scroll",
    Re(
      ne(
        Re((a) => {
          const s = $e(a);
          if (!s || ue(s, r, o, i, !0)) return;
          const l = n.getId(s);
          if (s === t && t.defaultView) {
            const n = ae(t.defaultView);
            e({ id: l, x: n.left, y: n.top });
          } else e({ id: l, x: s.scrollLeft, y: s.scrollTop });
        }),
        a.scroll || 100,
      ),
    ),
    t,
  );
}
const Ze = ["INPUT", "TEXTAREA", "SELECT"],
  Qe = new WeakMap();
function Je({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: o,
  unblockSelector: i,
  ignoreClass: a,
  ignoreSelector: s,
  maskInputOptions: l,
  maskInputFn: c,
  sampling: u,
  userTriggeredOnInput: d,
  maskTextClass: p,
  unmaskTextClass: f,
  maskTextSelector: h,
  unmaskTextSelector: m,
}) {
  function g(e) {
    let n = $e(e);
    const u = e.isTrusted,
      g = n && x(n.tagName);
    if (
      ("OPTION" === g && (n = n.parentElement),
      !n || !g || Ze.indexOf(g) < 0 || ue(n, r, o, i, !0))
    )
      return;
    const v = n;
    if (v.classList.contains(a) || (s && v.matches(s))) return;
    const _ = E(n);
    let w = T(v, g, _),
      k = !1;
    const C = b({ maskInputOptions: l, tagName: g, type: _ }),
      I = Q(n, p, h, f, m, C);
    ("radio" !== _ && "checkbox" !== _) || (k = n.checked),
      (w = S({ isMasked: I, element: n, value: w, maskInputFn: c })),
      y(
        n,
        d
          ? { text: w, isChecked: k, userTriggered: u }
          : { text: w, isChecked: k },
      );
    const A = n.name;
    "radio" === _ &&
      A &&
      k &&
      t.querySelectorAll(`input[type="radio"][name="${A}"]`).forEach((e) => {
        if (e !== n) {
          const t = S({
            isMasked: I,
            element: e,
            value: T(e, g, _),
            maskInputFn: c,
          });
          y(
            e,
            d
              ? { text: t, isChecked: !k, userTriggered: !1 }
              : { text: t, isChecked: !k },
          );
        }
      });
  }
  function y(t, r) {
    const o = Qe.get(t);
    if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
      Qe.set(t, r);
      const o = n.getId(t);
      Re(e)({ ...r, id: o });
    }
  }
  const v = ("last" === u.input ? ["change"] : ["input", "change"]).map((e) =>
      ee(e, Re(g), t),
    ),
    _ = t.defaultView;
  if (!_)
    return () => {
      v.forEach((e) => e());
    };
  const w = _.Object.getOwnPropertyDescriptor(
      _.HTMLInputElement.prototype,
      "value",
    ),
    k = [
      [_.HTMLInputElement.prototype, "value"],
      [_.HTMLInputElement.prototype, "checked"],
      [_.HTMLSelectElement.prototype, "value"],
      [_.HTMLTextAreaElement.prototype, "value"],
      [_.HTMLSelectElement.prototype, "selectedIndex"],
      [_.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    w &&
      w.set &&
      v.push(
        ...k.map((e) =>
          re(
            e[0],
            e[1],
            {
              set() {
                Re(g)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            _,
          ),
        ),
      ),
    Re(() => {
      v.forEach((e) => e());
    })
  );
}
function Xe(e) {
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
      Re(() => {
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
  e.recordDOM && (r = Ye(e, e.doc));
  const o = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
      if (!1 === t.mousemove) return () => {};
      const o = "number" == typeof t.mousemove ? t.mousemove : 50,
        i = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
      let a,
        s = [];
      const l = ne(
          Re((t) => {
            const n = Date.now() - a;
            e(
              s.map((e) => ((e.timeOffset -= n), e)),
              t,
            ),
              (s = []),
              (a = null);
          }),
          i,
        ),
        c = Re(
          ne(
            Re((e) => {
              const t = $e(e),
                { clientX: n, clientY: o } = fe(e) ? e.changedTouches[0] : e;
              a || (a = ie()),
                s.push({
                  x: n,
                  y: o,
                  id: r.getId(t),
                  timeOffset: ie() - a,
                }),
                l(
                  "undefined" != typeof DragEvent && e instanceof DragEvent
                    ? Ee.Drag
                    : e instanceof MouseEvent
                      ? Ee.MouseMove
                      : Ee.TouchMove,
                );
            }),
            o,
            { trailing: !1 },
          ),
        ),
        u = [ee("mousemove", c, n), ee("touchmove", c, n), ee("drag", c, n)];
      return Re(() => {
        u.forEach((e) => e());
      });
    })(e),
    i = (function ({
      mouseInteractionCb: e,
      doc: t,
      mirror: n,
      blockClass: r,
      blockSelector: o,
      unblockSelector: i,
      sampling: a,
    }) {
      if (!1 === a.mouseInteraction) return () => {};
      const s =
          !0 === a.mouseInteraction || void 0 === a.mouseInteraction
            ? {}
            : a.mouseInteraction,
        l = [];
      let c = null;
      return (
        Object.keys(Te)
          .filter(
            (e) =>
              Number.isNaN(Number(e)) &&
              !e.endsWith("_Departed") &&
              !1 !== s[e],
          )
          .forEach((a) => {
            let s = _(a);
            const u = ((t) => (a) => {
              const s = $e(a);
              if (ue(s, r, o, i, !0)) return;
              let l = null,
                u = t;
              if ("pointerType" in a) {
                switch (a.pointerType) {
                  case "mouse":
                    l = ke.Mouse;
                    break;
                  case "touch":
                    l = ke.Touch;
                    break;
                  case "pen":
                    l = ke.Pen;
                }
                l === ke.Touch
                  ? Te[t] === Te.MouseDown
                    ? (u = "TouchStart")
                    : Te[t] === Te.MouseUp && (u = "TouchEnd")
                  : ke.Pen;
              } else fe(a) && (l = ke.Touch);
              null !== l
                ? ((c = l),
                  ((u.startsWith("Touch") && l === ke.Touch) ||
                    (u.startsWith("Mouse") && l === ke.Mouse)) &&
                    (l = null))
                : Te[t] === Te.Click && ((l = c), (c = null));
              const d = fe(a) ? a.changedTouches[0] : a;
              if (!d) return;
              const p = n.getId(s),
                { clientX: f, clientY: h } = d;
              Re(e)({
                type: Te[u],
                id: p,
                x: f,
                y: h,
                ...(null !== l && { pointerType: l }),
              });
            })(a);
            if (window.PointerEvent)
              switch (Te[a]) {
                case Te.MouseDown:
                case Te.MouseUp:
                  s = s.replace("mouse", "pointer");
                  break;
                case Te.TouchStart:
                case Te.TouchEnd:
                  return;
              }
            l.push(ee(s, u, t));
          }),
        Re(() => {
          l.forEach((e) => e());
        })
      );
    })(e),
    a = Ke(e),
    s = (function ({ viewportResizeCb: e }, { win: t }) {
      let n = -1,
        r = -1;
      return ee(
        "resize",
        Re(
          ne(
            Re(() => {
              const t = se(),
                o = le();
              (n === t && r === o) ||
                (e({ width: Number(o), height: Number(t) }), (n = t), (r = o));
            }),
            200,
          ),
        ),
        t,
      );
    })(e, { win: n }),
    l = Je(e),
    c = (function ({
      mediaInteractionCb: e,
      blockClass: t,
      blockSelector: n,
      unblockSelector: r,
      mirror: o,
      sampling: i,
      doc: a,
    }) {
      const s = Re((a) =>
          ne(
            Re((i) => {
              const s = $e(i);
              if (!s || ue(s, t, n, r, !0)) return;
              const {
                currentTime: l,
                volume: c,
                muted: u,
                playbackRate: d,
              } = s;
              e({
                type: a,
                id: o.getId(s),
                currentTime: l,
                volume: c,
                muted: u,
                playbackRate: d,
              });
            }),
            i.media || 500,
          ),
        ),
        l = [
          ee("play", s(Ce.Play), a),
          ee("pause", s(Ce.Pause), a),
          ee("seeked", s(Ce.Seeked), a),
          ee("volumechange", s(Ce.VolumeChange), a),
          ee("ratechange", s(Ce.RateChange), a),
        ];
      return Re(() => {
        l.forEach((e) => e());
      });
    })(e);
  let u = () => {},
    d = () => {},
    p = () => {},
    f = () => {};
  e.recordDOM &&
    ((u = (function (
      { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
      { win: r },
    ) {
      if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
      const o = r.CSSStyleSheet.prototype.insertRule;
      r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
        apply: Re((r, o, i) => {
          const [a, s] = i,
            { id: l, styleId: c } = et(o, t, n.styleMirror);
          return (
            ((l && -1 !== l) || (c && -1 !== c)) &&
              e({ id: l, styleId: c, adds: [{ rule: a, index: s }] }),
            r.apply(o, i)
          );
        }),
      });
      const i = r.CSSStyleSheet.prototype.deleteRule;
      let a, s;
      (r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
        apply: Re((r, o, i) => {
          const [a] = i,
            { id: s, styleId: l } = et(o, t, n.styleMirror);
          return (
            ((s && -1 !== s) || (l && -1 !== l)) &&
              e({ id: s, styleId: l, removes: [{ index: a }] }),
            r.apply(o, i)
          );
        }),
      })),
        r.CSSStyleSheet.prototype.replace &&
          ((a = r.CSSStyleSheet.prototype.replace),
          (r.CSSStyleSheet.prototype.replace = new Proxy(a, {
            apply: Re((r, o, i) => {
              const [a] = i,
                { id: s, styleId: l } = et(o, t, n.styleMirror);
              return (
                ((s && -1 !== s) || (l && -1 !== l)) &&
                  e({ id: s, styleId: l, replace: a }),
                r.apply(o, i)
              );
            }),
          }))),
        r.CSSStyleSheet.prototype.replaceSync &&
          ((s = r.CSSStyleSheet.prototype.replaceSync),
          (r.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
            apply: Re((r, o, i) => {
              const [a] = i,
                { id: s, styleId: l } = et(o, t, n.styleMirror);
              return (
                ((s && -1 !== s) || (l && -1 !== l)) &&
                  e({ id: s, styleId: l, replaceSync: a }),
                r.apply(o, i)
              );
            }),
          })));
      const l = {};
      ot("CSSGroupingRule")
        ? (l.CSSGroupingRule = r.CSSGroupingRule)
        : (ot("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
          ot("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule),
          ot("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
      const c = {};
      return (
        Object.entries(l).forEach(([r, o]) => {
          (c[r] = {
            insertRule: o.prototype.insertRule,
            deleteRule: o.prototype.deleteRule,
          }),
            (o.prototype.insertRule = new Proxy(c[r].insertRule, {
              apply: Re((r, o, i) => {
                const [a, s] = i,
                  { id: l, styleId: c } = et(
                    o.parentStyleSheet,
                    t,
                    n.styleMirror,
                  );
                return (
                  ((l && -1 !== l) || (c && -1 !== c)) &&
                    e({
                      id: l,
                      styleId: c,
                      adds: [{ rule: a, index: [...Xe(o), s || 0] }],
                    }),
                  r.apply(o, i)
                );
              }),
            })),
            (o.prototype.deleteRule = new Proxy(c[r].deleteRule, {
              apply: Re((r, o, i) => {
                const [a] = i,
                  { id: s, styleId: l } = et(
                    o.parentStyleSheet,
                    t,
                    n.styleMirror,
                  );
                return (
                  ((s && -1 !== s) || (l && -1 !== l)) &&
                    e({
                      id: s,
                      styleId: l,
                      removes: [{ index: [...Xe(o), a] }],
                    }),
                  r.apply(o, i)
                );
              }),
            }));
        }),
        Re(() => {
          (r.CSSStyleSheet.prototype.insertRule = o),
            (r.CSSStyleSheet.prototype.deleteRule = i),
            a && (r.CSSStyleSheet.prototype.replace = a),
            s && (r.CSSStyleSheet.prototype.replaceSync = s),
            Object.entries(l).forEach(([e, t]) => {
              (t.prototype.insertRule = c[e].insertRule),
                (t.prototype.deleteRule = c[e].deleteRule);
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
        apply: Re((o, a, s) => {
          const [l, c, u] = s;
          if (n.has(l)) return i.apply(a, [l, c, u]);
          const { id: d, styleId: p } = et(
            a.parentRule?.parentStyleSheet,
            t,
            r.styleMirror,
          );
          return (
            ((d && -1 !== d) || (p && -1 !== p)) &&
              e({
                id: d,
                styleId: p,
                set: { property: l, value: c, priority: u },
                index: Xe(a.parentRule),
              }),
            o.apply(a, s)
          );
        }),
      });
      const a = o.CSSStyleDeclaration.prototype.removeProperty;
      return (
        (o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a, {
          apply: Re((o, i, s) => {
            const [l] = s;
            if (n.has(l)) return a.apply(i, [l]);
            const { id: c, styleId: u } = et(
              i.parentRule?.parentStyleSheet,
              t,
              r.styleMirror,
            );
            return (
              ((c && -1 !== c) || (u && -1 !== u)) &&
                e({
                  id: c,
                  styleId: u,
                  remove: { property: l },
                  index: Xe(i.parentRule),
                }),
              o.apply(i, s)
            );
          }),
        })),
        Re(() => {
          (o.CSSStyleDeclaration.prototype.setProperty = i),
            (o.CSSStyleDeclaration.prototype.removeProperty = a);
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
        const a = oe(t.fonts, "add", function (t) {
          return function (n) {
            return (
              xe(
                Re(() => {
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
          r.push(a),
          Re(() => {
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
        selectionCb: a,
      } = e;
      let s = !0;
      const l = Re(() => {
        const e = t.getSelection();
        if (!e || (s && e?.isCollapsed)) return;
        s = e.isCollapsed || !1;
        const l = [],
          c = e.rangeCount || 0;
        for (let t = 0; t < c; t++) {
          const a = e.getRangeAt(t),
            {
              startContainer: s,
              startOffset: c,
              endContainer: u,
              endOffset: d,
            } = a;
          ue(s, r, o, i, !0) ||
            ue(u, r, o, i, !0) ||
            l.push({
              start: n.getId(s),
              startOffset: c,
              end: n.getId(u),
              endOffset: d,
            });
        }
        a({ ranges: l });
      });
      return l(), ee("selectionchange", l);
    })(e),
    m = (function ({ doc: e, customElementCb: t }) {
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
    g = [];
  for (const t of e.plugins) g.push(t.observer(t.callback, n, t.options));
  return Re(() => {
    We.forEach((e) => e.reset()),
      r?.disconnect(),
      o(),
      i(),
      a(),
      s(),
      l(),
      c(),
      u(),
      d(),
      p(),
      f(),
      h(),
      m(),
      g.forEach((e) => e());
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
    let a = o.get(t);
    return a || ((a = this.generateIdFn()), o.set(t, a), i.set(a, t)), a;
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
class at {
  constructor() {
    (this.crossOriginIframeMirror = new it(N)),
      (this.crossOriginIframeRootIdMap = new WeakMap());
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class st {
  constructor(e) {
    (this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new it(N)),
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
    const t = je(e);
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
        je(e)?.addEventListener("message", this.handleMessage.bind(this)),
      this.loadListener?.(e);
    const n = De(e);
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
      case we.FullSnapshot: {
        this.crossOriginIframeMirror.reset(e),
          this.crossOriginIframeStyleMirror.reset(e),
          this.replaceIdOnNode(t.data.node, e);
        const n = t.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(e, n),
          this.patchRootIdOnNode(t.data.node, n),
          {
            timestamp: t.timestamp,
            type: we.IncrementalSnapshot,
            data: {
              source: Ee.Mutation,
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
      case we.Meta:
      case we.Load:
      case we.DomContentLoaded:
        return !1;
      case we.Plugin:
        return t;
      case we.Custom:
        return (
          this.replaceIds(t.data.payload, e, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          t
        );
      case we.IncrementalSnapshot:
        switch (t.data.source) {
          case Ee.Mutation:
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
          case Ee.Drag:
          case Ee.TouchMove:
          case Ee.MouseMove:
            return (
              t.data.positions.forEach((t) => {
                this.replaceIds(t, e, ["id"]);
              }),
              t
            );
          case Ee.ViewportResize:
            return !1;
          case Ee.MediaInteraction:
          case Ee.MouseInteraction:
          case Ee.Scroll:
          case Ee.CanvasMutation:
          case Ee.Input:
            return this.replaceIds(t.data, e, ["id"]), t;
          case Ee.StyleSheetRule:
          case Ee.StyleDeclaration:
            return (
              this.replaceIds(t.data, e, ["id"]),
              this.replaceStyleIds(t.data, e, ["styleId"]),
              t
            );
          case Ee.Font:
            return t;
          case Ee.Selection:
            return (
              t.data.ranges.forEach((t) => {
                this.replaceIds(t, e, ["start", "end"]);
              }),
              t
            );
          case Ee.AdoptedStyleSheet:
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
class lt {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class ct {
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
    if (!m(e)) return;
    if (this.shadowDoms.has(e)) return;
    this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
    const n = Ye(
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
        Ke({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: e,
          mirror: this.mirror,
        }),
      ),
      xe(() => {
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
    const t = De(e),
      n = je(e);
    t && n && this.patchAttachShadow(n.Element, t);
  }
  patchAttachShadow(e, t) {
    const n = this;
    this.restoreHandlers.push(
      oe(e.prototype, "attachShadow", function (e) {
        return function (r) {
          const o = e.call(this, r);
          return (
            this.shadowRoot && be(this) && n.addShadowRoot(this.shadowRoot, t),
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
class ut {
  constructor(e) {
    (this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new ye()),
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
              rule: y(e),
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
        _e("requestAnimationFrame")(...e);
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
const ht = new v();
function mt(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: o = "rr-block",
    blockSelector: i = null,
    unblockSelector: a = null,
    ignoreClass: s = "rr-ignore",
    ignoreSelector: l = null,
    maskAllText: c = !1,
    maskTextClass: u = "rr-mask",
    unmaskTextClass: d = null,
    maskTextSelector: p = null,
    unmaskTextSelector: f = null,
    inlineStylesheet: h = !0,
    maskAllInputs: m,
    maskInputOptions: g,
    slimDOMOptions: y,
    maskAttributeFn: b,
    maskInputFn: S,
    maskTextFn: _,
    maxCanvasSize: x = null,
    packFn: w,
    sampling: E = {},
    dataURLOptions: T = {},
    mousemoveWait: k,
    recordDOM: C = !0,
    recordCanvas: I = !1,
    recordCrossOriginIframes: A = !1,
    recordAfter: O = "DOMContentLoaded" === e.recordAfter
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: R = !1,
    collectFonts: M = !1,
    inlineImages: P = !1,
    plugins: N,
    keepIframeSrcFn: D = () => !1,
    ignoreCSSAttributes: j = new Set([]),
    errorHandler: L,
    onMutation: F,
    getCanvasManager: U,
  } = e;
  Ae(L);
  const B = !A || window.parent === window;
  let z = !1;
  if (!B)
    try {
      window.parent.document && (z = !1);
    } catch (e) {
      z = !0;
    }
  if (B && !t) throw new Error("emit function is required");
  if (!B && !z) return () => {};
  void 0 !== k && void 0 === E.mousemove && (E.mousemove = k), ht.reset();
  const H =
      !0 === m
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
        : void 0 !== g
          ? g
          : {},
    V =
      !0 === y || "all" === y
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === y,
            headMetaDescKeywords: "all" === y,
          }
        : y || {};
  let q;
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
  let G = 0;
  const W = (e) => {
    for (const t of N || []) t.eventProcessor && (e = t.eventProcessor(e));
    return w && !z && (e = w(e)), e;
  };
  pt = (e, o) => {
    const i = e;
    if (
      ((i.timestamp = ie()),
      !We[0]?.isFrozen() ||
        i.type === we.FullSnapshot ||
        (i.type === we.IncrementalSnapshot && i.data.source === Ee.Mutation) ||
        We.forEach((e) => e.unfreeze()),
      B)
    )
      t?.(W(i), o);
    else if (z) {
      const e = {
        type: "rrweb",
        event: W(i),
        origin: window.location.origin,
        isCheckout: o,
      };
      window.parent.postMessage(e, "*");
    }
    if (i.type === we.FullSnapshot) (q = i), (G = 0);
    else if (i.type === we.IncrementalSnapshot) {
      if (i.data.source === Ee.Mutation && i.data.isAttachIframe) return;
      G++;
      const e = r && G >= r,
        t = n && q && i.timestamp - q.timestamp > n;
      (e || t) && re(!0);
    }
  };
  const $ = (e) => {
      pt({
        type: we.IncrementalSnapshot,
        data: { source: Ee.Mutation, ...e },
      });
    },
    Y = (e) =>
      pt({
        type: we.IncrementalSnapshot,
        data: { source: Ee.Scroll, ...e },
      }),
    K = (e) =>
      pt({
        type: we.IncrementalSnapshot,
        data: { source: Ee.CanvasMutation, ...e },
      }),
    Z = new ut({
      mutationCb: $,
      adoptedStyleSheetCb: (e) =>
        pt({
          type: we.IncrementalSnapshot,
          data: { source: Ee.AdoptedStyleSheet, ...e },
        }),
    }),
    Q =
      "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__
        ? new at()
        : new st({
            mirror: ht,
            mutationCb: $,
            stylesheetManager: Z,
            recordCrossOriginIframes: A,
            wrappedEmit: pt,
          });
  for (const e of N || [])
    e.getMirror &&
      e.getMirror({
        nodeMirror: ht,
        crossOriginIframeMirror: Q.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Q.crossOriginIframeStyleMirror,
      });
  const J = new dt(),
    te = (function (e, t) {
      try {
        return e ? e(t) : new Ne();
      } catch {
        return new Ne();
      }
    })(U, {
      mirror: ht,
      win: window,
      mutationCb: (e) =>
        pt({
          type: we.IncrementalSnapshot,
          data: { source: Ee.CanvasMutation, ...e },
        }),
      recordCanvas: I,
      blockClass: o,
      blockSelector: i,
      unblockSelector: a,
      maxCanvasSize: x,
      sampling: E.canvas,
      dataURLOptions: T,
      errorHandler: L,
    }),
    ne =
      "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new lt()
        : new ct({
            mutationCb: $,
            scrollCb: Y,
            bypassOptions: {
              onMutation: F,
              blockClass: o,
              blockSelector: i,
              unblockSelector: a,
              maskAllText: c,
              maskTextClass: u,
              unmaskTextClass: d,
              maskTextSelector: p,
              unmaskTextSelector: f,
              inlineStylesheet: h,
              maskInputOptions: H,
              dataURLOptions: T,
              maskAttributeFn: b,
              maskTextFn: _,
              maskInputFn: S,
              recordCanvas: I,
              inlineImages: P,
              sampling: E,
              slimDOMOptions: V,
              iframeManager: Q,
              stylesheetManager: Z,
              canvasManager: te,
              keepIframeSrcFn: D,
              processedNodeManager: J,
              ignoreCSSAttributes: j,
            },
            mirror: ht,
          }),
    re = (e = !1) => {
      if (!C) return;
      pt(
        {
          type: we.Meta,
          data: {
            href: window.location.href,
            width: le(),
            height: se(),
          },
        },
        e,
      ),
        Z.reset(),
        ne.init(),
        We.forEach((e) => e.lock());
      const t = (function (e, t) {
        const {
          mirror: n = new v(),
          blockClass: r = "rr-block",
          blockSelector: o = null,
          unblockSelector: i = null,
          maskAllText: a = !1,
          maskTextClass: s = "rr-mask",
          unmaskTextClass: l = null,
          maskTextSelector: c = null,
          unmaskTextSelector: u = null,
          inlineStylesheet: d = !0,
          inlineImages: p = !1,
          recordCanvas: f = !1,
          maskAllInputs: h = !1,
          maskAttributeFn: m,
          maskTextFn: g,
          maskInputFn: y,
          slimDOM: b = !1,
          dataURLOptions: S,
          preserveWhiteSpace: _,
          onSerialize: x,
          onIframeLoad: w,
          iframeLoadTimeout: E,
          onBlockedImageLoad: T,
          onStylesheetLoad: k,
          stylesheetLoadTimeout: C,
          keepIframeSrcFn: I = () => !1,
          ignoreCSSAttributes: A = new Set([]),
        } = t || {};
        return X(e, {
          doc: e,
          mirror: n,
          blockClass: r,
          blockSelector: o,
          unblockSelector: i,
          maskAllText: a,
          maskTextClass: s,
          unmaskTextClass: l,
          maskTextSelector: c,
          unmaskTextSelector: u,
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
          maskAttributeFn: m,
          maskTextFn: g,
          maskInputFn: y,
          slimDOMOptions:
            !0 === b || "all" === b
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaDescKeywords: "all" === b,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaAuthorship: !0,
                  headMetaVerification: !0,
                }
              : !1 === b
                ? {}
                : b,
          dataURLOptions: S,
          inlineImages: p,
          recordCanvas: f,
          preserveWhiteSpace: _,
          onSerialize: x,
          onIframeLoad: w,
          iframeLoadTimeout: E,
          onBlockedImageLoad: T,
          onStylesheetLoad: k,
          stylesheetLoadTimeout: C,
          keepIframeSrcFn: I,
          newlyAddedElement: !1,
          ignoreCSSAttributes: A,
        });
      })(document, {
        mirror: ht,
        blockClass: o,
        blockSelector: i,
        unblockSelector: a,
        maskAllText: c,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: p,
        unmaskTextSelector: f,
        inlineStylesheet: h,
        maskAllInputs: H,
        maskAttributeFn: b,
        maskInputFn: S,
        maskTextFn: _,
        slimDOM: V,
        dataURLOptions: T,
        recordCanvas: I,
        inlineImages: P,
        onSerialize: (e) => {
          he(e, ht) && Q.addIframe(e),
            me(e, ht) && Z.trackLinkElement(e),
            ge(e) && ne.addShadowRoot(e.shadowRoot, document);
        },
        onIframeLoad: (e, t) => {
          Q.attachIframe(e, t);
          const n = je(e);
          n && te.addWindow(n), ne.observeAttachShadow(e);
        },
        onStylesheetLoad: (e, t) => {
          Z.attachLinkElement(e, t);
        },
        onBlockedImageLoad: (e, t, { width: n, height: r }) => {
          $({
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
        keepIframeSrcFn: D,
        ignoreCSSAttributes: j,
      });
      t &&
        (pt({
          type: we.FullSnapshot,
          data: { node: t, initialOffset: ae(window) },
        }),
        We.forEach((e) => e.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          Z.adoptStyleSheets(document.adoptedStyleSheets, ht.getId(document)));
    };
  ft = re;
  try {
    const e = [],
      t = (e) =>
        Re(nt)(
          {
            onMutation: F,
            mutationCb: $,
            mousemoveCb: (e, t) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: t, positions: e },
              }),
            mouseInteractionCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.MouseInteraction, ...e },
              }),
            scrollCb: Y,
            viewportResizeCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.ViewportResize, ...e },
              }),
            inputCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.Input, ...e },
              }),
            mediaInteractionCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.MediaInteraction, ...e },
              }),
            styleSheetRuleCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.StyleSheetRule, ...e },
              }),
            styleDeclarationCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.StyleDeclaration, ...e },
              }),
            canvasMutationCb: K,
            fontCb: (e) =>
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.Font, ...e },
              }),
            selectionCb: (e) => {
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.Selection, ...e },
              });
            },
            customElementCb: (e) => {
              pt({
                type: we.IncrementalSnapshot,
                data: { source: Ee.CustomElement, ...e },
              });
            },
            blockClass: o,
            ignoreClass: s,
            ignoreSelector: l,
            maskAllText: c,
            maskTextClass: u,
            unmaskTextClass: d,
            maskTextSelector: p,
            unmaskTextSelector: f,
            maskInputOptions: H,
            inlineStylesheet: h,
            sampling: E,
            recordDOM: C,
            recordCanvas: I,
            inlineImages: P,
            userTriggeredOnInput: R,
            collectFonts: M,
            doc: e,
            maskAttributeFn: b,
            maskInputFn: S,
            maskTextFn: _,
            keepIframeSrcFn: D,
            blockSelector: i,
            unblockSelector: a,
            slimDOMOptions: V,
            dataURLOptions: T,
            mirror: ht,
            iframeManager: Q,
            stylesheetManager: Z,
            shadowDomManager: ne,
            processedNodeManager: J,
            canvasManager: te,
            ignoreCSSAttributes: j,
            plugins:
              N?.filter((e) => e.observer)?.map((e) => ({
                observer: e.observer,
                options: e.options,
                callback: (t) =>
                  pt({
                    type: we.Plugin,
                    data: { plugin: e.name, payload: t },
                  }),
              })) || [],
          },
          {},
        );
    Q.addLoadListener((n) => {
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
              pt({ type: we.DomContentLoaded, data: {} }),
                "DOMContentLoaded" === O && n();
            }),
          ),
          e.push(
            ee(
              "load",
              () => {
                pt({ type: we.Load, data: {} }), "load" === O && n();
              },
              window,
            ),
          )),
      () => {
        e.forEach((e) => e()), J.destroy(), (ft = void 0), Oe();
      }
    );
  } catch (e) {}
}
var gt, yt;
function vt(e) {
  return e > 9999999999 ? e : 1e3 * e;
}
function bt(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function St(e, t) {
  "sentry.transaction" !== t.category &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: we.Custom,
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
function _t(e) {
  return e.closest("button,a") || e;
}
function xt(e) {
  const t = wt(e);
  return t && t instanceof Element ? _t(t) : t;
}
function wt(e) {
  return (function (e) {
    return r.isObjectLike(e) && "target" in e;
  })(e)
    ? e.target
    : e;
}
let Et;
(mt.mirror = ht),
  (mt.takeFullSnapshot = function (e) {
    if (!ft) throw new Error("please take full snapshot after start recording");
    ft(e);
  }),
  ((yt = gt || (gt = {}))[(yt.NotStarted = 0)] = "NotStarted"),
  (yt[(yt.Running = 1)] = "Running"),
  (yt[(yt.Stopped = 2)] = "Stopped");
const Tt = new Set([
  Ee.Mutation,
  Ee.StyleSheetRule,
  Ee.StyleDeclaration,
  Ee.AdoptedStyleSheet,
  Ee.CanvasMutation,
  Ee.Selection,
  Ee.MediaInteraction,
]);
class kt {
  constructor(e, t, n = St) {
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
        this._lastMutation = It();
      }),
      Et ||
        ((Et = []),
        r.fill(i, "open", function (e) {
          return function (...t) {
            if (Et)
              try {
                Et.forEach((e) => e());
              } catch {}
            return e.apply(i, t);
          };
        })),
      Et.push(t),
      () => {
        const e = Et ? Et.indexOf(t) : -1;
        e > -1 && Et.splice(e, 1);
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
          !Ct.includes(e.tagName) ||
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
      timestamp: bt(e.timestamp),
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
    this._lastMutation = bt(e);
  }
  registerScroll(e = Date.now()) {
    this._lastScroll = bt(e);
  }
  registerClick(e) {
    const t = _t(e);
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
      t = It();
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
      { clickCount: a, clickBreadcrumb: s } = e;
    if (o) {
      const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
        r = n < 1e3 * this._timeout ? "mutation" : "timeout",
        o = {
          type: "default",
          message: s.message,
          timestamp: s.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...s.data,
            url: i.location.href,
            route: t.getCurrentRoute(),
            timeAfterClickMs: n,
            endReason: r,
            clickCount: a || 1,
          },
        };
      return void this._addBreadcrumbEvent(t, o);
    }
    if (a > 1) {
      const e = {
        type: "default",
        message: s.message,
        timestamp: s.timestamp,
        category: "ui.multiClick",
        data: {
          ...s.data,
          url: i.location.href,
          route: t.getCurrentRoute(),
          clickCount: a,
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
const Ct = ["A", "BUTTON", "INPUT"];
function It() {
  return Date.now() / 1e3;
}
function At(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var Ot = ((e) => (
  (e[(e.Document = 0)] = "Document"),
  (e[(e.DocumentType = 1)] = "DocumentType"),
  (e[(e.Element = 2)] = "Element"),
  (e[(e.Text = 3)] = "Text"),
  (e[(e.CDATA = 4)] = "CDATA"),
  (e[(e.Comment = 5)] = "Comment"),
  e
))(Ot || {});
const Rt = new Set([
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
function Mt(e) {
  const t = {};
  !e["data-sentry-component"] &&
    e["data-sentry-element"] &&
    (e["data-sentry-component"] = e["data-sentry-element"]);
  for (const n in e)
    if (Rt.has(n)) {
      let r = n;
      ("data-testid" !== n && "data-test-id" !== n) || (r = "testId"),
        (t[r] = e[n]);
    }
  return t;
}
function Pt(e, t) {
  const n = mt.mirror.getId(e),
    r = n && mt.mirror.getNode(n),
    o = r && mt.mirror.getMeta(r),
    i =
      o &&
      (function (e) {
        return e.type === Ot.Element;
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
              .map((e) => e.type === Ot.Text && e.textContent)
              .filter(Boolean)
              .map((e) => e.trim())
              .join(""),
            attributes: Mt(i.attributes),
          },
        }
      : {},
  };
}
const Nt = {
  resource: function (e) {
    const {
      entryType: t,
      initiatorType: n,
      name: r,
      responseEnd: o,
      startTime: i,
      decodedBodySize: a,
      encodedBodySize: s,
      responseStatus: l,
      transferSize: c,
    } = e;
    return ["fetch", "xmlhttprequest"].includes(n)
      ? null
      : {
          type: `${t}.${n}`,
          start: Lt(i),
          end: Lt(o),
          name: r,
          data: {
            size: c,
            statusCode: l,
            decodedBodySize: a,
            encodedBodySize: s,
          },
        };
  },
  paint: function (e) {
    const { duration: t, entryType: n, name: r, startTime: o } = e,
      i = Lt(o);
    return { type: n, name: r, start: i, end: i + t, data: void 0 };
  },
  navigation: function (e) {
    const {
      entryType: t,
      name: n,
      decodedBodySize: r,
      duration: o,
      domComplete: i,
      encodedBodySize: a,
      domContentLoadedEventStart: s,
      domContentLoadedEventEnd: l,
      domInteractive: c,
      loadEventStart: u,
      loadEventEnd: d,
      redirectCount: p,
      startTime: f,
      transferSize: h,
      type: m,
    } = e;
    return 0 === o
      ? null
      : {
          type: `${t}.${m}`,
          start: Lt(f),
          end: Lt(i),
          name: n,
          data: {
            size: h,
            decodedBodySize: r,
            encodedBodySize: a,
            duration: o,
            domInteractive: c,
            domContentLoadedEventStart: s,
            domContentLoadedEventEnd: l,
            loadEventStart: u,
            loadEventEnd: d,
            domComplete: i,
            redirectCount: p,
          },
        };
  },
};
function Dt(e, t) {
  return ({ metric: n }) => {
    t.replayPerformanceEntries.push(e(n));
  };
}
function jt(e) {
  const t = Nt[e.entryType];
  return t ? t(e) : null;
}
function Lt(e) {
  return (
    ((r.browserPerformanceTimeOrigin() || i.performance.timeOrigin) + e) / 1e3
  );
}
function Ft(e) {
  const t = e.entries[e.entries.length - 1];
  return Ht(e, "largest-contentful-paint", t?.element ? [t.element] : void 0);
}
function Ut(e) {
  return void 0 !== e.sources;
}
function Bt(e) {
  const t = [],
    n = [];
  for (const r of e.entries)
    if (Ut(r)) {
      const e = [];
      for (const t of r.sources)
        if (t.node) {
          n.push(t.node);
          const r = mt.mirror.getId(t.node);
          r && e.push(r);
        }
      t.push({ value: r.value, nodeIds: e.length ? e : void 0 });
    }
  return Ht(e, "cumulative-layout-shift", n, t);
}
function zt(e) {
  const t = e.entries[e.entries.length - 1];
  return Ht(e, "interaction-to-next-paint", t?.target ? [t.target] : void 0);
}
function Ht(e, t, n, r) {
  const o = e.value,
    i = e.rating,
    a = Lt(o);
  return {
    type: "web-vital",
    name: t,
    start: a,
    end: a,
    data: {
      value: o,
      size: o,
      rating: i,
      nodeIds: n ? n.map((e) => mt.mirror.getId(e)) : void 0,
      attributions: r,
    },
  };
}
const Vt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
  qt = ["log", "warn", "error"],
  Gt = "[Replay] ";
function Wt(e, t = "info") {
  r.addBreadcrumb(
    {
      category: "console",
      data: { logger: "replay" },
      level: t,
      message: `${Gt}${e}`,
    },
    { level: t },
  );
}
const $t = (function () {
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
    Vt
      ? (qt.forEach((e) => {
          n[e] = (...n) => {
            r.debug[e](Gt, ...n),
              t && Wt(n.join(""), r.severityLevelFromString(e));
          };
        }),
        (n.exception = (o, ...i) => {
          i.length && n.error && n.error(...i),
            r.debug.error(Gt, o),
            e
              ? r.captureException(o, {
                  mechanism: {
                    handled: !0,
                    type: "auto.function.replay.debug",
                  },
                })
              : t && Wt(o, "error");
        }),
        (n.infoTick = (...e) => {
          r.debug.log(Gt, ...e), t && setTimeout(() => Wt(e[0]), 0);
        }))
      : qt.forEach((e) => {
          n[e] = () => {};
        }),
    n
  );
})();
class Yt extends Error {
  constructor() {
    super("Event buffer exceeded maximum size of 20000000.");
  }
}
class Kt {
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
    if (((this._totalSize += t), this._totalSize > u)) throw new Yt();
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
    return null === e ? e : vt(e);
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
            Vt && $t.error("Error in compression worker: ", t.response),
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
                : (Vt &&
                    $t.warn(
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
                Vt && $t.warn("Failed to load Replay compression worker", e),
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
    Vt && $t.log("Destroying compression worker"),
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
class Qt {
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
    const t = vt(e.timestamp);
    (!this._earliestTimestamp || t < this._earliestTimestamp) &&
      (this._earliestTimestamp = t);
    const n = JSON.stringify(e);
    return (
      (this._totalSize += n.length),
      this._totalSize > u
        ? Promise.reject(new Yt())
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
        Vt && $t.exception(e, 'Sending "clear" message to worker failed', e);
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
    (this._fallback = new Kt()),
      (this._compression = new Qt(e)),
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
        Vt &&
        $t.exception(
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
      Vt && $t.exception(e, "Failed to add events when switching buffers.");
    }
  }
}
function Xt() {
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
  if (Xt())
    try {
      i.sessionStorage.setItem(a, JSON.stringify(e));
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
function an(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
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
function sn(
  { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: n },
  r,
) {
  const o =
    r.stickySession &&
    (function () {
      if (!Xt()) return null;
      try {
        const e = i.sessionStorage.getItem(a);
        if (!e) return null;
        const t = JSON.parse(e);
        return Vt && $t.infoTick("Loading existing session"), nn(t);
      } catch {
        return null;
      }
    })();
  return o
    ? an(o, { sessionIdleExpire: e, maxReplayDuration: t })
      ? (Vt &&
          $t.infoTick(
            "Session in sessionStorage is expired, creating new one...",
          ),
        rn(r, { previousSessionId: o.id }))
      : o
    : (Vt && $t.infoTick("Creating new session"),
      rn(r, { previousSessionId: n }));
}
function ln(e, t, n) {
  return !!un(e, t) && (cn(e, t, n), !0);
}
async function cn(e, t, n) {
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
            return e.type === we.Custom;
          })(e)
        )
          return t(e);
      } catch (e) {
        return (
          Vt &&
            $t.exception(
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
    const n = t && t instanceof Yt,
      a = n ? "eventBufferOverflow" : "eventBufferError",
      s = r.getClient();
    if (s) {
      const e = n ? "buffer_overflow" : "internal_sdk_error";
      s.recordDroppedEvent(e, "replay");
    }
    if (n && i) return o.clear(), (o.waitForCheckout = !0), null;
    e.handleException(t), await e.stop({ reason: a });
  }
}
function un(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const n = vt(t.timestamp);
  return !(
    n + e.timeouts.sessionIdlePause < Date.now() ||
    (n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration &&
      (Vt &&
        $t.infoTick(
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
function mn(e) {
  return !!e.category;
}
function gn() {
  const e = r.getCurrentScope().getPropagationContext().dsc;
  e && delete e.replay_id;
  const t = r.getActiveSpan();
  t && delete r.getDynamicSamplingContextFromSpan(t).replay_id;
}
function yn(e) {
  const t = r.getCurrentScope().getPropagationContext().dsc;
  t && (t.replay_id = e);
  const n = r.getActiveSpan();
  n && (r.getDynamicSamplingContextFromSpan(n).replay_id = e);
}
function vn(e, t) {
  return t.map(({ type: t, start: n, end: r, name: o, data: i }) => {
    const a = e.throttledAddEvent({
      type: we.Custom,
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
    return "string" == typeof a ? Promise.resolve(null) : a;
  });
}
function bn(e, t) {
  e.isEnabled() &&
    null !== t &&
    ((function (e, t) {
      return (
        (!Vt || !e.getOptions()._experiments.traceInternals) &&
        r.isSentryRequestUrl(t, r.getClient())
      );
    })(e, t.name) ||
      e.addUpdate(() => (vn(e, [t]), !0)));
}
function Sn(e) {
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
function _n(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function xn(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  const n = { ...e._meta },
    r = n.warnings || [];
  return (n.warnings = [...r, t]), (e._meta = n), e;
}
function wn(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: r,
    url: o,
    method: i,
    statusCode: a,
    request: s,
    response: l,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: o,
    data: { method: i, statusCode: a, request: s, response: l },
  };
}
function En(e) {
  return {
    headers: {},
    size: e,
    _meta: { warnings: ["URL_SKIPPED"] },
  };
}
function Tn(e, t, n) {
  if (!t && 0 === Object.keys(e).length) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const r = { headers: e, size: t },
    { body: o, warnings: i } = (function (e) {
      if (!e || "string" != typeof e) return { body: e };
      const t = e.length > l,
        n = (function (e) {
          const t = e[0],
            n = e[e.length - 1];
          return ("[" === t && "]" === n) || ("{" === t && "}" === n);
        })(e);
      if (t) {
        const t = e.slice(0, l);
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
function kn(e, t) {
  return Object.entries(e).reduce((n, [r, o]) => {
    const i = r.toLowerCase();
    return t.includes(i) && e[r] && (n[i] = o), n;
  }, {});
}
function Cn(e, t) {
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
function In(e, t) {
  const n = {};
  return (
    t.forEach((t) => {
      e.get(t) && (n[t] = e.get(t));
    }),
    n
  );
}
function An(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? In(n, t)
      : Array.isArray(n)
        ? {}
        : kn(n, t)
    : {};
}
function On(e) {
  const t = r.getClient();
  try {
    const {
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: i,
        networkCaptureBodies: a,
        networkRequestHeaders: s,
        networkResponseHeaders: l,
      } = e.getOptions(),
      c = {
        replay: e,
        networkDetailAllowUrls: n,
        networkDetailDenyUrls: i,
        networkCaptureBodies: a,
        networkRequestHeaders: s,
        networkResponseHeaders: l,
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
                  const i = Sn(o),
                    a = n.getResponseHeader("content-length")
                      ? _n(n.getResponseHeader("content-length"))
                      : (function (e, t) {
                          try {
                            return Sn(
                              "json" === t && r.isObjectLike(e)
                                ? JSON.stringify(e)
                                : e,
                            );
                          } catch {
                            return;
                          }
                        })(n.response, n.responseType);
                  void 0 !== i && (e.data.request_body_size = i),
                    void 0 !== a && (e.data.response_body_size = a);
                })(t, n),
                (async function (e, t, n) {
                  try {
                    const i = (function (e, t, n) {
                        const i = Date.now(),
                          {
                            startTimestamp: a = i,
                            endTimestamp: s = i,
                            input: l,
                            xhr: c,
                          } = t,
                          {
                            url: u,
                            method: d,
                            status_code: p = 0,
                            request_body_size: f,
                            response_body_size: h,
                          } = e.data;
                        if (!u) return null;
                        if (
                          !c ||
                          !Cn(u, n.networkDetailAllowUrls) ||
                          Cn(u, n.networkDetailDenyUrls)
                        )
                          return {
                            startTimestamp: a,
                            endTimestamp: s,
                            url: u,
                            method: d,
                            statusCode: p,
                            request: En(f),
                            response: En(h),
                          };
                        const m = c[o.SENTRY_XHR_DATA_KEY],
                          g = m
                            ? kn(m.request_headers, n.networkRequestHeaders)
                            : {},
                          y = kn(
                            o.parseXhrResponseHeaders(c),
                            n.networkResponseHeaders,
                          ),
                          [v, b] = n.networkCaptureBodies
                            ? o.getBodyString(l, $t)
                            : [void 0],
                          [S, _] = n.networkCaptureBodies
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
                                        Vt &&
                                          $t.exception(
                                            t,
                                            "Failed to serialize body",
                                            e,
                                          ),
                                        [void 0, "BODY_PARSE_ERROR"]
                                      );
                                    }
                                    return (
                                      Vt &&
                                        $t.log(
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
                                  Vt &&
                                    $t.warn(
                                      "Failed to get xhr response body",
                                      ...t,
                                    ),
                                  [void 0]
                                );
                              })(c)
                            : [void 0],
                          x = Tn(g, f, v),
                          w = Tn(y, h, S);
                        return {
                          startTimestamp: a,
                          endTimestamp: s,
                          url: u,
                          method: d,
                          statusCode: p,
                          request: b ? xn(x, b) : x,
                          response: _ ? xn(w, _) : w,
                        };
                      })(e, t, n),
                      a = wn("resource.xhr", i);
                    bn(n.replay, a);
                  } catch (e) {
                    Vt && $t.exception(e, "Failed to capture xhr breadcrumb");
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
                      i = Sn(n ? o.getFetchRequestArgBody(n) : void 0),
                      a = r ? _n(r.headers.get("content-length")) : void 0;
                    void 0 !== i && (e.data.request_body_size = i),
                      void 0 !== a && (e.data.response_body_size = a);
                  })(t, n),
                  (async function (e, t, n) {
                    try {
                      const r = await (async function (e, t, n) {
                          const r = Date.now(),
                            { startTimestamp: i = r, endTimestamp: a = r } = t,
                            {
                              url: s,
                              method: l,
                              status_code: c = 0,
                              request_body_size: u,
                              response_body_size: d,
                            } = e.data,
                            p =
                              Cn(s, n.networkDetailAllowUrls) &&
                              !Cn(s, n.networkDetailDenyUrls),
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
                                    ? ((s = t),
                                      1 === (a = n).length &&
                                      "string" != typeof a[0]
                                        ? An(a[0], s)
                                        : 2 === a.length
                                          ? An(a[1], s)
                                          : {})
                                    : {};
                                  var a, s;
                                  if (!e) return Tn(i, r, void 0);
                                  const l = o.getFetchRequestArgBody(n),
                                    [c, u] = o.getBodyString(l, $t),
                                    d = Tn(i, r, c);
                                  return u ? xn(d, u) : d;
                                })(n, t.input, u)
                              : En(u),
                            h = await (async function (
                              e,
                              {
                                networkCaptureBodies: t,
                                networkResponseHeaders: n,
                              },
                              r,
                              i,
                            ) {
                              if (!e && void 0 !== i) return En(i);
                              const a = r ? In(r.headers, n) : {};
                              if (!r || (!t && void 0 !== i))
                                return Tn(a, i, void 0);
                              const [s, l] = await (async function (e) {
                                  const t = (function (e) {
                                    try {
                                      return e.clone();
                                    } catch (e) {
                                      Vt &&
                                        $t.exception(
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
                                      ? (Vt &&
                                          $t.warn(
                                            "Parsing text body from response timed out",
                                          ),
                                        [void 0, "BODY_PARSE_TIMEOUT"])
                                      : (Vt &&
                                          $t.exception(
                                            e,
                                            "Failed to get text body from response",
                                          ),
                                        [void 0, "BODY_PARSE_ERROR"]);
                                  }
                                })(r),
                                c = (function (
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
                                      e?.length && void 0 === n ? Sn(e) : n;
                                    return r ? Tn(o, i, t ? e : void 0) : En(i);
                                  } catch (e) {
                                    return (
                                      Vt &&
                                        $t.exception(
                                          e,
                                          "Failed to serialize response body",
                                        ),
                                      Tn(o, n, void 0)
                                    );
                                  }
                                })(s, {
                                  networkCaptureBodies: t,
                                  responseBodySize: i,
                                  captureDetails: e,
                                  headers: a,
                                });
                              return l ? xn(c, l) : c;
                            })(p, n, t.response, d);
                          return {
                            startTimestamp: i,
                            endTimestamp: a,
                            url: s,
                            method: l,
                            statusCode: c,
                            request: f,
                            response: h,
                          };
                        })(e, t, n),
                        i = wn("resource.fetch", r);
                      bn(n.replay, i);
                    } catch (e) {
                      Vt &&
                        $t.exception(e, "Failed to capture fetch breadcrumb");
                    }
                  })(t, n, e));
            } catch (e) {
              Vt && $t.exception(e, "Error when enriching network breadcrumb");
            }
        })(c, e, t),
      );
  } catch {}
}
function Rn(e) {
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
            (r = t ? xt(e.event) : wt(e.event)),
              (n =
                o.htmlTreeAsString(r, { maxStringLength: 200 }) || "<unknown>");
          } catch {
            n = "<unknown>";
          }
          return { target: r, message: n };
        })(e);
        return At({ category: `ui.${e.name}`, ...Pt(t, n) });
      })(t);
      if (!n) return;
      const r = "click" === t.name,
        i = r ? t.event : void 0;
      var a, s, l;
      !(r && e.clickDetector && i?.target) ||
        i.altKey ||
        i.metaKey ||
        i.ctrlKey ||
        i.shiftKey ||
        ((a = e.clickDetector),
        (s = n),
        (l = xt(t.event)),
        a.handleClick(s, l)),
        St(e, n);
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
            e.addUpdate(() => (vn(e, [n]), !1)));
        };
      })(e),
    ),
    (function (e) {
      const t = r.getClient();
      t &&
        t.on("beforeAddBreadcrumb", (t) =>
          (function (e, t) {
            if (!e.isEnabled() || !mn(t)) return;
            const n = (function (e) {
              return !mn(e) ||
                ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
                  e.category,
                ) ||
                e.category.startsWith("ui.")
                ? null
                : "console" === e.category
                  ? (function (e) {
                      const t = e.data?.arguments;
                      if (!Array.isArray(t) || 0 === t.length) return At(e);
                      let n = !1;
                      const o = t.map((e) => {
                        if (!e) return e;
                        if ("string" == typeof e)
                          return e.length > c
                            ? ((n = !0), `${e.slice(0, c)}…`)
                            : e;
                        if ("object" == typeof e)
                          try {
                            const t = r.normalize(e, 7);
                            return JSON.stringify(t).length > c
                              ? ((n = !0),
                                `${JSON.stringify(t, null, 2).slice(0, c)}…`)
                              : t;
                          } catch {}
                        return e;
                      });
                      return At({
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
                  : At(e);
            })(t);
            n && St(e, n);
          })(e, t),
        );
    })(e),
    On(e);
  const n = (function (e) {
    return Object.assign(
      (t, n) => {
        if (
          (e.session &&
            an(e.session, {
              maxReplayDuration: e.getOptions().maxReplayDuration,
              sessionIdleExpire: e.timeouts.sessionIdleExpire,
            }) &&
            gn(),
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
        if (!e.checkAndHandleExpiredSession()) return gn(), t;
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
                      type: we.Custom,
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
          return Vt && $t.log("Ignoring error from rrweb internals", t), null;
        const r = (function (e, t) {
          return (
            "buffer" === e.recordingMode &&
            t.message !== s &&
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
                  St(
                    e,
                    At({
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
function Mn(e) {
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
const Pn = r.GLOBAL_OBJ.navigator;
function Nn(e) {
  let t = !1;
  return (n, r) => {
    try {
      if (!e.checkAndHandleExpiredSession())
        return void (
          Vt && $t.warn("Received replay event after session expired.")
        );
      const o = r || !t;
      (t = !0),
        (function (e) {
          const t = e.data;
          if (
            e.type === we.IncrementalSnapshot &&
            t &&
            "object" == typeof t &&
            "source" in t &&
            t.source === Ee.Mutation &&
            "attributes" in t &&
            Array.isArray(t.attributes)
          )
            for (const e of t.attributes) {
              const t = mt.mirror.getNode(e.id),
                n = t && mt.mirror.getMeta(t);
              if (n?.type === Ot.Element)
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
                (Tt.has(n) && e.registerMutation(t.timestamp),
                n === Ee.Scroll && e.registerScroll(t.timestamp),
                (function (e) {
                  return e.data.source === Ee.MouseInteraction;
                })(t))
              ) {
                const { type: n, id: r } = t.data,
                  o = mt.mirror.getNode(r);
                o instanceof HTMLElement &&
                  n === Te.Click &&
                  e.registerClick(o);
              }
            } catch {}
          })(e.clickDetector, n),
        e.addUpdate(() => {
          if (
            ("buffer" === e.recordingMode && o && e.setInitialState(),
            !ln(e, n, o))
          )
            return !0;
          if (!o) return !1;
          const t = e.session;
          if (
            ((function (e, t) {
              t &&
                0 === e.session?.segmentId &&
                ln(
                  e,
                  (function (e) {
                    const t = e.getOptions();
                    return {
                      type: we.Custom,
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
              (Vt &&
                $t.log(
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
class Dn extends Error {
  constructor(e) {
    super(`Transport returned status code ${e}`);
  }
}
class jn extends Error {
  constructor(e) {
    super("Rate limit hit"), (this.rateLimits = e);
  }
}
class Ln extends Error {
  constructor() {
    super("Session is too long, not sending replay");
  }
}
async function Fn(e, t = { count: 0, interval: 5e3 }) {
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
          session: a,
        }) {
          const l = (function ({ recordingData: e, headers: t }) {
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
              urls: c,
              errorIds: u,
              traceIds: d,
              segmentNames: p,
              initialTimestamp: f,
            } = o,
            h = r.getClient(),
            m = r.getCurrentScope(),
            g = h?.getTransport(),
            y = h?.getDsn();
          if (!(h && g && y && a.sampled)) return Promise.resolve({});
          const v = {
              type: "replay_event",
              replay_start_timestamp: f / 1e3,
              timestamp: i / 1e3,
              error_ids: u,
              trace_ids: d,
              segment_names: p,
              urls: c,
              replay_id: t,
              segment_id: n,
              replay_type: a.sampled,
            },
            b = await (async function ({
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
              const a = await r.prepareEvent(
                e.getOptions(),
                o,
                i,
                t,
                e,
                r.getIsolationScope(),
              );
              if (!a) return null;
              e.emit("postprocessEvent", a, i),
                (a.platform = a.platform || "javascript");
              const s = e.getSdkMetadata(),
                { name: l, version: c, settings: u } = s?.sdk || {};
              return (
                (a.sdk = {
                  ...a.sdk,
                  name: l || "sentry.javascript.unknown",
                  version: c || "0.0.0",
                  settings: u,
                }),
                a
              );
            })({ scope: m, client: h, replayId: t, event: v });
          if (!b)
            return (
              h.recordDroppedEvent("event_processor", "replay"),
              Vt &&
                $t.log(
                  "An event processor returned `null`, will not send event.",
                ),
              Promise.resolve({})
            );
          delete b.sdkProcessingMetadata;
          const S = (function (e, t, n, o) {
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
          })(b, l, y, h.getOptions().tunnel);
          let _;
          try {
            _ = await g.send(S);
          } catch (e) {
            const t = new Error(s);
            try {
              t.cause = e;
            } catch {}
            throw t;
          }
          const x = r.updateRateLimits({}, _);
          if (r.isRateLimited(x, "replay")) throw new jn(x);
          if (
            "number" == typeof _.statusCode &&
            (_.statusCode < 200 || _.statusCode >= 300)
          )
            throw new Dn(_.statusCode);
          return _;
        })(e),
        !0
      );
    } catch (n) {
      if (n instanceof Dn || n instanceof jn) throw n;
      if (
        (r.setContext("Replays", { _retryCount: t.count }),
        i && i(n),
        t.count >= 3)
      ) {
        const e = new Error(`${s} - max retries exceeded`);
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
              await Fn(e, t), n(!0);
            } catch (e) {
              r(e);
            }
          }, t.interval);
        })
      );
    }
}
const Un = "__THROTTLED";
class Bn {
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
          const a = Math.floor(Date.now() / 1e3);
          if (
            (((e) => {
              const t = e - n;
              r.forEach((e, n) => {
                n < t && r.delete(n);
              });
            })(a),
            [...r.values()].reduce((e, t) => e + t, 0) >= t)
          ) {
            const e = o;
            return (o = !0), e ? "__SKIPPED" : Un;
          }
          o = !1;
          const s = r.get(a) || 0;
          return r.set(a, s + 1), e(...i);
        };
      })(
        (e, t) =>
          (function (e, t, n) {
            return un(e, t) ? cn(e, t, n) : Promise.resolve(null);
          })(this, e, t),
        300,
        5,
      ));
    const { slowClickTimeout: n, slowClickIgnoreSelectors: a } =
        this.getOptions(),
      s = n
        ? {
            threshold: Math.min(3e3, n),
            timeout: n,
            scrollTimeout: 300,
            ignoreSelector: a ? a.join(",") : "",
          }
        : void 0;
    if ((s && (this.clickDetector = new kt(this, s)), Vt)) {
      const t = e._experiments;
      $t.setConfig({
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
        const e = At({ category: "ui.blur" });
        this._doChangeToBackgroundTasks(e);
      }),
      (this._handleWindowFocus = () => {
        const e = At({ category: "ui.focus" });
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
              key: a,
              target: s,
            } = e;
            if (
              !s ||
              (function (e) {
                return (
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  e.isContentEditable
                );
              })(s) ||
              !a
            )
              return null;
            const l = t || r || i,
              c = 1 === a.length;
            if (!l && c) return null;
            const u =
              o.htmlTreeAsString(s, { maxStringLength: 200 }) || "<unknown>";
            return At({
              category: "ui.keyDown",
              message: u,
              data: {
                ...Pt(s, u).data,
                metaKey: t,
                shiftKey: n,
                ctrlKey: r,
                altKey: i,
                key: a,
              },
            });
          })(t);
          n && St(e, n);
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
    Vt && $t.exception(e), this._options.onError && this._options.onError(e);
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
            Vt && $t.infoTick(`Starting replay in ${this.recordingMode} mode`),
            this._initializeRecording())
          : Vt &&
            $t.exception(new Error("Unable to initialize and create session")));
  }
  start() {
    if (this._isEnabled && "session" === this.recordingMode)
      return void (Vt && $t.log("Recording is already in progress"));
    if (this._isEnabled && "buffer" === this.recordingMode)
      return void (
        Vt &&
        $t.log("Buffering is in progress, call `flush()` to save the replay")
      );
    Vt && $t.infoTick("Starting replay in session mode"),
      this._updateUserActivity();
    const e = sn(
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
        Vt &&
        $t.log("Buffering is in progress, call `flush()` to save the replay")
      );
    Vt && $t.infoTick("Starting replay in buffer mode");
    const e = sn(
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
      this._stopRecording = mt({
        ...this._recordingOptions,
        ...("buffer" === this.recordingMode
          ? { checkoutEveryNms: 6e4 }
          : this._options._experiments.continuousCheckout && {
              checkoutEveryNms: Math.max(
                36e4,
                this._options._experiments.continuousCheckout,
              ),
            }),
        emit: Nn(this),
        ...(/iPhone|iPad|iPod/i.test(Pn?.userAgent ?? "") ||
        (/Macintosh/i.test(Pn?.userAgent ?? "") &&
          Pn?.maxTouchPoints &&
          Pn?.maxTouchPoints > 1)
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
      Vt && $t.log(`Stopping Replay triggered by ${n}`),
        gn(),
        this._removeListeners(),
        this.stopRecording(),
        this._debouncedFlush.cancel(),
        e && (await this._flush({ force: !0 })),
        this.eventBuffer?.destroy(),
        (this.eventBuffer = null),
        (o = this),
        (function () {
          if (Xt())
            try {
              i.sessionStorage.removeItem(a);
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
      Vt && $t.log("Pausing replay"));
  }
  resume() {
    this._isPaused &&
      this._checkSession() &&
      ((this._isPaused = !1),
      this.startRecording(),
      Vt && $t.log("Resuming replay"));
  }
  async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
    if ("session" === this.recordingMode) return this.flushImmediate();
    const t = Date.now();
    Vt && $t.log("Converting buffer to session"), await this.flushImmediate();
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
        yn(this.session.id)),
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
    if (n === Un) {
      const e = At({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !ln(this, {
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
              Vt &&
                $t.log("Using compression worker" + (e ? ` from ${e}` : ""));
              const n = new Worker(t);
              return new Jt(n);
            } catch (e) {
              Vt && $t.exception(e, "Failed to create compression worker");
            }
          })(t);
          if (e) return e;
        }
        return Vt && $t.log("Using simple buffer"), new Kt();
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
      "session" === this.recordingMode && this.session && yn(this.session.id);
  }
  _initializeSessionForSampling(e) {
    const t = this._options.errorSampleRate > 0,
      n = sn(
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
      !an(e, {
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
          (Rn(this), (this._hasInitializedCoreListeners = !0));
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
          o.addLcpInstrumentationHandler(Dt(Ft, e)),
          o.addClsInstrumentationHandler(Dt(Bt, e)),
          o.addInpInstrumentationHandler(Dt(zt, e)),
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
      (an(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      })
        ? gn()
        : (e && this._createCustomBreadcrumb(e), this.conditionalFlush()));
  }
  _doChangeToForegroundTasks(e) {
    this.session &&
      (this.checkAndHandleExpiredSession()
        ? e && this._createCustomBreadcrumb(e)
        : Vt && $t.log("Document has become active, but session has expired"));
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
        type: we.Custom,
        timestamp: e.timestamp || 0,
        data: { tag: "breadcrumb", payload: e },
      });
    });
  }
  _addPerformanceEntries() {
    let e = ((t = this.performanceEntries), t.map(jt).filter(Boolean)).concat(
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
    return Promise.all(vn(this, e));
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
              return Promise.all(vn(e, [Mn(i.performance.memory)]));
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
            throw new Ln();
          const n = this._popEventContext(),
            r = this.session.segmentId++;
          this._maybeSaveSession();
          const o = await this.eventBuffer.finish();
          await Fn({
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
              e instanceof jn
                ? "ratelimit_backoff"
                : e instanceof Ln
                  ? "invalid"
                  : "send_error"),
              t.recordDroppedEvent(n, "replay");
          }
        }
    } else Vt && $t.error("No session or eventBuffer found to flush.");
  }
  async _flush({ force: e = !1 } = {}) {
    if (!this._isEnabled && !e) return;
    if (!this.checkAndHandleExpiredSession())
      return void (
        Vt &&
        $t.error("Attempting to finish replay event after session expired.")
      );
    if (!this.session) return;
    const t = this.session.started,
      n = Date.now() - t;
    this._debouncedFlush.cancel();
    const r = n < this._options.minReplayDuration,
      o = n > this._options.maxReplayDuration + 5e3;
    if (r || o)
      return (
        Vt &&
          $t.log(
            `Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`,
          ),
        void (r && this._debouncedFlush())
      );
    const i = this.eventBuffer;
    i &&
      0 === this.session.segmentId &&
      !i.hasCheckout &&
      Vt &&
      $t.log("Flushing initial segment without checkout.");
    const a = !!this._flushLock;
    this._flushLock || (this._flushLock = this._runFlush());
    try {
      await this._flushLock;
    } catch (e) {
      this.handleException(e);
    } finally {
      (this._flushLock = void 0), a && this._debouncedFlush();
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
      const e = At({
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
function zn(e, t) {
  return [...e, ...t].join(",");
}
const Hn =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  Vn = ["content-length", "content-type", "accept"],
  qn = Symbol.for("sentry__originalRequestBody");
let Gn = !1,
  Wn = !1;
class $n {
  constructor({
    flushMinDelay: e = 5e3,
    flushMaxDelay: t = 5500,
    minReplayDuration: n = 4999,
    maxReplayDuration: o = 36e5,
    stickySession: i = !0,
    useCompression: a = !0,
    workerUrl: s,
    _experiments: l = {},
    maskAllText: c = !0,
    maskAllInputs: u = !0,
    blockAllMedia: d = !0,
    mutationBreadcrumbLimit: p = 750,
    mutationLimit: f = 1e4,
    slowClickTimeout: h = 7e3,
    slowClickIgnoreSelectors: m = [],
    networkDetailAllowUrls: g = [],
    networkDetailDenyUrls: y = [],
    networkCaptureBodies: v = !0,
    networkRequestHeaders: b = [],
    networkResponseHeaders: S = [],
    mask: _ = [],
    maskAttributes: x = ["title", "placeholder", "aria-label"],
    unmask: w = [],
    block: E = [],
    unblock: T = [],
    ignore: k = [],
    maskFn: C,
    beforeAddRecordingEvent: I,
    beforeErrorSampling: A,
    onError: O,
    attachRawBodyFromRequest: R = !1,
  } = {}) {
    this.name = "Replay";
    const M = (function ({
      mask: e,
      unmask: t,
      block: n,
      unblock: r,
      ignore: o,
    }) {
      return {
        maskTextSelector: zn(e, [".sentry-mask", "[data-sentry-mask]"]),
        unmaskTextSelector: zn(t, []),
        blockSelector: zn(n, [
          ".sentry-block",
          "[data-sentry-block]",
          "base",
          "iframe[srcdoc]:not([src])",
        ]),
        unblockSelector: zn(r, []),
        ignoreSelector: zn(o, [
          ".sentry-ignore",
          "[data-sentry-ignore]",
          'input[type="file"]',
        ]),
      };
    })({ mask: _, unmask: w, block: E, unblock: T, ignore: k });
    if (
      ((this._recordingOptions = {
        maskAllInputs: u,
        maskAllText: c,
        maskInputOptions: { password: !0 },
        maskTextFn: C,
        maskInputFn: C,
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
            const a = n.includes(t),
              s =
                r &&
                "value" === t &&
                "INPUT" === e.tagName &&
                ["submit", "button"].includes(e.getAttribute("type") || "");
            return a || s ? i.replace(/[\S]/g, "*") : i;
          })({
            maskAttributes: x,
            maskAllText: c,
            privacyOptions: M,
            key: e,
            value: t,
            el: n,
          }),
        ...M,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (e) => {
          try {
            e.__rrweb__ = !0;
          } catch {}
        },
        recordCrossOriginIframes: Boolean(l.recordCrossOriginIframes),
      }),
      (this._initialOptions = {
        flushMinDelay: e,
        flushMaxDelay: t,
        minReplayDuration: Math.min(n, 5e4),
        maxReplayDuration: Math.min(o, 36e5),
        stickySession: i,
        useCompression: a,
        workerUrl: s,
        blockAllMedia: d,
        maskAllInputs: u,
        maskAllText: c,
        mutationBreadcrumbLimit: p,
        mutationLimit: f,
        slowClickTimeout: h,
        slowClickIgnoreSelectors: m,
        networkDetailAllowUrls: g,
        networkDetailDenyUrls: y,
        networkCaptureBodies: v,
        networkRequestHeaders: Yn(b),
        networkResponseHeaders: Yn(S),
        beforeAddRecordingEvent: I,
        beforeErrorSampling: A,
        onError: O,
        attachRawBodyFromRequest: R,
        _experiments: l,
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
    return Gn;
  }
  set _isInitialized(e) {
    Gn = e;
  }
  afterAllSetup(e) {
    r.isBrowser() &&
      !this._replay &&
      (this._initialOptions.attachRawBodyFromRequest &&
        (function () {
          if ("undefined" == typeof Request || Wn) return;
          const e = Request;
          try {
            const t = function (t, n) {
              const r = new e(t, n);
              return null != n?.body && (r[qn] = n.body), r;
            };
            (t.prototype = e.prototype), (r.GLOBAL_OBJ.Request = t), (Wn = !0);
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
        a = r.parseSampleRate(n.replaysOnErrorSampleRate);
      return (
        null == i && null == a && r.consoleSandbox(() => {}),
        null != i && (o.sessionSampleRate = i),
        null != a && (o.errorSampleRate = a),
        o
      );
    })(this._initialOptions, e);
    this._replay = new Bn({
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
function Yn(e) {
  return [...Vn, ...e.map((e) => e.toLowerCase())];
}
(t.getReplay = function () {
  const e = r.getClient();
  return e?.getIntegrationByName("Replay");
}),
  (t.replayIntegration = (e) => new $n(e));
