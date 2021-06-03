import React from 'react';
import {useState, useContext} from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AuthContext } from '../components/context';
import { useTheme, Text, TouchableRipple, Switch} from 'react-native-paper';



const SettingsScreen = ({navigation})=>{

    const paperTheme = useTheme();

    const { toggleTheme } = React.useContext(AuthContext);

    
    return(
        <View style={StyleSheet.container}>
            <View style={{margin: 20,}}>
                <View style={styles.box}>
                <Image source={require('../assets/icons/settings.png')} style={{width:33, height:27, marginLeft: 300,  tintColor: '#7036B9',}}/>
                    <TouchableOpacity style={styles.commandButton}>
                        <Text>Language</Text>
                        <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:175, tintColor: '#7036B9',}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commandButton}>
                        <Text>Map</Text>
                        <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:210, tintColor: '#7036B9',}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commandButton}>
                        <Text>Navigator settings</Text>
                        <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:110, tintColor: '#7036B9',}}/>
                    </TouchableOpacity>

                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.pref}>
                            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark}/>
                            </View>
                        </View>
                    </TouchableRipple>
                    
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', }}>
                <Image source={require('../assets/settings-pic.png')} style={styles.pic}/>
            </View>
            </View>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      box:{
          backgroundColor: '#B996E4',
          padding: 15,
          marginTop: 15,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
      },
      pic:{
          width: 300,
          height: 250,
          marginTop: 70,
      },
      pref:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 20,
      },
      commandButton:{
          padding: 15,
          flexDirection: 'row',
          borderRadius: 30,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          width: '85%',
      },

});