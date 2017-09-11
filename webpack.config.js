
const path = require('path');
const outputPath = path.resolve(__dirname, 'client', 'dist');

module.exports = {

  entry: './client/index.js',

  output: {
    path: outputPath,
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        /node_modules/
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['env', {'targets': { 'browsers': ['last 2 versions'] }}],
            'react'
          ]
        } 
      }]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

};
