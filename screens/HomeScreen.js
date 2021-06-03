import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar, Image,FlatList, TextInputBase, TouchableOpacity,ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper/src';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({navigation})=>{
    const {colors} = useTheme();

    const theme = useTheme();
    return(
        <ScrollView style={StyleSheet.container}>
            <StatusBar barStyle={theme.dark ? 'light-content': 'dark-content'}/>
            <View style={styles.sliderContainer}>
            <Swiper autoplay horizontal={false} height={200} activeDotColor="#FF6347">
                <View style={styles.slide}>
                    <Image source={require('../assets/banners/img_1.jpg')}
                    resizeMode="cover" 
                    style={styles.sliderImage}
                        />
                     </View>
                <View style={styles.slide}>
                <Image source={require('../assets/banners/img_5.jpg')}
                    resizeMode="cover"
                    style={styles.sliderImage}
                     />
                </View>
                <View style={styles.slide}>
                <Image source={require('../assets/banners/img_6.jpg')}
                    resizeMode="cover"
                    style={styles.sliderImage}
                     />
                </View>
                <View style={styles.slide}>
                <Image source={require('../assets/banners/img_4.jpg')}
                    resizeMode="cover"
                    style={styles.sliderImage}
                     />
                </View>
            </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
               <View style={styles.categoryIcon}>
                  <Icon name="help"  size={35} color="#3C1D62"/>
               </View>
               </TouchableOpacity>
               
               <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
               <View style={styles.categoryIcon}>
                  <MaterialCommunityIcons name="food-fork-drink"  size={35} color="#3C1D62"/>
               </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
               <View style={styles.categoryIcon}>
                  <MaterialCommunityIcons name="bank"  size={35} color="#3C1D62"/>
               </View>
               </TouchableOpacity>
               
               
               </View>
        

        <Text style={{marginTop: 30, marginLeft: 20,}}>Recommended</Text>



        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginHorizontal: -10, marginTop: 20,}}>

       <TouchableOpacity
        onPress={()=>{}} //first
         style={styles.card}>
             <Image source={require('../assets/banners/img_1.jpg')}
            style={{width:200, borderRadius:10, height: 150,}} />
        
        
        <View style={{
            flexDirection: 'row',
            width: 150,
            alignItems: 'center',
        }}>
            <View style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
            }}>
                <Text style={{
                    fontFamily: "Roboto",
                    fontSize: 13,
                    color: '#3C1D62'
                }}>
                    Kazakhstan Central Concert Hall
                </Text>
            </View>
            <MaterialCommunityIcons name="map-marker" size={25} color="rgba(230,238,255,0.5)"/>
        </View>
        </TouchableOpacity>




        <TouchableOpacity //second
        onPress={()=>{}}
         style={styles.card}>
            <Image source={require('../assets/banners/img_2.jpeg')}
            style={{width:200, borderRadius:10, height: 150,}} />
        
        
        <View style={{
            flexDirection: 'row',
            width: 150,
            alignItems: 'center',
        }}>
            <View style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
            }}>
                <Text style={{
                    fontFamily: "Roboto",
                    fontSize: 13,
                    color: '#3C1D62'
                }}>
                    Mangilik El Triumphal Arch
                </Text>
            </View>
            <MaterialCommunityIcons name="map-marker" size={25} color="rgba(230,238,255,0.5)"/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity //third
        onPress={()=>{}} 
        style={styles.card}>
            <Image source={require('../assets/banners/img_3.jpeg')}
            style={{width:200, borderRadius:10, height: 150,}} />
        
        
        <View style={{
            flexDirection: 'row',
            width: 150,
            alignItems: 'center',
        }}>
            <View style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
            }}>
                <Text style={{
                    fontFamily: "Roboto",
                    fontSize: 13,
                    color: '#3C1D62'
                }}>
                    Kazak Eli Monument
                </Text>
            </View>
            <MaterialCommunityIcons name="map-marker" size={25} color="rgba(230,238,255,0.5)"/>
        </View>
        </TouchableOpacity>



        <TouchableOpacity //forth
        onPress={()=>{}}
         style={styles.card}>
            <Image source={require('../assets/banners/img_4.jpg')}
            style={{width:200, borderRadius:10, height: 150,}} />
        
        
        <View style={{
            flexDirection: 'row',
            width: 150,
            alignItems: 'center',
        }}>
            <View style={{
                paddingHorizontal: 5,
                paddingVertical: 5,
            }}>
                <Text style={{
                    fontFamily: "Roboto",
                    fontSize: 13,
                    color: '#3C1D62'
                }}>
                    Baiterek tower
                </Text>
            </View>
            <MaterialCommunityIcons name="map-marker" size={25} color="rgba(230,238,255,0.5)"/>
        </View>
        </TouchableOpacity>

        </ScrollView>

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20,}}>View all</Text>
      </TouchableOpacity>

        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    sliderContainer:{
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius: 8,
        },
         wrapper: {},

         slide:{
             flex:1,
             justifyContent:'center',
             backgroundColor:'transparent',
             borderRadius: 8,
         },
         sliderImage:{
             height: '100%',
             width: '100%',
             alignSelf: 'center',
             borderRadius: 8,
         },
      categoryContainer:{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          marginTop: 25,
          marginBottom: 10,
      },
      categoryBtn:{
          flex: 1,
          width: '30%',
          marginHorizontal: 0,
          alignSelf: 'center',
      },
      commandButton:{
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#B996E4',
        alignItems: 'center',
        marginHorizontal: 146,
        marginTop: 30,
        width: 120,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
      categoryIcon:{
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      width: 70,
      height: 70,
      backgroundColor: '#CC9FF9',
      borderRadius: 50,
      },
      categoryBtnText:{
          alignSelf: 'center',
          marginTop: 5,
          color: '#CC9FF9',
      },
      cardsWrapper:{
          marginTop:20,
          width:'90%',
          alignSelf: 'center',
      },

      card:{
        backgroundColor: "#fff",
        height: 220,
        width: 210,
        marginHorizontal: 10,
        borderRadius: 18,
        padding: 5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.25,
shadowRadius: 4,

elevation: 5,
      },
      cardImgWrapper:{
          flex:1,
      },
      cardImg:{
          height: 300,
          width: 300,
          alignSelf:'center',
          borderRadius: 8,
          borderBottomRightRadius:0,
          borderBottomLeftRadius:0,
      },
      cardInfo:{
          flex: 2,
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 0,
          borderRadius: 8,
          backgroundColor: '#fff'
      },
      cardTitle:{
          fontWeight: 'bold',
          },
     cardDetails:{
         fontSize:12,
         color: '#444',
     },

    
});