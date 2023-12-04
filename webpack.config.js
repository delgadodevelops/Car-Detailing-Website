const path = require('path');

module.exports = {
  // Your existing webpack configuration...
  resolve: {
    fallback: {
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
  },
  // Rest of your webpack configuration...
};
