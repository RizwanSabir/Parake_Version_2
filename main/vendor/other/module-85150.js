// vendor/other/module-85150.js — webpack module 85150
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
!(function (e) {
  (e.parser = function (e, t) {
    return new o(e, t);
  }),
    (e.SAXParser = o),
    (e.SAXStream = s),
    (e.createStream = function (e, t) {
      return new s(e, t);
    }),
    (e.MAX_BUFFER_LENGTH = 65536);
  var t,
    r = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script",
    ];
  function o(t, n) {
    if (!(this instanceof o)) return new o(t, n);
    var i = this;
    !(function (e) {
      for (var t = 0, n = r.length; t < n; t++) e[r[t]] = "";
    })(i),
      (i.q = i.c = ""),
      (i.bufferCheckPosition = e.MAX_BUFFER_LENGTH),
      (i.encoding = null),
      (i.opt = n || {}),
      (i.opt.lowercase = i.opt.lowercase || i.opt.lowercasetags),
      (i.looseCase = i.opt.lowercase ? "toLowerCase" : "toUpperCase"),
      (i.opt.maxEntityCount = i.opt.maxEntityCount || 512),
      (i.opt.maxEntityDepth = i.opt.maxEntityDepth || 4),
      (i.entityCount = i.entityDepth = 0),
      (i.tags = []),
      (i.closed = i.closedRoot = i.sawRoot = !1),
      (i.tag = i.error = null),
      (i.strict = !!t),
      (i.noscript = !(!t && !i.opt.noscript)),
      (i.state = v.BEGIN),
      (i.strictEntities = i.opt.strictEntities),
      (i.ENTITIES = i.strictEntities
        ? Object.create(e.XML_ENTITIES)
        : Object.create(e.ENTITIES)),
      (i.attribList = []),
      i.opt.xmlns && (i.ns = Object.create(d)),
      void 0 === i.opt.unquotedAttributeValues &&
        (i.opt.unquotedAttributeValues = !t),
      (i.trackPosition = !1 !== i.opt.position),
      i.trackPosition && (i.position = i.line = i.column = 0),
      N(i, "onready");
  }
  (e.EVENTS = [
    "text",
    "processinginstruction",
    "sgmldeclaration",
    "doctype",
    "comment",
    "opentagstart",
    "attribute",
    "opentag",
    "closetag",
    "opencdata",
    "cdata",
    "closecdata",
    "error",
    "end",
    "ready",
    "script",
    "opennamespace",
    "closenamespace",
  ]),
    Object.create ||
      (Object.create = function (e) {
        function t() {}
        return (t.prototype = e), new t();
      }),
    Object.keys ||
      (Object.keys = function (e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t;
      }),
    (o.prototype = {
      end: function () {
        L(this);
      },
      write: function (t) {
        var n = this;
        if (this.error) throw this.error;
        if (n.closed)
          return P(n, "Cannot write after close. Assign an onready handler.");
        if (null === t) return L(n);
        "object" == typeof t && (t = t.toString());
        for (var o = 0, i = ""; (i = H(t, o++)), (n.c = i), i; )
          switch (
            (n.trackPosition &&
              (n.position++,
              "\n" === i ? (n.line++, (n.column = 0)) : n.column++),
            n.state)
          ) {
            case v.BEGIN:
              if (((n.state = v.BEGIN_WHITESPACE), "\ufeff" === i)) continue;
              j(n, i);
              continue;
            case v.BEGIN_WHITESPACE:
              j(n, i);
              continue;
            case v.TEXT:
              if (n.sawRoot && !n.closedRoot) {
                for (var s = o - 1; i && "<" !== i && "&" !== i; )
                  (i = H(t, o++)) &&
                    n.trackPosition &&
                    (n.position++,
                    "\n" === i ? (n.line++, (n.column = 0)) : n.column++);
                n.textNode += t.substring(s, o - 1);
              }
              "<" !== i || (n.sawRoot && n.closedRoot && !n.strict)
                ? (m(i) ||
                    (n.sawRoot && !n.closedRoot) ||
                    x(n, "Text data outside of root node."),
                  "&" === i ? (n.state = v.TEXT_ENTITY) : (n.textNode += i))
                : ((n.state = v.OPEN_WAKA), (n.startTagPosition = n.position));
              continue;
            case v.SCRIPT:
              "<" === i ? (n.state = v.SCRIPT_ENDING) : (n.script += i);
              continue;
            case v.SCRIPT_ENDING:
              "/" === i
                ? (n.state = v.CLOSE_TAG)
                : ((n.script += "<" + i), (n.state = v.SCRIPT));
              continue;
            case v.OPEN_WAKA:
              if ("!" === i) (n.state = v.SGML_DECL), (n.sgmlDecl = "");
              else if (m(i));
              else if (E(p, i)) (n.state = v.OPEN_TAG), (n.tagName = i);
              else if ("/" === i) (n.state = v.CLOSE_TAG), (n.tagName = "");
              else if ("?" === i)
                (n.state = v.PROC_INST), (n.procInstName = n.procInstBody = "");
              else {
                if (
                  (x(n, "Unencoded <"), n.startTagPosition + 1 < n.position)
                ) {
                  var u = n.position - n.startTagPosition;
                  i = new Array(u).join(" ") + i;
                }
                (n.textNode += "<" + i), (n.state = v.TEXT);
              }
              continue;
            case v.SGML_DECL:
              if (n.sgmlDecl + i === "--") {
                (n.state = v.COMMENT), (n.comment = ""), (n.sgmlDecl = "");
                continue;
              }
              n.doctype && !0 !== n.doctype && n.sgmlDecl
                ? ((n.state = v.DOCTYPE_DTD),
                  (n.doctype += "<!" + n.sgmlDecl + i),
                  (n.sgmlDecl = ""))
                : a.test(n.sgmlDecl + i)
                  ? (O(n, "onopencdata"),
                    (n.state = v.CDATA),
                    (n.sgmlDecl = ""),
                    (n.cdata = ""))
                  : c.test(n.sgmlDecl + i)
                    ? ((n.state = v.DOCTYPE),
                      (n.doctype || n.sawRoot) &&
                        x(n, "Inappropriately located doctype declaration"),
                      (n.doctype = ""),
                      (n.sgmlDecl = ""))
                    : ">" === i
                      ? (O(n, "onsgmldeclaration", n.sgmlDecl),
                        (n.sgmlDecl = ""),
                        (n.state = v.TEXT))
                      : _(i)
                        ? ((n.state = v.SGML_DECL_QUOTED), (n.sgmlDecl += i))
                        : (n.sgmlDecl += i);
              continue;
            case v.SGML_DECL_QUOTED:
              i === n.q && ((n.state = v.SGML_DECL), (n.q = "")),
                (n.sgmlDecl += i);
              continue;
            case v.DOCTYPE:
              ">" === i
                ? ((n.state = v.TEXT),
                  O(n, "ondoctype", n.doctype),
                  (n.doctype = !0))
                : ((n.doctype += i),
                  "[" === i
                    ? (n.state = v.DOCTYPE_DTD)
                    : _(i) && ((n.state = v.DOCTYPE_QUOTED), (n.q = i)));
              continue;
            case v.DOCTYPE_QUOTED:
              (n.doctype += i),
                i === n.q && ((n.q = ""), (n.state = v.DOCTYPE));
              continue;
            case v.DOCTYPE_DTD:
              "]" === i
                ? ((n.doctype += i), (n.state = v.DOCTYPE))
                : "<" === i
                  ? ((n.state = v.OPEN_WAKA), (n.startTagPosition = n.position))
                  : _(i)
                    ? ((n.doctype += i),
                      (n.state = v.DOCTYPE_DTD_QUOTED),
                      (n.q = i))
                    : (n.doctype += i);
              continue;
            case v.DOCTYPE_DTD_QUOTED:
              (n.doctype += i),
                i === n.q && ((n.state = v.DOCTYPE_DTD), (n.q = ""));
              continue;
            case v.COMMENT:
              "-" === i ? (n.state = v.COMMENT_ENDING) : (n.comment += i);
              continue;
            case v.COMMENT_ENDING:
              "-" === i
                ? ((n.state = v.COMMENT_ENDED),
                  (n.comment = k(n.opt, n.comment)),
                  n.comment && O(n, "oncomment", n.comment),
                  (n.comment = ""))
                : ((n.comment += "-" + i), (n.state = v.COMMENT));
              continue;
            case v.COMMENT_ENDED:
              ">" !== i
                ? (x(n, "Malformed comment"),
                  (n.comment += "--" + i),
                  (n.state = v.COMMENT))
                : n.doctype && !0 !== n.doctype
                  ? (n.state = v.DOCTYPE_DTD)
                  : (n.state = v.TEXT);
              continue;
            case v.CDATA:
              for (s = o - 1; i && "]" !== i; )
                (i = H(t, o++)) &&
                  n.trackPosition &&
                  (n.position++,
                  "\n" === i ? (n.line++, (n.column = 0)) : n.column++);
              (n.cdata += t.substring(s, o - 1)),
                "]" === i && (n.state = v.CDATA_ENDING);
              continue;
            case v.CDATA_ENDING:
              "]" === i
                ? (n.state = v.CDATA_ENDING_2)
                : ((n.cdata += "]" + i), (n.state = v.CDATA));
              continue;
            case v.CDATA_ENDING_2:
              ">" === i
                ? (n.cdata && O(n, "oncdata", n.cdata),
                  O(n, "onclosecdata"),
                  (n.cdata = ""),
                  (n.state = v.TEXT))
                : "]" === i
                  ? (n.cdata += "]")
                  : ((n.cdata += "]]" + i), (n.state = v.CDATA));
              continue;
            case v.PROC_INST:
              "?" === i
                ? (n.state = v.PROC_INST_ENDING)
                : m(i)
                  ? (n.state = v.PROC_INST_BODY)
                  : (n.procInstName += i);
              continue;
            case v.PROC_INST_BODY:
              if (!n.procInstBody && m(i)) continue;
              "?" === i
                ? (n.state = v.PROC_INST_ENDING)
                : (n.procInstBody += i);
              continue;
            case v.PROC_INST_ENDING:
              if (">" === i) {
                const e = {
                  name: n.procInstName,
                  body: n.procInstBody,
                };
                C(n, e),
                  O(n, "onprocessinginstruction", e),
                  (n.procInstName = n.procInstBody = ""),
                  (n.state = v.TEXT);
              } else (n.procInstBody += "?" + i), (n.state = v.PROC_INST_BODY);
              continue;
            case v.OPEN_TAG:
              E(f, i)
                ? (n.tagName += i)
                : (M(n),
                  ">" === i
                    ? B(n)
                    : "/" === i
                      ? (n.state = v.OPEN_TAG_SLASH)
                      : (m(i) || x(n, "Invalid character in tag name"),
                        (n.state = v.ATTRIB)));
              continue;
            case v.OPEN_TAG_SLASH:
              ">" === i
                ? (B(n, !0), G(n))
                : (x(n, "Forward-slash in opening tag not followed by >"),
                  (n.state = v.ATTRIB));
              continue;
            case v.ATTRIB:
              if (m(i)) continue;
              ">" === i
                ? B(n)
                : "/" === i
                  ? (n.state = v.OPEN_TAG_SLASH)
                  : E(p, i)
                    ? ((n.attribName = i),
                      (n.attribValue = ""),
                      (n.state = v.ATTRIB_NAME))
                    : x(n, "Invalid attribute name");
              continue;
            case v.ATTRIB_NAME:
              "=" === i
                ? (n.state = v.ATTRIB_VALUE)
                : ">" === i
                  ? (x(n, "Attribute without value"),
                    (n.attribValue = n.attribName),
                    U(n),
                    B(n))
                  : m(i)
                    ? (n.state = v.ATTRIB_NAME_SAW_WHITE)
                    : E(f, i)
                      ? (n.attribName += i)
                      : x(n, "Invalid attribute name");
              continue;
            case v.ATTRIB_NAME_SAW_WHITE:
              if ("=" === i) n.state = v.ATTRIB_VALUE;
              else {
                if (m(i)) continue;
                x(n, "Attribute without value"),
                  (n.tag.attributes[n.attribName] = ""),
                  (n.attribValue = ""),
                  O(n, "onattribute", {
                    name: n.attribName,
                    value: "",
                  }),
                  (n.attribName = ""),
                  ">" === i
                    ? B(n)
                    : E(p, i)
                      ? ((n.attribName = i), (n.state = v.ATTRIB_NAME))
                      : (x(n, "Invalid attribute name"), (n.state = v.ATTRIB));
              }
              continue;
            case v.ATTRIB_VALUE:
              if (m(i)) continue;
              _(i)
                ? ((n.q = i), (n.state = v.ATTRIB_VALUE_QUOTED))
                : (n.opt.unquotedAttributeValues ||
                    P(n, "Unquoted attribute value"),
                  (n.state = v.ATTRIB_VALUE_UNQUOTED),
                  (n.attribValue = i));
              continue;
            case v.ATTRIB_VALUE_QUOTED:
              if (i !== n.q) {
                "&" === i
                  ? (n.state = v.ATTRIB_VALUE_ENTITY_Q)
                  : (n.attribValue += i);
                continue;
              }
              U(n), (n.q = ""), (n.state = v.ATTRIB_VALUE_CLOSED);
              continue;
            case v.ATTRIB_VALUE_CLOSED:
              m(i)
                ? (n.state = v.ATTRIB)
                : ">" === i
                  ? B(n)
                  : "/" === i
                    ? (n.state = v.OPEN_TAG_SLASH)
                    : E(p, i)
                      ? (x(n, "No whitespace between attributes"),
                        (n.attribName = i),
                        (n.attribValue = ""),
                        (n.state = v.ATTRIB_NAME))
                      : x(n, "Invalid attribute name");
              continue;
            case v.ATTRIB_VALUE_UNQUOTED:
              if (!S(i)) {
                "&" === i
                  ? (n.state = v.ATTRIB_VALUE_ENTITY_U)
                  : (n.attribValue += i);
                continue;
              }
              U(n), ">" === i ? B(n) : (n.state = v.ATTRIB);
              continue;
            case v.CLOSE_TAG:
              if (n.tagName)
                ">" === i
                  ? G(n)
                  : E(f, i)
                    ? (n.tagName += i)
                    : n.script
                      ? ((n.script += "</" + n.tagName + i),
                        (n.tagName = ""),
                        (n.state = v.SCRIPT))
                      : (m(i) || x(n, "Invalid tagname in closing tag"),
                        (n.state = v.CLOSE_TAG_SAW_WHITE));
              else {
                if (m(i)) continue;
                y(p, i)
                  ? n.script
                    ? ((n.script += "</" + i), (n.state = v.SCRIPT))
                    : x(n, "Invalid tagname in closing tag.")
                  : (n.tagName = i);
              }
              continue;
            case v.CLOSE_TAG_SAW_WHITE:
              if (m(i)) continue;
              ">" === i ? G(n) : x(n, "Invalid characters in closing tag");
              continue;
            case v.TEXT_ENTITY:
            case v.ATTRIB_VALUE_ENTITY_Q:
            case v.ATTRIB_VALUE_ENTITY_U:
              var l, d;
              switch (n.state) {
                case v.TEXT_ENTITY:
                  (l = v.TEXT), (d = "textNode");
                  break;
                case v.ATTRIB_VALUE_ENTITY_Q:
                  (l = v.ATTRIB_VALUE_QUOTED), (d = "attribValue");
                  break;
                case v.ATTRIB_VALUE_ENTITY_U:
                  (l = v.ATTRIB_VALUE_UNQUOTED), (d = "attribValue");
              }
              if (";" === i) {
                var T = F(n);
                n.opt.unparsedEntities &&
                !Object.values(e.XML_ENTITIES).includes(T)
                  ? ((n.entityCount += 1) > n.opt.maxEntityCount &&
                      P(n, "Parsed entity count exceeds max entity count"),
                    (n.entityDepth += 1) > n.opt.maxEntityDepth &&
                      P(n, "Parsed entity depth exceeds max entity depth"),
                    (n.entity = ""),
                    (n.state = l),
                    n.write(T),
                    (n.entityDepth -= 1))
                  : ((n[d] += T), (n.entity = ""), (n.state = l));
              } else
                E(n.entity.length ? g : h, i)
                  ? (n.entity += i)
                  : (x(n, "Invalid character in entity name"),
                    (n[d] += "&" + n.entity + i),
                    (n.entity = ""),
                    (n.state = l));
              continue;
            default:
              throw new Error(n, "Unknown state: " + n.state);
          }
        return (
          n.position >= n.bufferCheckPosition &&
            (function (t) {
              for (
                var n = Math.max(e.MAX_BUFFER_LENGTH, 10),
                  o = 0,
                  i = 0,
                  s = r.length;
                i < s;
                i++
              ) {
                var a = t[r[i]].length;
                if (a > n)
                  switch (r[i]) {
                    case "textNode":
                      w(t);
                      break;
                    case "cdata":
                      O(t, "oncdata", t.cdata), (t.cdata = "");
                      break;
                    case "script":
                      O(t, "onscript", t.script), (t.script = "");
                      break;
                    default:
                      P(t, "Max buffer length exceeded: " + r[i]);
                  }
                o = Math.max(o, a);
              }
              var c = e.MAX_BUFFER_LENGTH - o;
              t.bufferCheckPosition = c + t.position;
            })(n),
          n
        );
      },
      resume: function () {
        return (this.error = null), this;
      },
      close: function () {
        return this.write(null);
      },
      flush: function () {
        var e;
        w((e = this)),
          "" !== e.cdata && (O(e, "oncdata", e.cdata), (e.cdata = "")),
          "" !== e.script && (O(e, "onscript", e.script), (e.script = ""));
      },
    });
  try {
    t = n(2203 /* external/stream */).Stream;
  } catch (e) {
    t = function () {};
  }
  t || (t = function () {});
  var i = e.EVENTS.filter(function (e) {
    return "error" !== e && "end" !== e;
  });
  function s(e, n) {
    if (!(this instanceof s)) return new s(e, n);
    t.apply(this),
      (this._parser = new o(e, n)),
      (this.writable = !0),
      (this.readable = !0);
    var r = this;
    (this._parser.onend = function () {
      r.emit("end");
    }),
      (this._parser.onerror = function (e) {
        r.emit("error", e), (r._parser.error = null);
      }),
      (this._decoder = null),
      (this._decoderBuffer = null),
      i.forEach(function (e) {
        Object.defineProperty(r, "on" + e, {
          get: function () {
            return r._parser["on" + e];
          },
          set: function (t) {
            if (!t)
              return r.removeAllListeners(e), (r._parser["on" + e] = t), t;
            r.on(e, t);
          },
          enumerable: !0,
          configurable: !1,
        });
      });
  }
  (s.prototype = Object.create(t.prototype, {
    constructor: { value: s },
  })),
    (s.prototype._decodeBuffer = function (e, t) {
      if (
        (this._decoderBuffer &&
          ((e = Buffer.concat([this._decoderBuffer, e])),
          (this._decoderBuffer = null)),
        !this._decoder)
      ) {
        var n = (function (e, t) {
          if (e.length >= 2) {
            if (255 === e[0] && 254 === e[1]) return "utf-16le";
            if (254 === e[0] && 255 === e[1]) return "utf-16be";
          }
          return e.length >= 3 && 239 === e[0] && 187 === e[1] && 191 === e[2]
            ? "utf8"
            : e.length >= 4
              ? 60 === e[0] && 0 === e[1] && 63 === e[2] && 0 === e[3]
                ? "utf-16le"
                : 0 === e[0] && 60 === e[1] && 0 === e[2] && 63 === e[3]
                  ? "utf-16be"
                  : "utf8"
              : t
                ? "utf8"
                : null;
        })(e, t);
        if (!n) return (this._decoderBuffer = e), "";
        (this._parser.encoding = n), (this._decoder = new TextDecoder(n));
      }
      return this._decoder.decode(e, { stream: !t });
    }),
    (s.prototype.write = function (e) {
      if (
        "function" == typeof Buffer &&
        "function" == typeof Buffer.isBuffer &&
        Buffer.isBuffer(e)
      )
        e = this._decodeBuffer(e, !1);
      else if (this._decoderBuffer) {
        var t = this._decodeBuffer(Buffer.alloc(0), !0);
        t && (this._parser.write(t), this.emit("data", t));
      }
      return this._parser.write(e.toString()), this.emit("data", e), !0;
    }),
    (s.prototype.end = function (e) {
      if ((e && e.length && this.write(e), this._decoderBuffer)) {
        var t = this._decodeBuffer(Buffer.alloc(0), !0);
        t && (this._parser.write(t), this.emit("data", t));
      } else if (this._decoder) {
        var n = this._decoder.decode();
        n && (this._parser.write(n), this.emit("data", n));
      }
      return this._parser.end(), !0;
    }),
    (s.prototype.on = function (e, n) {
      var r = this;
      return (
        r._parser["on" + e] ||
          -1 === i.indexOf(e) ||
          (r._parser["on" + e] = function () {
            var t =
              1 === arguments.length
                ? [arguments[0]]
                : Array.apply(null, arguments);
            t.splice(0, 0, e), r.emit.apply(r, t);
          }),
        t.prototype.on.call(r, e, n)
      );
    });
  var a = /^\[CDATA\[$/i,
    c = /^DOCTYPE$/i,
    u = "http://www.w3.org/XML/1998/namespace",
    l = "http://www.w3.org/2000/xmlns/",
    d = { xml: u, xmlns: l },
    p =
      /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    f =
      /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
    h =
      /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    g =
      /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  function m(e) {
    return " " === e || "\n" === e || "\r" === e || "\t" === e;
  }
  function _(e) {
    return '"' === e || "'" === e;
  }
  function S(e) {
    return ">" === e || m(e);
  }
  function E(e, t) {
    return e.test(t);
  }
  function y(e, t) {
    return !E(e, t);
  }
  var T,
    b,
    I,
    v = 0;
  for (var A in ((e.STATE = {
    BEGIN: v++,
    BEGIN_WHITESPACE: v++,
    TEXT: v++,
    TEXT_ENTITY: v++,
    OPEN_WAKA: v++,
    SGML_DECL: v++,
    SGML_DECL_QUOTED: v++,
    DOCTYPE: v++,
    DOCTYPE_QUOTED: v++,
    DOCTYPE_DTD: v++,
    DOCTYPE_DTD_QUOTED: v++,
    COMMENT_STARTING: v++,
    COMMENT: v++,
    COMMENT_ENDING: v++,
    COMMENT_ENDED: v++,
    CDATA: v++,
    CDATA_ENDING: v++,
    CDATA_ENDING_2: v++,
    PROC_INST: v++,
    PROC_INST_BODY: v++,
    PROC_INST_ENDING: v++,
    OPEN_TAG: v++,
    OPEN_TAG_SLASH: v++,
    ATTRIB: v++,
    ATTRIB_NAME: v++,
    ATTRIB_NAME_SAW_WHITE: v++,
    ATTRIB_VALUE: v++,
    ATTRIB_VALUE_QUOTED: v++,
    ATTRIB_VALUE_CLOSED: v++,
    ATTRIB_VALUE_UNQUOTED: v++,
    ATTRIB_VALUE_ENTITY_Q: v++,
    ATTRIB_VALUE_ENTITY_U: v++,
    CLOSE_TAG: v++,
    CLOSE_TAG_SAW_WHITE: v++,
    SCRIPT: v++,
    SCRIPT_ENDING: v++,
  }),
  (e.XML_ENTITIES = Object.assign(Object.create(null), {
    amp: "&",
    gt: ">",
    lt: "<",
    quot: '"',
    apos: "'",
  })),
  (e.ENTITIES = Object.assign(Object.create(null), {
    amp: "&",
    gt: ">",
    lt: "<",
    quot: '"',
    apos: "'",
    AElig: 198,
    Aacute: 193,
    Acirc: 194,
    Agrave: 192,
    Aring: 197,
    Atilde: 195,
    Auml: 196,
    Ccedil: 199,
    ETH: 208,
    Eacute: 201,
    Ecirc: 202,
    Egrave: 200,
    Euml: 203,
    Iacute: 205,
    Icirc: 206,
    Igrave: 204,
    Iuml: 207,
    Ntilde: 209,
    Oacute: 211,
    Ocirc: 212,
    Ograve: 210,
    Oslash: 216,
    Otilde: 213,
    Ouml: 214,
    THORN: 222,
    Uacute: 218,
    Ucirc: 219,
    Ugrave: 217,
    Uuml: 220,
    Yacute: 221,
    aacute: 225,
    acirc: 226,
    aelig: 230,
    agrave: 224,
    aring: 229,
    atilde: 227,
    auml: 228,
    ccedil: 231,
    eacute: 233,
    ecirc: 234,
    egrave: 232,
    eth: 240,
    euml: 235,
    iacute: 237,
    icirc: 238,
    igrave: 236,
    iuml: 239,
    ntilde: 241,
    oacute: 243,
    ocirc: 244,
    ograve: 242,
    oslash: 248,
    otilde: 245,
    ouml: 246,
    szlig: 223,
    thorn: 254,
    uacute: 250,
    ucirc: 251,
    ugrave: 249,
    uuml: 252,
    yacute: 253,
    yuml: 255,
    copy: 169,
    reg: 174,
    nbsp: 160,
    iexcl: 161,
    cent: 162,
    pound: 163,
    curren: 164,
    yen: 165,
    brvbar: 166,
    sect: 167,
    uml: 168,
    ordf: 170,
    laquo: 171,
    not: 172,
    shy: 173,
    macr: 175,
    deg: 176,
    plusmn: 177,
    sup1: 185,
    sup2: 178,
    sup3: 179,
    acute: 180,
    micro: 181,
    para: 182,
    middot: 183,
    cedil: 184,
    ordm: 186,
    raquo: 187,
    frac14: 188,
    frac12: 189,
    frac34: 190,
    iquest: 191,
    times: 215,
    divide: 247,
    OElig: 338,
    oelig: 339,
    Scaron: 352,
    scaron: 353,
    Yuml: 376,
    fnof: 402,
    circ: 710,
    tilde: 732,
    Alpha: 913,
    Beta: 914,
    Gamma: 915,
    Delta: 916,
    Epsilon: 917,
    Zeta: 918,
    Eta: 919,
    Theta: 920,
    Iota: 921,
    Kappa: 922,
    Lambda: 923,
    Mu: 924,
    Nu: 925,
    Xi: 926,
    Omicron: 927,
    Pi: 928,
    Rho: 929,
    Sigma: 931,
    Tau: 932,
    Upsilon: 933,
    Phi: 934,
    Chi: 935,
    Psi: 936,
    Omega: 937,
    alpha: 945,
    beta: 946,
    gamma: 947,
    delta: 948,
    epsilon: 949,
    zeta: 950,
    eta: 951,
    theta: 952,
    iota: 953,
    kappa: 954,
    lambda: 955,
    mu: 956,
    nu: 957,
    xi: 958,
    omicron: 959,
    pi: 960,
    rho: 961,
    sigmaf: 962,
    sigma: 963,
    tau: 964,
    upsilon: 965,
    phi: 966,
    chi: 967,
    psi: 968,
    omega: 969,
    thetasym: 977,
    upsih: 978,
    piv: 982,
    ensp: 8194,
    emsp: 8195,
    thinsp: 8201,
    zwnj: 8204,
    zwj: 8205,
    lrm: 8206,
    rlm: 8207,
    ndash: 8211,
    mdash: 8212,
    lsquo: 8216,
    rsquo: 8217,
    sbquo: 8218,
    ldquo: 8220,
    rdquo: 8221,
    bdquo: 8222,
    dagger: 8224,
    Dagger: 8225,
    bull: 8226,
    hellip: 8230,
    permil: 8240,
    prime: 8242,
    Prime: 8243,
    lsaquo: 8249,
    rsaquo: 8250,
    oline: 8254,
    frasl: 8260,
    euro: 8364,
    image: 8465,
    weierp: 8472,
    real: 8476,
    trade: 8482,
    alefsym: 8501,
    larr: 8592,
    uarr: 8593,
    rarr: 8594,
    darr: 8595,
    harr: 8596,
    crarr: 8629,
    lArr: 8656,
    uArr: 8657,
    rArr: 8658,
    dArr: 8659,
    hArr: 8660,
    forall: 8704,
    part: 8706,
    exist: 8707,
    empty: 8709,
    nabla: 8711,
    isin: 8712,
    notin: 8713,
    ni: 8715,
    prod: 8719,
    sum: 8721,
    minus: 8722,
    lowast: 8727,
    radic: 8730,
    prop: 8733,
    infin: 8734,
    ang: 8736,
    and: 8743,
    or: 8744,
    cap: 8745,
    cup: 8746,
    int: 8747,
    there4: 8756,
    sim: 8764,
    cong: 8773,
    asymp: 8776,
    ne: 8800,
    equiv: 8801,
    le: 8804,
    ge: 8805,
    sub: 8834,
    sup: 8835,
    nsub: 8836,
    sube: 8838,
    supe: 8839,
    oplus: 8853,
    otimes: 8855,
    perp: 8869,
    sdot: 8901,
    lceil: 8968,
    rceil: 8969,
    lfloor: 8970,
    rfloor: 8971,
    lang: 9001,
    rang: 9002,
    loz: 9674,
    spades: 9824,
    clubs: 9827,
    hearts: 9829,
    diams: 9830,
  })),
  Object.keys(e.ENTITIES).forEach(function (t) {
    var n = e.ENTITIES[t],
      r = "number" == typeof n ? String.fromCharCode(n) : n;
    e.ENTITIES[t] = r;
  }),
  e.STATE))
    e.STATE[e.STATE[A]] = A;
  function N(e, t, n) {
    e[t] && e[t](n);
  }
  function R(e) {
    return e ? e.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
  }
  function C(e, t) {
    if (e.strict && e.encoding && t && "xml" === t.name) {
      var n,
        r,
        o = (r =
          (n = t.body) && n.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i))
          ? r[2]
          : null;
      o &&
        !(function (e, t) {
          const n = R(e),
            r = R(t);
          return (
            !n ||
            !r ||
            ("utf16" === r ? "utf16le" === n || "utf16be" === n : n === r)
          );
        })(e.encoding, o) &&
        x(
          e,
          "XML declaration encoding " +
            o +
            " does not match detected stream encoding " +
            e.encoding.toUpperCase(),
        );
    }
  }
  function O(e, t, n) {
    e.textNode && w(e), N(e, t, n);
  }
  function w(e) {
    (e.textNode = k(e.opt, e.textNode)),
      e.textNode && N(e, "ontext", e.textNode),
      (e.textNode = "");
  }
  function k(e, t) {
    return (
      e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
    );
  }
  function P(e, t) {
    return (
      w(e),
      e.trackPosition &&
        (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c),
      (t = new Error(t)),
      (e.error = t),
      N(e, "onerror", t),
      e
    );
  }
  function L(e) {
    return (
      e.sawRoot && !e.closedRoot && x(e, "Unclosed root tag"),
      e.state !== v.BEGIN &&
        e.state !== v.BEGIN_WHITESPACE &&
        e.state !== v.TEXT &&
        P(e, "Unexpected end"),
      w(e),
      (e.c = ""),
      (e.closed = !0),
      N(e, "onend"),
      o.call(e, e.strict, e.opt),
      e
    );
  }
  function x(e, t) {
    if ("object" != typeof e || !(e instanceof o))
      throw new Error("bad call to strictFail");
    e.strict && P(e, t);
  }
  function M(e) {
    e.strict || (e.tagName = e.tagName[e.looseCase]());
    var t = e.tags[e.tags.length - 1] || e,
      n = (e.tag = { name: e.tagName, attributes: {} });
    e.opt.xmlns && (n.ns = t.ns),
      (e.attribList.length = 0),
      O(e, "onopentagstart", n);
  }
  function D(e, t) {
    var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
      r = n[0],
      o = n[1];
    return (
      t && "xmlns" === e && ((r = "xmlns"), (o = "")), { prefix: r, local: o }
    );
  }
  function U(e) {
    if (
      (e.strict || (e.attribName = e.attribName[e.looseCase]()),
      -1 !== e.attribList.indexOf(e.attribName) ||
        e.tag.attributes.hasOwnProperty(e.attribName))
    )
      e.attribName = e.attribValue = "";
    else {
      if (e.opt.xmlns) {
        var t = D(e.attribName, !0),
          n = t.prefix,
          r = t.local;
        if ("xmlns" === n)
          if ("xml" === r && e.attribValue !== u)
            x(
              e,
              "xml: prefix must be bound to " +
                u +
                "\nActual: " +
                e.attribValue,
            );
          else if ("xmlns" === r && e.attribValue !== l)
            x(
              e,
              "xmlns: prefix must be bound to " +
                l +
                "\nActual: " +
                e.attribValue,
            );
          else {
            var o = e.tag,
              i = e.tags[e.tags.length - 1] || e;
            o.ns === i.ns && (o.ns = Object.create(i.ns)),
              (o.ns[r] = e.attribValue);
          }
        e.attribList.push([e.attribName, e.attribValue]);
      } else
        (e.tag.attributes[e.attribName] = e.attribValue),
          O(e, "onattribute", {
            name: e.attribName,
            value: e.attribValue,
          });
      e.attribName = e.attribValue = "";
    }
  }
  function B(e, t) {
    if (e.opt.xmlns) {
      var n = e.tag,
        r = D(e.tagName);
      (n.prefix = r.prefix),
        (n.local = r.local),
        (n.uri = n.ns[r.prefix] || ""),
        n.prefix &&
          !n.uri &&
          (x(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)),
          (n.uri = r.prefix));
      var o = e.tags[e.tags.length - 1] || e;
      n.ns &&
        o.ns !== n.ns &&
        Object.keys(n.ns).forEach(function (t) {
          O(e, "onopennamespace", { prefix: t, uri: n.ns[t] });
        });
      for (var i = 0, s = e.attribList.length; i < s; i++) {
        var a = e.attribList[i],
          c = a[0],
          u = a[1],
          l = D(c, !0),
          d = l.prefix,
          p = l.local,
          f = "" === d ? "" : n.ns[d] || "",
          h = { name: c, value: u, prefix: d, local: p, uri: f };
        d &&
          "xmlns" !== d &&
          !f &&
          (x(e, "Unbound namespace prefix: " + JSON.stringify(d)), (h.uri = d)),
          (e.tag.attributes[c] = h),
          O(e, "onattribute", h);
      }
      e.attribList.length = 0;
    }
    (e.tag.isSelfClosing = !!t),
      (e.sawRoot = !0),
      e.tags.push(e.tag),
      O(e, "onopentag", e.tag),
      t ||
        (e.noscript || "script" !== e.tagName.toLowerCase()
          ? (e.state = v.TEXT)
          : (e.state = v.SCRIPT),
        (e.tag = null),
        (e.tagName = "")),
      (e.attribName = e.attribValue = ""),
      (e.attribList.length = 0);
  }
  function G(e) {
    if (!e.tagName)
      return (
        x(e, "Weird empty close tag."),
        (e.textNode += "</>"),
        void (e.state = v.TEXT)
      );
    if (e.script) {
      if ("script" !== e.tagName)
        return (
          (e.script += "</" + e.tagName + ">"),
          (e.tagName = ""),
          void (e.state = v.SCRIPT)
        );
      O(e, "onscript", e.script), (e.script = "");
    }
    var t = e.tags.length,
      n = e.tagName;
    e.strict || (n = n[e.looseCase]());
    for (var r = n; t-- && e.tags[t].name !== r; ) x(e, "Unexpected close tag");
    if (t < 0)
      return (
        x(e, "Unmatched closing tag: " + e.tagName),
        (e.textNode += "</" + e.tagName + ">"),
        void (e.state = v.TEXT)
      );
    e.tagName = n;
    for (var o = e.tags.length; o-- > t; ) {
      var i = (e.tag = e.tags.pop());
      (e.tagName = e.tag.name), O(e, "onclosetag", e.tagName);
      var s = {};
      for (var a in i.ns) s[a] = i.ns[a];
      var c = e.tags[e.tags.length - 1] || e;
      e.opt.xmlns &&
        i.ns !== c.ns &&
        Object.keys(i.ns).forEach(function (t) {
          var n = i.ns[t];
          O(e, "onclosenamespace", { prefix: t, uri: n });
        });
    }
    0 === t && (e.closedRoot = !0),
      (e.tagName = e.attribValue = e.attribName = ""),
      (e.attribList.length = 0),
      (e.state = v.TEXT);
  }
  function F(e) {
    var t,
      n = e.entity,
      r = n.toLowerCase(),
      o = "";
    return e.ENTITIES[n]
      ? e.ENTITIES[n]
      : e.ENTITIES[r]
        ? e.ENTITIES[r]
        : ("#" === (n = r).charAt(0) &&
            ("x" === n.charAt(1)
              ? ((n = n.slice(2)), (o = (t = parseInt(n, 16)).toString(16)))
              : ((n = n.slice(1)), (o = (t = parseInt(n, 10)).toString(10)))),
          (n = n.replace(/^0+/, "")),
          isNaN(t) ||
          o.toLowerCase() !== n ||
          t < 0 ||
          t > 1114111 ||
          !(function (e) {
            return (
              9 === e ||
              10 === e ||
              13 === e ||
              (e >= 32 && e <= 55295) ||
              (e >= 57344 && e <= 65533) ||
              (e >= 65536 && e <= 1114111)
            );
          })(t)
            ? (x(e, "Invalid character entity"), "&" + e.entity + ";")
            : String.fromCodePoint(t));
  }
  function j(e, t) {
    "<" === t
      ? ((e.state = v.OPEN_WAKA), (e.startTagPosition = e.position))
      : m(t) ||
        (x(e, "Non-whitespace before first tag."),
        (e.textNode = t),
        (e.state = v.TEXT));
  }
  function H(e, t) {
    var n = "";
    return t < e.length && (n = e.charAt(t)), n;
  }
  (v = e.STATE),
    String.fromCodePoint ||
      ((T = String.fromCharCode),
      (b = Math.floor),
      (I = function () {
        var e,
          t,
          n = [],
          r = -1,
          o = arguments.length;
        if (!o) return "";
        for (var i = ""; ++r < o; ) {
          var s = Number(arguments[r]);
          if (!isFinite(s) || s < 0 || s > 1114111 || b(s) !== s)
            throw RangeError("Invalid code point: " + s);
          s <= 65535
            ? n.push(s)
            : ((e = 55296 + ((s -= 65536) >> 10)),
              (t = (s % 1024) + 56320),
              n.push(e, t)),
            (r + 1 === o || n.length > 16384) &&
              ((i += T.apply(null, n)), (n.length = 0));
        }
        return i;
      }),
      Object.defineProperty
        ? Object.defineProperty(String, "fromCodePoint", {
            value: I,
            configurable: !0,
            writable: !0,
          })
        : (String.fromCodePoint = I));
})(t);
