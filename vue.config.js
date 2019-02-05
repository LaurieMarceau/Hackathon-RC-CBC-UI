module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://mozaik-api.herokuapp.com',
        changeOrigin: true,
      },
    },
  },
};
