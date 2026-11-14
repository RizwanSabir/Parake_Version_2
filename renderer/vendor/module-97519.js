// vendor/module-97519.js — webpack module 97519
// params: (t, e, r) = (module, exports, require)
"use strict";
function i(t, e) {
  (this.v = t), (this.k = e);
}
function o(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
  return i;
}
function n(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      var r =
        null == t
          ? null
          : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
      if (null != r) {
        var i,
          o,
          n,
          a,
          s = [],
          l = !0,
          h = !1;
        try {
          if (((n = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            l = !1;
          } else
            for (
              ;
              !(l = (i = n.call(r)).done) && (s.push(i.value), s.length !== e);
              l = !0
            );
        } catch (t) {
          (h = !0), (o = t);
        } finally {
          try {
            if (!l && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (h) throw o;
          }
        }
        return s;
      }
    })(t, e) ||
    (function (t, e) {
      if (t) {
        if ("string" == typeof t) return o(t, e);
        var r = {}.toString.call(t).slice(8, -1);
        return (
          "Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(t)
            : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? o(t, e)
              : void 0
        );
      }
    })(t, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
function a(t) {
  var e, r;
  function o(e, r) {
    try {
      var a = t[e](r),
        s = a.value,
        l = s instanceof i;
      Promise.resolve(l ? s.v : s).then(
        function (r) {
          if (l) {
            var i = "return" === e && s.k ? e : "next";
            if (!s.k || r.done) return o(i, r);
            r = t[i](r).value;
          }
          n(!!a.done, r);
        },
        function (t) {
          o("throw", t);
        },
      );
    } catch (t) {
      n(2, t);
    }
  }
  function n(t, i) {
    2 === t ? e.reject(i) : e.resolve({ value: i, done: t }),
      (e = e.next) ? o(e.key, e.arg) : (r = null);
  }
  (this._invoke = function (t, i) {
    return new Promise(function (n, a) {
      var s = { key: t, arg: i, resolve: n, reject: a, next: null };
      r ? (r = r.next = s) : ((e = r = s), o(t, i));
    });
  }),
    "function" != typeof t.return && (this.return = void 0);
}
r.d(e, { A: () => St }),
  (a.prototype[
    ("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"
  ] = function () {
    return this;
  }),
  (a.prototype.next = function (t) {
    return this._invoke("next", t);
  }),
  (a.prototype.throw = function (t) {
    return this._invoke("throw", t);
  }),
  (a.prototype.return = function (t) {
    return this._invoke("return", t);
  });
const s = Object.entries,
  l = Object.setPrototypeOf,
  h = Object.isFrozen,
  c = Object.getPrototypeOf,
  d = Object.getOwnPropertyDescriptor;
let u = Object.freeze,
  p = Object.seal,
  g = Object.create,
  f = "undefined" != typeof Reflect && Reflect,
  y = f.apply,
  m = f.construct;
u ||
  (u = function (t) {
    return t;
  }),
  p ||
    (p = function (t) {
      return t;
    }),
  y ||
    (y = function (t, e) {
      for (
        var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2;
        o < r;
        o++
      )
        i[o - 2] = arguments[o];
      return t.apply(e, i);
    }),
  m ||
    (m = function (t) {
      for (
        var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
        i < e;
        i++
      )
        r[i - 1] = arguments[i];
      return new t(...r);
    });
const x = N(Array.prototype.forEach);
Array.prototype.indexOf;
const C = N(Array.prototype.lastIndexOf),
  b = N(Array.prototype.pop),
  k = N(Array.prototype.push),
  w = N(Array.prototype.slice),
  S = N(Array.prototype.splice),
  T = Array.isArray,
  B = W(Set),
  v = N(Set.prototype.add),
  _ = N(Set.prototype.has),
  A = N(String.prototype.toLowerCase),
  F = N(String.prototype.toString),
  L = N(String.prototype.match),
  M = N(String.prototype.replace),
  $ = N(String.prototype.indexOf),
  E = N(String.prototype.trim),
  O = N(Number.prototype.toString),
  D = N(Boolean.prototype.toString),
  I = "undefined" == typeof BigInt ? null : N(BigInt.prototype.toString),
  K = "undefined" == typeof Symbol ? null : N(Symbol.prototype.toString),
  q = N(Object.prototype.hasOwnProperty),
  P = N(Object.prototype.toString),
  R = N(RegExp.prototype.test),
  z = W(TypeError);
function N(t) {
  return function (e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1;
      o < r;
      o++
    )
      i[o - 1] = arguments[o];
    return y(t, e, i);
  };
}
function W(t) {
  return function () {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return m(t, r);
  };
}
function j(t, e) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A;
  if ((l && l(t, null), !T(e))) return t;
  let i = e.length;
  for (; i--; ) {
    let o = e[i];
    if ("string" == typeof o) {
      const t = r(o);
      t !== o && (h(e) || (e[i] = t), (o = t));
    }
    t[o] = !0;
  }
  return t;
}
function H(t) {
  for (let e = 0; e < t.length; e++) q(t, e) || (t[e] = null);
  return t;
}
function U(t) {
  const e = g(null);
  for (const i of s(t)) {
    var r = n(i, 2);
    const o = r[0],
      a = r[1];
    q(t, o) &&
      (T(a)
        ? (e[o] = H(a))
        : a && "object" == typeof a && a.constructor === Object
          ? (e[o] = U(a))
          : (e[o] = a));
  }
  return e;
}
function Y(t, e) {
  for (; null !== t; ) {
    const r = d(t, e);
    if (r) {
      if (r.get) return N(r.get);
      if ("function" == typeof r.value) return N(r.value);
    }
    t = c(t);
  }
  return function () {
    return null;
  };
}
const G = u([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  X = u([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "enterkeyhint",
    "exportparts",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "inputmode",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "part",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  V = u([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  Z = u([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  Q = u([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  J = u([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  tt = u(["#text"]),
  et = u([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "command",
    "commandfor",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "exportparts",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inert",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "part",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
  ]),
  rt = u([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dominant-baseline",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "mask-type",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "pointer-events",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-orientation",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "vector-effect",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  it = u([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnalign",
    "columnlines",
    "columnspacing",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lquote",
    "lspace",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  ot = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  nt = p(/{{[\w\W]*|^[\w\W]*}}/g),
  at = p(/<%[\w\W]*|^[\w\W]*%>/g),
  st = p(/\${[\w\W]*/g),
  lt = p(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  ht = p(/^aria-[\-\w]+$/),
  ct = p(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  ),
  dt = p(/^(?:\w+script|data):/i),
  ut = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  pt = p(/^html$/i),
  gt = p(/^[a-z][.\w]*(-[.\w]+)+$/i),
  ft = p(/<[/\w!]/g),
  yt = p(/<[/\w]/g),
  mt = p(/<\/no(script|embed|frames)/i),
  xt = p(/\/>/i),
  Ct = u(
    j({}, [
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript",
    ]),
  ),
  bt = function () {
    return "undefined" == typeof window ? null : window;
  },
  kt = function (t, e, r, i) {
    return q(t, e) && T(t[e])
      ? j(i.base ? U(i.base) : {}, t[e], i.transform)
      : r;
  },
  wt = function (t, e, r) {
    const i = q(t, e) ? t[e] : void 0;
    return i && "object" == typeof i ? U(i) : r();
  };
var St = (function t() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt();
  const r = (e) => t(e);
  if (
    ((r.version = "3.4.17"),
    (r.removed = []),
    !e || !e.document || 9 !== e.document.nodeType || !e.Element)
  )
    return (r.isSupported = !1), r;
  let i = e.document;
  const o = i,
    n = o.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement,
    l = e.Node,
    h = e.Element,
    f = e.NodeFilter;
  void 0 === e.NamedNodeMap && (e.NamedNodeMap || e.MozNamedAttrMap),
    e.HTMLFormElement;
  const y = e.DOMParser,
    m = e.trustedTypes,
    W = h.prototype,
    H = Y(W, "cloneNode"),
    St = Y(W, "remove"),
    Tt = Y(W, "removeAttributeNode"),
    Bt = Y(W, "nextSibling"),
    vt = Y(W, "childNodes"),
    _t = Y(W, "parentNode"),
    At = Y(W, "shadowRoot"),
    Ft = Y(W, "attributes"),
    Lt = l && l.prototype ? Y(l.prototype, "nodeType") : null,
    Mt = l && l.prototype ? Y(l.prototype, "nodeName") : null,
    $t = l && l.prototype ? Y(l.prototype, "ownerDocument") : null,
    Et = function (t) {
      return Lt ? Lt(t) : t.nodeType;
    },
    Ot = function (t) {
      return Mt ? Mt(t) : t.nodeName;
    },
    Dt = (function (t) {
      for (; null !== t; ) {
        const e = d(t, "namespaceURI");
        if (e) return e.get ? N(e.get) : null;
        t = c(t);
      }
      return null;
    })(W),
    It = function (t) {
      return Dt ? Dt(t) : t.namespaceURI;
    };
  if ("function" == typeof a) {
    const t = i.createElement("template");
    t.content && t.content.ownerDocument && (i = t.content.ownerDocument);
  }
  let Kt,
    qt,
    Pt = "",
    Rt = !1,
    zt = 0;
  const Nt = function () {
      if (zt > 0)
        throw z(
          'A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.',
        );
    },
    Wt = function (t) {
      Nt(), zt++;
      try {
        return Kt.createHTML(t);
      } finally {
        zt--;
      }
    },
    jt = i,
    Ht = jt.implementation,
    Ut = jt.createNodeIterator,
    Yt = jt.createDocumentFragment,
    Gt = jt.getElementsByTagName,
    Xt = o.importNode;
  let Vt = {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: [],
  };
  r.isSupported =
    "function" == typeof s &&
    "function" == typeof _t &&
    Ht &&
    void 0 !== Ht.createHTMLDocument;
  const Zt = nt,
    Qt = at,
    Jt = st,
    te = lt,
    ee = ht,
    re = dt,
    ie = ut,
    oe = gt;
  let ne = ct,
    ae = null;
  const se = j({}, [...G, ...X, ...V, ...Q, ...tt]);
  let le = null;
  const he = j({}, [...et, ...rt, ...it, ...ot]);
  let ce = Object.seal(
      g(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      }),
    ),
    de = null,
    ue = null;
  const pe = Object.seal(
    g(null, {
      tagCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null,
      },
      attributeCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null,
      },
    }),
  );
  let ge = !0,
    fe = !0,
    ye = !1,
    me = !0,
    xe = !1,
    Ce = !0,
    be = !1,
    ke = !1,
    we = null,
    Se = null,
    Te = !1,
    Be = !1,
    ve = !1,
    _e = !1,
    Ae = !0,
    Fe = !1;
  const Le = "user-content-";
  let Me = !0,
    $e = !1,
    Ee = null,
    Oe = {},
    De = null;
  const Ie = j({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let Ke = null;
  const qe = j({}, ["audio", "video", "img", "source", "image", "track"]);
  let Pe = null;
  const Re = j({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    ze = "http://www.w3.org/1998/Math/MathML",
    Ne = "http://www.w3.org/2000/svg",
    We = "http://www.w3.org/1999/xhtml";
  let je = We,
    He = !1,
    Ue = null;
  const Ye = j({}, [ze, Ne, We], F),
    Ge = u(["mi", "mo", "mn", "ms", "mtext"]);
  let Xe = j({}, Ge);
  const Ve = u(["annotation-xml"]);
  let Ze = j({}, Ve);
  const Qe = j({}, ["title", "style", "font", "a", "script"]);
  let Je = null;
  const tr = ["application/xhtml+xml", "text/html"];
  let er = null,
    rr = null;
  const ir = i.createElement("form"),
    or = function (t) {
      return t instanceof RegExp || t instanceof Function;
    },
    nr = function () {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (rr && rr === t) return;
      (t && "object" == typeof t) || (t = {}),
        (t = U(t)),
        (Je =
          -1 === tr.indexOf(t.PARSER_MEDIA_TYPE)
            ? "text/html"
            : t.PARSER_MEDIA_TYPE),
        (er = "application/xhtml+xml" === Je ? F : A),
        (ae = kt(t, "ALLOWED_TAGS", se, { transform: er })),
        (le = kt(t, "ALLOWED_ATTR", he, { transform: er })),
        (Ue = kt(t, "ALLOWED_NAMESPACES", Ye, { transform: F })),
        (Pe = kt(t, "ADD_URI_SAFE_ATTR", Re, {
          transform: er,
          base: Re,
        })),
        (Ke = kt(t, "ADD_DATA_URI_TAGS", qe, {
          transform: er,
          base: qe,
        })),
        (De = kt(t, "FORBID_CONTENTS", Ie, { transform: er })),
        (de = kt(t, "FORBID_TAGS", U({}), { transform: er })),
        (ue = kt(t, "FORBID_ATTR", U({}), { transform: er })),
        (Oe =
          !!q(t, "USE_PROFILES") &&
          (t.USE_PROFILES && "object" == typeof t.USE_PROFILES
            ? U(t.USE_PROFILES)
            : t.USE_PROFILES)),
        (ge = !1 !== t.ALLOW_ARIA_ATTR),
        (fe = !1 !== t.ALLOW_DATA_ATTR),
        (ye = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
        (me = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
        (xe = t.SAFE_FOR_TEMPLATES || !1),
        (Ce = !1 !== t.SAFE_FOR_XML),
        (be = t.WHOLE_DOCUMENT || !1),
        (Be = t.RETURN_DOM || !1),
        (ve = t.RETURN_DOM_FRAGMENT || !1),
        (_e = t.RETURN_TRUSTED_TYPE || !1),
        (Te = t.FORCE_BODY || !1),
        (Ae = !1 !== t.SANITIZE_DOM),
        (Fe = t.SANITIZE_NAMED_PROPS || !1),
        (Me = !1 !== t.KEEP_CONTENT),
        ($e = t.IN_PLACE || !1),
        (ne = (function (t) {
          try {
            return R(t, ""), !0;
          } catch (t) {
            return !1;
          }
        })(t.ALLOWED_URI_REGEXP)
          ? t.ALLOWED_URI_REGEXP
          : ct),
        (je = "string" == typeof t.NAMESPACE ? t.NAMESPACE : We),
        (Xe = wt(t, "MATHML_TEXT_INTEGRATION_POINTS", () => j({}, Ge))),
        (Ze = wt(t, "HTML_INTEGRATION_POINTS", () => j({}, Ve)));
      const e = wt(t, "CUSTOM_ELEMENT_HANDLING", () => g(null));
      if (
        ((ce = g(null)),
        q(e, "tagNameCheck") &&
          or(e.tagNameCheck) &&
          (ce.tagNameCheck = e.tagNameCheck),
        q(e, "attributeNameCheck") &&
          or(e.attributeNameCheck) &&
          (ce.attributeNameCheck = e.attributeNameCheck),
        q(e, "allowCustomizedBuiltInElements") &&
          "boolean" == typeof e.allowCustomizedBuiltInElements &&
          (ce.allowCustomizedBuiltInElements =
            e.allowCustomizedBuiltInElements),
        p(ce),
        xe && (fe = !1),
        ve && (Be = !0),
        Oe &&
          ((ae = j({}, tt)),
          (le = g(null)),
          !0 === Oe.html && (j(ae, G), j(le, et)),
          !0 === Oe.svg && (j(ae, X), j(le, rt), j(le, ot)),
          !0 === Oe.svgFilters && (j(ae, V), j(le, rt), j(le, ot)),
          !0 === Oe.mathMl && (j(ae, Q), j(le, it), j(le, ot))),
        (pe.tagCheck = null),
        (pe.attributeCheck = null),
        q(t, "ADD_TAGS") &&
          ("function" == typeof t.ADD_TAGS
            ? (pe.tagCheck = t.ADD_TAGS)
            : T(t.ADD_TAGS) &&
              (ae === se && (ae = U(ae)), j(ae, t.ADD_TAGS, er))),
        q(t, "ADD_ATTR") &&
          ("function" == typeof t.ADD_ATTR
            ? (pe.attributeCheck = t.ADD_ATTR)
            : T(t.ADD_ATTR) &&
              (le === he && (le = U(le)), j(le, t.ADD_ATTR, er))),
        q(t, "ADD_FORBID_CONTENTS") &&
          T(t.ADD_FORBID_CONTENTS) &&
          (De === Ie && (De = U(De)), j(De, t.ADD_FORBID_CONTENTS, er)),
        Me && (ae["#text"] = !0),
        be && j(ae, ["html", "head", "body"]),
        ae.table && (j(ae, ["tbody"]), delete de.tbody),
        t.TRUSTED_TYPES_POLICY)
      ) {
        if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML)
          throw z(
            'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
          );
        if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL)
          throw z(
            'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
          );
        const e = Kt;
        Kt = t.TRUSTED_TYPES_POLICY;
        try {
          Pt = Wt("");
        } catch (t) {
          throw ((Kt = e), t);
        }
      } else
        null === t.TRUSTED_TYPES_POLICY
          ? ((Kt = void 0), (Pt = ""))
          : (void 0 === Kt &&
              (Rt ||
                ((qt = (function (t, e) {
                  if (
                    "object" != typeof t ||
                    "function" != typeof t.createPolicy
                  )
                    return null;
                  let r = null;
                  const i = "data-tt-policy-suffix";
                  e && e.hasAttribute(i) && (r = e.getAttribute(i));
                  const o = "dompurify" + (r ? "#" + r : "");
                  try {
                    return t.createPolicy(o, {
                      createHTML: (t) => t,
                      createScriptURL: (t) => t,
                    });
                  } catch (t) {
                    return null;
                  }
                })(m, n)),
                (Rt = !0)),
              (Kt = qt)),
            Kt && "string" == typeof Pt && (Pt = Wt("")));
      u && u(t), (rr = t);
    },
    ar = j({}, [...X, ...V, ...Z]),
    sr = j({}, [...Q, ...J]),
    lr = function (t) {
      k(r.removed, { element: t });
      try {
        _t(t).removeChild(t);
      } catch (e) {
        if ((St(t), !_t(t)))
          throw z(
            "a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place",
          );
      }
    },
    hr = function (t, e, r) {
      try {
        Tt(t, e);
      } catch (e) {
        try {
          t.removeAttribute(r);
        } catch (t) {}
      }
    },
    cr = function (t) {
      gr(t);
      const e = vt(t);
      e &&
        x(w(e), (t) => {
          try {
            St(t);
          } catch (t) {}
        });
      const r = 1 === Et(t) ? Ft(t) : null;
      if (r)
        for (let e = r.length - 1; e >= 0; --e) {
          const i = r[e],
            o = i && i.name;
          "string" == typeof o && hr(t, i, o);
        }
    },
    dr = function (t, e, i) {
      if (!i)
        try {
          i = e.getAttributeNode(t);
        } catch (t) {
          i = null;
        }
      k(r.removed, { attribute: i || null, from: e });
      try {
        i ? Tt(e, i) : e.removeAttribute(t);
      } catch (r) {
        try {
          e.removeAttribute(t);
        } catch (t) {}
      }
      if ("is" === t)
        if (Be || ve)
          try {
            lr(e);
          } catch (t) {}
        else
          try {
            e.setAttribute(t, "");
          } catch (t) {}
    },
    ur = function (t) {
      const e = Ft(t);
      if (e)
        for (let r = e.length - 1; r >= 0; --r) {
          const i = e[r],
            o = i && i.name;
          "string" != typeof o || le[er(o)] || hr(t, i, o);
        }
    },
    pr = function (t, e) {
      let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const i = [t];
      for (; i.length > 0; ) {
        const t = i.pop();
        if (!1 === e(t)) continue;
        if (r && 1 === Et(t)) {
          const e = At(t);
          Br(e) && i.push(e);
        }
        const o = vt(t);
        if (o) for (let t = o.length - 1; t >= 0; --t) i.push(o[t]);
      }
    },
    gr = function (t) {
      pr(t, (t) => {
        1 === Et(t) && ur(t);
      });
    },
    fr = function (t) {
      const e = [];
      return (
        pr(
          t,
          (t) => {
            e.push(t);
          },
          !0,
        ),
        e
      );
    },
    yr = function (t, e) {
      let i = !1;
      return (
        x(r.removed, (e) => {
          e.element && ((i = i || e.element === t), gr(e.element));
        }),
        (function (t, e) {
          const r = B();
          x(fr(t), (t) => {
            1 === Et(t) && v(r, t);
          }),
            x(e, (t) => {
              1 !== Et(t) || _(r, t) || ur(t);
            });
        })(t, e),
        i
      );
    },
    mr = function (t, e, r, i) {
      const o = br(t);
      let n;
      for (; (n = o.nextNode()); )
        _(i, n) &&
          !_(Ee, n) &&
          (e && _r(Vt.uponSanitizeShadowNode, n, null),
          Mr(n, r),
          qr(n, r),
          Br(n.content) && Pr(n.content));
    },
    xr = function (t, e) {
      return (
        !!Ce &&
        ("patchsrc" === t || ("for" === t && "label" !== e && "output" !== e))
      );
    },
    Cr = function (t) {
      let e = null,
        r = null;
      if (Te) t = "<remove></remove>" + t;
      else {
        const e = L(t, /^[\r\n\t ]+/);
        r = e && e[0];
      }
      "application/xhtml+xml" === Je &&
        je === We &&
        (t =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          t +
          "</body></html>");
      const o = Kt ? Wt(t) : t;
      if (je === We)
        try {
          e = new y().parseFromString(o, Je);
        } catch (t) {}
      if (!e || !e.documentElement) {
        e = Ht.createDocument(je, "template", null);
        try {
          e.documentElement.innerHTML = He ? Pt : o;
        } catch (t) {}
      }
      const n = e.body || e.documentElement;
      return (
        t && r && n.insertBefore(i.createTextNode(r), n.childNodes[0] || null),
        je === We
          ? Gt.call(e, be ? "html" : "body")[0]
          : be
            ? e.documentElement
            : n
      );
    },
    br = function (t) {
      const e = $t ? $t(t) : t.ownerDocument;
      return Ut.call(
        e || t,
        t,
        f.SHOW_ELEMENT |
          f.SHOW_COMMENT |
          f.SHOW_TEXT |
          f.SHOW_PROCESSING_INSTRUCTION |
          f.SHOW_CDATA_SECTION,
        null,
      );
    },
    kr = function (t) {
      return (t = M(t, Zt, " ")), (t = M(t, Qt, " ")), M(t, Jt, " ");
    },
    wr = function (t) {
      var e;
      Sr(t);
      const r =
        null === (e = t.querySelectorAll) || void 0 === e
          ? void 0
          : e.call(t, "template");
      r &&
        x(r, (t) => {
          Br(t.content) && wr(t.content);
        });
    },
    Sr = function (t) {
      t.normalize();
      const e = $t ? $t(t) : t.ownerDocument,
        r = Ut.call(
          e || t,
          t,
          f.SHOW_TEXT |
            f.SHOW_COMMENT |
            f.SHOW_CDATA_SECTION |
            f.SHOW_PROCESSING_INSTRUCTION,
          null,
        );
      let i = r.nextNode();
      for (; i; ) (i.data = kr(i.data)), (i = r.nextNode());
    },
    Tr = function (t) {
      const e = Mt ? Mt(t) : null;
      return (
        "string" == typeof e &&
        "form" === er(e) &&
        ("string" != typeof t.nodeName ||
          "string" != typeof t.textContent ||
          "function" != typeof t.removeChild ||
          t.attributes !== Ft(t) ||
          "function" != typeof t.removeAttribute ||
          "function" != typeof t.removeAttributeNode ||
          "function" != typeof t.getAttributeNode ||
          "function" != typeof t.setAttribute ||
          "string" != typeof t.namespaceURI ||
          "function" != typeof t.insertBefore ||
          "function" != typeof t.hasChildNodes ||
          t.nodeType !== Lt(t) ||
          t.childNodes !== vt(t))
      );
    },
    Br = function (t) {
      if (!Lt || "object" != typeof t || null === t) return !1;
      try {
        return 11 === Lt(t);
      } catch (t) {
        return !1;
      }
    },
    vr = function (t) {
      if (!Lt || "object" != typeof t || null === t) return !1;
      try {
        return "number" == typeof Lt(t);
      } catch (t) {
        return !1;
      }
    };
  function _r(t, e, i) {
    0 !== t.length &&
      x(t, (t) => {
        t.call(r, e, i, rr);
      });
  }
  const Ar = function (t, e) {
      if (t instanceof RegExp) return R(t, e);
      if (t instanceof Function) {
        for (
          var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          i[o - 2] = arguments[o];
        return Boolean(t(e, ...i));
      }
      return !1;
    },
    Fr = function (t, e, r, i) {
      return 0 === t.length ? e : e === r || e === i ? U(e) : e;
    },
    Lr = function (t, e) {
      return t !== e && null === _t(t) && ($e && gr(t), !0);
    },
    Mr = function (t, e) {
      if ((Ee && v(Ee, t), _r(Vt.beforeSanitizeElements, t, null), Lr(t, e)))
        return !0;
      if (Tr(t)) return lr(t), !0;
      const i = er(Ot(t));
      if (
        ((ae = Fr(Vt.uponSanitizeElement, ae, se, we)),
        _r(Vt.uponSanitizeElement, t, { tagName: i, allowedTags: ae }),
        Lr(t, e))
      )
        return !0;
      if (
        (function (t, e) {
          return (
            !!(
              Ce &&
              t.hasChildNodes() &&
              !vr(t.firstElementChild) &&
              R(ft, t.textContent) &&
              R(ft, t.innerHTML)
            ) ||
            !!(
              Ce &&
              Ct[e] &&
              1 === Et(t) &&
              It(t) === We &&
              (vr(t.firstElementChild) ||
                ("string" == typeof t.textContent && R(ft, t.textContent)))
            ) ||
            7 === t.nodeType ||
            !(!Ce || 8 !== t.nodeType || !R(yt, t.data))
          );
        })(t, i)
      )
        return lr(t), !0;
      if (
        de[i] ||
        (!(pe.tagCheck instanceof Function && pe.tagCheck(i)) && !ae[i])
      ) {
        const r = (function (t, e, r) {
          if (!de[e] && Or(e) && Ar(ce.tagNameCheck, e)) return !1;
          if (Me && !De[e] && !De[A(e)]) {
            const e = _t(t),
              i = vt(t);
            if (i && e)
              for (let o = i.length - 1; o >= 0; --o) {
                const n = t === r ? H(i[o], !0) : i[o];
                e.insertBefore(n, Bt(t));
              }
          }
          return lr(t), !0;
        })(t, i, e);
        return (
          !(!1 !== r || (_r(Vt.afterSanitizeElements, t, null), !Lr(t, e))) || r
        );
      }
      if (
        1 === Et(t) &&
        !(function (t) {
          const e = It(t),
            r = A(Ot(t)),
            i = _t(t);
          let o, n;
          return (
            i && 1 === Et(i)
              ? ((o = { namespaceURI: It(i) }), (n = A(Ot(i))))
              : ((o = { namespaceURI: je }), (n = "template")),
            !!Ue[e] &&
              (e === Ne
                ? (function (t, e, r) {
                    return e.namespaceURI === We
                      ? "svg" === t
                      : e.namespaceURI === ze
                        ? "svg" === t && ("annotation-xml" === r || Xe[r])
                        : Boolean(ar[t]);
                  })(r, o, n)
                : e === ze
                  ? (function (t, e, r) {
                      return e.namespaceURI === We
                        ? "math" === t
                        : e.namespaceURI === Ne
                          ? "math" === t && Ze[r]
                          : Boolean(sr[t]);
                    })(r, o, n)
                  : e === We
                    ? (function (t, e, r) {
                        return (
                          !(e.namespaceURI === Ne && !Ze[r]) &&
                          !(e.namespaceURI === ze && !Xe[r]) &&
                          !sr[t] &&
                          (Qe[t] || !ar[t])
                        );
                      })(r, o, n)
                    : !("application/xhtml+xml" !== Je || !Ue[e]))
          );
        })(t)
      )
        return lr(t), !0;
      if (
        ("noscript" === i || "noembed" === i || "noframes" === i) &&
        R(mt, t.innerHTML)
      )
        return lr(t), !0;
      if (xe && 3 === t.nodeType) {
        const e = kr(t.textContent);
        t.textContent !== e &&
          (k(r.removed, { element: t.cloneNode() }), (t.textContent = e));
      }
      return _r(Vt.afterSanitizeElements, t, null), Lr(t, e);
    },
    $r = function (t, e, r) {
      if (ue[e]) return !1;
      if (xr(e, t)) return !1;
      if (Ae && ("id" === e || "name" === e) && (r in i || r in ir)) return !1;
      const o =
        le[e] ||
        (pe.attributeCheck instanceof Function && pe.attributeCheck(e, t));
      return (
        !(!fe || !R(te, e)) ||
        !(!ge || !R(ee, e)) ||
        (o
          ? !(
              !Pe[e] &&
              !R(ne, M(r, ie, "")) &&
              (("src" !== e && "xlink:href" !== e && "href" !== e) ||
                "script" === t ||
                0 !== $(r, "data:") ||
                !Ke[t]) &&
              (!ye || R(re, M(r, ie, ""))) &&
              r
            )
          : (Or(t) &&
              Ar(ce.tagNameCheck, t) &&
              Ar(ce.attributeNameCheck, e, t)) ||
            ("is" === e &&
              ce.allowCustomizedBuiltInElements &&
              Ar(ce.tagNameCheck, r)))
      );
    },
    Er = j({}, [
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "missing-glyph",
    ]),
    Or = function (t) {
      return !Er[A(t)] && R(oe, t);
    },
    Dr = function (t, e, r, i) {
      if (
        Kt &&
        "object" == typeof m &&
        "function" == typeof m.getAttributeType &&
        !r
      )
        switch (m.getAttributeType(t, e)) {
          case "TrustedHTML":
            return Wt(i);
          case "TrustedScriptURL":
            return (function (t) {
              Nt(), zt++;
              try {
                return Kt.createScriptURL(t);
              } finally {
                zt--;
              }
            })(i);
        }
      return i;
    },
    Ir = function (t, e, r, i) {
      try {
        return (
          r ? t.setAttributeNS(r, e, i) : t.setAttribute(e, i),
          !Tr(t) || (lr(t), !1)
        );
      } catch (r) {
        return dr(e, t), !1;
      }
    },
    Kr = function (t, e) {
      return (
        !(
          !Ce ||
          !R(
            /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
            e,
          )
        ) ||
        ("attributename" === A(t) && null !== L(e, "href"))
      );
    },
    qr = function (t, e) {
      if ((_r(Vt.beforeSanitizeAttributes, t, null), Lr(t, e))) return;
      const i = t.attributes;
      if (!i || Tr(t)) return;
      le = Fr(Vt.uponSanitizeAttribute, le, he, Se);
      const o = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: le,
        forceKeepAttr: void 0,
      };
      let n = i.length;
      const a = er(t.nodeName);
      for (; n--; ) {
        const e = i[n],
          s = e.name,
          l = e.namespaceURI,
          h = e.value,
          c = er(s),
          d = h;
        let u = "value" === s ? d : E(d),
          p = !1;
        (o.attrName = c),
          (o.attrValue = u),
          (o.keepAttr = !0),
          (o.forceKeepAttr = void 0),
          _r(Vt.uponSanitizeAttribute, t, o),
          (u = o.attrValue),
          !Fe ||
            ("id" !== c && "name" !== c) ||
            0 === $(u, Le) ||
            (dr(s, t, e), (u = Le + u), (p = !0)),
          Kr(s, u)
            ? dr(s, t, e)
            : o.forceKeepAttr ||
              (!o.keepAttr || (!me && R(xt, u))
                ? dr(s, t, e)
                : (xe && (u = kr(u)),
                  $r(a, c, u)
                    ? ((u = Dr(a, c, l, u)),
                      u !== d && Ir(t, s, l, u) && p && b(r.removed))
                    : dr(s, t, e)));
      }
      _r(Vt.afterSanitizeAttributes, t, null), Lr(t, e);
    },
    Pr = function (t) {
      let e = null;
      const r = br(t);
      for (_r(Vt.beforeSanitizeShadowDOM, t, null); (e = r.nextNode()); )
        if (
          (_r(Vt.uponSanitizeShadowNode, e, null),
          Mr(e, t),
          qr(e, t),
          Br(e.content) && Pr(e.content),
          1 === Et(e))
        ) {
          const t = At(e);
          Br(t) && (Rr(t), Pr(t));
        }
      xe && Sr(t), _r(Vt.afterSanitizeShadowDOM, t, null);
    },
    Rr = function (t) {
      const e = [{ node: t, shadow: null }];
      for (; e.length > 0; ) {
        const t = e.pop();
        if (t.shadow) {
          Pr(t.shadow);
          continue;
        }
        const r = t.node,
          i = 1 === Et(r),
          o = vt(r);
        if (o)
          for (let t = o.length - 1; t >= 0; --t)
            e.push({ node: o[t], shadow: null });
        if (i) {
          const t = Mt ? Mt(r) : null;
          if ("string" == typeof t && "template" === er(t)) {
            const t = r.content;
            Br(t) && e.push({ node: t, shadow: null });
          }
        }
        if (i) {
          const t = At(r);
          Br(t) && e.push({ node: null, shadow: t }, { node: t, shadow: null });
        }
      }
    };
  return (
    (r.sanitize = function (t) {
      let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = null,
        n = null,
        a = null,
        s = null;
      if (
        ((He = !t),
        He && (t = "\x3c!--\x3e"),
        "string" != typeof t &&
          !vr(t) &&
          "string" !=
            typeof (t = (function (t) {
              switch (typeof t) {
                case "string":
                  return t;
                case "number":
                  return O(t);
                case "boolean":
                  return D(t);
                case "bigint":
                  return I ? I(t) : "0";
                case "symbol":
                  return K ? K(t) : "Symbol()";
                case "undefined":
                default:
                  return P(t);
                case "function":
                case "object": {
                  if (null === t) return P(t);
                  const e = t,
                    r = Y(e, "toString");
                  if ("function" == typeof r) {
                    const t = r(e);
                    return "string" == typeof t ? t : P(t);
                  }
                  return P(t);
                }
              }
            })(t)))
      )
        throw z("dirty is not a string, aborting");
      if (!r.isSupported) return t;
      ke ? ((ae = we), (le = Se)) : nr(e),
        (Vt.uponSanitizeElement.length > 0 ||
          Vt.uponSanitizeAttribute.length > 0) &&
          (ae = U(ae)),
        Vt.uponSanitizeAttribute.length > 0 && (le = U(le)),
        (r.removed = []);
      const l = $e && "string" != typeof t && vr(t);
      let h = [];
      const c = Ee;
      if (l) {
        Ce &&
          pr(t, (t) => {
            const e = Et(t);
            if (7 === e || (8 === e && R(yt, t.data))) {
              try {
                St(t);
              } catch (t) {}
              return !1;
            }
            if (1 === e) {
              const e = t,
                r = er(Ot(t));
              try {
                e.hasAttribute &&
                  e.hasAttribute("patchsrc") &&
                  e.removeAttribute("patchsrc"),
                  e.hasAttribute &&
                    e.hasAttribute("for") &&
                    xr("for", r) &&
                    e.removeAttribute("for");
              } catch (t) {}
            }
            return !0;
          });
        const e = Ot(t);
        if ("string" == typeof e) {
          const r = er(e);
          if (!ae[r] || de[r])
            throw (
              (cr(t),
              z("root node is forbidden and cannot be sanitized in-place"))
            );
        }
        if (Tr(t))
          throw (
            (cr(t),
            z("root node is clobbered and cannot be sanitized in-place"))
          );
        (h = fr(t)), (Ee = B());
      } else if (vr(t))
        (i = Cr("\x3c!----\x3e")),
          (n = i.ownerDocument.importNode(t, !0)),
          (1 === n.nodeType && "BODY" === n.nodeName) || "HTML" === n.nodeName
            ? (i = n)
            : i.appendChild(n),
          Rr(i);
      else {
        if (!Be && !xe && !be && -1 === t.indexOf("<"))
          return Kt && _e ? Wt(t) : t;
        if (((i = Cr(t)), !i)) return Be ? null : _e ? Pt : "";
      }
      i && Te && lr(i.firstChild);
      const d = l ? t : i;
      try {
        l && Rr(t);
        const e = br(d);
        for (; (a = e.nextNode()); )
          Mr(a, d), qr(a, d), Br(a.content) && Pr(a.content);
        l &&
          (function (t, e) {
            const r = Ee;
            let i = null;
            const o = () => (
              i ||
                ((i = B()),
                x(e, (t) => {
                  v(i, t);
                })),
              i
            );
            for (let e = 0; ; e++) {
              const i = fr(t),
                n = [t];
              let a = !1;
              if (
                (x(i, (t) => {
                  11 === Et(t) ? k(n, t) : a || _(r, t) || (a = _(o(), t));
                }),
                !a)
              )
                return;
              if (e >= 8)
                throw z(
                  "the tree kept changing during in-place sanitization; refusing to return it",
                );
              x(n, (e, r) => {
                mr(e, r > 0, t, o());
              });
            }
          })(t, h);
      } catch (e) {
        throw (l && (cr(t), yr(t, h)), e);
      } finally {
        Ee = c;
      }
      if (l) {
        if (yr(t, h))
          throw z(
            "a node selected for removal could not be safely returned; refusing to sanitize in place",
          );
        return xe && wr(t), t;
      }
      if (Be) {
        if ((xe && wr(i), ve))
          for (s = Yt.call(i.ownerDocument); i.firstChild; )
            s.appendChild(i.firstChild);
        else s = i;
        return (
          (le.shadowroot || le.shadowrootmode) && (s = Xt.call(o, s, !0)), s
        );
      }
      let u = be ? i.outerHTML : i.innerHTML;
      return (
        be &&
          ae["!doctype"] &&
          i.ownerDocument &&
          i.ownerDocument.doctype &&
          i.ownerDocument.doctype.name &&
          R(pt, i.ownerDocument.doctype.name) &&
          (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u),
        xe && (u = kr(u)),
        Kt && _e ? Wt(u) : u
      );
    }),
    (r.setConfig = function () {
      nr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
        (ke = !0),
        (we = ae),
        (Se = le);
    }),
    (r.clearConfig = function () {
      (rr = null), (ke = !1), (we = null), (Se = null), (Kt = qt), (Pt = "");
    }),
    (r.isValidAttribute = function (t, e, r) {
      rr || nr({});
      const i = er(t),
        o = er(e);
      return (
        ("string" != typeof r || !(Kr(e, r) || (!me && R(xt, r)))) &&
        $r(i, o, r)
      );
    }),
    (r.addHook = function (t, e) {
      "function" == typeof e && q(Vt, t) && k(Vt[t], e);
    }),
    (r.removeHook = function (t, e) {
      if (q(Vt, t)) {
        if (void 0 !== e) {
          const r = C(Vt[t], e);
          return -1 === r ? void 0 : S(Vt[t], r, 1)[0];
        }
        return b(Vt[t]);
      }
    }),
    (r.removeHooks = function (t) {
      q(Vt, t) && (Vt[t] = []);
    }),
    (r.removeAllHooks = function () {
      Vt = {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: [],
      };
    }),
    r
  );
})();
