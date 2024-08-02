import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/homescreen/HomeScreen';
import ProfileScreen from '../Screens/profile/ProfileScreen';
import SettingScreen from '../Screens/setting/SettingScreen';
import {Platform} from 'react-native';
import {View} from 'react-native';
import {Image} from 'react-native';
import LoginScreen from '../Screens/loginscreen/LoginScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // keyboardHidesTabBar: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 90 : 70,
          backgroundColor: 'f4f4f4',
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({}) => {
            return (
              <View>
                <Image
                  source={require('../asserts/Icons/home.png')}
                  resizeMode={'contain'}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // headerShown:true,
          tabBarStyle: {display: 'none'},
          // tabBarShowLabel: true,
          tabBarIcon: ({}) => {
            return (
              <View>
                <Image
                  source={require('../asserts/Icons/profile.png')}
                  resizeMode={'contain'}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({}) => {
            return (
              <View>
                <Image
                  source={require('../asserts/Icons/settings.png')}
                  resizeMode={'contain'}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Sign-Out"
        component={LoginScreen}
        options={{
          tabBarIcon: ({}) => {
            return (
              <View>
                <Image
                  source={require('../asserts/Icons/logout.png')}
                  resizeMode={'contain'}
                  style={{
                    height: 35,
                    width: 35,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};


