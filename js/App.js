/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.getMoviesFromApiAsync();
  }
  _keyExtractor = (item, index) => `moview title-${index}`;

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          () => {},
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={this.state.dataSource}
          renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    margin: 20,
  },
  item: {
    padding: 16,
    fontSize: 18,
    height: 60,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: 'gray',
    marginLeft: 16,
    marginRight: 16,
  },
});

export default App;
