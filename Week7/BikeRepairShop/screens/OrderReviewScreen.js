// Import necessary components and libraries
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import constants and custom components
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function OrderReviewScreen(props) {
  // Get safe area insets for proper spacing on all devices
  const insets = useSafeAreaInsets();

  // Filter to get only selected services
  const selectedServices = props.services.filter((service) => service.value);

  // Calculate sales tax (6%) and final total
  const salesTax = props.subtotal * 0.06;
  const finalTotal = props.subtotal + salesTax;

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
          <Title>Order Review</Title>
        </View>

        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Service Time */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Service Time</Text>
            <Text style={styles.itemText}>{props.repairTime}</Text>
          </View>

          {/* Services */}
          {selectedServices.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Services Selected</Text>
              {selectedServices.map((service) => (
                <View key={service.id} style={styles.serviceRow}>
                  <Text style={styles.itemText}>• {service.name}</Text>
                  <Text style={styles.itemPrice}>${service.price}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Add-ons */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Additional Options</Text>
            <View style={styles.serviceRow}>
              <Text style={styles.itemText}>
                Newsletter Signup: {props.newsletter ? "Yes" : "No"}
              </Text>
            </View>
            {props.rentalMembership && (
              <View style={styles.serviceRow}>
                <Text style={styles.itemText}>• Rental Membership</Text>
                <Text style={styles.itemPrice}>$100</Text>
              </View>
            )}
            {!props.rentalMembership && (
              <Text style={styles.itemText}>
                Rental Membership: No
              </Text>
            )}
          </View>

          {/* Price Breakdown */}
          <View style={styles.priceSection}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Subtotal:</Text>
              <Text style={styles.priceValue}>${props.subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Sales Tax (6%):</Text>
              <Text style={styles.priceValue}>${salesTax.toFixed(2)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>Final Total:</Text>
              <Text style={styles.totalValue}>${finalTotal.toFixed(2)}</Text>
            </View>
          </View>

          {/* Navigation Button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
  );
}

// Stylesheet for OrderReviewScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: Colors.accent500,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300,
    fontFamily: "Raleway",
    marginBottom: 12,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: Colors.primary300,
    fontFamily: "Raleway",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: Colors.primary300,
    fontFamily: "Raleway",
    fontWeight: "bold",
  },
  priceSection: {
    backgroundColor: Colors.accent500,
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: Colors.primary500,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 18,
    color: Colors.primary300,
    fontFamily: "Raleway",
  },
  priceValue: {
    fontSize: 18,
    color: Colors.primary300,
    fontFamily: "Raleway",
    fontWeight: "bold",
  },
  divider: {
    height: 2,
    backgroundColor: Colors.primary300,
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 24,
    color: Colors.primary500,
    fontFamily: "Raleway",
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 24,
    color: Colors.primary500,
    fontFamily: "Raleway",
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});
