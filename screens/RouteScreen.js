import * as React from 'react';
import MapView, { PROVIDER_GOOGLE,Circle,Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,TextInput,ScrollView,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

//icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';


//JSON for Dark Mode
const mapDarkStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

//JSON for Standard Mode
const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
];

const RouteScreen=({ route, navigation })=>{

  /*const [lctn, setLctn] = React.useState(null);
  const [pointA, setPointA] =  React.useState(null);
  const [pointB, setPointB] =  React.useState(null);
  const [streetName, setStreetName] = React.useState("");
  const [region, setRegion] =  React.useState(null);*/


  const theme = useTheme();
  return (
    <View style={styles.container}>
      <MapView 
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle} //if theme.dark is present, use mapDarkStyle, otherwise it uses mapStandardStyle
      region={{
      latitude: 51.105052,
      longitude: 71.403960,
      latitudeDelta: 0.0822,
      longitudeDelta: 0.0421,
    }}>
    <Marker 
    coordinate={{
      latitude: 51.090052,
      longitude: 71.415960,
      }} pinColor="red" title="Expo" description="Expo 2017"
     />

    <Circle 
    center={{
      latitude: 51.090052,
      longitude: 71.415960,
      }} radius={400} strokeWidth = { 2 } fillColor = { 'rgba(230,238,255,0.5)' }
    />
      </MapView>

<View style={styles.box}>
    <Text style={{color:'#3C1D62', marginLeft: 130, marginTop: 5, fontWeight: 'bold', fontFamily: "monospace" , fontSize: 20}}>Your Route</Text>
    <View style={styles.sbox}>

        <View style={styles.action}>
        <FontAwesome name="dot-circle-o" size={20} color="#5facdb"/>
          <TextInput 
          placeholder="My current location"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          />
    </View>

    <View style={styles.action}>
        <MIcon name="location-pin" size={20} color='rgba(230,238,255,0.5)'/>
          <TextInput 
          placeholder="Final Destination"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          />
    </View>  
     </View>
</View>


    </View>
  );
}

export default RouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  sbox: {
    padding: 20,
    paddingBottom: 23,
    marginTop: 20,
    height: 130,
    width: 300,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    marginLeft: 47,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  box: {
    position:'absolute', 
    backgroundColor: '#B996E4',
    width: '100%',
    alignSelf:'center',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    height: 120,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: "#7036B9",
    paddingBottom: 3,
},
actionError:{
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#FF0000",
  paddingBottom: 3,
},
textInput:{
    flex: 1,
    paddingLeft: 11,
    color:"#3C1D62",
},
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});