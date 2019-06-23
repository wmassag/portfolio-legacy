const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  //Entry point of App
  entry: './app/index.js',
  
  module: {
    rules: [
      // loader for JS files invoking ES5 -> ES6 transpilation
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      
      // loader for html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      
      //loader for images
      {
        test: /\.(gif|jpe?g|svg|png)$/i,
        exclude: /static/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },
      
      //loader for SCSS preprocessor
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, //minify CSS for production
          'css-loader', //translate CSS into CommonJS
          'sass-loader' //compile Sass to CSS (uses Node Sass by default)
        ]
      }
    ]
  },
  
  //requirement for react-router on development server
  devServer: {
    historyApiFallback: true
  },
  
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
