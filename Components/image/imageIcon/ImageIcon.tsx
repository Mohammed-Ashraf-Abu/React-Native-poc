import { Image, ImageSourcePropType, Pressable, View } from "react-native";
import { iconStyle } from "./ImageIconStyles";

 type IconProps ={
  location: ImageSourcePropType
 } 



export default function ImageIcon({location}:IconProps) {
  return (
    <Pressable style={iconStyle.imageContainer}>
      <Image source={location} style={iconStyle.imageIcon} />
    </Pressable>
  );
}
