// vendor/module-42051.js — webpack module 42051
// params: (e, r, a) = (module, exports, require)
a.d(r, { diagram: () => m });
var t = a(4070 /* vendor/module-4070 */),
  n = a(26637 /* vendor/module-26637 */),
  l =
    (a(56496 /* vendor/module-56496 */),
    a(8679 /* vendor/module-8679 */),
    a(27166 /* vendor/module-27166 */)),
  s = a(79456 /* vendor/module-79456 */),
  i = a(73744 /* vendor/module-73744 */),
  p = (0, i.lz)().Railroad.parser.LangiumParser,
  o = (0, s.K)((e) => {
    switch (e.$type) {
      case "RailroadTerminalExpr":
        return { type: "terminal", value: e.value };
      case "RailroadNonTerminalExpr":
        return { type: "nonterminal", name: e.name };
      case "RailroadSpecialExpr":
        return { type: "special", text: e.text };
      case "RailroadSequenceExpr": {
        const r = e.elements.map(o);
        return 1 === r.length ? r[0] : { type: "sequence", elements: r };
      }
      case "RailroadChoiceExpr": {
        const r = e.alternatives.map(o);
        return 1 === r.length ? r[0] : { type: "choice", alternatives: r };
      }
      case "RailroadOptionalExpr":
        return { type: "optional", element: o(e.element) };
      case "RailroadOneOrMoreExpr":
        return {
          type: "repetition",
          element: o(e.element),
          min: 1,
          max: 1 / 0,
        };
      case "RailroadZeroOrMoreExpr":
        return {
          type: "repetition",
          element: o(e.element),
          min: 0,
          max: 1 / 0,
        };
      default:
        throw new Error(`Unsupported railroad expression: ${e.$type}`);
    }
  }, "transformExpression"),
  d = (0, s.K)(
    (e) => ({ name: e.name, definition: o(e.definition) }),
    "transformRule",
  ),
  u = (0, s.K)((e) => {
    (0, n.S)(e, t.db),
      e.title && t.db.setTitle(e.title),
      e.rules.map((e) => t.db.addRule(d(e)));
  }, "populateDb"),
  m = {
    parser: {
      parse: (0, s.K)((e) => {
        t.db.clear(), l.R.debug("[Railroad Parser] Starting Langium parse");
        const r = p.parse(e);
        if (r.lexerErrors.length > 0 || r.parserErrors.length > 0)
          throw new i.zg(r);
        const a = r.value;
        l.R.debug("[Railroad Parser] Parsed rules:", a.rules.length),
          u(a),
          l.R.debug("[Railroad Parser] Parse complete");
      }, "parse"),
      parser: { yy: t.db },
    },
    db: t.db,
    renderer: t.U,
    styles: t.$,
  };
