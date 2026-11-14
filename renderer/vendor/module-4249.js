// vendor/module-4249.js — webpack module 4249
// params: (e, t) = (module, exports, require)
"use strict";
(t.QUESTION_BANK_WITHDRAWN = void 0),
  (t.canBrowseQuestionBank = function (e) {
    return (
      null != e &&
      (!t.QUESTION_BANK_WITHDRAWN || ("isAdmin" in e && !0 === e.isAdmin))
    );
  }),
  (t.QUESTION_BANK_WITHDRAWN = !0);
