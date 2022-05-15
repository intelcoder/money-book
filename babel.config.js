module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ... some other plugins
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@constants': './src/constants',
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@navigations': './src/navigation',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@hooks': './src/hooks',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
        },
      ],
    ],
  }
}
