/**
 * Drinks App
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {DrinksListScreen} from './screens/DrinksListScreen';
import {globalStyles} from './GlobalStyles';

const requestDrinksList = async () => {
  const drinks = [];

  for (let c = 1; c < 11; c++) {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${c}`);
    const data = await response.json();
    const drink = {
      name: `${data[0].name}`,
      description: `${data[0].description}`,
      image_url: `${data[0].image_url}`,
    };
    drinks.push(drink);
  }
  return drinks;
};

const App = (): JSX.Element => {
  const [drinksList, setDrinksList] = useState([]);

  useEffect(() => {
    (async () => {
      const drinks = await requestDrinksList();
      setDrinksList(drinks);
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
