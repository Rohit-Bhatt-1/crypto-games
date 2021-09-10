import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../../redux/reducers/rootReducer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import EditProfile from "../Profile/EditProfile/EditProfile";
import MyProfile from "../Profile/MyProfile/MyProfile";


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
        <Route path="/edit-profile">
          <EditProfile />
        </Route>
        <Route path="/profile">
          <MyProfile />
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
