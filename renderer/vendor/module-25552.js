// vendor/module-25552.js — webpack module 25552
// params: (t, e) = (module, exports, require)
"use strict";
Object.defineProperty(e, "__esModule", { value: !0 }),
  (e.BLANK_URL =
    e.relativeFirstCharacters =
    e.whitespaceEscapeCharsRegex =
    e.urlSchemeRegex =
    e.ctrlCharactersRegex =
    e.htmlCtrlEntityRegex =
    e.htmlEntitiesRegex =
    e.invalidProtocolRegex =
      void 0),
  (e.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im),
  (e.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g),
  (e.htmlCtrlEntityRegex = /&(newline|tab);/gi),
  (e.ctrlCharactersRegex =
    /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim),
  (e.urlSchemeRegex = /^.+(:|&colon;)/gim),
  (e.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g),
  (e.relativeFirstCharacters = [".", "/"]),
  (e.BLANK_URL = "about:blank");
