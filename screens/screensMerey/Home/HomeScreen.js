import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useQuery } from 'react-query';
import SplashScreen from '../SplashScreen/SplashScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
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

const HomeScreen = ({ navigation }) => {
  const { isError, isFetching, data } = useQuery('home-places', fetchPlaces);

  const renderCard = item => {
    return (
      <View style={styles.placeCard}>
        <ImageBackground
          resizeMode="stretch"
          source={item.image}
          style={styles.cardImageView}>
          <TouchableOpacity
            style={styles.infoTouchable}
            onPress={() => navigation.navigate('PlaceInfo', { id: item.id })}>
            <AntDesign name="infocirlceo" size={22} color="white" />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    );
  };

  if (isFetching) return <SplashScreen />;
  if (isError) return <ErrorScreen />;

  return (
    <View style={styles.main}>
      <View style={styles.bannerView}>
        <Image
          source={require('./img/mountain.jpeg')}
          resizeMode="stretch"
          style={{ flex: 1, width: undefined, height: undefined }}
        />
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.buttonViewTouchable}
          onPress={() => navigation.navigate('City1')}>
          <FontAwesome name="fort-awesome" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonViewTouchable}
          onPress={() => navigation.navigate('City2')}>
          <FontAwesome5 name="city" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.recommendedView}>
        <Text style={{ fontSize: 20, marginHorizontal: 20, marginVertical: 10 }}>
          Recommended
        </Text>
        <FlatList
          data={cities}
          renderItem={({ item }) => renderCard(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, idx) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bannerView: {
    height: 200,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonsView: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonViewTouchable: {
    width: 60,
    height: 60,
    backgroundColor: '#CC9FF9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  recommendedView: {
    height: 270,
  },
  placeCard: {
    height: 200,
    width: 200,
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
  infoTouchable: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeScreen;
