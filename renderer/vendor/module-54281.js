// vendor/module-54281.js — webpack module 54281
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.pipeArguments = t.Prototype = t.Class = void 0);
const n = (e, t) => {
  switch (t.length) {
    case 0:
      return e;
    case 1:
      return t[0](e);
    case 2:
      return t[1](t[0](e));
    case 3:
      return t[2](t[1](t[0](e)));
    case 4:
      return t[3](t[2](t[1](t[0](e))));
    case 5:
      return t[4](t[3](t[2](t[1](t[0](e)))));
    case 6:
      return t[5](t[4](t[3](t[2](t[1](t[0](e))))));
    case 7:
      return t[6](t[5](t[4](t[3](t[2](t[1](t[0](e)))))));
    case 8:
      return t[7](t[6](t[5](t[4](t[3](t[2](t[1](t[0](e))))))));
    case 9:
      return t[8](t[7](t[6](t[5](t[4](t[3](t[2](t[1](t[0](e)))))))));
    default: {
      let n = e;
      for (let e = 0, r = t.length; e < r; e++) n = t[e](n);
      return n;
    }
  }
};
t.pipeArguments = n;
const r = (t.Prototype = {
    pipe() {
      return n(this, arguments);
    },
  }),
  o = (function () {
    function e() {}
    return (e.prototype = r), e;
  })();
t.Class = (e) =>
  e
    ? class extends e {
        pipe() {
          return n(this, arguments);
        }
      }
    : o;
