// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config').MetroConfig}
 */
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

// !!Experimental!! import needed for tree shaking
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
  },
});

module.exports = config