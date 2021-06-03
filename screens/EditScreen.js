//Libs
import React from 'react';
import {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import {Picker} from '@react-native-picker/picker';


//icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const EditScreen = ()=>{
    const [selectedValue, setSelectedValue] = useState("Select City");
    
    const renderInner = () =>(
        <View style={styles.panel}>
        <View>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={()=> bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </View>
        );

    const renderHeader = () =>(
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}/>
            </View>
        </View>
    );

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    return(
        <View style={StyleSheet.container}>

         <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
         />

      <Animated.View style={{margin: 20,
      opacity: Animated.add(0.2, Animated.multiply(fall, 1.0)),
    }}>
      <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View style={{
                  height: 130,
                  width: 130,
                  borderRadius: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
              }}>
                  <ImageBackground
                  source={require('../assets/icons/user.png')}
                  style={{
                    height: 130,
                    width: 130,
                    margin: 20,
                  }}
                  imageStyle={{borderRadius: 90,}}
                  >
                      <View style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}>
                          <Icon name="camera" size={35} color="#fff"
                          style={{
                              opacity: 0.7,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderWidth: 1,
                              borderColor: "#fff",
                              borderRadius: 10,
                          }}
                          />
                      </View>
                  </ImageBackground>
              </View>
          </TouchableOpacity>

          <View style={styles.action}>
              <FontAwesome name="user-o" size={20} color={"#666666"}/>
          <TextInput 
          placeholder="UserName"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
          />
          
           </View>
          <View style={styles.action}>
              <FontAwesome name="envelope-o" size={20} color={"#666666"}/>
          <TextInput 
          placeholder="Email"
          placeholderTextColor="#666666"
          keyboardType='email-address'
          autoCorrect={false}
          style={styles.textInput}
          />
          </View>
          <View style={styles.action}>
              <Feather name="phone" size={20} color={"#666666"}/>
          <TextInput 
          placeholder="Phone"
          placeholderTextColor="#666666"
          keyboardType = 'phone-pad'
          autoCorrect={false}
          style={styles.textInput}
          />
          </View>
          <View style={styles.city}>
              <View style={styles.desc}>
    <Icon name="map-marker-outline" size={20} color="#7036B9"/>
      <Text style={{fontSize: 15, color:"#7036B9",}}>City</Text>
      </View>
      <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 360 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Almaty" value="Ata" />
        <Picker.Item label="Nur-Sultan" value="NS" />
      </Picker>
      </View>
      </View>

      
    <TouchableOpacity style={styles.pass} onPress={() => {}} >
      <Image source={require('../assets/icons/lock.png')} style={{width:23, height:20, marginRight:5, tintColor: "#7036B9",}}/>
      <Text style={{fontSize: 20, color: "#3C1D62",}}>Change Password</Text>
      <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:60, tintColor: "#7036B9",}}/>
    </TouchableOpacity>

      <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20,}}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 30}} onPress={() => {}}>
          <Text style={{color: 'red', fontWeight: '700', fontSize: 15,}}>DELETE PROFILE</Text>
      </TouchableOpacity>
      
      </View>
      </Animated.View>
        </View>
    );
};
export default EditScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F1F1F1",
      },
      commandButton:{
          padding: 10,
          borderRadius: 15,
          backgroundColor: "#7036B9",
          alignItems: 'center',
          marginTop: 20,
          width: 120,
      },
      pass:{
          padding: 10,
          flexDirection: 'row',
          borderRadius: 20,
          backgroundColor: "#fff",
          alignItems: 'center',
          marginTop: 20,
          width: 300,
      },
      panel:{
          padding: 20,
          backgroundColor: "#B996E4",
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
      },
      header:{
          backgroundColor: "#B996E4",
          shadowColor: "#333333",
          shadowOffset: {width: -1, height: -3},
          shadowRadius: 2,
          shadowOpacity: 0.4,
          //elevation: 5,
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopLeftRadius: 20,
      },
      panelHeader:{
          alignItems: 'center',
      },
      panelHandle:{
          width: 40,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#00000040",
          marginBottom: 10,
      },
      panelTitle:{
          fontSize: 27,
          height: 35,
      },
      panelSubtitle:{
          fontSize: 14,
          color: 'white',
          height: 30,
          marginBottom: 10,
      },
      city:{
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#7036B9",
      },
      desc:{
        marginTop: 15,
        marginBottom: 5,
        flexDirection: 'row',
        width: '90%',
        color: "#7036B9",
      },
      panelButton:{
          padding: 13,
          borderRadius: 10,
          backgroundColor: "#FF6347",
          alignItems: 'center',
          marginVertical: 7,
      },
      panelButtonTitle:{
          fontSize: 17,
          fontWeight: 'bold',
          color: 'white',
      },
      action:{
          flexDirection: 'row',
          marginTop: 30,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#7036B9",
          paddingBottom: 5,
      },
      actionError:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingBottom: 5,
      },
      textInput:{
          flex: 1,
          paddingLeft: 12,
          color:"#3C1D62",
      },
});