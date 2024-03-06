module.exports = {
  extends: ["stylelint-config-recommended-scss", "stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  rules: {
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["fade"],
      },
    ],
    "no-descending-specificity": null,
    "block-no-empty": null,
  },
};
