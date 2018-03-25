import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <View style={styles.overlayStyle}>
          <Text style={styles.userName}>{this.props.userName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#F6F8FA",
    height: 160,
  },
  userName: {
    marginLeft: 16,
    marginBottom: 24,
    fontSize: 16,
    color: "#445566",
  },
});

module.exports = Header;
