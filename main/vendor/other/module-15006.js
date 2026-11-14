// vendor/other/module-15006.js — webpack module 15006
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
var n = ((e) => (
    (e.QUERY = "query"),
    (e.MUTATION = "mutation"),
    (e.SUBSCRIPTION = "subscription"),
    e
  ))(n || {}),
  r = ((e) => (
    (e.SOF = "<SOF>"),
    (e.EOF = "<EOF>"),
    (e.BANG = "!"),
    (e.DOLLAR = "$"),
    (e.AMP = "&"),
    (e.PAREN_L = "("),
    (e.PAREN_R = ")"),
    (e.SPREAD = "..."),
    (e.COLON = ":"),
    (e.EQUALS = "="),
    (e.AT = "@"),
    (e.BRACKET_L = "["),
    (e.BRACKET_R = "]"),
    (e.BRACE_L = "{"),
    (e.PIPE = "|"),
    (e.BRACE_R = "}"),
    (e.NAME = "Name"),
    (e.INT = "Int"),
    (e.FLOAT = "Float"),
    (e.STRING = "String"),
    (e.BLOCK_STRING = "BlockString"),
    (e.COMMENT = "Comment"),
    e
  ))(r || {}),
  o = ((e) => (
    (e.EXECUTE = "graphql.execute"),
    (e.PARSE = "graphql.parse"),
    (e.RESOLVE = "graphql.resolve"),
    (e.VALIDATE = "graphql.validate"),
    (e.SCHEMA_VALIDATE = "graphql.validateSchema"),
    (e.SCHEMA_PARSE = "graphql.parseSchema"),
    e
  ))(o || {});
(t.AllowedOperationTypes = n), (t.SpanNames = o), (t.TokenKind = r);
