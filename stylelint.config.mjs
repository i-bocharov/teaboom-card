export default {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**'],
  rules: {
    'selector-class-pattern': null,
    'media-feature-range-notation': 'prefix',
  },
};
