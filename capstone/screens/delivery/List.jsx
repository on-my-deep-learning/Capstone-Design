import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

function List({route, navigation}) {
  const {category} = route.params;
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, [category]);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/restaurant/name',
        {
          params: {
            category: category,
          },
        },
      );
      const result = response.data;
      setRestaurants(result.restaurants);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleRestaurantPress = item => {
    const restaurant = {
      restaurant_index: item.restaurant_index,
      restaurant_name: item.restaurant_name,
    };

    navigation.navigate('Restaurant', {restaurant});
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        {restaurants.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={styles.restaurantButton}
            onPress={() => handleRestaurantPress(item)}>
            <Text style={styles.restaurantButtonText}>
              {item.restaurant_name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonView: {
    width: '100%',
  },
  restaurantButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#006400',
    borderRadius: 5,
    alignItems: 'center',
  },
  restaurantButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default List;
