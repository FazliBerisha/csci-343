import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  Platform,
  Modal,
  Button,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import { CAMPGROUNDS } from "../data/campgroundData";
import ImageViewModal from "../components/ImageViewModal";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // Date picker states
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  // Guest & campsite states
  const guestCounts = Array.from({ length: 15 }, (_, i) => i + 1);
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  const campsiteCounts = [1, 2, 3, 4, 5];
  const [numCampsites, setNumCampsites] = useState(0);
  const [showNumCampsites, setShowNumCampsites] = useState(false);

  // Campground & result states
  const [results, setResults] = useState("");
  const [selectedCampground, setSelectedCampground] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

  // Handlers
  const onReserveHandler = () => {
    let res = `Check In: ${checkIn.toDateString()}\n`;
    res += `Check Out: ${checkOut.toDateString()}\n`;
    res += `Guests: ${guestCounts[numGuests]}\n`;
    res += `Campsites: ${campsiteCounts[numCampsites]}\n`;
    if (selectedCampground) {
      res += `Campground: ${selectedCampground.name}\n`;
    }
    setResults(res);
  };

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require("../assets/images/Fort Wilderness Preferred Campsite Image.avif")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/* Overlay for readability */}
        <View style={styles.overlay} />

        <View
          style={[
            styles.innerContainer,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
          ]}
        >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Title>Wilderness Campground</Title>
          </View>

          {/* Check-in/out Section */}
          <View
            style={[
              styles.rowContainer,
              { flexDirection: isLandscape ? "row" : "column" },
            ]}
          >
            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Check-in</Text>
              <Pressable onPress={() => setShowCheckIn(true)}>
                <Text style={styles.dateText}>{checkIn.toDateString()}</Text>
              </Pressable>
            </View>

            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Check-out</Text>
              <Pressable onPress={() => setShowCheckOut(true)}>
                <Text style={styles.dateText}>{checkOut.toDateString()}</Text>
              </Pressable>
            </View>
          </View>

          {/* Date Pickers */}
          {showCheckIn && (
            <Modal transparent={true} animationType="slide">
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <DateTimePicker
                    value={checkIn}
                    mode="date"
                    display="spinner"
                    onChange={(e, date) => setCheckIn(date)}
                  />
                  <Button title="Confirm" onPress={() => setShowCheckIn(false)} />
                </View>
              </View>
            </Modal>
          )}

          {showCheckOut && (
            <Modal transparent={true} animationType="slide">
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <DateTimePicker
                    value={checkOut}
                    mode="date"
                    display="spinner"
                    onChange={(e, date) => setCheckOut(date)}
                  />
                  <Button title="Confirm" onPress={() => setShowCheckOut(false)} />
                </View>
              </View>
            </Modal>
          )}

          {/* Guest Picker */}
          <View style={styles.rowContainer}>
            <Text style={styles.dateLabel}>Number of Guests:</Text>
            <Pressable onPress={() => setShowNumGuests(true)}>
              <View style={styles.dateTextContainer}>
                <Text style={styles.dateText}>{guestCounts[numGuests]}</Text>
              </View>
            </Pressable>
          </View>

          <Modal transparent={true} visible={showNumGuests}>
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text style={styles.dateText}>Select Guests</Text>
                <WheelPicker
                  selectedIndex={numGuests}
                  options={guestCounts}
                  onChange={(i) => setNumGuests(i)}
                  containerStyle={{ width: 200 }}
                />
                <Button title="Confirm" onPress={() => setShowNumGuests(false)} />
              </View>
            </View>
          </Modal>

          {/* Campsite Picker */}
          <View style={styles.rowContainer}>
            <Text style={styles.dateLabel}>Number of Campsites:</Text>
            <Pressable onPress={() => setShowNumCampsites(true)}>
              <View style={styles.dateTextContainer}>
                <Text style={styles.dateText}>
                  {campsiteCounts[numCampsites]}
                </Text>
              </View>
            </Pressable>
          </View>

          <Modal transparent={true} visible={showNumCampsites}>
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text style={styles.dateText}>Select Campsites</Text>
                <WheelPicker
                  selectedIndex={numCampsites}
                  options={campsiteCounts}
                  onChange={(i) => setNumCampsites(i)}
                  containerStyle={{ width: 200 }}
                />
                <Button
                  title="Confirm"
                  onPress={() => setShowNumCampsites(false)}
                />
              </View>
            </View>
          </Modal>

          {/* Campground Selection */}
          <View style={styles.campgroundContainer}>
            <Text style={styles.dateLabel}>Select Campground:</Text>
            <View style={styles.campgroundList}>
              {CAMPGROUNDS.slice(0, 2).map((campground) => (
                <Pressable
                  key={campground.id}
                  style={styles.campgroundItem}
                  onPress={() => {
                    setSelectedCampground(campground);
                    setShowImageModal(true);
                  }}
                >
                  <Text style={styles.campgroundName}>{campground.name}</Text>
                  <Text style={styles.campgroundDetails}>
                    {campground.numSites} sites • {campground.rating}★
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Reserve Button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Results */}
          <View style={styles.resultsContainer}>
            <Text style={styles.results}>{results}</Text>
          </View>
        </ScrollView>
        </View>

        <ImageViewModal
          isVisible={showImageModal}
          imageUrl={selectedCampground?.imageUrl}
          onClose={() => setShowImageModal(false)}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContent: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    width: "100%",
  },
  titleContainer: {
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 12,
    backgroundColor: Colors.white,
    padding: 15,
    marginBottom: 20,
    width: Dimensions.get("window").width >= 768 ? 600 : 380,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  rowContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  dateContainer: {
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary500,
    marginVertical: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  dateLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary800,
    marginBottom: 8,
    textShadowColor: Colors.white,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dateText: {
    fontSize: 16,
    color: Colors.primary800,
    fontWeight: "600",
  },
  dateTextContainer: {
    backgroundColor: Colors.lightGray,
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary500,
    minWidth: 80,
    alignItems: "center",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
  campgroundContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  campgroundList: {
    gap: 10,
  },
  campgroundItem: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary500,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  campgroundName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary800,
    marginBottom: 5,
  },
  campgroundDetails: {
    fontSize: 14,
    color: Colors.primary700,
    fontWeight: "500",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  resultsContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: Colors.white,
    width: "90%",
    borderWidth: 2,
    borderColor: Colors.primary500,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  results: {
    textAlign: "center",
    color: Colors.primary800,
    fontFamily: "Hotel",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
});
