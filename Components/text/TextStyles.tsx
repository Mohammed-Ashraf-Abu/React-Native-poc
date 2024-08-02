import { StyleSheet } from "react-native";

export const LabelStyle = StyleSheet.create({
  Label: {
    fontWeight: '800',
    color: 'black',
  },
  Link: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 15,
    fontWeight: '700',
  },
  Normal: {
    fontSize: 14,
  },
  Heading: {
    fontSize: 22,
    // fontFamily: 'serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteHeading: {
    fontSize: 22,
    color:"white",
    padding:20,
    fontFamily: 'serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listingText:{
    padding:10,
    fontSize: 20
  },
  settingHeadings:{
    fontSize:22,
    color:"black",
    fontWeight:"900",
    marginLeft:10
  },
  settingSubHead:{
    marginLeft:10,
    fontSize:13,
    marginBottom:5
  },
  settingCompount:{
    fontSize:16,
    fontWeight:"800",
    height:30,
    // borderWidth:1,
    width:290,
    marginLeft:10
  },
  default: {},
});