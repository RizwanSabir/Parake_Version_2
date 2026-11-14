// vendor/module-17643.js — webpack module 17643
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Allow =
    t.ALL =
    t.COLLECTION =
    t.ATOM =
    t.SPECIAL =
    t.INF =
    t._INFINITY =
    t.INFINITY =
    t.NAN =
    t.BOOL =
    t.NULL =
    t.OBJ =
    t.ARR =
    t.NUM =
    t.STR =
      void 0),
  (t.STR = 1),
  (t.NUM = 2),
  (t.ARR = 4),
  (t.OBJ = 8),
  (t.NULL = 16),
  (t.BOOL = 32),
  (t.NAN = 64),
  (t.INFINITY = 128),
  (t._INFINITY = 256),
  (t.INF = t.INFINITY | t._INFINITY),
  (t.SPECIAL = t.NULL | t.BOOL | t.INF | t.NAN),
  (t.ATOM = t.STR | t.NUM | t.SPECIAL),
  (t.COLLECTION = t.ARR | t.OBJ),
  (t.ALL = t.ATOM | t.COLLECTION),
  (t.Allow = {
    STR: t.STR,
    NUM: t.NUM,
    ARR: t.ARR,
    OBJ: t.OBJ,
    NULL: t.NULL,
    BOOL: t.BOOL,
    NAN: t.NAN,
    INFINITY: t.INFINITY,
    _INFINITY: t._INFINITY,
    INF: t.INF,
    SPECIAL: t.SPECIAL,
    ATOM: t.ATOM,
    COLLECTION: t.COLLECTION,
    ALL: t.ALL,
  }),
  (t.default = t.Allow);
