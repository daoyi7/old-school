const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const os = require('../oldschool.config.js')

module.exports = {
  entry: os.entry,
  output: {
    filename: os.output,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }, {
            loader: 'less-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }, {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    // 配置引用文件时可省略的后缀名
    extensions: [" ", ".js", ".json", ".jsx"],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      container: path.resolve(__dirname, '../src/container')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: os.title,
      template: os.template,
      dllPath: os.output
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: os.port,
    hot: true,
    inline: true,
    historyApiFallback: true
  }
}