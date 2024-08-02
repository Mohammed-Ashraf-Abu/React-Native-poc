import * as React from 'react';
import {Avatar} from 'react-native-paper';

export default function AvatarImage() {
  return (
    <Avatar.Image size={130} 
    source={require('../../../asserts/blank-profile.jpg')} 
    style={{borderColor:"green"}}/>
  );
}
