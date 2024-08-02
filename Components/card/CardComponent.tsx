import React from 'react'
import { ImageSourcePropType,  View } from 'react-native';
import { Card,Text } from 'react-native-paper';
import ImageComponent from '../image/imageComponent/imageComponent';
import { cardStyle } from './CardStyles';

type cardProps = {
  location?: ImageSourcePropType;
  cardContent: string;
  cardType?: 'cardContainerColumn'|'cardContainerRow',
  orderListImage?:'cardImage'|'listImage'
};

export default function CardComponent({
  location = 0,
  cardContent,
  orderListImage = 'cardImage',
  cardType = 'cardContainerColumn',
}: cardProps) {
  return (
    <View>
      <Card>
        <Card.Content style={cardStyle[cardType]}>
          <ImageComponent location={location} imageType={orderListImage} />
          <Text style={{paddingTop: 10,fontWeight:"bold",textAlign:"center"}}>{cardContent}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}
