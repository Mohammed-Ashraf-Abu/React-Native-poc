import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CardComponent from '../../Components/card/CardComponent';
import {profileStyle} from './ProfileStyle';
import AvatarImage from '../../Components/image/Avatar/Avatar';
import {ItemDivider} from '../../Components/divider/Divider';

import {profileConstant} from '../../Constants/constant';
import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import Labelcomponent from '../../Components/text/Text';
import ButtonComponent from '../../Components/button/Button';

export default function ProfileScreen() {
  return (
    <View>
      {/* Profile Image */}

      <View style={profileStyle.profileImage}>
        <AvatarImage />
      </View>
      <View>
        <Labelcomponent value={'Hello, John Doe'} type={'Heading'} />
        <ButtonComponent
          value="Update Profile"
          textColor="white"
          buttonType="updateButton"
          onPress={() => { } } children={undefined}        />
      </View>

      {/* Card Container */}

      <View style={profileStyle.cardContainer}>
        <View style={profileStyle.cardContainerRow}>
          <CardComponent
            location={require('../../asserts/Icons/booking.png')}
            cardContent="Booking and plans"
            cardType={'cardContainerColumn'}
          />
          <CardComponent
            location={require('../../asserts/Icons/payment-history.png')}
            cardContent="Payment History"
            cardType={'cardContainerColumn'}
          />
          <CardComponent
            location={require('../../asserts/Icons/help-and-support.png')}
            cardContent="Help and Support"
            cardType={'cardContainerColumn'}
          />
        </View>
      </View>

      {/* Profile Option */}
      <ItemDivider />
      {profileConstant.map(list => {
        return (
          <View key={list.id} style={profileStyle.cards}>
            <CardComponent
              cardContent={list.name}
              cardType="cardContainerRow"
              location={list.image}
              orderListImage="listImage"
            />
            <ItemDivider />
          </View>
        );
      })}
    </View>
  );
}
