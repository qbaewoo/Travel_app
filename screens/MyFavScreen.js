import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyFavScreen = ({navigation})=>{
  return (
    <ScrollView style={styles.container}>
      <View style={ styles.centerView }>
        <Card style={ styles.cardStyle }>
        <Card.Cover source={ require('../assets/banners/img_6.jpg') } style={ styles.imageView }/>
           <Card.Content style={ styles.contentView }>
               <Icon name='heart-multiple' size={30} style={{marginLeft: 210, color: "#ff5c83",}}/>
           <Title style={ styles.cardTitle }>Charyn Canyon</Title>
           <Paragraph style= { styles.cardParagraph }>Almaty Province</Paragraph>
          </Card.Content>
        </Card>
        </View>

        <View style={ styles.centerView }>
         <Card style={ styles.cardStyle }>
        <Card.Cover source={ require('../assets/banners/qazaqgourmet.jpg') } style={ styles.imageView }/>
           <Card.Content style={ styles.contentView }>
               <Icon name='heart-multiple' size={30} style={{marginLeft: 210, color: "#ff5c83",}}/>
           <Title style={ styles.cardTitle }>Qazaq Gourmet</Title>
           <Paragraph style= { styles.cardParagraph }>Nur-Sultan</Paragraph>
          </Card.Content>
        </Card>
        </View>

        <View style={ styles.centerView }>
         <Card style={ styles.cardStyle }>
        <Card.Cover source={ require('../assets/banners/gym.jpg') } style={ styles.imageView }/>
           <Card.Content style={ styles.contentView }>
               <Icon name='heart-multiple' size={30} style={{marginLeft: 210, color: "#ff5c83",}}/>
           <Title style={ styles.cardTitle }>Underground Gym</Title>
           <Paragraph style= { styles.cardParagraph }>Nur-Sultan</Paragraph>
          </Card.Content>
        </Card>
        </View>

      </ScrollView>
  );
}

export default MyFavScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F1F1F1",
  },
  centerView: {
    marginTop: 20,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 29,
    textAlign: 'center',
    color: "#3C1D62",
  },
  cardStyle: {
    width: 275,
    height: 196,
    borderRadius: 20,
  },
  cardTitle: {
    color: 'white',
    fontSize: 28,
  },
  cardParagraph: {
    color: 'white',
    fontSize: 20,
  },
  imageView: {
    height: '100%',
    width: '100%', 
    position: 'relative',
    borderRadius: 20,
    overlayColor: "#000",
  },
  contentView: {
    position: 'absolute', 
    bottom: 0, 
    left: 0,
  },
});
