import { FlatList, Text, View } from "react-native";
import CountryGridTile from "../components/CountryGridTile";
import { COUNTRIES } from "../data/dummy-data";

export default function HomeScreen(props) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("DestinationsOverview", {
        countryId: itemData.item.id,
      });
    }

    return (
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}
