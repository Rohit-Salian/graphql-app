import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Conference } from "./pages/conference/Conference";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./pages/home/Home";
import { Media } from "./pages/media/Media";
import { OurStory } from "./pages/our-story/OurStory";
import React from "react";
import { Robotics } from "./pages/robotics/Robotics";

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    //Replace "https://graaphql-api.herokuapp.com/graphql" with your Heroku api link
    uri:
      "https://graaphql-api.herokuapp.com/graphql" ||
      "http://localhost:4000/graphql",
  }),
  credentials: "same-origin",
});

function AppRouter() {
  return (
    <div id="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/our-story">
            <OurStory />
          </Route>
          <Route path="/robotics">
            <Robotics />
          </Route>
          <Route path="/conference">
            <Conference />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
