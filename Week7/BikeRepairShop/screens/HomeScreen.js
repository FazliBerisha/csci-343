// Import necessary components and libraries
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Import constants and custom components
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function HomeScreen(props) {
  // Get safe area insets for proper spacing on all devices
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
        <View style={styles.titleContainer}>
          <Title>Bicycle Repair Shop</Title>
        </View>

        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          {/* Service Time Options */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Service Time:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.RadioGroup}
              labelStyle={styles.radioGroupLabel}
            />
          </View>

          {/* Service Options */}
          <View style={styles.checkBoxMainContainer}>
            <Text style={styles.checkBoxMainHeader}>Service Options:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={`${item.name} ($${item.price})`}
                    onPress={props.onSetServices.bind(this, item.id)}
                    textStyle={styles.checkBoxLabel}
                    innerIconStyle={styles.checkBoxInnerStyle}
                    iconStyle={styles.checkBoxIconStyle}
                    fillColor={Colors.primary500}
                    style={styles.checkBox}
                  />
                );
              })}
            </View>
          </View>

          {/* Switches */}
          <View style={styles.switchContainer}>
            <View style={styles.switchSubContainer}>
              <Text style={styles.switchLabel}>Newsletter Signup</Text>
              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={
                  props.newsletter ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>

            <View style={styles.switchSubContainer}>
              <Text style={styles.switchLabel}>Rental Membership ($100)</Text>
              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={
                  props.rentalMembership ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
  );
}

// Stylesheet for HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    marginBottom: 15,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderColor: Colors.primary500,
    backgroundColor: Colors.accent500,
    alignSelf: "center",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: Colors.accent500,
    padding: 20,
    borderRadius: 15,
    width: "90%",
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
  radioHeader: {
    fontSize: 24,
    color: Colors.primary300,
    fontFamily: "Raleway",
    marginBottom: 10,
    fontWeight: "bold",
  },
  RadioGroup: {
    paddingBottom: 10,
  },
  radioGroupLabel: {
    fontSize: 16,
    color: Colors.primary300,
    fontFamily: "Raleway",
  },
  checkBoxMainContainer: {
    width: "90%",
    backgroundColor: Colors.accent500,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
  checkBoxMainHeader: {
    fontSize: 24,
    color: Colors.primary300,
    fontFamily: "Raleway",
    marginBottom: 10,
    fontWeight: "bold",
  },
  checkBoxSubContainer: {
    padding: 5,
  },
  checkBox: {
    padding: 3,
  },
  checkBoxLabel: {
    textDecorationLine: "none",
    color: Colors.primary300,
    fontFamily: "Raleway",
    fontSize: 15,
  },
  checkBoxInnerStyle: {
    borderRadius: 3,
    borderColor: Colors.primary500,
  },
  checkBoxIconStyle: {
    borderRadius: 3,
  },
  switchContainer: {
    width: "90%",
    backgroundColor: Colors.accent500,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
  switchSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  switchLabel: {
    color: Colors.primary300,
    fontSize: 18,
    fontFamily: "Raleway",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});
