module.exports = {
  client: {
    service: {
      //Replace "https://graaphql-api.herokuapp.com/graphql" with your Heroku link
      url:
        "https://graaphql-api.herokuapp.com/graphql" ||
        "http://localhost:4000/grapql",
      skipSSLValidation: true,
    },
  },
};
