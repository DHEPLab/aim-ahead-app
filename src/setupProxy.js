const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://aim-ahead-lb-dev-1871613311.us-east-1.elb.amazonaws.com/",
      changeOrigin: true,
    }),
  );
};
