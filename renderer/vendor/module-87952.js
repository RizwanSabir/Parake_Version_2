// vendor/module-87952.js — webpack module 87952
// params: (e, t, n) = (module, exports, require)
"use strict";
n.d(t, {
  AlertCircle: () => f,
  AlertTriangle: () => k,
  ArrowBigUp: () => I,
  ArrowDown: () => O,
  ArrowDownAZ: () => u,
  ArrowDownNarrowWide: () => A,
  ArrowDownWideNarrow: () => d,
  ArrowDownZA: () => p,
  ArrowLeft: () => R,
  ArrowRight: () => M,
  ArrowUp: () => D,
  ArrowUpDown: () => P,
  ArrowUpRight: () => N,
  AudioLines: () => j,
  Bird: () => L,
  BookOpen: () => F,
  Bot: () => B,
  BotMessageSquare: () => U,
  Briefcase: () => H,
  BriefcaseBusiness: () => z,
  Bug: () => V,
  Building2: () => q,
  Check: () => G,
  CheckIcon: () => G,
  ChevronDown: () => W,
  ChevronDownIcon: () => W,
  ChevronRight: () => $,
  ChevronRightIcon: () => $,
  ChevronUp: () => Y,
  ChevronUpIcon: () => Y,
  CircleCheck: () => h,
  CircleHelp: () => m,
  CircleIcon: () => K,
  CircleStop: () => g,
  CircleUser: () => y,
  CircuitBoard: () => Z,
  ClipboardPaste: () => Q,
  Clock: () => J,
  Code2: () => v,
  Coins: () => X,
  Command: () => ee,
  Contact: () => te,
  Copy: () => ne,
  CornerDownLeft: () => re,
  CreditCard: () => oe,
  Delete: () => ie,
  Download: () => ae,
  Edit: () => T,
  EllipsisVertical: () => b,
  Eraser: () => se,
  FilePenLine: () => S,
  FileText: () => le,
  Fullscreen: () => ce,
  Gauge: () => ue,
  Gift: () => de,
  Globe: () => pe,
  GraduationCap: () => fe,
  Hourglass: () => he,
  Image: () => me,
  Images: () => ge,
  InfinityIcon: () => ye,
  Info: () => ve,
  Languages: () => be,
  Laptop: () => Se,
  LayoutDashboard: () => _e,
  LifeBuoy: () => xe,
  Lightbulb: () => we,
  Link2: () => Ee,
  Linkedin: () => Te,
  List: () => Ce,
  ListOrdered: () => ke,
  Loader2: () => _,
  LockKeyhole: () => Ie,
  LogOut: () => Ae,
  Mail: () => Oe,
  Maximize2: () => Re,
  MessageCircleQuestion: () => Me,
  MessageSquare: () => Ne,
  MessageSquareText: () => Pe,
  MessagesSquare: () => De,
  Mic: () => je,
  Minimize2: () => Le,
  Minus: () => Fe,
  MinusIcon: () => Fe,
  MonitorSmartphone: () => Ue,
  Moon: () => Be,
  MoreVertical: () => b,
  Move: () => Ge,
  MoveDiagonal: () => He,
  MoveDiagonal2: () => ze,
  MoveLeft: () => Ve,
  MoveRight: () => qe,
  NotebookPen: () => We,
  Option: () => $e,
  Pen: () => w,
  PenLine: () => x,
  Pencil: () => Ke,
  PencilLine: () => Ye,
  Phone: () => Je,
  PhoneCall: () => Ze,
  PhoneOff: () => Qe,
  Play: () => Xe,
  Plus: () => et,
  PlusIcon: () => et,
  RefreshCcw: () => tt,
  RefreshCw: () => nt,
  RotateCw: () => rt,
  ScreenShare: () => ot,
  Search: () => at,
  SearchX: () => it,
  Settings: () => st,
  Share: () => lt,
  ShieldCheck: () => ct,
  SlidersHorizontal: () => ut,
  Space: () => dt,
  Sparkles: () => E,
  Speech: () => pt,
  Star: () => ft,
  Sun: () => mt,
  SunMoon: () => ht,
  Terminal: () => gt,
  ThumbsDown: () => yt,
  ThumbsUp: () => vt,
  TimerOff: () => bt,
  TimerReset: () => St,
  Trash2: () => _t,
  TriangleAlert: () => k,
  Undo2: () => xt,
  Upload: () => wt,
  User: () => Et,
  UserRound: () => C,
  Video: () => Tt,
  X: () => kt,
  XIcon: () => kt,
  Zap: () => Ct,
});
var r = n(14041 /* vendor/module-14041 */);
const o = (e) => {
    const t = ((e) =>
      e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
        n ? n.toUpperCase() : t.toLowerCase(),
      ))(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  i = (...e) =>
    e
      .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
      .join(" ")
      .trim(),
  a = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
  };
var s = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const l = (0, r.forwardRef)(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: o,
        className: l = "",
        children: c,
        iconNode: u,
        ...d
      },
      p,
    ) =>
      (0, r.createElement)(
        "svg",
        {
          ref: p,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: o ? (24 * Number(n)) / Number(t) : n,
          className: i("lucide", l),
          ...(!c && !a(d) && { "aria-hidden": "true" }),
          ...d,
        },
        [
          ...u.map(([e, t]) => (0, r.createElement)(e, t)),
          ...(Array.isArray(c) ? c : [c]),
        ],
      ),
  ),
  c = (e, t) => {
    const n = (0, r.forwardRef)(({ className: n, ...a }, s) => {
      return (0, r.createElement)(l, {
        ref: s,
        iconNode: t,
        className: i(
          `lucide-${((c = o(e)), c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
          `lucide-${e}`,
          n,
        ),
        ...a,
      });
      var c;
    });
    return (n.displayName = o(e)), n;
  },
  u = c("arrow-down-a-z", [
    ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
    ["path", { d: "M7 20V4", key: "1yoxec" }],
    ["path", { d: "M20 8h-5", key: "1vsyxs" }],
    ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
    ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }],
  ]),
  d = c("arrow-down-wide-narrow", [
    ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
    ["path", { d: "M7 20V4", key: "1yoxec" }],
    ["path", { d: "M11 4h10", key: "1w87gc" }],
    ["path", { d: "M11 8h7", key: "djye34" }],
    ["path", { d: "M11 12h4", key: "q8tih4" }],
  ]),
  p = c("arrow-down-z-a", [
    ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
    ["path", { d: "M7 4v16", key: "1glfcx" }],
    ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
    ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
    ["path", { d: "M20 18h-5", key: "18j1r2" }],
  ]),
  f = c("circle-alert", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ]),
  h = c("circle-check", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]),
  m = c("circle-help", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]),
  g = c("circle-stop", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "rect",
      {
        x: "9",
        y: "9",
        width: "6",
        height: "6",
        rx: "1",
        key: "1ssd4o",
      },
    ],
  ]),
  y = c("circle-user", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    [
      "path",
      {
        d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
        key: "154egf",
      },
    ],
  ]),
  v = c("code-xml", [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ]),
  b = c("ellipsis-vertical", [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
    ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ]),
  S = c("file-pen-line", [
    [
      "path",
      {
        d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",
        key: "142zxg",
      },
    ],
    [
      "path",
      {
        d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
        key: "2t3380",
      },
    ],
    ["path", { d: "M8 18h1", key: "13wk12" }],
  ]),
  _ = c("loader-circle", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]),
  x = c("pen-line", [
    ["path", { d: "M12 20h9", key: "t2du7b" }],
    [
      "path",
      {
        d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
        key: "1ykcvy",
      },
    ],
  ]),
  w = c("pen", [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ]),
  E = c("sparkles", [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ]),
  T = c("square-pen", [
    [
      "path",
      {
        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        key: "1m0v6g",
      },
    ],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2",
      },
    ],
  ]),
  k = c("triangle-alert", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]),
  C = c("user-round", [
    ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
  ]),
  I = c("arrow-big-up", [
    ["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", key: "1x06kx" }],
  ]),
  A = c("arrow-down-narrow-wide", [
    ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
    ["path", { d: "M7 20V4", key: "1yoxec" }],
    ["path", { d: "M11 4h4", key: "6d7r33" }],
    ["path", { d: "M11 8h7", key: "djye34" }],
    ["path", { d: "M11 12h10", key: "1438ji" }],
  ]),
  O = c("arrow-down", [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ]),
  R = c("arrow-left", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ]),
  M = c("arrow-right", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]),
  P = c("arrow-up-down", [
    ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
    ["path", { d: "M17 20V4", key: "1ejh1v" }],
    ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
    ["path", { d: "M7 4v16", key: "1glfcx" }],
  ]),
  N = c("arrow-up-right", [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ]),
  D = c("arrow-up", [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ]),
  j = c("audio-lines", [
    ["path", { d: "M2 10v3", key: "1fnikh" }],
    ["path", { d: "M6 6v11", key: "11sgs0" }],
    ["path", { d: "M10 3v18", key: "yhl04a" }],
    ["path", { d: "M14 8v7", key: "3a1oy3" }],
    ["path", { d: "M18 5v13", key: "123xd1" }],
    ["path", { d: "M22 10v3", key: "154ddg" }],
  ]),
  L = c("bird", [
    ["path", { d: "M16 7h.01", key: "1kdx03" }],
    [
      "path",
      {
        d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",
        key: "oj1oa8",
      },
    ],
    ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
    ["path", { d: "M10 18v3", key: "1yea0a" }],
    ["path", { d: "M14 17.75V21", key: "1pymcb" }],
    ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }],
  ]),
  F = c("book-open", [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ]),
  U = c("bot-message-square", [
    ["path", { d: "M12 6V2H8", key: "1155em" }],
    [
      "path",
      {
        d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",
        key: "w2lp3e",
      },
    ],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M9 11v2", key: "1ueba0" }],
    ["path", { d: "M15 11v2", key: "i11awn" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ]),
  B = c("bot", [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    [
      "rect",
      {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2",
        key: "enze0r",
      },
    ],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ]),
  z = c("briefcase-business", [
    ["path", { d: "M12 12h.01", key: "1mp3jc" }],
    [
      "path",
      {
        d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
        key: "1ksdt3",
      },
    ],
    ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
    [
      "rect",
      {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2",
        key: "i6l2r4",
      },
    ],
  ]),
  H = c("briefcase", [
    [
      "path",
      {
        d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
        key: "jecpp",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2",
        key: "i6l2r4",
      },
    ],
  ]),
  V = c("bug", [
    ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
    ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
    ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
    [
      "path",
      {
        d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
        key: "xs1cw7",
      },
    ],
    ["path", { d: "M12 20v-9", key: "1qisl0" }],
    ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
    ["path", { d: "M6 13H2", key: "82j7cp" }],
    ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
    ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
    ["path", { d: "M22 13h-4", key: "1jl80f" }],
    ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }],
  ]),
  q = c("building-2", [
    [
      "path",
      {
        d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
        key: "1b4qmf",
      },
    ],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
    [
      "path",
      {
        d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
        key: "10jefs",
      },
    ],
    ["path", { d: "M10 6h4", key: "1itunk" }],
    ["path", { d: "M10 10h4", key: "tcdvrf" }],
    ["path", { d: "M10 14h4", key: "kelpxr" }],
    ["path", { d: "M10 18h4", key: "1ulq68" }],
  ]),
  G = c("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
  W = c("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
  $ = c("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]),
  Y = c("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]),
  K = c("circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]),
  Z = c("circuit-board", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7",
      },
    ],
    ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
    ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }],
  ]),
  Q = c("clipboard-paste", [
    ["path", { d: "M11 14h10", key: "1w8e9d" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1.344", key: "1e62lh" }],
    ["path", { d: "m17 18 4-4-4-4", key: "z2g111" }],
    [
      "path",
      {
        d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",
        key: "bjbb7m",
      },
    ],
    [
      "rect",
      {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
        key: "ublpy",
      },
    ],
  ]),
  J = c("clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ]),
  X = c("coins", [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ]),
  ee = c("command", [
    [
      "path",
      {
        d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
        key: "11bfej",
      },
    ],
  ]),
  te = c("contact", [
    ["path", { d: "M16 2v2", key: "scm5qe" }],
    [
      "path",
      {
        d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
        key: "1waht3",
      },
    ],
    ["path", { d: "M8 2v2", key: "pbkmx" }],
    ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
    [
      "rect",
      {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2",
        key: "12vinp",
      },
    ],
  ]),
  ne = c("copy", [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ]),
  re = c("corner-down-left", [
    ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
    ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }],
  ]),
  oe = c("credit-card", [
    [
      "rect",
      {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z",
      },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ]),
  ie = c("delete", [
    [
      "path",
      {
        d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
        key: "1yo7s0",
      },
    ],
    ["path", { d: "m12 9 6 6", key: "anjzzh" }],
    ["path", { d: "m18 9-6 6", key: "1fp51s" }],
  ]),
  ae = c("download", [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    [
      "path",
      {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h",
      },
    ],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ]),
  se = c("eraser", [
    [
      "path",
      {
        d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
        key: "g5wo59",
      },
    ],
    ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }],
  ]),
  le = c("file-text", [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ]),
  ce = c("fullscreen", [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
    [
      "rect",
      {
        width: "10",
        height: "8",
        x: "7",
        y: "8",
        rx: "1",
        key: "vys8me",
      },
    ],
  ]),
  ue = c("gauge", [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
  ]),
  de = c("gift", [
    [
      "rect",
      {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52",
      },
    ],
    ["path", { d: "M12 8v13", key: "1c76mn" }],
    [
      "path",
      {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b",
      },
    ],
    [
      "path",
      {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl",
      },
    ],
  ]),
  pe = c("globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl",
      },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ]),
  fe = c("graduation-cap", [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ]),
  he = c("hourglass", [
    ["path", { d: "M5 22h14", key: "ehvnwv" }],
    ["path", { d: "M5 2h14", key: "pdyrp9" }],
    [
      "path",
      {
        d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
        key: "1d314k",
      },
    ],
    [
      "path",
      {
        d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
        key: "1vvvr6",
      },
    ],
  ]),
  me = c("image", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    [
      "path",
      {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7",
      },
    ],
  ]),
  ge = c("images", [
    ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
    [
      "path",
      {
        d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",
        key: "nf6bnh",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
    [
      "rect",
      {
        width: "16",
        height: "16",
        x: "6",
        y: "2",
        rx: "2",
        key: "12espp",
      },
    ],
  ]),
  ye = c("infinity", [
    [
      "path",
      {
        d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",
        key: "18ogeb",
      },
    ],
  ]),
  ve = c("info", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ]),
  be = c("languages", [
    ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
    ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
    ["path", { d: "M2 5h12", key: "or177f" }],
    ["path", { d: "M7 2h1", key: "1t2jsx" }],
    ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
    ["path", { d: "M14 18h6", key: "1m8k6r" }],
  ]),
  Se = c("laptop", [
    [
      "path",
      {
        d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
        key: "1pdavp",
      },
    ],
    ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }],
  ]),
  _e = c("layout-dashboard", [
    [
      "rect",
      {
        width: "7",
        height: "9",
        x: "3",
        y: "3",
        rx: "1",
        key: "10lvy0",
      },
    ],
    [
      "rect",
      {
        width: "7",
        height: "5",
        x: "14",
        y: "3",
        rx: "1",
        key: "16une8",
      },
    ],
    [
      "rect",
      {
        width: "7",
        height: "9",
        x: "14",
        y: "12",
        rx: "1",
        key: "1hutg5",
      },
    ],
    [
      "rect",
      {
        width: "7",
        height: "5",
        x: "3",
        y: "16",
        rx: "1",
        key: "ldoo1y",
      },
    ],
  ]),
  xe = c("life-buoy", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
    ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
    ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
    ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ]),
  we = c("lightbulb", [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ]),
  Ee = c("link-2", [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ]),
  Te = c("linkedin", [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ]),
  ke = c("list-ordered", [
    ["path", { d: "M10 12h11", key: "6m4ad9" }],
    ["path", { d: "M10 18h11", key: "11hvi2" }],
    ["path", { d: "M10 6h11", key: "c7qv1k" }],
    ["path", { d: "M4 10h2", key: "16xx2s" }],
    ["path", { d: "M4 6h1v4", key: "cnovpq" }],
    ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }],
  ]),
  Ce = c("list", [
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M3 18h.01", key: "1tta3j" }],
    ["path", { d: "M3 6h.01", key: "1rqtza" }],
    ["path", { d: "M8 12h13", key: "1za7za" }],
    ["path", { d: "M8 18h13", key: "1lx6n3" }],
    ["path", { d: "M8 6h13", key: "ik3vkj" }],
  ]),
  Ie = c("lock-keyhole", [
    ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
    [
      "rect",
      {
        x: "3",
        y: "10",
        width: "18",
        height: "12",
        rx: "2",
        key: "6s8ecr",
      },
    ],
    ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }],
  ]),
  Ae = c("log-out", [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ]),
  Oe = c("mail", [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2",
        key: "izxlao",
      },
    ],
  ]),
  Re = c("maximize-2", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "m21 3-7 7", key: "1l2asr" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M9 21H3v-6", key: "wtvkvv" }],
  ]),
  Me = c("message-circle-question", [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]),
  Pe = c("message-square-text", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
    ["path", { d: "M13 8H7", key: "14i4kc" }],
    ["path", { d: "M17 12H7", key: "16if0g" }],
  ]),
  Ne = c("message-square", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ]),
  De = c("messages-square", [
    [
      "path",
      {
        d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
        key: "p1xzt8",
      },
    ],
    [
      "path",
      {
        d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
        key: "1cx29u",
      },
    ],
  ]),
  je = c("mic", [
    [
      "path",
      {
        d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
        key: "131961",
      },
    ],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ]),
  Le = c("minimize-2", [
    ["path", { d: "m14 10 7-7", key: "oa77jy" }],
    ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M4 14h6v6", key: "rmj7iw" }],
  ]),
  Fe = c("minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]),
  Ue = c("monitor-smartphone", [
    [
      "path",
      {
        d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
        key: "10dyio",
      },
    ],
    ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
    ["path", { d: "M7 19h5", key: "qswx4l" }],
    [
      "rect",
      {
        width: "6",
        height: "10",
        x: "16",
        y: "12",
        rx: "2",
        key: "1egngj",
      },
    ],
  ]),
  Be = c("moon", [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ]),
  ze = c("move-diagonal-2", [
    ["path", { d: "M19 13v6h-6", key: "1hxl6d" }],
    ["path", { d: "M5 11V5h6", key: "12e2xe" }],
    ["path", { d: "m5 5 14 14", key: "11anup" }],
  ]),
  He = c("move-diagonal", [
    ["path", { d: "M11 19H5v-6", key: "8awifj" }],
    ["path", { d: "M13 5h6v6", key: "7voy1q" }],
    ["path", { d: "M19 5 5 19", key: "wwaj1z" }],
  ]),
  Ve = c("move-left", [
    ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
    ["path", { d: "M2 12H22", key: "1m8cig" }],
  ]),
  qe = c("move-right", [
    ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
    ["path", { d: "M2 12H22", key: "1m8cig" }],
  ]),
  Ge = c("move", [
    ["path", { d: "M12 2v20", key: "t6zp3m" }],
    ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
    ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
    ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
    ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }],
  ]),
  We = c("notebook-pen", [
    [
      "path",
      {
        d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
        key: "re6nr2",
      },
    ],
    ["path", { d: "M2 6h4", key: "aawbzj" }],
    ["path", { d: "M2 10h4", key: "l0bgd4" }],
    ["path", { d: "M2 14h4", key: "1gsvsf" }],
    ["path", { d: "M2 18h4", key: "1bu2t1" }],
    [
      "path",
      {
        d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
        key: "pqwjuv",
      },
    ],
  ]),
  $e = c("option", [
    ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
    ["path", { d: "M14 3h7", key: "16f0ms" }],
  ]),
  Ye = c("pencil-line", [
    ["path", { d: "M12 20h9", key: "t2du7b" }],
    [
      "path",
      {
        d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
        key: "1ykcvy",
      },
    ],
    ["path", { d: "m15 5 3 3", key: "1w25hb" }],
  ]),
  Ke = c("pencil", [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ]),
  Ze = c("phone-call", [
    ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
    ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ]),
  Qe = c("phone-off", [
    [
      "path",
      {
        d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
        key: "1wngk7",
      },
    ],
    ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
    [
      "path",
      {
        d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
        key: "10hv5p",
      },
    ],
  ]),
  Je = c("phone", [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ]),
  Xe = c("play", [
    ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
  ]),
  et = c("plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]),
  tt = c("refresh-ccw", [
    [
      "path",
      {
        d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "14sxne",
      },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    [
      "path",
      {
        d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
        key: "1hlbsb",
      },
    ],
    ["path", { d: "M16 16h5v5", key: "ccwih5" }],
  ]),
  nt = c("refresh-cw", [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ]),
  rt = c("rotate-cw", [
    [
      "path",
      {
        d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        key: "1p45f6",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ]),
  ot = c("screen-share", [
    [
      "path",
      {
        d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
        key: "i8wdob",
      },
    ],
    ["path", { d: "M8 21h8", key: "1ev6f3" }],
    ["path", { d: "M12 17v4", key: "1riwvh" }],
    ["path", { d: "m17 8 5-5", key: "fqif7o" }],
    ["path", { d: "M17 3h5v5", key: "1o3tu8" }],
  ]),
  it = c("search-x", [
    ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
    ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ]),
  at = c("search", [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ]),
  st = c("settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]),
  lt = c("share", [
    ["path", { d: "M12 2v13", key: "1km8f5" }],
    ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
    [
      "path",
      {
        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
        key: "1b2hhj",
      },
    ],
  ]),
  ct = c("shield-check", [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]),
  ut = c("sliders-horizontal", [
    ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
    ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
    ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
    ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
    ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
    ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
    ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
    ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
    ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
  ]),
  dt = c("space", [
    [
      "path",
      {
        d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",
        key: "lt2kga",
      },
    ],
  ]),
  pt = c("speech", [
    [
      "path",
      {
        d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
        key: "11atix",
      },
    ],
    ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }],
    ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }],
  ]),
  ft = c("star", [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ]),
  ht = c("sun-moon", [
    ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
    ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
    ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }],
  ]),
  mt = c("sun", [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ]),
  gt = c("terminal", [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
  ]),
  yt = c("thumbs-down", [
    ["path", { d: "M17 14V2", key: "8ymqnk" }],
    [
      "path",
      {
        d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
        key: "m61m77",
      },
    ],
  ]),
  vt = c("thumbs-up", [
    ["path", { d: "M7 10v12", key: "1qc93n" }],
    [
      "path",
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        key: "emmmcr",
      },
    ],
  ]),
  bt = c("timer-off", [
    ["path", { d: "M10 2h4", key: "n1abiw" }],
    [
      "path",
      {
        d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",
        key: "10he05",
      },
    ],
    [
      "path",
      {
        d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",
        key: "15f7sh",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
    ["path", { d: "M12 12v-2", key: "fwoke6" }],
  ]),
  St = c("timer-reset", [
    ["path", { d: "M10 2h4", key: "n1abiw" }],
    ["path", { d: "M12 14v-4", key: "1evpnu" }],
    [
      "path",
      {
        d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
        key: "1ts96g",
      },
    ],
    ["path", { d: "M9 17H4v5", key: "8t5av" }],
  ]),
  _t = c("trash-2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ]),
  xt = c("undo-2", [
    ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
    [
      "path",
      {
        d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
        key: "f3b9sd",
      },
    ],
  ]),
  wt = c("upload", [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    [
      "path",
      {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h",
      },
    ],
  ]),
  Et = c("user", [
    [
      "path",
      {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel",
      },
    ],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  Tt = c("video", [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      {
        x: "2",
        y: "6",
        width: "14",
        height: "12",
        rx: "2",
        key: "158x01",
      },
    ],
  ]),
  kt = c("x", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Ct = c("zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]);
