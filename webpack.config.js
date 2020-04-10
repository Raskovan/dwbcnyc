const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'dwbc-lib.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    // libraryExport: 'default',
    library: 'dwbcLib',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'img/',
              publicPath: 'dist/img/',
            },
          },
        ],
      },
      {
        test: /\.(md)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'md/',
              publicPath: 'dist/md/',
            },
          },
        ],
      },
    ],
  },
}
