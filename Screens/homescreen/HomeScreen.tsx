
import {ScrollView, View} from 'react-native';
import SearchBar from '../../Components/searchBar/SearchBar';
import Labelcomponent from '../../Components/text/Text';
import CardComponent from '../../Components/card/CardComponent';
import {homeStyles} from './HomeScreenStyle';

export default function HomeScreen() {
  return (
    <ScrollView>

      <View
        style={{
          backgroundColor: 'rgb(136 35 108)',
          height: 'auto',
          paddingBottom: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View>
          <Labelcomponent value="Welcome to the App" type="whiteHeading" />
        </View>
        <View
          style={{
            paddingRight: 15,
            paddingLeft: 15,
            paddingBottom: 15,
          }}>
          <SearchBar placeholder={'What Services your are looking for ?'} />
        </View>
      </View>

      <View>
        <View style={homeStyles.cardContainer}>
          <View style={homeStyles.cardContainerRow}>
            <CardComponent
              location={require('../../asserts/Icons/plumber.png')}
              cardContent="Plumbing"
            />
            <CardComponent
              location={require('../../asserts/Icons/cleaning.png')}
              cardContent="Cleaning"
            />
            <CardComponent
              location={require('../../asserts/Icons/painting.png')}
              cardContent="Painting"
            />
          </View>

          <View style={homeStyles.cardContainerRow}>
            <CardComponent
              location={require('../../asserts/Icons/services.png')}
              cardContent="Services"
            />
            <CardComponent
              location={require('../../asserts/Icons/rent.png')}
              cardContent="Rent"
            />
            <CardComponent
              location={require('../../asserts/Icons/shop.png')}
              cardContent="Shop"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
