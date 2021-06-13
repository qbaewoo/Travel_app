import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ErrorScreen = () => {
  return (
    <View style={styles.main}>
      <Text>
        Oops, something went wrong! Seems you are out of internet connection!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ErrorScreen;
