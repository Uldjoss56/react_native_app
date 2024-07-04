const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
  };

  config.resolver = {
    ...resolver,
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
    assetExts: resolver.assetExts.concat(['glb', 'gltf', 'png', 'jpg']),
  };

  return config;
})();
