module.exports = {
  client: {
    service: {
      url:
        "https://graaphql-api.herokuapp.com/graphql" ||
        "http://localhost:4000/grapql",
      skipSSLValidation: true,
    },
  },
};
