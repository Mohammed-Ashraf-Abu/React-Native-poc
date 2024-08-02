import { StyleSheet } from "react-native";

export const ImageStyle = StyleSheet.create({
  cardImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    objectFit: 'contain',
  },
//   cardImage1: {
//     width: 50,
//     height: 50,
//     alignSelf: 'center',
//     objectFit: 'contain',
//   },
  profileImage: {
    alignContent: 'center',
    borderColor: 'green',
    borderWidth: 3,
    width: 130,
    height: 130,
    borderRadius: 100,
    padding: 0,
    objectFit: 'cover',
  },
  listImage: {
    width: 40,
    height: 40,
    marginRight:10
  },
});