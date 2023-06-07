import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';


function Restaurant({ route, navigation }) {
  const { restaurant, id} = route.params;
  const [food, setFood] = useState([]);


  useEffect(() => {
    console.log("restaurant :", restaurant);
    console.log("id_Rest :", id);
    fetchFood();
  }, []);

const fetchFood = async () => {
  try {
    const response = await axios.get('http://192.168.50.49:3000/menu/name', {
      params: {
        restaurant: restaurant.restaurant_name,
        id1 : id,
        id2 : id
      }
    });

    const result = response.data;
    setFood(result.food);
  } catch (error) {
    console.error('Error fetching food:', error);
  }
};

  const handleFoodPress = (item) => {
    const selectedFood = {
      food_name: item.food_name,

    };
    navigation.navigate('Restaurant', { selectedFood });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        {food.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={styles.foodButton}
            onPress={() => handleFoodPress(item)}
          >
            <Text style={styles.foodButtonText}>{item.food_name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

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
  foodButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#006400',
    borderRadius: 5,
    alignItems: 'center',
  },
  foodButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Restaurant;
