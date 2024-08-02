import {StyleSheet, useWindowDimensions} from 'react-native';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';


export const loginStyle = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    fontFamily:"Poppins_400Regular",
    marginTop: 80,
    elevation: 20,
    shadowColor: '#52006A',
    justifyContent: 'center',
    alignContent: 'center',
    height: 'auto',
    margin: 20,
    padding: 10,
    // // borderColor: 'rgb(136 35 108 )',
    // borderColor: 'ffff',
    // borderWidth: 1,

    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
    // shadowColor: 'rgb(136 35 108 )',
    //shadowOpacity: 0.50,
  },
  titleImage: {
    justifyContent: 'flex-start',
    marginTop:20,
    alignItems: 'center',
  },
  loginInputs: {
    padding:20,
    margin:10,
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  errorText:{
    color:"red",
    marginBottom:10,
  }
});
