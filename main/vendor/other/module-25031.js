// vendor/other/module-25031.js — webpack module 25031
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31421 /* external/node_child_process */),
  o = n(73024 /* external/node_fs */),
  i = n(48161 /* external/node_os */),
  s = n(76760 /* external/node_path */),
  a = n(57975 /* external/node_util */),
  c = n(96137 /* vendor/other/module-96137 */),
  u = a.promisify(o.readFile),
  l = a.promisify(o.readdir),
  d = c.defineIntegration((e = {}) => {
    const t = {
        app: !0,
        os: !0,
        device: !0,
        culture: !0,
        cloudResource: !0,
        ...e,
      },
      n = t.app ? h() : void 0,
      o = t.device ? g(t.device) : void 0,
      a = t.culture
        ? (function () {
            try {
              if ("string" != typeof process.versions.icu) return;
              const e = new Date(9e8);
              if (
                "enero" ===
                new Intl.DateTimeFormat("es", {
                  month: "long",
                }).format(e)
              ) {
                const e = Intl.DateTimeFormat().resolvedOptions();
                return { locale: e.locale, timezone: e.timeZone };
              }
            } catch {}
          })()
        : void 0,
      d = t.cloudResource
        ? process.env.VERCEL
          ? {
              "cloud.provider": "vercel",
              "cloud.region": process.env.VERCEL_REGION,
            }
          : process.env.AWS_REGION
            ? {
                "cloud.provider": "aws",
                "cloud.region": process.env.AWS_REGION,
                "cloud.platform": process.env.AWS_EXECUTION_ENV,
              }
            : process.env.GCP_PROJECT
              ? { "cloud.provider": "gcp" }
              : process.env.ALIYUN_REGION_ID
                ? {
                    "cloud.provider": "alibaba_cloud",
                    "cloud.region": process.env.ALIYUN_REGION_ID,
                  }
                : process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME
                  ? {
                      "cloud.provider": "azure",
                      "cloud.region": process.env.REGION_NAME,
                    }
                  : process.env.IBM_CLOUD_REGION
                    ? {
                        "cloud.provider": "ibm_cloud",
                        "cloud.region": process.env.IBM_CLOUD_REGION,
                      }
                    : process.env.TENCENTCLOUD_REGION
                      ? {
                          "cloud.provider": "tencent_cloud",
                          "cloud.region": process.env.TENCENTCLOUD_REGION,
                          "cloud.account.id": process.env.TENCENTCLOUD_APPID,
                          "cloud.availability_zone":
                            process.env.TENCENTCLOUD_ZONE,
                        }
                      : process.env.NETLIFY
                        ? { "cloud.provider": "netlify" }
                        : process.env.FLY_REGION
                          ? {
                              "cloud.provider": "fly.io",
                              "cloud.region": process.env.FLY_REGION,
                            }
                          : process.env.DYNO
                            ? { "cloud.provider": "heroku" }
                            : void 0
        : void 0,
      T = t.os
        ? (async function () {
            const e = i.platform();
            switch (e) {
              case "darwin":
                return (async function () {
                  const e = {
                    kernel_version: i.release(),
                    name: "Mac OS X",
                    version: "10." + (Number(i.release().split(".")[0]) - 4),
                  };
                  try {
                    const t = await new Promise((e, t) => {
                      r.execFile("/usr/bin/sw_vers", (n, r) => {
                        n ? t(n) : e(r);
                      });
                    });
                    (e.name = E(/^ProductName:\s+(.*)$/m, t)),
                      (e.version = E(/^ProductVersion:\s+(.*)$/m, t)),
                      (e.build = E(/^BuildVersion:\s+(.*)$/m, t));
                  } catch {}
                  return e;
                })();
              case "linux":
                return (async function () {
                  const e = {
                    kernel_version: i.release(),
                    name: "Linux",
                  };
                  try {
                    const t = await l("/etc"),
                      n = _.find((e) => t.includes(e.name));
                    if (!n) return e;
                    const r = s.join("/etc", n.name),
                      o = (await u(r, { encoding: "utf-8" })).toLowerCase(),
                      { distros: i } = n;
                    e.name = i.find((e) => o.indexOf(y(e)) >= 0) || i[0];
                    const a = y(e.name);
                    e.version = S[a]?.(o);
                  } catch {}
                  return e;
                })();
              default:
                return { name: m[e] || e, version: i.release() };
            }
          })()
        : void 0,
      b = {
        "process.runtime.engine.name": "v8",
        "process.runtime.engine.version": process.versions.v8,
        ...p({ app: n, device: o, culture: a, cloud_resource: d }),
      };
    T && T.then((e) => Object.assign(b, p({ os: e }))).catch(() => {});
    const I = (async () => {
      const e = {};
      return (
        T && (e.os = await T),
        n && (e.app = n),
        o && (e.device = o),
        a && (e.culture = a),
        d && (e.cloud_resource = d),
        e
      );
    })();
    return {
      name: "Context",
      processEvent: (e) =>
        (async function (e) {
          const t = (function (e) {
            if (
              (e.app?.app_memory &&
                (e.app.app_memory = process.memoryUsage().rss),
              e.app?.free_memory &&
                "function" == typeof process.availableMemory)
            ) {
              const t = process.availableMemory?.();
              null != t && (e.app.free_memory = t);
            }
            return (
              e.device?.free_memory && (e.device.free_memory = i.freemem()), e
            );
          })(await I);
          return (
            (e.contexts = {
              ...e.contexts,
              app: { ...t.app, ...e.contexts?.app },
              os: { ...t.os, ...e.contexts?.os },
              device: { ...t.device, ...e.contexts?.device },
              culture: { ...t.culture, ...e.contexts?.culture },
              cloud_resource: {
                ...t.cloud_resource,
                ...e.contexts?.cloud_resource,
              },
            }),
            e
          );
        })(e),
      processSegmentSpan(e) {
        c.safeSetSpanJSONAttributes(e, b),
          c.safeSetSpanJSONAttributes(e, f(n, o));
      },
    };
  });
function p(e) {
  const t = {},
    { app: n, device: r, os: o, culture: i, cloud_resource: s } = e;
  if (
    (n && n.app_start_time && (t["app.start_time"] = n.app_start_time),
    r &&
      (r.arch && (t["device.archs"] = [r.arch]),
      r.boot_time && (t["device.boot_time"] = r.boot_time),
      null != r.memory_size && (t["device.memory_size"] = r.memory_size),
      null != r.processor_count &&
        (t["device.processor_count"] = r.processor_count),
      r.cpu_description && (t["device.cpu_description"] = r.cpu_description),
      null != r.processor_frequency &&
        (t["device.processor_frequency"] = r.processor_frequency)),
    o &&
      (o.name && (t["os.name"] = o.name),
      o.version && (t["os.version"] = o.version),
      o.kernel_version && (t["os.kernel_version"] = o.kernel_version),
      o.build && (t["os.build"] = o.build)),
    i &&
      (i.locale && (t["culture.locale"] = i.locale),
      i.timezone && (t["culture.timezone"] = i.timezone)),
    s)
  )
    for (const [e, n] of Object.entries(s)) null != n && (t[e] = n);
  return t;
}
function f(e, t) {
  const n = {};
  if (
    e &&
    ((n["app.memory"] = process.memoryUsage().rss),
    "function" == typeof process.availableMemory)
  ) {
    const e = process.availableMemory?.();
    null != e && (n["app.free_memory"] = e);
  }
  return null != t?.free_memory && (n["device.free_memory"] = i.freemem()), n;
}
function h() {
  const e = process.memoryUsage().rss,
    t = {
      app_start_time: new Date(
        Date.now() - 1e3 * process.uptime(),
      ).toISOString(),
      app_memory: e,
    };
  if ("function" == typeof process.availableMemory) {
    const e = process.availableMemory?.();
    null != e && (t.free_memory = e);
  }
  return t;
}
function g(e) {
  const t = {};
  let n;
  try {
    n = i.uptime();
  } catch {}
  if (
    ("number" == typeof n &&
      (t.boot_time = new Date(Date.now() - 1e3 * n).toISOString()),
    (t.arch = i.arch()),
    (!0 === e || e.memory) &&
      ((t.memory_size = i.totalmem()), (t.free_memory = i.freemem())),
    !0 === e || e.cpu)
  ) {
    const e = i.cpus(),
      n = e?.[0];
    n &&
      ((t.processor_count = e.length),
      (t.cpu_description = n.model),
      (t.processor_frequency = n.speed));
  }
  return t;
}
const m = {
    aix: "IBM AIX",
    freebsd: "FreeBSD",
    openbsd: "OpenBSD",
    sunos: "SunOS",
    win32: "Windows",
    ohos: "OpenHarmony",
    android: "Android",
  },
  _ = [
    { name: "fedora-release", distros: ["Fedora"] },
    { name: "redhat-release", distros: ["Red Hat Linux", "Centos"] },
    { name: "redhat_version", distros: ["Red Hat Linux"] },
    { name: "SuSE-release", distros: ["SUSE Linux"] },
    { name: "lsb-release", distros: ["Ubuntu Linux", "Arch Linux"] },
    { name: "debian_version", distros: ["Debian"] },
    { name: "debian_release", distros: ["Debian"] },
    { name: "arch-release", distros: ["Arch Linux"] },
    { name: "gentoo-release", distros: ["Gentoo Linux"] },
    { name: "novell-release", distros: ["SUSE Linux"] },
    { name: "alpine-release", distros: ["Alpine Linux"] },
  ],
  S = {
    alpine: (e) => e,
    arch: (e) => E(/distrib_release=(.*)/, e),
    centos: (e) => E(/release ([^ ]+)/, e),
    debian: (e) => e,
    fedora: (e) => E(/release (..)/, e),
    mint: (e) => E(/distrib_release=(.*)/, e),
    red: (e) => E(/release ([^ ]+)/, e),
    suse: (e) => E(/VERSION = (.*)\n/, e),
    ubuntu: (e) => E(/distrib_release=(.*)/, e),
  };
function E(e, t) {
  const n = e.exec(t);
  return n ? n[1] : void 0;
}
function y(e) {
  return e.split(" ")[0].toLowerCase();
}
(t.contextsToSpanAttributes = p),
  (t.getAppContext = h),
  (t.getDeviceContext = g),
  (t.getDynamicSpanAttributes = f),
  (t.nodeContextIntegration = d),
  (t.readDirAsync = l),
  (t.readFileAsync = u);
