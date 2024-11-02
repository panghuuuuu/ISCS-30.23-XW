const config = {
  mode: 'development', // "production" | "development" | "none"
  resolve: {
    extensions: ['*', '.mjs', '.js', '.json'],
    fallback: {
      "path": require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = config;
