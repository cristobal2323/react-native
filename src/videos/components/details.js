import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import {WebView} from 'react-native-webview';

function Details(props) {
  return (
    <ScrollView>
      <View style={styles.top}>
        <Text>{props.name}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image
            style={styles.cover}
            source={{uri: props.sprites.front_default}}
          />
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </View>
      </View>
      <View style={styles.trailer}>
        <WebView source={{uri: 'https://www.youtube.com/embed/mXRfApkMYZU'}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  trailer: {
    height: 200,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  },
});

export default Details;
