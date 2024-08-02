import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/homescreen/HomeScreen';
// import {createAppContainer} from 'react-navigation';
import LoginScreen from '../Screens/loginscreen/LoginScreen';
import ProfileScreen from '../Screens/profile/ProfileScreen';
import SettingScreen from '../Screens/setting/SettingScreen';
import DrawerNavigation from './DrawerNavigation';
// import {createStackNavigator} from 'react-navigation-stack';

const Stack = createNativeStackNavigator();
// const Router = createStackNavigator(
//   {
//     HomeScreen,
//     LoginScreen,
//     ProfileScreen,
//     SettingScreen,
//     DrawerNavigation,
//   },
//   {
//     initialRouteName: 'LoginScreen',
//     headerMode: 'none',
//   },
// );

// export type Navigation = {
//   reset: any;
//   navigate: (scene: string) => void;
// };

// export default createAppContainer(Router);



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
