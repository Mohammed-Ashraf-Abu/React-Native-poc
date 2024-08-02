import {Button} from 'react-native-paper';
import { buttonStyle } from './ButtonStyle';
import { useState } from 'react';

type buttonProps = React.ComponentProps<typeof Button>&{
  value: string,
  textColor?:string
  buttonType?:"loginButton"|'updateButton'

};


export default function ButtonComponent({value,textColor="black",buttonType='loginButton',...props}: buttonProps) {


  return (
    <Button
      style={buttonStyle[buttonType]}
      textColor={textColor}
      {...props}
      >
      {value}
    </Button>
  );
}