const dotenv = require('dotenv-safe');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const getEnvironmentVariables = env => {
  const dotenvVariables = dotenv.config({ path: `${__dirname}/.env` }).parsed;

  if (!dotenvVariables) {
    throw new Error(`.envを設定してください。`);
  }

  // process.env.*のキーを設定して
  const environmentVariables = Object.keys(dotenvVariables).reduce((keys, key) => {
    const newKeys = keys;

    newKeys[`process.env.${key}`] = JSON.stringify(dotenvVariables[key]);

    return newKeys;
  }, {});

  return environmentVariables;
};
module.exports = env => ({
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.ts/, use: 'ts-loader'}]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new webpack.DefinePlugin(getEnvironmentVariables(env))],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  }
})