export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation changes
        "style", // formatting, missing semi colons, etc; no code change
        "refactor", // refactoring code, no new features or bug fixes
        "perf", // performance improvements
        "test", // adding or fixing tests
        "build", // build system changes
        "ci", // CI config changes
        "chore", // maintenance tasks
        "revert", // revert a previous commit
      ],
    ],
    "subject-case": [0], // allow any case for commit subject
  },
};
