const path = require('path')
// const webpack = require('webpack')
// eslint-disable-next-line import/no-extraneous-dependencies
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/images/[name][ext]',
  },
  // resolve: {
  //   alias: {
  //     images: path.resolve(__dirname, './src/img/'),
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     'style-loader',
      //     // Translates CSS into CommonJS
      //     'css-loader',
      //     // Compiles Sass to CSS
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 25000,
      //       name: 'assets/images/[name].[ext]',
      //     },
      //   },
      // },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          // miniCss.loader,
          'style-loader',
          'css-loader',
        ],
      },
      // {
      //   test: /\.(png|svg|jp?g|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'assets/images/[name].[ext]'
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'assets/images/[name].[ext]',
      //   },
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'assets/images/[name].[ext]',
      //       },
      //     },
      //   ],
      // },
    ],
  },
  // plugins: [
  //   // eslint-disable-next-line new-cap
  //   new miniCss({
  //     filename: 'style.css',
  //   }),
  // ],
}
