import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import Search from '../../sections/containers/search';
import Icon from '../../sections/components/icon';

class Lucky extends Component {
  static navigationOptions = () => {
    return {
      title: 'Voy a tener suerte',
      tabBarIcon: <Icon icon="⭐️" />,
    };
  };
  componentDidMount() {
    this.focus = this.props.navigation.addListener('didFocus', () => {
      if (Platform.OS) {
        StatusBar.setBarStyle('dark-content');
      } else {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('white');
      }
    });
  }
  componentWillUnmount() {
    this.focus.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>🍀</Text>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lucky;
