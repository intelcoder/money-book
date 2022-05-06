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
            '@constants': './constants',
            '@components': './components',
            '@atoms': './components/atoms',
            '@navigation': './navigation',
            '@screens': './screens',
            '@theme': './theme',
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
