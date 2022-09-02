module.exports = {
  client: {
    service: {
      //Replace "https://graaphql-api.herokuapp.com/graphql" with your Heroku api link
      url:
        "https://graaphql-api.herokuapp.com/graphql" ||
        "http://localhost:4000/graphql",
      skipSSLValidation: true,
    },
  },
};
