const path = require("path");
const SRC_DIR = path.resolve(__dirname, "./client/src/components/");

module.exports = {
  entry: "./client/src/components/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/dist/")
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
