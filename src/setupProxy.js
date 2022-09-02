const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "https://graaphql-api.herokuapp.com/graphql",
      changeOrigin: true,
    })
  );
};
