import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../../redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import Home from "../Home/Home";
import { Route, Switch } from "react-router";
import Profile from "../Profile/Profile";

export default function Main() {
  const middlewares = [thunk];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
          <Route path="/test">
            <h1>test</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}
