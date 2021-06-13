import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/screensMerey/Home/HomeScreen';
import LikeListScreen from '../screens/screensMerey/LikeList/LikeListScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#CC9FF9',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Welcome',

          headerRight: () => (
            <TouchableOpacity
              style={{
                paddingHorizontal: 12,
              }}
              onPress={() => navigation.navigate('LikeList')}>
              <Icon
                name="heart-multiple"
                color="#fff"
                size={25}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        options={() => ({
          title: 'Favourite list',
        })}
        name="LikeList"
        component={LikeListScreen}
      />
      <Stack.Screen
        options={() => ({
          title: 'Place Info',
        })}
        name="PlaceInfo"
        component={PlaceInfo}
      />
      <Stack.Screen
        options={() => ({
          title: 'Nur-Sultan',
        })}
        name="City1"
        component={City1}
      />
      <Stack.Screen
        options={() => ({
          title: 'Almaty',
        })}
        name="City2"
        component={City2}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
