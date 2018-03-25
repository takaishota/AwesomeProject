import React, { Component } from "react";
import { DrawerLayoutAndroid, ScrollView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "./header";
import MenuItem from "./menuItem";

import Home from "../home";

class NavigationView extends Component {
  home = "home";
  notification = "notifications";
  account = "account";

  homeIcon = require("./img/icon-home.png");
  notificationIcon = require("./img/icon-notification.png");
  accountIcon = require("./img/icon-account.png");

  getInitialState() {
    return {
      activeTab: this.home,
    };
  }

  constructor(props) {
    super(props);
    this.state = { activeTab: this.home };
  }

  setSelectedTab(name) {
    this.setState({
      activeTab: name,
    });
  }

  renderNavigationView() {
    return (
      <ScrollView>
        <Header userName="てすと太郎" />
        <MenuItem
          name={this.home}
          title="ホーム"
          selected={this.state.activeTab === this.home}
          onPress={() => {
            this.setSelectedTab(this.home);
            this.refs.drawer.closeDrawer();
          }}
          icon={this.homeIcon}
          selectedIcon={this.homeIcon}
        />
        <MenuItem
          name={this.notification}
          title="お知らせ"
          selected={this.state.activeTab === this.notification}
          onPress={() => {
            this.setSelectedTab(this.notification);
            this.refs.drawer.closeDrawer();
          }}
          icon={this.notificationIcon}
          selectedIcon={this.notificationIcon}
        />
        <MenuItem
          name={this.account}
          title="アカウント設定"
          selected={this.state.activeTab === this.account}
          onPress={() => {
            this.setSelectedTab(this.account);
            this.refs.drawer.closeDrawer();
          }}
          icon={this.accountIcon}
          selectedIcon={this.accountIcon}
        />
      </ScrollView>
    );
  }

  renderContent() {
    switch (this.state.activeTab) {
      case "home":
        return <Home />;

      case "notifications":
        return (
          <View>
            <Text>テスト</Text>
          </View>
        );

      case "account":
        return (
          <View>
            <Text>テスト</Text>
          </View>
        );

      default:
        return <View />;
    }
  }

  openMenu() {
    this.refs.drawer.openDrawer();
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => this.renderNavigationView()}
      >
        <Icon.ToolbarAndroid
          title="AwesomeApp"
          titleColor="#456"
          navIconName="md-menu"
          iconColor="#456"
          style={{ height: 60 }}
          onIconClicked={() => this.openMenu()}
        />
        {this.renderContent()}
      </DrawerLayoutAndroid>
    );
  }
}

export default NavigationView;
