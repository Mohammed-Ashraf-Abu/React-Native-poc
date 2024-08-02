import React from 'react';
import {
  ScrollView,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Labelcomponent from '../../Components/text/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {settingStyle} from './SettingStyle';
import {ItemDivider} from '../../Components/divider/Divider';
import SearchBar from '../../Components/searchBar/SearchBar';
import {SegmentButtom} from '../../Components/segmentButton/SegmentButtom';
import CardComponent from '../../Components/card/CardComponent';
import SwitchCompnent from '../../Components/switch/Switch';

export default function SettingScreen() {
  return (
    <SafeAreaView style={settingStyle.Container}>
      <ScrollView>
        <View>
          <Labelcomponent value={'Settings & Privacy'} type={'Heading'} />
          <View style={{margin: 10}}></View>
        </View>

        <View style={settingStyle.searchContainer}>
          <SearchBar boxStyle="customSearchBox" placeholder="Search Settings" />
        </View>
        <ItemDivider />

        <View style={settingStyle.settingOptionContainer}>
          <Labelcomponent value={'Preference'} type={'settingHeadings'} />
          <Labelcomponent
            value={'Customize your expirence'}
            type={'settingSubHead'}
          />

          <TouchableOpacity style={[settingStyle.settingOption, {}]}>
            <Labelcomponent value="Language" type="settingCompount" />
            <SegmentButtom />
          </TouchableOpacity>

          <View style={[settingStyle.settingOption, {flexDirection: 'row'}]}>
            <Labelcomponent value={'Dark Mode'} type={'settingCompount'} />
            <SwitchCompnent />
          </View>
          <View style={[settingStyle.settingOption, {flexDirection: 'row'}]}>
            <Labelcomponent
              value={'Mute Notification'}
              type={'settingCompount'}
            />
            <SwitchCompnent />
          </View>
          <ItemDivider />
        </View>

        <View style={settingStyle.settingOptionContainer}>
          <Labelcomponent value={'Payments'} type={'settingHeadings'} />
          <Labelcomponent
            value={'Manage your payment Activities'}
            type={'settingSubHead'}
          />
          <View>
            <CardComponent
              cardContent="Payment Method"
              cardType="cardContainerRow"
              location={require('../../asserts/Icons/payment-method.png')}
              orderListImage="listImage"
            />
            <ItemDivider />
          </View>
        </View>

        <View style={settingStyle.settingOptionContainer}>
          <Labelcomponent
            value={'Community standards and policies'}
            type={'settingHeadings'}
          />

          <View>
            <CardComponent
              cardContent="Terms of Services "
              cardType="cardContainerRow"
              location={require('../../asserts/Icons/terms-of-services.png')}
              orderListImage="listImage"
            />
            <ItemDivider />
          </View>

          <View>
            <CardComponent
              cardContent="Community Standards"
              cardType="cardContainerRow"
              location={require('../../asserts/Icons/community-standard.png')}
              orderListImage="listImage"
            />
            <ItemDivider />
          </View>
          <View>
            <CardComponent
              cardContent="Legal Policy"
              cardType="cardContainerRow"
              location={require('../../asserts/Icons/legal-policy.png')}
              orderListImage="listImage"
            />
            <ItemDivider />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
