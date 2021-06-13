import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from 'react-query';
import ErrorScreen from '../../screensMerey/ErrorScreen/ErrorScreen';
import SplashScreen from '../../screensMerey/SplashScreen/SplashScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAppContext } from '../../../navigation/tabs';
import { cities } from '../../../assets/common/data';

async function fetchPlaces() {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/Overexm/2e602c690de92ce4cbcc2710d6f5e01a/raw/2ab1dd0b1e8b9f1b29253d1ff816eef984caa8d5/data.json',
    );
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const City1 = ({ navigation }) => {
  const [state, dispatch] = useAppContext();
  const { isError, isFetching,data } = useQuery('places', fetchPlaces);
  const city = cities.map(place => {
    if (place.city === 'Nur-Sultan') return place;
  });

  if (isFetching) return <SplashScreen />;
  if (isError) return <ErrorScreen />;

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

  const renderCard = item => {
    return (
      <TouchableOpacity
        style={styles.placeCard}
        onPress={() => navigation.navigate('PlaceInfo', { id: item.id })}>
        <View>
          <ImageBackground
            resizeMode="stretch"
            source={item.image}
            style={styles.cardImageView}>
            <TouchableOpacity
              style={styles.heartTouchable}
              onPress={() => handleFavouriteBtn(item)}
              >
              {renderHeartIcon(item.id)}
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.placesList}
        data={city.filter(function (element) {
          return element !== undefined;
        })}
        renderItem={({ item }) => renderCard(item)}
        kkeyExtractor={(item, idx) => (idx + 30).toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  placesList: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  placeCard: {
    height: 200,
    width: '45%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    overflow: 'hidden',
  },
  cardImageView: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    textAlign: 'center',
    margin: 2,
  },
  heartTouchable: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default City1;
