// React imports
import { useState } from 'react';

// React Native imports
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Custom components
import Title from '../components/Title';
import MenuItem from '../components/MenuItem';

export default function MenuScreen(props) {
  // Get safe area insets for device-specific padding
  const insets = useSafeAreaInsets();

  // Menu items data - authentic Toasty Breakfast House items
  const [menuItems] = useState([
    {
      name: "Breakfast of Toasty",
      image: require("../assets/images/breakfastoftoasty.jpeg"),
      price: "$16.99",
      id: 1,
    },
    {
      name: "Steel Cut Oats",
      image: require("../assets/images/steelcutoats.jpg"),
      price: "$9.99",
      id: 2,
    },
    {
      name: "Smoked Salmon Benedict",
      image: require("../assets/images/smokedsalmonbenedict.jpg"),
      price: "$18.99",
      id: 3,
    },
    {
      name: "Chicken & Waffles",
      image: require("../assets/images/chickenandwaffles.jpg"),
      price: "$17.99",
      id: 4,
    },
    {
      name: "Bananas Foster French Toast",
      image: require("../assets/images/bananasfosterfrenchtoast.jpeg"),
      price: "$14.99",
      id: 5,
    },
  ]);

  return (
  <View style={[
    styles.rootContainer,
    {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right

    }

  ]}>

      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
        data={menuItems}
        keyExtractor={(item) => {
          return item.id.toString()
        }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return(
              <MenuItem
              name={itemData.item.name}
              image={itemData.item.image}
              price={itemData.item.price}
              />
            )
        }}

        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Main Menu" onPress={props.onNext}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container - full screen with centered alignment
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },

  // Title section - "Menu" header, takes 1 unit of space
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },

  // Menu items list container - takes most space (7 units), fixed width
  listContainer: {
    flex: 7,
    width: 380
  },

  // "Main Menu" button container - takes 1 unit of space
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150
  }
});
