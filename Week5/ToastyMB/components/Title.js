// React Native imports
import { Text, StyleSheet } from 'react-native';

// Reusable Title component - used for screen headers
export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    // Title styling - white text on yellow background with shadow
    title: {
        fontSize: 32,
        textAlign: "center",
        fontFamily: "raleway-bold",
        color: "#FFFFFF", // White text for contrast
        letterSpacing: 0.5,

        // Text shadow for depth
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,

        // Container styling
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "rgba(255, 225, 53, 0.9)", // Semi-transparent yellow
        borderRadius: 12,
        lineHeight: 38,
        flexWrap: 'wrap' // Allows text wrapping for long titles
    }
});