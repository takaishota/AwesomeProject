import React, { Component } from "react";
import { TabBarIOS, Text, View } from "react-native";

import Home from "../home";

class NavigationView extends Component {
  getInitialState() {
    return {
      selectedTab: "home",
    };
  }

  constructor(props) {
    super(props);
    this.state = { selectedTab: "home" };
  }

  setSelectedTab(name) {
    this.setState({
      selectedTab: name,
    });
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          name="home"
          title="home"
          systemIcon="search"
          selected={this.state.selectedTab === "home"}
          onPress={() => this.setSelectedTab("home")}
        >
          <Home />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          name="notice"
          title="notice"
          systemIcon="history"
          selected={this.state.selectedTab === "notice"}
          onPress={() => this.setSelectedTab("notice")}
        >
          <View style={{ backgroundColor: "white" }}>
            <Text>テスト</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          name="setting"
          title="setting"
          systemIcon="contacts"
          selected={this.state.selectedTab === "setting"}
          onPress={() => this.setSelectedTab("setting")}
        >
          <View style={{ backgroundColor: "white" }}>
            <Text>テスト</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default NavigationView;
