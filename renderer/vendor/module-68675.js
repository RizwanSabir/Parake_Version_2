// vendor/module-68675.js — webpack module 68675
// params: (e, r, t) = (module, exports, require)
t.d(r, { diagram: () => y });
var n = t(4070 /* vendor/module-4070 */),
  a = t(26637 /* vendor/module-26637 */),
  s =
    (t(56496 /* vendor/module-56496 */),
    t(8679 /* vendor/module-8679 */),
    t(27166 /* vendor/module-27166 */)),
  p = t(79456 /* vendor/module-79456 */),
  l = t(73744 /* vendor/module-73744 */),
  i = (0, l.sB)().RailroadAbnf.parser.LangiumParser,
  o = (0, p.K)((e) => {
    const r = e.alternatives.map(m);
    return 1 === r.length ? r[0] : { type: "choice", alternatives: r };
  }, "transformAlternation"),
  m = (0, p.K)((e) => {
    const r = e.elements.map(d);
    return 1 === r.length ? r[0] : { type: "sequence", elements: r };
  }, "transformConcatenation"),
  u = (0, p.K)((e) => {
    if (e.includes("*")) {
      const [r, t] = e.split("*");
      return {
        min: r ? parseInt(r, 10) : 0,
        max: t ? parseInt(t, 10) : 1 / 0,
      };
    }
    const r = parseInt(e, 10);
    return { min: r, max: r };
  }, "parseRepeat"),
  d = (0, p.K)((e) => {
    const r = c(e.primary);
    if (!e.repeat) return r;
    const { min: t, max: n } = u(e.repeat);
    return 0 === t && 1 === n
      ? { type: "optional", element: r }
      : { type: "repetition", element: r, min: t, max: n };
  }, "transformElement"),
  c = (0, p.K)((e) => {
    switch (e.$type) {
      case "AbnfStringLiteral":
      case "AbnfNumVal":
        return { type: "terminal", value: e.value };
      case "AbnfRuleName":
        return { type: "nonterminal", name: e.name };
      case "AbnfGroup":
        return o(e.element);
      case "AbnfOptionalGroup":
        return { type: "optional", element: o(e.element) };
      default:
        throw new Error(`Unsupported ABNF primary node: ${e.$type}`);
    }
  }, "transformPrimary"),
  b = (0, p.K)(
    (e) => ({ name: e.name, definition: o(e.definition) }),
    "transformRule",
  ),
  f = (0, p.K)((e) => {
    (0, a.S)(e, n.db),
      e.title && n.db.setTitle(e.title),
      e.rules.map((e) => n.db.addRule(b(e)));
  }, "populateDb"),
  y = {
    parser: {
      parse: (0, p.K)((e) => {
        n.db.clear(), s.R.debug("[ABNF Parser] Starting Langium parse");
        const r = i.parse(e);
        if (r.lexerErrors.length > 0 || r.parserErrors.length > 0)
          throw new l.zg(r);
        const t = r.value;
        s.R.debug("[ABNF Parser] Parsed rules:", t.rules.length),
          f(t),
          s.R.debug("[ABNF Parser] Parse complete");
      }, "parse"),
      parser: { yy: n.db },
    },
    db: n.db,
    renderer: n.U,
    styles: n.$,
  };
