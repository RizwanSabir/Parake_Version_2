// vendor/module-73744.js — webpack module 73744
// params: (e, t, r) = (module, exports, require)
r.d(t, {
  F5: () => o.F5,
  Pz: () => s.P,
  WG: () => i.W,
  lz: () => n.l,
  qg: () => c,
  sB: () => a.s,
  zg: () => d,
}),
  r(26899 /* vendor/module-26899 */);
var n = r(50930 /* vendor/module-50930 */),
  i = r(32495 /* vendor/module-32495 */),
  a = r(96404 /* vendor/module-96404 */),
  s = r(89101 /* vendor/module-89101 */),
  o =
    (r(81327 /* vendor/module-81327 */),
    r(26027 /* vendor/module-26027 */),
    r(34247 /* vendor/module-34247 */),
    r(82911 /* vendor/module-82911 */),
    r(86403 /* vendor/module-86403 */),
    r(23067 /* vendor/module-23067 */),
    r(31218 /* vendor/module-31218 */),
    r(13650 /* vendor/module-13650 */),
    r(59498 /* vendor/module-59498 */),
    r(97183 /* vendor/module-97183 */),
    r(21471 /* vendor/module-21471 */)),
  l = {},
  u = {
    info: (0, o.K2)(async () => {
      const { createInfoServices: e } = await r.e(2318).then(r.bind(r, 72318)),
        t = e().Info.parser.LangiumParser;
      l.info = t;
    }, "info"),
    packet: (0, o.K2)(async () => {
      const { createPacketServices: e } = await r
          .e(3947)
          .then(r.bind(r, 73947)),
        t = e().Packet.parser.LangiumParser;
      l.packet = t;
    }, "packet"),
    pie: (0, o.K2)(async () => {
      const { createPieServices: e } = await r.e(1777).then(r.bind(r, 41777)),
        t = e().Pie.parser.LangiumParser;
      l.pie = t;
    }, "pie"),
    treeView: (0, o.K2)(async () => {
      const { createTreeViewServices: e } = await r
          .e(3171)
          .then(r.bind(r, 63171)),
        t = e().TreeView.parser.LangiumParser;
      l.treeView = t;
    }, "treeView"),
    architecture: (0, o.K2)(async () => {
      const { createArchitectureServices: e } = await r
          .e(5625)
          .then(r.bind(r, 85625)),
        t = e().Architecture.parser.LangiumParser;
      l.architecture = t;
    }, "architecture"),
    gitGraph: (0, o.K2)(async () => {
      const { createGitGraphServices: e } = await r
          .e(5182)
          .then(r.bind(r, 75182)),
        t = e().GitGraph.parser.LangiumParser;
      l.gitGraph = t;
    }, "gitGraph"),
    eventmodeling: (0, o.K2)(async () => {
      const { createEventModelingServices: e } = await r
          .e(6694)
          .then(r.bind(r, 36694)),
        t = e().EventModel.parser.LangiumParser;
      l.eventmodeling = t;
    }, "eventmodeling"),
    radar: (0, o.K2)(async () => {
      const { createRadarServices: e } = await r.e(3176).then(r.bind(r, 3176)),
        t = e().Radar.parser.LangiumParser;
      l.radar = t;
    }, "radar"),
    railroad: (0, o.K2)(async () => {
      const { createRailroadServices: e } = await r
          .e(9212)
          .then(r.bind(r, 79212)),
        t = e().Railroad.parser.LangiumParser;
      l.railroad = t;
    }, "railroad"),
    railroadEbnf: (0, o.K2)(async () => {
      const { createRailroadEbnfServices: e } = await r
          .e(8877)
          .then(r.bind(r, 78877)),
        t = e().RailroadEbnf.parser.LangiumParser;
      l.railroadEbnf = t;
    }, "railroadEbnf"),
    railroadAbnf: (0, o.K2)(async () => {
      const { createRailroadAbnfServices: e } = await r
          .e(9291)
          .then(r.bind(r, 29291)),
        t = e().RailroadAbnf.parser.LangiumParser;
      l.railroadAbnf = t;
    }, "railroadAbnf"),
    railroadPeg: (0, o.K2)(async () => {
      const { createRailroadPegServices: e } = await r
          .e(3258)
          .then(r.bind(r, 33258)),
        t = e().RailroadPeg.parser.LangiumParser;
      l.railroadPeg = t;
    }, "railroadPeg"),
    treemap: (0, o.K2)(async () => {
      const { createTreemapServices: e } = await r
          .e(8389)
          .then(r.bind(r, 38389)),
        t = e().Treemap.parser.LangiumParser;
      l.treemap = t;
    }, "treemap"),
    wardley: (0, o.K2)(async () => {
      const { createWardleyServices: e } = await r
          .e(1211)
          .then(r.bind(r, 1211)),
        t = e().Wardley.parser.LangiumParser;
      l.wardley = t;
    }, "wardley"),
    cynefin: (0, o.K2)(async () => {
      const { createCynefinServices: e } = await r
          .e(4623)
          .then(r.bind(r, 84623)),
        t = e().Cynefin.parser.LangiumParser;
      l.cynefin = t;
    }, "cynefin"),
  };
async function c(e, t) {
  const r = u[e];
  if (!r) throw new Error(`Unknown diagram type: ${e}`);
  l[e] || (await r());
  const n = l[e].parse(t);
  if (n.lexerErrors.length > 0 || n.parserErrors.length > 0) throw new d(n);
  return n.value;
}
(0, o.K2)(c, "parse");
var p = (0, o.K2)((e) => (void 0 !== e && e >= 0 ? e : "?"), "formatLocation"),
  d = class extends Error {
    constructor(e) {
      super(
        `Parsing failed: ${e.lexerErrors.map((e) => `Lexer error on line ${p(e.line)}, column ${p(e.column)}: ${e.message}`).join("\n")} ${e.parserErrors.map((e) => `Parse error on line ${p(e.token.startLine)}, column ${p(e.token.startColumn)}: ${e.message}`).join("\n")}`,
      ),
        (this.result = e);
    }
    static {
      (0, o.K2)(this, "MermaidParseError");
    }
  };
