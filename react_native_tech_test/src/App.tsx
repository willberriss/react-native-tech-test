/**
 * Drinks App
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {DrinksListScreen} from './screens/DrinksListScreen';
import {globalStyles} from './GlobalStyles';

import {DrinkDetailsProps} from './screens/DetailsScreenModal';

const requestDrinksList = async () => {

  const drinks: DrinkDetailsProps[] = [];

  for (let c = 1; c < 11; c++) {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${c}`);
    const data = await response.json();
    const drink: DrinkDetailsProps = {
      name: `${data[0].name}`,
      tagline: `${data[0].tagline}`,
      description: `${data[0].description}`,
      image_url: `${data[0].image_url}`,
      abv: `${data[0].abv}`,
      ph: `${data[0].ph}`,
    };
    drinks.push(drink);
  }
  return drinks;
};

const App = (): JSX.Element => {
  const [drinksList, setDrinksList] = useState<DrinkDetailsProps[]>([]);

  useEffect(() => {
    (async () => {
      const drinksList: DrinkDetailsProps[] = await requestDrinksList();
      setDrinksList(drinksList);
    })();
    return () => {
      /* called when component unmounts */
    };
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={globalStyles.navigationContainer}>
        <DrinksListScreen
          screenTitle="Drinks List"
          drinksList={drinksList}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
