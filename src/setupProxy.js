const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      //Replace "https://graaphql-api.herokuapp.com/graphql" with your Heroku link
      target:
        "https://graaphql-api.herokuapp.com/graphql" ||
        "http://localhost:4000/grapql",
      changeOrigin: true,
    })
  );
};
