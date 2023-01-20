const path = require('path')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/images/[name][ext]',
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
          // 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new miniCss({
      filename: '[name].css',
    }),
  ],
}

