import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { cities } from '../../../assets/common/data';
import { useAppContext } from '../../../navigation/tabs';

const PlaceInfo = ({ route }) => {
  const [state, dispatch] = useAppContext();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const place = cities.find(place => place.id === route.params.id);
    setInfo(place);
  }, []);

  const handleFavouriteBtn = item => {
    dispatch({
      type: 'addToList',
      payload: item,
    });
  };

  const renderHeartIcon = id => {
    const idx = state.list.findIndex(item => item.id === id);

    if (idx >= 0) {
      return <AntDesign name="heart" size={25} color="#ef476f" />;
    }

    return <AntDesign name="hearto" size={25} color="#fff" />;
  };

  return info ? (
    <View style={styles.main}>
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <ImageBackground
            source={info.image}
            style={{
              flex: 1,
              width: undefined,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              style={{ position: 'relative', left: 10, top: 10 }}
              onPress={() => handleFavouriteBtn(info)}>
              {renderHeartIcon(route.params.id)}
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={{ fontSize: 25, margin: 10 }}>{info.title}</Text>
        <Text style={{ fontSize: 20, marginVertical: 5, marginHorizontal: 10 }}>
          {info.address}
        </Text>
        <Text style={{ fontSize: 16, marginVertical: 5, marginHorizontal: 10 }}>
          {info.description}
        </Text>
      </View>
    </View>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  cardView: {
    height: 600,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    margin: 10,
    padding: 10,
  },
  imageView: {
    height: 250,
    position: 'relative',
  },
});

export default PlaceInfo;
