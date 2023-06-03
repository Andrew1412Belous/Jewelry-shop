const path = require('path')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/images/[name][ext]',
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temporary_cache'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          miniCss.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: '[name].css',
    }),
  ],
}
