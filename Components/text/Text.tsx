import React from 'react';
import {Text} from 'react-native-paper';
import {LabelStyle} from './TextStyles';

type textProps = {
  value: string;
  type:
    | 'Label'
    | 'Link'
    | 'Normal'
    | 'default'
    | 'Heading'
    | 'whiteHeading'
    | 'listingText'
    | 'settingHeadings'
    | 'settingSubHead'
    | 'settingCompount';
};

export default function Labelcomponent({value, type = 'default'}: textProps) {
  return <Text style={LabelStyle[type]}>{value}</Text>;
}
