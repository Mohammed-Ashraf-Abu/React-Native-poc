import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/homescreen/HomeScreen';
import LoginScreen from '../Screens/loginscreen/LoginScreen';
import ProfileScreen from '../Screens/profile/ProfileScreen';
import SettingScreen from '../Screens/setting/SettingScreen';
import DrawerNavigation from './DrawerNavigation';



export const NavigationMain = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            // headerBlurEffect:"dark",
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
