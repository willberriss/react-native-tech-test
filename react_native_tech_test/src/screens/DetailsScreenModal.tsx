import React, {FC} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {globalStyles} from '../GlobalStyles';

export type DrinkDetailsProps = {
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: string;
  ph: string;
};

interface IDetailsScreenProps {
  content: DrinkDetailsProps;
  visible: boolean;
  closeModal: () => void;
};

//export const DrinksListScreen = (props: IDrinksListScreenProps) => {
export const DetailsScreenModal: FC<IDetailsScreenProps> = props => {
//export const DetailsScreenModal: FC<any> = props => {
  const {content, visible, closeModal} = props;

  return (
    <Modal
      transparent={false}
      animationType="slide"
      visible={visible}
      onRequestClose={() => closeModal()}>
      <SafeAreaView style={globalStyles.modalScreen}>
        <View style={globalStyles.buttonView}>
          <Pressable
            style={globalStyles.buttonUnselected}
            onPress={() => closeModal()}>
            <Text style={globalStyles.buttonUnselectedText}>exit</Text>
          </Pressable>
        </View>
        <View style={globalStyles.detailsView}>
          <Text style={styles.nameText}>{content.name}</Text>
          <Text style={styles.detailsText}>{content.tagline}</Text>
          <View style={styles.horizontallyGroupedDetailsView}>
            <Text style={styles.detailsText}>Abv {content.abv}</Text>
            <Text style={styles.detailsText}>pH {content.ph}</Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>{content.description}</Text>
          </View>
          <View style={styles.imageView}>
            <Image
              source={{uri: content.image_url}}
              style={styles.image}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  nameView: {
    flex: 0.1,
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: 'magenta',
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    borderWidth: 0,
    padding: 2,
    borderColor: 'red',
  },
  detailsText: {
    color: 'black',
    fontSize: 16,
    borderWidth: 0,
    padding: 10,
    borderColor: 'red',
  },
  descriptionView: {
    flex: 0.4,
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'brown',
  },
  descriptionText: {
    color: 'black',
    fontSize: 14,
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: 'green',
  },
  imageView: {
    flex: 0.5,
    flexDirection: 'column',
    borderWidth: 0,
    borderColor: 'pink',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  horizontallyGroupedDetailsView: {
    flexDirection: 'row',
    margin: 2,
    borderWidth: 0,
    borderColor: 'lightgreen',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});
