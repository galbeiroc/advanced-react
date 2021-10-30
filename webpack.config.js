const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/components/Index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
};
