import React, { Component } from "react";
import { Image, Text, View, StyleSheet, TouchableHighlight } from "react-native";

class MenuItem extends Component {
  render() {
    const icon = this.props.selected ? this.props.selectedIcon : this.props.icon;
    const selectedTitleStyle = this.props.selected && styles.selectedTitle;
    let badge;
    if (this.props.badge) {
      badge = (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{this.props.badge}</Text>
        </View>
      );
    }
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="#F6F8FA">
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} />
          <Text style={[styles.title, selectedTitleStyle]}>{this.props.title}</Text>
          {badge}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#778899",
  },
  selectedTitle: {
    color: "#445566",
  },
});

module.exports = MenuItem;
