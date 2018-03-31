module.exports = [
  {
    test: /\.js$/,
    exclude: [/node_modules/],
    loader: "babel-loader",
    query: {
      presets: ["es2015", "stage-0"],
      plugins: ["transform-runtime", "angularjs-annotate"]
    }
  },
  // {
  //   test: /\.js$/,
  //   exclude: [/node_modules/],
  //   loader: "ng-annotate"
  // },
  {
    test: /\.css$/,
    loader: "style-loader!css-loader"
  },
  {
    test: /\.less$/,
    loader: "style!css!less"
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    loader: "raw-loader"
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  },
  {
    test: /\.jpg$/,
    exclude: /node_modules/,
    loader: "file-loader"
  },
  {
    test: /\.png$/,
    exclude: /node_modules/,
    loader: "url-loader"
  }
];
