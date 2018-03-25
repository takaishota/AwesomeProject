import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import NavigationView from "./components/navigationView/navigationView";

function setup() {
  class Root extends React.Component {
    render() {
      return (
        <Provider store={configureStore}>
          <NavigationView />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
