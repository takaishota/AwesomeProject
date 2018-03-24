import React from 'react';
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import Home from "./components/home";

function setup() {
  class Root extends React.Component {
    render() {
      return (
        <Provider store={configureStore}>
          <Home />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
