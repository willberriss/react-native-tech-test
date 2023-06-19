import React, {useState} from 'react';
import {
  Image,
  Pressable,
  View,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';

import {globalStyles} from '../GlobalStyles';
import {globalColours} from '../GlobalColours';
import {DetailsScreenModal, DrinkDetailsProps} from './DetailsScreenModal';

interface IDrinksListScreenProps {
  screenTitle: string;
  drinksList: DrinkDetailsProps[];
}

export const DrinksListScreen = (props: IDrinksListScreenProps) => {

  const {screenTitle, drinksList} = props;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedDrink, setSelectedDrink] = useState({});

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const viewDetails = (drink: DrinkDetailsProps) => {
    // Set the drink details for the modal screen to display
    console.log('Selected drink: ', drink);
    setSelectedDrink(drink);
    openModal();
  };

  const renderListItem = (drinkInfo: ListRenderItemInfo<DrinkDetailsProps>) => {

    const drink = drinkInfo.item;

    return (
      <View style={styles.listItem}>
        <Pressable
          onPress={() => {
            viewDetails(drink);
          }}
          style={({pressed}) => {
            return [
              {opacity: pressed ? 0.5 : 1.0},
              globalStyles.buttonUnselected,
            ];
          }}>
          <View style={styles.rowView}>
            <View style={styles.nameView}>
              <Text style={styles.listItemButtonText}>{drink.name}</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.descriptionText}>
                {drink.description}
              </Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={{uri: drink.image_url}}
                style={styles.image}
              />
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.screenView}>
      <View style={globalStyles.screenTitleView}>
        <Text style={globalStyles.screenTitleText}>{screenTitle}</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={drinksList}
          renderItem={renderListItem}
        />
      </View>

      <DetailsScreenModal
        visible={isModalVisible}
        content={selectedDrink}
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 0,
    width: '100%',
    padding: 4,
    paddingTop: 4,
  },
  rowView: {
    borderWidth: 0,
    borderColor: 'cyan',
    flexDirection: 'row',
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameView: {
    flex: 0.2,
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: 'pink',
  },
  descriptionView: {
    flex: 0.6,
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: 'magenta',
  },
  descriptionText: {
    color: 'black',
    fontSize: 10,
    borderWidth: 0,
    borderColor: 'green',
  },
  imageView: {
    flex: 0.2,
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: 'pink',
  },
  image: {
    width: 60,
    height: 60,
  },
  listItem: {
    backgroundColor: 'orange',
    borderWidth: 0,
    borderColor: 'grey',
    padding: 2,
  },
  listItemButtonText: {
    fontSize: 12,
    textAlign: 'center',
    color: globalColours.DarkGrey,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
