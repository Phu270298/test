const path = require('path');
const fs = require('fs');
const scssFiles = fs.readdirSync('./scss').filter(function (file) {
  return file.match(/.*\.scss$/);
});
const scssEntries = scssFiles.map((filename) => {
  return './scss/' + filename;
});
module.exports = {
  entry: [
    ...scssEntries,
  ],
  output: {
    path: path.resolve(__dirname, 'css'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: '', name: '[name].min.css' }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
