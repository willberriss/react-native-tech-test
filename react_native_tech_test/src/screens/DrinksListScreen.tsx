import React, {useState} from 'react';
import {
  Image,
  Pressable,
  View,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {globalStyles} from '../GlobalStyles';

export const DrinksListScreen = props => {
  const {screenTitle, drinksList} = props;
  const [selectedDrink, setSelectedDrink] = useState({});

  const viewDetails = drink => {
    setSelectedDrink(drink);
    console.log('Selected drink: ', drink);
    // TODO Create modal screen to display details
  };

  const renderListItem = drink => {
    return (
      <View style={styles.listItem}>
        <Pressable
          onPress={() => {
            viewDetails(drink.item);
          }}
          style={({pressed}) => {
            return [
              {opacity: pressed ? 0.5 : 1.0},
              globalStyles.buttonUnselected,
            ];
          }}>
          <View style={styles.rowView}>
            <View style={styles.nameView}>
              <Text style={globalStyles.buttonUnselectedText}>
                {drink.item.name}
              </Text>
            </View>
            <View style={styles.descriptionView}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.descriptionText}>
                {drink.item.description}
              </Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={{uri: drink.item.image_url}}
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
});
