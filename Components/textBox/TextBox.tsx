import React, { EventHandler } from 'react';
import {TextInput} from 'react-native-paper';
import {TextBoxStyle} from './TextBoxStyle';

// interface Myprops {
//   placeHolder: string;
//   secure?: boolean;
//   style?: 'Square' | 'Circle';
//   // Change ?: ()=>void
// }

type Props =React.ComponentProps<typeof TextInput> & {placeholder:string,secure:boolean};


// const defaultOnchage=()=>{}

export default function TextBox({placeholder,secure ,...props} : Props) {
  
  return (
    <TextInput
      mode="outlined"
      style={TextBoxStyle.Square}
      label={placeholder}
      secureTextEntry={secure}
      {...props}
    />
  );
}
