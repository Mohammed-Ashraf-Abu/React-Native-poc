import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/loginscreen/LoginScreen";
import ProfileScreen from "../Screens/profile/ProfileScreen";
import SettingScreen from "../Screens/setting/SettingScreen";
import { BottomTabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator();

export const NavigationMain = () => {
    const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={BottomTabNavigation} />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          )}
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
  
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
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
