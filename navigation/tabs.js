import React,{useReducer,useContext} from 'react';
import { View, Image, Text, Button, StyleSheet, OpaqueColorValue, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import HomeScreen from '../screens/screensMerey/Home/HomeScreen';
import LikeListScreen from '../screens/screensMerey/LikeList/LikeListScreen';
import City1 from '../screens/screensMerey/City1/City1';
import City2 from '../screens/screensMerey/City2/City2';
import PlaceInfo from '../screens/screensMerey/PlaceInfo/PlaceInfo';
import RouteScreen from '../screens/RouteScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditScreen from '../screens/EditScreen';
import { initialState, reducer } from '../components/reducer';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const AppContext = React.createContext();
export const useAppContext = () => useContext(AppContext);

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#B996E4',
                    height: 60,
                    width: '100%',
                }
            }}>

            <Tab.Screen name="Home"
                component={HomeStackScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../assets/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25, height: 25, tintColor: focused ? '#3C1D62' : '#ffffff', opacity: 1,
                                }} />
                        </View>
                    ),
                }} />

            <Tab.Screen name="Route" component={RouteScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('../assets/icons/route.png')}
                            resizeMode='contain'
                            style={{
                                width: 25, height: 25, tintColor: focused ? '#3C1D62' : '#ffffff', opacity: 1
                            }} />
                    </View>
                ),
            }} />
            <Tab.Screen name="Map" component={MapScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('../assets/icons/map.png')}
                            resizeMode='contain'
                            style={{
                                width: 25, height: 25, tintColor: focused ? '#3C1D62' : '#ffffff', opacity: 1
                            }} />
                    </View>
                ),
            }} />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../assets/icons/profile.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25, height: 25, tintColor: focused ? '#3C1D62' : '#fff', opacity: 0.9
                                }} />
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default Tabs;


const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#B996E4',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 25,
            },
        }}>
        <ProfileStack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
                title: '  My Profile',
                headerRight: () => (
                    <Icon.Button
                        name='account-edit'
                        size={30}
                        backgroundColor="#B996E4"
                        color="#3C1D62"
                        onPress={() => navigation.navigate('Edit')}
                    />
                ),
            }}
        />
        <ProfileStack.Screen
            name='Edit'
            options={{
                title: 'Edit Profile'
            }}
            component={EditScreen}

        />

        <ProfileStack.Screen
            name='Settings'
            options={{
                title: 'Settings'
            }}
            component={SettingsScreen}

        />

        <ProfileStack.Screen
            name='LikeListScreen'
            options={{
                title: 'My Favorite List'
            }}
            component={LikeListScreen}

        />



    </ProfileStack.Navigator>
);


const HomeStackScreen = ({ navigation }) => (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#B996E4',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 25,
                },
            }}>
            <HomeStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: '  Welcome!',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 12,
                            }}
                            onPress={() => navigation.navigate('LikeListScreen')}>
                            <MaterialCommunityIcons
                                name="heart-multiple"
                                color="#fff"
                                size={25}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />

            <HomeStack.Screen
                name='LikeListScreen'
                options={{
                    title: 'My Favorite List'
                }}
                component={LikeListScreen}
            />

            <HomeStack.Screen
                options={() => ({
                    title: 'Place Info',
                })}
                name="PlaceInfo"
                component={PlaceInfo}
            />
            <HomeStack.Screen
                options={() => ({
                    title: 'Nur-Sultan',
                })}
                name="City1"
                component={City1}
            />
            <HomeStack.Screen
                options={() => ({
                    title: 'Almaty',
                })}
                name="City2"
                component={City2}
            />

        </HomeStack.Navigator>
    </AppContext.Provider>
);
