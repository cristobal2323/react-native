import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Category(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        style={styles.wrapper}
        source={{
          uri: props.item.sprites.default,
        }}>
        <Text style={styles.genre}>{props.item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
    backgroundColor: '#805353',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});

export default Category;
