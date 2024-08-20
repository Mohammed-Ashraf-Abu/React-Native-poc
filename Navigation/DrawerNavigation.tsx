import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LoginScreen from '../Screens/loginscreen/LoginScreen';
import SettingScreen from '../Screens/setting/SettingScreen';
import ProfileScreen from '../Screens/profile/ProfileScreen';
import AvatarImage from '../Components/image/Avatar/Avatar';
import Labelcomponent from '../Components/text/Text';
import HomeScreen from '../Screens/homescreen/HomeScreen';
import About from '../Screens/aboutscreen/About';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                marginTop: 20,
                marginBottom: 20,
                borderColor: "rgb(136 35 108)",
                borderWidth: 4,
                borderRadius: 100,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <AvatarImage />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Labelcomponent value={"Hello Admin"} type={"Heading"} />
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 250,
        },
      }}
    >
      <Drawer.Screen
        name="Home_Drawer"
        component={HomeScreen}
        options={{
          // headerBackground:{},
          // drawerStyle:{backgroundColor:"blue"},
          // drawerLabel: "Home",
          title:"Home",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name="About_Drawer"
        component={About}
        options={{
          drawerLabel: "About",
          title: "About",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name="Profile_Drawer"
        component={ProfileScreen}
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerLabel: "Setting",
          title: "Setting",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name="Sign-out_Drawer"
        component={LoginScreen}
        options={{
          drawerLabel: "Sign-Out",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
    </Drawer.Navigator>
  );
}


