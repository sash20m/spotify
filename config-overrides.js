// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, useEslintRc, addBundleVisualizer } = require('customize-cra');

module.exports = override(useEslintRc('.eslintrc.js'), process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer());
