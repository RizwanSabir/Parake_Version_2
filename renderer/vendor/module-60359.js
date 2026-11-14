// vendor/module-60359.js — webpack module 60359
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.answerRehypePlugins = t.answerRemarkPlugins = void 0),
  (t.preprocessAnswerMarkdown = function (e) {
    return (0, c.convertTexDelimiters)((0, l.convertBulletsToMarkdown)(e));
  });
const o = r(n(28551 /* vendor/module-28551 */)),
  i = r(n(98686 /* vendor/module-98686 */)),
  a = r(n(25154 /* vendor/module-25154 */)),
  s = r(n(77755 /* vendor/module-77755 */)),
  l = n(96748 /* vendor/module-96748 */),
  c = n(25938 /* vendor/module-25938 */),
  u = n(28778 /* vendor/module-28778 */),
  d = n(9608 /* vendor/module-9608 */);
(t.answerRemarkPlugins = [a.default, s.default, u.remarkStrictInlineMath]),
  (t.answerRehypePlugins = [[i.default, d.sanitizeSchema], o.default]);
