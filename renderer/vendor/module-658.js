// vendor/module-658.js — webpack module 658
// params: (t) = (module, exports, require)
t.exports =
  null != Object.assign
    ? Object.assign.bind(Object)
    : function (t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return (
          i.forEach(function (e) {
            Object.keys(e).forEach(function (i) {
              return (t[i] = e[i]);
            });
          }),
          t
        );
      };
