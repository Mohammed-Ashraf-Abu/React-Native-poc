import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import { segmentButtonConstant } from '../../Constants/constant';
import { segmentStyle } from './SegmentButtonStyles';

export function SegmentButtom(){

  return (
    <SafeAreaView style={segmentStyle.container}>
      <SegmentedButtons
        value='English'
        onValueChange={()=>{}}
        buttons={segmentButtonConstant}
      />
    </SafeAreaView>
  );
};


