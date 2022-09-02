const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target:
        "https://graaphql-api.herokuapp.com/graphql" ||
        "http://localhost:4000/grapql",
      changeOrigin: true,
    })
  );
};
