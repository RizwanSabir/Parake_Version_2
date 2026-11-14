// vendor/other/module-87113.js — webpack module 87113
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(99606 /* vendor/other/module-99606 */),
  i = r.createStackParser(
    r.nodeStackLineParser(o.createGetModuleFromFilename()),
  );
(t.defaultStackParser = i),
  (t.getSentryRelease = function (e) {
    if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
    if (r.GLOBAL_OBJ.SENTRY_RELEASE?.id) return r.GLOBAL_OBJ.SENTRY_RELEASE.id;
    const t =
        process.env.GITHUB_SHA ||
        process.env.CI_MERGE_REQUEST_SOURCE_BRANCH_SHA ||
        process.env.CI_BUILD_REF ||
        process.env.CI_COMMIT_SHA ||
        process.env.BITBUCKET_COMMIT,
      n =
        process.env.APPVEYOR_PULL_REQUEST_HEAD_COMMIT ||
        process.env.APPVEYOR_REPO_COMMIT ||
        process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ||
        process.env.AWS_COMMIT_ID ||
        process.env.BUILD_SOURCEVERSION ||
        process.env.GIT_CLONE_COMMIT_HASH ||
        process.env.BUDDY_EXECUTION_REVISION ||
        process.env.BUILDKITE_COMMIT ||
        process.env.CIRCLE_SHA1 ||
        process.env.CIRRUS_CHANGE_IN_REPO ||
        process.env.CF_REVISION ||
        process.env.CM_COMMIT ||
        process.env.CF_PAGES_COMMIT_SHA ||
        process.env.DRONE_COMMIT_SHA ||
        process.env.FC_GIT_COMMIT_SHA ||
        process.env.HEROKU_TEST_RUN_COMMIT_VERSION ||
        process.env.HEROKU_BUILD_COMMIT ||
        process.env.HEROKU_SLUG_COMMIT ||
        process.env.RAILWAY_GIT_COMMIT_SHA ||
        process.env.RENDER_GIT_COMMIT ||
        process.env.SEMAPHORE_GIT_SHA ||
        process.env.TRAVIS_PULL_REQUEST_SHA ||
        process.env.VERCEL_GIT_COMMIT_SHA ||
        process.env.VERCEL_GITHUB_COMMIT_SHA ||
        process.env.VERCEL_GITLAB_COMMIT_SHA ||
        process.env.VERCEL_BITBUCKET_COMMIT_SHA ||
        process.env.ZEIT_GITHUB_COMMIT_SHA ||
        process.env.ZEIT_GITLAB_COMMIT_SHA ||
        process.env.ZEIT_BITBUCKET_COMMIT_SHA,
      o =
        process.env.CI_COMMIT_ID ||
        process.env.SOURCE_COMMIT ||
        process.env.SOURCE_VERSION ||
        process.env.GIT_COMMIT ||
        process.env.COMMIT_REF ||
        process.env.BUILD_VCS_NUMBER ||
        process.env.CI_COMMIT_SHA;
    return t || n || o || e;
  });
