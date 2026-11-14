// vendor/other/module-66342.js — webpack module 66342
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.isUrlProbablySupportMultiRangeRequests = l),
  (t.createClient = function (e, t, n) {
    if ("string" == typeof e)
      throw (0, r.newError)(
        "Please pass PublishConfiguration object",
        "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION",
      );
    const d = e.provider;
    switch (d) {
      case "github": {
        const r = e,
          o =
            (r.private
              ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN
              : null) || r.token;
        return null == o
          ? new s.GitHubProvider(r, t, n)
          : new u.PrivateGitHubProvider(r, t, o, n);
      }
      case "bitbucket":
        return new o.BitbucketProvider(e, t, n);
      case "gitlab":
        return new a.GitLabProvider(e, t, n);
      case "keygen":
        return new c.KeygenProvider(e, t, n);
      case "s3":
      case "spaces":
        return new i.GenericProvider(
          {
            provider: "generic",
            url: (0, r.getS3LikeProviderBaseUrl)(e),
            channel: e.channel || null,
          },
          t,
          { ...n, isUseMultipleRangeRequest: !1 },
        );
      case "generic": {
        const r = e;
        return new i.GenericProvider(r, t, {
          ...n,
          isUseMultipleRangeRequest:
            !1 !== r.useMultipleRangeRequest && l(r.url),
        });
      }
      case "custom": {
        const o = e,
          i = o.updateProvider;
        if (!i)
          throw (0, r.newError)(
            "Custom provider not specified",
            "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION",
          );
        return new i(o, t, n);
      }
      default:
        throw (0, r.newError)(
          `Unsupported provider: ${d}`,
          "ERR_UPDATER_UNSUPPORTED_PROVIDER",
        );
    }
  });
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(62626 /* vendor/other/module-62626 */),
  i = n(72286 /* vendor/other/module-72286 */),
  s = n(93698 /* vendor/other/module-93698 */),
  a = n(98426 /* vendor/other/module-98426 */),
  c = n(57730 /* vendor/other/module-57730 */),
  u = n(26967 /* vendor/other/module-26967 */);
function l(e) {
  return !e.includes("s3.amazonaws.com");
}
