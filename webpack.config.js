const path = require('path');
const { spawn } = require('child_process');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

class ExecuteAppleScriptPlugin {
  apply(compiler) {
    const dest = path.join(
      compiler.options.output.path,
      compiler.options.output.filename,
    );

    compiler.hooks.done.tap('execute-apple-script-plugin', async (stats) => {
      spawn('osascript', [
        '-l',
        'JavaScript',
        '-e',
        `var ae = Application('Adobe After Effects 2022');
        ae.activate();
        ae.doscriptfile("${dest}");`,
      ]);
    });
  }
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/index.ts'],
  output: {
    environment: {
      arrowFunction: false,
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.jsx',
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              plugins: [],
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new ExecuteAppleScriptPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.js', '.json'],
  },
};
