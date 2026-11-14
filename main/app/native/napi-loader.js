// app/native/napi-loader.js — webpack module 9156
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { readFileSync: r } = n(73024 /* external/node_fs */);
let o = null;
const i = [],
  s = () => {
    let e = !1;
    return (
      "linux" === process.platform &&
        ((e = c()), null === e && (e = u()), null === e && (e = l())),
      e
    );
  },
  a = (e) => e.includes("libc.musl-") || e.includes("ld-musl-"),
  c = () => {
    try {
      return r("/usr/bin/ldd", "utf-8").includes("musl");
    } catch {
      return null;
    }
  },
  u = () => {
    let e = null;
    return (
      "function" == typeof process.report?.getReport &&
        ((process.report.excludeNetwork = !0),
        (e = process.report.getReport())),
      e
        ? !(
            (e.header && e.header.glibcVersionRuntime) ||
            !Array.isArray(e.sharedObjects) ||
            !e.sharedObjects.some(a)
          )
        : null
    );
  },
  l = () => {
    try {
      return n(35317 /* external/child_process */)
        .execSync("ldd --version", { encoding: "utf8" })
        .includes("musl");
    } catch (e) {
      return !1;
    }
  };
o = (function () {
  if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH)
    try {
      return n(82491 /* vendor/other/module-82491 */)(
        process.env.NAPI_RS_NATIVE_LIBRARY_PATH,
      );
    } catch (e) {
      i.push(e);
    }
  else if ("android" === process.platform)
    if ("arm64" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.android-arm64.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-android-arm64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-android-arm64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("arm" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.android-arm-eabi.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-android-arm-eabi'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-android-arm-eabi/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else
      i.push(new Error(`Unsupported architecture on Android ${process.arch}`));
  else if ("win32" === process.platform)
    if ("x64" === process.arch)
      if (
        "dll.a" === process.config?.variables?.shlib_suffix ||
        "shared_library" === process.config?.variables?.node_target_type
      ) {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.win32-x64-gnu.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-win32-x64-gnu'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-win32-x64-gnu/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      } else {
        try {
          return n(84061 /* app/native/loader-win32-x64-msvc */);
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-win32-x64-msvc'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-win32-x64-msvc/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      }
    else if ("ia32" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.win32-ia32-msvc.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-win32-ia32-msvc'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-win32-ia32-msvc/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("arm64" === process.arch) {
      try {
        return n(2027 /* app/native/loader-win32-arm64-msvc */);
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-win32-arm64-msvc'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-win32-arm64-msvc/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else
      i.push(new Error(`Unsupported architecture on Windows: ${process.arch}`));
  else if ("darwin" === process.platform) {
    try {
      return n(
        Object(
          (function () {
            var e = new Error(
              "Cannot find module './parakeetai-native.darwin-universal.node'",
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
        ),
      );
    } catch (e) {
      i.push(e);
    }
    try {
      const e = n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-darwin-universal'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        ),
        t = Object(
          (function () {
            var e = new Error(
              "Cannot find module '@parakeetai-desktop/native-modules-darwin-universal/package.json'",
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
        );
      if (
        "0.1.0" !== t &&
        process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
        "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
      )
        throw new Error(
          `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
        );
      return e;
    } catch (e) {
      i.push(e);
    }
    if ("x64" === process.arch) {
      try {
        return n(60013 /* app/native/loader-darwin-x64 */);
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-darwin-x64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-darwin-x64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("arm64" === process.arch) {
      try {
        return n(86343 /* app/native/loader-darwin-arm64 */);
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-darwin-arm64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-darwin-arm64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else
      i.push(new Error(`Unsupported architecture on macOS: ${process.arch}`));
  } else if ("freebsd" === process.platform)
    if ("x64" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.freebsd-x64.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-freebsd-x64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-freebsd-x64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("arm64" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.freebsd-arm64.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-freebsd-arm64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-freebsd-arm64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else
      i.push(new Error(`Unsupported architecture on FreeBSD: ${process.arch}`));
  else if ("linux" === process.platform)
    if ("x64" === process.arch)
      if (s()) {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-x64-musl.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-x64-musl'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-x64-musl/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      } else {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-x64-gnu.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-x64-gnu'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-x64-gnu/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      }
    else if ("arm64" === process.arch)
      if (s()) {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-arm64-musl.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-arm64-musl'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-arm64-musl/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      } else {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-arm64-gnu.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-arm64-gnu'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-arm64-gnu/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      }
    else if ("arm" === process.arch)
      if (s()) {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-arm-musleabihf.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-arm-musleabihf'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-arm-musleabihf/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      } else {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-arm-gnueabihf.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-arm-gnueabihf'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-arm-gnueabihf/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      }
    else if ("loong64" === process.arch)
      if (s()) {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-loong64-musl.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-loong64-musl'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-loong64-musl/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      } else {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-loong64-gnu.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-loong64-gnu'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-loong64-gnu/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      }
    else if ("riscv64" === process.arch)
      if (s()) {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-riscv64-musl.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-riscv64-musl'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-riscv64-musl/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      } else {
        try {
          return n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module './parakeetai-native.linux-riscv64-gnu.node'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          );
        } catch (e) {
          i.push(e);
        }
        try {
          const e = n(
              Object(
                (function () {
                  var e = new Error(
                    "Cannot find module '@parakeetai-desktop/native-modules-linux-riscv64-gnu'",
                  );
                  throw ((e.code = "MODULE_NOT_FOUND"), e);
                })(),
              ),
            ),
            t = Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-riscv64-gnu/package.json'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            );
          if (
            "0.1.0" !== t &&
            process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
            "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
          )
            throw new Error(
              `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
            );
          return e;
        } catch (e) {
          i.push(e);
        }
      }
    else if ("ppc64" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.linux-ppc64-gnu.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-ppc64-gnu'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-linux-ppc64-gnu/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("s390x" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.linux-s390x-gnu.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-linux-s390x-gnu'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-linux-s390x-gnu/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else
      i.push(new Error(`Unsupported architecture on Linux: ${process.arch}`));
  else if ("openharmony" === process.platform)
    if ("arm64" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.openharmony-arm64.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-openharmony-arm64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-openharmony-arm64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("x64" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.openharmony-x64.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-openharmony-x64'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-openharmony-x64/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else if ("arm" === process.arch) {
      try {
        return n(
          Object(
            (function () {
              var e = new Error(
                "Cannot find module './parakeetai-native.openharmony-arm.node'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          ),
        );
      } catch (e) {
        i.push(e);
      }
      try {
        const e = n(
            Object(
              (function () {
                var e = new Error(
                  "Cannot find module '@parakeetai-desktop/native-modules-openharmony-arm'",
                );
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })(),
            ),
          ),
          t = Object(
            (function () {
              var e = new Error(
                "Cannot find module '@parakeetai-desktop/native-modules-openharmony-arm/package.json'",
              );
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
          );
        if (
          "0.1.0" !== t &&
          process.env.NAPI_RS_ENFORCE_VERSION_CHECK &&
          "0" !== process.env.NAPI_RS_ENFORCE_VERSION_CHECK
        )
          throw new Error(
            `Native binding package version mismatch, expected 0.1.0 but got ${t}. You can reinstall dependencies to fix this issue.`,
          );
        return e;
      } catch (e) {
        i.push(e);
      }
    } else
      i.push(
        new Error(`Unsupported architecture on OpenHarmony: ${process.arch}`),
      );
  else
    i.push(
      new Error(
        `Unsupported OS: ${process.platform}, architecture: ${process.arch}`,
      ),
    );
})();
const d =
  "true" === process.env.NAPI_RS_FORCE_WASI ||
  "error" === process.env.NAPI_RS_FORCE_WASI;
if (!o || d) {
  let e = null,
    t = null;
  try {
    (e = n(
      Object(
        (function () {
          var e = new Error(
            "Cannot find module './parakeetai-native.wasi.cjs'",
          );
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })(),
      ),
    )),
      (o = e);
  } catch (e) {
    d && (t = e);
  }
  if (!o || d)
    try {
      (e = n(
        Object(
          (function () {
            var e = new Error(
              "Cannot find module '@parakeetai-desktop/native-modules-wasm32-wasi'",
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
        ),
      )),
        (o = e);
    } catch (e) {
      d && (t ? (t.cause = e) : (t = e), i.push(e));
    }
  if ("error" === process.env.NAPI_RS_FORCE_WASI && !e) {
    const e = new Error(
      "WASI binding not found and NAPI_RS_FORCE_WASI is set to error",
    );
    throw ((e.cause = t), e);
  }
}
if (!o) {
  if (i.length > 0)
    throw new Error(
      "Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.",
      { cause: i.reduce((e, t) => ((t.cause = e), t)) },
    );
  throw new Error("Failed to load native binding");
}
(e.exports = o),
  (e.exports.AudioProcessor = o.AudioProcessor),
  (e.exports.OutputLoopbackCapture = o.OutputLoopbackCapture),
  (e.exports.getActiveAudioInputProcesses = o.getActiveAudioInputProcesses),
  (e.exports.listOutputDevices = o.listOutputDevices);
