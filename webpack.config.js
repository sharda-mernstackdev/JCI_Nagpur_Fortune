const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Image files
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.75, 0.90],
                speed: 4,   
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/, // CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development', // Change to 'production' for production builds
  devtool: 'source-map', // Useful for debugging
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
