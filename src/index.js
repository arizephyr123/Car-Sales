import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
import { reducer } from "./reducers/reducers";

//created store, passed in reducer imported above
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
    // wrapped App in Redux Provider imported above
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
