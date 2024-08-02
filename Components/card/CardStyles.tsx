import { StyleSheet } from "react-native";


export const cardStyle = StyleSheet.create({
  cardContainerColumn: {
    backgroundColor: 'white',
    width: 100,
    borderColor: 'black',
    borderRadius: 15,
    textAlign:"center"
  },
  cardContainerRow: {
    flexDirection:"row",
    backgroundColor: 'white',
    width: "auto",
    height:65,
    
    // borderWidth:0.5,
  },
});