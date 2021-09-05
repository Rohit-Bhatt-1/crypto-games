import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../../redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Header from "../Header/Header";
import { Provider } from "react-redux";
import Home from "../Home/Home";
import { Route } from "react-router";

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
        <Route path="/" component={Home} />
      </Provider>
    </Router>
  );
}
