
import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { ImageStyle } from './ImageStyle';

 type ImageProps = {
   location: ImageSourcePropType;
   imageType: 'cardImage' | 'profileImage' | 'listImage' ;
 }; 


export default function ImageComponent({location,imageType}:ImageProps) {
  return (
    <Image
    source={location}
    style={ImageStyle[imageType]}
    />    
)
}
